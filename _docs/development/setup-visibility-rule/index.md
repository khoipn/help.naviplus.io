---
description: "Visibility Rules apply to menus and menu items — showing or hiding based on device, cart contents, schedule, market, customer tags, and B2B customers."
layout: default
permalink: /docs/development/setup-visibility-rule/
title: Setup visibility rules
---
# Setup visibility rules

Visibility Rules are a set of conditions that determine whether a **menu** or a **menu item** displays to a specific visitor — based on device, cart contents, schedule, market, customer tags, or B2B customers — applying to both levels with exactly one set of rules.

---

## Where to set them

- **Menu item level**: open **Edit item** → **Visibility** group → click **Setup the Visibility rules**. *(The Visibility group is inside a collapsed block — if you don't see it immediately, click **See more** to expand it.)*
- **Menu level**: open the menu's **Setting** panel → **Visibility Rules** card.
- **Menu list shortcut**: on the menu list page, the **Visibility Rules** column shows **No rule** or **Setup** for each menu — click **Setup** to jump straight into that menu's Visibility Rules card.
- **Menu tree shortcut**: an item that isn't always visible shows an eye icon next to its name in the tree — hover it to see a summary of its active conditions, or click it to open that item's Visibility Rules directly.

From here on, all conditions, syntax, and how they combine are **shared** for both levels — only the location differs.

> Market / Customer tag / B2B apply only to **Shopify**, and are currently freeform text fields (no preset dropdown) — each field has a link **"View your Markets"** / **"Manage customer tags"** / **"Manage B2B companies"** that takes you directly to the corresponding Shopify Admin page to verify the exact value before typing.

---

## Supported conditions

| Condition | Plan | Show when | Input value |
|---|---|---|---|
| **Device** | Business and up | Matches the selected device | `All devices` / `Mobile only` / `Desktop only` |
| **Page / URL** | Business and up | Correct page type, or URL contains/lacks a keyword | Tick page types (Home/Products/Collections/Pages/Blogs/Others) + 2 keyword fields |
| **Cart contents** | Business and up | Cart has N or more products (or fewer than N, with "hide when below" flipped) | Integer, e.g. `1` |
| **Schedule** | Business and up | Within the set date + time range | Start → end date-time, entered in **UTC** (convert from local time before typing), compared against the visitor's device clock |
| **Market / Country** | Elite | Visitor browsing under the selected market | Market handle, multiple values comma-separated: `us, ca` |
| **Customer tag** | Elite | Logged-in visitor has the tag | Single tag, e.g. `vip` |
| **B2B customer** | Elite | Logged-in visitor using a B2B account | On/off toggle |

---

## How conditions combine

All enabled conditions must **all match** for the menu/item to show — just one condition failing hides it immediately. Empty conditions are skipped and don't count.

For example, enabling both Device = Mobile only **and** Schedule = 01/09–15/09: shows only to visitors on mobile phones, **and** only during those exact 2 weeks.

<div align="center">

<svg viewBox="0 0 680 300" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="vrArrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#1a7a4f"/>
    </marker>
    <marker id="vrArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="150" y="10" width="180" height="30" rx="15" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="30" font-size="12.5" text-anchor="middle" fill="#1a1d21">Visitor lands on the page</text>

  <line x1="240" y1="40" x2="240" y2="58" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="60" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="86" font-size="12.5" text-anchor="middle" fill="#1a1d21">Device — matches the selected device?</text>

  <line x1="240" y1="104" x2="240" y2="122" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="124" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="150" font-size="12.5" text-anchor="middle" fill="#1a1d21">Page/URL, Cart, Schedule — conditions met?</text>

  <line x1="240" y1="168" x2="240" y2="186" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="188" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="214" font-size="12.5" text-anchor="middle" fill="#1a1d21">Market, Tag, B2B (Elite plan) — matches this visitor?</text>

  <line x1="240" y1="232" x2="240" y2="250" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="150" y="252" width="180" height="34" rx="17" fill="#1a7a4f"/>
  <text x="240" y="274" font-size="13" font-weight="600" text-anchor="middle" fill="#fff">Show</text>

  <rect x="470" y="55" width="160" height="182" rx="10" fill="#fef2f2" stroke="#fecaca"/>
  <text x="550" y="140" font-size="16" font-weight="700" text-anchor="middle" fill="#b91c1c">Hide</text>
  <text x="550" y="158" font-size="11" text-anchor="middle" fill="#b91c1c">immediately</text>

  <line x1="420" y1="82" x2="470" y2="82" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="76" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="146" x2="470" y2="146" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="140" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="210" x2="470" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="204" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>
</svg>

</div>

*Only one enabled condition that fails (right branch ✗) hides the menu/item immediately — regardless of whether other conditions pass. Empty conditions (not enabled) are skipped and ignored.*

---

## 5 real-world examples

### 1. Wholesale and retail at once, hide wholesale pricing from retail customers (menu level)

Your shop sells both wholesale and retail. Wholesale customers (with a Shopify-approved B2B account) buy at better prices and have their own product/collection group. You want a menu group "Wholesale prices", "Quick wholesale orders", "Wholesale products" — showing only to wholesale customers, while retail visitors see no such menu at all (avoiding price confusion and hiding discounts).

**How to do it:** Build a separate menu (or menu group) containing wholesale links. Go to **Setting → Visibility Rules**, enable **B2B customer**. Result: this entire menu shows only to logged-in B2B account visitors; retail customers (even if logged in) won't see this menu while browsing.

### 2. Limited-time promotional banner, show only while shopping (item level)

You want a "Free shipping on orders $500+" banner showing only during the sale, and only to customers who've added at least one product to their cart (avoid distracting new visitors on landing).

**How to do it:** On the banner item, click **Setup the Visibility rules** → enable **Cart contents** = `1`, and **Schedule** = sale start/end dates.

### 3. Exclusive offer link for VIP customers (item level)

You want a menu item "VIP Perks" visible only to VIP-tagged customers, while regular customers don't even know it exists.

**How to do it:** Tag the VIP customer group via Shopify Flow/Customer Segment (Segment → Flow "Customer enters segment" → apply tag). On the item, click **Setup the Visibility rules** → enable **Customer tag** = `vip`.

### 4. Premium Tab Bar for VIP customers (menu level)

Your shop wants VIP customers to have a different navigation experience — dark background, glowing effects, premium feel — instead of sharing the standard interface with everyone else.

**How to do it:** Build a separate Tab Bar with a premium dark template, publish it to the same Tab Bar position your shop uses by default. Go to **Setting → Visibility Rules**, enable **Customer tag** = `vip` (tag via Shopify Flow/Customer Segment as in example 3). Result: VIP-tagged customers see the premium Tab Bar; regular customers still see your standard Tab Bar. *(Mobile Menu uses the same approach.)*

### 5. FAB prompts upsell right when customer adds first item (menu level)

Customer just added their first product to cart — the deciding moment — and you want a floating button (FAB) with promo info to pop up ("buy more to unlock free shipping", free gift...) to push them toward checkout faster, instead of the FAB always showing and cluttering the view from the start.

**How to do it:** Build a FAB (Floating Button) with promo content. Go to **Setting → Visibility Rules**, enable **Cart contents** = `1` (show only when cart has 1+ products). Result: the FAB stays hidden until a customer adds the first product to their cart. *Note: the condition only checks the NUMBER of products in cart, not order value — "$100+ unlocks free shipping" is marketing copy you write inside the FAB itself, not a Visibility Rule that calculates by price.*

---
