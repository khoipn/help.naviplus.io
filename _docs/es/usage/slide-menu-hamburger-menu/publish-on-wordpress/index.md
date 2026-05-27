---
description: Publica un menú deslizante Navi+ (hamburguesa) en WordPress con el plugin Navi+ AI Menu Builder. El plugin carga el menú en todo el sitio y el disparador se configura dentro del editor de Navi+ — sin ediciones de tema, sin shortcode para la configuración típica.
lang: es
layout: default
permalink: /es/docs/usage/slide-menu-hamburger-menu/publish-on-wordpress/
title: Slide Menu — Publish on WordPress
---
# Slide Menu — Publish on WordPress

A **Slide Menu** (a.k.a. hamburger menu) slides in from the side and is the workhorse navigation for deep menu trees on mobile. On WordPress, the Navi+ AI Menu Builder plugin loads it site-wide and the Navi+ editor takes care of the open trigger — no theme edits, no shortcode for the typical setup.

> Other platforms (Wix, Squarespace, Webflow, custom sites): see [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Steps

1. **Install the plugin** — see [Install the Navi+ AI Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Build your Slide Menu** in **Appearance → Naviplus Menu Builder**. See [Slide Menu — How to use]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/how-to-use/).
3. **Configure the open trigger inside the editor** — Navi+ handles trigger wiring on the front end, so you don't need to add a button to your theme or write any JS. The editor's publish panel lets you target an existing element on your site (for example your theme's hamburger button).
4. **Publish the menu** (status: Published, not Draft).

That's it. The plugin's site-wide embed loads the Navi+ runtime, the runtime fetches your published Slide Menu, and the menu opens when the configured trigger is tapped.

---

## Embedding a Slide Menu at a fixed spot (rare)

If you want the menu inline in a page (not triggered by a button), use the same shortcode as section menus:

```text
[naviwp embed_id="SF-123456789"]
```

This drops the menu's content into the page where the shortcode lives.

---

## Mobile tips

- The Slide Menu is the right fit for **deep or large** menu trees — multi-level submenus, mega panels.
- Keep the open animation under 300 ms; longer feels sluggish.
- If your theme's existing hamburger has its own click handler that conflicts with the Slide Menu, see [How Navi+ injects]({{ site.baseurl }}/docs/integrations/how-navi-injects/) and the troubleshooting note in [Search / Cart / Menu panel not working]({{ site.baseurl }}/docs/frequently-asked-questions/why-arent-menu-search-cart-panels-working/).

---

## Related

- [WordPress / WooCommerce — overview]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publishing examples]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/publishing-examples/)
- [Slide Menu — How to use]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/how-to-use/)
