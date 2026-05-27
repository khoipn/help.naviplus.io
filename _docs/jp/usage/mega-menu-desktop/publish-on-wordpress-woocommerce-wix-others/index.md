---
description: 'Shopifyにウェブサイトを展開する場合は、こちらで専用のShopifyアプリをインストールしてください: <https://apps.shopify.com/pronavi-navigation-design> - プラットフォームに最適化されています...'
lang: jp
layout: default
permalink: /jp/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/
title: Wix / Squarespace / その他での公開
---
# Wix / Squarespace / その他での公開

> **WordPressをご利用ですか？** 手動埋め込みの代わりに専用の[Naviplus Menu Builderプラグイン]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/)を使用してください — テーマの編集は不要で、ショートコードまたはGutenbergブロックを介してMega Menuを配置できます。

> **Shopifyをご利用ですか？** 専用の[Shopifyアプリ](https://apps.shopify.com/pronavi-navigation-design)をインストールしてください — プラットフォームに最適化されており、組み込みの公開オプションがあります。

このページでは、**手動スクリプト埋め込み**メソッドについて説明します。これは、[Wix](https://wix.com/ "Wix")、[Squarespace](https://www.squarespace.com/ "Squarespace")、[Webflow](https://webflow.com/ "Webflow")、[Magento](https://magento-opensource.com/ "Magento")、およびPHP、Node.js、または純粋なHTMLで構築されたカスタムウェブサイトに適しています。以下の実装方法があります：

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
<p>以下のコードは非常に軽量で、速度（最初の読み込みに約100-200ms、以降の読み込みは0ms）や顧客体験、SEOスコアに影響を与えることなく、ウェブサイトに挿入できます。</p>
</details>

<details><summary>このコードスニペットを挿入するのに最適な場所はどこですか？</summary>
<p>ヘッダーセクション（またはできるだけ早い段階）です。なぜなら、ウェブサイトはインターフェースをレンダリングするためにリソースを順次読み込むからです。HTMLコード内でNavi+を最初に配置することで、条件が満たされるとすぐにメニューが表示されるようになります。これにより、ユーザー体験が向上します。</p>
</details>

<details><summary>このコードがウェブサイトに正常に埋め込まれたかどうかをどうやって確認できますか？</summary>
<p>方法は2つあります：</p>
<p><strong>方法1（誰でも）：</strong></p>
<p>ウェブサイトを#navidebug-onのサフィックスで開きます。例えば：<a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>。ウェブサイトがデバッグモードに切り替わる場合、埋め込みは正しく機能しています。デバッグモードは、CSSセレクタを簡単に特定するのに役立ちます。#navidebug-offを使用してオフにします。</p>
<p><strong>方法2（開発者向け）：</strong></p>
<p>ブラウザの検査ツールを開き、コンソールタブに移動し、緑のメッセージ「Using Navi+..」を探します。このメッセージは、コードが正常に埋め込まれたことを示しています。</p>
</details>

***

### 2. CSSセレクタを使用してメニューを公開する（推奨）

上記のスクリプトを埋め込んだ後、Navi+アプリに移動して、メニューがページに表示される場所と方法を設定します。

#### I.1. CSSセレクタの理解

CSSセレクタは、ウェブページ上の特定のHTML要素をターゲットにする方法です。Navi+は、メニューを正確に**どこに**配置するかを知るためにこれを使用します — 要素の前または後に挿入するか、既存の要素を完全に置き換えるかです。

これを使用するために開発者である必要はありません。Navi+は、セレクタを入力するためのシンプルな入力フィールドを提供し、残りは自動的に処理します。

ウェブサイトに適切なCSSセレクタを見つけるには、次の方法を使用できます：
- [デバッグモード](/docs/usage/debug-mode-find-css-selectors/) — Navi+の組み込みツール：ページ上の任意の要素にカーソルを合わせ、そのセレクタを瞬時にコピーします。
- [ブラウザDevTools](/docs/usage/general/find-css-selector/) — ブラウザの組み込みインスペクタを使用した手動方法

#### I.2. 3つの公開オプション

ステップ1：Navi+アプリで**ウェブサイトに公開**ボタンをクリックします。

ステップ2：トグル"Publish menu by Insert/Replace method"をオンにします。

ステップ3：CSSセレクタを入力し、以下の3つの公開オプションのいずれかを選択します。

<details><summary>オプション1：前に挿入</summary>
<p>Navi+メニューを選択した要素の<strong>前</strong>に即座に挿入します。</p>
<p><strong>例：</strong> CSSセレクタ<code>main</code> → メニューがページのメインコンテンツエリアの上に表示されます。</p>
<p>このオプションの一般的なCSSセレクタ：</p>
<ul>
<li><code>main</code> — ほとんどのプラットフォームで機能します（Webflow、Magento、カスタムサイト）</li>
<li><code>#main</code> — 一部のプラットフォームおよびカスタムテーマ</li>
<li><code>.main-content</code> — 様々なプラットフォーム</li>
</ul>
<p>このリストにないですか？Navi+サポーターとチャットして即座に助けを得るか、<a href="/docs/usage/debug-mode-find-css-selectors/">デバッグモード</a>または<a href="/docs/usage/general/find-css-selector/">ブラウザDevTools</a>を使用して自分で見つけることができます。</p>
</details>

<details><summary>オプション2：後に挿入</summary>
<p>Navi+メニューを選択した要素の<strong>後</strong>に即座に挿入します。</p>
<p><strong>例：</strong> CSSセレクタ<code>header</code> → メニューがヘッダーのすぐ下に表示されます。</p>
<p>これはデスクトップMega Menuの最も一般的な設定です。</p>
<p>このオプションの一般的なCSSセレクタ：</p>
<ul>
<li><code>header</code> — ほとんどのプラットフォームで機能します</li>
<li><code>.header-wrapper</code> — 一部のプラットフォーム</li>
<li><code>.site-header</code> — 様々なプラットフォーム</li>
</ul>
<p>このリストにないですか？Navi+サポーターとチャットして即座に助けを得るか、<a href="/docs/usage/debug-mode-find-css-selectors/">デバッグモード</a>または<a href="/docs/usage/general/find-css-selector/">ブラウザDevTools</a>を使用して自分で見つけることができます。</p>
</details>

<details><summary>オプション3：置き換え</summary>
<p>選択した要素を完全にNavi+メニューで置き換えます。元の要素は非表示になり、Navi+がその場所を取ります。</p>
<p><strong>例：</strong> CSSセレクタ<code>.main-nav</code> → サイトのデフォルトナビゲーションが非表示になり、Navi+ Mega Menuに置き換えられます。</p>
<p>このオプションの一般的なCSSセレクタ：</p>
<ul>
<li><code>nav</code> — 一般的なナビゲーション要素</li>
<li><code>.main-nav</code> — 様々なプラットフォーム</li>
<li><code>.site-navigation</code> — 様々なプラットフォーム</li>
</ul>
<p><strong>注意：</strong>置き換えモードを使用する際、Navi+が読み込まれるまで元のメニューが一瞬表示されることがあります。これを防ぐためにI.4を参照してください。</p>
<p>このリストにないですか？Navi+サポーターとチャットして即座に助けを得るか、<a href="/docs/usage/debug-mode-find-css-selectors/">デバッグモード</a>または<a href="/docs/usage/general/find-css-selector/">ブラウザDevTools</a>を使用して自分で見つけることができます。</p>
</details>

#### I.3. デバイス特有のターゲティング

CSSセレクタがモバイル、デスクトップ、または両方に適用されるかを制御するには、セレクタにサフィックスを追加します：

| サフィックス | 適用先 |
|--------|------------|
| `(M)` | モバイルのみ |
| `(D)` | デスクトップのみ |
| *(なし)* | モバイルとデスクトップの両方 |

**例：**
- `header(D)` — デスクトップでのみ挿入または置き換え
- `header(M)` — モバイルでのみ挿入または置き換え
- `header` — 両方のプラットフォームで挿入または置き換え

**I.4. 重要！Mega Menuの速度とユーザー体験を最適化する（置き換えモード）**

1つのメニューを別のメニューで置き換えると、Navi+は古いメニューが表示されるまで待機し、その後すぐに新しいメニューと交換します。これはほぼ即座に行われますが、古いメニューが一瞬表示されるため、ユーザーが混乱する可能性があります。

このステップを実行することで、古いメニューを完全に隠し、代わりに読み込み効果を表示できます。これにより、ウェブサイトがより速く感じられ、ユーザー体験が向上します。Navi+は、公開設定にこのためのシンプルな組み込みオプションを提供しています — 有効にして、隠す要素のCSSセレクタを設定し、デバイス特有の制御のためにオプションの`(M)`または`(D)`サフィックスを追加します。

***

### 3. ウェブサイトの任意のポイントにNavi+メニューを挿入する

以下のコードは、異なる挿入情報（特に**埋め込みID**、例えばSF-123456789）を使用して、ウェブサイトで複数回使用できます。ウェブサイトがレンダリングされると、条件が満たされたときにコードが挿入された位置にメニューが展開され、表示されます。このメニュータイプは、Mega menu、Gridなどに適しています。

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

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">重要</mark>**:** 上記のコードはサンプル埋め込みコード<mark style="color:orange;">SF-123456789</mark>を使用しています。実際のメニュー埋め込みコードに置き換えることを確認してください。
{% comment %}endhint{% endcomment %}
