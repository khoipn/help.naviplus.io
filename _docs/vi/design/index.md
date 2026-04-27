---
description: Kiểm soát giao diện menu Navi+ — màu sắc, phông chữ, khoảng cách, nền và icon thông qua hệ thống kế thừa 3 cấp.
layout: default
permalink: /vi/docs/design/
title: Design
---
# Design

Phần **Design** kiểm soát toàn bộ giao diện menu: màu sắc, phông chữ, khoảng cách, nền và icon. Cài đặt tại đây áp dụng cho **toàn bộ menu** theo cơ chế kế thừa 3 cấp.

---

## Chủ đề

| # | Chủ đề | |
|---|---|---|
| 1 | Cơ chế kế thừa và ghi đè (đọc trước) | [Tổng quan Design](/vi/docs/design/design-overview/) |
| 2 | Level 1 — Giao diện item chính | [Design Level 1](/vi/docs/design/design-level1/) |
| 3 | Level 2-3 — Giao diện submenu | [Design Level 2-3](/vi/docs/design/design-level2/) |
| 4 | Divider — Đường kẻ phân cách | [Design Divider](/vi/docs/design/design-divider/) |

---

## Tóm tắt nhanh

```
Global defaults (hardcode)
    ↓
Level 1  — áp dụng cho tất cả item cấp 1
    ↓  (Level 2-3 kế thừa nếu để trống)
Level 2-3 — áp dụng cho submenu / dropdown
    ↓  (ghi đè tất cả)
Per-item — cài đặt riêng từng item trong Edit Item
```

**Nguyên tắc:** Để trống = kế thừa từ cấp trên. Điền giá trị = ghi đè.
