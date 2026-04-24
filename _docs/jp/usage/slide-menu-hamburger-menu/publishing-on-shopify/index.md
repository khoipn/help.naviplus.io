---
description: 'ステップ1: オンラインストアをクリックし、次にテーマをクリックします。ヒント: オンラインストアを右クリックして「新しいタブでリンクを開く」を選択すると、時間を節約できます。'
lang: jp
layout: default
permalink: /jp/docs/usage/slide-menu-hamburger-menu/publishing-on-shopify/
title: Shopifyでの公開
---
# Shopifyでの公開

### ステップ2: (Shopify) ウェブサイトにメニューを公開します。

#### 2.1. アプリ埋め込みでNavi+をオンにする

ステップ1: オンラインストアをクリックし、次にテーマをクリックします。ヒント: オンラインストアを右クリックして「新しいタブでリンクを開く」を選択すると、時間を節約できます。

ステップ2: メニューを公開したいテーマを選択します。  クリック: **カスタマイズ**

* あなたのウェブサイトが新しく、まだユーザーがいない場合は、心配せずにメニューを公開してください—訪問者に影響を与えることなく、いつでも簡単にオンまたはオフにできます。
* あなたのウェブサイトにすでに定期的なトラフィックがある場合は、より注意が必要です。最良の方法は、**複製テーマ**を作成し、そのバージョンでNavi+を最初にテストすることです。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

ステップ3: アプリ埋め込みに移動し、「すべてのページでNavi+」を見つけてオンにします。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

ステップ4: 変更を適用するために「保存」をクリックするのを忘れないでください。

これらの4つのステップの後、Navi+はあなたのウェブサイトにインストールされ、表示の準備が整いました。しかし、プロセスはまだ完了していません。Navi+アプリタブに戻って、実際に**メニューを公開**をオンにしてください。

#### 2.2. 表示設定を選択し、メニューを公開します。

ステップ1: **ウェブサイトに公開**ボタンをクリックします。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

ステップ2: トグルをオンにします "メニューを公開（ユーザーによって開かれたときのみ表示）"。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FhSDziWrg4Jxr9bZ9jB4j%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=3c39339c-fe75-4653-86e7-411318cf506d" alt=""><figcaption></figcaption></figure>

ステップ3: 表示方法を選択します

**方法1: 別のNavi+メニュー項目からこのメニューをopen:NaviMenu構文を使用して開く**

この方法では、ユーザーが別のNavi+メニューからメニュー項目をクリックまたはタップしたときにスライドメニューを開くことができます（例えば: タブバー、画面の隅にあるFAB、またはメガメニュー）。この方法の主な目的は:

<details><summary>目的1: スライドメニューでフルサイトマップを表示しながら、アクセスしやすさを維持することで、可視性とユーザー体験を向上させる。</summary>
<p>スライドメニューは、その大きなスペースと柔軟なレイアウトのおかげで、フルサイトマップを表示するのに理想的で、製品カタログ全体、主要ページへのリンク、ブログ、サポートツールなどを表示するのに最適です。しかし、スライドメニューはデフォルトではあまり目立たないことがよくあります。発見可能性を向上させるために、別のNavi+メニュー（タブバーなど）を使用して、最も重要で認識しやすいリンクを提示し、スライドメニューをトリガーするハイライトされたメニュー項目を配置できます。これにより、スライドメニューの可視性とユーザーエンゲージメントが向上します。</p>
</details>

<details><summary>目的2: <strong>無限のメニュー深度と大きく柔軟なメニュー構造（Navi+のみ）</strong></summary>
<p>メニュー項目がクリックされたときに限られたスペースのポップアップを表示する代わりに、3レベルの別のスライドメニューを開くことができます。これは他のメニュー項目や同じスライドメニューに対して繰り返すことができ、Navi+メニューの深度を事実上無限に作成できます。</p>
</details>

**方法2: UI要素（#id_of_elementや.class_nameなどのCSSセレクタで定義される）がクリックまたはタップされたときに、このメニューが表示されます。**

これはスライドメニューで最も一般的に使用される方法です。\
このガイドでは、モバイルでのウェブサイトのデフォルトのハンバーガーメニューを置き換えることに焦点を当てます。\
他のCSSセレクタを見つけてメニューをトリガーすることで、この方法を創造的に適用することもできます。

