---
description: Publish Navi+ menus on WordPress using the Navi+ Menu Builder plugin — sticky menus render site-wide automatically, while section menus are placed via the [naviwp] shortcode or Gutenberg block.
layout: default
permalink: /docs/integrations/wordpress-woocommerce/publish-menus/
title: Publish your menus on WordPress
---
# Publish your menus on WordPress

Navi+ has two publish modes — **sticky** and **section** — and the WordPress plugin supports both. The mode that applies depends on the menu type.

| Menu type | Mode | Where it appears |
| --- | --- | --- |
| Tab Bar | Sticky | Anchored to the viewport, site-wide |
| FAB | Sticky | Floating button, site-wide |
| Slide Menu | Sticky / contextual | Triggered by tapping any element |
| Mega Menu (Desktop) | Section | At the position where you embed it |
| Mega Menu (Mobile) | Section | At the position where you embed it |
| Grid Menu | Section | At the position where you embed it |

See [Publish overview]({{ site.baseurl }}/docs/publish/publish-overview/) for the full sticky-vs-section comparison.

---

## Sticky menus — Tab Bar, FAB, Slide

With the plugin installed and your first menu saved, sticky menus marked **Published** in the editor render automatically on every page of your site.

You don't need to insert anything. Display rules (device, URL pattern, login state) are evaluated by the Navi+ runtime in the browser.

### Toggling the site-wide embed

The plugin admin includes a switch for site-wide embedding:

- **On (default):** the runtime is injected into `<head>` of every page; sticky menus render across the whole site.
- **Off:** the runtime only loads on pages that include a `[naviwp]` shortcode or block. Use this if you want menus to appear on a small set of pages (e.g. mobile-only landing pages).

If a sticky menu doesn't appear, check:

- The menu is **Published** in the editor (not draft).
- Display rules match the page you're testing.
- The runtime is loaded — see the [verify section]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Section menus — Mega Menu, Grid

Section menus need to be placed at a specific spot in a page. The plugin offers three ways.

### Method 1 — Shortcode (recommended)

In any post, page, or shortcode-aware widget:

```text
[naviwp embed_id="SF-123456789"]
```

Replace `SF-123456789` with the **Embed ID** of your menu (shown in the editor on the menu's publish panel).

### Method 2 — Gutenberg block

In the block editor:

1. Click **+** to insert a new block.
2. Search for **Naviplus Menu Builder**.
3. Insert the block and paste your menu's **Embed ID** into the block sidebar.

The block renders an empty placeholder in the editor and is replaced by the live menu on the front end. You can also drop a **Shortcode** block and paste `[naviwp embed_id="..."]` — that works identically.

### Method 3 — Inside a Paragraph block

The plugin recognises `[naviwp ...]` shortcodes pasted directly into a Paragraph block; you don't have to switch to a Shortcode block first.

### Method 4 — Page builders (Elementor, Divi, Bricks, Oxygen)

Use the builder's **Shortcode** widget and paste `[naviwp embed_id="..."]`. If a builder has no Shortcode widget, an **HTML** widget with the embed div works too:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

The plugin already loads the Navi+ runtime, so the menu renders inside that container.

---

## One token, many menus

The plugin loads the runtime once per page and fetches every menu — sticky or section — from the same Navi+ service. To stop publishing a menu, switch it to **Draft** in the editor; no WordPress change is required.

---

## Caching plugins (WP Rocket, W3 Total Cache, LiteSpeed Cache)

The Navi+ runtime is served from a CDN and is cache-friendly. You do **not** need to exclude it from page caching. After updating menus in the editor, changes appear on the next page load — no WordPress cache flush required, because menus are fetched at runtime by the browser, not baked into the HTML.

If you see stale output, it's usually the browser cache. A hard reload (Cmd/Ctrl + Shift + R) clears it.
