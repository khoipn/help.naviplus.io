---
description: Navi+メニュービルダープラグインを使用して、WordPressにNavi+グリッドメニューを公開します。[naviwp embed_id="..."]ショートコードまたはGutenbergブロックを使用して、表示される場所に挿入します。
lang: jp
layout: default
permalink: /jp/docs/usage/grid-menu/publish-on-wordpress/
title: グリッドメニュー — WordPressに公開
---
# グリッドメニュー — WordPressに公開

**グリッドメニュー**は**セクション**メニューです — 埋め込んだページの場所にレンダリングされます。カテゴリショートカット、ハブページ、そして"何をしたいですか？"パネルに最適です。WordPressでは、Navi+メニュービルダープラグインがショートコードまたはGutenbergブロックを介して配置され、テーマファイルを編集する必要はありません。

> 他のプラットフォーム（Wix、Squarespace、Webflow、カスタムサイト）：[Wix / Squarespace / その他に公開]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/)を参照してください。

---

## ステップ

1. **プラグインをインストール** — [Navi+メニュービルダープラグインをインストール]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/)を参照してください。
2. **外観 → Naviplusメニュービルダー**で**グリッドメニューを作成**します。[グリッドメニュー — 使用方法]({{ site.baseurl }}/docs/usage/grid-menu/how-to-use/)と[レスポンシブグリッドメニュー]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)を参照してください。
3. **埋め込みIDをコピー**します（例：`SF-123456789`）。
4. **以下のいずれかの方法を使用して埋め込みます**。

---

## メニューを挿入

### オプション1 — ショートコード（推奨）

```text
[naviwp embed_id="SF-123456789"]
```

これを任意の投稿、ページ、またはショートコード対応ウィジェットにドロップします。

典型的な場所：

- カテゴリタイルのあるホームページのヒーローセクション。
- 折り返しの上にあるランディングページ。
- カテゴリアーカイブの空の状態。

### オプション2 — Gutenbergブロック

ブロックエディタで、**+ → Naviplusメニュービルダー**を選択し、ブロックサイドバーに埋め込みIDを貼り付けます。**ショートコード**ブロックは`[naviwp embed_id="SF-..."]`と同等です。

### オプション3 — ページビルダー（Elementor、Divi、Bricks、Oxygen）

**ショートコード**ウィジェットを使用して`[naviwp embed_id="SF-..."]`を使用します。ビルダーにショートコードウィジェットがない場合は、埋め込みdivを使用した**HTML**ウィジェットが機能します：

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

### オプション4 — CSSセレクター（Navi+アプリからの自動配置）

ショートコードを手動で配置する代わりに、Navi+がCSSセレクターを使用して要素を自動的に挿入または置き換えることができます — これは完全にNavi+アプリから設定されます。

#### CSSセレクターの理解

CSSセレクターは、ページ上の特定のHTML要素をターゲットにします。Navi+は、メニューを正確に**どこに**配置するかを知るためにこれを使用します — 既存の要素の前に挿入、後に挿入、または置き換えます。

適切なCSSセレクターを見つけるには、次を使用します：
- [デバッグモード](/docs/usage/debug-mode-find-css-selectors/) — 任意の要素にマウスをホバーして、そのセレクターを即座にコピー
- [ブラウザDevTools](/docs/usage/general/find-css-selector/) — ブラウザインスペクターを介した手動方法

#### 3つの公開オプション

Navi+アプリで：**ウェブサイトに公開**をクリック → **"挿入/置き換え方式でメニューを公開"**をオンにする → CSSセレクターを入力し、1つのオプションを選択します：

<details><summary>オプションA: 前に挿入</summary>
<p>選択した要素の直前にグリッドメニューを<strong>挿入</strong>します。フルセクションとして表示されます。</p>
<p><strong>例：</strong> <code>main</code> → グリッドメニューがメインコンテンツエリアの上に表示されます。</p>
<p>これはWordPressでのグリッドメニューの最も一般的な設定です。</p>
<p>WordPressテーマの一般的なセレクター：</p>
<ul>
<li><code>main</code> — ほとんどのテーマ</li>
<li><code>#main</code> — Twenty Twenty、Astra、OceanWP</li>
<li><code>.site-main</code> — 多くのテーマ</li>
<li><code>#content</code> — Divi、一部のデフォルトテーマ</li>
</ul>
</details>

<details><summary>オプションB: 後に挿入</summary>
<p>選択した要素の直後にグリッドメニューを<strong>挿入</strong>します。</p>
<p><strong>例：</strong> <code>header</code> → グリッドメニューがヘッダーのすぐ下に表示されます。</p>
<p>WordPressテーマの一般的なセレクター：</p>
<ul>
<li><code>header</code> — ほとんどのテーマ</li>
<li><code>.site-header</code> — OceanWP、Astra</li>
<li><code>#masthead</code> — Twenty Twenty-OneおよびデフォルトのWordPressテーマ</li>
</ul>
</details>

<details><summary>オプションC: 置き換え</summary>
<p>ほとんどのWordPressサイトには置き換えるための組み込みのグリッドメニュー要素がありません。前に挿入する<code>main</code>が推奨されるアプローチです。</p>
<p>テーマに置き換えたいグリッドスタイルの要素がある場合は、<a href="/docs/usage/debug-mode-find-css-selectors/">デバッグモード</a>または<a href="/docs/usage/general/find-css-selector/">ブラウザDevTools</a>を使用してそのセレクターを見つけてください。</p>
</details>

#### デバイス特有のターゲティング

特定のデバイスでのみセレクターを適用するためにサフィックスを追加します：

| サフィックス | 適用先 |
|--------|------------|
| `(M)` | モバイルのみ |
| `(D)` | デスクトップのみ |
| *(なし)* | 両方 |

例：`main(D)` — グリッドメニューをデスクトップのみに挿入します。

---

## モバイルのヒント

- **[レスポンシブグリッドメニュー]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)**を使用して、ブレークポイントごとに列数を切り替えます — 例：デスクトップで4列、モバイルで2列。
- タイルの内容は短く保ちます — アイコン、1語または2語のラベル、オプションで小さな説明。長いラベルは予測不可能に折り返されます。
- パディングを含めて、タップターゲットは少なくとも44 × 44 pxを目指します。

---

## 後でメニューを更新

エディタでの編集は、次のフロントエンドページの読み込み時に適用されます — WordPressキャッシュのフラッシュは必要ありません。

---

## 関連

- [WordPress / WooCommerce — 概要]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [WordPressでメニューを公開する]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [レスポンシブグリッドメニュー]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
