---
description: Publish a Navi+ Grid Menu on WordPress with the Navi+ AI Menu Builder plugin. Insert it where it should appear using the [naviwp embed_id="..."] shortcode or Gutenberg block.
layout: default
permalink: /docs/usage/grid-menu/publish-on-wordpress/
title: Grid Menu — Publish on WordPress
---
# Grid Menu — Publish on WordPress

A **Grid Menu** is a **section** menu — it renders at the spot in the page where you embed it. It's a great fit for category shortcuts, hub pages, and "what would you like to do?" panels. On WordPress, the Navi+ AI Menu Builder plugin places it via shortcode or Gutenberg block; you never edit theme files.

> Other platforms (Wix, Squarespace, Webflow, custom sites): see [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Steps

1. **Install the plugin** — see [Install the Navi+ AI Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
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
<p>Inserts the Grid Menu immediately <strong>before</strong> the selected element, displayed as a full section.</p>
<p><strong>Example:</strong> <code>main</code> → the Grid Menu appears above the main content area.</p>
<p>This is the most common setup for a Grid Menu on WordPress.</p>
<p>Common selectors for WordPress themes:</p>
<ul>
<li><code>main</code> — most themes</li>
<li><code>#main</code> — Twenty Twenty, Astra, OceanWP</li>
<li><code>.site-main</code> — many themes</li>
<li><code>#content</code> — Divi, some default themes</li>
</ul>
</details>

<details><summary>Option B: Insert After</summary>
<p>Inserts the Grid Menu immediately <strong>after</strong> the selected element.</p>
<p><strong>Example:</strong> <code>header</code> → the Grid Menu appears just below the header.</p>
<p>Common selectors for WordPress themes:</p>
<ul>
<li><code>header</code> — most themes</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One and default WordPress themes</li>
</ul>
</details>

<details><summary>Option C: Replace</summary>
<p>Most WordPress sites do not have a built-in Grid Menu element to replace. Insert Before <code>main</code> is the recommended approach.</p>
<p>If your theme does have a grid-style element you want to replace, use <a href="/docs/usage/debug-mode-find-css-selectors/">Debug Mode</a> or <a href="/docs/usage/general/find-css-selector/">Browser DevTools</a> to find its selector.</p>
</details>

#### Device-specific targeting

Add a suffix to apply the selector only on a specific device:

| Suffix | Applies to |
|--------|------------|
| `(M)` | Mobile only |
| `(D)` | Desktop only |
| *(none)* | Both |

Example: `main(D)` — inserts the Grid Menu only on desktop.

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
