---
description: Publish a Navi+ Mega Menu (Desktop) on WordPress with the Navi+ Menu Builder plugin. Place it in any post, page, widget, or page builder using the [naviwp embed_id="..."] shortcode or the Gutenberg block.
layout: default
permalink: /docs/usage/mega-menu-desktop/publish-on-wordpress/
title: Mega Menu (Desktop) — Publish on WordPress
---
# Mega Menu (Desktop) — Publish on WordPress

A **Mega Menu (Desktop)** is a **section** menu — it doesn't anchor to the viewport, it renders at the exact spot in the page where you embed it (typically the site header). On WordPress, the Navi+ Menu Builder plugin embeds it via shortcode or Gutenberg block — you never edit theme files.

> Other platforms (Wix, Squarespace, Webflow, custom sites): see [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/).

---

## Steps

1. **Install the plugin** — see [Install the Navi+ Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Build your Mega Menu** in **Appearance → Naviplus Menu Builder**. See [Mega Menu (Desktop) — How to use]({{ site.baseurl }}/docs/usage/mega-menu-desktop/how-to-use/) for design guidance.
3. **Copy the Embed ID** of the menu (shown on the publish panel — looks like `SF-123456789`).
4. **Insert the menu** where you want it on the page (next section).

---

## Insert the menu — three options

### Option 1 — Shortcode (works everywhere)

Paste this into any post, page, or shortcode-aware widget:

```text
[naviwp embed_id="SF-123456789"]
```

For a Mega Menu that should appear in the **site header** on every page, the cleanest spot is a header widget area (if your theme provides one). If not, use a global header block / template part (Full Site Editing themes), or fall back to Option 3 below.

### Option 2 — Gutenberg block

1. In the block editor click **+ → Naviplus Menu Builder**.
2. Paste the **Embed ID** into the block sidebar.

You can also drop a generic **Shortcode** block with `[naviwp embed_id="SF-..."]`.

### Option 3 — Page builders (Elementor, Divi, Bricks, Oxygen)

Use the builder's **Shortcode** widget and paste `[naviwp embed_id="SF-..."]`. If you'd rather use raw HTML, drop the embed div directly:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

The plugin already loads the Navi+ runtime, so the menu renders inside that container.

---

## Mobile considerations

A desktop Mega Menu is, by definition, a desktop-first layout. On small screens it usually shouldn't render at all — pair it with a [Mega Menu (Mobile)]({{ site.baseurl }}/docs/usage/mega-menu-mobile/) or [Slide Menu]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/) and use display rules to hide each one on the other breakpoint.

In the editor open **Display rules → Device** and restrict the Mega Menu (Desktop) to **desktop only**.

---

## Updating the menu later

Edit the menu in the WordPress admin (or in the Navi+ web app). Changes apply on the next front-end page load — no WordPress cache flush required, because menus are fetched at runtime by the browser.

---

## Related

- [WordPress / WooCommerce — overview]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publish your menus on WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Mega Menu (Desktop) — FAQ]({{ site.baseurl }}/docs/usage/mega-menu-desktop/faq/)
