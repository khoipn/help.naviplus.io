---
description: Publish a Navi+ Tab Bar on Wix. Navi+ is a native Wix App Market app — install it, publish the Tab Bar, and it appears site-wide automatically. No code, no embed snippet.
layout: default
permalink: /docs/usage/tabbar-bottom-navigation/publishing-on-wix/
title: Tab Bar — Publish on Wix
---
# Tab Bar — Publish on Wix

Navi+ runs on Wix as a **native Wix App Market app**. The **Tab Bar** is a **sticky** menu — it anchors to the viewport (typically near the bottom on mobile) and stays in place as visitors scroll. On Wix, once you install Navi+ and publish the Tab Bar, it renders **site-wide automatically** — there is no code to paste and no Custom Code step.

> Other platforms: see [Publish on Shopify]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publishing-on-shopify/), [Publish on WordPress]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/), or [Squarespace / Webflow / others]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/).

---

## Steps

1. **Install Navi+ from the [Wix App Market](https://www.wix.com/app-market)** — it opens inside your Wix dashboard, already connected to your site. Wix handles authentication, so there are no API keys to set up.
2. **Build your Tab Bar** — pick the **Tab Bar** layout and add 3–5 main destinations. See [Tab Bar — How to use]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/) for design tips.
3. **Publish the menu** (status: Published, not Draft).

That's it. Navi+ embeds itself on your live Wix site through Wix's Embedded Script, and the Tab Bar appears on every page immediately — no snippet, no theme edit.

---

## Restricting the Tab Bar to specific pages

Scope the Tab Bar inside the Navi+ editor — don't try to remove the app:

- **Display rules → URL pattern** — show the Tab Bar only on URLs that match a glob (e.g. `/shop/*`).
- **Display rules → Device** — restrict to mobile only.
- **Display rules → Visitor state** — restrict to logged-in users, etc.

Rules are evaluated in the browser, so changes apply on the next page load.

---

## Billing

Navi+ on Wix is billed through **Wix** — a free tier plus **Starter, Business, and Elite** plans, charged together with your Wix subscription. Upgrade from the pricing screen inside the app.

---

## Related

- [Tab Bar — How to use]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/)
- [Install Navi+]({{ site.baseurl }}/docs/how-to-install-navi/)
