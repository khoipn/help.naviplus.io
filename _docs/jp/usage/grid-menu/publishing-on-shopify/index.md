---
description: 'ステップ1: オンラインストアをクリックし、次にテーマをクリックします。ヒント: オンラインストアを右クリックして、"新しいタブでリンクを開く"を選択すると、時間を節約できます。'
lang: jp
layout: default
permalink: /jp/docs/usage/grid-menu/publishing-on-shopify/
title: Shopifyでの公開
---
# Shopifyでの公開

### ステップ2: (Shopify) ウェブサイトにメニューを公開します。

#### **I) 方法1: このメニューをウェブサイトの特定の場所に挿入（前または後）するか、既存のメニューをCSSセレクターを使用して置き換えます。 (**&#x52;ECOMMENDED)

#### I.1. アプリ埋め込みでNavi+をオンにする

ステップ1: オンラインストアをクリックし、次にテーマをクリックします。ヒント: オンラインストアを右クリックして、"新しいタブでリンクを開く"を選択すると、時間を節約できます。

ステップ2: メニューを公開したいテーマを選択します。クリック: **カスタマイズ**

* ウェブサイトが新しく、まだユーザーがいない場合は、心配せずにメニューを公開できます—訪問者に影響を与えることなく、いつでも簡単にオンまたはオフにできます。
* ウェブサイトにすでに定期的なトラフィックがある場合は、より注意が必要です。最良の方法は、**複製テーマ**を作成し、そのバージョンでNavi+を最初にテストすることです。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

ステップ3: アプリ埋め込みに移動し、"すべてのページでNavi+"を見つけてオンにします。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

ステップ4: 変更を適用するために"保存"をクリックするのを忘れないでください。

これらの4つのステップの後、Navi+はウェブサイトにインストールされ、表示の準備が整いました。ただし、プロセスはまだ完了していません。Navi+アプリタブに戻って、実際に**メニューを公開**をオンにします。

#### I.2. CSSセレクターの理解

CSSセレクターは、ウェブページ上の特定のHTML要素をターゲットにする方法です。Navi+は、メニューを正確に**どこに**配置するかを知るためにこれを使用します—要素の前または後に挿入するか、既存のものを完全に置き換えるかです。

ウェブサイトに適切なCSSセレクターを見つけるには、次の方法を使用できます:
- [デバッグモード](/docs/usage/debug-mode-find-css-selectors/) — Navi+の組み込みツール: 任意の要素にカーソルを合わせて、そのセレクターを瞬時にコピー
- [ブラウザDevTools](/docs/usage/general/find-css-selector/) — ブラウザのインスペクターを使用した手動方法

<details><summary><strong>ブラウザDevToolsを使用してCSSセレクターを見つける方法</strong></summary>
<p>Navi+のサポーターとチャットして、自己解決する代わりに即座に助けを得ることができます。ただし、自分でやりたい場合は、以下のスクリーンショットに従ってください。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### I.3. 3つの公開オプション

ステップ1: **ウェブサイトに公開**ボタンをクリックします。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

ステップ2: トグル"挿入/置換方法でメニューを公開"をオンにします。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMKj8nfrhd9jdA3bXSFio%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=dd78fff1-36fb-4ce9-93e5-24d3076c170d" alt=""><figcaption></figcaption></figure>

ステップ3: CSSセレクターを入力し、以下の3つの公開オプションのいずれかを選択します。

<details><summary>オプション1: 前に挿入（グリッドメニューに最も一般的）</summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FFdsoRiQZP0I26RofqljL%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=51fec431-31e7-4bce-8c22-50a84664ee65" alt=""><figcaption></figcaption></figure>
<p>Navi+メニューを選択した要素の<strong>前</strong>に即座に挿入します。</p>
<p><strong>例:</strong> CSSセレクター <code>main</code> → グリッドメニューがページのメインコンテンツエリアの上に表示されます。</p>
<p>Shopifyテーマ（Dawn、Sense、Savor、Horizon）用の一般的なCSSセレクター:</p>
<ul>
<li><code>main</code> — ほとんどのShopifyテーマ</li>
<li><code>#MainContent</code> — Shopify Dawnテーマ</li>
</ul>
<p>このリストにないですか？Navi+のサポーターとチャットするか、<a href="/docs/usage/debug-mode-find-css-selectors/">デバッグモード</a>または<a href="/docs/usage/general/find-css-selector/">ブラウザDevTools</a>を使用してください。</p>
</details>

