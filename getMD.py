import requests
import os
import re
import yaml
import json
import shutil
from urllib.parse import urljoin, urlparse

# --- Configuration ---
# The direct URL to the main Markdown file which serves as the navigation structure
MAIN_NAVIGATION_MD_URL = "https://help.shopifas.com/manual/website/help.naviplus.io.md"
SOURCE_BASE_PATH_IN_URL = "/manual/website/help.naviplus.io/" # Base path to strip from source URLs

OUTPUT_DIR = "_docs"
TEMP_CONTENT_DIR = "_temp_content" # Renamed for clarity, no longer specific to GitBook
NAVIGATION_YML_PATH = "_data/navigation.yml"
NAVBAR_HTML_PATH = "_includes/navbar.html"
DEFAULT_LAYOUT_HTML_PATH = "_layouts/default.html"

# --- Utility Functions ---
def clean_directory(path):
    if os.path.exists(path):
        shutil.rmtree(path)
    os.makedirs(path, exist_ok=True)

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s_-]+', '-', text)
    return text.strip('-')

def get_page_url_path(path_in_docs_dir):
    # path_in_docs_dir is like "category/page-title" or "index"
    if not path_in_docs_dir or path_in_docs_dir == "index":
        return "/"
    
    # Prefix with /docs/ and ensure trailing slash
    return "/docs/" + path_in_docs_dir.replace(os.sep, "/") + "/"

def download_file(url, local_path):
    """Downloads a file from a given URL to a local path."""
    print(f"  -> Downloading: {url}")
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status() # Raise an exception for HTTP errors
        os.makedirs(os.path.dirname(local_path), exist_ok=True) # Ensure parent dir exists
        with open(local_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"  ✅ Downloaded: {local_path}")
        return True
    except requests.exceptions.RequestException as e:
        print(f"  ❌ Error downloading {url} to {local_path}: {e}")
        return False

# --- Main Logic Functions ---

def clear_old_data():
    """Cleans up old generated markdown files and temporary content."""
    print("Clearing old data...")
    clean_directory(OUTPUT_DIR)
    clean_directory(TEMP_CONTENT_DIR)
    print("Old data cleared.")

def download_markdown_content(url):
    """Downloads a Markdown file from the provided URL and returns its content."""
    print(f"Downloading Markdown content from: {url}...")
    # Construct local path from the URL, but ensure it's within TEMP_CONTENT_DIR
    # Use the full path components from the URL after the domain to preserve structure
    parsed_url = urlparse(url)
    relative_path_from_domain = parsed_url.path.lstrip('/')
    local_path = os.path.join(TEMP_CONTENT_DIR, relative_path_from_domain)
    
    if download_file(url, local_path):
        with open(local_path, 'r', encoding='utf-8') as f:
            return f.read()
    return None

def parse_navigation_markdown(markdown_content, base_url):
    """
    Parses the navigation markdown file to extract hierarchical navigation data
    and a list of all unique markdown content URLs, based on URL paths.
    """
    print("Parsing navigation markdown based on URL paths...")
    navigation_data = [] # This will be the root list of navigation items
    all_content_urls = set() # To store all unique content markdown URLs

    lines = markdown_content.splitlines()
    
    # Store items by their processed path to easily find parents
    # Key: "how/optimize-navi+" Value: {'title': 'Optimize Navi+', 'url': '/docs/how/optimize-navi+/', 'children': []}
    processed_items_by_path = {}

    link_pattern = re.compile(r'^\s*-\s*\[(?P<title>[^\]]+)\]\((?P<link_path>[^)]+\.md)\)')

    # First pass: Collect all items and their direct properties
    raw_items = []
    for line in lines:
        match = link_pattern.match(line)
        if match:
            title = match.group('title')
            link_path_raw = match.group('link_path')

            full_content_url = urljoin(base_url, link_path_raw)
            all_content_urls.add(full_content_url)

            # Derive relative path in source, e.g., "how/optimize-navi+-menu-loading-speed"
            relative_path_in_source = ""
            if link_path_raw.startswith(SOURCE_BASE_PATH_IN_URL):
                relative_path_in_source = link_path_raw[len(SOURCE_BASE_PATH_IN_URL):-len(".md")]
            else:
                # Fallback if path doesn't start with expected base
                # This needs to be robust for the root case as well
                path_after_domain = urlparse(link_path_raw).path.lstrip('/')
                if path_after_domain.startswith('manual/website/help.naviplus.io/'):
                    relative_path_in_source = path_after_domain[len('manual/website/help.naviplus.io/'):-len(".md")]
                else:
                    relative_path_in_source = os.path.splitext(path_after_domain)[0] # Fallback to filename slug

            # Ensure it's slugified for consistent processing
            processed_path = "/".join([slugify(part) for part in relative_path_in_source.split('/') if part])
            
            # Construct Jekyll permalink
            if not processed_path:
                jekyll_permalink = "/"
            elif processed_path == "index": # If it's a root index
                jekyll_permalink = "/"
            else:
                jekyll_permalink = "/docs/" + processed_path + "/"
            
            raw_items.append({
                "title": title,
                "url": jekyll_permalink,
                "processed_path": processed_path, # Store for hierarchy building
                "children": [] # Initialize children list
            })

    # Second pass: Build the hierarchy
    # Sort raw_items by processed_path length to process parents before children
    raw_items.sort(key=lambda x: len(x["processed_path"].split('/')))

    for item in raw_items:
        path_segments = item["processed_path"].split('/')
        
        if len(path_segments) == 1: # Top-level item
            navigation_data.append(item)
            processed_items_by_path[item["processed_path"]] = item
        else: # Child item
            parent_path_segments = path_segments[:-1]
            parent_processed_path = "/".join(parent_path_segments)
            
            if parent_processed_path in processed_items_by_path:
                parent_item = processed_items_by_path[parent_processed_path]
                if "children" not in parent_item:
                    parent_item["children"] = [] # Ensure children list exists
                parent_item["children"].append(item)
                processed_items_by_path[item["processed_path"]] = item
            else:
                # This case should ideally not happen if paths are well-formed and sorted
                # It means a child appeared before its parent was processed or parent is missing
                # For now, append to root if parent is missing. Can be refined.
                print(f"Warning: Parent for {item['title']} ({item['processed_path']}) not found. Appending to root.")
                navigation_data.append(item)
                processed_items_by_path[item["processed_path"]] = item

    # After building the hierarchy, clean up empty children lists
    def remove_empty_children(items):
        for item in items:
            if "children" in item and not item["children"]:
                del item["children"]
            elif "children" in item and item["children"]:
                remove_empty_children(item["children"])
    
    remove_empty_children(navigation_data)

    print("Navigation markdown parsed.")
    return navigation_data, list(all_content_urls)

