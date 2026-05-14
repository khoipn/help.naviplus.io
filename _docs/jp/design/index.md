---
description: Navi+ メニューの外観を制御します — 色、フォント、間隔、背景、アイコンを階層的なデザインシステムを通じて。
lang: jp
layout: default
permalink: /jp/docs/design/
title: デザイン
---
# デザイン

The **Design** section controls the entire appearance of your menu: colors, typography, spacing, backgrounds, and icons. Settings here apply to the **entire menu** using a three-level inheritance system.

---

## トピック

| # | トピック | |
|---|---|---|
| 1 | Inheritance system and override mechanism (read first) | [Design Overview](/docs/design/design-overview/) |
| 2 | Level 1 — Appearance of main menu items | [Design Level 1](/docs/design/design-level1/) |
| 3 | Level 2-3 — Appearance of submenus | [Design Level 2-3](/docs/design/design-level2/) |
| 4 | Divider — Separator lines | [Design Divider](/docs/design/design-divider/) |

---

## クイックリファレンス

```
Global defaults (hardcoded)
    ↓
Level 1  — applies to all top-level menu items
    ↓  (Level 2-3 inherits if empty)
Level 2-3 — applies to submenus / dropdowns
    ↓  (overrides everything)
Per-item — individual settings in Edit Item
```

**Rule:** Empty = inherit from above. Set a value = override.
