---
description: Các câu hỏi thường gặp về plugin Navi+ AI Menu Builder WordPress — giá cả, hiệu suất, WooCommerce, multisite, trình xây dựng trang, bộ nhớ đệm, quyền riêng tư và gỡ cài đặt.
lang: vi
layout: default
permalink: /vi/docs/integrations/wordpress-woocommerce/faq/
title: Navi+ AI Menu Builder FAQ
---
# Navi+ AI Menu Builder FAQ

<details>
<summary>Plugin có miễn phí không?</summary>
<p>Có. Plugin này miễn phí trên WordPress.org. Đăng ký Navi+ của bạn (Starter / Business / Elite) là điều xác định loại menu và hạn ngạch nào có sẵn. Xem <a href="{{ site.baseurl }}/docs/frequently-asked-questions/navi-plans-starter-business-and-elite/">Kế hoạch &amp; Giá cả</a>.</p>
</details>

<details>
<summary>Tôi có cần tài khoản Navi+ trước khi cài đặt không?</summary>
<p>Không. Khi bạn lưu menu đầu tiên của mình trong <strong>Giao diện → Naviplus Menu Builder</strong>, plugin tự động kết nối trang của bạn với dịch vụ Navi+ — không cần đăng ký riêng, không cần mã để dán.</p>
</details>

<details>
<summary>Plugin có làm chậm trang của tôi không?</summary>
<p>Không có tác động đo được. Plugin chỉ thêm một <code>&lt;script async&gt;</code> tag trong <code>&lt;head&gt;</code> để tải runtime Navi+ (~4&nbsp;KB) từ Cloudflare/BunnyCDN. Runtime hoàn toàn bất đồng bộ và không chặn việc hiển thị trang. Tải lần đầu điển hình mất 100–200&nbsp;ms; các lần tải sau là 0&nbsp;ms nhờ vào bộ nhớ đệm HTTP.</p>
</details>

<details>
<summary>Nó có hoạt động với WooCommerce không?</summary>
<p>Có. Các trang WooCommerce là các trang WordPress tiêu chuẩn, vì vậy menu hiển thị trên các trang cửa hàng, sản phẩm, giỏ hàng và thanh toán mà không cần cấu hình thêm. Sử dụng quy tắc hiển thị trong trình chỉnh sửa (URL chứa <code>/cart</code>, <code>/checkout</code>, v.v.) để kiểm soát nơi menu xuất hiện.</p>
</details>

<details>
<summary>Nó có hoạt động trên WordPress Multisite không?</summary>
<p>Có. Kích hoạt plugin cho từng trang (Cũng hỗ trợ Kích hoạt Mạng) và cấu hình menu của từng trang từ <strong>Giao diện → Naviplus Menu Builder</strong> của nó. Mỗi trang tự động kết nối với Navi+ độc lập khi menu đầu tiên của nó được lưu.</p>
</details>

<details>
<summary>Nó có xung đột với giao diện hoặc trình xây dựng trang của tôi (Elementor, Divi, Bricks, Oxygen) không?</summary>
<p>Không có xung đột nào được biết đến. Menu được hiển thị vào các container riêng và sử dụng các kiểu dáng tách biệt. Để chèn một menu phần vào trong trình xây dựng trang, sử dụng một widget <strong>Shortcode</strong> với <code>[naviwp embed_id="SF-..."]</code> — hoặc một widget <strong>HTML</strong> với div nhúng.</p>
</details>

<details>
<summary>Tôi có thể sử dụng plugin và nhúng script chung cùng một lúc không?</summary>
<p>Không — chọn một cái. Plugin đã tiêm runtime Navi+, vì vậy một tag script thủ công sẽ tải nó hai lần. Nếu bạn đã nhúng script trước đó trong giao diện của mình hoặc thông qua một bộ tiêm tiêu đề, hãy xóa đoạn mã đó trước khi kích hoạt plugin.</p>
</details>

<details>
<summary>Tôi đã cập nhật một menu nhưng không thấy thay đổi trên trang của mình.</summary>
<p>Menu được lấy tại runtime, vì vậy không cần xóa bộ nhớ đệm WordPress. Nếu thay đổi vẫn không xuất hiện, hãy thực hiện tải lại cứng (Cmd/Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;R) để bỏ qua bộ nhớ đệm của trình duyệt. Đối với menu dính, cũng xác nhận rằng menu được đặt thành <strong>Đã xuất bản</strong> (không phải nháp) và rằng các quy tắc hiển thị của nó khớp với trang.</p>
</details>

<details>
<summary>Làm thế nào để tôi tạm thời ẩn tất cả các menu Navi+?</summary>
<p>Hai tùy chọn:</p>
<ul>
<li><strong>Toàn bộ trang:</strong> tắt công tắc "Tiêm toàn bộ trang" trong quản trị plugin — runtime ngừng tải ngoại trừ trên các trang có shortcode/block <code>[naviwp]</code>.</li>
<li><strong>Cho từng menu:</strong> chuyển menu sang <strong>Nháp</strong> trong trình chỉnh sửa.</li>
</ul>
</details>

<details>
<summary>Làm thế nào để tôi gỡ cài đặt plugin?</summary>
<p>Vô hiệu hóa và xóa nó từ <strong>Plugin → Các plugin đã cài đặt</strong>. Plugin chỉ lưu trữ định danh trang và một vài tùy chọn trong <code>wp_options</code>; gỡ cài đặt sẽ tự động xóa chúng. Các menu của bạn trên dịch vụ Navi+ được bảo tồn — nếu bạn cài đặt lại sau, bạn có thể tiếp tục sử dụng cùng một ID nhúng.</p>
</details>

<h2 id="privacy">Quyền riêng tư &amp; dịch vụ bên ngoài</h2>

<p>Plugin kết nối với dịch vụ Navi+ AI Menu Builder để tạo và hiển thị menu. Dữ liệu trao đổi có thể bao gồm (nhưng không giới hạn): tên miền <strong>trang của bạn</strong>, <strong>cấu hình menu của bạn</strong>, và dữ liệu sử dụng tối thiểu cần thiết để hiển thị menu.</p>

<ul>
<li>Chính sách quyền riêng tư: <a href="https://naviplus.io/privacy">https://naviplus.io/privacy</a></li>
<li>Trình tải script: <code>https://live.naviplus.app/start.js</code></li>
</ul>

<details>
<summary>Tôi báo cáo lỗi hoặc yêu cầu tính năng ở đâu?</summary>
<p>Sử dụng diễn đàn hỗ trợ chính thức: <a href="https://wordpress.org/support/plugin/naviplus-menu-builder/">https://wordpress.org/support/plugin/naviplus-menu-builder/</a>. Đối với các câu hỏi về tài khoản hoặc thanh toán, hãy gửi email đến <a href="mailto:support@naviplus.io">support@naviplus.io</a>.</p>
</details>
