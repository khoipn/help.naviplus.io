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

ステップ1: オンラインストアをクリックし、次にテーマをクリックします。ヒント: オンラインストアを右クリックして「新しいタブでリンクを開く」を選択すると、時間を節約できます。

ステップ2: メニューを公開したいテーマを選択します。  クリック: **カスタマイズ**

* あなたのウェブサイトが新しく、まだユーザーがいない場合は、心配せずにメニューを公開してください—訪問者に影響を与えることなく、いつでも簡単にオンまたはオフにできます。
* あなたのウェブサイトにすでに定期的なトラフィックがある場合は、より注意が必要です。最良の方法は、**複製テーマ**を作成し、そのバージョンでNavi+を最初にテストすることです。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

ステップ3: App embedsに移動し、「すべてのページでNavi+」を見つけてオンにします。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

ステップ4: 変更を適用するために「保存」をクリックするのを忘れないでください。

これらの4つのステップの後、Navi+はあなたのウェブサイトにインストールされ、表示の準備が整いました。しかし、プロセスはまだ完了していません。Navi+アプリタブに戻って、実際に**メニューを公開**をオンにしてください。

#### I.2. CSSセレクタの理解

CSSセレクタは、ウェブページ上の特定のHTML要素をターゲットにする方法です。Navi+は、メニューを正確に**どこに**配置するかを知るためにこれを使用します—要素の前または後に挿入するか、既存のものを完全に置き換えるかです。

あなたのウェブサイトに適したCSSセレクタを見つけるには、次の方法を使用できます:
- [デバッグモード](/docs/usage/debug-mode-find-css-selectors/) — Navi+の組み込みツール: 任意の要素にカーソルを合わせて、そのセレクタを瞬時にコピー
- [ブラウザDevTools](/docs/usage/general/find-css-selector/) — ブラウザのインスペクタを使用した手動方法

<details><summary><strong>ブラウザDevToolsを使用してCSSセレクタを見つける方法</strong></summary>
<p>Navi+のサポーターとチャットして、自己解決する代わりに即座に助けを得ることができます。しかし、自分でやりたい場合は、以下のスクリーンショットに従ってください。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### I.3. 三つの公開オプション

ステップ1: **ウェブサイトに公開**ボタンをクリックします。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

ステップ2: トグルをオンにします "Insert/Replace methodでメニューを公開"。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMKj8nfrhd9jdA3bXSFio%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=dd78fff1-36fb-4ce9-93e5-24d3076c170d" alt=""><figcaption></figcaption></figure>

ステップ3: CSSセレクタを入力し、以下の三つの公開オプションのいずれかを選択します。

<details><summary>オプション1: 前に挿入</summary>
<p>Navi+メニューを選択した要素の<strong>前</strong>に即座に挿入します。</p>
<p><strong>例:</strong> CSSセレクタ <code>main</code> → メニューはページのメインコンテンツエリアの上に表示されます。</p>
<p>Shopifyテーマ（Dawn、Sense、Savor、Horizon）用の一般的なCSSセレクタ:</p>
<ul>
<li><code>main</code> — ほとんどのShopifyテーマ</li>
<li><code>#MainContent</code> — Shopify Dawnテーマ</li>
</ul>
<p>このリストにないですか？Navi+のサポーターとチャットするか、<a href="/docs/usage/debug-mode-find-css-selectors/">デバッグモード</a>または<a href="/docs/usage/general/find-css-selector/">ブラウザDevTools</a>を使用してください。</p>
</details>

<details><summary>オプション2: 後に挿入（デスクトップのMega Menuに最も一般的）</summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F8qcOprJA7RFqTtJUD1PB%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=94ea06fa-2cbe-4fc8-be0b-7c5dd0864f47" alt=""><figcaption></figcaption></figure>
<p>Navi+メニューを選択した要素の<strong>後</strong>に即座に挿入します。</p>
<p><strong>例:</strong> CSSセレクタ <code>header</code> → メニューはヘッダーのすぐ下に表示されます。</p>
<p>Shopifyテーマ（Dawn、Sense、Savor、Horizon）用の一般的なCSSセレクタ:</p>
<ul>
<li><code>header</code> — ほとんどのShopifyテーマ</li>
<li><code>.header-wrapper</code> — 一部のテーマ</li>
<li><code>.announcement-bar</code> — メニューをアナウンスバーのすぐ下に配置します</li>
</ul>
<p>このリストにないですか？Navi+のサポーターとチャットするか、<a href="/docs/usage/debug-mode-find-css-selectors/">デバッグモード</a>または<a href="/docs/usage/general/find-css-selector/">ブラウザDevTools</a>を使用してください。</p>
</details>

