---
description: Cấu hình vị trí menu, padding, margin, z-index và chiều rộng submenu trong Navi+.
layout: default
permalink: /vi/docs/setting/setting-layout/
title: Setting layout — Vị trí & khoảng cách
---
# Setting Layout — Vị trí & Khoảng cách

Các cài đặt này kiểm soát **vị trí** của toàn bộ menu trên trang, **thứ tự xếp chồng** với các phần tử khác và **chiều rộng** của submenu.

---

## Padding và Margin của menu

Khoảng cách bên ngoài và bên trong của **toàn bộ khung menu** — khác với padding từng item trong Design.

| Field | Mô tả |
|---|---|
| **Margin Top / Right / Bottom / Left (px)** | Khoảng cách từ menu ra đến mép màn hình hoặc vùng xung quanh |
| **Padding Top / Right / Bottom / Left (px)** | Khoảng trống bên trong khung menu, trước khi hiển thị các item |

**Khi nào dùng:**
- Đẩy Tabbar lên khỏi thanh điều hướng của trình duyệt trên iOS: `Margin Bottom = 34`
- Tạo khoảng trống phía trên Mega Menu để không dính sát header: `Margin Top = 8`

---

## Z-Index

Thứ tự xếp chồng của menu so với các phần tử khác trên trang (header, chat widget, popup...).

| Field | Mô tả | Mặc định |
|---|---|---|
| **Z-Index** | Số nguyên, càng cao càng nằm trên | Tự động |

**Khi nào cần chỉnh:**
- Menu bị che bởi header sticky → tăng Z-Index lên cao hơn header.
- Menu đang che mất chat widget → giảm Z-Index xuống dưới widget đó.

Giá trị phổ biến: header theme thường là `1000–9999`, chat widget thường là `9999–99999`.

---

## Chiều rộng submenu (Submenu Width)

Áp dụng cho submenu dạng dropdown (Tabbar, Mega Menu khi có cột đơn).

| Field | Mô tả | Mặc định |
|---|---|---|
| **Submenu Width (px)** | Chiều rộng panel submenu một cột | 360px |

---

## Desktop — Submenu hover và chiều rộng

Chỉ áp dụng khi menu hiển thị trên desktop.

| Field | Mô tả |
|---|---|
| **Show submenu on hover** | Mở submenu khi di chuột qua, không cần click |
| **Full-expand submenu width (px)** | Chiều rộng submenu dạng multi-column (Desktop Mega Menu) |
| **Submenu direction** | Hướng mở submenu: phải / trái / lên / xuống |

---

## Multi-Sites *(Elite)*

Cho phép nhúng menu trên nhiều domain khác nhau ngoài Shopify store chính.

| Field | Mô tả |
|---|---|
| **Multi-Sites** | Danh sách domain cách nhau bởi dấu phẩy (ví dụ `brand.com,shop.brand.com`) |
