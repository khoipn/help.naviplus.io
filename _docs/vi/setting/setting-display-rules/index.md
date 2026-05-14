---
description: Kiểm soát các trang và thiết bị mà menu Navi+ của bạn xuất hiện — sử dụng công tắc thiết bị, quy tắc từ khóa URL và bộ lọc loại trang Shopify.
lang: vi
layout: default
permalink: /vi/docs/setting/setting-display-rules/
title: Cài đặt quy tắc hiển thị — Tính năng hiển thị có điều kiện
---
# Cài đặt Quy tắc Hiển thị — Tính năng Hiển thị Có điều kiện

Kiểm soát nơi và khi nào menu của bạn xuất hiện dựa trên loại thiết bị, URL hoặc loại trang Shopify.

---

## Hiển thị theo Thiết bị

Tìm thấy trong tab **Xuất bản** của menu (không theo từng mục):

| Công tắc | Hiệu ứng |
|---|---|
| **Di động** | Hiện/ẩn menu trên màn hình di động |
| **Máy tính để bàn** | Hiện/ẩn menu trên màn hình máy tính để bàn |

Mặc định: chỉ Di động được kích hoạt. Bạn phải kích hoạt thủ công Máy tính để bàn nếu bạn muốn menu xuất hiện trên các màn hình lớn hơn.

> Để hiện/ẩn các mục riêng lẻ theo thiết bị → xem [Item Visibility](/docs/menu-items/item-visibility/).

---

## Hiển thị theo Từ khóa URL

Hai trường trong **Cài đặt → Hiển thị theo Từ khóa** cho phép bạn kiểm soát các URL mà menu xuất hiện.

### Chỉ hiển thị khi URL chứa từ khóa

**Trường:** `Xuất bản — Chứa Từ khóa`

```
collections, products/sale
```

Menu chỉ xuất hiện trên các trang có URL chứa `collections` **hoặc** `products/sale`.

**Ví dụ:** Một menu "Shop Navigation" cho các trang sản phẩm → chỉ hiển thị trên `collections/` và `products/`.

---

### Ẩn khi URL chứa từ khóa

**Trường:** `Xuất bản — Không Chứa Từ khóa`

```
checkout, account/login
```

Menu bị ẩn trên các trang thanh toán và đăng nhập; hiển thị ở mọi nơi khác.

**Ví dụ:** Ẩn Tabbar trong quá trình thanh toán để tránh làm phân tâm khách hàng.

---

## Hiển thị theo Loại Trang Shopify

Tab **Xuất bản** cũng bao gồm 6 nhóm trang Shopify (chỉ dành cho cửa hàng Shopify):

| Nhóm | Trang |
|---|---|
| **Trang Chủ** | Trang chủ |
| **Chi tiết Sản phẩm** | Các trang chi tiết sản phẩm |
| **Danh mục Sản phẩm** | Các trang bộ sưu tập / danh mục |
| **Trang** | Các trang tĩnh (Giới thiệu, Liên hệ, v.v.) |
| **Blog** | Các trang danh sách blog và bài viết |
| **Khác** | Các trang không thuộc 5 nhóm trên |

Bỏ chọn một nhóm → menu sẽ không xuất hiện trên loại trang đó.

---

## Cách Quy tắc Chồng chéo

Tất cả các điều kiện được đánh giá cùng nhau theo thứ tự này:

```
1. Thiết bị có được kích hoạt không?              →  Nếu không: ẩn
2. Loại trang có được kiểm tra không?           →  Nếu không: ẩn
3. URL có khớp với "Không hiển thị" không?    →  Nếu có: ẩn
4. URL có khớp với "Chỉ hiển thị" không?     →  Nếu không: ẩn
5. Hiện menu
```
