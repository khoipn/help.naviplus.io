---
description: Navi+ メニュービルダープラグインを使用して、WordPressにNavi+ FAB（フローティングアクションボタン）を公開します。FABはスティッキーメニューで、エディターで公開されると自動的にサイト全体に表示されます。
lang: jp
layout: default
permalink: /jp/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/
title: FAB — WordPressで公開
---
# FAB — WordPressで公開

A **FAB (Floating Action Button)** is a **sticky** menu — it floats above the page (typically a corner) and stays put as visitors scroll. On WordPress, the Navi+ Menu Builder plugin renders it site-wide automatically; you do not paste any code or shortcode.

> Other platforms (Wix, Squarespace, Webflow, custom sites): see [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress-woocommerce-wix-others/).

---

## Steps

1. **Install the plugin** — see [Install the Navi+ Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Build your FAB** in **Appearance → Naviplus Menu Builder**. See [FAB — How to use]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/) for design guidance (single action vs. expandable menu).
3. **Publish the menu** in the editor (status: Published, not Draft).

The FAB appears on every page of your WordPress site immediately. No shortcode, no theme edit.

---

## Restricting the FAB to specific pages or audiences

Don't disable the plugin's site-wide embed (that turns off the runtime entirely). Scope the FAB in the editor:

- **Display rules → URL pattern** — show on `/contact*` only, hide on `/checkout*`, etc.
- **Display rules → Device** — desktop, mobile, or both.
- **Display rules → Visitor state** — logged-in users only, etc.

---

## Mobile tips

- Pick a corner that doesn't conflict with browser UI on mobile (the bottom-right is a safe default; bottom-center can clash with the URL bar on iOS).
- Make sure the FAB doesn't overlap a Tab Bar or chat widget. See [Menu overlapping other elements]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).
- If the FAB expands into a menu, keep the action list short (3–6 items) — long lists are awkward on touch.

---

## Verify the FAB is live

Append `#navidebug-on` to any page URL. The page switches to Navi+ Debug mode if the plugin is wired up. See [Create your first menu — Verify the connection]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Related

- [WordPress / WooCommerce — overview]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publish your menus on WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [FAB — How to use]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/)
