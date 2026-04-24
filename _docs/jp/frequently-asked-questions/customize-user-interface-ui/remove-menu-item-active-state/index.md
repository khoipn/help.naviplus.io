---
description: デフォルトでは、Navi+は現在のページURLをチェックしてメニューのアクティブ状態を表示します（灰色の背景を使用）。これにより、お客様はより簡単にナビゲートできます。
lang: jp
layout: default
permalink: /jp/docs/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state/
title: メニュー項目のアクティブ状態を削除しますか？
---
# メニュー項目のアクティブ状態を削除しますか？

デフォルトでは、Navi+は現在のページURLをチェックしてメニューのアクティブ状態を表示します（灰色の背景を使用）。これにより、お客様はより簡単にナビゲートできます。

しかし、アクティブ状態は常に必要ではなく、特に他の方法で"あなたのいる場所"を示すことができる広いデスクトップ画面では、必要ない場合があります。時には、メニューをよりクリーンに見せるためにアクティブ状態を削除したいこともあります。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FAQCfjosVopNC9mXDDbII%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=1167aaa9-c22e-4102-9eb9-6e5ee10dc14a" alt=""><figcaption></figcaption></figure>

これを行う方法は次のとおりです：

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyaI6k6GmW3A5CGipYz1p%2FCSS.1.1.png?alt=media&#x26;token=1ddf87db-9f58-4109-9886-441efd8e8f24" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FXRcp2647QfYG9b0JyS1t%2FCSS.1.2.png?alt=media&#x26;token=742f4ac0-50c1-48ec-bf8f-ccc7d89818cc" alt=""><figcaption></figcaption></figure>

方法1：このメニューのみに適用したい場合、CSSコードは次のようになります（内部スタイルシート/CSSボックスに貼り付けてください）：

```
ul li.navi-active {
  background: initial;
}
```

説明：これは、ページに`#SF-123456789 ul li.navi-active { background: initial; }`のようなCSSルールを追加し、このメニュー（embedID `SF-123456789`）のみに適用され、他のメニューには影響しません。

方法2：すべてのNavi+メニューでアクティブ効果を削除したい場合は、次のコードを使用します（グローバルスタイルシート/CSSボックスに貼り付けてください）：

```
.naviItem ul li.navi-active {
  background: initial;
}
```

---

# エージェントの指示：このドキュメントを照会する

このページに直接利用できない追加情報が必要な場合は、質問をしてドキュメントを動的に照会できます。

現在のページURLに`ask`クエリパラメータを付けてHTTP GETリクエストを実行します：

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state.md?ask=<question>
```

質問は具体的で自己完結しており、自然言語で書かれている必要があります。
応答には、質問への直接的な回答と、ドキュメントからの関連する抜粋や情報源が含まれます。

このメカニズムは、現在のページに明示的に存在しない回答が必要な場合、明確化や追加の文脈が必要な場合、または関連するドキュメントセクションを取得したい場合に使用してください。
