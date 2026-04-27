---
description: Configure menu position, padding, margin, z-index, and submenu width in Navi+.
layout: default
permalink: /docs/setting/setting-layout/
title: Setting Layout — Position & Spacing
---
# Setting Layout — Position & Spacing

These settings control the **position** of the entire menu on the page, its **stacking order** relative to other elements, and the **width** of submenus.

---

## Menu Padding & Margin

Controls the outer and inner spacing of the **entire menu container** — different from item-level padding in Design.

| Field | Description |
|---|---|
| **Margin Top / Right / Bottom / Left (px)** | Space between the menu and the screen edge or surrounding elements |
| **Padding Top / Right / Bottom / Left (px)** | Space inside the menu container, before items are displayed |

**When to use:**
- Push a Tabbar above the browser navigation bar on iOS: `Margin Bottom = 34`
- Add space between a Mega Menu and the header: `Margin Top = 8`

---

## Z-Index

Stacking order of the menu relative to other page elements (header, chat widget, popups, etc.).

| Field | Description | Default |
|---|---|---|
| **Z-Index** | Integer value — higher = on top | Auto |

**When to adjust:**
- Menu is covered by a sticky header → increase Z-Index above the header value.
- Menu is covering a chat widget → decrease Z-Index below the widget.

Common reference values: theme headers are usually `1000–9999`; chat widgets are usually `9999–99999`.

---

## Submenu Width

Applies to dropdown submenus (Tabbar, single-column Mega Menu).

| Field | Description | Default |
|---|---|---|
| **Submenu Width (px)** | Width of single-column submenu panels | 360px |

---

## Desktop — Submenu Behavior & Width

Applies when the menu is displayed on desktop.

| Field | Description |
|---|---|
| **Show submenu on hover** | Open submenus on mouse hover without clicking |
| **Full-expand submenu width (px)** | Width of multi-column submenus (Desktop Mega Menu) |
| **Submenu direction** | Direction submenus open: right / left / up / down |

---

## Multi-Sites *(Elite)*

Embed the menu on multiple domains outside the main Shopify store.

| Field | Description |
|---|---|
| **Multi-Sites** | Comma-separated list of domains (e.g. `brand.com,shop.brand.com`) |
