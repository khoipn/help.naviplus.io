import re
import os
import shutil # Import shutil for rmtree
import requests
from urllib.parse import urljoin

base_url = "https://help.shopifas.com"
main_md_path = "/manual/website/help.naviplus.io.md"
output_docs_dir = "_docs"
output_temp_dir = "_temp_gitbook_content" # Temporary directory for raw downloads

# --- NEW: Clean previous output directories ---
if os.path.exists(output_docs_dir):
    shutil.rmtree(output_docs_dir)
    print(f"Cleaned existing directory: {output_docs_dir}")
if os.path.exists(output_temp_dir):
    shutil.rmtree(output_temp_dir)
    print(f"Cleaned existing directory: {output_temp_dir}")
# --- END NEW ---

# Create directories if they don't exist
os.makedirs(output_docs_dir, exist_ok=True)
os.makedirs(output_temp_dir, exist_ok=True)

def download_file(url, local_path):
    """Downloads a file from a given URL to a local path."""
    print(f"  -> Downloading: {url}")
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status() # Raise an exception for HTTP errors
        with open(local_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"  ✅ Downloaded: {local_path}")
        return True
    except requests.exceptions.RequestException as e:
        print(f"  ❌ Error downloading {url} to {local_path}: {e}")
        return False

def clean_filename(filename):
    """Cleans a filename to be filesystem-friendly."""
    return re.sub(r'[^\w\-. ]', '_', filename)

