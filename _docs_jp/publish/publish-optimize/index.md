---
description: Navi+ メニュー公開後のスピードと UX の最適化 — Insert/Replace または CSS Selector トリガー使用時のオリジナルコンテンツのフラッシュを防止。
layout: default
permalink: /jp/docs/publish/publish-optimize/
title: Publish Optimize — スピードと UX
---
# Publish Optimize — スピードと UX

**Insert/Replace**（Section メニュー）または **CSS Selector トリガー**（Slide メニュー）を使用する場合、ウェブサイトは Navi+ を読み込むためにわずかな時間が必要です。その間、元の要素（テーマの古いメニュー）はまだ表示されており、**フラッシュ**またはレイアウトのズレが発生します。

---

## 最適化が必要な場面は？

| 方法 | 最適化が必要？ |
|---|---|
| Sticky / FAB（App Embeds / `<head>`） | 不要 — メニューは DOM に追加されるだけで、何も置き換えない |
| Slide メニュー — 方法 1（Navi+ アイテムから開く） | 不要 — トリガーボタンは Navi+ アイテム |
| **Slide メニュー — 方法 2（CSS Selector トリガー）** | **必要** — Navi+ が読み込まれるまで元のトリガー要素が表示される |
| **Section — Replace** | **必要** — 元のメニューが先に表示され、その後 Navi+ で置き換えられる |
| Section — Insert Before/After | 不要 — 2 つのメニューが並んで表示される |

---

## テクニック：CSS で元の要素を非表示にする

### 仕組み

1. CSS を使用して元の要素を即座に非表示にする（Navi+ が読み込まれる前に）。
2. オプションでローディングプレースホルダーを表示してレイアウトのズレを防止。
3. Navi+ が準備できたら自動的に要素を削除/置き換え — レイアウトが安定します。

### 実装

**元の要素を非表示にする CSS を追加**（テーマのカスタム CSS または `<head>` に貼り付け）：

```css
/* Navi+ 読み込み中に元のメニューを非表示 */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* レイアウトのズレを防ぐためのスペース確保 */
}
```

Navi+ が要素を置き換えたら、この CSS は効果がなくなります — 要素が DOM から削除されます。

**ローディングプレースホルダー付き**（上級者向け）：
```css
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  position: relative;
}
nav.header__inline-menu ul.list-menu::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f5f5f5;
  border-radius: 4px;
}
```

---

## 特別なケース：CSS Selector トリガーを使用した Slide メニュー

Slide メニューが CSS Selector トリガー（方法 2）を使用する場合、元のトリガー要素（例：テーマのハンバーガーボタン）は引き続き表示され、Navi+ が読み込まれてイベントをオーバーライドするまで**機能し続けます**（テーマのスライドパネルを開く）。

### 解決策 A：元の要素を非表示にして、代わりに Navi+ アイテムをトリガーとして使用

```css
/* テーマのハンバーガーボタンを非表示 */
#Details-menu-drawer-container {
  display: none !important;
}
```

次に、方法 2 の代わりに**方法 1**（Navi+ アイテムから開く）を使用 — よりクリーンで、フラッシュの心配がありません。

### 解決策 B：元の要素をフェードアウト

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

JS を追加：Navi+ が準備できたとき（`naviReady` イベント）に、非表示スタイルを削除して元の要素の表示を復元します。

---

## 一般的なスピードに関する注意事項

- `start.js` は `async` で読み込まれ — ページレンダリングをブロックしません。
- メニューの JSON 設定は Cloudflare CDN にキャッシュされ — 最寄りのエッジノードから高速読み込み。
- 訪問者へのサーバーサイドレンダリングなし — すべてのメニューレンダリングは静的 JSON からのクライアントサイド。

最大速度のためにスクリプトをプリロード：
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
