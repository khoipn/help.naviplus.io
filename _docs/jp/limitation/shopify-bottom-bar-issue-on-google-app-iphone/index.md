---
description: iPhoneのGoogleアプリ内でNavi+を使用するShopifyウェブサイトを開いた際に、Bottom Barの下に余白が生じる問題についての説明です。
lang: jp
layout: default
permalink: /jp/docs/limitation/shopify-bottom-bar-issue-on-google-app-iphone/
title: ShopifyのBottom BarがiPhoneのGoogleアプリで表示される問題
---
# ShopifyのBottom BarがiPhoneのGoogleアプリで表示される問題

iPhoneのGoogleアプリ内でNavi+を使用するShopifyウェブサイトを開いた際に、Bottom Barの下に余白が生じる問題についての説明です。

**Navi+**（または固定ボトムメニュー、フローティングボタンなどを持つアプリ）を使用するShopifyウェブサイトにアクセスする際、**iPhoneのGoogleアプリ内**でウェブサイトを開くと、画面の下部に不自然な余白が表示されることがあります。

この問題はGoogleアプリでのみ発生し、**Navi+が原因ではありません**。以下に分かりやすく説明します。

***

### 1. どこで問題が発生するか？

問題が発生する条件：

* ウェブサイトが **Shopify** で動作している
* **Bottom Bar**（Navi+または他のアプリ）または **Floating Action Button（FAB）**（チャットウィジェット、ポイントボタンなど）がある
* ユーザーが **iPhoneのGoogleアプリ経由でウェブサイトを開く**（通常は検索してウェブサイトをタップ）

以下のブラウザでウェブサイトを開いた場合は**発生しません**：

* Safari（iPhoneのデフォルトブラウザ）
* Chrome
* Facebookブラウザ
* TikTokブラウザ
* …

これにより、問題がiOSのGoogleアプリに起因することが確認されています。

***

### 2. Navi+を使用するShopifyウェブサイトでこの問題が発生しやすい理由

GoogleアプリはAppleのWebViewという特殊な方法でウェブサイトをレンダリングします。このレンダリングエンジンは、以下の条件を持つウェブサイトで画面の実際の高さを計算する際に長年の問題を抱えています：

* 固定のBottom Bar
* JavaScriptによって動的に生成されるHTMLまたはUI
* Shopifyのような複雑なレイアウト（複数のコンテナレイヤーと常に変化するセクション）

これらの条件が揃うと、Googleアプリが実際のビューポートの高さを誤って計算し、**偽の余白**を作成することがあります。

➡️ これが、Navi+または他のBottom Bar/FABアプリを使用するShopifyウェブサイトで問題がより頻繁に発生する理由です。

***

### 3. これはNavi+の問題ですか？

いいえ。\
これは**iPhoneのGoogleアプリ**固有のバグであり、長年存在しています。

Navi+を無効にしても、Bottom BarやFABを表示する他のShopifyアプリがGoogleアプリ内で同じ問題を経験します。

***

### 4. この問題が完全に修正できない証拠

* Bottom BarまたはFABを含む多くのShopifyアプリが全く同じ問題を経験しています。
* Shopifyの一部の組み込み機能もGoogleアプリ内で同様の動作を示します。
* これは開発者コミュニティでよく知られた問題ですが、Googleアプリはまだ対処していません。
* ユーザーが**画面のどこかをタップする**と問題が消える → Googleアプリがレンダリングをやり直し、正しい高さを再計算します。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIJeUOw7iYKzsFXSLVQK3%2FEx-1.1.2.png?alt=media&#x26;token=c2c351d9-10fd-47ed-bbef-1e436ab3ac4f" alt=""><figcaption></figcaption></figure>

***

### 5. Navi+の現在の解決策

Navi+は複数のアプローチを調査・テストしましたが、問題がGoogleアプリ自体に起因するため、完全に解決することはできません。

しかし、Navi+は**可能な限り最善の緩和策**を実装しています：

#### ✔️ 問題は最初の1回だけ発生する

通常、ユーザーが：

* Googleアプリ内でウェブサイトを開いた時
* ページのどこかをナビゲートまたはタップした時

に発生します。この時、Navi+は一回限りの修正メカニズムをトリガーします。ユーザーが：

* 画面を軽くタップする
* 少しスクロールする
* 何らかの小さな操作をする

#### ✔️ 問題は自動的に消える

GoogleアプリがレイアウトをすべてSCHEDULEし直し、その時点から：

* Bottom Barが正しい位置に表示される
* GoogleアプリをS閉じて再度開くまで問題は再発しない

#### ✔️ この緩和策はNavi+と一緒に使用される他のボトム配置アプリからの同様のエラーも軽減する

***

### 6. エンドユーザー向けの簡単な説明

> 「iPhoneのGoogleアプリには、Navi+のようなBottom Barを使用するShopifyウェブサイトを開く際に表示バグがあります。この問題はGoogleアプリから発生し、Navi+だけでなく多くのアプリに影響します。一度だけ発生し、画面をタップまたはスクロールした後に消えます。SafariまたはChromeを使用すると問題は発生しません。」

***

### 7. 結論

❌ Navi+の問題ではない\
❌ Shopifyの問題ではない

✔️ iPhoneのGoogleアプリの表示バグ\
✔️ Navi+は問題を最小化し、一度だけ発生して消えるようにする\
✔️ Safari/Chromeは完全に影響を受けない
