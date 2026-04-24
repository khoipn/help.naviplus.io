---
description: Bạn sẽ cần sử dụng một thư viện như TourGuideJS, một thư viện JavaScript có thể được nhúng vào trang web của bạn để thêm các hướng dẫn từng bước thông qua một ...
lang: vi
layout: default
permalink: /vi/docs/development/add-walk-through-to-navi/
title: Thêm hướng dẫn cho Navi+
---
# Thêm hướng dẫn cho Navi+

Bạn sẽ cần sử dụng một thư viện như TourGuideJS, một thư viện JavaScript có thể được nhúng vào trang web của bạn để thêm các hướng dẫn từng bước thông qua một định dạng thuộc tính như <div data-tg-tour="<span>Chuyến tham quan đầu tiên của tôi</span>"> ... </div>. Nó hoàn toàn miễn phí. Làm theo hướng dẫn dưới đây để thêm các hướng dẫn thông qua các menu của Navi+, cho toàn bộ menu hoặc cho từng mục menu riêng lẻ.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgmsAKbB1RrFhKxGHHznd%2Fimage.png?alt=media&#x26;token=a24149db-b3ac-456b-810e-3ffb7e0213e4" alt=""><figcaption></figcaption></figure>

```
<!-- Navi+ chèn thư viện Hướng dẫn Tour --->
<script src="https://unpkg.com/@sjmc11/tourguidejs/dist/tour.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://unpkg.com/@sjmc11/tourguidejs/dist/css/tour.min.css">
 
<script>
  setTimeout(function() {
      const tg = new tourguide.TourGuideClient();
      tg.start();        
  }, 2000);
</script>
<!-- Navi+ chèn thư viện Hướng dẫn Tour --->
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FZd2WXeOFi673MXis8P5Z%2Fimage.png?alt=media&#x26;token=66b7d8c5-5ece-40ec-87f9-4ef6f33d23b8" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F4T8gzFPxbRyPUMVGOKJc%2Fimage.png?alt=media&#x26;token=cff87c3b-d6e9-4430-8c21-419b7da019f9" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTQ1AYMdEbDyFvme90s9Z%2Fimage.png?alt=media&#x26;token=363f644e-6acd-4112-ae32-9eb9c7a1a81f" alt=""><figcaption></figcaption></figure>


---

# Hướng dẫn cho đại lý: Truy vấn tài liệu này

Nếu bạn cần thông tin bổ sung không có sẵn trực tiếp trên trang này, bạn có thể truy vấn tài liệu một cách động bằng cách đặt câu hỏi.

Thực hiện một yêu cầu HTTP GET trên URL trang hiện tại với tham số truy vấn `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/development/add-walk-through-to-navi+.md?ask=<câu hỏi>
```

Câu hỏi nên cụ thể, tự chứa và được viết bằng ngôn ngữ tự nhiên.
Phản hồi sẽ chứa một câu trả lời trực tiếp cho câu hỏi và các đoạn trích và nguồn liên quan từ tài liệu.

Sử dụng cơ chế này khi câu trả lời không có sẵn rõ ràng trên trang hiện tại, bạn cần làm rõ hoặc ngữ cảnh bổ sung, hoặc bạn muốn lấy các phần tài liệu liên quan.
