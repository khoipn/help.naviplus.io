---
description: Cấu hình style mặc định cho tất cả đường kẻ phân cách trong menu Navi+ — màu, độ dày, kiểu và chiều rộng.
layout: default
permalink: /vi/docs/design/design-divider/
title: Design divider — Đường kẻ phân cách
---
# Design Divider — Đường kẻ phân cách

Cài đặt tại **Design → Divider** xác định style mặc định của tất cả đường kẻ trong menu.

Đây là style **cấp menu** — từng item có thể bật/tắt divider và ghi đè style riêng trong Edit Item → Basic Info → Add Divider.

---

## Các field

| Field | Mô tả | Mặc định |
|---|---|---|
| **Divider Color** | Màu đường kẻ (hex) | `#EEEEEE` |
| **Divider Size (px)** | Độ dày đường kẻ | 1px |
| **Divider Type** | Kiểu đường: Solid / Dashed / Dotted / Double | Solid |
| **Divider Width** | Độ rộng: Full / Inset / Under text | Full |

> **Divider Type** và **Divider Width** yêu cầu gói Business hoặc Elite.

---

## Cách hoạt động

1. Cài đặt tại đây = style mặc định khi item bật **Add Divider**.
2. Nếu item có divider riêng (trong Edit Item), style đó **ghi đè** giá trị ở đây.
3. Level 2-3 kế thừa `Divider Color` từ đây nếu field `submenuDividerColor` để trống.

---

## Divider Width — chi tiết

| Giá trị | Hiển thị |
|---|---|
| **Full** | Đường kẻ chạy hết chiều rộng item |
| **Inset** | Đường kẻ thụt vào hai đầu |
| **Under text** | Đường kẻ chỉ nằm dưới phần chữ của item |
