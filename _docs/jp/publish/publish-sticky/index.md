---
description: Navi+ で Sticky メニュー（Tabbar、Mobile Header、FAB）を公開する — Shopify の App Embeds またはグローバルサイトへのスクリプト注入を使用。
layout: default
permalink: /jp/docs/publish/publish-sticky/
title: Publish Sticky — Tabbar と FAB
---
# Publish Sticky — Tabbar と FAB

対象：**Tabbar**、**Mobile Header**、**FAB / Support bar**

Sticky メニューはフローティングです — 常に画面に表示され、固定の DOM 位置に紐付けられません。埋め込み方法はもっともシンプルです：サイト全体にシングルスクリプトで有効化します。

---

## Shopify — 3 ステップ

### ステップ 1：Theme Editor で App Embeds を有効化

**Theme Editor → App Embeds** に移動し、Navi+ トグルを有効にします。

- これはテーマレイアウトを**変更しません**。ストアに影響を与えることなくいつでも無効にできます。
- **ストアごとに一度**だけ行う必要があります — 後続のメニューではこのステップをスキップできます。

### ステップ 2："Publish this menu in sticky mode" を有効化

Publish モーダルの **ステップ 2** カード内のトグル。有効 = メニューはライブ状態、無効 = ウェブサイトから非表示。

### ステップ 3（オプション）：デバイスとページの表示設定

詳細は [Publish Filter](/jp/docs/publish/publish-filter/) を参照してください。

---

## グローバル（WordPress、Wix、Webflow...） — 3 ステップ

### ステップ 1：埋め込みコードを `<head>` に貼り付け

モーダルに**コピー**ボタン付きでコードが表示されます。ウェブサイトの `<head>` に貼り付けます：

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` はストアを識別します — 各ストアに固有のトークンがあります。
- `start.js` は非同期で読み込まれ、ページレンダリングをブロックしません。

### ステップ 2："Publish this menu in sticky mode" を有効化

Shopify と同様 — トグルを有効にします。

### ステップ 3（オプション）：デバイスとページの表示設定

詳細は [Publish Filter](/jp/docs/publish/publish-filter/) を参照してください。

---

## メニュータイプ別の注意点

| メニュー | 制限 |
|---|---|
| Mobile Header | デスクトップトグルは無効 — モバイルのみ |
| FAB / Support bar | 位置セレクターなし（FAB は Setting タブで独自のポジショニングあり） |
| Tabbar | モバイル + デスクトップのフルオプションが利用可能 |

---

## トラブルシューティング

**トグルを有効にしてもメニューが表示されない？**
1. App Embeds が有効になっているか（Shopify）、または埋め込みコードが正しく貼り付けられているか（グローバル）を確認します。
2. デバイス設定を確認 — **Show menu on mobile** または **Show menu on desktop** がオンになっている必要があります。
3. URL フィルターを確認 — 現在のページが除外されている可能性があります。
4. ブラウザを強制リフレッシュ（Ctrl+Shift+R）してキャッシュをクリアします。
