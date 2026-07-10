---
description: 'Shopifyにウェブサイトを展開する場合は、ここで専用のShopifyアプリをインストールしてください: <https://apps.shopify.com/pronavi-navigation-design> - 最適化されています...'
lang: jp
layout: default
permalink: /jp/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress-woocommerce-wix-others/
title: Squarespace / その他に公開
---
# Squarespace / その他で公開

> **WordPress をご利用ですか？** 下記の手動埋め込みの代わりに、専用の [Naviplus Menu Builder プラグイン]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/) をご使用ください — テーマの編集が不要で、FAB はエディタで公開されるとサイト全体に自動的にレンダリングされます。

> **Shopify をご利用ですか？** 専用の [Shopify アプリ](https://apps.shopify.com/pronavi-navigation-design) をインストールしてください — プラットフォームに最適化されており、組み込みの公開オプションが利用できます。

> **Wix をご利用ですか？** 専用の [Wix で公開]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publishing-on-wix/) ガイドをご覧ください — Wix App Market から Navi+ アプリをインストールすると、自動的に埋め込まれます、コード不要。以下の手動埋め込みは Squarespace、Webflow、およびカスタムサイトのみです。

このページでは、**手動スクリプト埋め込み** 方法について説明しています。この方法は、[Squarespace](https://www.squarespace.com/ "Squarespace")、[Webflow](https://webflow.com/ "Webflow")、[Magento](https://magento-opensource.com/ "Magento")、および PHP、Node.js、または純粋な HTML で構築されたカスタムウェブサイトに適しています。以下の実装方法があります:

### 1. ウェブサイトにNavi+を埋め込む

この実装方法は、Navi+が現在サポートしているすべてのメニュータイプに適しています。これには、Tabbar、Mega menu、Slide menu、FAB、Grid menuが含まれます。このコードは、すべてのメニューに対して一度だけ使用する必要があります。

```html
<!-- Insert this code to the <head> of website. (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Insert this code to the <head> of website -->
```

### FAQ (よくある質問)

<details><summary>トークンとは何ですか？</summary>
<p>各Navi+アカウントには一意のトークンが割り当てられています。このトークンは、アプリケーションのヘッダーから直接表示およびコピーできます。トークンは、メニューを安全に公開するために使用されます。</p>
</details>

<details><summary>https://live.naviplus.app/start.jsとは何ですか？</summary>
<p>これは、アプリケーションの初期化ロジックを含むNavi+の固定URLです。このスクリプトは軽量（約4KB）で、ほとんどのデバイスやネットワーク条件で迅速に読み込むことができます。CloudflareとBunnyCDNを介して配信され、安定したグローバルパフォーマンスと最新のブラウザとの信頼性のある互換性を提供します。</p>
<p>非同期読み込みメソッドを使用することで、ウェブサイトの読み込みプロセスに影響を与えません。</p>
</details>

<details><summary>この埋め込みコードは私のウェブサイトを遅くしますか？</summary>
<p>以下のコードは非常に軽量で、速度（最初の読み込みに約100-200ms、以降の読み込みに0msかかるだけ）や顧客体験、SEOスコアに影響を与えることなく、ウェブサイトに挿入できます。</p>
</details>

<details><summary>このコードスニペットを挿入するのに最適な場所はどこですか？</summary>
<p>ヘッダーセクション（またはできるだけ早く）です。なぜなら、ウェブサイトはインターフェースをレンダリングするためにリソースを順次読み込むからです。HTMLコード内でNavi+を最初に配置することで、条件が満たされるとすぐにメニューが表示されるようになります。これにより、ユーザー体験が向上します。</p>
</details>

<details><summary>このコードがウェブサイトに正常に埋め込まれたかどうかをどうやって確認できますか？</summary>
<p>2つの方法があります：</p>
<p><strong>方法1（誰でも）：</strong></p>
<p>サフィックス#navidebug-onを付けてウェブサイトを開きます。例えば：<a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>。ウェブサイトがデバッグモードに切り替わる場合、埋め込みは正しく機能しています。デバッグモードは、CSSセレクタを簡単に特定するのに役立ちます。#navidebug-offを使用してオフにします。</p>
<p><strong>方法2（開発者向け）：</strong></p>
<p>ブラウザの検査ツールを開き、コンソールタブに移動し、緑のメッセージ「Using Navi+..」を探します。このメッセージは、コードが正常に埋め込まれたことを示しています。</p>
</details>

***

### 2. ウェブサイトの任意のポイントにNavi+メニューを挿入する

以下のコードは、異なる挿入情報（特に**埋め込みID**、例えばSF-123456789）を使用して、ウェブサイトで複数回使用できます。ウェブサイトがレンダリングされると、条件が満たされると、コードが挿入された位置にメニューが展開されて表示されます。このメニュータイプは、Mega menu、Gridなどに適しています。

```html
<!-- Insert the code where the menu SF-123456789 appears. (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Insert the code where the menu SF-123456789 appears -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">重要</mark>**:** 上記のコードはサンプル埋め込みコード<mark style="color:orange;">SF-123456789</mark>を使用しています。実際のメニュー埋め込みコードに置き換えてください。
{% comment %}endhint{% endcomment %}
