---
description: Navi+メニュービルダープラグインを使用して、WordPressにNavi+タブバーを公開します — コード編集は不要です。タブバーはスティッキーメニューで、エディタで公開されると自動的にサイト全体に表示されます。
lang: jp
layout: default
permalink: /jp/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/
title: タブバー — WordPressに公開
---
# タブバー — WordPressに公開

**タブバー**は**スティッキー**メニューです — ビューポートに固定され（通常はモバイルの下部付近）、訪問者がスクロールしてもその位置に留まります。WordPressでは、Navi+メニュービルダープラグインがタブバーをサイト全体に自動的に表示します。コードやショートコードを貼り付ける必要はありません。

> 他のプラットフォーム（Wix、Squarespace、Webflow、カスタムサイト）：[Wix / Squarespace / その他に公開]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/)を参照してください。

---

## ステップ

1. **プラグインをインストール** — [Navi+メニュービルダープラグインをインストール]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/)を参照してください。
2. **エディタを開く** — WordPress管理画面で、**外観 → Naviplusメニュービルダー**に移動します。
3. **タブバーを作成** — **タブバー**レイアウトを選択し、3〜5の主要な目的地を追加します。デザインのヒントについては、[タブバー — 使用方法]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/)を参照してください。
4. **エディタでメニューを公開**（ステータス：公開、ドラフトではありません）。

それだけです。タブバーは、WordPressサイトのフロントエンドにすぐに表示されます — ショートコードもテーマ編集も不要です。プラグインのサイト全体の埋め込み（デフォルトでオン）は、すべてのページでNavi+ランタイムを読み込み、ランタイムはサイトのすべての公開されたスティッキーメニューを取得します。

---

## タブバーを特定のページに制限する

プラグインのサイト全体の埋め込みを無効にしないでください — それはランタイムを完全にオフにします。代わりに、エディタでタブバーのスコープを設定します：

- **表示ルール → URLパターン** — 一致するURLでのみタブバーを表示します（例：`/shop/*`）。
- **表示ルール → デバイス** — モバイルのみに制限します。
- **表示ルール → 訪問者の状態** — ログインユーザーなどに制限します。

表示ルールはブラウザ内のランタイムによって評価されるため、変更は次のページの読み込み時に適用されます。

---

## タブバーのモバイルヒント

- **3〜5タブ**に抑える — それ以上はビューポートを混雑させます。
- 短いラベル（可能な限り1語）と明確なアイコンを使用します。
- 実際のデバイスでタップターゲットのサイズをテストし、エディタのプレビューだけではなくします。
- タブバーが他の固定要素（例：チャットウィジェット）と重なる場合は、[メニューが他の要素と重なる]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/)を参照してください。

---

## タブバーがライブであることを確認する

任意のページURLに`#navidebug-on`を追加します（例：`https://your-site.com/#navidebug-on`）。プラグインが接続されている場合、ページはNavi+デバッグモードに切り替わります。`#navidebug-off`を追加してオフにします。

より深いチェックについては、[最初のメニューを作成 — 接続を確認]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection)を参照してください。

---

## 関連

- [WordPress / WooCommerce — 概要]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [WordPressでメニューを公開する]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [NaviplusメニュービルダーFAQ]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/)
