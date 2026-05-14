---
description: Publish a Navi+ FAB (Floating Action Button) on WordPress with the Navi+ Menu Builder plugin. The FAB is a sticky menu — once published in the editor it appears site-wide automatically.
lang: vi
layout: default
permalink: /vi/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/
title: FAB — Publish on WordPress
---
# FAB — Publish on WordPress

A **FAB (Floating Action Button)** is a **sticky** menu — nó nổi trên trang (thường ở một góc) và giữ nguyên khi người dùng cuộn. Trên WordPress, plugin Navi+ Menu Builder tự động hiển thị nó trên toàn bộ trang; bạn không cần dán bất kỳ mã hoặc shortcode nào.

> Các nền tảng khác (Wix, Squarespace, Webflow, các trang tùy chỉnh): xem [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress-woocommerce-wix-others/).

---

## Steps

1. **Install the plugin** — xem [Install the Navi+ Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Build your FAB** trong **Appearance → Naviplus Menu Builder**. Xem [FAB — How to use]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/) để biết hướng dẫn thiết kế (hành động đơn vs. menu có thể mở rộng).
3. **Publish the menu** trong trình chỉnh sửa (trạng thái: Đã xuất bản, không phải Bản nháp).

FAB xuất hiện trên mọi trang của trang WordPress của bạn ngay lập tức. Không cần shortcode, không cần chỉnh sửa giao diện.

---

## Restricting the FAB to specific pages or audiences

Đừng tắt nhúng toàn trang của plugin (điều đó sẽ tắt hoàn toàn runtime). Giới hạn FAB trong trình chỉnh sửa:

- **Display rules → URL pattern** — chỉ hiển thị trên `/contact*`, ẩn trên `/checkout*`, v.v.
- **Display rules → Device** — máy tính để bàn, di động, hoặc cả hai.
- **Display rules → Visitor state** — chỉ người dùng đã đăng nhập, v.v.

---

## Mobile tips

- Chọn một góc không xung đột với giao diện người dùng của trình duyệt trên di động (góc dưới bên phải là mặc định an toàn; giữa dưới có thể xung đột với thanh URL trên iOS).
- Đảm bảo rằng FAB không chồng lên Tab Bar hoặc widget trò chuyện. Xem [Menu overlapping other elements]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).
- Nếu FAB mở rộng thành một menu, giữ danh sách hành động ngắn (3–6 mục) — danh sách dài sẽ khó sử dụng trên cảm ứng.

---

## Verify the FAB is live

Thêm `#navidebug-on` vào bất kỳ URL trang nào. Trang sẽ chuyển sang chế độ Debug của Navi+ nếu plugin đã được kết nối. Xem [Create your first menu — Verify the connection]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Related

- [WordPress / WooCommerce — overview]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publish your menus on WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [FAB — How to use]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/)
