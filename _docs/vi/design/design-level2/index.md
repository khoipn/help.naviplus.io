---
description: Cấu hình giao diện của các mục submenu trong Navi+ — với việc kế thừa tự động từ Cấp 1 cho tất cả các trường trống.
lang: vi
layout: default
permalink: /vi/docs/design/design-level2/
title: Thiết kế cấp 2-3 — Các mục submenu
---
# Thiết kế Cấp 2-3 — Các Mục Submenu

Cài đặt tại **Thiết kế → Cấp 2-3** áp dụng cho các mục submenu (các menu thả xuống xuất hiện khi một mục cha được mở). Bất kỳ trường nào để trống **đều kế thừa tự động** giá trị tương ứng từ Cấp 1.

> **Quy tắc:** Chỉ điền vào các trường ở đây khi bạn muốn submenu trông **khác** với menu chính. Để trống = giống như Cấp 1.

---

## Kiểu Văn Bản

| Trường | Kế thừa từ Cấp 1 khi trống |
|---|---|
| **Màu Văn Bản** | `textColor` |
| **Kích Thước Phông Chữ (px)** | `textSize` |
| **Độ Dày Phông Chữ** | `fontWeight` |
| **Chuyển Đổi Văn Bản** | `textTransform` |
| **Họ Phông Chữ** | `fontFamily` |
| **Màu Mô Tả** | `descriptionColor` |
| **Kích Thước Mô Tả (px)** | `descriptionTextSize` |

---

## Kiểu Biểu Tượng / Hình Ảnh

| Trường | Kế thừa từ Cấp 1 khi trống |
|---|---|
| **Màu Biểu Tượng** | `iconColor` |
| **Kích Thước Biểu Tượng (px)** | `iconSize` |
| **Khoảng Cách Văn Bản-Biểu Tượng (px)** | `spaceTextIcon` |
| **Bán Kính Hình Ảnh (px)** | `imageRadius` |

---

## Khoảng Cách

| Trường | Mô Tả |
|---|---|
| **Đệm Mục (px)** | Khoảng cách bên trong cho các mục submenu. Không kế thừa — sử dụng mặc định của chủ đề nếu trống |
| **Biên Mục (px)** | Khoảng cách bên ngoài cho các mục submenu |
| **Chiều Cao Tối Thiểu (px)** | Chiều cao tối thiểu cho các mục submenu |

---

## Nền & Khung

| Trường | Mô Tả |
|---|---|
| **Màu Nền** | Màu nền của khu vực submenu |
| **Bán Kính Biên (px)** | Làm tròn các góc của container submenu |
| **Ẩn Nền** | Ẩn nền của submenu |
| **Bóng Đổ** | Bóng đổ cho container submenu |

---

## Hiển Thị

| Trường | Kế thừa từ Cấp 1 khi trống |
|---|---|
| **Bố Cục Hiển Thị** | `displayLayout` |
| **Căn Chỉnh** | `align` |

---

## Phân Cách

| Trường | Kế thừa từ Cấp 1 khi trống |
|---|---|
| **Màu Phân Cách** | `dividerColor` (từ Thiết kế → Phân Cách) |

---

## Ví Dụ

**Mục Tiêu:** Menu chính có nền tối và văn bản trắng. Submenu nên có nền trắng và văn bản tối.

Chỉ điền vào hai trường này ở Cấp 2-3:
- Màu Nền = `#FFFFFF`
- Màu Văn Bản = `#000000`

Tất cả các trường khác (kích thước phông chữ, kích thước biểu tượng, khoảng cách, v.v.) tự động kế thừa từ Cấp 1.
