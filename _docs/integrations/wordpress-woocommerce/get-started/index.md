---
description: After activating the Navi+ Menu Builder plugin, open Appearance → Naviplus Menu Builder, create your first menu in the visual editor, and let the plugin auto-connect your WordPress site to Navi+.
layout: default
permalink: /docs/integrations/wordpress-woocommerce/get-started/
title: Create your first menu
---
# Create your first menu

Once the plugin is activated, you build menus inside WordPress — no separate signup, no token to paste.

---

## 1. Open the menu builder

In the WordPress admin, go to:

> **Appearance → Naviplus Menu Builder**

This opens the Navi+ visual editor inside your WordPress dashboard.

---

## 2. Create your first menu

Follow the on-screen flow to create a menu. When you save the first menu, the plugin **auto-connects** your site to Navi+:

- It registers a **site identifier** that lets the Navi+ service recognise your WordPress installation.
- It saves that identifier in WordPress so subsequent menu changes route to the correct site.

> The site identifier is **not** your WordPress password and **not** a Navi+ token you need to manage. It's an opaque value the plugin handles for you.

You do **not** need to create a Navi+ account before installing the plugin — the first-menu save handles the connection.

---

## 3. Design the layout

Inside the editor, pick a menu type (Tab Bar, Slide / hamburger, Mega Menu, Grid, FAB), then design the layout. Editor docs:

- [Menu types overview]({{ site.baseurl }}/docs/usage/explore-common-menus/)
- [Menu items — items, links, icons, badges]({{ site.baseurl }}/docs/menu-items/item-overview/)
- [Design overview]({{ site.baseurl }}/docs/design/design-overview/)

The menu structure and styles are stored on the Navi+ service; WordPress stores only the site identifier.

---

## 4. Verify the connection

Open your site's front end. Sticky menus (Tab Bar, FAB) you mark as **Published** in the editor appear automatically across the site.

To confirm the runtime is loading, use either:

- **Debug mode (everyone):** append `#navidebug-on` to any URL — e.g. `https://your-site.com/#navidebug-on`. The page switches to Navi+ Debug mode if the plugin is wired up. Use `#navidebug-off` to turn it off.
- **Console (developers):** open DevTools → Console; you should see a green `Using Navi+..` message.

---

## Next step

For Mega Menu and Grid Menu — placed at specific spots in a page — see **[Publish your menus]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)** for the `[naviwp]` shortcode and Gutenberg block.
