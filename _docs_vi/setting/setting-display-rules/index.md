---
description: Kiểm soát trang nào và thiết bị nào hiển thị menu Navi+ — dùng toggle thiết bị, từ khóa URL và bộ lọc loại trang Shopify.
layout: default
permalink: /vi/docs/setting/setting-display-rules/
title: Setting Display Rules — Quy tắc hiển thị
---
# Setting Display Rules — Quy tắc hiển thị

Kiểm soát menu xuất hiện trên những trang nào dựa theo thiết bị, URL hoặc loại trang Shopify.

---

## Hiển thị theo thiết bị

Tại tab **Publish** của menu (không phải per-item):

| Toggle | Tác dụng |
|---|---|
| **Mobile** | Bật/tắt menu trên màn hình mobile |
| **Desktop** | Bật/tắt menu trên màn hình desktop |

Mặc định: chỉ Mobile được bật. Phải bật Desktop thủ công nếu muốn hiện trên máy tính.

> Muốn ẩn/hiện per-item theo thiết bị → xem [Item Visibility](/vi/docs/menu-items/item-visibility/).

---

## Hiển thị theo từ khóa URL (Keyword Rules)

Hai field trong **Setting → Display by Keywords** cho phép kiểm soát menu chỉ xuất hiện trên một số URL nhất định.

### Chỉ hiện khi URL chứa từ khóa

**Field:** `Publish — Contain Keyword`

```
collections, products/sale
```

Menu chỉ xuất hiện trên các trang có URL chứa `collections` **hoặc** `products/sale`.

**Ví dụ:** Menu "Shop Navigation" chuyên cho trang sản phẩm → chỉ hiện trên `collections/` và `products/`.

---

### Ẩn khi URL chứa từ khóa

**Field:** `Publish — Don't Contain Keyword`

```
checkout, account/login
```

Menu bị ẩn trên trang checkout và trang đăng nhập, hiện bình thường ở mọi trang khác.

**Ví dụ:** Ẩn Tabbar trên trang thanh toán để không làm phân tâm khách hàng.

---

## Hiển thị theo loại trang Shopify

Tab **Publish** cũng có 6 nhóm trang Shopify (chỉ áp dụng Shopify):

| Nhóm | Trang áp dụng |
|---|---|
| **Home** | Trang chủ |
| **Product Detail** | Trang chi tiết sản phẩm |
| **Product Categories** | Trang bộ sưu tập / danh mục |
| **Pages** | Trang tĩnh (About, Contact...) |
| **Blogs** | Trang blog và bài viết |
| **Others** | Trang không thuộc 5 nhóm trên |

Bỏ tick một nhóm → menu không hiện trên loại trang đó.

---

## Thứ tự áp dụng các điều kiện

```
1. Thiết bị có được bật không?              →  Nếu không: ẩn
2. Loại trang có được tick không?           →  Nếu không: ẩn
3. URL có chứa keyword "don't show"?        →  Nếu có: ẩn
4. URL có chứa keyword "only show"?         →  Nếu không: ẩn
5. Hiện menu
```
