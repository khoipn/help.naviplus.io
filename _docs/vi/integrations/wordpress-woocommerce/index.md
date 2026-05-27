---
description: Navi+ AI Menu Builder là plugin WordPress chính thức cho Navi+. Cài đặt nó, xây dựng menu trong WordPress, và xuất bản chúng trên toàn bộ trang web hoặc qua shortcode [naviwp] — không cần chỉnh sửa mã, không cần chèn tiêu đề.
lang: vi
layout: default
permalink: /vi/docs/integrations/wordpress-woocommerce/
title: WordPress / WooCommerce — Navi+ AI Menu Builder
---
# WordPress / WooCommerce — Navi+ AI Menu Builder

Nếu trang web của bạn chạy trên **WordPress** hoặc **WooCommerce**, cách được khuyến nghị để xuất bản menu Navi+ là plugin chính thức **Navi+ AI Menu Builder** trên WordPress.org. Tên đầy đủ trong danh sách WordPress.org là **Naviplus Menu Builder**.

> Trang plugin: <https://wordpress.org/plugins/naviplus-menu-builder/>
> Diễn đàn hỗ trợ: <https://wordpress.org/support/plugin/naviplus-menu-builder/>

Trang này là điểm khởi đầu: cài đặt plugin, kích hoạt menu trên toàn trang hoặc nhúng menu theo vị trí, và chọn các bố cục hoạt động tốt trên di động (Tab Bar, Slide / hamburger, FAB).

---

## 1. Yêu cầu

- **WordPress 5.8** hoặc mới hơn (sử dụng phiên bản WordPress mới nhất mà nhà cung cấp của bạn hỗ trợ là được khuyến nghị).
- Quyền truy cập quản trị — cần thiết để cài đặt plugin và chỉnh sửa **Giao diện**.
- Kết nối internet ra ngoài — menu được thiết kế trên dịch vụ Navi+ và được hiển thị thông qua một script được tải từ `https://live.naviplus.app/start.js`. Xem phần [8. Dịch vụ bên ngoài & quyền riêng tư](#8-external-services--privacy).

---

## 2. Cài đặt plugin

Ba phương pháp cài đặt được chi tiết trên trang cài đặt riêng: **[Cài đặt plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/)** — tìm kiếm quản trị (được khuyến nghị), tải lên ZIP, hoặc FTP / trình quản lý tệp.

Sau khi kích hoạt, plugin sẽ xuất hiện dưới **Giao diện → Naviplus Menu Builder** trong thanh bên quản trị.

---

## 3. Sau khi kích hoạt

1. Đi đến **Giao diện → Naviplus Menu Builder**.
2. Tạo menu đầu tiên của bạn theo quy trình trên màn hình. Plugin **tự động kết nối** trang web của bạn với Navi+ khi lưu lần đầu — bạn **không** cần tạo tài khoản Navi+ trước đó.
3. Thiết kế bố cục trong **Navi+ AI Menu Builder visual editor**, mở từ bảng điều khiển WordPress.

Cấu trúc và kiểu dáng menu sống trên **dịch vụ Navi+**; WordPress chỉ lưu một **định danh trang web** cho phép Navi+ nhận diện cài đặt của bạn — đây **không** phải là mật khẩu WordPress của bạn và không phải là mã mà bạn cần quản lý.

Hướng dẫn đầy đủ: **[Tạo menu đầu tiên của bạn]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.

---

## 4. Chọn bố cục cho khách truy cập di động

Navi+ hỗ trợ nhiều loại menu. Đối với các trang web ưu tiên di động, những loại này thường hoạt động tốt nhất:

| Bố cục | Khi nào sử dụng |
| --- | --- |
| **Tab Bar** | Truy cập nhanh vào 3–5 điểm đến chính, được neo gần đáy của viewport (hoặc bất cứ nơi nào bạn đặt nó trong trình chỉnh sửa). |
| **Slide Menu (hamburger)** | Nhiều mục hoặc danh mục sâu — tiết kiệm không gian trên màn hình nhỏ. |
| **Mega Menu** | Menu nội dung phong phú — tuyệt vời trên máy tính để bàn; trên di động, kiểm tra lại các mục chạm và hành vi cuộn trong trình chỉnh sửa. |
| **Grid Menu** | Lối tắt danh mục và trang trung tâm. |
| **FAB (nút nổi)** | Hành động nhanh (hỗ trợ, liên hệ) không nên chiếm không gian tiêu đề. |

Sau khi điều chỉnh bố cục, **luôn kiểm tra trên một thiết bị thực** — hoặc ít nhất là chế độ phản hồi của trình duyệt.

Đối với hướng dẫn WordPress cụ thể theo loại menu:

- **[Tab Bar — Xuất bản trên WordPress]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/)**
- **[Mega Menu (Desktop) — Xuất bản trên WordPress]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/)**
- **[Mega Menu (Mobile) — Xuất bản trên WordPress]({{ site.baseurl }}/docs/usage/mega-menu-mobile/publish-on-wordpress/)**
- **[Slide Menu — Xuất bản trên WordPress]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/publish-on-wordpress/)**
- **[FAB — Xuất bản trên WordPress]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/)**
- **[Grid Menu — Xuất bản trên WordPress]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress/)**

