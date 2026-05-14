---
description: Kiểm soát sự xuất hiện của menu Navi+ của bạn — màu sắc, phông chữ, khoảng cách, nền và biểu tượng thông qua một hệ thống thiết kế phân cấp.
lang: vi
layout: default
permalink: /vi/docs/design/
title: Thiết kế
---
# Thiết kế

Phần **Thiết kế** kiểm soát toàn bộ sự xuất hiện của menu của bạn: màu sắc, kiểu chữ, khoảng cách, nền và biểu tượng. Các cài đặt ở đây áp dụng cho **toàn bộ menu** sử dụng hệ thống kế thừa ba cấp.

---

## Chủ đề

| # | Chủ đề | |
|---|---|---|
| 1 | Hệ thống kế thừa và cơ chế ghi đè (đọc trước) | [Tổng quan về Thiết kế](/docs/design/design-overview/) |
| 2 | Cấp 1 — Sự xuất hiện của các mục menu chính | [Thiết kế Cấp 1](/docs/design/design-level1/) |
| 3 | Cấp 2-3 — Sự xuất hiện của các menu con | [Thiết kế Cấp 2-3](/docs/design/design-level2/) |
| 4 | Bộ phân cách — Các đường phân cách | [Thiết kế Bộ phân cách](/docs/design/design-divider/) |

---

## Tham khảo Nhanh

```
Global defaults (hardcoded)
    ↓
Level 1  — applies to all top-level menu items
    ↓  (Level 2-3 inherits if empty)
Level 2-3 — applies to submenus / dropdowns
    ↓  (overrides everything)
Per-item — individual settings in Edit Item
```

**Quy tắc:** Trống = kế thừa từ trên. Đặt một giá trị = ghi đè.
