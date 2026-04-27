---
description: Publish Section menus (Mega Menu, Grid) in Navi+ — Insert/Replace with CSS Selector or App Block on Shopify.
layout: default
permalink: /docs/publish/publish-section/
title: Publish Section — Mega Menu & Grid
---
# Publish Section — Mega Menu & Grid

Applies to: **Mobile Mega Menu**, **Mobile Grid**, **Desktop Mega Menu**

Section menus are **not floating** — they are inserted at a specific position in the page layout. There are two deploy methods, which can be used together:

| | Method 1: Insert/Replace | Method 2: App Block |
|---|---|---|
| Platform | Shopify + Global | Shopify only |
| Mechanism | CSS Selector → insert before/after/replace element | App Block "Navi+ on Section" in Theme Editor |
| Flexibility | High — embed anywhere | Medium — limited by Shopify section schema |
| Setup | Requires knowing CSS Selector | Only need to enter Embed ID |

---

## Method 1: Insert/Replace with CSS Selector

The **Recommended** method — works for both Shopify and Global.

### Step 1: Embed code

**Shopify:** **Theme Editor → App Embeds** → enable Navi+. Once only.

**Global:** Paste into `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### Step 2: Enable "Publish menu by Insert/Replace method"

Enable the toggle to expand the configuration section below.

### Step 3: Enter CSS Selector

Enter **one** CSS Selector. The menu will be placed relative to the matched element.

**Device-specific syntax:**

| Suffix | Device |
|---|---|
| `header` | Both mobile and desktop |
| `header(M)` | Mobile only |
| `header(D)` | Desktop only |

**CSS Selector tips for popular Shopify themes:**

| Menu type | Purpose | Suggested CSS Selector |
|---|---|---|
| Desktop Mega | Replace desktop navigation | `nav.header__inline-menu ul.list-menu` |
| Desktop Mega | Insert below header | `header` |
| Mobile Mega | Insert below mobile header | `header` |

### Step 4: Choose placement (Insert/Replace)

| Value | Behavior |
|---|---|
| **Replace** | Completely replace the original element with Navi+ menu |
| **Insert Before** | Insert Navi+ menu before the element |
| **Insert After** | Insert Navi+ menu after the element |

> After choosing **Replace**, consider adding CSS to hide the original element while Navi+ loads — see [Publish Optimize](/docs/publish/publish-optimize/).

---

## Method 2: App Block (Shopify only)

### How to set up

1. Copy the menu's **Embed ID** (shown in the modal — click to copy).
2. Go to **Shopify Theme Editor** → find the **"Navi+ on Section"** App Block.
3. Paste the Embed ID into the corresponding field.
4. Save theme.

### "Fixed on top while scrolling"

Toggle to pin the Section menu at the top of the page while scrolling.

**When to use:** If the theme doesn't have a built-in sticky header, enable this so the Desktop Mega menu stays visible as users scroll down.

---

## Can both methods be used together?

Yes. Shopify users can enable both:
- App Block for Theme Editor preview (more stable, easier to preview).
- Insert/Replace for more precise placement on the storefront.

Typically only one method is needed.

---

## Notes by menu type

| Menu | Device | Notes |
|---|---|---|
| Mobile Mega Menu | Desktop toggle disabled | Mobile only |
| Mobile Header | Desktop toggle disabled | Mobile only |
| Desktop Mega Menu | Mobile toggle disabled | Desktop only |
| Mobile Grid | Both | No restrictions |

---

## Troubleshooting

**Menu doesn't appear after configuring Insert/Replace?**
1. Check that the CSS Selector is correct — use DevTools or Navi+ Debug Mode.
2. Check that "Publish menu by Insert/Replace method" toggle is enabled.
3. Check that App Embeds / embed code is in place.

**Menu appears twice (duplicated)?**
→ Both App Block and Insert/Replace are active simultaneously. Disable one of them.
