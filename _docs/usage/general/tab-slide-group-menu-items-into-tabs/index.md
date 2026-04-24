---
description: Instead of showing all menu items at once, **Tab Slide** lets you organize your menu into groups and place each group under a separate tab. Visitors simply t...
layout: default
permalink: /docs/usage/general/tab-slide-group-menu-items-into-tabs/
title: Tab Slide — Group Menu Items into Tabs
---
# Tab Slide — Group Menu Items into Tabs

### What is Tab Slide?

Instead of showing all menu items at once, **Tab Slide** lets you organize your menu into groups and place each group under a separate tab. Visitors simply tap a tab to switch between groups — making long menus clean, compact, and easy to navigate.

**What it looks like:**

```
┌──────────────────────────────────┐
│  [Shop]  [Blog]  [Deals]         │  ← tabs
│ ──────                           │
│  • T-Shirts                      │
│  • Pants                         │  ← content of the "Shop" tab
│  • Accessories                   │
└──────────────────────────────────┘
```

When a visitor taps "Blog", the content instantly switches to the blog articles — no page reload needed.

***

### How to Set Up Tab Slide

#### Step 1 — Add a Tab marker

1. In the menu tree, click **"Add item"**
2. Select the item type **Tab Slide** (the blue tab icon)
3. Enter a **tab name** (e.g. "Shop", "Blog", "Deals")
4. Click **Add**

> The Tab marker will appear in the menu tree with a blue **\[Tab]** badge.

#### Step 2 — Add content to the tab

All menu items placed **directly below** a Tab marker belong to that tab.

```
[Tab] Shop           ← Tab marker (created in Step 1)
  T-Shirts           ← belongs to "Shop" tab
  Pants              ← belongs to "Shop" tab
  Accessories        ← belongs to "Shop" tab
[Tab] Blog           ← next Tab marker
  Latest News        ← belongs to "Blog" tab
  Style Guides       ← belongs to "Blog" tab
```

#### Step 3 — Add more tabs (optional)

Repeat steps 1–2 for each tab you want. There is no limit on the number of tabs.

***

### Ending the Tab Group

Sometimes you want certain items to **always be visible** — outside of any tab — for example a "Contact" or "Search" link at the bottom.

To do this:

1. Add a new **Tab Slide** item
2. In the edit panel, check **"End of Tab group"**
3. All items below this marker will display as regular menu items

```
[Tab] Shop
  T-Shirts, Pants...
[Tab] Blog
  News, Guides...
[End of Tab group]   ← marks the end of tabs
  Contact Us         ← always visible, not inside any tab
  About              ← always visible
```

***

### Customizing Each Tab

Each Tab marker can be styled independently:

| Option         | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| **Tab name**   | The text shown on the tab button                                 |
| **Icon**       | A small icon next to the name (from the icon library)            |
| **Image**      | An image instead of an icon                                      |
| **Layout**     | Icon above/below/left/right of the name, icon only, or text only |
| **Text color** | Custom color for each tab label                                  |
| **Text size**  | Custom font size for each tab label                              |

**Tip:** Leaving the layout as "Automatic" works great for most menus — the tab will adapt to look its best.

***

### Which Menu Types Support Tab Slide?

Tab Slide works with **all Navi+ menu types**:

* ✅ Tab Bar
* ✅ Slide Menu
* ✅ Mega Menu
* ✅ FAB Menu
* ✅ Grid menu

It also works at **any menu level** — not just the main menu, but inside submenus too (level 2, level 3).

***

### Frequently Asked Questions

**Will the Tab marker appear as a menu item?** No. Tab markers are invisible to visitors — they only create the tab button. Your actual menu items are what appear inside each tab.

**Can I add an icon to a tab?** Yes. Edit the Tab marker like any other item and choose an icon from the library, or upload a custom image.

**Which tab is shown first?** The first tab is always selected by default when the menu opens.

**Is there a limit on how many tabs I can have?** There's no hard limit, but we recommend keeping it to 3–6 tabs for the best experience on mobile screens.

**Can I use Tab Slide inside a submenu?** Yes. Place Tab markers inside any submenu and the tab behavior will work at that level.


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/usage/general/tab-slide-group-menu-items-into-tabs.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