def process_and_save_markdown(raw_md_content, original_link_path):
    """Processes Markdown content (adds front matter, updates links) and saves it."""
    # Determine the target path in _docs
    # Ensure relative_path_in_gitbook does not start with a leading slash
    relative_path_in_gitbook = original_link_path.replace("/manual/website/help.naviplus.io/", "").lstrip('/')
    
    if relative_path_in_gitbook == "help.naviplus.io.md":
        target_dir = output_docs_dir
        filename_for_output = "index.md"
        jekyll_permalink_suffix = "" 
    else:
        base_name = os.path.splitext(relative_path_in_gitbook)[0]
        target_dir = os.path.join(output_docs_dir, base_name)
        filename_for_output = "index.md"
        jekyll_permalink_suffix = f"{base_name}/"

    os.makedirs(target_dir, exist_ok=True)
    final_output_path = os.path.join(target_dir, filename_for_output)
    
    print(f"  -> Processing and saving to: {final_output_path}")

    title_match = re.search(r'#\s*(.+)', raw_md_content)
    title = title_match.group(1).strip() if title_match else os.path.basename(os.path.splitext(relative_path_in_gitbook)[0]).replace('-', ' ').title()

    front_matter = f"""---
layout: default
title: {title}
permalink: /docs/{jekyll_permalink_suffix}
---

"""
    # Replace GitBook-style {% embed %} tags with {% _embed %}
    # This regex is specifically for YouTube embeds as seen in the problematic file
    embed_regex = r'{%% embed url="([^"]+)" %%}'
    processed_content = re.sub(embed_regex, r'{%% _embed url="\1" %%}', raw_md_content, flags=re.IGNORECASE)

    # Replace GitBook-style links with Jekyll permalinks
    processed_content = re.sub(
        r'(/manual/website/help\.naviplus\.io)(/.*?\.md)',
        lambda m: "/docs" + m.group(2).replace(".md", "/"),
        processed_content # Apply to content AFTER embed replacement
    )

    # Prepend front matter to content
    final_content = front_matter + processed_content

    with open(final_output_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
    print(f"  ✅ Saved processed Markdown to {final_output_path}")

def generate_navigation_data(main_md_content, downloaded_links_map):
    """Generates _data/navigation.yml based on the main Markdown file and downloaded links."""
    print("Generating _data/navigation.yml...")
    nav_data = []
    
    link_pattern = re.compile(r'^(\s*)-\s*\[([^\]]+)\]\((/manual/website/help\.naviplus\.io/[^)]+\.md)\)', re.MULTILINE)
    
    lines = main_md_content.splitlines()
    
    current_nesting = [] 

    for line in lines:
        match = link_pattern.match(line)
        if match:
            indent_str, title, link_path = match.groups()
            indent_level = len(indent_str)
            
            # Normalize link_path for Jekyll permalink to match the new structure
            relative_path_in_gitbook_for_nav = link_path.replace("/manual/website/help.naviplus.io/", "")
            if relative_path_in_gitbook_for_nav == "help.naviplus.io.md":
                jekyll_permalink = "/docs/"
            else:
                base_name_for_nav = os.path.splitext(relative_path_in_gitbook_for_nav)[0]
                jekyll_permalink = f"/docs/{base_name_for_nav}/"

            new_item = {
                "title": title,
                "url": jekyll_permalink
            }
            
            while current_nesting and indent_level <= current_nesting[-1][0]:
                current_nesting.pop()
            
            if current_nesting:
                current_parent_list = current_nesting[-1][1]
                if "children" not in current_parent_list:
                    current_parent_list["children"] = []
                current_parent_list["children"].append(new_item)
            else:
                nav_data.append(new_item)
            
            current_nesting.append((indent_level, new_item))
            
        else:
            while current_nesting and not line.strip().startswith('-'):
                current_nesting.pop()

    nav_output_path = "_data/navigation.yml"
    try:
        import yaml
        with open(nav_output_path, 'w', encoding='utf-8') as f:
            yaml.dump(nav_data, f, allow_unicode=True, indent=2)
        print(f"✅ Generated {nav_output_path}")
    except ImportError:
        print("❌ PyYAML is not installed. Cannot generate navigation.yml. Please install it: pip install PyYAML")
    except Exception as e:
        print(f"❌ Error generating navigation.yml: {e}")

if __name__ == "__main__":
    print(f"--- Starting GitBook Content Downloader ---")
    
    main_md_full_url = urljoin(base_url, main_md_path)
    main_md_local_temp_path = os.path.join(output_temp_dir, os.path.basename(main_md_path))

    # Step 1: Download the main Markdown file
    print(f"1. Downloading main Markdown file from: {main_md_full_url}")
    if download_file(main_md_full_url, main_md_local_temp_path):
        with open(main_md_local_temp_path, 'r', encoding='utf-8') as f:
            main_md_content = f.read()
        print("✅ Main Markdown file downloaded successfully.")
    else:
        print("❌ Failed to download main Markdown file. Aborting.")
        exit(1)

    # Step 2: Find all unique Markdown links in the main file
    print("\n2. Finding internal Markdown links...")
    # Regex to find links like [text](/manual/website/help.naviplus.io/path/to/file.md)
    markdown_links_in_main = re.findall(r'\[.*?\]\((/manual/website/help\.naviplus\.io/[^)]+\.md)\)', main_md_content)
    unique_markdown_links = list(dict.fromkeys(markdown_links_in_main))
    print(f"Found {len(unique_markdown_links)} unique internal Markdown links.")

    downloaded_links_map = {} # To store mapping of gitbook path to final jekyll path

    # Step 3: Download and process each linked Markdown file
    print("\n3. Downloading and processing linked Markdown files...")
    # Process the main file first to ensure its permalink is established
    process_and_save_markdown(main_md_content, main_md_path)
    
    for i, link_path in enumerate(unique_markdown_links):
        print(f"\nProcessing link {i+1}/{len(unique_markdown_links)}: {link_path}")
        full_url = urljoin(base_url, link_path)
        
        # Create a clean local path in the temporary directory for raw download
        # This preserves the folder structure from the GitBook path
        relative_path_for_temp = link_path.replace("/manual/website/help.naviplus.io/", "")
        temp_download_path = os.path.join(output_temp_dir, relative_path_for_temp)
        
        # Ensure parent directory for temp_download_path exists
        os.makedirs(os.path.dirname(temp_download_path), exist_ok=True)

        if download_file(full_url, temp_download_path):
            with open(temp_download_path, 'r', encoding='utf-8') as f:
                linked_md_content = f.read()
            process_and_save_markdown(linked_md_content, link_path)
            # Store the mapping
            jekyll_permalink = "/docs" + link_path.replace("/manual/website/help.naviplus.io/", "").replace(".md", "/")
            downloaded_links_map[link_path] = jekyll_permalink
        else:
            print(f"Skipping processing for {link_path} due to download error.")

    # Step 4: Generate _data/navigation.yml
    print("\n4. Generating navigation data...")
    generate_navigation_data(main_md_content, downloaded_links_map)

    print("\n--- GitBook Content Downloader Finished ---")
