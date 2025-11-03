import re
import os

sidebar_path = "_includes/sidebar.html"

def update_sidebar():
    with open(sidebar_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove existing debug comments
    content = re.sub(r'<!-- DEBUG:.*?-->\n', '', content)
    
    # Simplify icon logic for parent items
    content = re.sub(
        r'(<a class=".*?" data-bs-toggle="collapse"[^>]*?>\s*<span>\s*)(<i class="ri-folder-line sidebar-folder-icon"></i>)(\s*{{ item\.title }})\s*<\/span>',
        r'\1<i class="ri-folder-line sidebar-folder-icon"></i>\3</span>', 
        content, flags=re.DOTALL
    )

    # Simplify icon logic for child items
    content = re.sub(
        r'(<a class=".*?" data-bs-toggle="collapse"[^>]*?>\s*<span>\s*)(<i class="ri-folder-line sidebar-folder-icon"></i>)(\s*{{ child\.title }})\s*<\/span>',
        r'\1<i class="ri-folder-line sidebar-folder-icon"></i>\3</span>', 
        content, flags=re.DOTALL
    )

    with open(sidebar_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {sidebar_path}")

if __name__ == "__main__":
    update_sidebar()
