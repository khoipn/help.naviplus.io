---
description: '1つのメニューアイテムの詳細説明 — そのHTML構造（アイコン、画像、名前、説明、矢印、バッジ）と、アイテム専用CSSボックスを使用して単一アイテムをスタイル設定する方法（&（このアイテム）、内側セレクタ、ホバー、@mediaを含む）。'
lang: jp
layout: default
permalink: /jp/docs/usage/menu-item-structure-and-css/
title: メニューアイテムの構造とCSS
---
# メニューアイテムの構造とCSS

このページは**1つのメニューアイテム**を詳しく説明します — レンダリングされるHTMLと、アイテム専用のCSSボックスを使用して**そのアイテムのみ**をスタイル設定する方法（**アイテムを編集 → 高度な設定 → 内部スタイルシート/CSS**）。

> このボックスは**編集中のアイテムのみ**をスタイル設定し、アイテムを複製するときにCSSは**そのアイテムと共に移動**します。メニュー全体のCSS については、**このメニュー用のカスタムCSS**を使用してください — [メニュー構造とCSS](/docs/usage/menu-structure-and-css/)を参照。

***

## 1つのアイテムの構造

すべてのアイテムは`div.inner`を含む単一の`li`です。`.inner`の内部には、順序に従って：

```html
<li class="item level-1 …" data-name="Shop">
  <div class="inner inner-level1">
    <span class="arrow"></span>            <!-- サブメニュー矢印（ある場合） -->
    <!-- <span class="cart_count">3</span> --> <!-- カートバッジとカウント（オプション） -->

    <!-- メディア — アイコンまたは画像（アイテムに画像がある場合、アイコンはレンダリングされません） -->
    <span class="icon"><i class="ri-store-2-line"></i></span>
    <!-- または -->
    <div class="image-border">
      <span class="image-box"><span class="image"><img src="…"></span></span>
    </div>

    <!-- テキスト -->
    <div class="info">
      <div class="flexcol">
        <span class="name">Shop</span>
        <div class="description">すべてのカテゴリをブラウズ</div>   <!-- 説明を入力した場合のみ -->
      </div>
    </div>
  </div>
</li>
```

### ターゲットにできるパーツ

| パーツ | セレクタ | 注記 |
| ---- | -------- | ----- |
| アイテム自体（行） | `&` | `li`。`&`は「このアイテム」の短縮表記です。 |
| コンテンツラッパー | `.inner` | アイテム内のすべてをラップします |
| アイコングリフ | `.icon i` | Remix Icon（`ri-…`） |
| 画像 | `.image img`（ボックス：`.image-border`、`.image-box`、`.image`） | アイテムに画像がある場合に表示されます |
| タイトル | `.name` | ラベル |
| 説明 | `.description` | 説明フィールドに入力した場合のみ存在 |
| テキスト列 | `.info`、`.flexcol` | 名前と説明を保持 |
| 矢印 | `.arrow` | サブメニュー矢印 |
| カートバッジ | `.cart_count` | カートカウント付きのカートアイテムのみ |

***

## 1つのアイテムのCSS記述

このボックスは**3つの形式を受け付けます（混在可能）**。`#SF-…`を入力することはなく、`<style>`タグを追加することもありません — Navi+がこのアイテムのみにすべてをスコープします。

### 1. `&` — このアイテム（推奨）

`&`はアイテムの行（`li`）を意味し、Sassの`&`と同じです：

```css
& { border: 1px solid #eee; border-radius: 12px; }
&:hover { background: #f8fafc; }
```

### 2. 内側セレクタ — アイテム内のパーツ

上記のテーブルのクラス名を使用します：

```css
.name { font-weight: 700; }
.description { font-size: 12px; opacity: .8; }
.icon i { font-size: 22px; color: #2563eb; }
.image img { border-radius: 10px; }
```

**`&`の後の空白**も「アイテム内」を意味するため、`& .name`と`.name`は同じです。**スペースなし**の`&`（`&:hover`、`&.active`）は行自体をスタイル設定します。

### 3. 裸の宣言 — 旧来のショートカット

**セレクタなし**でプロパティを記述すると、アイテムの行に適用されます：

```css
color: red;
font-weight: 700;
```

これは以前のメニューが依存しているため機能しますが、`&`の方が明確です — また、裸の宣言は`@media`内では**使用できません**。

***

## レスポンシブデザイン（`@media`を使用）

`@media`はここで機能します。`@media`内ではセレクタを使用する必要があります（これは標準CSS）ため、アイテム自体に`&`を使用します：

```css
/* 電話で小さなパディングと説明を非表示にする */
@media (max-width: 768px) {
  & { padding: 8px; }
  .description { display: none; }
  .name { font-size: 13px; }
}
```

> デバイスごとにアイテムを**表示または非表示**にするには、CSSではなくエディタの**モバイルに表示/デスクトップに表示**を使用することをお勧めします — **Wix**では、ビューポートベースの`@media`が実際の画面と一致しない場合があります；そこではDisplay設定を使用してください。

***

## 例

**1つのアイテムをピル/バッジに変える：**

```css
& { background: #111; color: #fff; border-radius: 999px; padding: 6px 14px; }
.name { color: #fff; }
```

**ホバー時にハイライト：**

```css
&:hover { transform: translateY(-2px); transition: transform .15s; }
&:hover .name { color: #2563eb; }
```

**より大きく、色付きのアイコン：**

```css
.icon i { font-size: 24px; color: #e11d48; }
```

**丸い画像と微妙なフレーム：**

```css
.image img { border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,.12); }
```

**モバイルではコンパクト：**

```css
& { padding: 12px; }
@media (max-width: 768px) {
  & { padding: 6px; }
  .description { display: none; }
}
```

***

## 知っておくと良いこと

* **`#SF-…`なし、`<style>`タグなし** — Navi+がこのアイテムのみにCSSをスコープします；他のアイテムに影響することはありません。
* CSSは**アイテムを複製するときと共に移動**します（アイテムごと、再利用可能）。
* プロパティがここ**と**アイテムのビジュアル設定（Media box/Inner box color、border、shadowなど）の両方で設定されている場合、**ビジュアル設定が優先**されます — インラインで適用されます。CSSが有効になるようにその設定をクリアしてください。
* より大きなエディタには**展開アイコン**（ボックスの右上）を使用してください；**Esc**または**完了**を押して閉じます。

***

サポートドキュメント — **Navi+**
