---
description: Đây là một vấn đề phổ biến nhưng rất dễ xử lý khi sử dụng Navi+. Trang web của bạn có thể có nhiều phần tử nổi—xem các ví dụ bên dưới để nhận diện chúng.&
lang: vi
layout: default
permalink: /vi/docs/usage/general/z-index/
title: Z-index
---
# Z-index

Đây là một vấn đề phổ biến nhưng rất dễ xử lý khi sử dụng Navi+. Trang web của bạn có thể có nhiều phần tử nổi—xem các ví dụ bên dưới để nhận diện chúng.&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FL6naWQmaqD1bKTtzaALP%2FHelp.MenuTree.1.3.1b.png?alt=media&#x26;token=0e7dad3b-0395-4f66-9589-2562175e8800" alt=""><figcaption><p>Ghi chú: Đây là các thiết lập z-index hiện tại trên giao diện Dawn (giao diện miễn phí phổ biến nhất của Shopify) tại thời điểm này.</p></figcaption></figure>

Các phần tử nổi này được kiểm soát bởi các **giá trị z-index** của riêng chúng. Giá trị z-index càng cao, phần tử đó càng có ưu tiên hiển thị trên các phần tử khác. Phần khó khăn là không có quy tắc cố định nào cho các giá trị z-index. Bạn có thể gán bất kỳ số nào lên đến 2,147,483,647. Mỗi giao diện bạn sử dụng và mỗi ứng dụng chạy trên cửa hàng Shopify của bạn có thể gán z-index riêng cho các thành phần nổi—thường dựa trên sở thích của nhà phát triển. Khi các phần tử này tương tác trên trang web của bạn, chúng có thể chồng chéo lên nhau theo những cách không mong muốn.

{% comment %}hint style="info" {% endcomment %}
Hãy cùng vui vẻ một chút :joy:: Hãy nhìn kỹ vào ảnh chụp màn hình ở trên và bạn sẽ thấy—đúng vậy, nó thật lộn xộn, và hoàn toàn **không có quy tắc**. Có ba nhà phát triển đứng sau trang web mà bạn đang xem.&#x20;

Nhà phát triển đã xây dựng giao diện Dawn đã chọn z-index là 3 cho Bảng Menu và 1000 cho Bảng Giỏ hàng—hoàn toàn không liên quan, không có logic rõ ràng.&#x20;

Sau đó là nhà phát triển của ứng dụng Rivo Loyalty Rewards—một công cụ khách hàng trung thành phổ biến—người đã chọn z-index là 99999999999, có lẽ mà không đếm xem họ đã gõ bao nhiêu số chín. Mục tiêu duy nhất của họ: đảm bảo rằng nút “Rewards” nổi luôn ở trên cùng, bất kể điều gì, ngay cả trên Bảng Giỏ hàng của bạn.&#x20;

Trong khi đó, nhà phát triển Navi+ khiêm tốn chọn một số nhỏ hơn—chỉ 5—bởi vì chúng tôi không muốn quá hung hăng hoặc xâm phạm. Vậy, bạn nên làm gì?
{% comment %}endhint{% endcomment %}

**Bước 1:** Tìm z-index chính xác của menu Navi+

<details><summary><strong>Phương pháp 1: Hỏi hỗ trợ Navi+ (</strong>Đơn giản nhất)</summary>
<p>Đây là cách tốt nhất và hiệu quả nhất. Chúng tôi có thể cung cấp cho bạn thông tin về các giá trị z-index của các phần tử giao diện chính như Bảng Menu, Bảng Giỏ hàng và bất kỳ ứng dụng bên thứ ba nào bạn đang sử dụng, sau đó đề xuất cài đặt z-index tốt nhất cho trường hợp của bạn.</p>
<p>Đừng ngần ngại sử dụng hộp trò chuyện ở góc dưới bên phải của màn hình để nói chuyện với một người hỗ trợ Navi+. Navi+ đang phát triển, và chúng tôi thực sự trân trọng phản hồi của bạn—các vấn đề của bạn giúp hướng dẫn chúng tôi xây dựng một sản phẩm tốt hơn.</p>
<p>Chúng tôi không trực tuyến 24/7—chỉ 14 giờ một ngày, dựa trên múi giờ Việt Nam. Tuy nhiên, ngay khi chúng tôi thấy tin nhắn của bạn, chúng tôi sẽ trả lời ngay lập tức.</p>
</details>

