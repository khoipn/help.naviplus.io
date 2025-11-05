---
description: 'Link: <https://www.tidio.com/>'
layout: default
permalink: /docs/integrations/chat-tools/tidi-chat/
title: Tidi chat
---
# Tidi chat

Link: <https://www.tidio.com/>

### 1. Open the Tidi chat and use the Navi+ menu option to access this function

```javascript
// Add a javascript function

function openTidi() {
  tidioChatApi.display(true);
  tidioChatApi.open();
}
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FvXzXG56ALOjkThGHSrtO%2FScreenshot%202025-07-22%20at%2016.54.19.png?alt=media&#x26;token=2324c4c1-d11b-4370-a4fa-deac6494a4a9" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F7aHCZOgPajVlXFqfCGU7%2FScreenshot%202025-07-22%20at%2016.57.03.png?alt=media&#x26;token=f7edc16d-7994-484b-823a-ebbb8bacc67e" alt=""><figcaption></figcaption></figure>

### 2. Move the Tidi chat icon upward to prevent it from overlapping with the menu

```javascript
// Call the functions:
if (document.readyState === 'complete') {
  naviman.waitElementToAddStyle("#tidio-chat-root", "margin-bottom: 50px !important;");
} else {
  window.addEventListener('load', function () {
    navimanwaitElementToAddStyle("#tidio-chat-root", "margin-bottom: 50px !important;");
  });
}
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FG9dxqDH39htPfxm6q7hh%2FScreenshot%202025-07-22%20at%2017.00.17.png?alt=media&#x26;token=888fb217-6566-4edd-999c-0e2f25380240" alt=""><figcaption></figcaption></figure>

Set a 50px offset to move the Tidi chat up or down, as needed
