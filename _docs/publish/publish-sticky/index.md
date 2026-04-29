---
description: Publish Sticky menus (Tabbar, Mobile Header, FAB) in Navi+ — using App Embeds for Shopify or script injection for Global sites.
layout: default
permalink: /docs/publish/publish-sticky/
title: Publish sticky — Tabbar & FAB
---
# Publish Sticky — Tabbar & FAB

Applies to: **Tabbar**, **Mobile Header**, **FAB / Support bar**

Sticky menus are floating — they always appear on screen and are not attached to a fixed DOM position. Embed method is the simplest: activate site-wide via a single script.

---

## Shopify — 3 steps

### Step 1: Enable App Embeds in Theme Editor

Go to **Theme Editor → App Embeds** and enable the Navi+ toggle.

- This does **not change the theme layout** and can be turned off at any time without affecting the store.
- Only needs to be done **once per store** — skip this step for subsequent menus.

### Step 2: Enable "Publish this menu in sticky mode"

The toggle in the **Step 2** card of the Publish modal. Enable = menu is live, disable = hidden from website.

### Step 3 (optional): Configure device and page visibility

See [Publish Filter](/docs/publish/publish-filter/) for details.

---

## Global (WordPress, Wix, Webflow...) — 3 steps

### Step 1: Paste embed code into `<head>`

The code is shown in the modal with a **Copy** button. Paste it into your website's `<head>`:

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` identifies your store — each store has a unique token.
- `start.js` loads async and does not block page rendering.

### Step 2: Enable "Publish this menu in sticky mode"

Same as Shopify — enable the toggle.

### Step 3 (optional): Configure device and page visibility

See [Publish Filter](/docs/publish/publish-filter/) for details.

---

## Notes by menu type

| Menu | Restriction |
|---|---|
| Mobile Header | Desktop toggle disabled — mobile only |
| FAB / Support bar | No position selector (FAB has its own positioning in Setting tab) |
| Tabbar | Full mobile + desktop options available |

---

## Troubleshooting

**Menu doesn't appear after enabling toggle?**
1. Check that App Embeds is enabled (Shopify) or embed code is pasted correctly (Global).
2. Check device settings — **Show menu on mobile** or **Show menu on desktop** must be on.
3. Check URL filter — it may be filtering out the current page.
4. Hard refresh browser (Ctrl+Shift+R) to clear cache.
