---
description: Publish a Navi+ Mega Menu (Mobile) on WordPress with the Navi+ AI Menu Builder plugin. Insert it where it should appear via the [naviwp embed_id="..."] shortcode or Gutenberg block.
layout: default
permalink: /docs/usage/mega-menu-mobile/publish-on-wordpress/
title: Mega Menu (Mobile) — Publish on WordPress
---
# Mega Menu (Mobile) — Publish on WordPress

A **Mega Menu (Mobile)** is a **section** menu — it renders at the spot in the page where you embed it. On WordPress, the Navi+ AI Menu Builder plugin places it via shortcode or Gutenberg block; you never edit theme files.

> Other platforms (Wix, Squarespace, Webflow, custom sites): see [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/mega-menu-mobile/publish-on-wordpress-woocommerce-wix-others/).

---

## Steps

1. **Install the plugin** — see [Install the Navi+ AI Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
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

### Option 4 — CSS Selector (auto-placement from Navi+ app)

Instead of placing a shortcode manually, you can let Navi+ automatically insert or replace an element using a CSS Selector — configured entirely from the Navi+ app.

#### Understanding CSS Selector

A CSS Selector targets a specific HTML element on your page. Navi+ uses it to know exactly **where** to place your menu — insert before, insert after, or replace an existing element.

To find the right CSS Selector, use:
- [Debug Mode](/docs/usage/debug-mode-find-css-selectors/) — hover over any element and instantly copy its selector
- [Browser DevTools](/docs/usage/general/find-css-selector/) — manual method via browser inspector

#### Three publishing options

In the Navi+ app: click **Publish to website** → turn on **"Publish menu by Insert/Replace method"** → enter your CSS Selector and choose one option:

<details><summary>Option A: Insert Before</summary>
<p>Inserts the menu immediately <strong>before</strong> the selected element.</p>
<p><strong>Example:</strong> <code>main</code> → menu appears above the main content area.</p>
<p>Common selectors for WordPress themes:</p>
<ul>
<li><code>main</code> — most themes</li>
<li><code>#main</code> — Twenty Twenty, Astra, OceanWP</li>
<li><code>.site-main</code> — many themes</li>
</ul>
</details>

<details><summary>Option B: Insert After</summary>
<p>Inserts the menu immediately <strong>after</strong> the selected element.</p>
<p><strong>Example:</strong> <code>header</code> → menu appears just below the header.</p>
<p>This is the most common setup for a mobile Mega Menu.</p>
<p>Common selectors for WordPress themes:</p>
<ul>
<li><code>header</code> — most themes</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One and default WordPress themes</li>
<li><code>.mobile-header</code> — themes with a dedicated mobile header</li>
</ul>
</details>

<details><summary>Option C: Replace</summary>
<p>Replaces the selected element entirely with the Navi+ menu.</p>
<p>On mobile, most WordPress themes bundle the mobile menu inside the header or a hamburger toggle — there may not be a standalone element to replace. Insert Before or Insert After is recommended instead.</p>
<p>If your theme has a dedicated mobile menu element, use <a href="/docs/usage/debug-mode-find-css-selectors/">Debug Mode</a> or <a href="/docs/usage/general/find-css-selector/">Browser DevTools</a> to find its selector.</p>
</details>

#### Device-specific targeting

Add a suffix to apply the selector only on a specific device:

| Suffix | Applies to |
|--------|------------|
| `(M)` | Mobile only |
| `(D)` | Desktop only |
| *(none)* | Both |

For mobile menus, using the `(M)` suffix ensures the menu only appears on mobile and does not affect desktop layout. Example: `header(M)`.

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
