---
description: Cấu hình kiểu mặc định cho tất cả các đường phân cách trong menu Navi+ của bạn — màu sắc, độ dày, loại và chiều rộng.
lang: vi
layout: default
permalink: /vi/docs/design/design-divider/
title: Thiết kế phân cách — Đường phân cách
---
# Thiết kế Phân cách — Đường phân cách

Cài đặt tại **Thiết kế → Phân cách** xác định diện mạo mặc định cho tất cả các đường phân cách trong menu.

Đây là một kiểu **cấp menu** — các mục riêng lẻ có thể bật/tắt đường phân cách của riêng chúng và ghi đè kiểu thông qua Chỉnh sửa Mục → Thông tin Cơ bản → Thêm Đường phân cách.

---

## Các trường

| Trường | Mô tả | Mặc định |
|---|---|---|
| **Màu Đường phân cách** | Màu đường (hex) | `#EEEEEE` |
| **Kích thước Đường phân cách (px)** | Độ dày đường | 1px |
| **Loại Đường phân cách** | Kiểu đường: Đặc / Gạch / Chấm / Đôi | Đặc |
| **Chiều rộng Đường phân cách** | Độ dài đường: Toàn bộ / Lùi vào / Dưới văn bản | Toàn bộ |

> **Loại Đường phân cách** và **Chiều rộng Đường phân cách** yêu cầu gói Business hoặc Elite.

---

## Cách hoạt động

1. Cài đặt ở đây là **mặc định** được áp dụng khi một mục có **Thêm Đường phân cách** được bật.
2. Nếu một mục có kiểu đường phân cách riêng (trong Chỉnh sửa Mục), kiểu đó **ghi đè** những gì được thiết lập ở đây.
3. Cấp 2-3 kế thừa `Màu Đường phân cách` từ phần này khi trường `submenuDividerColor` trống.

---

## Tùy chọn Chiều rộng Đường phân cách

| Giá trị | Hiển thị |
|---|---|
| **Toàn bộ** | Đường trải dài toàn bộ chiều rộng của mục |
| **Lùi vào** | Đường được lùi vào ở cả hai bên |
| **Dưới văn bản** | Đường chỉ xuất hiện dưới phần văn bản của mục |
