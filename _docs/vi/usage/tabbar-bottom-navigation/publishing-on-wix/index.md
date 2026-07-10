---
description: Xuất bản Tab Bar trên Wix. Navi+ là ứng dụng native của Wix App Market — cài đặt nó, xuất bản Tab Bar, và nó sẽ xuất hiện trên toàn bộ trang web tự động. Không cần code, không cần đoạn embed.
lang: vi
layout: default
permalink: /vi/docs/usage/tabbar-bottom-navigation/publishing-on-wix/
title: Tab Bar — Xuất bản trên Wix
---
# Tab Bar — Xuất bản trên Wix

Navi+ chạy trên Wix như một **ứng dụng native của Wix App Market**. **Tab Bar** là một menu **sticky** — nó được gắn vào viewport (thường ở dưới cùng trên mobile) và nằm yên khi người dùng cuộn. Trên Wix, sau khi bạn cài đặt Navi+ và xuất bản Tab Bar, nó sẽ render **trên toàn bộ trang web tự động** — không có code để dán và không cần bước Custom Code.

> Các nền tảng khác: xem [Publish on Shopify]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publishing-on-shopify/), [Publish on WordPress]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/), hoặc [Squarespace / Webflow / others]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/).

---

## Các bước

1. **Cài đặt Navi+ từ [Wix App Market](https://www.wix.com/app-market)** — nó sẽ mở bên trong bảng điều khiển Wix của bạn, đã kết nối với trang web của bạn. Wix xử lý xác thực, vì vậy không có khóa API nào để thiết lập.
2. **Xây dựng Tab Bar của bạn** — chọn **Tab Bar** layout và thêm 3–5 đích chính. Xem [Tab Bar — How to use]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/) để biết mẹo thiết kế.
3. **Xuất bản menu** (trạng thái: Published, không phải Draft).

Đó là tất cả. Navi+ tự nhúng vào trang web Wix live của bạn thông qua Embedded Script của Wix, và Tab Bar sẽ xuất hiện trên mọi trang ngay lập tức — không cần đoạn code, không cần chỉnh sửa theme.

---

## Hạn chế Tab Bar cho các trang cụ thể

Giới hạn phạm vi Tab Bar bên trong trình soạn thảo Navi+ — đừng cố gỡ bỏ ứng dụng:

- **Display rules → URL pattern** — hiển thị Tab Bar chỉ trên các URL khớp với glob (ví dụ: `/shop/*`).
- **Display rules → Device** — hạn chế chỉ cho mobile.
- **Display rules → Visitor state** — hạn chế cho người dùng đã đăng nhập, v.v.

Các quy tắc được đánh giá trong trình duyệt, vì vậy những thay đổi sẽ áp dụng khi tải lại trang.

---

## Thanh toán

Navi+ trên Wix được tính phí thông qua **Wix** — gói miễn phí cộng với các gói **Starter, Business, và Elite**, được tính cùng với đăng ký Wix của bạn. Nâng cấp từ màn hình giá trong ứng dụng.

---

## Liên quan

- [Tab Bar — How to use]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/)
- [Install Navi+]({{ site.baseurl }}/docs/how-to-install-navi/)
