import argparse
from pathlib import Path

import yaml


LANG_PREFIXES = ["vi", "fr", "de", "zh-cn", "jp", "it", "pt-br", "es"]


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


def docs_rel_from_url(url):
    if not url:
        return None
    if not url.startswith("/docs/"):
        return None
    if not url.endswith("/"):
        url += "/"
    rel = url[len("/docs/") :]
    if rel.endswith("/"):
        rel = rel[:-1]
    return rel


def translated_title_for_url(docs_dir, lang_prefix, url):
    rel = docs_rel_from_url(url)
    if not rel:
        return None
    p = docs_dir / lang_prefix / rel / "index.md"
    if not p.exists():
        return None
    fm, _ = parse_front_matter(p.read_text(encoding="utf-8"))
    title = (fm.get("title") or "").strip()
    return title or None


def localize_node(node, docs_dir, lang_prefix):
    if isinstance(node, list):
        return [localize_node(item, docs_dir, lang_prefix) for item in node]

    if not isinstance(node, dict):
        return node

    out = dict(node)
    title = out.get("title")
    if title and title != "line":
        url = out.get("url")
        translated = translated_title_for_url(docs_dir, lang_prefix, url)
        if translated:
            out["title"] = translated

    children = out.get("children")
    if children:
        out["children"] = localize_node(children, docs_dir, lang_prefix)

    return out


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--docs-dir", default="_docs")
    parser.add_argument("--nav-in", default="_data/navigation.yml")
    parser.add_argument("--data-dir", default="_data")
    parser.add_argument("--languages", default=",".join(LANG_PREFIXES))
    args = parser.parse_args()

    docs_dir = Path(args.docs_dir)
    nav_in = Path(args.nav_in)
    data_dir = Path(args.data_dir)

    nav = yaml.safe_load(nav_in.read_text(encoding="utf-8"))
    prefixes = [p.strip() for p in args.languages.split(",") if p.strip()]

    for prefix in prefixes:
        localized = localize_node(nav, docs_dir, prefix)
        out_path = data_dir / f"navigation_{prefix}.yml"
        out_path.write_text(yaml.safe_dump(localized, allow_unicode=True, sort_keys=False, width=1000), encoding="utf-8")


if __name__ == "__main__":
    main()

