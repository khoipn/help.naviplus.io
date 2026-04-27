---
description: Navi+ で Section メニュー（Mega Menu、Grid）を公開する — CSS Selector による Insert/Replace または Shopify の App Block。
layout: default
permalink: /jp/docs/publish/publish-section/
title: Publish Section — Mega Menu と Grid
---
# Publish Section — Mega Menu と Grid

対象：**Mobile Mega Menu**、**Mobile Grid**、**Desktop Mega Menu**

Section メニューは**フローティングではありません** — ページレイアウトの特定の位置に挿入されます。2 つのデプロイ方法があり、同時に使用することも可能です：

| | 方法 1：Insert/Replace | 方法 2：App Block |
|---|---|---|
| プラットフォーム | Shopify + グローバル | Shopify のみ |
| メカニズム | CSS Selector → 要素の前/後に挿入または置き換え | Theme Editor の App Block「Navi+ on Section」 |
| 柔軟性 | 高 — どこにでも埋め込み可能 | 中 — Shopify セクションスキーマによる制限 |
| セットアップ | CSS Selector の知識が必要 | Embed ID を入力するだけ |

---

## 方法 1：CSS Selector による Insert/Replace

**推奨**方法 — Shopify とグローバルの両方で動作します。

### ステップ 1：埋め込みコード

**Shopify：** **Theme Editor → App Embeds** → Navi+ を有効化。一度のみ。

**グローバル：** `<head>` に貼り付け：
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### ステップ 2："Publish menu by Insert/Replace method" を有効化

トグルを有効にして、下の設定セクションを展開します。

### ステップ 3：CSS Selector を入力

**1 つ**の CSS Selector を入力します。メニューは一致した要素に対して相対的に配置されます。

**デバイス別の構文：**

| サフィックス | デバイス |
|---|---|
| `header` | モバイルとデスクトップの両方 |
| `header(M)` | モバイルのみ |
| `header(D)` | デスクトップのみ |

**人気の Shopify テーマ向け CSS Selector のヒント：**

| メニュータイプ | 目的 | 推奨 CSS Selector |
|---|---|---|
| Desktop Mega | デスクトップナビゲーションを置き換え | `nav.header__inline-menu ul.list-menu` |
| Desktop Mega | ヘッダー下に挿入 | `header` |
| Mobile Mega | モバイルヘッダー下に挿入 | `header` |

### ステップ 4：配置を選択（Insert/Replace）

| 値 | 動作 |
|---|---|
| **Replace** | 元の要素を Navi+ メニューで完全に置き換え |
| **Insert Before** | 要素の前に Navi+ メニューを挿入 |
| **Insert After** | 要素の後に Navi+ メニューを挿入 |

> **Replace** を選択した後、Navi+ が読み込まれる間に元の要素を非表示にする CSS を追加することを検討してください — [Publish Optimize](/jp/docs/publish/publish-optimize/) を参照。

---

## 方法 2：App Block（Shopify のみ）

### セットアップ方法

1. メニューの **Embed ID** をコピーします（モーダルに表示 — クリックしてコピー）。
2. **Shopify Theme Editor** → **「Navi+ on Section」** App Block を見つけます。
3. 対応するフィールドに Embed ID を貼り付けます。
4. テーマを保存します。

### 「スクロール中に上部に固定」

Section メニューをスクロール中にページの上部に固定するトグル。

**使用場面：** テーマにビルトインのスティッキーヘッダーがない場合、ユーザーがスクロールダウンしても Desktop Mega Menu が表示され続けるようにこれを有効にします。

---

## 両方の方法を同時に使用できますか？

はい。Shopify ユーザーは両方を有効にできます：
- Theme Editor プレビュー用の App Block（より安定していて、プレビューが簡単）。
- ストアフロントでの正確な配置用の Insert/Replace。

通常は 1 つの方法のみで十分です。

---

## メニュータイプ別の注意点

| メニュー | デバイス | 注意 |
|---|---|---|
| Mobile Mega Menu | デスクトップトグルは無効 | モバイルのみ |
| Mobile Header | デスクトップトグルは無効 | モバイルのみ |
| Desktop Mega Menu | モバイルトグルは無効 | デスクトップのみ |
| Mobile Grid | 両方 | 制限なし |

---

## トラブルシューティング

**Insert/Replace を設定してもメニューが表示されない？**
1. CSS Selector が正しいか確認 — DevTools または Navi+ Debug Mode を使用します。
2. 「Publish menu by Insert/Replace method」トグルが有効になっているか確認します。
3. App Embeds / 埋め込みコードが正しく設置されているか確認します。

**メニューが 2 回表示される（重複）？**
→ App Block と Insert/Replace の両方が同時に有効になっています。どちらか一方を無効にします。
