---
description: Cách kiểm soát khi nào và cho ai một mục menu có thể nhìn thấy trong Navi+ — trạng thái đã xuất bản, điều kiện đăng nhập và ẩn dựa trên trang.
lang: vi
layout: default
permalink: /vi/docs/menu-items/item-visibility/
title: Hiển thị & Điều kiện
---
# Hiển thị & Điều kiện

Phần **Xuất bản** trong bảng Chỉnh sửa Mục cho phép bạn kiểm soát ai thấy một mục, khi nào và trên những trang nào.

---

## Đã xuất bản

**Mặc định: bật (mục có thể nhìn thấy cho mọi người).**

Tắt điều này để ẩn mục khỏi menu trực tiếp mà không xóa nó. Mục vẫn ở trong trình chỉnh sửa — bạn có thể kích hoạt lại bất cứ lúc nào.

**Sử dụng khi:**
- Tạm thời ẩn liên kết bán hàng theo mùa.
- Chuẩn bị một mục trước khi nó được công khai.
- Giữ một mục sao lưu mà không xóa nó.

---

## Ẩn khi đăng nhập

Khi được kích hoạt, mục chỉ **có thể nhìn thấy cho những khách truy cập không đăng nhập**.

**Sử dụng cho:**
- Một nút "Đăng nhập" — khách hàng đã đăng nhập không cần nó.
- Một liên kết "Tạo tài khoản".

---

## Chỉ hiển thị khi đăng nhập

Khi được kích hoạt, mục chỉ **có thể nhìn thấy cho khách hàng đã đăng nhập**.

**Sử dụng cho:**
- Liên kết "Tài khoản của tôi".
- Điểm thưởng, lịch sử đơn hàng.
- Các tính năng dành riêng cho thành viên.

---

## Ẩn trên các loại trang cụ thể (hidepages)

Sử dụng thuộc tính `hidepages` trong **Nâng cao → Thuộc tính** để ẩn một mục trên một số loại trang nhất định.

**Cú pháp:**

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Giá trị | Các trang bị ẩn |
|---|---|
| `index` | Trang chủ |
| `products` | Trang chi tiết sản phẩm |
| `collections` | Trang bộ sưu tập / danh mục |
| `pages` | Trang tĩnh (Giới thiệu, Liên hệ…) |
| `blogs` | Trang danh sách blog và bài viết |
| `others` | Bất kỳ trang nào không thuộc các danh mục trên |

Tách các giá trị nhiều bằng `|`, không có khoảng trắng.

**Ví dụ:** Ẩn một nút "Mua ngay" trên trang chủ và các trang blog:

```
hidepages=index|blogs
```

---

## Ẩn theo thiết bị (Di động / Máy tính để bàn)

> **Quan trọng:** Navi+ không có công tắc di động/máy tính để bàn cho từng mục. Việc nhắm mục tiêu thiết bị được kiểm soát ở **cấp menu**, không phải cấp mục.

**Cách tiếp cận đúng:**

- Đi đến tab **Xuất bản** của menu → bật **Di động** và **Máy tính để bàn** cho toàn bộ menu.
- Tạo hai menu riêng biệt — một cho di động, một cho máy tính để bàn — và đặt công tắc thiết bị trên mỗi menu.

**Giải pháp tạm thời cho từng mục (nếu thực sự cần thiết):**  
Sử dụng **Nâng cao → CSS** với một truy vấn phương tiện:

```css
/* Ẩn mục này chỉ trên di động */
@media (max-width: 767px) { display: none !important; }

/* Ẩn mục này chỉ trên máy tính để bàn */
@media (min-width: 768px) { display: none !important; }
```

---

## Tóm tắt

| Điều kiện | Cách thiết lập |
|---|---|
| Ẩn hoàn toàn | Đã xuất bản → tắt |
| Ẩn khỏi người dùng đã đăng nhập | Ẩn khi đăng nhập → bật |
| Ẩn khỏi khách | Chỉ hiển thị khi đăng nhập → bật |
| Ẩn trên trang chủ | Thuộc tính: `hidepages=index` |
| Ẩn trên di động | CSS: `@media (max-width: 767px) { display: none !important; }` |
| Ẩn trên máy tính để bàn | CSS: `@media (min-width: 768px) { display: none !important; }` |
