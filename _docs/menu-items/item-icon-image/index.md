---
description: How to add built-in icons and custom images to menu items in Navi+, and how to style them.
layout: default
permalink: /docs/menu-items/item-icon-image/
title: Icons & Images
---
# Icons & Images

Each item can have one visual element — either a **built-in icon** or a **custom image**. You can only use one at a time, not both.

---

## Built-in icon

Icons are vector symbols from the integrated **Remixicon** library. They are crisp at any size and require no file upload.

### How to add

1. In the Edit Item panel, click the **Icon** button.
2. The icon search box opens — type a keyword (e.g. `home`, `cart`, `phone`, `search`).
3. Click an icon to select it — a preview appears on the item immediately.
4. Click **×** to remove the current icon.

### When to use icons

- Items in a **Tab Bar** — icons are the standard way to label tabs.
- When you want a clean, consistent look.
- When you don't have custom images ready.

---

## Custom image

Use your own photo, logo, or graphic instead of a library icon.

> **Starter plan:** Custom images are not supported — use built-in icons instead.

### Option A — Upload from gallery *(Business / Elite)*

1. Click the **Image** button in the Edit Item panel.
2. Click **Gallery** → the upload dialog opens.
3. Select or upload an image (JPG, PNG, GIF).
4. Confirm — the image URL is filled in automatically.

### Option B — Paste an image URL *(Elite)*

1. Click the **Image** button.
2. Paste the full image URL into the URL field.
3. Click **Update**.

### Image tips

- Use **square (1:1)** images for Tab Bar icons.
- Use **landscape** images for Big Image items.
- **PNG with transparent background** works best for logos and symbols.
- Keep file size small — heavy images slow down the menu on mobile.
- Elite automatically converts images to WebP and normalizes dimensions.

---

## Display layout

After adding an icon or image, choose how the icon/image and text are arranged in **Layout → Display Layout**:

| Option | Layout |
|---|---|
| **Automatic** | Follows the menu type default |
| **Top-Down** | Icon/image on top, text below |
| **Left-Right** | Icon/image on left, text on right |
| **Down-Top** | Text on top, icon/image below |
| **Right-Left** | Text on left, icon/image on right |
| **Icon/Image Only** | Icon/image only — text hidden |
| **Text Only** | Text only — icon/image hidden |

---

## Style the icon or image

Go to **Interface → Icon / Image Style** to fine-tune appearance:

| Setting | Effect |
|---|---|
| **Icon Color** | Change the icon vector color (hex). Does not apply to image files. |
| **Size (px)** | Display size of the icon or image |
| **Container** | Background color of the box surrounding the icon |
| **Padding (px)** | Space between the icon and its container box |
| **Curve (px)** | Corner radius of the container — set `50` for a circle |

**Example — white icon in a round blue box:**

```
Icon Color:  #FFFFFF
Container:   #0066CC
Padding:     10
Curve:       50
```
