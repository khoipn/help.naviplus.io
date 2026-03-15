---
description: Đây là vấn đề về khoảng cách dưới cùng dưới Bottom Bar khi một trang web Shopify sử dụng Navi+ được mở trong Google App trên iPhone.
lang: vi
layout: default
permalink: /vi/docs/limitation/shopify-bottom-bar-issue-on-google-app-iphone/
title: Vấn đề Bottom Bar của Shopify trên Google App (iPhone)
---
# Vấn đề Bottom Bar của Shopify trên Google App (iPhone)

Đây là vấn đề về khoảng cách dưới cùng dưới Bottom Bar khi một trang web Shopify sử dụng **Navi+** được mở trong Google App trên iPhone.

Khi truy cập một trang web Shopify sử dụng **Navi+** (hoặc bất kỳ ứng dụng nào có menu dưới cùng cố định, nút nổi, v.v.), người dùng mở trang web **trong Google App trên iPhone** có thể đôi khi thấy một khoảng trắng bất thường xuất hiện ở dưới cùng của màn hình.

Vấn đề này chỉ xảy ra trong Google App và **không phải do Navi+** gây ra. Dưới đây là một giải thích rõ ràng và đơn giản.

***

### 1. Vấn đề xảy ra ở đâu?

Vấn đề chỉ xảy ra khi:

* Trang web đang chạy trên **Shopify**
* Có một **Bottom Bar** (Navi+ hoặc bất kỳ ứng dụng nào khác), hoặc một **Floating Action Button (FAB)** như widget chat, nút trung thành, v.v.
* Người dùng mở trang web **qua Google App trên iPhone** (thường bằng cách tìm kiếm và nhấn vào trang web)

Vấn đề **không** xảy ra khi mở trang web bằng:

* Safari (trình duyệt mặc định của iPhone)
* Chrome
* Facebook Browser
* TikTok Browser
* …

Điều này xác nhận rằng vấn đề đến từ Google App trên iOS.

***

### 2. Tại sao các trang web Shopify sử dụng Navi+ có khả năng gặp phải vấn đề này nhiều hơn?

Google App sử dụng một cách đặc biệt để hiển thị các trang web (WebView của Apple). Công cụ hiển thị này có một vấn đề lâu dài khi tính toán chiều cao thực tế của màn hình trong các trang web có:

* Một Bottom Bar cố định
* HTML hoặc UI được tạo động bởi JavaScript
* Bố cục phức tạp như Shopify (nhiều lớp chứa & các phần liên tục thay đổi)

Khi những điều kiện này xảy ra, Google App có thể tính toán sai chiều cao viewport thực tế và tạo ra một **padding dưới cùng giả**.

➡️ Đây là lý do tại sao vấn đề xuất hiện thường xuyên hơn trên các trang web Shopify sử dụng Navi+ hoặc các ứng dụng bottom bar/FAB khác.

***

### 3. Đây có phải là vấn đề của Navi+ không?

Không.
Đây là một lỗi vốn có của **Google App trên iPhone**, và nó đã tồn tại nhiều năm.

Ngay cả khi Navi+ bị vô hiệu hóa, các ứng dụng Shopify khác hiển thị bottom bar hoặc FAB vẫn gặp phải vấn đề tương tự trong Google App.

***

### 4. Bằng chứng cho thấy vấn đề này không thể được khắc phục hoàn toàn

* Nhiều ứng dụng Shopify bao gồm một bottom bar hoặc FAB gặp phải vấn đề chính xác giống nhau.
* Ngay cả một số tính năng tích hợp sẵn của Shopify cũng cho thấy hành vi tương tự trong Google App.
* Đây là một vấn đề nổi tiếng trong cộng đồng phát triển, nhưng Google App chưa giải quyết.
* Vấn đề biến mất ngay khi người dùng **nhấn vào bất kỳ đâu trên màn hình** → Google App buộc phải tái hiển thị và tính toán lại chiều cao chính xác.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIJeUOw7iYKzsFXSLVQK3%2FEx-1.1.2.png?alt=media&#x26;token=c2c351d9-10fd-47ed-bbef-1e436ab3ac4f" alt=""><figcaption></figcaption></figure>

***

### 5. Giải pháp hiện tại của Navi+

Navi+ đã nghiên cứu và thử nghiệm nhiều phương pháp, nhưng vì vấn đề xuất phát từ chính Google App, nó không thể được giải quyết hoàn toàn.

Tuy nhiên, Navi+ đã thực hiện **biện pháp giảm thiểu tốt nhất có thể**:

#### ✔️ Vấn đề chỉ xuất hiện lần đầu tiên

Nó thường xảy ra khi người dùng:

* mở trang web trong Google App
* và điều hướng hoặc nhấn vào bất kỳ đâu trên trang

Khi điều này xảy ra, Navi+ kích hoạt một cơ chế sửa chữa một lần. Ngay khi người dùng:

* nhẹ nhàng nhấn vào màn hình
* cuộn một chút
* hoặc tương tác theo bất kỳ cách nhỏ nào

#### ✔️ Vấn đề tự động biến mất

Google App sẽ tái hiển thị toàn bộ bố cục, và từ thời điểm đó:

* Bottom Bar hiển thị ở vị trí chính xác
* Vấn đề sẽ không xuất hiện lại cho đến khi Google App được đóng và mở lại

#### ✔️ Biện pháp này cũng giảm thiểu các lỗi tương tự từ các ứng dụng khác có vị trí dưới cùng khi sử dụng cùng với Navi+

***

### 6. Giải thích nhanh cho người dùng cuối

Thông điệp này được thiết kế cho người dùng không kỹ thuật:

> “Google App trên iPhone có một lỗi hiển thị khi mở các trang web Shopify sử dụng Bottom Bar như Navi+. Vấn đề này đến từ Google App và ảnh hưởng đến nhiều ứng dụng, không chỉ Navi+. Nó chỉ xảy ra một lần và sẽ biến mất sau bất kỳ nhấn hoặc cuộn nào trên màn hình. Nếu bạn sử dụng Safari hoặc Chrome thay thế, vấn đề sẽ không xảy ra.”

***

### 7. Kết luận

❌ Không phải là vấn đề của Navi+  
❌ Không phải là vấn đề của Shopify  

✔️ Một lỗi hiển thị trong Google App trên iPhone  
✔️ Navi+ giảm thiểu vấn đề nên chỉ xuất hiện một lần và sau đó biến mất  
✔️ Safari/Chrome hoàn toàn không bị ảnh hưởng
