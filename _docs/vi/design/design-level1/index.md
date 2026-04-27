---
description: Cấu hình giao diện tất cả item chính trong Navi+ — màu chữ, icon, khoảng cách, nền và tùy chọn hiển thị tại Design Level 1.
layout: default
permalink: /vi/docs/design/design-level1/
title: Design Level 1 — Item Chính
---
# Design Level 1 — Item Chính

Cài đặt tại **Design → Level 1** áp dụng cho tất cả item cấp cao nhất của menu. Đây là lớp nền — Level 2-3 kế thừa, per-item ghi đè.

---

## Kiểu chữ (Text Style)

| Field | Mô tả | Mặc định |
|---|---|---|
| **Text Color** | Màu chữ nhãn item | Kế thừa theme |
| **Font Size (px)** | Cỡ chữ | Kế thừa theme |
| **Font Weight** | Độ đậm: 100–900 hoặc Inherit | Inherit |
| **Text Transform** | None / Capitalize / Uppercase / Lowercase | None |
| **Font Family** | Font Google hoặc "Default (Theme)" | Default |
| **Description Color** | Màu dòng mô tả phụ | 60% opacity của Text Color |
| **Description Size (px)** | Cỡ chữ mô tả phụ | 70% của Font Size |

---

## Kiểu icon / ảnh (Icon / Image Style)

| Field | Mô tả | Mặc định |
|---|---|---|
| **Icon Color** | Màu icon vector | Kế thừa Text Color |
| **Icon Size (px)** | Kích thước icon | 22px |
| **Space Text-Icon (px)** | Khoảng cách giữa icon và chữ | Tự động |
| **Image Radius (px)** | Bo tròn góc ảnh thumbnail | 0 |

---

## Khoảng cách (Spacing)

| Field | Mô tả | Định dạng |
|---|---|---|
| **Item Padding (px)** | Khoảng trong của item | `trên phải dưới trái` hoặc `mobile \| desktop` |
| **Item Margin (px)** | Khoảng ngoài của item | `trên phải dưới trái` hoặc `mobile \| desktop` |

---

## Nền và khung (Background)

| Field | Mô tả | Mặc định |
|---|---|---|
| **Background Color** | Màu nền vùng item | Trong suốt |
| **Background Image** | Ảnh nền (URL hoặc gallery) | Không có |
| **Opacity** | Độ mờ nền (0–100) | 100 |
| **Hide Background** | Ẩn nền, để lộ nền thiết bị | Tắt |
| **Height (px)** | Chiều cao hàng item | 50px |
| **Border Radius (px)** | Bo tròn góc item | 0 |
| **Drop Shadow** | Đổ bóng dưới item | Tắt |
| **Min Height (px)** | Chiều cao tối thiểu | Không giới hạn |

---

## Hiển thị (Display)

| Field | Mô tả |
|---|---|
| **Display Layout** | Cách sắp xếp icon và chữ: Auto / Top-Down / Left-Right / Down-Top / Right-Left / Icon Only / Text Only / Empty |
| **Align** | Căn lề: Auto / Left / Center / Right |
| **Hide Text** | Ẩn chữ toàn menu — chỉ hiện icon |
| **Show Expand Arrow** | Hiện mũi tên mở rộng cho item cha có item con |

---

## Badge

| Field | Mô tả |
|---|---|
| **Badge Color** | Màu nền badge/chấm thông báo trên item |

---

## Color Templates (Bộ màu nhanh)

Navi+ có sẵn bộ màu: **Light, Dark, Ocean, Sand, Rose, Forest**.

Chọn một bộ màu sẽ tự điền các giá trị màu. Có thể chỉnh tiếp sau khi áp dụng.