<details><summary><strong>Phương pháp 2: Sử dụng chế độ Kiểm tra của trình duyệt</strong> (chi tiết, nhưng yêu cầu một số kiến thức kỹ thuật)</summary>
<p>Cho đến nay, không có phương pháp nào tốt hơn để tự kiểm tra điều này trừ khi bạn sử dụng chế độ Kiểm tra. Công cụ phát triển này có sẵn trong tất cả các trình duyệt hiện đại như Chrome, Firefox, Safari hoặc Edge. Nhấp chuột phải vào bất kỳ đâu trên trang web của bạn và chọn <strong>Kiểm tra</strong> để mở chế độ Kiểm tra.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FswowawWsXN01MlvSqqjX%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=470cd65f-0ce8-416a-8749-b9a210f6f08f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOabxqNlZUroNKJQfTKsI%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=2b872306-63e3-4dcf-b89a-f16f162727b4" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FSbR8KCnlOK4nFHhxntTJ%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=64ec8298-196e-4999-99a7-f301e052b5dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FDkVp8u1XnJPTiSKksWAQ%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=641c59d0-9ecf-4ac2-9626-6a1a90cc151f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOgAwr2zm2dapUz9OSGJO%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=493df1eb-fa89-4bf6-806e-bec230ec8e82" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FZN3XAcWn9J8Ifn6AQSjW%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=8de191fd-4b39-4e4d-946b-07bedf55ee52" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcwtXWdRp5QaafcNjLGD5%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=beff473b-cd52-4a72-9657-b54687d99363" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FG7lIvYAGwNMcV4NRQUKI%2FHelp.MenuTree.1.4.10.png?alt=media&#x26;token=2a9db521-805c-4374-bc3b-303e97e8b990" alt=""><figcaption></figcaption></figure>
</details>

<details><summary><strong>Phương pháp 3:</strong> Thử và kiểm tra dựa trên các gợi ý của chúng tôi (Kinh nghiệm cá nhân)</summary>
<p>Trong hầu hết các trường hợp, các vấn đề z-index rất hiếm nếu bạn không sử dụng quá nhiều ứng dụng. Vấn đề chính thường đến từ sự chồng chéo giữa menu của bạn và các phần tử giao diện khác như Bảng Menu hoặc Bảng Giỏ hàng.</p>
<ul>
<li>Đối với các menu dính của Navi+ như Tabbar hoặc FAB: Chúng tôi khuyên bạn nên giữ z-index thấp, khoảng 2 hoặc 3. Những menu này chiếm không gian màn hình, và sẽ cảm thấy bị hỏng hoặc khó chịu nếu chúng che khuất các bảng chức năng như giỏ hàng.</li>
<li>Đối với các menu phần của Navi+ như Mega menus: Nếu đặt ở trên cùng (trong tiêu đề), bạn có thể an toàn đặt z-index rất cao (ví dụ: 2000000000) để đảm bảo rằng menu con không bị ẩn sau các thành phần khác.</li>
<li>Đối với các menu Grid của Navi+: z-index không có tác dụng, vì menu là phẳng và không có độ sâu lớp.</li>
<li>Đối với các menu Slide của Navi+: z-index nên được đặt rất cao (ví dụ: 2000000000) để tránh bị ẩn sau các phần tử khác.</li>
</ul>
</details>

**Bước 2:** Cập nhật z-index của menu Navi+

<details><summary>Cách cập nhật z-index của menu Navi+?</summary>
<p>Chọn menu Nâng cao và cuộn xuống để tìm thẻ Z-index sau đó cập nhật z-index và đừng quên nhấp LƯU để áp dụng các thay đổi.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fh2SfwqpjqjNzZwmbs2yL%2Fz-index%201.1.png?alt=media&#x26;token=47b5f318-d0b3-4f2a-9668-f9e3ed7dab09" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F7np7UDMk5KFGnSvMr8HK%2Fz-index%201.2.png?alt=media&#x26;token=ae4aa403-fbd6-41c9-a16d-861e8cd032bc" alt=""><figcaption></figcaption></figure>
</details>
