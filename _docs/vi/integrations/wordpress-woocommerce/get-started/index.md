---
description: Sau khi kích hoạt plugin Navi+ AI Menu Builder, mở Giao diện → Naviplus Menu Builder, tạo menu đầu tiên của bạn trong trình chỉnh sửa trực quan, và để plugin tự động kết nối trang WordPress của bạn với Navi+.
lang: vi
layout: default
permalink: /vi/docs/integrations/wordpress-woocommerce/get-started/
title: Tạo menu đầu tiên của bạn
---
# Tạo menu đầu tiên của bạn

Khi plugin được kích hoạt, bạn xây dựng menu bên trong WordPress — không cần đăng ký riêng, không cần mã để dán.

---

## 1. Mở trình tạo menu

Trong quản trị WordPress, đi đến:

> **Giao diện → Naviplus Menu Builder**

Điều này mở trình chỉnh sửa trực quan Navi+ bên trong bảng điều khiển WordPress của bạn.

---

## 2. Tạo menu đầu tiên của bạn

Theo dõi quy trình trên màn hình để tạo một menu. Khi bạn lưu menu đầu tiên, plugin **tự động kết nối** trang của bạn với Navi+:

- Nó đăng ký một **định danh trang** cho phép dịch vụ Navi+ nhận diện cài đặt WordPress của bạn.
- Nó lưu định danh đó trong WordPress để các thay đổi menu sau này được chuyển đến trang đúng.

> Định danh trang **không** phải là mật khẩu WordPress của bạn và **không** phải là mã Navi+ mà bạn cần quản lý. Đó là một giá trị không rõ ràng mà plugin xử lý cho bạn.

Bạn **không** cần tạo tài khoản Navi+ trước khi cài đặt plugin — việc lưu menu đầu tiên sẽ xử lý kết nối.

---

## 3. Thiết kế bố cục

Bên trong trình chỉnh sửa, chọn một loại menu (Tab Bar, Slide / hamburger, Mega Menu, Grid, FAB), sau đó thiết kế bố cục. Tài liệu của trình chỉnh sửa:

- [Tổng quan về các loại menu]({{ site.baseurl }}/docs/usage/explore-common-menus/)
- [Các mục menu — mục, liên kết, biểu tượng, huy hiệu]({{ site.baseurl }}/docs/menu-items/item-overview/)
- [Tổng quan về thiết kế]({{ site.baseurl }}/docs/design/design-overview/)

Cấu trúc và kiểu dáng menu được lưu trữ trên dịch vụ Navi+; WordPress chỉ lưu định danh trang.

---

## 4. Xác minh kết nối

Mở giao diện trước của trang bạn. Các menu dính (Tab Bar, FAB) mà bạn đánh dấu là **Đã xuất bản** trong trình chỉnh sửa sẽ xuất hiện tự động trên toàn trang.

Để xác nhận runtime đang tải, sử dụng một trong hai cách:

- **Chế độ gỡ lỗi (mọi người):** thêm `#navidebug-on` vào bất kỳ URL nào — ví dụ: `https://your-site.com/#navidebug-on`. Trang sẽ chuyển sang chế độ Gỡ lỗi Navi+ nếu plugin đã được kết nối. Sử dụng `#navidebug-off` để tắt nó.
- **Bảng điều khiển (nhà phát triển):** mở DevTools → Bảng điều khiển; bạn nên thấy một thông điệp màu xanh lá cây `Using Navi+..`.

---

## Bước tiếp theo

Đối với Mega Menu và Grid Menu — được đặt ở các vị trí cụ thể trên một trang — xem **[Xuất bản menu của bạn]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)** để biết mã ngắn `[naviwp]` và khối Gutenberg.
