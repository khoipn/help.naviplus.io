---
description: Publish a Navi+ Mega Menu (Desktop) on WordPress with the Navi+ Menu Builder plugin. Place it in any post, page, widget, or page builder using the [naviwp embed_id="..."] shortcode or the Gutenberg block.
lang: vi
layout: default
permalink: /vi/docs/usage/mega-menu-desktop/publish-on-wordpress/
title: Mega Menu (Desktop) — Publish on WordPress
---
# Mega Menu (Desktop) — Publish on WordPress

A **Mega Menu (Desktop)** is a **section** menu — nó không gắn vào viewport, nó hiển thị tại vị trí chính xác trên trang nơi bạn nhúng nó (thường là tiêu đề trang). Trên WordPress, plugin Navi+ Menu Builder nhúng nó qua shortcode hoặc Gutenberg block — bạn không bao giờ chỉnh sửa tệp theme.

> Các nền tảng khác (Wix, Squarespace, Webflow, các trang tùy chỉnh): xem [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/).

---

## Steps

1. **Cài đặt plugin** — xem [Install the Navi+ Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Xây dựng Mega Menu** của bạn trong **Appearance → Naviplus Menu Builder**. Xem [Mega Menu (Desktop) — How to use]({{ site.baseurl }}/docs/usage/mega-menu-desktop/how-to-use/) để biết hướng dẫn thiết kế.
3. **Sao chép Embed ID** của menu (hiển thị trên bảng xuất bản — trông giống như `SF-123456789`).
4. **Chèn menu** vào vị trí bạn muốn trên trang (phần tiếp theo).

---

## Chèn menu — ba tùy chọn

### Tùy chọn 1 — Shortcode (hoạt động ở mọi nơi)

Dán cái này vào bất kỳ bài viết, trang hoặc widget hỗ trợ shortcode nào:

```text
[naviwp embed_id="SF-123456789"]
```

Đối với một Mega Menu nên xuất hiện trong **tiêu đề trang** trên mọi trang, vị trí sạch nhất là khu vực widget tiêu đề (nếu theme của bạn cung cấp một cái). Nếu không, hãy sử dụng một block / phần mẫu tiêu đề toàn cầu (các theme Full Site Editing), hoặc quay lại Tùy chọn 3 bên dưới.

### Tùy chọn 2 — Gutenberg block

1. Trong trình chỉnh sửa block, nhấp vào **+ → Naviplus Menu Builder**.
2. Dán **Embed ID** vào thanh bên của block.

Bạn cũng có thể thả một block **Shortcode** chung với `[naviwp embed_id="SF-..."]`.

### Tùy chọn 3 — Page builders (Elementor, Divi, Bricks, Oxygen)

Sử dụng widget **Shortcode** của trình xây dựng và dán `[naviwp embed_id="SF-..."]`. Nếu bạn muốn sử dụng HTML thô, hãy thả div nhúng trực tiếp:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

Plugin đã tải sẵn runtime của Navi+, vì vậy menu sẽ hiển thị bên trong container đó.

---

## Các cân nhắc về di động

Một Mega Menu trên desktop là, theo định nghĩa, một bố cục ưu tiên desktop. Trên các màn hình nhỏ, nó thường không nên hiển thị — kết hợp nó với một [Mega Menu (Mobile)]({{ site.baseurl }}/docs/usage/mega-menu-mobile/) hoặc [Slide Menu]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/) và sử dụng quy tắc hiển thị để ẩn mỗi cái ở breakpoint khác nhau.

Trong trình chỉnh sửa, mở **Display rules → Device** và giới hạn Mega Menu (Desktop) chỉ cho **desktop**.

---

## Cập nhật menu sau này

Chỉnh sửa menu trong quản trị WordPress (hoặc trong ứng dụng web Navi+). Các thay đổi sẽ áp dụng khi tải trang front-end tiếp theo — không cần xóa bộ nhớ cache WordPress, vì các menu được lấy tại thời điểm chạy bởi trình duyệt.

---

## Liên quan

- [WordPress / WooCommerce — overview]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publish your menus on WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Mega Menu (Desktop) — FAQ]({{ site.baseurl }}/docs/usage/mega-menu-desktop/faq/)
