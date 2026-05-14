---
description: Publish a Navi+ Tab Bar on WordPress with the Navi+ Menu Builder plugin — no code edits. The Tab Bar is a sticky menu, so it renders site-wide automatically once published in the editor.
layout: default
permalink: /docs/usage/tabbar-bottom-navigation/publish-on-wordpress/
title: Tab Bar — Publish on WordPress
---
# Tab Bar — Publish on WordPress

The **Tab Bar** is a **sticky** menu — it anchors to the viewport (typically near the bottom on mobile) and stays in place as visitors scroll. On WordPress, the Navi+ Menu Builder plugin renders the Tab Bar site-wide automatically; you do not paste any code or shortcode.

> Other platforms (Wix, Squarespace, Webflow, custom sites): see [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/).

---

## Steps

1. **Install the plugin** — see [Install the Navi+ Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Open the editor** — in the WordPress admin, go to **Appearance → Naviplus Menu Builder**.
3. **Build your Tab Bar** — pick the **Tab Bar** layout, add 3–5 main destinations. See [Tab Bar — How to use]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/) for design tips.
4. **Publish the menu** in the editor (status: Published, not Draft).

That's it. The Tab Bar appears on the front end of your WordPress site immediately — no shortcode, no theme edit. The plugin's site-wide embed (on by default) loads the Navi+ runtime on every page, and the runtime fetches every published sticky menu for your site.

---

## Restricting the Tab Bar to specific pages

Don't disable the plugin's site-wide embed — that turns off the runtime entirely. Instead, scope the Tab Bar in the editor:

- **Display rules → URL pattern** — show the Tab Bar only on URLs that match a glob (e.g. `/shop/*`).
- **Display rules → Device** — restrict to mobile only.
- **Display rules → Visitor state** — restrict to logged-in users, etc.

Display rules are evaluated by the runtime in the browser, so changes apply on the next page load.

---

## Mobile tips for the Tab Bar

- Keep to **3–5 tabs** — more than that crowds the viewport.
- Use short labels (one word where possible) and clear icons.
- Test tap target size on a real device, not just the editor preview.
- If the Tab Bar overlaps another fixed element (e.g. a chat widget), see [Menu overlapping other elements]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).

---

## Verify the Tab Bar is live

Append `#navidebug-on` to any page URL (e.g. `https://your-site.com/#navidebug-on`). The page switches to Navi+ Debug mode if the plugin is wired up. Append `#navidebug-off` to turn it off.

For deeper checks, see [Create your first menu — Verify the connection]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Related

- [WordPress / WooCommerce — overview]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publish your menus on WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Naviplus Menu Builder FAQ]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/)
