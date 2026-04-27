---
description: Cấu hình giao diện submenu trong Navi+ — với kế thừa tự động từ Level 1 cho tất cả field để trống.
layout: default
permalink: /vi/docs/design/design-level2/
title: Design Level 2-3 — Submenu
---
# Design Level 2-3 — Submenu

Cài đặt tại **Design → Level 2-3** áp dụng cho submenu (dropdown khi mở item cha). Mọi field để trống đều **tự động kế thừa** giá trị tương ứng từ Level 1.

> **Nguyên tắc:** Chỉ điền vào đây khi muốn submenu trông **khác** so với menu chính. Để trống = giống Level 1.

---

## Kiểu chữ (Text Style)

| Field | Kế thừa từ Level 1 khi trống |
|---|---|
| **Text Color** | `textColor` |
| **Font Size (px)** | `textSize` |
| **Font Weight** | `fontWeight` |
| **Text Transform** | `textTransform` |
| **Font Family** | `fontFamily` |
| **Description Color** | `descriptionColor` |
| **Description Size (px)** | `descriptionTextSize` |

---

## Kiểu icon / ảnh (Icon / Image Style)

| Field | Kế thừa từ Level 1 khi trống |
|---|---|
| **Icon Color** | `iconColor` |
| **Icon Size (px)** | `iconSize` |
| **Space Text-Icon (px)** | `spaceTextIcon` |
| **Image Radius (px)** | `imageRadius` |

---

## Khoảng cách (Spacing)

| Field | Mô tả |
|---|---|
| **Item Padding (px)** | Khoảng trong của item submenu. Không kế thừa — mặc định theo theme |
| **Item Margin (px)** | Khoảng ngoài của item submenu |
| **Min Height (px)** | Chiều cao tối thiểu item submenu |

---

## Nền và khung (Background)

| Field | Mô tả |
|---|---|
| **Background Color** | Màu nền vùng submenu |
| **Border Radius (px)** | Bo tròn góc vùng submenu |
| **Hide Background** | Ẩn nền submenu |
| **Drop Shadow** | Đổ bóng cho vùng submenu |

---

## Hiển thị (Display)

| Field | Kế thừa từ Level 1 khi trống |
|---|---|
| **Display Layout** | `displayLayout` |
| **Align** | `align` |

---

## Divider

| Field | Kế thừa từ Level 1 khi trống |
|---|---|
| **Divider Color** | `dividerColor` (trong Design → Divider) |

---

## Ví dụ

**Mục tiêu:** Menu chính nền tối, chữ trắng. Submenu nền trắng, chữ đen.

Chỉ cần điền 2 field ở Level 2-3:
- Background Color = `#FFFFFF`
- Text Color = `#000000`

Tất cả field khác tự kế thừa Level 1, không cần điền lại.
