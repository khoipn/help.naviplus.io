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
