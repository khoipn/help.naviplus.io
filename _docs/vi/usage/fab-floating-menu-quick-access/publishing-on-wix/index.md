---
description: Xuất bản FAB (floating action button) của Navi+ trên Wix. Navi+ là ứng dụng native của Wix App Market — cài đặt nó, xuất bản FAB, và nó sẽ xuất hiện trên toàn bộ trang web tự động. Không cần code, không cần đoạn embed.
lang: vi
layout: default
permalink: /vi/docs/usage/fab-floating-menu-quick-access/publishing-on-wix/
title: FAB — Xuất bản trên Wix
---
# FAB — Xuất bản trên Wix

Navi+ chạy trên Wix như một **ứng dụng native của Wix App Market**. **FAB** (floating action button) là một menu **sticky** — một phím tắt nổi luôn được ghim ở góc của viewport khi người dùng cuộn. Trên Wix, sau khi bạn cài đặt Navi+ và xuất bản FAB, nó sẽ render **trên toàn bộ trang web tự động** — không có code để dán và không cần bước Custom Code.

> Các nền tảng khác: xem [Publish on Shopify]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publishing-on-shopify/), [Publish on WordPress]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/), hoặc [Squarespace / Webflow / others]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress-woocommerce-wix-others/).

---

## Các bước

1. **Cài đặt Navi+ từ [Wix App Market](https://www.wix.com/app-market)** — nó sẽ mở bên trong bảng điều khiển Wix của bạn, đã kết nối với trang web của bạn. Wix xử lý xác thực, vì vậy không có khóa API nào để thiết lập.
2. **Xây dựng FAB của bạn** — chọn **FAB** layout và thêm các hành động nhanh của bạn (liên hệ, giỏ hàng, quay lại đầu trang, v.v.). Xem [FAB — How to use]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/).
3. **Xuất bản menu** (trạng thái: Published, không phải Draft).

Đó là tất cả. Navi+ tự nhúng vào trang web Wix live của bạn thông qua Embedded Script của Wix, và FAB sẽ xuất hiện trên mọi trang ngay lập tức — không cần đoạn code, không cần chỉnh sửa theme.

---

## Hạn chế FAB cho các trang cụ thể

Giới hạn phạm vi FAB bên trong trình soạn thảo Navi+:

- **Display rules → URL pattern** — hiển thị FAB chỉ trên các URL khớp.
- **Display rules → Device** — hạn chế cho mobile hoặc desktop.
- **Display rules → Visitor state** — hạn chế cho người dùng đã đăng nhập, v.v.

Các quy tắc được đánh giá trong trình duyệt, vì vậy những thay đổi sẽ áp dụng khi tải lại trang.

---

## Thanh toán

Navi+ trên Wix được tính phí thông qua **Wix** — gói miễn phí cộng với các gói **Starter, Business, và Elite**, được tính cùng với đăng ký Wix của bạn. Nâng cấp từ màn hình giá trong ứng dụng.

---

## Liên quan

- [FAB — How to use]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/)
- [Install Navi+]({{ site.baseurl }}/docs/how-to-install-navi/)
