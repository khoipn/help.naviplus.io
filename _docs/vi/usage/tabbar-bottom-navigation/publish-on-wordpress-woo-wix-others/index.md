---
description: 'Nếu bạn triển khai trang web của mình trên Shopify, vui lòng cài đặt ứng dụng Shopify chuyên dụng tại đây: <https://apps.shopify.com/pronavi-navigation-design> - Nó được tối ưu hóa ...'
lang: vi
layout: default
permalink: /vi/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/
title: Xuất bản trên WordPress / Woo / Wix / Khác
---
# Xuất bản trên WordPress / Woo / Wix / Khác

Nếu bạn triển khai trang web của mình trên Shopify, vui lòng cài đặt ứng dụng [Shopify](https://www.shopify.com/ "Shopify") chuyên dụng tại đây: <https://apps.shopify.com/pronavi-navigation-design> - Nó được tối ưu hóa cho nền tảng này, cho phép triển khai ổn định với nhiều tùy chọn tích hợp hữu ích.

Nếu bạn triển khai trang web của mình trên các nền tảng khác (chẳng hạn như [WordPress](https://wordpress.org/ "WordPress"), [WooCommerce](https://woocommerce.com/ "WooCommerce"), [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), và các trang web tùy chỉnh được xây dựng bằng PHP, Node.js, hoặc HTML thuần..), bạn có các phương pháp triển khai sau:

### 1. Nhúng Navi+ vào Trang Web của Bạn

Phương pháp triển khai này phù hợp cho tất cả các loại menu mà Navi+ hiện hỗ trợ, bao gồm: Tabbar, Mega menu, Slide menu, FAB, và Grid menu. Mã này chỉ cần được sử dụng một lần cho tất cả các menu.

```html
<!-- Chèn mã này vào <head> của trang web. (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
<!-- Chèn mã này vào <head> của trang web -->
```

### FAQ (Câu hỏi thường gặp)

<details><summary>Token là gì?</summary>
<p>Mỗi tài khoản Navi+ được gán một token duy nhất. Bạn có thể xem và sao chép token này trực tiếp từ tiêu đề ứng dụng. Token được sử dụng để xuất bản menu của bạn một cách an toàn.</p>
</details>

<details><summary>https://live.naviplus.app/start.js là gì?</summary>
<p>Đây là URL cố định của Navi+ chứa logic khởi tạo của ứng dụng. Script này nhẹ (khoảng 4KB), cho phép tải nhanh trên hầu hết các thiết bị và điều kiện mạng. Nó được cung cấp qua Cloudflare và BunnyCDN để đảm bảo hiệu suất toàn cầu ổn định và tương thích đáng tin cậy với các trình duyệt hiện đại.</p>
<p>Sử dụng phương pháp tải không đồng bộ cũng có nghĩa là nó không ảnh hưởng đến quá trình tải trang web.</p>
</details>

<details><summary>Mã nhúng này có làm chậm trang web của tôi không?</summary>
<p>Mã dưới đây cực kỳ nhẹ và có thể được chèn vào trang web của bạn mà không ảnh hưởng đến tốc độ (chỉ mất khoảng 100-200ms cho lần tải đầu tiên và 0ms cho các lần tải tiếp theo), trải nghiệm của khách hàng, hoặc điểm SEO</p>
</details>

<details><summary>Nơi tốt nhất để chèn đoạn mã này là đâu?</summary>
<p>Trong phần đầu (hoặc càng sớm càng tốt). Tại sao? Trang web sẽ tải tài nguyên theo thứ tự để hiển thị giao diện. Đặt Navi+ sớm nhất trong mã HTML sẽ giúp menu của bạn sẵn sàng hiển thị càng sớm càng tốt bằng cách chờ cho đến khi các điều kiện được đáp ứng, sau đó menu sẽ ngay lập tức xuất hiện. Điều này cải thiện trải nghiệm người dùng.</p>
</details>

<details><summary>Làm thế nào tôi có thể biết mã này đã được nhúng thành công trên trang web của tôi chưa?</summary>
<p>Có hai cách:</p>
<p><strong>Phương pháp 1 (dành cho mọi người):</strong></p>
<p>Mở trang web của bạn với hậu tố #navidebug-on, ví dụ: <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>. Nếu trang web chuyển sang chế độ Debug, mã nhúng đang hoạt động đúng. Chế độ Debug giúp bạn dễ dàng xác định các bộ chọn CSS. Sử dụng #navidebug-off để tắt nó.</p>
<p><strong>Phương pháp 2 (dành cho các nhà phát triển):</strong></p>
<p>Mở công cụ kiểm tra của trình duyệt, đi đến tab Console, và tìm một thông điệp màu xanh lá cây: “Sử dụng Navi+..”. Thông điệp này cho biết rằng mã đã được nhúng thành công.</p>
</details>

***

### 2. Chèn Menu Navi+ ở Bất kỳ Điểm Nào trên Trang Web của Bạn

Mã dưới đây có thể được sử dụng nhiều lần trên một trang web với thông tin chèn khác nhau (đặc biệt là **Embeded ID**, chẳng hạn như SF-123456789). Khi trang web được hiển thị, menu sẽ được triển khai và hiển thị tại vị trí mà mã được chèn khi các điều kiện được đáp ứng. Loại menu này phù hợp cho: Mega menu, Grid, v.v.

```html
<!-- Chèn mã nơi menu SF-123456789 xuất hiện. (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
<!-- Chèn mã nơi menu SF-123456789 xuất hiện -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">Quan trọng</mark>**:** Mã ở trên sử dụng mã nhúng mẫu <mark style="color:orange;">SF-123456789</mark>. Hãy chắc chắn thay thế nó bằng mã nhúng menu thực tế của bạn.
{% comment %}endhint{% endcomment %}
