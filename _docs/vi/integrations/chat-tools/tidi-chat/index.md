---
description: 'Link: <https://www.tidio.com/>'
lang: vi
layout: default
permalink: /vi/docs/integrations/chat-tools/tidi-chat/
title: Tidi chat
---
# Tidi chat

Link: <https://www.tidio.com/>

### 1. Mở Tidi chat và sử dụng tùy chọn menu Navi+ để truy cập chức năng này

```javascript
// Add a javascript function

function openTidi() {
  tidioChatApi.display(true);
  tidioChatApi.open();
}
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FvXzXG56ALOjkThGHSrtO%2FScreenshot%202025-07-22%20at%2016.54.19.png?alt=media&#x26;token=2324c4c1-d11b-4370-a4fa-deac6494a4a9" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F7aHCZOgPajVlXFqfCGU7%2FScreenshot%202025-07-22%20at%2016.57.03.png?alt=media&#x26;token=f7edc16d-7994-484b-823a-ebbb8bacc67e" alt=""><figcaption></figcaption></figure>

### 2. Di chuyển biểu tượng Tidi chat lên trên để tránh chồng chéo với menu

```javascript
// Call the functions:
if (document.readyState === 'complete') {
  naviman.waitElementToAddStyle("#tidio-chat-root", "margin-bottom: 50px !important;");
} else {
  window.addEventListener('load', function () {
    naviman.waitElementToAddStyle("#tidio-chat-root", "margin-bottom: 50px !important;");
  });
}
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FG9dxqDH39htPfxm6q7hh%2FScreenshot%202025-07-22%20at%2017.00.17.png?alt=media&#x26;token=888fb217-6566-4edd-999c-0e2f25380240" alt=""><figcaption></figcaption></figure>

Đặt một khoảng cách 50px để di chuyển Tidi chat lên hoặc xuống, tùy theo nhu cầu

---

# Hướng dẫn cho nhân viên: Hỏi về tài liệu này

Nếu bạn cần thêm thông tin không có sẵn trực tiếp trên trang này, bạn có thể truy vấn tài liệu một cách động bằng cách đặt câu hỏi.

Thực hiện yêu cầu HTTP GET trên URL trang hiện tại với tham số truy vấn `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/integrations/chat-tools/tidi-chat.md?ask=<question>
```

Câu hỏi nên cụ thể, tự chứa, và được viết bằng ngôn ngữ tự nhiên.
Phản hồi sẽ chứa câu trả lời trực tiếp cho câu hỏi và các đoạn trích dẫn và nguồn liên quan từ tài liệu.

Sử dụng cơ chế này khi câu trả lời không có sẵn rõ ràng trên trang hiện tại, bạn cần làm rõ hoặc thêm ngữ cảnh, hoặc bạn muốn lấy các phần tài liệu liên quan.
