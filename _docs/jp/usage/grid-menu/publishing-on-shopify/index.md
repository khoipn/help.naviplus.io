---
description: 'ステップ1: オンラインストアをクリックし、次にテーマをクリックします。ヒント: オンラインストアを右クリックして「新しいタブでリンクを開く」を選択すると、時間を節約できます。'
lang: jp
layout: default
permalink: /jp/docs/usage/grid-menu/publishing-on-shopify/
title: Shopifyでの公開
---
# Shopifyでの公開

### ステップ2: (Shopify) ウェブサイトにメニューを公開します。

#### **I) 方法1: このメニューをウェブサイトの特定の場所に挿入（前または後）するか、既存のメニューを置き換え、CSSセレクターを使用します。 (**&#x52;ECOMMENDED)

#### I.1. App EmbedsでNavi+をオンにする

ステップ1: オンラインストアをクリックし、次にテーマをクリックします。ヒント: オンラインストアを右クリックして「新しいタブでリンクを開く」を選択すると、時間を節約できます。

ステップ2: メニューを公開したいテーマを選択します。  クリック: **カスタマイズ**

* あなたのウェブサイトが新しく、まだユーザーがいない場合は、心配せずにメニューを公開してください—訪問者に影響を与えることなく、いつでも簡単にオンまたはオフにできます。
* あなたのウェブサイトにすでに定期的なトラフィックがある場合は、より注意が必要です。最良の方法は、**複製テーマ**を作成し、そのバージョンでNavi+を最初にテストすることです。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

ステップ3: App embedsに移動し、「すべてのページでNavi+」を見つけてオンにします。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

ステップ4: 変更を適用するために「保存」をクリックするのを忘れないでください。

これらの4つのステップの後、Navi+はあなたのウェブサイトにインストールされ、表示の準備が整いました。しかし、プロセスはまだ完了していません。Navi+アプリタブに戻って、実際に**メニューを公開**をオンにしてください。

#### I.2. 表示設定を選択し、メニューを公開します。

ステップ1: **ウェブサイトに公開**ボタンをクリックします。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

ステップ2: トグルをオンにします "挿入/置き換え方法でメニューを公開"。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMKj8nfrhd9jdA3bXSFio%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=dd78fff1-36fb-4ce9-93e5-24d3076c170d" alt=""><figcaption></figcaption></figure>

ステップ3: 正しいCSSセレクターを選択し、置き換え/挿入方法を選択します

このガイドでは、1つの方法に焦点を当てます: このメニューをメインの前に挿入します。この方法を使用して、他のCSSセレクターを見つけて適用し、メニューをトリガーすることもできます。

<details><summary>このメニューをウェブサイトのメインの前に挿入する方法<strong>?</strong></summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FFdsoRiQZP0I26RofqljL%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=51fec431-31e7-4bce-8c22-50a84664ee65" alt=""><figcaption></figcaption></figure>

<p>これを行うには、単にウェブサイトのヘッダーのCSSセレクターを特定し、テキストボックスに入力します。私たちはすでに、あなたのためにいくつかの最も人気のあるテーマのCSSセレクターを見つけました。以下にリストされています。</p>
<ol>
<li>ShopifyのDawn、Sense、Savor、Horizonなどの人気のある無料テーマのCSSセレクター。</li>
</ol>
<pre class="codehilite"><code>main
</code></pre>

<ol>
<li>このリストにない場合は、心配しないでください</li>
</ol>
<pre class="codehilite"><code>- Navi+サポーターとチャットして、CSSセレクターを見つけるための即時サポートを受けることができます—これには数分しかかかりません。

- または、次のトピックで自己支援ガイドに従うことができます（このトピックのすぐ後）。
</code></pre>
</details>

<details><summary>デフォルトのグリッドメニューを置き換える方法は？</summary>
<p>モバイルでは、置き換えるグリッドメニューがないため、この方法は通常実行可能ではありません</p>
</details>

