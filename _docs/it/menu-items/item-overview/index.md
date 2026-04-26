---
description: What a menu item is in Navi+, the available item kinds, and the full field structure in the Edit Item panel.
layout: default
permalink: /it/docs/menu-items/item-overview/
title: Item Overview
---
# Item Overview

## What is a menu item?

Every row in a menu list is an **item**. An item is the smallest unit in Navi+ — it can be a navigation link, a group header, a blank spacer, or a tab divider.

Multiple items stacked together make a menu. The menu is then rendered for visitors on your website.

---

## Item kinds

When you add a new item you choose its **kind**. The kind determines how the item looks and what it does.

| Kind | Description | When to use |
|---|---|---|
| **Icon / Text** | Standard item with an icon and label | Regular navigation links |
| **Big Image / Text** | Large tile with a full-bleed image and overlay text | Category banners, featured product images |
| **Group Title** | Section heading — not a link | Visually group the items below it |
| **Blank Space** | Transparent gap | Spacing and layout alignment |
| **Tab Marker** | Marks the start of a new tab | Split the menu into horizontal tabs |
| **Custom HTML** | Embed arbitrary HTML | Custom widgets, special banners |

---

## Field structure

Click any item to open the Edit Item panel. It is organized into these sections:

```
┌─────────────────────────────────────────┐
│  MEDIA                                  │
│    Icon  |  Image                       │
├─────────────────────────────────────────┤
│  BASIC INFO                             │
│    Text · Link To · HTML                │
│    Description · Divider · Badge        │
├─────────────────────────────────────────┤
│  LAYOUT                                 │
│    Display Layout · Width · Position    │
│    Height Fix                           │
├─────────────────────────────────────────┤
│  INTERFACE (UI)                         │
│    Class Names · Text Style             │
│    Icon/Image Style · Background        │
│    Spacing · Align                      │
├─────────────────────────────────────────┤
│  ADVANCE                                │
│    Animation · CSS · Attributes         │
├─────────────────────────────────────────┤
│  PUBLISH                                │
│    Is Published · Login conditions      │
└─────────────────────────────────────────┘
```

---

## Edit workflow

1. Click an item in the menu tree → the Edit Item panel opens.
2. Change the fields you need.
3. Press **Update** to apply changes to that item.
4. Press **Save** (`Ctrl+S` / `Cmd+S`) to save the entire menu and refresh the simulator.

> If you pressed Update but haven't Saved yet, the changes are not written to your live menu. Hold Shift while pressing Save to save and immediately reload the simulator.
