---
description: Xuất bản một Menu Lưới Navi+ trên WordPress với plugin Navi+ Menu Builder. Chèn nó vào vị trí mà nó nên xuất hiện bằng cách sử dụng shortcode [naviwp embed_id="..."] hoặc khối Gutenberg.
lang: vi
layout: default
permalink: /vi/docs/usage/grid-menu/publish-on-wordpress/
title: Menu Lưới — Xuất bản trên WordPress
---
# Menu Lưới — Xuất bản trên WordPress

Một **Menu Lưới** là một menu **phần** — nó hiển thị tại vị trí trên trang mà bạn chèn nó. Nó rất phù hợp cho các phím tắt danh mục, trang trung tâm, và các bảng "bạn muốn làm gì?". Trên WordPress, plugin Navi+ Menu Builder chèn nó qua shortcode hoặc khối Gutenberg; bạn không bao giờ chỉnh sửa tệp theme.

> Các nền tảng khác (Wix, Squarespace, Webflow, các trang tùy chỉnh): xem [Xuất bản trên Wix / Squarespace / Khác]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Các bước

1. **Cài đặt plugin** — xem [Cài đặt plugin Navi+ Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Xây dựng Menu Lưới** của bạn trong **Giao diện → Naviplus Menu Builder**. Xem [Menu Lưới — Cách sử dụng]({{ site.baseurl }}/docs/usage/grid-menu/how-to-use/) và [Menu Lưới Responsive]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/).
3. **Sao chép Embed ID** (ví dụ: `SF-123456789`).
4. **Chèn nó** bằng một trong các phương pháp dưới đây.

---

## Chèn menu

### Tùy chọn 1 — Shortcode (được khuyến nghị)

```text
[naviwp embed_id="SF-123456789"]
```

Chèn điều này vào bất kỳ bài viết, trang, hoặc widget hỗ trợ shortcode nào.

Các vị trí điển hình:

- Một phần hero trên trang chủ với các ô danh mục.
- Một trang đích ở trên cùng.
- Trạng thái trống của một lưu trữ danh mục.

### Tùy chọn 2 — Khối Gutenberg

Trong trình chỉnh sửa khối, **+ → Naviplus Menu Builder**, sau đó dán Embed ID vào thanh bên của khối. Một khối **Shortcode** đơn giản với `[naviwp embed_id="SF-..."]` là tương đương.

### Tùy chọn 3 — Trình xây dựng trang (Elementor, Divi, Bricks, Oxygen)

Sử dụng một widget **Shortcode** với `[naviwp embed_id="SF-..."]`. Nếu một trình xây dựng không có widget Shortcode, một widget **HTML** với div nhúng hoạt động:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

---

## Mẹo cho di động

- Sử dụng **[Menu Lưới Responsive]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** để chuyển đổi số lượng cột theo từng điểm ngắt — ví dụ: 4 cột trên máy tính để bàn, 2 trên di động.
- Giữ nội dung ô ngắn — một biểu tượng, một nhãn một hoặc hai từ, tùy chọn một mô tả nhỏ. Các nhãn dài sẽ bọc không thể đoán trước.
- Nhắm đến các mục chạm ít nhất 44 × 44 px bao gồm cả khoảng đệm.

---

## Cập nhật menu sau này

Các chỉnh sửa trong trình chỉnh sửa sẽ áp dụng khi tải trang front-end tiếp theo — không cần xóa bộ nhớ cache WordPress.

---

## Liên quan

- [WordPress / WooCommerce — tổng quan]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Xuất bản các menu của bạn trên WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Menu Lưới Responsive]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