<details><summary>オプション3: 置き換え</summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FWnWkPsXB1g3zZl0ejugp%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=ffaa1872-48b5-4092-a499-990a21a3abc3" alt=""><figcaption></figcaption></figure>
<p>選択した要素をNavi+メニューで完全に置き換えます。元の要素は隠され、Navi+がその場所を取ります。</p>
<p><strong>例:</strong> CSSセレクタ <code>.header-menu</code> → テーマのデフォルトナビゲーションがあなたのNavi+ Mega Menuに置き換えられます。</p>
<p>Shopifyテーマ（Dawn、Sense、Savor、Horizon）用の一般的なCSSセレクタ:</p>
<ul>
<li><code>.header-menu</code> — Shopify Dawnテーマ</li>
<li><code>.header__menu</code> — 一部のテーマ</li>
</ul>
<p><strong>注意:</strong> Navi+が読み込まれる間、元のメニューが一瞬表示されることがあります。これを防ぐためにI.5を参照してください。</p>
<p>このリストにないですか？Navi+のサポーターとチャットするか、<a href="/docs/usage/debug-mode-find-css-selectors/">デバッグモード</a>または<a href="/docs/usage/general/find-css-selector/">ブラウザDevTools</a>を使用してください。</p>
</details>

#### I.4. デバイス特有のターゲティング

CSSセレクタがモバイル、デスクトップ、または両方に適用されるかを制御するには、サフィックスを追加します:

| サフィックス | 適用対象 |
|--------|------------|
| `(M)` | モバイルのみ |
| `(D)` | デスクトップのみ |
| *(なし)* | モバイルとデスクトップの両方 |

**例:** `header(D)` — デスクトップのみ · `header(M)` — モバイルのみ · `header` — 両方のプラットフォーム。

**I.5. 重要! Mega Menuの速度とユーザー体験を最適化する（置き換えモード）**

一つのメニューを別のメニューに置き換えると、Navi+は古いメニューが表示されるまで待機し、その後すぐに新しいメニューと交換します。これはほぼ即座に行われますが、古いメニューが表示される一瞬の間があり、ユーザーを混乱させる可能性があります。

このステップでは、古いメニューを完全に隠し、代わりにローディング効果を表示できます。これにより、ウェブサイトがより速く感じられ、ユーザー体験が向上します。

<details><summary>Navi+はユーザー体験と速度を最適化するための簡単な解決策を以下のステップで提供します</summary>
<p><strong>なぜこれをする必要がありますか？Navi+はすでに速くないですか？</strong></p>
<p>Navi+は非常に速いです。非常に低いレイテンシ（約100ms）で主要なCDNに完全に展開されており、数百万の顧客に対しても遅くなりません。</p>
<p>しかし、Navi+はShopifyエコシステム内で動作しています。Shopifyには独自の読み込みルールがあります:</p>
<ol>
<li>Shopifyは自社のリソースの読み込みを最優先します。</li>
<li>次にShopifyはテーマコンテンツを読み込みます。</li>
<li>最後にShopifyはアプリコンテンツを読み込みますが、特定の順序ではありません。</li>
</ol>
<p>これは、複数のアプリを使用している場合、Navi+が予想よりも遅れて読み込まれることがあることを意味します。だからこそ、特定のケースでは遅く感じることがあります。</p>
<hr />
<h4>私の解決策は何ですか？</h4>
<p>現在、Navi+はShopifyウェブサイトでの読み込み時に高い優先度を持っています。しかし、まだ一定の遅延があります。ここでこれらの問題を一つずつ解決していきます:</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

<p>注意:</p>
<ul>
<li>モバイルのみに適用したい場合は、サフィックス<strong>(M)</strong>を追加してください。</li>
<li>デスクトップのみに適用したい場合は、サフィックス<strong>(D)</strong>を追加してください。</li>
<li>両方のプラットフォームに適用したい場合は、サフィックスを残さないでください。</li>
</ul>
</details>


#### **II) 方法2: このメニューをShopifyテーマのセクション/ブロックとして追加する**

この方法では、Shopifyテーマにブロック/セクションを追加することでメニューを挿入します。これは従来のアプローチなので、詳細には説明しません。この方法では、方法1のステップ1で必要なように**「App EmbedsでNavi+をオンにする」**必要すらありません。

このメニューの埋め込みIDをコピーし、テーマセクションの"Navi+ on Section"という名前のブロックに挿入します。追加後にタイトルを追加し、全幅を設定し、このセクションのマージンを調整できます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FO2uavUwCekKwBVqvtJrt%2FMargin-padding%201.1.png?alt=media&#x26;token=35261670-ad9b-445f-9730-b10be40e406e" alt=""><figcaption></figcaption></figure>

<details><summary>Shopifyテーマにこのメニューをセクション/ブロックとして追加するためのガイド</summary>
<p>以下は、ShopifyテーマにNavi+メニューをセクション/ブロックとして挿入するための詳細なガイドです。この方法では、標準のShopifyサポート方式でメニューを追加できますが、Navi+が提供する他の方法ほど柔軟ではありません。</p>
<p>この方法は<strong>Mega Menus</strong>および<strong>Grid Menus</strong>に適用されます。<strong>Tabbar</strong>、<strong>FAB</strong>、または<strong>Slide Menus</strong>には<strong>適用されません</strong>。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcdnKqInMqe14B9NBOTqr%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=dcac5183-9433-4a11-bf2e-6508101ab089" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FF5RAjnmtKv4kXRhIMxaV%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=8eb3748c-16c6-4508-aebe-781d00c2a8d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F1ss5KONiPDSu0AphvToH%2FHelp.MenuTree.1.1.9.png.png?alt=media&#x26;token=395e460a-f275-4642-9a86-41f996ea87f5" alt=""><figcaption></figcaption></figure>
</details>
