import argparse
import hashlib
import json
import os
import re
import time
from pathlib import Path

import requests
import yaml


LANGUAGES = [
    {"code": "vi", "prefix": "vi", "name": "Vietnamese"},
    {"code": "fr", "prefix": "fr", "name": "French"},
    {"code": "de", "prefix": "de", "name": "German"},
    {"code": "zh-CN", "prefix": "zh-cn", "name": "Chinese (Simplified)"},
    {"code": "ja", "prefix": "jp", "name": "Japanese"},
    {"code": "it", "prefix": "it", "name": "Italian"},
    {"code": "pt-BR", "prefix": "pt-br", "name": "Portuguese (Brazil)"},
    {"code": "es", "prefix": "es", "name": "Spanish"},
]

LANG_PREFIXES = {lang["prefix"] for lang in LANGUAGES}


PROMPT_SINGLE_TEMPLATE = """Translate the following English text to {LANG_NAME}.
- Preserve ALL HTML tags and structure exactly; do NOT escape HTML; do NOT add or remove tags.
- DO NOT translate anything inside <code></code>, <pre></pre>, or the markers {{md}}...{{endmd}}; keep them exactly as-is (including URLs, code snippets, phone numbers).
- DO NOT translate any text that is already wrapped in double quotes ("..."); keep the English text inside quotes unchanged.
- Product/brand terms that must stay English: "Navi+" (keep exactly).
- Plans/tiers to keep in English: "Starter", "Business", "Elite" (keep exactly, even if written with "gói Starter/Business/Elite").
- Menu-related terms to keep in English: "Tabbar", "Mega menu", "FAB", "Slide menu".
- Return ONLY a valid JSON object with keys: title, description, content. No explanations, no markdown, no code fences.

English text:
[TITLE]
{TITLE}
[DESCRIPTION]
{DESCRIPTION}
[CONTENT]
{CONTENT}
"""


def parse_front_matter(text):
    if not text.startswith("---"):
        return {}, text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}, text
    fm_raw = parts[1]
    body = parts[2].lstrip("\n")
    fm = yaml.safe_load(fm_raw) or {}
    return fm, body


def to_front_matter(fm):
    return yaml.safe_dump(fm, allow_unicode=True, default_flow_style=False, width=1000).strip()


def sha256_text(value):
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def load_cache(path):
    if not path.exists():
        return {}
    try:
        with path.open("r", encoding="utf-8") as f:
            return json.load(f) or {}
    except Exception:
        return {}


def save_cache(path, cache):
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = path.with_suffix(path.suffix + ".tmp")
    with tmp_path.open("w", encoding="utf-8") as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)
    tmp_path.replace(path)


def should_skip_source(path_parts):
    if not path_parts:
        return False
    return path_parts[0] in LANG_PREFIXES


def normalize_permalink(permalink):
    if not permalink:
        return None
    if not permalink.startswith("/"):
        permalink = "/" + permalink
    if not permalink.endswith("/"):
        permalink += "/"
    return permalink


def build_target_permalink(prefix, base_permalink):
    if not prefix:
        return base_permalink
    return f"/{prefix}{base_permalink}"


def docs_relative_from_permalink(permalink):
    m = re.match(r"^/docs/(.+)/$", permalink)
    if not m:
        return None
    return m.group(1)


def apply_md_markers_to_protected_spans(text):
    if not text:
        return text

    marker_open = "{md}"
    marker_close = "{endmd}"

    def wrap(match):
        value = match.group(0)
        if value.startswith(marker_open) and value.endswith(marker_close):
            return value
        return f"{marker_open}{value}{marker_close}"

    fenced_code_re = re.compile(r"```[\s\S]*?```", re.MULTILINE)
    text = fenced_code_re.sub(wrap, text)

    html_pre_re = re.compile(r"<pre\b[\s\S]*?</pre>", re.IGNORECASE)
    text = html_pre_re.sub(wrap, text)

    html_code_re = re.compile(r"<code\b[\s\S]*?</code>", re.IGNORECASE)
    text = html_code_re.sub(wrap, text)

    inline_code_re = re.compile(r"`[^`\n]+`")
    text = inline_code_re.sub(wrap, text)

    quoted_re = re.compile(r"\"(?:\\.|[^\"\\])*\"")
    text = quoted_re.sub(wrap, text)

    return text


