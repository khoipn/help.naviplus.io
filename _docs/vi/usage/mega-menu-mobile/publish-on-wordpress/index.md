---
description: Publish a Navi+ Mega Menu (Mobile) on WordPress with the Navi+ Menu Builder plugin. Insert it where it should appear via the [naviwp embed_id="..."] shortcode or Gutenberg block.
lang: vi
layout: default
permalink: /vi/docs/usage/mega-menu-mobile/publish-on-wordpress/
title: Mega Menu (Mobile) — Publish on WordPress
---
# Mega Menu (Mobile) — Publish on WordPress

A **Mega Menu (Mobile)** is a **section** menu — nó hiển thị tại vị trí trên trang mà bạn nhúng nó. Trên WordPress, plugin Navi+ Menu Builder đặt nó thông qua shortcode hoặc khối Gutenberg; bạn không bao giờ chỉnh sửa tệp theme.

> Các nền tảng khác (Wix, Squarespace, Webflow, các trang tùy chỉnh): xem [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/mega-menu-mobile/publish-on-wordpress-woocommerce-wix-others/).

---

## Steps

1. **Cài đặt plugin** — xem [Install the Navi+ Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Xây dựng Mega Menu (Mobile)** của bạn trong **Appearance → Naviplus Menu Builder**. Xem [Mega Menu (Mobile) — How to use]({{ site.baseurl }}/docs/usage/mega-menu-mobile/how-to-use/).
3. **Sao chép Embed ID** (ví dụ: `SF-123456789`).
4. **Nhúng nó** bằng một trong các phương pháp dưới đây.

---

## Insert the menu

### Option 1 — Shortcode (recommended)

```text
[naviwp embed_id="SF-123456789"]
```

Dán điều này vào bất kỳ bài viết, trang hoặc widget hỗ trợ shortcode nào.

Nếu bạn muốn menu mega di động nằm trong tiêu đề trang của bạn, vị trí sạch nhất là khu vực **tiêu đề di động** trong theme của bạn — hoặc một phần mẫu Full Site Editing được giới hạn cho di động.

### Option 2 — Gutenberg block

Trong trình chỉnh sửa khối, **+ → Naviplus Menu Builder**, dán Embed ID vào thanh bên của khối. Một khối **Shortcode** đơn giản với `[naviwp embed_id="SF-..."]` hoạt động theo cách tương tự.

### Option 3 — Page builders

Sử dụng một widget **Shortcode** với `[naviwp embed_id="SF-..."]`, hoặc một widget **HTML**:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

---

## Mobile-first tips

- Tạo các mục chạm ít nhất 44 × 44 px — sử dụng các điều khiển khoảng cách và đệm của trình chỉnh sửa; xem trước trên một thiết bị thực.
- Tránh hơn 2 cấp độ lồng nhau — các menu con sâu gây khó chịu trên màn hình cảm ứng. Đối với các cây sâu hơn, hãy xem xét một [Slide Menu]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/) thay thế.
- Kết hợp điều này với một [Mega Menu (Desktop)]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/) và sử dụng **Display rules → Device** để hiển thị mỗi menu chỉ trên điểm ngắt mục tiêu của nó.
- Chú ý đến sự chồng chéo với các phần tử dính (Tab Bar, FAB, widget trò chuyện). Xem [Menu overlapping other elements]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).

---

## Updating the menu later

Các chỉnh sửa trong trình chỉnh sửa sẽ áp dụng khi tải trang front-end tiếp theo — không cần xóa bộ nhớ cache WordPress.

---

## Related

- [WordPress / WooCommerce — overview]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publish your menus on WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Mega Menu (Mobile) — How to use]({{ site.baseurl }}/docs/usage/mega-menu-mobile/how-to-use/)
