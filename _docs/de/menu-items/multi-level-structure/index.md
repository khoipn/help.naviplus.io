---
description: How to create parent–child nesting and use Tab Slide to organize Navi+ menu items into multi-level structures.
layout: default
permalink: /de/docs/menu-items/multi-level-structure/
title: Multi-level Structure
---
# Multi-level Structure

Navi+ supports two ways to organize menu content in depth: **parent–child nesting** (drag left/right to indent) and **Tab Slide** (split the menu into horizontal switching zones). You can use either approach or combine both.

---

## Option 1 — Parent–child nesting (indent by drag)

Nesting turns a flat list into a leveled hierarchy. A parent item can be expanded to reveal its children.

```
Home                        ← Level 1 (parent)
  Collections               ← Level 2 (child)
    New Arrivals            ← Level 3 (grandchild)
    Sale
  Lookbook
Contact                     ← Level 1 (parent, no children)
```

### How to do it

**By drag and drop**

1. Hover over the item you want to nest.
2. Drag it **right** — it snaps under the item above it as a child.
3. Drag it **left** to move it back up to the parent level.

**By keyboard shortcut**

1. Click the item to select it.
2. Press `→` (right arrow) to indent — the item becomes a child of the item above.
3. Press `←` (left arrow) to outdent — the item moves back up one level.

### Maximum nesting depth by menu type

The depth limit depends on the **menu type**, not the plan.

| Menu type | Max levels |
|---|:---:|
| Mobile Grid | 1 (no nesting) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> If you try to indent past the limit, the editor will block it and show a message.

---

## Option 2 — Tab Slide (horizontal zones)

Tab Slide divides items into horizontal tabs. Instead of expanding downward like children, each tab shows a separate set of items.

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← tab headers
├─────────────────────────────────┤
│  • Collections                  │
│  • New Arrivals                 │  ← content of active tab
│  • Sale                         │
└─────────────────────────────────┘
```

### How to do it

1. Add a new item with kind **Tab Marker**.
2. Set the Tab Marker label — this becomes the tab header text (e.g. "Shop").
3. Add items below the Tab Marker — they belong to that tab's content area.
4. Repeat: add the next Tab Marker, then add items for that tab.

```
[Tab Marker]  "Shop"
  Collections
  New Arrivals
  Sale

[Tab Marker]  "Pages"
  About us
  Contact

[Tab Marker]  "More"
  Blog
  FAQ
```

---

## Which approach to use?

| Goal | Use |
|---|---|
| Show subcategories under a parent item | **Parent–child nesting (Option 1)** |
| Group unrelated sections side by side | **Tab Slide (Option 2)** |
| Menu with many items across multiple categories | **Tab Slide** |
| Deep drill-down navigation (category → subcategory) | **Parent–child nesting** |
| Outer tabs with nested items inside each tab | **Both** |

---

## Limits to keep in mind

- **Tab Markers cannot be nested inside another item.** Indenting a Tab Marker is blocked.
- **Items inside a tab can still have children** — subject to the menu type depth limit.
- **Mobile Grid does not support nesting** — use Tab Slide if you need grouping.
- **Reorder tabs** by dragging a Tab Marker up or down — the items below it follow along.
