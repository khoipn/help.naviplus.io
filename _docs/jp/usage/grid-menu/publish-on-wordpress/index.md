---
description: Navi+メニュービルダープラグインを使用して、WordPressにNavi+グリッドメニューを公開します。 [naviwp embed_id="..."] ショートコードまたはGutenbergブロックを使用して、表示される場所に挿入します。
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
4. **以下のいずれかの方法で埋め込みます**。

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

ブロックエディタで、**+ → Naviplusメニュービルダー**を選択し、ブロックサイドバーに埋め込みIDを貼り付けます。`[naviwp embed_id="SF-..."]`を含むプレーンな**ショートコード**ブロックも同等です。

### オプション3 — ページビルダー（Elementor、Divi、Bricks、Oxygen）

`[naviwp embed_id="SF-..."]`を使用した**ショートコード**ウィジェットを使用します。ビルダーにショートコードウィジェットがない場合は、埋め込みdivを使用した**HTML**ウィジェットが機能します：

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

---

## モバイルのヒント

- **[レスポンシブグリッドメニュー]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)**を使用して、ブレークポイントごとに列数を切り替えます — 例：デスクトップで4列、モバイルで2列。
- タイルの内容は短く保ちます — アイコン、一語または二語のラベル、オプションで小さな説明。長いラベルは予測不可能に折り返されます。
- パディングを含めて、タップターゲットは少なくとも44 × 44 pxを目指します。

---

## 後でメニューを更新

エディタでの編集は、次のフロントエンドページの読み込み時に適用されます — WordPressキャッシュのフラッシュは必要ありません。

---

## 関連

- [WordPress / WooCommerce — 概要]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [WordPressにメニューを公開]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [レスポンシブグリッドメニュー]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
