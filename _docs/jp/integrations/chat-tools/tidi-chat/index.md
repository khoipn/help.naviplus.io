---
description: 'Link: <https://www.tidio.com/>'
lang: jp
layout: default
permalink: /jp/docs/integrations/chat-tools/tidi-chat/
title: Tidi chat
---
# Tidi chat

Link: <https://www.tidio.com/>

### 1. Tidi chatを開き、Navi+メニューオプションを使用してこの機能にアクセスします

```javascript
// Add a javascript function

function openTidi() {
  tidioChatApi.display(true);
  tidioChatApi.open();
}
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FvXzXG56ALOjkThGHSrtO%2FScreenshot%202025-07-22%20at%2016.54.19.png?alt=media&#x26;token=2324c4c1-d11b-4370-a4fa-deac6494a4a9" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F7aHCZOgPajVlXFqfCGU7%2FScreenshot%202025-07-22%20at%2016.57.03.png?alt=media&#x26;token=f7edc16d-7994-484b-823a-ebbb8bacc67e" alt=""><figcaption></figcaption></figure>

### 2. Tidi chatアイコンを上に移動して、メニューと重ならないようにします

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

Tidi chatを上または下に移動するために50pxのオフセットを設定します

---

# エージェントの指示: このドキュメントを照会する

このページに直接利用可能でない追加情報が必要な場合は、質問をしてドキュメントを動的に照会できます。

現在のページURLに`ask`クエリパラメータを付けてHTTP GETリクエストを実行します:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/integrations/chat-tools/tidi-chat.md?ask=<question>
```

質問は具体的で自己完結しており、自然言語で書かれている必要があります。
回答には質問への直接的な答えと、ドキュメントからの関連する抜粋や情報源が含まれます。

現在のページに明示的に存在しない答えが必要な場合、明確化や追加の文脈が必要な場合、または関連するドキュメントセクションを取得したい場合にこのメカニズムを使用してください。
