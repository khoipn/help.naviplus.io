---
description: Configure the default style for all divider lines in your Navi+ menu — color, thickness, type, and width.
layout: default
permalink: /docs/design/design-divider/
title: Design Divider — Separator Lines
---
# Design Divider — Separator Lines

Settings at **Design → Divider** define the default appearance for all dividers in the menu.

This is a **menu-level** style — individual items can enable/disable their own divider and override the style via Edit Item → Basic Info → Add Divider.

---

## Fields

| Field | Description | Default |
|---|---|---|
| **Divider Color** | Line color (hex) | `#EEEEEE` |
| **Divider Size (px)** | Line thickness | 1px |
| **Divider Type** | Line style: Solid / Dashed / Dotted / Double | Solid |
| **Divider Width** | Line span: Full / Inset / Under text | Full |

> **Divider Type** and **Divider Width** require Business or Elite plan.

---

## How It Works

1. Settings here are the **default** applied when an item has **Add Divider** enabled.
2. If an item has its own divider style (in Edit Item), that style **overrides** what is set here.
3. Level 2-3 inherits `Divider Color` from this section when the `submenuDividerColor` field is empty.

---

## Divider Width Options

| Value | Display |
|---|---|
| **Full** | Line spans the full width of the item |
| **Inset** | Line is indented on both sides |
| **Under text** | Line appears only under the text portion of the item |
