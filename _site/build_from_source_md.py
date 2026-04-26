import argparse
import os
from pathlib import Path
from urllib.parse import urljoin, urlparse

import getMD


SOURCE_BASE_PATH = "/manual/website/help.naviplus.io/"
DEFAULT_NAV_URL = "https://help.shopifas.com/manual/website/help.naviplus.io.md"


def url_to_source_path(url, source_dir):
    parsed = urlparse(url)
    path = parsed.path

    if path == "/manual/website/help.naviplus.io.md":
        return source_dir / "help.naviplus.io.md"

    if SOURCE_BASE_PATH in path:
        rel = path.split(SOURCE_BASE_PATH, 1)[1]
        return source_dir / rel

    return None


def read_source_markdown(url, source_dir):
    source_path = url_to_source_path(url, source_dir)
    if source_path and source_path.exists():
        return source_path.read_text(encoding="utf-8")
    return getMD.download_markdown_content(url)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-dir", default="_source_md")
    parser.add_argument("--nav-url", default=DEFAULT_NAV_URL)
    args = parser.parse_args()

    source_dir = Path(args.source_dir)
    nav_path = source_dir / "help.naviplus.io.md"
    if not nav_path.exists():
        raise SystemExit(f"Missing source navigation file: {nav_path}")

    getMD.LOCAL_SOURCE_DIR = str(source_dir)
    getMD.clear_old_data()

    main_navigation_md_content = nav_path.read_text(encoding="utf-8")
    navigation_structure, all_content_urls_list = getMD.parse_navigation_markdown(
        main_navigation_md_content,
        os.path.dirname(args.nav_url),
    )

    all_content_urls = set(all_content_urls_list)
    all_content_urls.add(args.nav_url)

    print(f"Found {len(all_content_urls)} markdown content files to process from {source_dir}.")

    for url_to_process in sorted(all_content_urls):
        print(f"Processing content file: {url_to_process}")
        content_md = read_source_markdown(url_to_process, source_dir)
        if content_md:
            getMD.process_and_save_markdown(content_md, url_to_process, getMD.OUTPUT_DIR)
        else:
            print(f"Skipping processing for {url_to_process} due to missing source content.")

    getMD.update_markdown_links()
    getMD.generate_sidebar_navigation(navigation_structure)
    getMD.generate_sitemap_html(navigation_structure)
    print("Local source build completed.")


if __name__ == "__main__":
    main()