<details><summary><strong>ウェブサイトでCSSセレクターを見つける方法は？</strong></summary>
<p>Navi+サポーターとチャットして、即時サポートを受けることができますが、(1) これによりコアアイデアを理解するのに役立ち、(2) 自分で行いたい場合は、以下の指示に従ってください。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>

<hr />
<h1>エージェントの指示: このドキュメントを照会する</h1>
<p>このページに直接利用できない追加情報が必要な場合は、質問をしてドキュメントを動的に照会できます。</p>
<p>現在のページURLに対してHTTP GETリクエストを実行し、<code>ask</code>クエリパラメータを追加します:</p>
<pre class="codehilite"><code>GET https://help.shopifas.com/manual/internal/what-is/common/how-to-find-css-selector.md?ask=&lt;question&gt;
</code></pre>

<p>質問は具体的で、自己完結しており、自然言語で書かれている必要があります。
回答には、質問への直接的な回答と、ドキュメントからの関連する抜粋や情報源が含まれます。</p>
<p>現在のページに明示的に存在しない回答が必要な場合、明確化や追加のコンテキストが必要な場合、または関連するドキュメントセクションを取得したい場合にこのメカニズムを使用してください。</p>
</details>

#### **II) 方法2: このメニューをShopifyテーマにセクション/ブロックとして追加する**

この方法は、Shopifyテーマにブロック/セクションを追加することによってメニューを挿入します。これは従来のアプローチであるため、詳細には説明しません。この方法では、方法1のステップ1で必要なように**「App EmbedsでNavi+をオンにする」**必要すらありません。

このメニューの埋め込みIDをコピーし、テーマセクションの"Navi+ on Section"という名前のブロックに挿入します。追加後にタイトルを追加し、全幅を設定し、このセクションのマージンを調整できます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FO2uavUwCekKwBVqvtJrt%2FMargin-padding%201.1.png?alt=media&#x26;token=35261670-ad9b-445f-9730-b10be40e406e" alt=""><figcaption></figcaption></figure>

<details><summary>Shopifyテーマにこのメニューをセクション/ブロックとして追加するガイド</summary>
<p>以下は、ShopifyテーマにNavi+メニューをセクション/ブロックとして挿入するための詳細なガイドです。この方法では、標準のShopifyサポート方式でメニューを追加できますが、Navi+が提供する他の方法ほど柔軟ではありません。</p>
<p>この方法は<strong>メガメニュー</strong>と<strong>グリッドメニュー</strong>に適用されます。<strong>タブバー</strong>、<strong>FAB</strong>、または<strong>スライドメニュー</strong>には適用されません。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcdnKqInMqe14B9NBOTqr%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=dcac5183-9433-4a11-bf2e-6508101ab089" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FF5RAjnmtKv4kXRhIMxaV%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=8eb3748c-16c6-4508-aebe-781d00c2a8d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F1ss5KONiPDSu0AphvToH%2FHelp.MenuTree.1.1.9.png.png?alt=media&#x26;token=395e460a-f275-4642-9a86-41f996ea87f5" alt=""><figcaption></figcaption></figure>

<hr />
<h1>エージェントの指示: このドキュメントを照会する</h1>
<p>このページに直接利用できない追加情報が必要な場合は、質問をしてドキュメントを動的に照会できます。</p>
<p>現在のページURLに対してHTTP GETリクエストを実行し、<code>ask</code>クエリパラメータを追加します:</p>
<pre class="codehilite"><code>GET https://help.shopifas.com/manual/internal/what-is/common/how-to-add-this-menu-as-a-section-block-in-the-shopify-theme.md?ask=&lt;question&gt;
</code></pre>

<p>質問は具体的で、自己完結しており、自然言語で書かれている必要があります。
回答には、質問への直接的な回答と、ドキュメントからの関連する抜粋や情報源が含まれます。</p>
<p>現在のページに明示的に存在しない回答が必要な場合、明確化や追加のコンテキストが必要な場合、または関連するドキュメントセクションを取得したい場合にこのメカニズムを使用してください。</p>
</details>
