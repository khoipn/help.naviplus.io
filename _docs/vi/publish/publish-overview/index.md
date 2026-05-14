---
description: Tổng quan về các loại menu Navi+ và các phương pháp triển khai tương ứng của chúng — Menu Sticky, Slide và Section.
lang: vi
layout: default
permalink: /vi/docs/publish/publish-overview/
title: Tổng quan xuất bản — Các loại menu & phương pháp triển khai
---
# Tổng quan xuất bản — Các loại menu & phương pháp triển khai

Navi+ menus are divided into 3 deploy groups, determined automatically by the menu type (`menu_kind`):

| Group | Menu types | Method |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) or `<head>` code (Global) → enable toggle |
| **Slide** | Context Slide | App Embeds / `<head>` → enable toggle → configure trigger |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Insert/Replace (CSS Selector) and/or App Block (Shopify) |

---

## Hai thị trường: Shopify vs. Global

| Step | Shopify | Global (WordPress, Wix...) |
|---|---|---|
| Embed code | Enable in **App Embeds** (Theme Editor) — no code paste needed | Paste `<script>` into website `<head>` |
| Token | Not needed — Shopify OAuth handles it | Required — `token: "NAVI123456"` in script |
| App Block | Available (Shopify only) — Method 2 for Section menus | Not available |

---

## Quy trình chung

```
1. Design menu (Design + Setting)
        ↓
2. Open Publish modal
        ↓
3. Embed code into website (once only)
   - Shopify: App Embeds in Theme Editor
   - Global: paste <script> into <head>
        ↓
4. Enable "Publish this menu" toggle
        ↓
5. (Optional) Configure device, page display, URL filter
        ↓
6. Save → menu is live
```

> Step 3 (embedding code) only needs to be done **once per website**. Subsequent menus only need steps 4 onward.
