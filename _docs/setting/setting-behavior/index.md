---
description: Configure animation speed, animation style, expand effects, touch feedback, and arrow style in Navi+ menus.
layout: default
permalink: /docs/setting/setting-behavior/
title: Setting Behavior — Animation & Interaction
---
# Setting Behavior — Animation & Interaction

Settings at **Setting → Animation** and **Setting → Expand Effect** control the speed, movement style, and interaction feedback for your menu.

---

## Animation Speed

Applies to all motion in the menu (opening submenus, item transitions, etc.).

| Option | Duration |
|---|---|
| None | No animation |
| Very Slow | ~500ms |
| Slow | ~350ms |
| **Medium** *(default)* | ~200ms |
| Fast | ~120ms |
| Very Fast | ~60ms |

---

## Animation Style

Controls how the menu appears. Applies to **Slide menu** and **Tabbar** only — Mega Menu always uses Fade.

| Option | Effect |
|---|---|
| **Slide** *(default)* | Slides in from the screen edge |
| **Fade** | Fades in gradually |

---

## Expand Effect

Applies to **Slide menu** only — controls how submenus open.

| Option | Effect |
|---|---|
| **Top-down expand** | Submenu expands downward in place |
| **Slide-in from right** | Submenu slides in from the right as a new panel |

---

## Touch Feedback *(Business / Elite)*

Background flash color when a user taps an item on mobile.

| Field | Description |
|---|---|
| **Touch Background Color** | Flash color (hex) |
| **Touch Background Opacity** | Flash opacity (0–100) |

Leave empty = no touch effect.

---

## Arrow Style *(Elite)*

Customize the expand arrow shown on parent items with children.

| Field | Description | Default |
|---|---|---|
| **Color** | Arrow color (hex) | Inherits Text Color |
| **Opacity** | Arrow opacity (0–100) | 30 |
| **Size (px)** | Arrow size | 20px |
| **Icon** | Remixicon name (e.g. `ri-arrow-right-s-line`) | System default |
