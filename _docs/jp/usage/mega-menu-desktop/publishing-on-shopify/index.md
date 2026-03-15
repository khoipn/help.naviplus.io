---
description: 'ステップ1: オンラインストアをクリックし、次にテーマをクリックします。ヒント: オンラインストアを右クリックして「新しいタブでリンクを開く」を選択すると、時間を節約できます。'
lang: jp
layout: default
permalink: /jp/docs/usage/mega-menu-desktop/publishing-on-shopify/
title: Shopifyでの公開
---
# Shopifyでの公開

### ステップ2: (Shopify) ウェブサイトにメニューを公開します。

#### **I) 方法1: このメニューをウェブサイトの特定の場所に挿入（前または後）するか、既存のメニューをCSSセレクタを使用して置き換えます。 (**&#x52;ECOMMENDED)

#### I.1. App EmbedsでNavi+をオンにする

ステップ1: オンラインストアをクリックし、次にテーマをクリックします。ヒント: オンラインストアを右クリックして「新しいタブでリンクを開く」を選択すると、時間を節約できます。&#x20;

ステップ2: メニューを公開したいテーマを選択します。  クリック: **カスタマイズ**

* ウェブサイトが新しく、まだユーザーがいない場合は、心配せずにメニューを公開できます。訪問者に影響を与えることなく、いつでも簡単にオンまたはオフにできます。
* ウェブサイトにすでに定期的なトラフィックがある場合は、より注意が必要です。最良の方法は、**複製テーマ**を作成し、そのバージョンでNavi+を最初にテストすることです。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

ステップ3: App embedsに移動し、「すべてのページでNavi+」を見つけてオンにします。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

ステップ4: 変更を適用するために「保存」をクリックするのを忘れないでください。

これらの4つのステップの後、Navi+はウェブサイトにインストールされ、表示の準備が整いました。ただし、プロセスはまだ完了していません。Navi+アプリタブに戻って、実際に**メニューを公開**をオンにします。

#### I.2. 表示設定を選択し、メニューを公開します。

ステップ1: **ウェブサイトに公開**ボタンをクリックします。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

ステップ2: トグルをオンにします "メニューを挿入/置き換え方法で公開".&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMKj8nfrhd9jdA3bXSFio%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=dd78fff1-36fb-4ce9-93e5-24d3076c170d" alt=""><figcaption></figcaption></figure>

ステップ3: 正しいCSSセレクタを選択し、置き換え/挿入方法を選択します

このガイドでは、2つの方法に焦点を当てます: ヘッダーの下にこのメニューを挿入するか、デフォルトのメガメニューを置き換えることです。この方法を使用して、他のCSSセレクタを見つけて適用し、メニューをトリガーすることもできます。

<details><summary>ウェブサイトのヘッダーの下にこのメニューを挿入する方法<strong>?</strong></summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F8qcOprJA7RFqTtJUD1PB%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=94ea06fa-2cbe-4fc8-be0b-7c5dd0864f47" alt=""><figcaption></figcaption></figure>

<p>これを行うには、ウェブサイトのヘッダーのCSSセレクタを特定し、テキストボックスに入力します。人気のあるテーマのいくつかのCSSセレクタをすでに見つけておきましたので、以下にリストします。</p>
<ol>
<li>ShopifyのDawn、Sense、Savor、Horizonなどの人気のある無料テーマのCSSセレクタ。</li>
</ol>
<pre class="codehilite"><code>header
</code></pre>

<ol>
<li>このリストにない場合でも心配しないでください</li>
</ol>
<pre class="codehilite"><code>- Navi+のサポーターとチャットして、即座に助けを得ることができます—CSSセレクタを見つけるのに数分しかかかりません。

- または、次のトピックで自己解決ガイドに従うことができます（このトピックのすぐ後）。
</code></pre>
</details>

<details><summary>デフォルトのメガメニューを置き換える方法は？</summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FWnWkPsXB1g3zZl0ejugp%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=ffaa1872-48b5-4092-a499-990a21a3abc3" alt=""><figcaption></figcaption></figure>

<p>これを行うには、ウェブサイトのヘッダーのCSSセレクタを特定し、テキストボックスに入力します。人気のあるテーマのいくつかのCSSセレクタをすでに見つけておきましたので、以下にリストします。</p>
<ol>
<li>ShopifyのDawn、Sense、Savor、Horizonなどの人気のある無料テーマのCSSセレクタ。</li>
</ol>
<pre class="codehilite"><code>.header-menu
</code></pre>

<ol>
<li>このリストにない場合でも心配しないでください</li>
</ol>
<pre class="codehilite"><code>- Navi+のサポーターとチャットして、即座に助けを得ることができます—CSSセレクタを見つけるのに数分しかかかりません。

