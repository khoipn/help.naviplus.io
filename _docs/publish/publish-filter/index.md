---
description: Filter Navi+ menu visibility by device, scroll behavior, Shopify page types, and URL keywords.
layout: default
permalink: /docs/publish/publish-filter/
title: Publish filter — Device & URL rules
---
# Publish Filter — Device & URL Rules

After enabling the publish toggle, you can narrow down when the menu appears using two filter layers: **device** (mobile/desktop + scroll behavior) and **URL keywords** (show/hide based on URL content).

---

## Filter by Device

### Enable/disable by platform

Two toggles at the top of the Publish modal:

| Setting | Default | Notes |
|---|---|---|
| **Show menu on mobile** | On | Show menu on mobile devices |
| **Show menu on desktop** | Off | Show menu on desktop devices |

Some menu types disable one of these toggles — for example, Desktop Mega Menu disables the mobile toggle.

---

### Scroll behavior (Sticky menus only)

Configured separately for mobile and desktop.

#### Mobile scroll

| Setting | Behavior |
|---|---|
| **Auto Hide on scroll down** | Hide menu when user scrolls **down** |
| **Auto Show after scroll** | Only show menu after user has scrolled down (not shown on page load) |

#### Desktop scroll

| Setting | Behavior |
|---|---|
| **Auto Hide on scroll down** | Hide menu when scrolling down on desktop |
| **Auto Show after scroll** | Only show after scrolling down on desktop |

> Auto Hide and Auto Show can be enabled together: menu hides on scroll down, reappears on scroll up — a common pattern for bottom tabbars.

---

### Screen position (Sticky / Tabbar only)

Choose a position from a radio button selector with visual illustrations.

**Mobile** — 6 preset positions (bottom center, bottom left, bottom right, top variants...)

**Desktop** — 12 preset positions (top bar, bottom bar, left/right sidebar, corner positions...)

---

### Page groups (Shopify only, Sticky menus)

Select which Shopify page types the menu appears on. Default: all.

| Group | URL pattern |
|---|---|
| Home | `/` |
| Product Detail | `/products/*` |
| Product Categories | `/collections/*` |
| Pages | `/pages/*` |
| Blogs | `/blogs/*` |
| Others | All remaining pages |

> Global market (WordPress, Wix, etc.) does not have this feature. Use URL keyword filter instead.

---

## Filter by URL Keywords

The **"Display the menu by keywords"** card — applies to all menu types except Context Slide.

### Two filter types

| Setting | Behavior |
|---|---|
| **Contain Keyword** | Menu **only shows** when URL **contains** at least one keyword |
| **Don't Contain Keyword** | Menu **does not show** when URL **contains** any of the keywords |

Multiple keywords separated by commas `,`.

### Examples

**Only show on snowboard product pages:**
```
Contain: snowboard
```
→ Menu only shows on URLs like `yourdomain.com/products/the-collection-snowboard-hydrogen`

**Hide on multi-location pages:**
```
Don't contain: multi-location
```
→ Menu does **not** show on `yourdomain.com/products/the-multi-location-snowboard`

**Combined:**
```
Contain: collections
Don't contain: sale, outlet
```
→ Only shows on collection pages, but hidden on "sale" and "outlet" collections.

### Notes

- Filter uses **full URL string matching**, not regex.
- Keywords are **case-insensitive**.
- Leave empty = no filter (menu shows on all pages).
- Both filters are ANDed — both conditions must be satisfied.
