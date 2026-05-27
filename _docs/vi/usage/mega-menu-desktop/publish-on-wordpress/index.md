---
description: Publish a Navi+ Mega Menu (Desktop) on WordPress with the Navi+ AI Menu Builder plugin. Place it in any post, page, widget, or page builder using the [naviwp embed_id="..."] shortcode or the Gutenberg block.
lang: vi
layout: default
permalink: /vi/docs/usage/mega-menu-desktop/publish-on-wordpress/
title: Mega Menu (Desktop) — Publish on WordPress
---
# Mega Menu (Desktop) — Publish on WordPress

A **Mega Menu (Desktop)** is a **section** menu — nó không gắn vào viewport, nó hiển thị tại vị trí chính xác trên trang mà bạn nhúng nó (thường là tiêu đề trang web). Trên WordPress, plugin Navi+ AI Menu Builder nhúng nó qua shortcode hoặc khối Gutenberg — bạn không bao giờ chỉnh sửa tệp theme.

> Các nền tảng khác (Wix, Squarespace, Webflow, các trang tùy chỉnh): xem [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/).

---

## Steps

1. **Cài đặt plugin** — xem [Install the Navi+ AI Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Xây dựng Mega Menu** của bạn trong **Appearance → Naviplus Menu Builder**. Xem [Mega Menu (Desktop) — How to use]({{ site.baseurl }}/docs/usage/mega-menu-desktop/how-to-use/) để biết hướng dẫn thiết kế.
3. **Sao chép Embed ID** của menu (hiển thị trên bảng xuất bản — trông giống như `SF-123456789`).
4. **Chèn menu** vào vị trí bạn muốn trên trang (phần tiếp theo).

---

## Chèn menu — ba tùy chọn

### Tùy chọn 1 — Shortcode (hoạt động ở mọi nơi)

Dán cái này vào bất kỳ bài viết, trang hoặc widget nhận diện shortcode nào:

```text
[naviwp embed_id="SF-123456789"]
```

Đối với một Mega Menu nên xuất hiện trong **tiêu đề trang web** trên mọi trang, vị trí sạch nhất là khu vực widget tiêu đề (nếu theme của bạn cung cấp một). Nếu không, hãy sử dụng một khối / phần tiêu đề toàn cầu (các theme Full Site Editing), hoặc quay lại Tùy chọn 3 bên dưới.

### Tùy chọn 2 — Khối Gutenberg

1. Trong trình chỉnh sửa khối, nhấp vào **+ → Naviplus Menu Builder**.
2. Dán **Embed ID** vào thanh bên của khối.

Bạn cũng có thể thả một khối **Shortcode** chung với `[naviwp embed_id="SF-..."]`.

### Tùy chọn 3 — Trình xây dựng trang (Elementor, Divi, Bricks, Oxygen)

Sử dụng widget **Shortcode** của trình xây dựng và dán `[naviwp embed_id="SF-..."]`. Nếu bạn muốn sử dụng HTML thô, hãy thả div nhúng trực tiếp:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

Plugin đã tải sẵn runtime của Navi+, vì vậy menu sẽ hiển thị bên trong container đó.

### Tùy chọn 4 — CSS Selector (tự động chèn từ ứng dụng Navi+)

Thay vì đặt một shortcode thủ công, bạn có thể để Navi+ tự động chèn hoặc thay thế một phần tử bằng cách sử dụng CSS Selector — được cấu hình hoàn toàn từ ứng dụng Navi+.

#### Hiểu CSS Selector

Một CSS Selector nhắm đến một phần tử HTML cụ thể trên trang của bạn. Navi+ sử dụng nó để biết chính xác **nơi** để đặt menu của bạn — chèn trước, chèn sau, hoặc thay thế một phần tử hiện có.

Để tìm CSS Selector đúng, hãy sử dụng:
- [Debug Mode](/docs/usage/debug-mode-find-css-selectors/) — di chuột qua bất kỳ phần tử nào và ngay lập tức sao chép selector của nó
- [Browser DevTools](/docs/usage/general/find-css-selector/) — phương pháp thủ công qua trình kiểm tra trình duyệt

#### Ba tùy chọn xuất bản

Trong ứng dụng Navi+: nhấp vào **Publish to website** → bật **"Publish menu by Insert/Replace method"** → nhập CSS Selector của bạn và chọn một tùy chọn:

<details><summary>Tùy chọn A: Chèn Trước</summary>
<p>Chèn menu ngay lập tức <strong>trước</strong> phần tử đã chọn.</p>
<p><strong>Ví dụ:</strong> <code>main</code> → menu xuất hiện trên khu vực nội dung chính.</p>
<p>Các selector phổ biến cho các theme WordPress:</p>
<ul>
<li><code>main</code> — hầu hết các theme</li>
<li><code>#main</code> — Twenty Twenty, Astra, OceanWP</li>
<li><code>.site-main</code> — nhiều theme</li>
</ul>
</details>

<details><summary>Tùy chọn B: Chèn Sau</summary>
<p>Chèn menu ngay lập tức <strong>sau</strong> phần tử đã chọn.</p>
<p><strong>Ví dụ:</strong> <code>header</code> → menu xuất hiện ngay dưới tiêu đề.</p>
<p>Đây là cấu hình phổ biến nhất cho một Mega Menu trên desktop.</p>
<p>Các selector phổ biến cho các theme WordPress:</p>
<ul>
<li><code>header</code> — hầu hết các theme</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One và các theme WordPress mặc định</li>
<li><code>#header</code> — Divi</li>
</ul>
</details>

<details><summary>Tùy chọn C: Thay thế</summary>
<p>Thay thế hoàn toàn phần tử đã chọn bằng menu Navi+. Phần tử gốc sẽ bị ẩn và Navi+ sẽ chiếm chỗ của nó.</p>
<p><strong>Ví dụ:</strong> <code>.main-navigation</code> → menu điều hướng mặc định của theme bị ẩn và được thay thế bằng Mega Menu Navi+ của bạn.</p>
<p>Các selector phổ biến cho các theme WordPress:</p>
<ul>
<li><code>.main-navigation</code> — Twenty Twenty-One và nhiều theme WordPress mặc định</li>
<li><code>#site-navigation</code> — một số theme WordPress mặc định</li>
<li><code>.nav-primary</code> — nhiều theme khác nhau</li>
</ul>
<p><strong>Chú ý:</strong> Một chớp mắt ngắn của menu gốc có thể xuất hiện trong khi Navi+ tải. Sử dụng tùy chọn tối ưu hóa UX tích hợp trong cài đặt xuất bản để ẩn phần tử gốc ngay lập tức.</p>
</details>

#### Nhắm mục tiêu theo thiết bị

Thêm một hậu tố để áp dụng selector chỉ trên một thiết bị cụ thể:

| Hậu tố | Áp dụng cho |
|--------|------------|
| `(M)` | Chỉ di động |
| `(D)` | Chỉ desktop |
| *(không có)* | Cả hai |

Ví dụ: `header(D)` — chỉ chèn trên desktop.

---

## Các cân nhắc về di động

Một Mega Menu trên desktop, theo định nghĩa, là một bố cục ưu tiên desktop. Trên các màn hình nhỏ, nó thường không nên hiển thị — kết hợp nó với một [Mega Menu (Mobile)]({{ site.baseurl }}/docs/usage/mega-menu-mobile/) hoặc [Slide Menu]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/) và sử dụng quy tắc hiển thị để ẩn mỗi cái trên điểm ngắt khác.

Trong trình chỉnh sửa, mở **Display rules → Device** và hạn chế Mega Menu (Desktop) chỉ cho **desktop**.

---

## Cập nhật menu sau này

Chỉnh sửa menu trong quản trị WordPress (hoặc trong ứng dụng web Navi+). Các thay đổi sẽ áp dụng khi tải trang front-end tiếp theo — không cần xóa bộ nhớ cache WordPress, vì các menu được lấy tại thời điểm chạy bởi trình duyệt.

---

## Liên quan

- [WordPress / WooCommerce — tổng quan]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Xuất bản menu của bạn trên WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Mega Menu (Desktop) — FAQ]({{ site.baseurl }}/docs/usage/mega-menu-desktop/faq/)