<details><summary>オプション2: 後に挿入</summary>
<p>Navi+メニューを選択した要素の<strong>後</strong>に即座に挿入します。</p>
<p><strong>例:</strong> CSSセレクター <code>header</code> → グリッドメニューがヘッダーのすぐ下に表示されます。</p>
<p>Shopifyテーマ（Dawn、Sense、Savor、Horizon）用の一般的なCSSセレクター:</p>
<ul>
<li><code>header</code> — ほとんどのShopifyテーマ</li>
<li><code>.header-wrapper</code> — 一部のテーマ</li>
</ul>
<p>このリストにないですか？Navi+のサポーターとチャットするか、<a href="/docs/usage/debug-mode-find-css-selectors/">デバッグモード</a>または<a href="/docs/usage/general/find-css-selector/">ブラウザDevTools</a>を使用してください。</p>
</details>

<details><summary>オプション3: 置換</summary>
<p>ほとんどのShopifyストアには置き換えるための組み込みのグリッドメニュー要素がありません。前に挿入 <code>main</code> が推奨されるアプローチです。</p>
<p>テーマに置き換えたいグリッドスタイルの要素がある場合は、<a href="/docs/usage/debug-mode-find-css-selectors/">デバッグモード</a>または<a href="/docs/usage/general/find-css-selector/">ブラウザDevTools</a>を使用してそのセレクターを見つけてください。</p>
</details>

#### I.4. デバイス特有のターゲティング

CSSセレクターがモバイル、デスクトップ、または両方に適用されるかを制御するには、サフィックスを追加します:

| サフィックス | 適用対象 |
|--------|------------|
| `(M)` | モバイルのみ |
| `(D)` | デスクトップのみ |
| *(なし)* | モバイルとデスクトップの両方 |

**例:** `main(D)` — デスクトップのみ · `main(M)` — モバイルのみ · `main` — 両方のプラットフォーム。


#### **II) 方法2: このメニューをShopifyテーマのセクション/ブロックとして追加する**

この方法では、Shopifyテーマにブロック/セクションを追加することでメニューを挿入します。これは従来のアプローチなので、詳細には説明しません。この方法では、ステップ1で必要なように**"アプリ埋め込みでNavi+をオンにする"**さえ必要ありません。

このメニューの埋め込みIDをコピーし、テーマセクションの"セクションにNavi+"という名前のブロックに挿入します。追加後にタイトルを追加し、全幅を設定し、このセクションのマージンを調整できます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FO2uavUwCekKwBVqvtJrt%2FMargin-padding%201.1.png?alt=media&#x26;token=35261670-ad9b-445f-9730-b10be40e406e" alt=""><figcaption></figcaption></figure>

<details><summary>Shopifyテーマにこのメニューをセクション/ブロックとして追加するためのガイド</summary>
<p>以下は、ShopifyテーマにNavi+メニューをセクション/ブロックとして挿入するための詳細なガイドです。この方法では、標準的でShopifyがサポートする方法でメニューを追加できますが、Navi+が提供する他の方法ほど柔軟ではありません。</p>
<p>この方法は<strong>メガメニュー</strong>と<strong>グリッドメニュー</strong>に適用されます。<strong>タブバー</strong>、<strong>FAB</strong>、または<strong>スライドメニュー</strong>には<strong>適用されません</strong>。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcdnKqInMqe14B9NBOTqr%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=dcac5183-9433-4a11-bf2e-6508101ab089" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FF5RAjnmtKv4kXRhIMxaV%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=8eb3748c-16c6-4508-aebe-781d00c2a8d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F1ss5KONiPDSu0AphvToH%2FHelp.MenuTree.1.1.9.png.png?alt=media&#x26;token=395e460a-f275-4642-9a86-41f996ea87f5" alt=""><figcaption></figcaption></figure>
</details>
