---
description: 'Link: <https://www.tidio.com/>'
lang: zh-cn
layout: default
permalink: /zh-cn/docs/integrations/chat-tools/tidi-chat/
title: Tidi chat
---
# Tidi chat

Link: <https://www.tidio.com/>

### 1. 打开 Tidi chat 并使用 Navi+ 菜单选项访问此功能

```javascript
// Add a javascript function

function openTidi() {
  tidioChatApi.display(true);
  tidioChatApi.open();
}
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FvXzXG56ALOjkThGHSrtO%2FScreenshot%202025-07-22%20at%2016.54.19.png?alt=media&#x26;token=2324c4c1-d11b-4370-a4fa-deac6494a4a9" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F7aHCZOgPajVlXFqfCGU7%2FScreenshot%202025-07-22%20at%2016.57.03.png?alt=media&#x26;token=f7edc16d-7994-484b-823a-ebbb8bacc67e" alt=""><figcaption></figcaption></figure>

### 2. 将 Tidi chat 图标向上移动，以防止与菜单重叠

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

设置 50px 的偏移量以根据需要向上或向下移动 Tidi chat
