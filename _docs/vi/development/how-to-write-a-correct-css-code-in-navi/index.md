---
description: 'CSS là chìa khóa cho mọi vấn đề khi bạn cần tùy chỉnh sâu cho Navi+. Hầu hết mọi thứ giao diện trên Navi+ đều có thể được giải quyết bằng mã CSS. Trong Navi+, có 2 cấp độ CSS:'
lang: vi
layout: default
permalink: /vi/docs/development/how-to-write-a-correct-css-code-in-navi/
title: Cách viết mã CSS chính xác trong Navi+
---
# Cách viết mã CSS chính xác trong Navi+

CSS là chìa khóa cho mọi vấn đề khi bạn cần tùy chỉnh sâu cho Navi+. Hầu hết mọi thứ giao diện trên Navi+ đều có thể được giải quyết bằng mã CSS. Trong Navi+, có 2 cấp độ CSS:

### Cấp độ 1: Internal Stylesheet / CSS (#SF-123456789)

Đây là cấp độ được khuyến nghị sử dụng trong hầu hết các trường hợp. Khi bạn viết mã trong hộp này, hệ thống sẽ tự động thêm một tiền tố là #SF-123456789 (đó là ID menu của bạn) vào đầu các thẻ CSS. Điều này sẽ đảm bảo không có xung đột với tất cả các thành phần giao diện khác.

Xem ví dụ trước và sau khi biên dịch CSS trong hộp này bên dưới

```css
// Your CSS code
{
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   {
      margin-bottom: 164px;
   }
}
```

```css
// The CSS code after being compiled

#SF-123456789 {
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   #SF-123456789 {
      margin-bottom: 164px;
   }
}

```

### Cấp độ 2: Global Stylesheet / CSS

Trừ khi bạn có kinh nghiệm với CSS, hãy tránh lạm dụng hộp này vì mọi thứ sẽ được đẩy thẳng ra dưới dạng bạn viết mã CSS mà không có bất kỳ lớp bảo vệ xung đột nào.

---

# Hướng dẫn cho đại lý: Truy vấn tài liệu này

Nếu bạn cần thông tin bổ sung không có sẵn trực tiếp trên trang này, bạn có thể truy vấn tài liệu một cách động bằng cách đặt câu hỏi.

Thực hiện yêu cầu HTTP GET trên URL trang hiện tại với tham số truy vấn `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/development/how-to-write-a-correct-css-code-in-navi+.md?ask=<question>
```

Câu hỏi nên cụ thể, tự chứa và được viết bằng ngôn ngữ tự nhiên.
Phản hồi sẽ chứa câu trả lời trực tiếp cho câu hỏi và các đoạn trích và nguồn liên quan từ tài liệu.

Sử dụng cơ chế này khi câu trả lời không có sẵn rõ ràng trong trang hiện tại, bạn cần làm rõ hoặc ngữ cảnh bổ sung, hoặc bạn muốn lấy các phần tài liệu liên quan.
