import argparse
import os
import re
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests


DEFAULT_NAV_URL = "https://help.shopifas.com/manual/website/help.naviplus.io.md"
SOURCE_BASE_PATH = "/manual/website/help.naviplus.io/"
INCLUDE_RE = re.compile(r"\{md\}<?([^<>\{]+?)\{endmd\}>?", re.IGNORECASE)
LINK_RE = re.compile(r"\[[^\]]+\]\(([^)\s]+\.md)(?:\s+\"[^\"]*\")?\)")


def url_to_source_path(url, source_dir):
    parsed = urlparse(url)
    path = parsed.path

    if path == "/manual/website/help.naviplus.io.md":
        return source_dir / "help.naviplus.io.md"

    if SOURCE_BASE_PATH in path:
        rel = path.split(SOURCE_BASE_PATH, 1)[1]
        return source_dir / rel

    return None


def same_source_url(url):
    parsed = urlparse(url)
    return parsed.netloc == "help.shopifas.com" and (
        parsed.path == "/manual/website/help.naviplus.io.md" or SOURCE_BASE_PATH in parsed.path
    )


def download_text(url, timeout=60, attempts=4):
    last_error = None
    for attempt in range(1, attempts + 1):
        try:
            response = requests.get(url, timeout=timeout)
            response.raise_for_status()
            return response.text
        except Exception as exc:
            last_error = exc
            if attempt < attempts:
                time.sleep(min(10, 2 ** attempt))
    raise last_error


def discover_links(markdown, base_url):
    urls = set()

    for match in LINK_RE.finditer(markdown):
        urls.add(urljoin(base_url, match.group(1)))

    for match in INCLUDE_RE.finditer(markdown):
        raw = match.group(1).strip()
        url = urljoin(base_url, raw)
        if urlparse(url).path.endswith(".md"):
            urls.add(url)

    return urls


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--nav-url", default=DEFAULT_NAV_URL)
    parser.add_argument("--source-dir", default="_source_md")
    parser.add_argument("--timeout", type=int, default=60)
    args = parser.parse_args()

    source_dir = Path(args.source_dir)
    source_dir.mkdir(parents=True, exist_ok=True)

    pending = [args.nav_url]
    seen = set()
    downloaded = 0
    skipped_external = 0
    failed = []

    while pending:
        url = pending.pop(0)
        if url in seen:
            continue
        seen.add(url)

        if not same_source_url(url):
            skipped_external += 1
            continue

        out_path = url_to_source_path(url, source_dir)
        if out_path is None:
            skipped_external += 1
            continue

        try:
            text = download_text(url, timeout=args.timeout)
        except Exception as exc:
            failed.append((url, str(exc)))
            continue

        out_path.parent.mkdir(parents=True, exist_ok=True)
        old_text = out_path.read_text(encoding="utf-8") if out_path.exists() else None
        if old_text != text:
            out_path.write_text(text, encoding="utf-8")
            downloaded += 1

        base_url = os.path.dirname(url) + "/"
        for linked_url in sorted(discover_links(text, base_url)):
            if linked_url not in seen:
                pending.append(linked_url)

    print(
        {
            "source_dir": str(source_dir),
            "seen": len(seen),
            "written_or_updated": downloaded,
            "skipped_external": skipped_external,
            "failed": len(failed),
        }
    )

    if failed:
        for url, error in failed:
            print(f"FAILED {url}: {error}")
        raise SystemExit(1)


if __name__ == "__main__":
    main()
