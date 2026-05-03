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

The trigger UI is split into two tabs: **Mobile setup** and **Desktop setup**. Methods can be combined freely. A **For developers** zone sits outside the tabs.

---

### Method 1: Open from a Navi+ menu item

Use the syntax `open:NaviMenu(embed_id)` in the **Link** field of any menu item. The embed_id is shown in the modal and can be clicked to copy:

```
open:NaviMenu(ABC123)
```

Requires **Business plan or above** (needs 2+ menus).

**Mobile — common use cases:**
- A Tabbar with a first item like "☰ Menu" that opens the Slide menu — **the most common setup**
- A FAB & Support menu with a single item that opens the Slide menu
- A Mobile Mega menu with a "☰ Menu" item under the header

**Desktop — common use cases:**
- A Desktop Mega menu with a "☰ Menu" item — keeps a consistent experience with mobile
- A Desktop Mega menu with a single "☰" item placed before the logo — mirrors the mobile hamburger on desktop (requires some CSS; [contact us](mailto:support@naviplus.io) if you need help)
- A FAB & Support menu with a single item that opens the Slide menu
- A Tabbar with a "☰ Menu" item

---

### Method 2: Open when clicking an element (CSS Selector)

Enter one or more CSS Selectors, separated by commas (`,`).

**Device-specific syntax:**

| Suffix | Device |
|---|---|
| `#element` | Both mobile and desktop |
| `#element(M)` | Mobile only |
| `#element(D)` | Desktop only |

**Step 1 — find your selector:**

*On Shopify (Dawn, Craft, Spotlight...):*
Try `#Details-menu-drawer-container` for the mobile hamburger menu. For other themes, use **Navi+ Debug Mode**: visit `yoursite.com/#navidebug-on`, hover the element, press `Cmd/Ctrl+C` to copy its selector.

*On desktop:*
There's usually no hamburger icon — you need to create a clickable trigger:
- Add a "☰ Menu" item to your existing mega menu
- Or place a ☰ icon before the logo using HTML/CSS ([contact us](mailto:support@naviplus.io) if you need help)

**Step 2 — optimize UX:**
Once set up, add a loading indicator to the replaced element to avoid layout flash — see [Publish Optimize](/docs/publish/publish-optimize/).

---

### Advanced (Desktop): Fixed Sidebar

Instead of open/close, the Slide menu can display as an always-visible sidebar on desktop.

**How to enable:** Go to **Advanced** → **Slide-in direction** → select the Fixed Sidebar option → enable "Display a fixed menu on desktop".

No trigger needed — the menu is always visible on desktop.

---

### For developers: JavaScript function

Call this function from anywhere in the page code:

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Suitable for integrating the Slide menu into custom UI without a fixed selector.

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