- または、次のトピックで自己解決ガイドに従うことができます（このトピックのすぐ後）。
</code></pre>
</details>

<details><summary><strong>ウェブサイトでCSSセレクタを見つける方法は？</strong></summary>
<p>Navi+のサポーターとチャットして、即座に助けを得ることができます。自分でやる代わりに。
ただし、(1) これにより基本的なアイデアを理解するのに役立ち、(2) 自分でやりたい場合は、以下の手順に従ってください。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

**I.3. 重要! メガメニューの速度とユーザーエクスペリエンスを最適化する（置き換えモード）**

1つのメニューを別のメニューに置き換えると、Navi+は古いメニューが表示されるまで待機し、その後すぐに新しいメニューに切り替えます。これはほぼ即座に行われますが、古いメニューが表示される短い瞬間があり、これがユーザーを混乱させる可能性があります。

このステップでは、古いメニューを完全に隠し、代わりにローディング効果を表示できます。これにより、ウェブサイトがより速く感じられ、ユーザーエクスペリエンスが向上します。

<details><summary>Navi+は、ユーザーエクスペリエンスと速度を最適化するための簡単な解決策を以下の手順で提供します</summary>
<h4>なぜこれを行う必要があるのですか？Navi+はすでに速くないですか？</h4>
<p>Navi+は非常に速いです。非常に低いレイテンシ（約100ms）で主要なCDNに完全に展開されており、数百万の顧客に対しても遅くなることはありません。</p>
<p>ただし、Navi+はShopifyエコシステム内で動作しています。Shopifyには独自の読み込みルールがあります:</p>
<ol>
<li>Shopifyは自社のリソースを最初に読み込むことを優先します。</li>
<li>次にShopifyはテーマコンテンツを読み込みます。</li>
<li>最後にShopifyはアプリコンテンツを読み込みますが、特定の順序ではありません。</li>
</ol>
<p>これは、複数のアプリを使用している場合、Navi+が予想よりも遅れて読み込まれることがあることを意味します。これが特定のケースで遅く感じられる理由です。</p>
<hr />
<h3>私の解決策は何ですか？</h3>
<p>現在、Navi+はShopifyウェブサイトでの読み込み時に高い優先度を持っています。ただし、まだ一定の遅延があります。これらの問題を1つずつここで対処します:</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

<p>注意:</p>
<ul>
<li>モバイル専用に適用したい場合は、接尾辞<strong>(M)</strong>を追加します。</li>
<li>デスクトップ専用に適用したい場合は、接尾辞<strong>(D)</strong>を追加します。</li>
<li>両方のプラットフォームに適用したい場合は、接尾辞を追加しません。</li>
</ul>
</details>


#### **II) 方法2: このメニューをShopifyテーマのセクション/ブロックとして追加する**

この方法では、Shopifyテーマにブロック/セクションを追加することでメニューを挿入します。これは従来のアプローチであるため、詳細には説明しません。この方法では、方法1のステップ1で必要なように**「App EmbedsでNavi+をオンにする」**必要すらありません。

このメニューの埋め込みIDをコピーし、テーマセクションの"Navi+ on Section"という名前のブロックに挿入します。追加後にタイトルを追加し、全幅を設定し、このセクションのマージンを調整できます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FO2uavUwCekKwBVqvtJrt%2FMargin-padding%201.1.png?alt=media&#x26;token=35261670-ad9b-445f-9730-b10be40e406e" alt=""><figcaption></figcaption></figure>

<details><summary>Shopifyテーマにこのメニューをセクション/ブロックとして追加するためのガイド</summary>
<p>以下は、Navi+メニューをShopifyテーマにセクション/ブロックとして挿入するための詳細なガイドです。この方法では、標準的でShopifyがサポートする方法でメニューを追加できますが、Navi+が提供する他の方法ほど柔軟ではありません。</p>
<p>この方法は<strong>メガメニュー</strong>と<strong>グリッドメニュー</strong>に適用されます。<strong>Tabbar</strong>、<strong>FAB</strong>、または<strong>Slide Menus</strong>には<strong>適用されません</strong>。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcdnKqInMqe14B9NBOTqr%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=dcac5183-9433-4a11-bf2e-6508101ab089" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FF5RAjnmtKv4kXRhIMxaV%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=8eb3748c-16c6-4508-aebe-781d00c2a8d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F1ss5KONiPDSu0AphvToH%2FHelp.MenuTree.1.1.9.png.png?alt=media&#x26;token=395e460a-f275-4642-9a86-41f996ea87f5" alt=""><figcaption></figcaption></figure>
</details>
