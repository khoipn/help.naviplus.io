---
description: Configure slide menu direction, width, close button, and desktop submenu behavior in Navi+.
layout: default
permalink: /docs/setting/setting-slide/
title: Setting Slide — Slide Menu Options
---
# Setting Slide — Slide Menu Options

These settings apply **only to Slide menus** (Context Slide / Hamburger Menu).

---

## Slide Direction

**Setting → Slide Direction** — where the menu slides in from, and how it is pinned.

| Option | Description |
|---|---|
| From Left | Slides in from the left edge (most common) |
| From Right | Slides in from the right edge |
| From Top | Slides down from the top |
| From Bottom | Slides up from the bottom |
| Fixed Left (desktop) | Always-visible sidebar on the left — no trigger needed |
| Fixed Right (desktop) | Always-visible sidebar on the right |

**Fix on Mobile / Fix on Desktop:**
- **Fix on Mobile** → Menu stays permanently visible on mobile without needing to be opened.
- **Fix on Desktop** → Menu stays permanently visible on desktop (persistent sidebar).

---

## Slide Width

| Field | Description | Default |
|---|---|---|
| **Mobile Width** | Width on mobile (px or %) | Auto |
| **Desktop Max Width (px)** | Maximum width on desktop | Auto |
| **Desktop Sub Width (px)** | Width of Level 2 submenu panel on desktop | Auto |

**Example:** Slide from left, 80% of mobile screen, max 400px on desktop:
- Mobile Width = `80%`
- Desktop Max Width = `400`

---

## Close Icon

| Field | Description | Default |
|---|---|---|
| **Hide Close Icon** | Hide the × close button | Visible |
| **Close Icon Align** | Position of close button: Left / Right | Right |
| **Close Icon Top (px)** | Distance from the top of the menu to the close button | 12px |

> If you hide the close button, users must tap the overlay area outside the menu to close it. Keep the close button visible when the menu covers most of the screen.

---

## Desktop Submenu Direction

**Setting → Desktop → Submenu Direction**

When the Slide menu is displayed as a fixed sidebar on desktop, submenus can open in 4 directions:

| Value | Submenu opens toward |
|---|---|
| 1 | Right (default) |
| 2 | Left |
| 3 | Down |
| 4 | Up |
