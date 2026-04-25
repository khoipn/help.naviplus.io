---
description: Những tính năng mới, cải tiến và sửa lỗi theo từng tháng của Navi+.
lang: vi
layout: default
permalink: /vi/docs/latest-update/
title: Changelog / Release Notes
---
# Changelog / Release Notes

### Tháng 4/2026

#### Menu đa ngôn ngữ — tự động hoạt động, không cần cấu hình thêm

Menu của bạn giờ tự hiển thị đúng ngôn ngữ cho từng khách truy cập. Nếu cửa hàng chạy bằng tiếng Anh, tiếng Pháp và tiếng Việt, Navi+ tự nhận diện ngôn ngữ hiện tại và chuyển đổi nhãn menu ngay lập tức. Tính năng chuyển ngôn ngữ tích hợp trong menu cũng ổn định hơn nhiều.

**Ảnh hưởng đến bạn:** Khách hàng từ các nước khác nhau thấy menu bằng ngôn ngữ của họ — mà bạn không cần tạo nhiều menu riêng cho từng ngôn ngữ.

#### Tab Slide — nhóm các mục menu vào tab

Tùy chọn bố cục mới cho bất kỳ loại menu nào. Thay vì hiển thị tất cả mục trong một danh sách phẳng, bạn có thể nhóm chúng vào các tab ngang. Rất phù hợp để tổ chức navigation dày đặc thành các phần gọn hơn (ví dụ: "Nam / Nữ / Sale" dưới dạng tab trong slide menu).

#### Bộ màu template và color picker được thiết kế lại

Chọn từ các bộ màu có sẵn hoặc tự tạo bộ màu riêng. Áp dụng màu thương hiệu cho toàn bộ menu giờ chỉ mất vài giây thay vì chỉnh từng trường.

#### Bảng cài đặt gộp vào một nơi

Tất cả tùy chọn nâng cao — touch feedback, animation, navigation icons, reusable CSS classes — giờ nằm trong một bảng thống nhất. Dễ tìm và cấu hình hơn nhiều.

#### Cải thiện hỗ trợ WordPress

Nhúng nhanh hơn, ít xung đột hơn với các theme và page builder phổ biến (Elementor, Divi, WPBakery). Nếu bạn dùng WordPress, quá trình cài đặt giờ mượt hơn nhiều.

- Cải tiến tốc độ và trải nghiệm: nhận diện ngôn ngữ nhanh hơn khi tải trang · xem trước màu sắc không cần reload · bảng cài đặt mở trong dưới 100ms

---

### Tháng 3/2026

#### Tiêu đề nhóm có thể vừa link vừa mở rộng

Trước đây, tiêu đề nhóm trong menu chỉ làm được một trong hai: hoặc là link, hoặc là toggle mở các mục con. Giờ nó làm được cả hai cùng lúc. Nhấn để mở rộng, nhấn mũi tên để điều hướng. Hữu ích cho các tiêu đề danh mục vừa cần link đến trang danh mục vừa cần hiển thị sản phẩm con.

#### Sửa lỗi bố cục Grid Menu

Các trường hợp Grid Menu bị tràn hoặc không đều trên màn hình nhỏ đã được khắc phục. Bố cục giờ nhất quán trên mọi kích thước điện thoại.

#### Màu tùy chỉnh cho đường kẻ và divider

Các đường phân cách và vùng highlight khi chạm trong menu giờ có thể đặt thành bất kỳ màu nào. Hữu ích khi cần khớp chính xác với bộ nhận diện thương hiệu.

- Cải tiến tốc độ và trải nghiệm: grid menu render nhanh hơn ~20% khi tải lần đầu · màu divider áp dụng không cần reload menu

---

### Tháng 2/2026

#### Xung đột Z-index — tự động xử lý

Đây là lỗi được yêu cầu sửa nhiều nhất. Menu Navi+ giờ tự phát hiện khi các panel gốc của cửa hàng (giỏ hàng, thanh tìm kiếm, banner cookie) xuất hiện, và tự nhường chỗ để không bị che. Trong hầu hết trường hợp, bạn không cần tự chỉnh z-index nữa.

#### Slide Horizontal — menu trượt ngang

Hướng trượt mới cho menu mobile. Thay vì danh sách từ trên xuống, các panel cấp 2 trượt vào từ bên phải — giống như app iOS. Trải nghiệm tự nhiên hơn nhiều với cây danh mục sản phẩm sâu.

#### Export và Import dạng popup đầy đủ