Để so sánh đầy đủ, xem **[Tổng quan: Chọn menu phù hợp]({{ site.baseurl }}/docs/usage/explore-common-menus/)**.

---

## 5. Hiển thị menu trên toàn bộ trang web

- Trong quản trị plugin, bạn có thể **kích hoạt nhúng toàn trang** (nhúng toàn cầu). Khi bật, runtime sẽ được chèn vào mọi trang và các menu cố định (Tab Bar, FAB, Slide) sẽ tự động hiển thị trên toàn bộ trang web.
- Nếu bạn chỉ muốn menu trên một vài trang (ví dụ: trang đích chỉ dành cho di động), **tắt nhúng toàn trang** và sử dụng shortcode (phần 6).

Nhãn và vị trí chính xác của công tắc có thể thay đổi theo phiên bản plugin — hãy xem trên màn hình cài đặt của plugin dưới **Giao diện → Naviplus Menu Builder**.

---

## 6. Nhúng một menu vào một bài viết, trang, hoặc widget (shortcode)

Sử dụng shortcode:

```text
[naviwp embed_id="YOUR-EMBED-ID"]
```

Thay thế `YOUR-EMBED-ID` bằng **Embed ID** của menu của bạn (hiển thị trong trình chỉnh sửa trên bảng xuất bản menu — trông giống như `SF-123456789`).

**Gutenberg (trình chỉnh sửa khối):**

- Chèn một khối **Naviplus Menu Builder** và dán **Embed ID** của bạn vào thanh bên khối, **hoặc**
- Thả một khối **Shortcode** chung với `[naviwp embed_id="..."]`, **hoặc**
- Dán `[naviwp embed_id="..."]` trực tiếp vào một khối **Đoạn văn** — plugin sẽ nhận diện nó.

**Elementor / Divi / Bricks / các trình tạo khác:**

- Sử dụng widget **Shortcode** của trình tạo và dán `[naviwp embed_id="..."]`.

Chi tiết hơn và tất cả ba phương pháp Gutenberg: **[Xuất bản menu của bạn]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)**.

---

## 7. Vô hiệu hóa hoặc ẩn tạm thời menu

- **Vô hiệu hóa plugin** → runtime ngừng tải; không có menu Navi+ nào hiển thị ở bất kỳ đâu trên trang web của bạn.
- **Tắt nhúng toàn trang** trong quản trị plugin → menu chỉ hiển thị trên các trang có chứa shortcode hoặc khối `[naviwp]`.
- **Chuyển một menu thành Bản nháp** trong trình chỉnh sửa → menu cụ thể đó không còn được xuất bản, ngay cả khi runtime đã được tải.
- **Xóa một shortcode** khỏi một trang hoặc widget → menu biến mất tại vị trí đó mà thôi.

Các menu của bạn trên dịch vụ Navi+ được bảo tồn qua tất cả những điều này. Cài đặt lại hoặc kích hoạt lại plugin và sử dụng lại các embed ID giống nhau sẽ mang chúng trở lại mà không cần xây dựng lại.

---

## 8. Dịch vụ bên ngoài & quyền riêng tư

Plugin kết nối với dịch vụ Navi+ AI Menu Builder để tạo và **hiển thị** menu của bạn. Dữ liệu trao đổi có thể bao gồm (không giới hạn): **tên miền trang web** của bạn, **cấu hình menu** của bạn, và dữ liệu sử dụng tối thiểu cần thiết cho việc hiển thị.

- Chính sách quyền riêng tư: <https://naviplus.io/privacy>
- Trình tải script: `https://live.naviplus.app/start.js`

Nếu bạn hoạt động dưới một khung quyền riêng tư yêu cầu tiết lộ các dịch vụ bên thứ ba (ví dụ: GDPR), hãy liệt kê **Navi+** và URL trình tải script trong thông báo quyền riêng tư của trang web của bạn.

---

## 9. Liên kết hữu ích

| Tài nguyên | URL |
| --- | --- |
| Trang plugin WordPress.org | <https://wordpress.org/plugins/naviplus-menu-builder/> |
| Diễn đàn hỗ trợ WordPress.org | <https://wordpress.org/support/plugin/naviplus-menu-builder/> |
| Trang chủ Naviplus | <https://naviplus.io> |
| Chính sách quyền riêng tư | <https://naviplus.io/privacy> |
| Câu hỏi thường gặp về plugin (trang này) | [Navi+ AI Menu Builder FAQ]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/) |

---

## 10. Tóm tắt nhanh

1. **Cài đặt & kích hoạt** từ WordPress.org hoặc tải lên ZIP.
2. Mở **Giao diện → Naviplus Menu Builder** → tạo menu của bạn và thiết kế nó trong trình chỉnh sửa Navi+.
3. Chọn một bố cục phù hợp cho di động: **Tab Bar** / **hamburger** / **FAB**.
4. Chọn hiển thị **toàn trang** hoặc `[naviwp embed_id="..."]` cho các trang cụ thể.
5. **Kiểm tra trên một thiết bị thực** trước khi đưa vào hoạt động.

*Trang này có thể được cập nhật khi các phiên bản plugin mới được phát hành; phiên bản chính thức và nhật ký thay đổi sống trên [trang plugin WordPress.org](https://wordpress.org/plugins/naviplus-menu-builder/).
