---
description: 'Shopifyにウェブサイトを展開する場合は、こちらに専用のShopifyアプリをインストールしてください: <https://apps.shopify.com/pronavi-navigation-design> - このプラットフォームに最適化されています...'
lang: jp
layout: default
permalink: /jp/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/
title: WordPress / WooCommerce / Wix / その他で公開
---
# WordPress / WooCommerce / Wix / その他で公開

Shopifyにウェブサイトを展開する場合は、こちらに専用の[Shopify](https://www.shopify.com/ "Shopify")アプリをインストールしてください: <https://apps.shopify.com/pronavi-navigation-design> - このプラットフォームに最適化されており、多くの便利な組み込みオプションを使用して安定した展開を可能にします。

他のプラットフォーム（[WordPress](https://wordpress.org/ "WordPress"), [WooCommerce](https://woocommerce.com/ "WooCommerce"), [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), およびPHP、Node.js、または純粋なHTMLで構築されたカスタムウェブサイトなど）にウェブサイトを展開する場合、次の実装方法があります:

### 1. ウェブサイトにNavi+を埋め込む

この実装方法は、Navi+が現在サポートしているすべてのメニュータイプ（Tabbar、Mega menu、Slide menu、FAB、Grid menuを含む）に適しています。このコードは、すべてのメニューに対して一度だけ使用する必要があります。

```html
<!-- Insert this code to the <head> of website. (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
<!-- Insert this code to the <head> of website -->
```

### FAQ (よくある質問)

<details><summary>トークンとは何ですか？</summary>
<p>各Navi+アカウントには一意のトークンが割り当てられています。このトークンは、アプリケーションのヘッダーから直接表示およびコピーできます。トークンは、メニューを安全に公開するために使用されます。</p>
</details>

<details><summary>https://live.naviplus.app/start.jsとは何ですか？</summary>
<p>これは、アプリケーションの初期化ロジックを含むNavi+の固定URLです。このスクリプトは軽量（約4KB）で、ほとんどのデバイスやネットワーク条件で迅速に読み込むことができます。CloudflareとBunnyCDNを介して配信され、安定したグローバルパフォーマンスと最新のブラウザとの信頼性のある互換性を提供します。</p>
<p>非同期読み込み方法を使用することで、ウェブサイトの読み込みプロセスに影響を与えません。</p>
</details>

<details><summary>この埋め込みコードは私のウェブサイトを遅くしますか？</summary>
<p>以下のコードは非常に軽量で、速度（最初の読み込みに約100-200ms、以降の読み込みに0msかかるだけ）や顧客体験、SEOスコアに影響を与えることなく、ウェブサイトに挿入できます。</p>
</details>

<details><summary>このコードスニペットを挿入するのに最適な場所はどこですか？</summary>
<p>ヘッダーセクション（またはできるだけ早く）。なぜなら、ウェブサイトはインターフェースをレンダリングするためにリソースを順次読み込むからです。HTMLコード内でNavi+を最初に配置することで、条件が満たされるのを待ってメニューができるだけ早く表示されるようになります。これにより、ユーザー体験が向上します。</p>
</details>

<details><summary>このコードがウェブサイトに正常に埋め込まれたかどうかをどうやって確認できますか？</summary>
<p>2つの方法があります：</p>
<p><strong>方法1（誰でも）：</strong></p>
<p>ウェブサイトを#navidebug-onのサフィックスで開きます。例えば：<a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>。ウェブサイトがデバッグモードに切り替わる場合、埋め込みは正常に機能しています。デバッグモードは、CSSセレクタを簡単に特定するのに役立ちます。#navidebug-offを使用してオフにします。</p>
<p><strong>方法2（開発者向け）：</strong></p>
<p>ブラウザの検査ツールを開き、コンソールタブに移動し、緑色のメッセージ「Using Navi+..」を探します。このメッセージは、コードが正常に埋め込まれたことを示しています。</p>
</details>

***

### 2. ウェブサイトの任意のポイントにNavi+メニューを挿入する

以下のコードは、異なる挿入情報（特に**埋め込みID**、例えばSF-123456789）を使用して、ウェブサイトで複数回使用できます。ウェブサイトがレンダリングされると、条件が満たされたときに、コードが挿入された位置にメニューが展開され、表示されます。このメニュータイプは、Mega menu、Gridなどに適しています。

```html
<!-- Insert the code where the menu SF-123456789 appears. (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
<!-- Insert the code where the menu SF-123456789 appears -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">重要</mark>**:** 上記のコードはサンプル埋め込みコード<mark style="color:orange;">SF-123456789</mark>を使用しています。実際のメニュー埋め込みコードに置き換えてください。
{% comment %}endhint{% endcomment %}
