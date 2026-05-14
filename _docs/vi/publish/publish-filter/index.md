---
description: Lọc khả năng hiển thị menu Navi+ theo thiết bị, hành vi cuộn, loại trang Shopify và từ khóa URL.
lang: vi
layout: default
permalink: /vi/docs/publish/publish-filter/
title: Bộ lọc xuất bản — Quy tắc thiết bị & URL
---
# Bộ Lọc Xuất Bản — Quy Tắc Thiết Bị & URL

Sau khi bật công tắc xuất bản, bạn có thể thu hẹp khi menu xuất hiện bằng cách sử dụng hai lớp bộ lọc: **thiết bị** (di động/máy tính để bàn + hành vi cuộn) và **từ khóa URL** (hiện/ẩn dựa trên nội dung URL).

---

## Lọc theo Thiết Bị

### Bật/tắt theo nền tảng

Hai công tắc ở đầu hộp thoại Xuất Bản:

| Cài đặt | Mặc định | Ghi chú |
|---|---|---|
| **Hiện menu trên di động** | Bật | Hiện menu trên thiết bị di động |
| **Hiện menu trên máy tính để bàn** | Tắt | Hiện menu trên thiết bị máy tính để bàn |

Một số loại menu vô hiệu hóa một trong những công tắc này — ví dụ, Menu Mega trên Máy Tính để Bàn vô hiệu hóa công tắc di động.

---

### Hành vi cuộn (Chỉ menu dính)

Được cấu hình riêng cho di động và máy tính để bàn.

#### Cuộn di động

| Cài đặt | Hành vi |
|---|---|
| **Tự động ẩn khi cuộn xuống** | Ẩn menu khi người dùng cuộn **xuống** |
| **Tự động hiện sau khi cuộn** | Chỉ hiện menu sau khi người dùng đã cuộn xuống (không hiển thị khi tải trang) |

#### Cuộn máy tính để bàn

| Cài đặt | Hành vi |
|---|---|
| **Tự động ẩn khi cuộn xuống** | Ẩn menu khi cuộn xuống trên máy tính để bàn |
| **Tự động hiện sau khi cuộn** | Chỉ hiện sau khi cuộn xuống trên máy tính để bàn |

> Tự động ẩn và Tự động hiện có thể được bật cùng nhau: menu ẩn khi cuộn xuống, xuất hiện lại khi cuộn lên — một mẫu phổ biến cho tabbar dưới.

---

### Vị trí màn hình (Chỉ Sticky / Tabbar)

Chọn một vị trí từ bộ chọn nút radio với hình minh họa trực quan.

**Di động** — 6 vị trí cài sẵn (giữa dưới, trái dưới, phải dưới, các biến thể trên...)

**Máy tính để bàn** — 12 vị trí cài sẵn (thanh trên, thanh dưới, thanh bên trái/phải, vị trí góc...)

---

### Nhóm trang (Chỉ Shopify, menu dính)

Chọn các loại trang Shopify mà menu xuất hiện. Mặc định: tất cả.

| Nhóm | Mẫu URL |
|---|---|
| Trang chủ | `/` |
| Chi tiết sản phẩm | `/products/*` |
| Danh mục sản phẩm | `/collections/*` |
| Trang | `/pages/*` |
| Blog | `/blogs/*` |
| Khác | Tất cả các trang còn lại |

> Thị trường toàn cầu (WordPress, Wix, v.v.) không có tính năng này. Sử dụng bộ lọc từ khóa URL thay thế.

---

## Lọc theo Từ Khóa URL

Thẻ **"Hiển thị menu theo từ khóa"** — áp dụng cho tất cả các loại menu ngoại trừ Context Slide.

### Hai loại bộ lọc

| Cài đặt | Hành vi |
|---|---|
| **Chứa Từ Khóa** | Menu **chỉ hiển thị** khi URL **chứa** ít nhất một từ khóa |
| **Không Chứa Từ Khóa** | Menu **không hiển thị** khi URL **chứa** bất kỳ từ khóa nào |

Nhiều từ khóa được phân tách bằng dấu phẩy `,`.

### Ví dụ

**Chỉ hiển thị trên trang sản phẩm ván trượt:**
```
Chứa: snowboard
```
→ Menu chỉ hiển thị trên các URL như `yourdomain.com/products/the-collection-snowboard-hydrogen`

**Ẩn trên các trang đa vị trí:**
```
Không chứa: multi-location
```
→ Menu **không** hiển thị trên `yourdomain.com/products/the-multi-location-snowboard`

**Kết hợp:**
```
Chứa: collections
Không chứa: sale, outlet
```
→ Chỉ hiển thị trên các trang danh mục, nhưng ẩn trên các danh mục "sale" và "outlet".

### Ghi chú

- Bộ lọc sử dụng **khớp chuỗi URL đầy đủ**, không phải regex.
- Từ khóa là **không phân biệt chữ hoa chữ thường**.
- Để trống = không có bộ lọc (menu hiển thị trên tất cả các trang).
- Cả hai bộ lọc đều được AND — cả hai điều kiện phải được thỏa mãn.
