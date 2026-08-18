---
description: 'Deep dive into a single menu item — its HTML structure (icon, image, name, description, arrow, badge) and how to style just that item with the per-item CSS box, including & (this item), inner selectors, hover, and @media.'
layout: default
permalink: /docs/usage/menu-item-structure-and-css/
title: Menu item structure and CSS
---
# Menu item structure and CSS

This page goes deep into **one menu item** — the HTML it renders and how to style **just that item** using the item's own CSS box (**edit the item → Advanced → Internal Stylesheet / CSS**).

> This box styles **only the item you are editing**, and the CSS **travels with the item** when you duplicate it. For CSS across the whole menu, use **Custom CSS for this menu** instead — see [Menu structure and CSS](/docs/usage/menu-structure-and-css/).

***

## The structure of one item

Every item is a single `li` containing a `div.inner`. Inside `.inner`, in order:

```html
<li class="item level-1 …" data-name="Shop">
  <div class="inner inner-level1">
    <span class="arrow"></span>            <!-- submenu arrow (if any) -->
    <!-- <span class="cart_count">3</span> --> <!-- cart badge with count (optional) -->

    <!-- MEDIA — icon OR image (if the item has an image, the icon is not rendered) -->
    <span class="icon"><i class="ri-store-2-line"></i></span>
    <!-- or -->
    <div class="image-border">
      <span class="image-box"><span class="image"><img src="…"></span></span>
    </div>

    <!-- TEXT -->
    <div class="info">
      <div class="flexcol">
        <span class="name">Shop</span>
        <div class="description">Browse all categories</div>   <!-- only if you filled description -->
      </div>
    </div>
  </div>
</li>
```

### The parts you can target

| Part | Selector | Notes |
| ---- | -------- | ----- |
| The item itself (the row) | `&` | The `li`. `&` is a shortcut for "this item". |
| Content wrapper | `.inner` | Wraps everything inside the item |
| Icon glyph | `.icon i` | Remix Icon (`ri-…`) |
| Image | `.image img` (box: `.image-border`, `.image-box`, `.image`) | Shown instead of the icon when the item has an image |
| Title | `.name` | The label |
| Description | `.description` | Only exists if you filled the description field |
| Text column | `.info`, `.flexcol` | Holds name + description |
| Arrow | `.arrow` | Submenu arrow |
| Cart badge | `.cart_count` | Only for cart items with a count |

***

## Writing CSS for one item

The box accepts **three forms, mixable together**. You never type `#SF-…` and never add a `<style>` tag — Navi+ scopes everything to this one item automatically.

### 1. `&` — this item (recommended)

`&` means the item's own row (the `li`), just like `&` in Sass:

```css
& { border: 1px solid #eee; border-radius: 12px; }
&:hover { background: #f8fafc; }
```

### 2. Inner selectors — parts inside the item

Use the class names from the table above:

```css
.name { font-weight: 700; }
.description { font-size: 12px; opacity: .8; }
.icon i { font-size: 22px; color: #2563eb; }
.image img { border-radius: 10px; }
```

A **space after `&`** also means "inside the item", so `& .name` and `.name` are the same. `&` written **without a space** (`&:hover`, `&.active`) styles the row itself.

### 3. Bare declarations — the older shortcut

Writing properties with **no selector** applies them to the item's row:

```css
color: red;
font-weight: 700;
```

This keeps working (older menus rely on it), but `&` is clearer — and bare declarations **cannot** be used inside `@media`.

***

## Responsive with `@media`

`@media` works here. Inside `@media` you must use a selector (that's standard CSS), so use `&` for the item itself:

```css
/* Smaller padding + hide the description on phones */
@media (max-width: 768px) {
  & { padding: 8px; }
  .description { display: none; }
  .name { font-size: 13px; }
}
```

> To **show or hide** an item by device, prefer **Display on mobile / Display on desktop** in the editor — not CSS. On **Wix**, viewport-based `@media` may not match the real screen; use the Display settings there.

***

## Examples

**Turn one item into a pill / badge:**

```css
& { background: #111; color: #fff; border-radius: 999px; padding: 6px 14px; }
.name { color: #fff; }
```

**Highlight on hover:**

```css
&:hover { transform: translateY(-2px); transition: transform .15s; }
&:hover .name { color: #2563eb; }
```

**Bigger, colored icon:**

```css
.icon i { font-size: 24px; color: #e11d48; }
```

**Rounded image with a subtle frame:**

```css
.image img { border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,.12); }
```

**Compact on mobile:**

```css
& { padding: 12px; }
@media (max-width: 768px) {
  & { padding: 6px; }
  .description { display: none; }
}
```

***

## Good to know

* **No `#SF-…`, no `<style>` tag** — Navi+ scopes the CSS to this one item; it never affects other items.
* The CSS **travels with the item** when you duplicate it (it is per-item, reusable).
* If a property is set both here **and** by the item's visual settings (Media box / Inner box color, border, shadow…), the **visual setting wins** — it is applied inline. Clear that setting if you want your CSS to take over.
* Use the **expand icon** (top-right of the box) for a larger editor; press **Esc** or **Done** to close.

***

Support documentation — **Navi+**