def strip_md_markers(text):
    if not text:
        return text
    return text.replace("{md}", "").replace("{endmd}", "")


def openai_translate(api_key, model, target_language_name, payload):
    url = os.environ.get("OPENAI_BASE_URL", "https://api.openai.com/v1/chat/completions")
    timeout_s = int(os.environ.get("OPENAI_REQUEST_TIMEOUT", "120") or "120")

    title_in = apply_md_markers_to_protected_spans((payload.get("title") or "").strip())
    description_in = apply_md_markers_to_protected_spans((payload.get("description") or "").strip())
    content_in = apply_md_markers_to_protected_spans((payload.get("content") or "").rstrip() + "\n")

    prompt = PROMPT_SINGLE_TEMPLATE.format(
        LANG_NAME=target_language_name,
        TITLE=title_in,
        DESCRIPTION=description_in,
        CONTENT=content_in,
    )

    messages = [
        {
            "role": "system",
            "content": "You are a translation engine. Return only valid JSON.",
        },
        {
            "role": "user",
            "content": prompt,
        },
    ]

    last_error = None
    for attempt in range(1, 4):
        try:
            res = requests.post(
                url,
                headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
                json={
                    "model": model,
                    "messages": messages,
                    "temperature": 0,
                    "response_format": {"type": "json_object"},
                },
                timeout=timeout_s,
            )
            res.raise_for_status()
            data = res.json()
            content = data["choices"][0]["message"]["content"]
            parsed = json.loads(content)
            last_error = None
            break
        except Exception as e:
            last_error = e
            if attempt < 3:
                time.sleep(min(8, 2**attempt))
                continue
            raise

    return {
        "title": strip_md_markers((parsed.get("title") or "").strip()),
        "description": strip_md_markers((parsed.get("description") or "").strip()),
        "content": strip_md_markers((parsed.get("content") or "").rstrip()) + "\n",
    }


def mock_translate(lang_prefix, payload):
    prefix_tag = f"[{lang_prefix}]"

    title = (payload.get("title") or "").strip()
    description = (payload.get("description") or "").strip()
    content = (payload.get("content") or "").rstrip("\n")

    def prefix_inline(text):
        if not text:
            return text
        if text.startswith(prefix_tag):
            return text
        return f"{prefix_tag}{text}"

    def prefix_markdown(md):
        if not md:
            return md

        out_lines = []
        in_code_fence = False
        fence_re = re.compile(r"^\s*```")

        for line in md.splitlines():
            if fence_re.match(line):
                in_code_fence = not in_code_fence
                out_lines.append(line)
                continue

            if in_code_fence:
                out_lines.append(line)
                continue

            if line.strip() == "":
                out_lines.append(line)
                continue

            if line.lstrip().startswith("<"):
                out_lines.append(line)
                continue

            m = re.match(r"^(\s{0,3}#{1,6}\s+)(.*)$", line)
            if m:
                out_lines.append(m.group(1) + f"{prefix_tag} " + m.group(2))
                continue

            m = re.match(r"^(\s*[-*+]\s+)(.*)$", line)
            if m:
                out_lines.append(m.group(1) + f"{prefix_tag} " + m.group(2))
                continue

            m = re.match(r"^(\s*\d+\.\s+)(.*)$", line)
            if m:
                out_lines.append(m.group(1) + f"{prefix_tag} " + m.group(2))
                continue

            m = re.match(r"^(\s*>\s?)(.*)$", line)
            if m:
                out_lines.append(m.group(1) + f"{prefix_tag} " + m.group(2))
                continue

            out_lines.append(f"{prefix_tag} " + line)

        return "\n".join(out_lines) + "\n"

    return {
        "title": prefix_inline(title),
        "description": prefix_inline(description) if description else description,
        "content": prefix_markdown(content),
    }



