---
description: Tổng quan loại menu Navi+ và phương thức deploy tương ứng — Sticky, Slide và Section menu.
layout: default
permalink: /vi/docs/publish/publish-overview/
title: Tổng quan publish — Loại menu & phương thức deploy
---
# Tổng quan Publish — Loại menu & Phương thức deploy

Navi+ chia menu thành 3 nhóm deploy, xác định tự động theo loại menu (`menu_kind`):

| Nhóm | Loại menu | Phương thức |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) hoặc `<head>` code (Global) → bật toggle |
| **Slide** | Context Slide | App Embeds / `<head>` → bật toggle → cấu hình trigger |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Insert/Replace (CSS Selector) và/hoặc App Block (Shopify) |

---

## Hai thị trường: Shopify vs. Global

| Bước | Shopify | Global (WordPress, Wix...) |
|---|---|---|
| Nhúng code | Kích hoạt trong **App Embeds** (Theme Editor) — không cần paste code | Paste `<script>` vào `<head>` của website |
| Token | Không cần — Shopify OAuth tự xử lý | Bắt buộc — `token: "NAVI123456"` trong script |
| App Block | Có (Shopify only) — Method 2 cho Section menu | Không có |

---

## Luồng tổng quát

```
1. Thiết kế menu (Design + Setting)
        ↓
2. Vào Publish modal
        ↓
3. Nhúng code vào website (một lần duy nhất)
   - Shopify: App Embeds trong Theme Editor
   - Global: paste <script> vào <head>
        ↓
4. Bật toggle "Publish this menu"
        ↓
5. (Tuỳ chọn) Cấu hình thiết bị, trang hiển thị, URL filter
        ↓
6. Save → menu live trên website
```

> Bước 3 (nhúng code) chỉ cần làm **một lần duy nhất** cho mỗi website. Các menu tiếp theo chỉ cần làm từ bước 4.
