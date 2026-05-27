---
description: Xuất bản một Menu Lưới Navi+ trên WordPress với plugin Navi+ AI Menu Builder. Chèn nó vào vị trí mà nó nên xuất hiện bằng cách sử dụng shortcode [naviwp embed_id="..."] hoặc khối Gutenberg.
lang: vi
layout: default
permalink: /vi/docs/usage/grid-menu/publish-on-wordpress/
title: Menu Lưới — Xuất bản trên WordPress
---
# Menu Lưới — Xuất bản trên WordPress

Một **Menu Lưới** là một menu **phần** — nó hiển thị tại vị trí trên trang mà bạn chèn nó. Nó rất phù hợp cho các phím tắt danh mục, trang trung tâm, và các bảng "bạn muốn làm gì?". Trên WordPress, plugin Navi+ AI Menu Builder chèn nó qua shortcode hoặc khối Gutenberg; bạn không bao giờ chỉnh sửa tệp theme.

> Các nền tảng khác (Wix, Squarespace, Webflow, các trang tùy chỉnh): xem [Xuất bản trên Wix / Squarespace / Khác]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Các bước

1. **Cài đặt plugin** — xem [Cài đặt plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Xây dựng Menu Lưới** của bạn trong **Giao diện → Naviplus Menu Builder**. Xem [Menu Lưới — Cách sử dụng]({{ site.baseurl }}/docs/usage/grid-menu/how-to-use/) và [Menu Lưới Responsive]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/).
3. **Sao chép ID Nhúng** (ví dụ: `SF-123456789`).
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

Trong trình chỉnh sửa khối, **+ → Naviplus Menu Builder**, sau đó dán ID Nhúng vào thanh bên của khối. Một khối **Shortcode** đơn giản với `[naviwp embed_id="SF-..."]` là tương đương.

### Tùy chọn 3 — Trình xây dựng trang (Elementor, Divi, Bricks, Oxygen)

Sử dụng một widget **Shortcode** với `[naviwp embed_id="SF-..."]`. Nếu một trình xây dựng không có widget Shortcode, một widget **HTML** với div nhúng hoạt động:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

### Tùy chọn 4 — CSS Selector (tự động chèn từ ứng dụng Navi+)

Thay vì chèn một shortcode thủ công, bạn có thể để Navi+ tự động chèn hoặc thay thế một phần tử bằng cách sử dụng CSS Selector — được cấu hình hoàn toàn từ ứng dụng Navi+.

#### Hiểu CSS Selector

Một CSS Selector nhắm đến một phần tử HTML cụ thể trên trang của bạn. Navi+ sử dụng nó để biết chính xác **nơi** để đặt menu của bạn — chèn trước, chèn sau, hoặc thay thế một phần tử hiện có.

Để tìm CSS Selector đúng, sử dụng:
- [Chế độ Gỡ lỗi](/docs/usage/debug-mode-find-css-selectors/) — di chuột qua bất kỳ phần tử nào và ngay lập tức sao chép selector của nó
- [DevTools Trình duyệt](/docs/usage/general/find-css-selector/) — phương pháp thủ công qua trình kiểm tra trình duyệt

#### Ba tùy chọn xuất bản

Trong ứng dụng Navi+: nhấp vào **Xuất bản lên website** → bật **"Xuất bản menu bằng phương pháp Chèn/Thay thế"** → nhập CSS Selector của bạn và chọn một tùy chọn:

<details><summary>Tùy chọn A: Chèn Trước</summary>
<p>Chèn Menu Lưới ngay lập tức <strong>trước</strong> phần tử đã chọn, hiển thị như một phần đầy đủ.</p>
<p><strong>Ví dụ:</strong> <code>main</code> → Menu Lưới xuất hiện trên khu vực nội dung chính.</p>
<p>Đây là thiết lập phổ biến nhất cho một Menu Lưới trên WordPress.</p>
<p>Các selector phổ biến cho các theme WordPress:</p>
<ul>
<li><code>main</code> — hầu hết các theme</li>
<li><code>#main</code> — Twenty Twenty, Astra, OceanWP</li>
<li><code>.site-main</code> — nhiều theme</li>
<li><code>#content</code> — Divi, một số theme mặc định</li>
</ul>
</details>

<details><summary>Tùy chọn B: Chèn Sau</summary>
<p>Chèn Menu Lưới ngay lập tức <strong>sau</strong> phần tử đã chọn.</p>
<p><strong>Ví dụ:</strong> <code>header</code> → Menu Lưới xuất hiện ngay dưới tiêu đề.</p>
<p>Các selector phổ biến cho các theme WordPress:</p>
<ul>
<li><code>header</code> — hầu hết các theme</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One và các theme WordPress mặc định</li>
</ul>
</details>

<details><summary>Tùy chọn C: Thay thế</summary>
<p>Hầu hết các trang WordPress không có một phần tử Menu Lưới tích hợp để thay thế. Chèn Trước <code>main</code> là phương pháp được khuyến nghị.</p>
<p>Nếu theme của bạn có một phần tử kiểu lưới mà bạn muốn thay thế, hãy sử dụng <a href="/docs/usage/debug-mode-find-css-selectors/">Chế độ Gỡ lỗi</a> hoặc <a href="/docs/usage/general/find-css-selector/">DevTools Trình duyệt</a> để tìm selector của nó.</p>
</details>

#### Nhắm mục tiêu theo thiết bị

Thêm một hậu tố để áp dụng selector chỉ trên một thiết bị cụ thể:

| Hậu tố | Áp dụng cho |
|--------|------------|
| `(M)` | Chỉ di động |
| `(D)` | Chỉ máy tính để bàn |
| *(không có)* | Cả hai |

Ví dụ: `main(D)` — chỉ chèn Menu Lưới trên máy tính để bàn.

---

## Mẹo cho di động

- Sử dụng **[Menu Lưới Responsive]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** để chuyển đổi số lượng cột theo từng điểm ngắt — ví dụ: 4 cột trên máy tính để bàn, 2 trên di động.
- Giữ nội dung ô ngắn — một biểu tượng, một nhãn một hoặc hai từ, tùy chọn một mô tả nhỏ. Các nhãn dài sẽ bọc không thể đoán trước.
- Nhắm đến các mục tiêu chạm ít nhất 44 × 44 px bao gồm cả đệm.

---

## Cập nhật menu sau này

Các chỉnh sửa trong trình chỉnh sửa sẽ áp dụng khi tải trang front-end tiếp theo — không cần xóa bộ nhớ cache WordPress.

---

## Liên quan

- [WordPress / WooCommerce — tổng quan]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Xuất bản các menu của bạn trên WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Menu Lưới Responsive]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
