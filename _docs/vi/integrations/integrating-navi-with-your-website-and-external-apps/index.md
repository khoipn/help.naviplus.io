---
description: Tại đây bạn sẽ tìm thấy hướng dẫn về cách kết nối Navi+ với các ứng dụng khác (như công cụ Chat, Loyalty, v.v.). Bạn có thể thêm chúng vào các mục menu, mở ứng dụng trực tiếp từ Nav...
lang: vi
layout: default
permalink: /vi/docs/integrations/integrating-navi-with-your-website-and-external-apps/
title: Tích hợp Navi+ với trang web và ứng dụng bên ngoài của bạn
---
# Tích hợp Navi+ với trang web và ứng dụng bên ngoài của bạn

Tại đây bạn sẽ tìm thấy hướng dẫn về cách kết nối Navi+ với các ứng dụng khác (như công cụ Chat, Loyalty, v.v.). Bạn có thể thêm chúng vào các mục menu, mở ứng dụng trực tiếp từ Navi+, và đảm bảo mọi thứ hoạt động cùng nhau một cách trơn tru mà không bị chồng chéo trên trang của bạn.

### 1. Tích hợp các ứng dụng dính khác vào một mục menu Navi+ duy nhất

Navi+ hợp nhất nhiều ứng dụng (Chat Box, Loyalty, Social Proof, Promo bars, v.v.) thành các mục menu, giữ cho trang web của bạn sạch sẽ và ngăn chặn sự chồng chéo—đặc biệt có giá trị trên các thiết bị di động với không gian màn hình hạn chế.\nĐể đạt được điều này, hãy làm theo 2 bước sau:

• Bước 1: Ẩn biểu tượng ứng dụng dính bằng CSS. Xem chi tiết tại đây\n• Bước 2: Sử dụng JavaScript cho các mục menu để khi nhấp vào chúng sẽ mở các bảng ứng dụng tương ứng.

Xem ví dụ về tích hợp chat Tidi. Đây là một thiết lập tương đối nâng cao, vì vậy vui lòng liên hệ với bộ phận hỗ trợ của Navi+ để được trợ giúp.

### 2. Kích hoạt JavaScript – tương tác với các ứng dụng bên ngoài

Navi+ cho phép chạy các hàm JavaScript từ các mục menu khi người dùng nhấp vào (javascript:Function). Xem ví dụ về tích hợp chat Tidi để hiểu cách sử dụng hai hàm JavaScript để tích hợp chat Tidio như một mục menu Navi+:

1. Ẩn biểu tượng Tidio: Một hàm toàn cục chờ Tidio hiển thị, sau đó ẩn nó
2. openTidio(): Mở bảng chat của Tidio khi người dùng nhấp vào mục menu "Chat with us"

Navi+ cũng hỗ trợ bạn định nghĩa các lớp và thuộc tính (ngay cả dưới dạng id="menu-item-1") để cho phép tương tác với các ứng dụng khác hoặc mã JavaScript. Bạn có thể sử dụng các hàm JavaScript để truy cập trực tiếp vào các mục menu thông qua lớp hoặc thuộc tính, ví dụ: để tạo một hướng dẫn đi bộ.

### 3. Tùy chỉnh Giao diện Navi+ với CSS Bên ngoài

Mỗi menu Navi+ được định nghĩa bởi một phần tử div với id="SF-123456789" (id nhúng). Xem cấu trúc HTML/CSS của một menu Navi+ tại đây để viết mã CSS cho việc tùy chỉnh giao diện menu.\nVí dụ, để thay đổi màu của một mục menu cấp 2, bạn có thể viết mã CSS sau:

`#SF-123456789 ul li ul.children li .name { color: red; }`

Navi+ cũng hỗ trợ bạn định nghĩa các lớp và thuộc tính (ngay cả dưới dạng id="menu-item-1") để cho phép tương tác với các ứng dụng khác hoặc mã JavaScript. Bạn có thể định dạng từng mục menu bằng cách sử dụng tên lớp hoặc thuộc tính.

### 4. Giao tiếp Giữa Các Menu Navi+

