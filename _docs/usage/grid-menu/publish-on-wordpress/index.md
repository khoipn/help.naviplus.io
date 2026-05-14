---
description: Publish a Navi+ Grid Menu on WordPress with the Navi+ Menu Builder plugin. Insert it where it should appear using the [naviwp embed_id="..."] shortcode or Gutenberg block.
layout: default
permalink: /docs/usage/grid-menu/publish-on-wordpress/
title: Grid Menu — Publish on WordPress
---
# Grid Menu — Publish on WordPress

A **Grid Menu** is a **section** menu — it renders at the spot in the page where you embed it. It's a great fit for category shortcuts, hub pages, and "what would you like to do?" panels. On WordPress, the Navi+ Menu Builder plugin places it via shortcode or Gutenberg block; you never edit theme files.

> Other platforms (Wix, Squarespace, Webflow, custom sites): see [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Steps

1. **Install the plugin** — see [Install the Navi+ Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Build your Grid Menu** in **Appearance → Naviplus Menu Builder**. See [Grid Menu — How to use]({{ site.baseurl }}/docs/usage/grid-menu/how-to-use/) and [Responsive Grid Menu]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/).
3. **Copy the Embed ID** (e.g. `SF-123456789`).
4. **Embed it** using one of the methods below.

---

## Insert the menu

### Option 1 — Shortcode (recommended)

```text
[naviwp embed_id="SF-123456789"]
```

Drop this into any post, page, or shortcode-aware widget.

Typical spots:

- A homepage hero section with category tiles.
- A landing page above the fold.
- The empty state of a category archive.

### Option 2 — Gutenberg block

In the block editor, **+ → Naviplus Menu Builder**, then paste the Embed ID into the block sidebar. A plain **Shortcode** block with `[naviwp embed_id="SF-..."]` is equivalent.

### Option 3 — Page builders (Elementor, Divi, Bricks, Oxygen)

Use a **Shortcode** widget with `[naviwp embed_id="SF-..."]`. If a builder has no Shortcode widget, an **HTML** widget with the embed div works:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

---

## Mobile tips

- Use **[Responsive Grid Menu]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** to switch column count per breakpoint — e.g. 4 columns on desktop, 2 on mobile.
- Keep tile content short — an icon, a one- or two-word label, optionally a tiny description. Long labels wrap unpredictably.
- Aim for tap targets at least 44 × 44 px including padding.

---

## Updating the menu later

Edits in the editor apply on the next front-end page load — no WordPress cache flush required.

---

## Related

- [WordPress / WooCommerce — overview]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publish your menus on WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Responsive Grid Menu]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
