---
description: "CSS Selector syntax for skeleton loading triggers and theme integration — optimizing menu load time and UX with device-specific and labeled selector formats."
layout: default
permalink: /docs/development/optimize-loading-css-selectors/
title: Speed and UX optimization — CSS selector syntax
---
# Speed and UX optimization — CSS selector syntax

In **Theme Editor → App embeds → Store Connector**, under the **Speed & UX optimization** group, you'll find 2 CSS Selector fields that help your menu load smoothly — no need to write custom CSS/JS like the old way. This guide explains the syntax for both fields.

---

## 2 fields, 2 different purposes

| Field | Used for | Mechanism |
|---|---|---|
| **Mobile Menu CSS Selector** | Menu trigger button (hamburger) when using CSS Selector event binding | Click the button BEFORE Navi+ loads → shows a skeleton menu immediately (instant feedback) instead of silent waiting. As Navi+ loads, the skeleton gives way to the real menu as content arrives. |
| **CSS Selector for Mega Menu Replacement** | Original theme menu area, when Navi+ runs in Replacement mode | Covers that area with a shimmer loading effect while waiting for Navi+ to load, preventing the original content from flickering in and out when replaced. |

Both fields are **optional** — leave them blank and nothing changes from default behavior.

---

## Common syntax — multiple selectors separated by comma

```
selector-1, selector-2, selector-3
```

Separate multiple selectors within a single field using commas `,` or semicolons `;`. Commas/semicolons inside parentheses `(...)`, brackets `[...]`, or quoted strings `"..."` / `'...'` (like in attribute selectors `[data-value="a,b"]`) are recognized in context and won't be mistaken for selector delimiters.

---

## Legacy syntax — `(M)` / `(D)` suffixes

Works in **both fields**. Add a suffix right after the selector to limit by device:

```
.hamburger-mobile (M)
.hamburger-desktop (D)
.trigger-all-devices
```

| Suffix | Applies to |
|---|---|
| `(M)` | Mobile only |
| `(D)` | Desktop only |
| *(no suffix)* | All devices |

---

## Labeled syntax — "Mobile Menu CSS Selector" field only

The **Mobile Menu CSS Selector** field supports an advanced syntax to customize the skeleton menu appearance — the **CSS Selector for Mega Menu Replacement** field does NOT support this, accepting only `(M)` / `(D)`.

```
.hamburger (Device:M | Color:#1a1a1a | Direction:left | Width:85%)
```

Identified by colons `:` inside `(...)` — if colons are present, it's Labeled format; if not, it's Legacy (`(M)` / `(D)`). Parameters are separated by pipes `|`:

| Parameter | Valid values | Default when omitted/invalid |
|---|---|---|
| `Device` | `M` or `D` (listing both `M,D` = no device restriction, same as omitting) | All devices |
| `Color` | Hex CSS code: `#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa` | `#fff` |
| `Direction` | `left` or `right` — skeleton slide-out direction | `left` |
| `Width` | Percentage `NN%` or pixels `NNpx` (integer or decimal) | `85%` |

**Example:**
```
.hamburger (Device:M | Color:#1a1a1a | Width:320px)
```
→ Applies only on Mobile, skeleton background `#1a1a1a`, fixed width `320px`.

### Fault tolerance per parameter

- Whitespace and case (uppercase/lowercase) in both keys and values are normalized before matching (`Color: #1A1A1A` and `color:#1a1a1a` are identical).
- An invalid parameter format (e.g., `Color:red` — not hex) or unknown key (typo, non-existent name) is **silently skipped for that parameter only**, using the default value instead — it won't break other parameters or other selectors in the same field.

---

## Invalid selectors (CSS syntax errors)

If a selector in the **Mobile Menu CSS Selector** field has a real CSS syntax error (different from invalid Labeled parameters — this is a selector that can't parse), Navi+ logs a warning to the browser Console (F12 → Console), pointing directly to the field:

```
[Navi+] INVALID TRIGGER CSS SELECTOR — this one was skipped
selector      : <invalid selector>
browser error : <browser error message>
Fix it in Theme Editor → App embeds → Store Connector →
Mobile Menu CSS Selector.
```

The invalid selector is skipped alone; other valid selectors in the field continue to work normally.

---

## Real-world examples

### 1. Protect default hamburger, no customization needed

```
#Details-menu-drawer-container
```
Early clicks still get instant feedback (default skeleton), no need to declare Device/Color/Direction/Width.

### 2. Mobile hamburger only, slide from right, brand color

```
.hamburger-mobile (Device:M | Color:#0f172a | Direction:right | Width:90%)
```

### 3. Replace theme's original mega menu area on both devices

```
nav.header__inline-menu
```
(in **CSS Selector for Mega Menu Replacement** field, no suffix = applies to all devices)

### 4. Combine multiple selectors, device-specific limits

```
.mega-menu (D), .mobile-nav-wrapper (M)
```
