---
description: Cấu hình tốc độ animation, kiểu animation, hiệu ứng mở rộng, touch feedback và arrow style trong menu Navi+.
layout: default
permalink: /vi/docs/setting/setting-behavior/
title: Setting behavior — Animation & tương tác
---
# Setting Behavior — Animation & Tương tác

Cài đặt tại **Setting → Animation** và **Setting → Expand Effect** kiểm soát tốc độ, kiểu chuyển động và phản hồi khi người dùng tương tác với menu.

---

## Tốc độ animation (Animation Speed)

Áp dụng cho toàn bộ hiệu ứng chuyển động trong menu (mở submenu, xuất hiện item...).

| Lựa chọn | Thời gian |
|---|---|
| None | Không có animation |
| Very Slow | ~500ms |
| Slow | ~350ms |
| **Medium** *(mặc định)* | ~200ms |
| Fast | ~120ms |
| Very Fast | ~60ms |

---

## Kiểu animation (Animation Style)

Kiểu hiệu ứng khi menu xuất hiện. Chỉ áp dụng cho **Slide menu** và **Tabbar** — Mega Menu luôn dùng Fade.

| Lựa chọn | Hiệu ứng |
|---|---|
| **Slide** *(mặc định)* | Trượt vào từ cạnh màn hình |
| **Fade** | Mờ dần xuất hiện |

---

## Kiểu mở rộng submenu (Expand Effect)

Chỉ áp dụng cho **Slide menu**.

| Lựa chọn | Hiệu ứng |
|---|---|
| **Top-down expand** | Submenu mở rộng xuống dưới tại chỗ |
| **Slide-in from right** | Submenu trượt vào từ bên phải (như màn hình mới) |

---

## Touch Feedback *(Business / Elite)*

Màu nền nhấp nháy khi người dùng chạm vào item trên mobile.

| Field | Mô tả |
|---|---|
| **Touch Background Color** | Màu flash khi chạm (hex) |
| **Touch Background Opacity** | Độ mờ màu flash (0–100) |

Để trống = không có hiệu ứng chạm.

---

## Arrow Style *(Elite)*

Tùy chỉnh mũi tên mở rộng hiển thị trên item cha có item con.

| Field | Mô tả | Mặc định |
|---|---|---|
| **Color** | Màu mũi tên (hex) | Kế thừa Text Color |
| **Opacity** | Độ mờ (0–100) | 30 |
| **Size (px)** | Kích thước mũi tên | 20px |
| **Icon** | Tên icon Remixicon (ví dụ `ri-arrow-right-s-line`) | Mặc định hệ thống |
