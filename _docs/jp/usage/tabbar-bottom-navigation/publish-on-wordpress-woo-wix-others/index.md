---
description: 'Shopify にウェブサイトをデプロイしている場合は、こちらで専用の Shopify アプリをインストールしてください: <https://apps.shopify.com/pronavi-navigation-design> - 最適化されています...'
lang: jp
layout: default
permalink: /jp/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/
title: Squarespace / その他で公開
---
# Squarespace / その他で公開

> **WordPress をご利用ですか？** 下記の手動埋め込みの代わりに、専用の [Naviplus Menu Builder プラグイン]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/) をご使用ください — テーマの編集が不要で、タブバー用のショートコードも必要ありません。

> **Shopify をご利用ですか？** 専用の [Shopify アプリ](https://apps.shopify.com/pronavi-navigation-design) をインストールしてください — プラットフォームに最適化されており、組み込みの公開オプションが利用できます。

> **Wix をご利用ですか？** 専用の [Wix で公開]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publishing-on-wix/) ガイドをご覧ください — Wix App Market から Navi+ アプリをインストールすると、自動的に埋め込まれます、コード不要。以下の手動埋め込みは Squarespace、Webflow、およびカスタムサイトのみです。

このページでは、**手動スクリプト埋め込み** 方法について説明しています。この方法は、[Squarespace](https://www.squarespace.com/ "Squarespace")、[Webflow](https://webflow.com/ "Webflow")、[Magento](https://magento-opensource.com/ "Magento")、および PHP、Node.js、または純粋な HTML で構築されたカスタムウェブサイトに適しています。以下の実装方法があります:

### 1. ウェブサイトに Navi+ を埋め込む

この実装方法は、Navi+ が現在サポートしているすべてのメニュータイプに適しています。タブバー、メガメニュー、スライドメニュー、FAB、グリッドメニューなどが含まれます。このコードは、すべてのメニューに対して 1 回だけ使用する必要があります。

```html
<!-- ウェブサイトの <head> にこのコードを挿入してください。(c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- ウェブサイトの <head> にこのコードを挿入してください -->
```

### よくある質問 (FAQ)

<details><summary>トークンとは何ですか？</summary>
<p>各 Navi+ アカウントには一意のトークンが割り当てられています。このトークンはアプリケーションのヘッダーから直接表示およびコピーできます。トークンはメニューを安全に公開するために使用されます。</p>
</details>

<details><summary>https://live.naviplus.app/start.js とは何ですか？</summary>
<p>これは Navi+ の固定 URL で、アプリケーションの初期化ロジックを含みます。スクリプトは軽量（約 4KB）で、ほとんどのデバイスやネットワーク条件で迅速に読み込めます。Cloudflare と BunnyCDN 経由で配信され、安定したグローバルパフォーマンスと最新ブラウザとの確実な互換性を提供します。</p>
<p>非同期読み込み方法を使用することで、ウェブサイトの読み込みプロセスに影響を与えません。</p>
</details>

<details><summary>この埋め込みコードはウェブサイトを遅くしますか？</summary>
<p>下記のコードは非常に軽量で、速度（最初の読み込みに約 100～200ms、その後の読み込みは 0ms）、顧客体験、または SEO スコアに影響を与えることなく、ウェブサイトに挿入できます。</p>
</details>

<details><summary>このコードスニペットを挿入するのに最適な場所はどこですか？</summary>
<p>ヘッダーセクション（またはできるだけ早い段階）です。理由は、ウェブサイトはインターフェースをレンダリングするためにリソースを順序良く読み込むからです。HTML コード内で Navi+ を最初に配置することで、条件が満たされたらすぐにメニューを表示できるようになります。これによりユーザー体験が向上します。</p>
</details>

<details><summary>このコードがウェブサイトに正常に埋め込まれたかどうかを確認するにはどうしたらよいですか？</summary>
<p>2 つの方法があります:</p>
<p><strong>方法 1（全員向け）:</strong></p>
<p>ウェブサイトにサフィックス #navidebug-on を付けて開きます。例: <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>。ウェブサイトがデバッグモードに切り替わった場合、埋め込みは正しく機能しています。デバッグモードは CSS セレクタを簡単に特定するのに役立ちます。#navidebug-off を使用してオフにします。</p>
<p><strong>方法 2（開発者向け）:</strong></p>
<p>ブラウザの検査ツールを開き、コンソールタブに移動します。緑色のメッセージ「Using Navi+..」を探してください。このメッセージはコードが正常に埋め込まれたことを示しています。</p>
</details>

***

### 2. ウェブサイトの任意の位置に Navi+ メニューを挿入する

下記のコードは、異なる挿入情報（特に **埋め込み ID**、例: SF-123456789）を使用して、ウェブサイトで複数回使用できます。ウェブサイトがレンダリングされるとき、条件が満たされると、コードが挿入された位置にメニューが展開されて表示されます。このメニュータイプは Mega メニュー、グリッドメニューなどに適しています。

```html
<!-- メニュー SF-123456789 が表示される位置にこのコードを挿入してください。(c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- メニュー SF-123456789 が表示される位置にこのコードを挿入してください -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">重要</mark>**:** 上記のコードではサンプル埋め込みコード <mark style="color:orange;">SF-123456789</mark> を使用しています。実際のメニュー埋め込みコードに置き換えてください。
{% comment %}endhint{% endcomment %}
