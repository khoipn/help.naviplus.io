---
description: Xuất bản thực đơn Navi+ trên WordPress bằng cách sử dụng plugin Navi+ AI Menu Builder — các thực đơn dính sẽ tự động hiển thị trên toàn bộ trang web, trong khi các thực đơn theo phần được đặt thông qua shortcode [naviwp] hoặc khối Gutenberg.
lang: vi
layout: default
permalink: /vi/docs/integrations/wordpress-woocommerce/publish-menus/
title: Xuất bản thực đơn của bạn trên WordPress
---
# Xuất bản thực đơn của bạn trên WordPress

Navi+ có hai chế độ xuất bản — **dính** và **phần** — và plugin WordPress hỗ trợ cả hai. Chế độ áp dụng phụ thuộc vào loại thực đơn.

| Loại thực đơn | Chế độ | Nơi nó xuất hiện |
| --- | --- | --- |
| Tab Bar | Dính | Gắn vào viewport, trên toàn bộ trang web |
| FAB | Dính | Nút nổi, trên toàn bộ trang web |
| Slide Menu | Dính / ngữ cảnh | Kích hoạt bằng cách chạm vào bất kỳ phần tử nào |
| Mega Menu (Desktop) | Phần | Tại vị trí bạn nhúng nó |
| Mega Menu (Mobile) | Phần | Tại vị trí bạn nhúng nó |
| Grid Menu | Phần | Tại vị trí bạn nhúng nó |

Xem [Tổng quan xuất bản]({{ site.baseurl }}/docs/publish/publish-overview/) để so sánh đầy đủ giữa dính và phần.

---

## Thực đơn dính — Tab Bar, FAB, Slide

Với plugin đã được cài đặt và thực đơn đầu tiên của bạn đã được lưu, các thực đơn dính được đánh dấu **Đã xuất bản** trong trình chỉnh sửa sẽ tự động hiển thị trên mọi trang của trang web của bạn.

Bạn không cần phải chèn bất cứ điều gì. Các quy tắc hiển thị (thiết bị, mẫu URL, trạng thái đăng nhập) được đánh giá bởi runtime của Navi+ trong trình duyệt.

### Chuyển đổi nhúng trên toàn trang

Quản trị viên plugin bao gồm một công tắc cho việc nhúng trên toàn trang:

- **Bật (mặc định):** runtime được chèn vào `<head>` của mọi trang; các thực đơn dính hiển thị trên toàn bộ trang web.
- **Tắt:** runtime chỉ tải trên các trang bao gồm shortcode hoặc khối `[naviwp]`. Sử dụng điều này nếu bạn muốn các thực đơn xuất hiện trên một tập hợp nhỏ các trang (ví dụ: các trang đích chỉ dành cho di động).

Nếu một thực đơn dính không xuất hiện, hãy kiểm tra:

- Thực đơn đã được **Đã xuất bản** trong trình chỉnh sửa (không phải bản nháp).
- Các quy tắc hiển thị khớp với trang bạn đang thử nghiệm.
- Runtime đã được tải — xem [phần xác minh]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Thực đơn theo phần — Mega Menu, Grid

Các thực đơn theo phần cần được đặt ở một vị trí cụ thể trong một trang. Plugin cung cấp ba cách.

### Phương pháp 1 — Shortcode (được khuyến nghị)

Trong bất kỳ bài viết, trang, hoặc widget nhận biết shortcode:

```text
[naviwp embed_id="SF-123456789"]
```

Thay thế `SF-123456789` bằng **Embed ID** của thực đơn của bạn (hiển thị trong trình chỉnh sửa trên bảng xuất bản của thực đơn).

### Phương pháp 2 — Khối Gutenberg

Trong trình chỉnh sửa khối:

1. Nhấp vào **+** để chèn một khối mới.
2. Tìm kiếm **Naviplus Menu Builder**.
3. Chèn khối và dán **Embed ID** của thực đơn vào thanh bên của khối.

Khối sẽ hiển thị một placeholder trống trong trình chỉnh sửa và được thay thế bằng thực đơn trực tiếp ở phía trước. Bạn cũng có thể thả một khối **Shortcode** và dán `[naviwp embed_id="..."]` — điều đó hoạt động giống nhau.

### Phương pháp 3 — Bên trong một khối Đoạn văn

Plugin nhận diện các shortcode `[naviwp ...]` được dán trực tiếp vào một khối Đoạn văn; bạn không cần phải chuyển sang một khối Shortcode trước.

### Phương pháp 4 — Trình xây dựng trang (Elementor, Divi, Bricks, Oxygen)

Sử dụng widget **Shortcode** của trình xây dựng và dán `[naviwp embed_id="..."]`. Nếu một trình xây dựng không có widget Shortcode, một widget **HTML** với div nhúng cũng hoạt động:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

Plugin đã tải runtime của Navi+, vì vậy thực đơn sẽ hiển thị bên trong container đó.

---

## Một mã thông báo, nhiều thực đơn

Plugin tải runtime một lần cho mỗi trang và lấy mọi thực đơn — dính hoặc phần — từ cùng một dịch vụ Navi+. Để ngừng xuất bản một thực đơn, chuyển nó thành **Bản nháp** trong trình chỉnh sửa; không cần thay đổi WordPress.

---

## Các plugin bộ nhớ đệm (WP Rocket, W3 Total Cache, LiteSpeed Cache)

Runtime của Navi+ được phục vụ từ một CDN và thân thiện với bộ nhớ đệm. Bạn **không** cần phải loại trừ nó khỏi bộ nhớ đệm trang. Sau khi cập nhật thực đơn trong trình chỉnh sửa, các thay đổi sẽ xuất hiện trên lần tải trang tiếp theo — không cần xóa bộ nhớ đệm WordPress, vì các thực đơn được lấy tại runtime bởi trình duyệt, không được nướng vào HTML.

Nếu bạn thấy đầu ra cũ, thường là bộ nhớ đệm của trình duyệt. Một tải lại cứng (Cmd/Ctrl + Shift + R) sẽ xóa nó.
