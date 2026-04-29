---
description: Control which pages and devices your Navi+ menu appears on — using device toggles, URL keyword rules, and Shopify page type filters.
layout: default
permalink: /docs/setting/setting-display-rules/
title: Setting display rules — Conditional visibility
---
# Setting Display Rules — Conditional Visibility

Control where and when your menu appears based on device type, URL, or Shopify page type.

---

## Display by Device

Found in the **Publish** tab of the menu (not per-item):

| Toggle | Effect |
|---|---|
| **Mobile** | Show/hide menu on mobile screens |
| **Desktop** | Show/hide menu on desktop screens |

Default: only Mobile is enabled. You must manually enable Desktop if you want the menu to appear on larger screens.

> To show/hide individual items by device → see [Item Visibility](/docs/menu-items/item-visibility/).

---

## Display by URL Keywords

Two fields in **Setting → Display by Keywords** let you control which URLs the menu appears on.

### Show only when URL contains keyword

**Field:** `Publish — Contain Keyword`

```
collections, products/sale
```

Menu appears only on pages whose URL contains `collections` **or** `products/sale`.

**Example:** A "Shop Navigation" menu for product pages → only show on `collections/` and `products/`.

---

### Hide when URL contains keyword

**Field:** `Publish — Don't Contain Keyword`

```
checkout, account/login
```

Menu is hidden on checkout and login pages; visible everywhere else.

**Example:** Hide the Tabbar during checkout to avoid distracting the customer.

---

## Display by Shopify Page Type

The **Publish** tab also includes 6 Shopify page groups (Shopify stores only):

| Group | Pages |
|---|---|
| **Home** | Home page |
| **Product Detail** | Product detail pages |
| **Product Categories** | Collection / category pages |
| **Pages** | Static pages (About, Contact, etc.) |
| **Blogs** | Blog listing and article pages |
| **Others** | Pages not in the 5 groups above |

Uncheck a group → the menu will not appear on that page type.

---

## How Rules Stack

All conditions are evaluated together in this order:

```
1. Is the device enabled?              →  If no: hidden
2. Is the page type checked?           →  If no: hidden
3. Does the URL match "Don't show"?    →  If yes: hidden
4. Does the URL match "Only show"?     →  If no: hidden
5. Show menu
```