<details><summary>ウェブサイトのデフォルトのハンバーガーメニューをNavi+スライドメニューに置き換える方法（<strong>人気のガイド）?</strong></summary>
<p>ほとんどのShopifyウェブサイトでは、デフォルトのハンバーガーメニューはレスポンシブデザインを介してデスクトップバージョンから生成されます。その結果、通常は非常にシンプルで、深度が浅く、アイコン、画像、または高度なレイアウトのサポートがありません。Navi+スライドメニューに置き換えることは、Navi+の高度な機能を活用するための一般的で実用的な選択です。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIB9UqVXh9bL1z4AuHAQj%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=1bef8174-8a59-4765-b2ea-e669c1d12fd6" alt=""><figcaption></figcaption></figure>

<p>これを行うには、ウェブサイトのハンバーガーメニューアイコンのCSSセレクタを特定し、それをテキストボックスに入力します。私たちはすでに、以下にリストされた人気のあるテーマのCSSセレクタを見つけました。</p>
<ol>
<li>ShopifyのDawn、Sense、Savor、Horizonなどの人気のある無料テーマのCSSセレクタ。</li>
</ol>
<pre class="codehilite"><code>#Details-menu-drawer-container 
</code></pre>

<ol>
<li>このリストにない場合は、心配しないでください。</li>
</ol>
<pre class="codehilite"><code>- Navi+サポーターとチャットして、CSSセレクタを見つけるための即時サポートを受けることができます—これには数分しかかかりません。

- または、次のトピックで自己支援ガイドに従うことができます（このトピックのすぐ後）。
</code></pre>
</details>

<details><summary><strong>ウェブサイトでCSSセレクタを見つける方法は？</strong></summary>
<p>Navi+サポーターとチャットして、即時サポートを受けることができますが、（1）これによりコアアイデアを理解するのに役立ち、（2）自分で行いたい場合は、以下の手順に従ってください。</p>
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

<p>質問は具体的で自己完結的であり、自然言語で書かれている必要があります。
回答には質問への直接的な回答と、ドキュメントからの関連する抜粋や情報源が含まれます。</p>
<p>現在のページに明示的に存在しない回答が必要な場合、明確化や追加のコンテキストが必要な場合、または関連するドキュメントセクションを取得したい場合は、このメカニズムを使用してください。</p>
</details>

#### 2.3. 重要! スライドメニューの速度を最適化し、ローディング効果を追加し、重複メニューを防ぐ

これはすぐに修正する必要があるものではありませんが、長期的にはNavi+によって作成されたスライドメニューの体験にとって重要です。Navi+が古いスライドメニューを完全に置き換える前に、テーマの元のメニューはまだアクティブです。短い間—約半秒—ユーザーがメニューを読み込み、ハンバーガーボタンを素早くタップした場合（稀なケースですが、可能性はあります）、古いテーマメニューが表示され、視覚的なグリッチを引き起こす可能性があります。

<details><summary>Navi+は、ユーザー体験と速度を最適化するための簡単な解決策を提供します。</summary>
<p><strong>なぜこれを行う必要があるのですか？Navi+はすでに速くないですか？</strong></p>
<p>Navi+は非常に速いです。非常に低いレイテンシ（約100ms）で主要なCDNに完全に展開されており、数百万の顧客に対しても遅くなることはありません。</p>
<p>しかし、Navi+はShopifyエコシステム内で動作しています。Shopifyには独自の読み込みルールがあります:</p>
<ol>
<li>Shopifyは自社のリソースを最初に読み込むことを優先します。</li>
<li>次にShopifyはテーマコンテンツを読み込みます。</li>
<li>最後にShopifyはアプリコンテンツを読み込みますが、特定の順序ではありません。</li>
</ol>
<p>これは、複数のアプリを使用している場合、Navi+が期待よりも遅れて読み込まれることがあることを意味します。だからこそ、特定のケースでは遅く感じることがあります。</p>
<hr />
<h4>私の解決策は何ですか？</h4>
<p>現在、Navi+はShopifyウェブサイトでの読み込み時に高い優先度を持っています。しかし、まだ一定の遅延があります。これらの問題を一つずつここで対処します:</p>
<p><strong>スライドメニュー: ローディング効果を追加し、トリガーセレクタをロックします。</strong></p>
<p>非常に簡単です: スライドメニューに使用するCSSセレクタをNavi+アプリの埋め込みセクションに入力するだけです（下の画像を参照）。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

<p>注意:</p>
<ul>
<li>モバイルのみに適用したい場合は、接尾辞<strong>(M)</strong>を追加します。</li>
<li>デスクトップのみに適用したい場合は、接尾辞<strong>(D)</strong>を追加します。</li>
<li>両方のプラットフォームに適用したい場合は、接尾辞を追加しません。</li>
</ul>
</details>
