---
description: Navi+ メガメニュー (モバイル) を Navi+ メニュービルダープラグインを使って WordPress に公開します。 [naviwp embed_id="..."] ショートコードまたは Gutenberg ブロックを介して表示される場所に挿入します。
lang: jp
layout: default
permalink: /jp/docs/usage/mega-menu-mobile/publish-on-wordpress/
title: メガメニュー (モバイル) — WordPressに公開
---
# メガメニュー (モバイル) — WordPressに公開

A **メガメニュー (モバイル)** は **セクション** メニュー — 埋め込んだページの場所に表示されます。 WordPress では、Navi+ メニュービルダープラグインがショートコードまたは Gutenberg ブロックを介して配置します。テーマファイルを編集する必要はありません。

> 他のプラットフォーム (Wix、Squarespace、Webflow、カスタムサイト): [Wix / Squarespace / その他に公開]({{ site.baseurl }}/docs/usage/mega-menu-mobile/publish-on-wordpress-woocommerce-wix-others/) を参照してください。

---

## ステップ

1. **プラグインをインストール** — [Navi+ メニュービルダープラグインをインストール]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/) を参照してください。
2. **外観 → Naviplus メニュービルダー** で **メガメニュー (モバイル)** を **構築**します。 [メガメニュー (モバイル) — 使用方法]({{ site.baseurl }}/docs/usage/mega-menu-mobile/how-to-use/) を参照してください。
3. **埋め込み ID をコピー** (例: `SF-123456789`)。
4. **以下のいずれかの方法を使用して埋め込みます**。

---

## メニューを挿入

### オプション 1 — ショートコード (推奨)

```text
[naviwp embed_id="SF-123456789"]
```

これを任意の投稿、ページ、またはショートコード対応ウィジェットに貼り付けます。

モバイルメガメニューをサイトのヘッダーに配置したい場合、最もクリーンな場所はテーマの **モバイルヘッダー** エリアです — またはモバイルにスコープされたフルサイトエディティングテンプレートパーツです。

### オプション 2 — Gutenberg ブロック

ブロックエディタで、**+ → Naviplus メニュービルダー** を選択し、ブロックサイドバーに埋め込み ID を貼り付けます。 `[naviwp embed_id="SF-..."]` のプレーン **ショートコード** ブロックも同様に機能します。

### オプション 3 — ページビルダー

`[naviwp embed_id="SF-..."]` を使用した **ショートコード** ウィジェット、または **HTML** ウィジェットを使用します:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

---

## モバイルファーストのヒント

- タップターゲットは少なくとも 44 × 44 px にしてください — エディタの間隔とパディングコントロールを使用し、実際のデバイスでプレビューしてください。
- 2 つ以上のネストレベルを避けてください — 深いサブメニューはタッチスクリーンではフラストレーションの原因になります。より深いツリーには [スライドメニュー]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/) を検討してください。
- これを [メガメニュー (デスクトップ)]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/) と組み合わせ、**表示ルール → デバイス** を使用して、各メニューをそのターゲットブレークポイントでのみ表示します。
- スティッキー要素 (タブバー、FAB、チャットウィジェット) との重なりに注意してください。 [他の要素とメニューが重なる]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/) を参照してください。

---

## 後でメニューを更新

エディタでの編集は次のフロントエンドページの読み込み時に適用されます — WordPress キャッシュのフラッシュは必要ありません。

---

## 関連

- [WordPress / WooCommerce — 概要]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [WordPress にメニューを公開する]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [メガメニュー (モバイル) — 使用方法]({{ site.baseurl }}/docs/usage/mega-menu-mobile/how-to-use/)