Giờ bạn có thể sao lưu, di chuyển hoặc nhân bản toàn bộ cấu hình menu trong vài giây — mở popup export, copy JSON, import sang cửa hàng khác. Không cần xây lại từ đầu.

#### Lazy load ảnh

Ảnh trong menu (ảnh sản phẩm, thumbnail danh mục) giờ chỉ tải khi xuất hiện trong tầm nhìn. Trang tải nhanh hơn, đặc biệt với menu có nhiều ảnh.

#### Hỗ trợ emoji trong nhãn menu

Bạn có thể thêm emoji trực tiếp vào nhãn bất kỳ mục menu nào — không cần workaround. ✅

- Cải tiến tốc độ và trải nghiệm: trang không cuộn khi menu đang mở · hiệu suất overlay cải thiện trên Android · dữ liệu menu được cache trong IndexedDB để tải gần như tức thì ở lần sau

---

### Tháng 1/2026

#### Loại menu mới: Slide Horizontal

Loại menu được thiết kế cho cây điều hướng sâu trên mobile. Mỗi cấp trượt từ bên phải, giúp người dùng luôn biết mình đang ở đâu. Nút quay lại và tiêu đề header cập nhật tự động khi điều hướng sâu hơn.

#### Item template — lưu và tái sử dụng cấu trúc menu

Xây dựng một mục menu một lần (với tất cả mục con, icon và cài đặt), lưu làm template, rồi chèn vào bất kỳ menu nào chỉ bằng một click. Tiết kiệm rất nhiều thời gian nếu bạn quản lý menu trên nhiều cửa hàng hoặc thường xuyên lặp lại cấu trúc tương tự.

#### Import / Export hỗ trợ AI

Dán danh sách link, sitemap, hoặc mô tả điều bạn muốn — Navi+ tự tạo cây menu đầy đủ. Bạn cũng có thể export menu dưới dạng JSON, chỉnh sửa bằng AI tool, rồi import lại.

#### Debug mode

Công cụ kiểm tra tích hợp mới, kích hoạt từ dashboard. Hiển thị giá trị z-index, ranh giới menu và selector trực tiếp trên trang live — hữu ích khi có gì đó trông không ổn và bạn cần chẩn đoán nhanh.

- Cải tiến tốc độ và trải nghiệm: hạ tầng CDN nâng cấp lên mạng edge Cloudflare R2 (nhanh hơn ở Đông Nam Á và châu Đại Dương) · thêm CDN failover thứ hai · LCP cải thiện — assets Navi+ giờ tải trong cửa sổ render quan trọng của trình duyệt

---

### Tháng 12/2025

#### Navi+ chạy được trên mọi nền tảng

Trước đây chỉ hỗ trợ Shopify. Giờ Navi+ hoạt động trên WordPress, WooCommerce, Wix, Webflow, Squarespace — và bất kỳ website nào chấp nhận thẻ `<script>`. Cùng dashboard, cùng loại menu, cùng một dòng embed.

**Ảnh hưởng đến bạn:** Một công cụ cho tất cả các site. Nếu bạn quản lý cửa hàng trên nhiều nền tảng, bạn có thể xây dựng và cập nhật menu từ một nơi duy nhất tại [dash.naviplus.app](https://dash.naviplus.app/).

#### Dashboard có thêm nhiều ngôn ngữ

Giao diện dashboard Navi+ giờ được dịch sang nhiều ngôn ngữ. Sẽ tiếp tục bổ sung thêm theo thời gian.

- Cải tiến tốc độ và trải nghiệm: Remix Icons tải từ CDN thay vì đóng gói trong bundle — giảm kích thước script · sửa lỗi render trên Safari iOS — menu mở và chạy animation mượt trên mọi dòng iPhone

---

### Tháng 11/2025

#### Sửa lỗi: menu nhấp nháy ở đầu và cuối trang

Tính năng auto-hide / auto-show bị kích hoạt sai khi người dùng cuộn đến sát đầu hoặc cuối trang trên một số thiết bị — khiến menu xuất hiện và biến mất liên tục. Đã thêm ngưỡng an toàn để tránh hiện tượng này, giúp hành vi hiển thị/ẩn trông tự nhiên và có chủ đích hơn.

---

### Tháng 10/2025

#### CDN chuyển sang Cloudflare

Toàn bộ assets Navi+ giờ chạy trên mạng edge toàn cầu của Cloudflare. Thời gian tải menu trung bình giảm xuống còn ~52ms. Với người dùng gói Elite, thêm failover thứ hai qua BunnyCDN — nghĩa là nếu một CDN gặp sự cố, menu của bạn vẫn tải bình thường. SLA nâng cấp lên 99.99%.
