import os
import re

docs_dir = "_docs"

def update_links_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find /manual/website/help.naviplus.io/...md
    # and replace with /docs/...md
    # It needs to handle the .md extension and also the /how/ structure.
    updated_content = re.sub(
        r'(/manual/website/help\.naviplus\.io)(/.*?\.md)',
        lambda m: "/docs" + m.group(2).replace(".md", "/"),
        content
    )
    
    # Special handling for /docs/how.md -> /docs/how/ (since it's index.md now)
    updated_content = updated_content.replace("/docs/how/", "/docs/how/") # no change needed after previous step

    if updated_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print(f"Updated links in: {filepath}")
    else:
        print(f"No links to update in: {filepath}")

for root, _, files in os.walk(docs_dir):
    for file in files:
        if file.endswith(".md"):
            filepath = os.path.join(root, file)
            update_links_in_file(filepath)
