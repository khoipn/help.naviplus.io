---
description: Lọc hiển thị menu Navi+ theo thiết bị, scroll behavior, loại trang Shopify và URL keyword.
layout: default
permalink: /vi/docs/publish/publish-filter/
title: Publish filter — Thiết bị & URL
---
# Publish Filter — Thiết bị & URL

Sau khi bật toggle publish, có thể thu hẹp điều kiện hiển thị qua hai lớp lọc: **thiết bị** (mobile/desktop + scroll behavior) và **URL keyword** (chỉ hiện trên URL chứa/không chứa từ khoá).

---

## Lọc theo thiết bị

### Bật/tắt theo nền tảng

Hai toggle ở đầu modal Publish:

| Setting | Mặc định | Ghi chú |
|---|---|---|
| **Show menu on mobile** | Bật | Hiện menu trên thiết bị mobile |
| **Show menu on desktop** | Tắt | Hiện menu trên thiết bị desktop |

Một số loại menu disable một trong hai toggle — ví dụ Desktop Mega Menu disable mobile toggle.

---

### Hiệu ứng scroll (chỉ Sticky menu)

Cấu hình riêng cho mobile và desktop.

#### Mobile scroll

| Setting | Hành vi |
|---|---|
| **Auto Hide on scroll down** | Ẩn menu khi user scroll **xuống** |
| **Auto Show after scroll** | Chỉ hiện menu sau khi user đã scroll xuống (không hiện ngay khi load trang) |

#### Desktop scroll

| Setting | Hành vi |
|---|---|
| **Auto Hide on scroll down** | Ẩn menu khi scroll xuống trên desktop |
| **Auto Show after scroll** | Chỉ hiện sau khi scroll xuống trên desktop |

> Auto Hide và Auto Show có thể bật đồng thời: menu ẩn khi scroll xuống, hiện lại khi scroll lên — pattern phổ biến cho bottom tabbar.

---

### Vị trí hiển thị (chỉ Sticky / Tabbar)

Chọn vị trí bằng radio button kèm hình minh hoạ.

**Mobile** — 6 vị trí preset (bottom center, bottom left, bottom right, top variants...)

**Desktop** — 12 vị trí preset (top bar, bottom bar, left/right sidebar, corner positions...)

---

### Lọc theo nhóm trang (Shopify only, Sticky menu)

Chọn nhóm trang nào menu sẽ xuất hiện. Mặc định: tất cả.

| Nhóm | URL pattern |
|---|---|
| Home | `/` |
| Product Detail | `/products/*` |
| Product Categories | `/collections/*` |
| Pages | `/pages/*` |
| Blogs | `/blogs/*` |
| Others | Mọi trang còn lại |

> Global market (WordPress, Wix...) không có tính năng này. Dùng URL keyword filter thay thế.

---

## Lọc theo URL keyword

Card **"Display the menu by keywords"** — áp dụng cho tất cả loại menu trừ Context Slide.

### Hai loại filter

| Setting | Hành vi |
|---|---|
| **Contain Keyword** | Menu **chỉ hiện** khi URL **chứa** ít nhất một keyword |
| **Don't Contain Keyword** | Menu **không hiện** khi URL **chứa** bất kỳ keyword nào |

Nhiều keyword cách nhau bằng dấu phẩy `,`.

### Ví dụ thực tế

**Chỉ hiện menu trên trang sản phẩm snowboard:**
```
Contain: snowboard
```
→ Menu chỉ hiện trên URL như `yourdomain.com/products/the-collection-snowboard-hydrogen`

**Ẩn menu trên trang multi-location:**
```
Don't contain: multi-location
```
→ Menu không hiện trên `yourdomain.com/products/the-multi-location-snowboard`

**Kết hợp cả hai:**
```
Contain: collections
Don't contain: sale, outlet
```
→ Chỉ hiện trên trang collection, nhưng ẩn trên collection "sale" và "outlet".

### Lưu ý

- Filter dùng **full URL string matching**, không phải regex.
- Keyword **không phân biệt hoa thường** (case-insensitive).
- Để trống = không áp dụng filter (menu hiện ở mọi trang).
- Hai filter AND với nhau — phải thoả mãn cả hai điều kiện.
