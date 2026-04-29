---
description: Optimize speed and UX after publishing Navi+ menus — prevent flash of original content when using Insert/Replace or CSS Selector triggers.
layout: default
permalink: /docs/publish/publish-optimize/
title: Publish optimize — Speed & UX
---
# Publish Optimize — Speed & UX

When using **Insert/Replace** (Section menu) or **CSS Selector trigger** (Slide menu), the website needs a brief moment to load Navi+. During that time, the original element (the theme's old menu) is still visible — causing a **flash** or layout shift.

---

## When is optimization needed?

| Method | Needs optimization? |
|---|---|
| Sticky / FAB (App Embeds / `<head>`) | No — menu is added to DOM, nothing replaced |
| Slide menu — Method 1 (open from Navi+ item) | No — trigger button is a Navi+ item |
| **Slide menu — Method 2 (CSS Selector trigger)** | **Yes** — original trigger element stays visible until Navi+ loads |
| **Section — Replace** | **Yes** — original menu shows first, then gets replaced by Navi+ |
| Section — Insert Before/After | Not required — two menus appear side by side |

---

## Technique: Hide original element via CSS

### How it works

1. Use CSS to hide the original element immediately (before Navi+ loads).
2. Optionally show a loading placeholder to prevent layout shift.
3. Navi+ automatically removes or replaces the element when ready — layout stabilizes.

### Implementation

**Add CSS to hide the original element** (paste into theme Custom CSS or `<head>`):

```css
/* Hide original menu while Navi+ loads */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* reserve space to prevent layout shift */
}
```

Once Navi+ replaces the element, this CSS has no effect — the element is removed from the DOM.

**With loading placeholder** (advanced):
```css
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  position: relative;
}
nav.header__inline-menu ul.list-menu::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f5f5f5;
  border-radius: 4px;
}
```

---

## Special case: Slide menu with CSS Selector trigger

When a Slide menu uses a CSS Selector trigger (Method 2), the original trigger element (e.g. the theme's hamburger button) is still visible and **still works** (opens the theme's slide panel) until Navi+ loads and overrides the event.

### Solution A: Hide original element, use Navi+ item as trigger instead

```css
/* Hide theme hamburger button */
#Details-menu-drawer-container {
  display: none !important;
}
```

Then use **Method 1** (open from Navi+ item) instead of Method 2 — cleaner, no flash to worry about.

### Solution B: Fade out the original element

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

Add JS: when Navi+ is ready (`naviReady` event), remove the hiding style to restore the original element's visibility.

---

## General speed notes

- `start.js` loads with `async` — does not block page rendering.
- Menu JSON config is cached on Cloudflare CDN — fast load from nearest edge node.
- No server-side rendering for visitors — all menu rendering is client-side from static JSON.

To preload the script for maximum speed:
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
