---
description: Publish a Navi+ Mega Menu (Mobile) on WordPress with the Navi+ Menu Builder plugin. Insert it where it should appear via the [naviwp embed_id="..."] shortcode or Gutenberg block.
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/mega-menu-mobile/publish-on-wordpress/
title: Mega Menu (Mobile) — Publish on WordPress
---
# Mega Menu (Mobile) — Publish on WordPress

A **Mega Menu (Mobile)** is a **section** menu — it renders at the spot in the page where you embed it. On WordPress, the Navi+ Menu Builder plugin places it via shortcode or Gutenberg block; you never edit theme files.

> Other platforms (Wix, Squarespace, Webflow, custom sites): see [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/mega-menu-mobile/publish-on-wordpress-woocommerce-wix-others/).

---

## Steps

1. **Install the plugin** — see [Install the Navi+ Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Build your Mega Menu (Mobile)** in **Appearance → Naviplus Menu Builder**. See [Mega Menu (Mobile) — How to use]({{ site.baseurl }}/docs/usage/mega-menu-mobile/how-to-use/).
3. **Copy the Embed ID** (e.g. `SF-123456789`).
4. **Embed it** using one of the methods below.

---

## Insert the menu

### Option 1 — Shortcode (recommended)

```text
[naviwp embed_id="SF-123456789"]
```

Paste this into any post, page, or shortcode-aware widget.

If you want the mobile mega menu to live in your site header, the cleanest spot is the **mobile header** area in your theme — or a Full Site Editing template part scoped to mobile.

### Option 2 — Gutenberg block

In the block editor, **+ → Naviplus Menu Builder**, paste the Embed ID into the block sidebar. A plain **Shortcode** block with `[naviwp embed_id="SF-..."]` works the same way.

### Option 3 — Page builders

Use a **Shortcode** widget with `[naviwp embed_id="SF-..."]`, or an **HTML** widget:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

---

## Mobile-first tips

- Make tap targets at least 44 × 44 px — use the editor's spacing and padding controls; preview on a real device.
- Avoid more than 2 nesting levels — deep submenus are frustrating on touchscreens. For deeper trees consider a [Slide Menu]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/) instead.
- Pair this with a [Mega Menu (Desktop)]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/) and use **Display rules → Device** to render each menu only on its target breakpoint.
- Watch for overlap with sticky elements (Tab Bar, FAB, chat widgets). See [Menu overlapping other elements]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).

---

## Updating the menu later

Edits in the editor apply on the next front-end page load — no WordPress cache flush required.

---

## Related

- [WordPress / WooCommerce — overview]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publish your menus on WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Mega Menu (Mobile) — How to use]({{ site.baseurl }}/docs/usage/mega-menu-mobile/how-to-use/)
