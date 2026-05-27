---
description: Navi+ メガメニュー (デスクトップ) を Navi+ メニュービルダープラグインを使用して WordPress に公開します。[naviwp embed_id="..."] ショートコードまたは Gutenberg ブロックを使用して、任意の投稿、ページ、ウィジェット、またはページビルダーに配置します。
lang: jp
layout: default
permalink: /jp/docs/usage/mega-menu-desktop/publish-on-wordpress/
title: メガメニュー (デスクトップ) — WordPressに公開
---
# メガメニュー (デスクトップ) — WordPressに公開

A **Mega Menu (Desktop)** is a **section** menu — it doesn't anchor to the viewport, it renders at the exact spot in the page where you embed it (typically the site header). On WordPress, the Navi+ AI Menu Builder plugin embeds it via shortcode or Gutenberg block — you never edit theme files.

> Other platforms (Wix, Squarespace, Webflow, custom sites): see [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/).

---

## Steps

1. **Install the plugin** — see [Install the Navi+ AI Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
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
<p>This is the most common setup for a desktop Mega Menu.</p>
<p>Common selectors for WordPress themes:</p>
<ul>
<li><code>header</code> — most themes</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One and default WordPress themes</li>
<li><code>#header</code> — Divi</li>
</ul>
</details>

<details><summary>Option C: Replace</summary>
<p>Replaces the selected element entirely with the Navi+ menu. The original element is hidden and Navi+ takes its place.</p>
<p><strong>Example:</strong> <code>.main-navigation</code> → the theme's default nav is hidden and replaced by your Navi+ Mega Menu.</p>
<p>Common selectors for WordPress themes:</p>
<ul>
<li><code>.main-navigation</code> — Twenty Twenty-One and many default WordPress themes</li>
<li><code>#site-navigation</code> — some default WordPress themes</li>
<li><code>.nav-primary</code> — various themes</li>
</ul>
<p><strong>Note:</strong> A brief flash of the original menu may appear while Navi+ loads. Use the built-in UX optimization option in the publish settings to hide the original element immediately.</p>
</details>

#### Device-specific targeting

Add a suffix to apply the selector only on a specific device:

| Suffix | Applies to |
|--------|------------|
| `(M)` | Mobile only |
| `(D)` | Desktop only |
| *(none)* | Both |

Example: `header(D)` — inserts only on desktop.

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
