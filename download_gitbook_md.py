import re
import os
import requests
from urllib.parse import urljoin

base_url = "https://help.shopifas.com"
main_md_file_path = "help.naviplus.io.md"
output_dir = "_temp_gitbook_content"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

def download_file(url, path):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        with open(path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print("Downloaded: {} to {}".format(url, path))
    except requests.exceptions.RequestException as e:
        print("Error downloading {}: {}".format(url, e))

with open(main_md_file_path, 'r') as f:
    content = f.read()

# Regex to find Markdown links like [Text](/path/to/file.md)
# It captures the path part of the link
markdown_links = re.findall(r'\[.*?\]\((/manual/website/help\.naviplus\.io/[^)]+\.md)\)', content)

# Remove duplicates while preserving order
unique_markdown_links = list(dict.fromkeys(markdown_links))

print("Found {} unique Markdown links.".format(len(unique_markdown_links)))

for link_path in unique_markdown_links:
    full_url = urljoin(base_url, link_path)
    
    # The GitBook path starts with /manual/website/help.naviplus.io
    # We want to keep paths relative to that, so remove the base path segments
    # e.g., /manual/website/help.naviplus.io/how/optimize-navi+-menu-loading-speed-slide-and-mega-menus.md
    # should become how/optimize-navi+-menu-loading-speed-slide-and-mega-menus.md
    cleaned_path = link_path.replace("/manual/website/help.naviplus.io/", "")
    
    # For the root-level files like how.md, it should be placed in output_dir/how.md
    # For nested files, it should create subdirectories
    final_save_path = os.path.join(output_dir, cleaned_path)
    save_dir = os.path.dirname(final_save_path)
    
    if not os.path.exists(save_dir):
        os.makedirs(save_dir)
        
    download_file(full_url, final_save_path)
