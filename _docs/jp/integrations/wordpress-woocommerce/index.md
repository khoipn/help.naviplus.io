---
description: Navi+ Menu Builder is the official WordPress plugin for Navi+. Install it, build menus inside WordPress, and publish them site-wide or via the [naviwp] shortcode — no code edits, no header injectors.
lang: jp
layout: default
permalink: /jp/docs/integrations/wordpress-woocommerce/
title: WordPress / WooCommerce — Navi+ Menu Builder
---
# WordPress / WooCommerce — Navi+ Menu Builder

If your site runs on **WordPress** or **WooCommerce**, the recommended way to publish Navi+ menus is the official **Navi+ Menu Builder** plugin on WordPress.org. The full WordPress.org listing name is **Naviplus Menu Builder**.

> Plugin page: <https://wordpress.org/plugins/naviplus-menu-builder/>
> Support forum: <https://wordpress.org/support/plugin/naviplus-menu-builder/>

This page is the entry point: install the plugin, enable site-wide menus or embed menus by position, and pick layouts that work well on mobile (Tab Bar, Slide / hamburger, FAB).

---

## 1. Requirements

- **WordPress 5.8** or newer (using the latest WordPress version your host supports is recommended).
- Administrator access — needed to install plugins and edit **Appearance**.
- Outbound internet — menus are designed on the Navi+ service and rendered through a script loaded from `https://live.naviplus.app/start.js`. See section [8. External services & privacy](#8-external-services--privacy).

---

## 2. Install the plugin

Three install methods are detailed on the dedicated install page: **[Install the Navi+ Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/)** — admin search (recommended), ZIP upload, or FTP / file manager.

After activation the plugin shows up under **Appearance → Naviplus Menu Builder** in the admin sidebar.

---

## 3. After activation

1. Go to **Appearance → Naviplus Menu Builder**.
2. Create your first menu following the on-screen flow. The plugin **auto-connects** your site to Navi+ on first save — you do **not** need to create a Navi+ account beforehand.
3. Design the layout in the **Navi+ Menu Builder visual editor**, opened from the WordPress dashboard.

The menu structure and styles live on the **Navi+ service**; WordPress stores only a **site identifier** that lets Navi+ recognise your installation — this is **not** your WordPress password and not a token you need to manage.

Full walkthrough: **[Create your first menu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.

---

## 4. Choosing a layout for mobile visitors

Navi+ supports several menu types. For mobile-first sites, these usually work best:

| Layout | When to use |
| --- | --- |
| **Tab Bar** | Quick access to 3–5 primary destinations, anchored near the bottom of the viewport (or wherever you place it in the editor). |
| **Slide Menu (hamburger)** | Many items or deep categories — saves space on small screens. |
| **Mega Menu** | Rich content menus — great on desktop; on mobile, double-check tap targets and scroll behaviour in the editor. |
| **Grid Menu** | Category shortcuts and hub pages. |
| **FAB (floating button)** | Quick actions (support, contact) that shouldn't take up header space. |

After tuning the layout, **always test on a real device** — or at least the browser's responsive mode.

For menu-type-specific WordPress instructions:

- **[Tab Bar — Publish on WordPress]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/)**
- **[Mega Menu (Desktop) — Publish on WordPress]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/)**
- **[Mega Menu (Mobile) — Publish on WordPress]({{ site.baseurl }}/docs/usage/mega-menu-mobile/publish-on-wordpress/)**
- **[Slide Menu — Publish on WordPress]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/publish-on-wordpress/)**
- **[FAB — Publish on WordPress]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/)**
- **[Grid Menu — Publish on WordPress]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress/)**

For a full comparison see **[Overview: Choose the right menu]({{ site.baseurl }}/docs/usage/explore-common-menus/)**.

---

## 5. Display menus across the whole site

- In the plugin admin, you can **enable site-wide embedding** (global embed). When on, the runtime is injected into every page and sticky menus (Tab Bar, FAB, Slide) render automatically across the site.
- If you only want menus on a few pages (e.g. mobile-only landing pages), **turn site-wide embed off** and use the shortcode (section 6).

The exact label and position of the toggle can vary by plugin version — look on the plugin's settings screen under **Appearance → Naviplus Menu Builder**.

---

## 6. Embed a menu into a post, page, or widget (shortcode)

Use the shortcode:

```text
[naviwp embed_id="YOUR-EMBED-ID"]
```

Replace `YOUR-EMBED-ID` with the **Embed ID** of your menu (shown in the editor on the menu's publish panel — looks like `SF-123456789`).

**Gutenberg (block editor):**

- Insert a **Naviplus Menu Builder** block and paste your **Embed ID** into the block sidebar, **or**
- Drop a generic **Shortcode** block with `[naviwp embed_id="..."]`, **or**
- Paste `[naviwp embed_id="..."]` directly inside a **Paragraph** block — the plugin recognises it.

**Elementor / Divi / Bricks / other builders:**

- Use the builder's **Shortcode** widget and paste `[naviwp embed_id="..."]`.

More detail and all three Gutenberg methods: **[Publish your menus]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)**.

---

## 7. Disable or temporarily hide menus

- **Deactivate the plugin** → the runtime stops loading; no Navi+ menus render anywhere on your site.
- **Turn off site-wide embed** in the plugin admin → menus only render on pages that include a `[naviwp]` shortcode or block.
- **Switch a menu to Draft** in the editor → that specific menu is no longer published, even if the runtime is loaded.
- **Remove a shortcode** from a page or widget → the menu disappears at that spot only.

Your menus on the Navi+ service are preserved across all of these. Reinstalling or reactivating the plugin and reusing the same embed IDs brings them back without any rebuild.

---

## 8. External services & privacy

The plugin connects to the Navi+ Menu Builder service to create and **render** your menus. Data exchanged may include (without limitation): your **site domain**, your **menu configuration**, and minimal usage data needed for rendering.

- Privacy policy: <https://naviplus.io/privacy>
- Script loader: `https://live.naviplus.app/start.js`

If you operate under a privacy framework that requires disclosing third-party services (e.g. GDPR), list **Navi+** and the script loader URL in your site's privacy notice.

---

## 9. Useful links

| Resource | URL |
| --- | --- |
| WordPress.org plugin page | <https://wordpress.org/plugins/naviplus-menu-builder/> |
| WordPress.org support forum | <https://wordpress.org/support/plugin/naviplus-menu-builder/> |
| Naviplus home | <https://naviplus.io> |
| Privacy policy | <https://naviplus.io/privacy> |
| Plugin FAQ (this site) | [Navi+ Menu Builder FAQ]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/) |

---

## 10. Quick recap

1. **Install & activate** from WordPress.org or a ZIP upload.
2. Open **Appearance → Naviplus Menu Builder** → create your menu and design it in the Navi+ editor.
3. Pick a layout suited to mobile: **Tab Bar** / **hamburger** / **FAB**.
4. Choose **site-wide** display or `[naviwp embed_id="..."]` for specific pages.
5. **Test on a real device** before going live.

*This page may be updated as new plugin versions ship; the canonical version and changelog live on the [WordPress.org plugin page](https://wordpress.org/plugins/naviplus-menu-builder/).*
