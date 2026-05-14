---
description: Navi+ メニューを公開後にスピードと UX を最適化 — Insert/Replace または CSS セレクタトリガーを使用する際に元のコンテンツのフラッシュを防ぐ。
lang: jp
layout: default
permalink: /jp/docs/publish/publish-optimize/
title: 公開最適化 — スピード & UX
---
# 公開最適化 — スピード & UX

**Insert/Replace**（セクションメニュー）または **CSS セレクタトリガー**（スライドメニュー）を使用する際、ウェブサイトはNavi+を読み込むための短い時間が必要です。その間、元の要素（テーマの古いメニュー）がまだ表示されており、**フラッシュ**やレイアウトのシフトを引き起こします。

---

## 最適化が必要な場合は？

| 方法 | 最適化が必要ですか？ |
|---|---|
| スティッキー / FAB（アプリ埋め込み / `<head>`） | いいえ — メニューはDOMに追加され、何も置き換えられません |
| スライドメニュー — 方法 1（Navi+ アイテムから開く） | いいえ — トリガーボタンはNavi+アイテムです |
| **スライドメニュー — 方法 2（CSS セレクタトリガー）** | **はい** — 元のトリガー要素はNavi+が読み込まれるまで表示され続けます |
| **セクション — 置き換え** | **はい** — 元のメニューが最初に表示され、その後Navi+に置き換えられます |
| セクション — 挿入前/後 | 必要ありません — 2つのメニューが並んで表示されます |

---

## テクニック：CSSを使用して元の要素を隠す

### 仕組み

1. CSSを使用して元の要素をすぐに隠します（Navi+が読み込まれる前）。
2. レイアウトのシフトを防ぐために、オプションでローディングプレースホルダーを表示します。
3. Navi+は準備ができ次第、自動的に要素を削除または置き換えます — レイアウトが安定します。

### 実装

**元の要素を隠すためのCSSを追加**（テーマのカスタムCSSまたは`<head>`に貼り付け）：

```css
/* Navi+が読み込まれている間、元のメニューを隠す */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* レイアウトのシフトを防ぐためにスペースを確保 */
}
```

Navi+が要素を置き換えると、このCSSは効果がなくなります — 要素はDOMから削除されます。

**ローディングプレースホルダー付き**（高度な）：
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

## 特殊ケース：CSSセレクタトリガーを使用したスライドメニュー

スライドメニューがCSSセレクタトリガー（方法2）を使用する場合、元のトリガー要素（例：テーマのハンバーガーボタン）はまだ表示されており、**まだ機能します**（テーマのスライドパネルを開く）Navi+が読み込まれ、イベントを上書きするまで。

### 解決策A：元の要素を隠し、Navi+アイテムをトリガーとして使用する

```css
/* テーマのハンバーガーボタンを隠す */
#Details-menu-drawer-container {
  display: none !important;
}
```

その後、方法2の代わりに**方法1**（Navi+アイテムから開く）を使用します — よりクリーンで、フラッシュを心配する必要はありません。

### 解決策B：元の要素をフェードアウト

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

JSを追加します：Navi+が準備ができたとき（`naviReady`イベント）、隠すスタイルを削除して元の要素の可視性を復元します。

---

## 一般的なスピードノート

- `start.js`は`async`で読み込まれます — ページのレンダリングをブロックしません。
- メニューのJSON構成はCloudflare CDNにキャッシュされており — 最寄りのエッジノードから高速に読み込まれます。
- 訪問者のためのサーバーサイドレンダリングはありません — すべてのメニューのレンダリングは静的JSONからクライアントサイドで行われます。

最大のスピードのためにスクリプトをプリロードするには：
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