def process_and_save_markdown(raw_md_content, original_url, output_base_dir):
    """
    Processes Markdown content (adds front matter) and saves it to the _docs structure.
    original_url is used to derive the permalink and output path.
    """
    parsed_url = urlparse(original_url)
    # The part of the path after '/manual/website/help.naviplus.io/'
    # This gives us the relative path like "how/optimize-navi+-menu-loading-speed-slide-and-mega-menus.md"
    if SOURCE_BASE_PATH_IN_URL in parsed_url.path:
        relative_path_in_source_full = parsed_url.path.split(SOURCE_BASE_PATH_IN_URL)[-1]
    else:
        # Fallback for root or unexpected paths
        relative_path_in_source_full = parsed_url.path.lstrip('/')

    # CRITICAL FIX: Ensure relative_path_in_source never starts with a slash
    relative_path_in_source_full = relative_path_in_source_full.lstrip('/')
    
    file_slug = os.path.splitext(relative_path_in_source_full)[0] # Remove .md

    # Construct Jekyll permalink (e.g., /docs/category/page-title/)
    if file_slug == "" or file_slug == "index":
        jekyll_permalink = "/"
        path_in_docs_dir = "index" # For output folder structure
    else:
        # Split by / and then join with / for permalink
        permalink_parts = [slugify(part) for part in file_slug.split(os.sep) if part]
        jekyll_permalink = "/docs/" + "/".join(permalink_parts) + "/"
        path_in_docs_dir = os.path.join(*permalink_parts) # For output folder structure

    # Construct target directory path: _docs/category/page-title/
    target_dir = os.path.join(output_base_dir, path_in_docs_dir)
    os.makedirs(target_dir, exist_ok=True)
    final_output_path = os.path.join(target_dir, "index.md") # Each page will be index.md in its folder

    print(f"  -> Processing and saving to: {final_output_path} (Permalink: {jekyll_permalink})")

    # Extract title from H1 or fallback
    title_match = re.search(r'^#\s*(.+)', raw_md_content, re.MULTILINE)
    title = title_match.group(1).strip() if title_match else os.path.basename(file_slug.replace('-', ' ')).title()

    # Extract description from the first paragraph, or use a default
    description_match = re.search(r'^(?!#).*?([^#\n]+)', raw_md_content, re.MULTILINE)
    description = description_match.group(1).strip() if description_match else f"Documentation for {title}"

    front_matter = {
        "layout": "default",
        "title": title,
        "description": description,
        "permalink": jekyll_permalink
    }
    front_matter_str = yaml.dump(front_matter, allow_unicode=True, default_flow_style=False)
    
    final_content = f"---\n{front_matter_str}---\n{raw_md_content}"

    with open(final_output_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
    print(f"  ✅ Saved processed Markdown to {final_output_path}")

def update_markdown_links():
    """Updates relative links in markdown files to be Jekyll-compatible."""
    print("Updating markdown links...")
    for root, _, files in os.walk(OUTPUT_DIR):
        for file in files:
            if file.endswith(".md"):
                filepath = os.path.join(root, file)
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()

                # Regex to find markdown links [text](link) and images ![alt](link)
                # It handles both relative paths like ../../page and /assets/images/image.png
                # We need to capture the full link part.
                updated_content = re.sub(
                    r'(\]\(|!\[.*?\]\()(\.\.?\/[^)]*\.md|\.\.?\/[^)]*|[^)]*\.(png|jpg|jpeg|gif|svg|webp|mp4|mov))',
                    # Group 1: ]( or ![alt](
                    # Group 2: The actual link, which can be relative or an asset
                    lambda match: replace_link_callback(match, filepath, OUTPUT_DIR),
                    content
                )
                
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(updated_content)
    print("Markdown links updated.")

def replace_link_callback(match, current_filepath, base_output_dir):
    prefix = match.group(1) # ]( or ![alt](
    link = match.group(2)   # The actual link

    # Handle internal .md links
    if link.endswith(".md"):
        # Remove .md extension and convert to Jekyll-style permalink
        relative_path_to_md = os.path.relpath(os.path.join(os.path.dirname(current_filepath), link), base_output_dir)
        # Handle index.md explicitly by removing it from the path
        if relative_path_to_md.endswith("index.md"):
            jekyll_link = "/" + relative_path_to_md[:-len("index.md")].replace("\\", "/").strip("/")
        else:
            jekyll_link = "/" + relative_path_to_md[:-len(".md")].replace("\\", "/")

        # Ensure permalinks start with /docs/ if not root
        if not jekyll_link.startswith("/docs/") and jekyll_link != "/":
            parts = jekyll_link.strip('/').split('/')
            jekyll_link = '/docs/' + '/'.join(slugify(p) for p in parts) + '/'
        elif jekyll_link != "/":
             # For links already starting with /docs/, ensure trailing slash
            jekyll_link = jekyll_link.strip('/') + '/'
        
        return f"{prefix}{jekyll_link}"
    
    # Handle image/asset links (assuming they are in /assets/images or similar in Jekyll)
    # This is a simplification; a more robust solution might download assets
    if re.match(r'^(\.\.?\/)?assets\/', link, re.IGNORECASE) or re.match(r'^\/assets\/', link, re.IGNORECASE):
        # Already seems like an asset link, just ensure it's absolute from root
        if link.startswith(".."):
            # Resolve relative asset paths to absolute paths from the Jekyll root
            current_dir_rel_to_output = os.path.relpath(os.path.dirname(current_filepath), base_output_dir)
            resolved_link = os.path.normpath(os.path.join("/", current_dir_rel_to_output, link)).replace("\\", "/")
            return f"{prefix}{resolved_link}"
        else:
            return f"{prefix}{link}" # Already absolute or relative from root that Jekyll can handle

    # For other relative links that are not .md or known assets, convert them to absolute based on current file
    # This might need refinement based on how GitBook handles its internal asset paths
    if not link.startswith("http") and not link.startswith("#") and not link.startswith("/"):
        current_dir_rel_to_output = os.path.relpath(os.path.dirname(current_filepath), base_output_dir)
        resolved_link = os.path.normpath(os.path.join("/", current_dir_rel_to_output, link)).replace("\\", "/")
        return f"{prefix}{resolved_link}"

    return f"{prefix}{link}" # Return unchanged if not a relative markdown link or asset

def generate_sidebar_navigation(navigation_data):
    """Generates _data/navigation.yml based on the provided hierarchical navigation data."""
    print("Generating sidebar navigation from parsed data...")
    os.makedirs(os.path.dirname(NAVIGATION_YML_PATH), exist_ok=True)
    with open(NAVIGATION_YML_PATH, "w", encoding="utf-8") as f:
        yaml.dump(navigation_data, f, allow_unicode=True, indent=2)
    
    print(f"Sidebar navigation generated and saved to {NAVIGATION_YML_PATH}")

def main():
    """Orchestrates the entire process of downloading and preparing content."""
    clear_old_data()
    
    # 1. Download the main navigation markdown file
    main_navigation_md_content = download_markdown_content(MAIN_NAVIGATION_MD_URL)
    if main_navigation_md_content:
        # 2. Parse the navigation markdown to get structure and all content URLs
        navigation_structure, all_content_urls_list = parse_navigation_markdown(main_navigation_md_content, os.path.dirname(MAIN_NAVIGATION_MD_URL))
        
        all_content_urls = set(all_content_urls_list) # Convert the list to a set
        # Add the main navigation markdown itself to the list of content to be processed
        all_content_urls.add(MAIN_NAVIGATION_MD_URL)

        print(f"Found {len(all_content_urls)} unique markdown content files to process.")
        
        # 3. Download and process all content markdown files
        for url_to_process in all_content_urls:
            print(f"Processing content file: {url_to_process}")
            content_md = download_markdown_content(url_to_process)
            if content_md:
                process_and_save_markdown(content_md, url_to_process, OUTPUT_DIR)
            else:
                print(f"Skipping processing for {url_to_process} due to download error.")

        # 4. Update internal links in all processed markdown files
        update_markdown_links()

        # 5. Generate _data/navigation.yml from the parsed structure
        generate_sidebar_navigation(navigation_structure)
        
    else:
        print("Failed to download main navigation Markdown content. Aborting.")
        
    print("Content update process completed.")

if __name__ == "__main__":
    main()
