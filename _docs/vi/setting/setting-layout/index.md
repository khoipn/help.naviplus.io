---
description: Cấu hình vị trí menu, khoảng đệm, khoảng cách, z-index và chiều rộng submenu trong Navi+.
lang: vi
layout: default
permalink: /vi/docs/setting/setting-layout/
title: Cài đặt bố cục — Vị trí & khoảng cách
---
# Cài đặt Bố cục — Vị trí & Khoảng cách

Những cài đặt này kiểm soát **vị trí** của toàn bộ menu trên trang, **thứ tự xếp chồng** của nó so với các phần tử khác, và **chiều rộng** của các submenu.

---

## Khoảng đệm & Khoảng cách Menu

Kiểm soát khoảng cách bên ngoài và bên trong của **toàn bộ khung menu** — khác với khoảng đệm cấp mục trong Thiết kế.

| Trường | Mô tả |
|---|---|
| **Khoảng cách Trên / Phải / Dưới / Trái (px)** | Khoảng cách giữa menu và cạnh màn hình hoặc các phần tử xung quanh |
| **Khoảng đệm Trên / Phải / Dưới / Trái (px)** | Khoảng cách bên trong khung menu, trước khi các mục được hiển thị |

**Khi nào sử dụng:**
- Đẩy một Tabbar lên trên thanh điều hướng của trình duyệt trên iOS: `Margin Bottom = 34`
- Thêm khoảng cách giữa một Mega Menu và tiêu đề: `Margin Top = 8`

---

## Z-Index

Thứ tự xếp chồng của menu so với các phần tử khác trên trang (tiêu đề, widget trò chuyện, popup, v.v.).

| Trường | Mô tả | Mặc định |
|---|---|---|
| **Z-Index** | Giá trị số nguyên — cao hơn = ở trên cùng | Tự động |

**Khi nào điều chỉnh:**
- Menu bị che bởi một tiêu đề dính → tăng Z-Index lên trên giá trị tiêu đề.
- Menu đang che một widget trò chuyện → giảm Z-Index xuống dưới widget.

Các giá trị tham chiếu chung: tiêu đề chủ đề thường là `1000–9999`; widget trò chuyện thường là `9999–99999`.

---

## Chiều rộng Submenu

Áp dụng cho các submenu dropdown (Tabbar, Mega Menu một cột).

| Trường | Mô tả | Mặc định |
|---|---|---|
| **Chiều rộng Submenu (px)** | Chiều rộng của các panel submenu một cột | 360px |

---

## Máy tính để bàn — Hành vi & Chiều rộng Submenu

Áp dụng khi menu được hiển thị trên máy tính để bàn.

| Trường | Mô tả |
|---|---|
| **Hiển thị submenu khi di chuột** | Mở submenu khi di chuột mà không cần nhấp |
| **Chiều rộng submenu mở rộng hoàn toàn (px)** | Chiều rộng của các submenu nhiều cột (Desktop Mega Menu) |
| **Hướng submenu** | Hướng mở submenu: phải / trái / lên / xuống |

---

## Nhiều trang *(Elite)*

Nhúng menu trên nhiều miền ngoài cửa hàng Shopify chính.

| Trường | Mô tả |
|---|---|
| **Nhiều trang** | Danh sách các miền phân cách bằng dấu phẩy (ví dụ: `brand.com,shop.brand.com`) |