def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-dir", default="_docs")
    parser.add_argument("--cache-file", default=".i18n-cache.json")
    parser.add_argument("--languages", default="vi,fr,de,zh-cn,jp,it,pt-br,es")
    parser.add_argument("--model", default=os.environ.get("OPENAI_MODEL", "gpt-4o-mini"))
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--max-pages", type=int, default=0)
    parser.add_argument("--mock", action="store_true")
    parser.add_argument("--sleep-ms", type=int, default=0)
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--checkpoint-every", type=int, default=1)
    args = parser.parse_args()

    api_key = os.environ.get("OPENAI_API_KEY", "").strip()
    if not api_key and not args.dry_run and not args.mock:
        raise SystemExit("OPENAI_API_KEY is missing")

    selected_prefixes = [p.strip() for p in args.languages.split(",") if p.strip()]
    selected_langs = [lang for lang in LANGUAGES if lang["prefix"] in set(selected_prefixes)]

    source_dir = Path(args.source_dir)
    cache_path = Path(args.cache_file)
    cache = load_cache(cache_path)

    prompt_version = hashlib.sha256(PROMPT_SINGLE_TEMPLATE.encode("utf-8")).hexdigest()[:12]
    engine = "mock" if args.mock else f"openai:{args.model}:{prompt_version}"

    source_files = sorted(source_dir.glob("**/index.md"))
    tasks = []
    changed = 0
    skipped = 0

    for src_path in source_files:
        rel = src_path.relative_to(source_dir)
        if should_skip_source(rel.parts):
            continue

        raw = src_path.read_text(encoding="utf-8")
        fm, body = parse_front_matter(raw)
        permalink = normalize_permalink(fm.get("permalink"))
        if not permalink or not permalink.startswith("/docs/"):
            continue

        title = (fm.get("title") or "").strip()
        description = (fm.get("description") or "").strip()
        src_hash = sha256_text(title + "\n" + description + "\n" + body)

        docs_rel = docs_relative_from_permalink(permalink)
        if not docs_rel:
            continue

        for lang in selected_langs:
            prefix = lang["prefix"]
            out_dir = source_dir / prefix / docs_rel
            out_path = out_dir / "index.md"

            key = f"{rel.as_posix()}::{prefix}"
            cached = cache.get(key)
            if (
                not args.force
                and cached
                and cached.get("src_hash") == src_hash
                and cached.get("engine") == engine
                and out_path.exists()
            ):
                skipped += 1
                continue

            tasks.append(
                {
                    "rel_posix": rel.as_posix(),
                    "layout": fm.get("layout", "default"),
                    "title": title,
                    "description": description,
                    "body": body,
                    "permalink": permalink,
                    "docs_rel": docs_rel,
                    "lang_name": lang["name"],
                    "lang_prefix": prefix,
                    "src_hash": src_hash,
                }
            )

    total = len(tasks)
    if args.dry_run:
        print(json.dumps({"pending": total, "skipped": skipped}, ensure_ascii=False))
        return

    if args.max_pages and args.max_pages > 0:
        tasks = tasks[: args.max_pages]

    started = time.time()

    for i, task in enumerate(tasks, start=1):
        prefix = task["lang_prefix"]
        out_dir = source_dir / prefix / task["docs_rel"]
        out_path = out_dir / "index.md"
        key = f"{task['rel_posix']}::{prefix}"

        print(f"[{i}/{total}] Translating {prefix} {task['permalink']} -> {out_path.as_posix()}", flush=True)

        payload = {"title": task["title"], "description": task["description"], "content": task["body"]}
        if args.mock:
            translated = mock_translate(prefix, payload)
        else:
            translated = openai_translate(
                api_key=api_key,
                model=args.model,
                target_language_name=task["lang_name"],
                payload=payload,
            )

        out_fm = {
            "layout": task["layout"],
            "title": translated["title"] or task["title"],
            "description": translated["description"] or task["description"],
            "permalink": build_target_permalink(prefix, task["permalink"]),
            "lang": prefix,
        }

        out_dir.mkdir(parents=True, exist_ok=True)
        out_path.write_text(f"---\n{to_front_matter(out_fm)}\n---\n{translated['content']}", encoding="utf-8")

        cache[key] = {
            "src_hash": task["src_hash"],
            "engine": engine,
            "updated_at": int(time.time()),
        }
        changed += 1

        if args.checkpoint_every and args.checkpoint_every > 0 and (i % args.checkpoint_every) == 0:
            save_cache(cache_path, cache)

        if args.sleep_ms and args.sleep_ms > 0:
            time.sleep(args.sleep_ms / 1000)

    elapsed_s = round(time.time() - started, 2)

    save_cache(cache_path, cache)
    print(json.dumps({"translated": changed, "skipped": skipped, "elapsed_s": elapsed_s}, ensure_ascii=False))


if __name__ == "__main__":
    main()
