---
description: Cách kiểm soát khi nào và cho ai một mục menu hiển thị trong Navi+ — trạng thái xuất bản, điều kiện đăng nhập và ẩn theo trang.
layout: default
permalink: /vi/docs/menu-items/item-visibility/
title: Hiển thị và điều kiện
---
# Hiển thị và điều kiện

Phần **Xuất bản** trong bảng chỉnh sửa mục cho phép bạn kiểm soát ai nhìn thấy mục, khi nào và trên những trang nào.

---

## Đã xuất bản

**Mặc định: bật (mục hiển thị với tất cả mọi người).**

Tắt để ẩn mục khỏi menu trực tiếp mà không xóa. Mục vẫn còn trong trình chỉnh sửa — bạn có thể bật lại bất cứ lúc nào.

**Dùng khi:**
- Tạm thời ẩn link khuyến mãi theo mùa.
- Chuẩn bị mục trước khi đưa lên live.
- Giữ mục dự phòng mà không xóa.

---

## Ẩn khi đã đăng nhập

Khi bật, mục **chỉ hiển thị với khách chưa đăng nhập**.

**Dùng cho:**
- Nút "Đăng nhập" — khách hàng đã đăng nhập không cần thấy.
- Link "Tạo tài khoản".

---

## Chỉ hiển thị khi đã đăng nhập

Khi bật, mục **chỉ hiển thị với khách hàng đã đăng nhập**.

**Dùng cho:**
- Link "Tài khoản của tôi".
- Điểm tích lũy, lịch sử đơn hàng.
- Tính năng dành riêng cho thành viên.

---

## Ẩn trên loại trang cụ thể (hidepages)

Dùng thuộc tính `hidepages` trong **Nâng cao → Thuộc tính** để ẩn mục trên một số loại trang.

**Cú pháp:**

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Giá trị | Ẩn trên trang |
|---|---|
| `index` | Trang chủ |
| `products` | Trang chi tiết sản phẩm |
| `collections` | Trang bộ sưu tập / danh mục |
| `pages` | Trang tĩnh (Giới thiệu, Liên hệ…) |
| `blogs` | Trang danh sách blog và bài đăng |
| `others` | Các trang khác không thuộc các loại trên |

Ngăn cách nhiều giá trị bằng `|`, không có khoảng trắng.

**Ví dụ:** Ẩn nút "Mua ngay" trên trang chủ và trang blog:

```
hidepages=index|blogs
```

---

## Ẩn theo thiết bị (Mobile / Desktop)

> **Lưu ý quan trọng:** Navi+ không có nút bật/tắt mobile/desktop cho từng mục. Việc nhắm mục tiêu theo thiết bị được kiểm soát ở **cấp độ menu**, không phải cấp độ mục.

**Cách đúng:**

- Vào tab **Xuất bản** của menu → bật/tắt **Mobile** và **Desktop** cho toàn bộ menu.
- Tạo hai menu riêng biệt — một cho mobile, một cho desktop — và đặt nút bật thiết bị trên mỗi menu.

**Cách xử lý cho từng mục (nếu thực sự cần):**  
Dùng **Nâng cao → CSS** với media query:

```css
/* Ẩn mục này chỉ trên mobile */
@media (max-width: 767px) { display: none !important; }

/* Ẩn mục này chỉ trên desktop */
@media (min-width: 768px) { display: none !important; }
```

---

## Tóm tắt

| Điều kiện | Cách cài đặt |
|---|---|
| Ẩn hoàn toàn | Đã xuất bản → tắt |
| Ẩn với người dùng đã đăng nhập | Ẩn khi đã đăng nhập → bật |
| Ẩn với khách chưa đăng nhập | Chỉ hiển thị khi đã đăng nhập → bật |
| Ẩn trên trang chủ | Thuộc tính: `hidepages=index` |
| Ẩn trên mobile | CSS: `@media (max-width: 767px) { display: none !important; }` |
| Ẩn trên desktop | CSS: `@media (min-width: 768px) { display: none !important; }` |
