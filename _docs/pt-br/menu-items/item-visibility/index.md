---
description: How to control when and for whom a menu item is visible in Navi+ — published state, login conditions, and page-based hiding.
layout: default
permalink: /pt-br/docs/menu-items/item-visibility/
title: Visibility & Conditions
---
# Visibility & Conditions

The **Publish** section in the Edit Item panel lets you control who sees an item, when, and on which pages.

---

## Is Published

**Default: on (item is visible to everyone).**

Toggle this off to hide the item from the live menu without deleting it. The item stays in the editor — you can re-enable it at any time.

**Use when:**
- Temporarily hiding a seasonal sale link.
- Preparing an item before it goes live.
- Keeping a backup item without deleting it.

---

## Hide when logged in

When enabled, the item is **only visible to visitors who are not logged in**.

**Use for:**
- A "Log in" button — customers who are already logged in don't need it.
- A "Create account" link.

---

## Only show when logged in

When enabled, the item is **only visible to logged-in customers**.

**Use for:**
- "My account" link.
- Loyalty points, order history.
- Features reserved for members.

---

## Hide on specific page types (hidepages)

Use the `hidepages` attribute in **Advance → Attributes** to hide an item on certain page types.

**Syntax:**

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Value | Pages hidden on |
|---|---|
| `index` | Home page |
| `products` | Product detail pages |
| `collections` | Collection / category pages |
| `pages` | Static pages (About, Contact…) |
| `blogs` | Blog listing and post pages |
| `others` | Any page not in the above categories |

Separate multiple values with `|`, no spaces.

**Example:** Hide a "Buy now" button on the home page and blog pages:

```
hidepages=index|blogs
```

---

## Hide by device (Mobile / Desktop)

> **Important:** Navi+ does not have a per-item mobile/desktop toggle. Device targeting is controlled at the **menu level**, not the item level.

**The correct approach:**

- Go to the **Publish** tab of the menu → toggle **Mobile** and **Desktop** for the entire menu.
- Create two separate menus — one for mobile, one for desktop — and set the device toggle on each.

**Per-item workaround (if truly needed):**  
Use **Advance → CSS** with a media query:

```css
/* Hide this item on mobile only */
@media (max-width: 767px) { display: none !important; }

/* Hide this item on desktop only */
@media (min-width: 768px) { display: none !important; }
```

---

## Summary

| Condition | How to set |
|---|---|
| Hide completely | Is Published → off |
| Hide from logged-in users | Hide when logged in → on |
| Hide from guests | Only show when logged in → on |
| Hide on home page | Attributes: `hidepages=index` |
| Hide on mobile | CSS: `@media (max-width: 767px) { display: none !important; }` |
| Hide on desktop | CSS: `@media (min-width: 768px) { display: none !important; }` |