Từ một mục menu Navi+, bạn có thể gọi để mở một menu Slide Navi+ khác bằng cú pháp: `open:NaviMenu.`\nVới cú pháp này, bạn có thể mở rộng vô hạn các cấp menu bằng cách để các menu slide gọi các menu slide khác.

### 5. Mở một Menu Slide từ bất kỳ đâu trên trang web của bạn

Với các menu slide, ngoài việc mở chúng thông qua các mục menu từ các menu Navi+ khác, bạn cũng có thể kích hoạt một menu slide Navi+ bằng cách gọi hàm JavaScript: `naviman.openNaviMenu()`.\nVí dụ: Tạo một nút nổi bằng HTML và CSS, sau đó gán hành động nhấp của nó để mở một menu Slide Navi+ – bạn sẽ ngay lập tức có một menu trông chuyên nghiệp.

### 6. Mô phỏng hành động của người dùng (nhấp, tập trung, cuộn, v.v.)

Navi+ cung cấp một số hàm (được kích hoạt khi một mục menu được nhấp vào):

* `open:clickTo` để mô phỏng nhấp vào một Bộ chọn CSS HTML. Điều này cực kỳ hữu ích để cho phép menu Navi+ kích hoạt các menu hamburger mặc định, công cụ tìm kiếm, bảng giỏ hàng, menu thả ngôn ngữ... hoặc kích hoạt các công cụ chat từ các ứng dụng khác.
* `open:focusTo` để mô phỏng việc tập trung vào một Bộ chọn CSS HTML. Điều này cực kỳ hữu ích để mô phỏng nhấp vào các công cụ tìm kiếm hoặc các trường đăng ký email
* `scroll:Top`, `scroll:Bottom`, `scroll:OnPage` để cuộn trang web đến khu vực mong muốn. Điều này cực kỳ hữu ích khi bạn muốn cuộn đến một phần mục tiêu trên trang thay vì điều hướng đến một trang khác.

### 7. Để chia sẻ và cải thiện sự tương tác của trang

Navi+ cung cấp một số hàm (được kích hoạt khi một mục menu được nhấp vào):

* `open:ShareMe` để chia sẻ liên kết trang web
* `share:CopyUrl` để sao chép URL hiện tại vào clipboard của thiết bị
* `share:Facebook` để chia sẻ URL hiện tại lên Facebook
* `share:Tweet` để chia sẻ URL hiện tại lên Twitter (X)

### 8. Tích hợp với các ứng dụng thiết bị khác (như Điện thoại)

Navi+ cung cấp một số hàm (được kích hoạt khi một mục menu được nhấp vào):

* `tel:+[Mã quốc gia][Số điện thoại]` để gọi đến số
* `sms:+[Mã quốc gia][Số điện thoại]?body=[Nội dung]` để gửi tin nhắn SMS đến số với nội dung đã thiết lập (tùy chọn)
* `mailto:[Địa chỉ]` để gửi email
* `https://m.me/[Tên của bạn]` để chat với Facebook Messenger của bạn
* `https://wa.me/[Số điện thoại]` để chat với WhatsApp của bạn
* `https://lin.ee/[mã-line]` để chat với Line của bạn
* `https://zalo.me/+[Mã quốc gia][Số điện thoại]` để chat với Zalo của bạn

### 9. Chỉ Dành Cho Shopify

Navi+ cung cấp một số hàm (được kích hoạt khi một mục menu được nhấp vào):

* `open:ChangeLanguage` để thay đổi ngôn ngữ nếu trang web sử dụng Shopify
* Hộp thư Shopify: Ẩn biểu tượng Hộp thư Shopify và tích hợp nó vào menu Navi+ như một mục menu mở bảng chat khi nhấp vào. Xem chi tiết tại đây
* Mở menu hamburger hoặc giỏ hàng, bảng tìm kiếm: Xem chi tiết tại đây

### Không thấy trong danh sách?

Hãy thoải mái gửi cho tôi yêu cầu tích hợp của bạn. Tôi rất vui được giúp đỡ, và điều này cũng hỗ trợ sự phát triển của Navi+.
