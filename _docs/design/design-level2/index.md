---
description: Configure the appearance of submenu items in Navi+ — with automatic inheritance from Level 1 for all empty fields.
layout: default
permalink: /docs/design/design-level2/
title: Design level 2-3 — Submenu items
---
# Design Level 2-3 — Submenu Items

Settings at **Design → Level 2-3** apply to submenu items (dropdowns that appear when a parent item is opened). Any field left empty **automatically inherits** the corresponding value from Level 1.

> **Rule:** Only fill in fields here when you want the submenu to look **different** from the main menu. Leave empty = same as Level 1.

---

## Text Style

| Field | Inherits from Level 1 when empty |
|---|---|
| **Text Color** | `textColor` |
| **Font Size (px)** | `textSize` |
| **Font Weight** | `fontWeight` |
| **Text Transform** | `textTransform` |
| **Font Family** | `fontFamily` |
| **Description Color** | `descriptionColor` |
| **Description Size (px)** | `descriptionTextSize` |

---

## Icon / Image Style

| Field | Inherits from Level 1 when empty |
|---|---|
| **Icon Color** | `iconColor` |
| **Icon Size (px)** | `iconSize` |
| **Space Text-Icon (px)** | `spaceTextIcon` |
| **Image Radius (px)** | `imageRadius` |

---

## Spacing

| Field | Description |
|---|---|
| **Item Padding (px)** | Inner spacing for submenu items. Does not inherit — uses theme default if empty |
| **Item Margin (px)** | Outer spacing for submenu items |
| **Min Height (px)** | Minimum height for submenu items |

---

## Background & Frame

| Field | Description |
|---|---|
| **Background Color** | Background color of the submenu area |
| **Border Radius (px)** | Corner rounding of the submenu container |
| **Hide Background** | Hide the submenu background |
| **Drop Shadow** | Drop shadow for the submenu container |

---

## Display

| Field | Inherits from Level 1 when empty |
|---|---|
| **Display Layout** | `displayLayout` |
| **Align** | `align` |

---

## Divider

| Field | Inherits from Level 1 when empty |
|---|---|
| **Divider Color** | `dividerColor` (from Design → Divider) |

---

## Example

**Goal:** Main menu has dark background and white text. Submenu should have white background and dark text.

Fill in only these two fields at Level 2-3:
- Background Color = `#FFFFFF`
- Text Color = `#000000`

All other fields (font size, icon size, spacing, etc.) inherit from Level 1 automatically.
