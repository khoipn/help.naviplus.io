---
description: Cấu hình hướng mở, kích thước, nút đóng và hành vi submenu cho Slide menu trong Navi+.
layout: default
permalink: /vi/docs/setting/setting-slide/
title: Setting slide — Tùy chọn slide menu
---
# Setting Slide — Tùy chọn Slide Menu

Các cài đặt này chỉ áp dụng cho **Slide menu** (Context Slide / Hamburger Menu).

---

## Hướng mở (Slide Direction)

**Setting → Slide Direction** — menu trượt vào từ hướng nào và cách cố định trên màn hình.

| Lựa chọn | Mô tả |
|---|---|
| Từ trái | Menu trượt vào từ cạnh trái màn hình (phổ biến nhất) |
| Từ phải | Menu trượt vào từ cạnh phải |
| Từ trên | Menu trượt xuống từ trên |
| Từ dưới | Menu trượt lên từ dưới |
| Cố định bên trái (desktop) | Luôn hiện sidebar trái trên desktop, không cần trigger |
| Cố định bên phải (desktop) | Luôn hiện sidebar phải trên desktop |

**Fix on Mobile / Fix on Desktop:**
- **Fix on Mobile** → menu luôn hiện cố định trên mobile, không cần mở.
- **Fix on Desktop** → menu luôn hiện cố định trên desktop (kiểu sidebar thường trực).

---

## Chiều rộng (Slide Width)

| Field | Mô tả | Mặc định |
|---|---|---|
| **Mobile Width** | Chiều rộng trên mobile (px hoặc %) | Tự động |
| **Desktop Max Width (px)** | Chiều rộng tối đa trên desktop | Tự động |
| **Desktop Sub Width (px)** | Chiều rộng panel submenu cấp 2 trên desktop | Tự động |

**Ví dụ:** Slide trái chiếm 80% màn hình mobile, tối đa 400px trên desktop:
- Mobile Width = `80%`
- Desktop Max Width = `400`

---

## Nút đóng (Close Icon)

| Field | Mô tả | Mặc định |
|---|---|---|
| **Hide Close Icon** | Ẩn nút × đóng menu | Hiện |
| **Close Icon Align** | Vị trí nút đóng: Left / Right | Right |
| **Close Icon Top (px)** | Khoảng cách từ đỉnh menu xuống nút đóng | 12px |

> Ẩn nút đóng thì người dùng phải nhấn vào vùng overlay bên ngoài để đóng. Nên giữ nút đóng khi menu chiếm nhiều không gian màn hình.

---

## Hướng mở submenu trên desktop

**Setting → Desktop → Submenu Direction**

Khi Slide menu hiển thị dạng sidebar cố định trên desktop, submenu có thể mở theo 4 hướng:

| Giá trị | Submenu mở về phía |
|---|---|
| 1 | Phải (mặc định) |
| 2 | Trái |
| 3 | Xuống dưới |
| 4 | Lên trên |
