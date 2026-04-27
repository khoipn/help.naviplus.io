---
description: Understand the three-level design inheritance system in Navi+ — how styles cascade from Level 1 to Level 2-3 to per-item overrides.
layout: default
permalink: /docs/design/design-overview/
title: Design Overview — Inheritance & Override
---
# Design Overview — Inheritance & Override

Navi+ uses a **three-level style system**. Understanding this lets you style your menu efficiently without repeating settings.

---

## Three Layers

```
┌─────────────────────────────────────────────────────┐
│  LEVEL 1  (Design → Level 1)                        │
│  Applies to all top-level menu items                │
│  This is the global default for the entire menu     │
└───────────────────┬─────────────────────────────────┘
                    │  Level 2-3 inherits if empty
┌───────────────────▼─────────────────────────────────┐
│  LEVEL 2-3  (Design → Level 2-3)                    │
│  Applies to submenus / dropdowns                    │
│  Empty = same as Level 1                            │
└───────────────────┬─────────────────────────────────┘
                    │  Per-item overrides everything
┌───────────────────▼─────────────────────────────────┐
│  PER-ITEM  (Edit Item → Interface)                  │
│  Per-item settings for individual items             │
│  Overrides Level 1 and Level 2-3 completely         │
└─────────────────────────────────────────────────────┘
```

---

## Inheritance Rules

**Level 2-3 inherits from Level 1** for all empty fields:

| Level 2-3 field | Inherits from Level 1 |
|---|---|
| Text Color | Text Color |
| Font Size | Font Size |
| Font Weight | Font Weight |
| Icon Color | Icon Color |
| Icon Size | Icon Size |
| Display Layout | Display Layout |
| Align | Align |
| Divider Color | Divider (global) |

If you only configure Level 1, submenus automatically follow. Only go to Level 2-3 when you want submenus to look **different** from the main menu.

---

## Per-Item Override

Settings applied to a specific item in **Edit Item → Interface** (text color, icon size, background, etc.) override Level 1 and Level 2-3 for that item only. Other items are unaffected.

To remove an override: clear the field in Edit Item — the item reverts to Level 1/2-3.

---

## Example

**Goal:** All 5 items are white text, except "Sale" which is red.

1. Design → Level 1 → Text Color = `#FFFFFF`
2. Edit Item → "Sale" → Interface → Text Color = `#FF0000`

Result: 4 items stay white, "Sale" turns red. No need to edit each item individually.

---

## Mobile | Desktop Syntax

Some spacing fields support different values for mobile and desktop:

```
8 16 8 16             →  same value on both devices
8 8 8 8 | 12 24 12 24  →  left: mobile, right: desktop
```

The part before `|` applies on mobile; the part after applies on desktop (≥768px).
