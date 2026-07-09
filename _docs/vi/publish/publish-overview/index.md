---
description: Tổng quan về các loại menu Navi+ và các phương pháp triển khai tương ứng của chúng — Menu Sticky, Slide và Section.
lang: vi
layout: default
permalink: /vi/docs/publish/publish-overview/
title: Tổng quan xuất bản — Các loại menu & phương pháp triển khai
---
# Tổng quan xuất bản — Các loại menu & phương pháp triển khai

Menu Navi+ được chia thành 3 nhóm triển khai, được xác định tự động theo loại menu (`menu_kind`):

| Nhóm | Loại menu | Phương pháp |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) hoặc mã `<head>` (Global) → bật toggle |
| **Slide** | Context Slide | App Embeds / `<head>` → bật toggle → cấu hình trigger |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Insert/Replace (CSS Selector) và/hoặc App Block (Shopify) |

---

## Hai thị trường: Shopify vs. Global

| Bước | Shopify | Global (WordPress, Squarespace, Webflow...) |
|---|---|---|
| Nhúng code | Bật trong **App Embeds** (Theme Editor) — không cần dán code | Dán `<script>` vào `<head>` của website |
| Token | Không cần — Shopify OAuth xử lý | Bắt buộc — `token: "NAVI123456"` trong script |
| App Block | Có sẵn (chỉ Shopify) — Phương pháp 2 cho menu Section | Không có |

> **Wix:** Nếu bạn cài app Navi+ từ Wix App Market, nhúng tự động — Navi+ tiêm `start.js` qua Wix Embedded Script, nên bạn **không dán code**. Xác thực và thanh toán được xử lý qua Wix. Chỉ các nền tảng tự quản (WordPress, Squarespace, Webflow, Magento, site tùy chỉnh) cần dán `<script>` thủ công ở trên.

---

## Quy trình chung

```
1. Thiết kế menu (Design + Setting)
        ↓
2. Mở modal Xuất bản
        ↓
3. Nhúng code vào website (chỉ một lần)
   - Shopify: App Embeds trong Theme Editor
   - Global: dán <script> vào <head>
        ↓
4. Bật toggle "Xuất bản menu này"
        ↓
5. (Tùy chọn) Cấu hình thiết bị, hiển thị trang, lọc URL
        ↓
6. Lưu → menu chạy live
```

> Bước 3 (nhúng code) chỉ cần làm **một lần cho mỗi website**. Các menu tiếp theo chỉ cần bước 4 trở đi.
