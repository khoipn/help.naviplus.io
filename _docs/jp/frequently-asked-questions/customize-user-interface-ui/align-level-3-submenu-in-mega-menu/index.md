---
description: 一部のメガメニューは非常に高くなることがあります。その場合、レベル3メニューを展開すると十分なスペースが残らないことがあります。このような場合は、レベル3メニューを代わりに上部に固定する必要があります。
lang: jp
layout: default
permalink: /jp/docs/frequently-asked-questions/customize-user-interface-ui/align-level-3-submenu-in-mega-menu/
title: メガメニューのレベル3サブメニューを整列させるには？
---
# メガメニューのレベル3サブメニューを整列させるには？

一部のメガメニューは非常に高くなることがあります。その場合、レベル3メニューを展開すると十分なスペースが残らないことがあります。このような場合は、レベル3メニューを代わりに上部に固定する必要があります。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fro68elhDmY0dYZVM33lW%2F1.1.png?alt=media&#x26;token=f8dc87a7-e10d-4ac7-a398-a4b5220ce72c" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FX4M1o8bgaNDF6VYTtini%2F1.2.png?alt=media&#x26;token=e2d65a92-418c-4c4a-bff7-51a5b9044d41" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F2tyR71IfHrMmPmZN0Ewi%2F1.3.png?alt=media&#x26;token=cdd6854c-2782-40ec-a959-a74d576eb177" alt=""><figcaption></figcaption></figure>

内部スタイルシート / CSSボックスに貼り付けてください：

```
ul.children[menulevel="2"] li.child.is-parent.menu-expand {
  position: initial;
}

ul.children[menulevel="2"] li.child.is-parent.menu-expand ul.children[menulevel="3"]{
  top: 0px;
}
```

---

# エージェントの指示：このドキュメントを照会する

このページに直接利用できない追加情報が必要な場合は、質問をしてドキュメントを動的に照会できます。

現在のページのURLに`ask`クエリパラメータを付けてHTTP GETリクエストを実行します：

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/customize-user-interface-ui/align-level-3-submenu-in-mega-menu.md?ask=<question>
```

質問は具体的で自己完結しており、自然言語で書かれている必要があります。
回答には質問への直接的な回答と、ドキュメントからの関連する抜粋や情報源が含まれます。

このメカニズムは、現在のページに明示的に存在しない回答が必要な場合、明確化や追加の文脈が必要な場合、または関連するドキュメントセクションを取得したい場合に使用してください。
