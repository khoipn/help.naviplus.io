---
description: Publish Slide (Context) menus in Navi+ — enable toggle then configure a trigger to open the menu.
layout: default
permalink: /docs/publish/publish-slide/
title: Publish slide — Context slide menu
---
# Publish Slide — Context Slide Menu

Applies to: **Context Slide menu**

Slide menus are **different from Sticky**: after publishing, the menu does **not appear automatically** on the page. It only opens when triggered by an action. This is the key distinction from Sticky menus.

---

## Publish flow

```
Step 1: Embed code into website
        ↓
Step 2: Enable "Publish this menu" toggle
        ↓
Step 3: Configure trigger (how to open the menu)
```

After Step 2, the menu is loaded on the website but **in a hidden state**. Step 3 decides what opens it.

---

## Step 1: Embed code

**Shopify:** Go to **Theme Editor → App Embeds** → enable Navi+. Do this once only.

**Global:** Paste into `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Step 2: Enable toggle

Enable the **"Publish this menu"** toggle in the Publish modal.

> After this step, the menu **will not appear** on the website yet. This is expected — Slide menus require a trigger to open.

---

## Step 3: Configure trigger

There are 4 ways to open a Slide menu:

---

### Method 1: Open from a Navi+ menu item

Use the syntax `open:NaviMenu(embed_id)` in the **Link** field of any menu item.

Example: A Tabbar has a "Menu" item → Link = `open:NaviMenu(ABC123)` → tapping that item opens the Slide menu.

The **embed_id** is shown in the modal and can be clicked to copy:
```
open:NaviMenu(ABC123)
```

This is the most common approach — combining Tabbar + Slide menu to extend navigation space.

---

### Method 2: Open when clicking an element on the page (CSS Selector)

Enter one or more CSS Selectors, separated by commas. Navi+ listens for click/tap events on matching elements and opens the Slide menu.

**Device-specific syntax:**

| Suffix | Device |
|---|---|
| `#element` | Both mobile and desktop |
| `#element(M)` | Mobile only |
| `#element(D)` | Desktop only |

**Examples for Shopify Dawn theme:**

| Purpose | CSS Selector |
|---|---|
| Replace mobile hamburger menu | `#Details-menu-drawer-container` |
| Different selectors per device | `#Details-menu-drawer-container(M), .desktop-menu-btn(D)` |

> After configuring a CSS Selector trigger, consider hiding the original element to avoid flash — see [Publish Optimize](/docs/publish/publish-optimize/).

---

### Method 3: Call a JavaScript function

Call this function from anywhere in the page code:

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Suitable for integrating the Slide menu into custom UI without a fixed selector.

---

### Method 4: Fixed sidebar on desktop

Instead of open/close, the Slide menu can be pinned as a permanent left sidebar on desktop.

**How to enable:** Go to the **Advance** tab → select **"Fix on left"** direction.

No trigger needed — the menu is always visible on desktop.

---

## Troubleshooting

**Toggle enabled but menu doesn't appear?**
→ Correct behavior. Slide menus need a trigger (Step 3). Check that at least one method is configured.

**CSS Selector not working?**
1. Use **Navi+ Debug Mode** to find the exact selector for the element.
2. Check that the element actually exists on the page (some themes hide/remove elements at certain breakpoints).
3. Try adding `(M)` or `(D)` suffix to separate by device.

**Want multiple Slide menus on the same page?**
→ Create separate menus, each with a different `embed_id`, using different triggers.
