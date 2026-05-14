---
description: Cài đặt plugin Navi+ Menu Builder trên trang WordPress hoặc WooCommerce của bạn — từ thư mục WordPress.org, tải lên ZIP, FTP, hoặc WP-CLI.
lang: vi
layout: default
permalink: /vi/docs/integrations/wordpress-woocommerce/install-plugin/
title: Cài đặt plugin Navi+ Menu Builder
---
# Cài đặt plugin Navi+ Menu Builder

> Tên đầy đủ của plugin trên WordPress.org là **Naviplus Menu Builder**. Trong phần còn lại của tài liệu này, nó được gọi là **Navi+ Menu Builder** (hoặc chỉ **Navi+**).

Plugin được xuất bản trên thư mục plugin chính thức của WordPress.org, vì vậy nó được cài đặt giống như bất kỳ plugin WordPress nào khác — không có ZIP từ bên thứ ba, không có khóa bản quyền.

> Thư mục: <https://wordpress.org/plugins/naviplus-menu-builder/>

---

## Tùy chọn A — Cài đặt từ quản trị WordPress (được khuyến nghị)

1. Đăng nhập vào quản trị WordPress của bạn (`/wp-admin/`).
2. Đi tới **Plugins → Add New**.
3. Tìm kiếm **Naviplus Menu Builder** (hoặc chỉ **Navi+**).
4. Nhấp vào **Install Now**, sau đó **Activate**.

Sau khi kích hoạt, plugin có sẵn dưới **Appearance → Naviplus Menu Builder** trong thanh bên quản trị.

---

## Tùy chọn B — Tải lên một ZIP

Sử dụng tùy chọn này nếu máy chủ của bạn chặn cài đặt từ thư mục.

1. Trên trang [WordPress.org plugin](https://wordpress.org/plugins/naviplus-menu-builder/), nhấp vào **Download** để tải tệp `.zip`.
2. Trong quản trị của bạn, đi tới **Plugins → Add New → Upload Plugin**.
3. Chọn ZIP, nhấp vào **Install Now**, sau đó **Activate Plugin**.

---

## Tùy chọn C — FTP / trình quản lý tệp

1. Giải nén ZIP của plugin. Thư mục gốc bên trong lưu trữ là `naviplus-menu-builder/`.
2. Tải thư mục đó lên `wp-content/plugins/` trên máy chủ của bạn.
3. Trong **Plugins → Installed Plugins**, nhấp vào **Activate** trên **Naviplus Menu Builder**.

---

## Tùy chọn D — WP-CLI

```bash
wp plugin install naviplus-menu-builder --activate
```

---

## Yêu cầu

- WordPress **5.8** hoặc mới hơn — sử dụng phiên bản WordPress ổn định mới nhất mà máy chủ của bạn hỗ trợ là được khuyến nghị.
- Quyền quản trị — cần thiết để cài đặt plugin và chỉnh sửa **Appearance**.

---

## Sau khi kích hoạt

Plugin đã được cài đặt nhưng chưa hiển thị gì — điều đó xảy ra sau khi bạn tạo menu đầu tiên trong trình chỉnh sửa, tại thời điểm đó plugin tự động kết nối trang của bạn với Navi+.

Tiếp tục với **[Tạo menu đầu tiên của bạn]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.
