---
description: 'このメニューのための**カスタムCSS**、**再利用可能なクラス（CSS）**、およびデフォルトのHTMLを使用してメニューをスタイリングするための短いガイド。メニューには**3つのレベル**があります：メインバー...'
lang: jp
layout: default
permalink: /jp/docs/usage/menu-structure-and-css/
title: メニュー構造とCSS
---
# メニュー構造とCSS

このメニューのための**カスタムCSS**、**再利用可能なクラス（CSS）**、およびデフォルトのHTMLを使用してメニューをスタイリングするための短いガイド。メニューには**3つのレベル**があります：メインバー、サブメニュー、ネストされたサブメニュー。

> **注意：** このデモは**スライド/標準メニュー**をカバーしています。構造はほとんどのメニュータイプで同じです；TABBARとMega Menuには若干の違いがあるかもしれません — ライブページでDevToolsを使用して確認してください。

***

### カスタムCSS — 入力する内容

**高度な設定 → このメニュー用のカスタムCSS**で、Navi+は**プレフィックス**を追加します（`#SF-…`およびメニュースコープを含む）。**通常のセレクタのみ**を記述してください — `#SF-12345678`を自分で入力しないでください。

```css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

**`&` = メニュー自体**（`#SF-…`コンテナ）。オプションですが — メニュー全体をスタイル設定する明確な方法であり、`@media`内でそれを行う唯一の方法です：

```css
&              { background: #111; }        /* メニューコンテナ */
&:hover        { box-shadow: 0 4px 12px rgba(0,0,0,.15); }
& .inner-level1 { padding: 12px 16px; }     /* '& ' スペース付き = メニュー内、.inner-level1と同じ */

/* レスポンシブ — 小さい画面のみ */
@media (max-width: 768px) {
  & { padding: 6px; }
  .name { font-size: 13px; }
}
```

**`&`を使用する必要はありません** — `&`なしのCSSは以前と同じように機能します（`.inner-level1 { … }`は変わりません）。`&`は単なる「このメニュー」のショートカットです。

**`#SF-…`を手動で使用**するのは、このボックスを使用していないときのみです（たとえば、テーマファイル内のCSS）。

**グローバルスタイルシート/CSS**は**別の**フィールドです：これは**サイト全体**に適用され、1つのメニューにスコープされていません — 注意して使用してください。

**再利用可能なクラス（CSS）：** **再利用可能**テーブルで`.yourClass { … }`を定義し、アイテムにクラスを割り当てます — ルールは同じ内部CSSバンドルに留まります；ボックスに`#SF-…`を追加する必要はありません。クラスは**`li`**に表示されます。

ボックス内でコンテンツを`<style>`タグでラップしないでください — プレーンCSSのみ。

***

### アイテムごとのCSS（1つのアイテムのみをスタイル設定）

すべてのメニューアイテムには独自のCSSボックスがあります：**アイテムを編集 → 高度な設定 → 内部スタイルシート/CSS**。これは**このメニュー用のカスタムCSS**（メニュー全体）とは別です。アイテムごとのCSS は**アイテムと共に移動**します — アイテムをコピーまたは複製した場合、そのスタイル設定が含まれます。

> **完全ガイド：** 1つのアイテムのHTML構造とすべてのCSS構文については、[メニューアイテムの構造とCSS](/docs/usage/menu-item-structure-and-css/)を参照してください。

プレーンCSSを記述してください。**`&` は*このアイテム***（アイテムの行/`li`）を意味します — Sassの`&`のように：

```css
& { background: #fff5f5; border-radius: 10px; }
&:hover { background: #ffe4e6; }
```

アイテムの**内側パーツ**を通常のクラスセレクタで対象にします（メニュー全体と同じ名前：`.inner`、`.name`、`.description`、`.icon`、`.image`、`.arrow`）：

```css
.name { color: #b91c1c; }
.icon i { font-size: 22px; }
& .description { opacity: 0.8; }
```

**`&`の後の空白**は「アイテム内のパーツ」を意味するため、`& .name`と`.name`は同じです。**スペースなし**の`&`（`&:hover`、`&.active`）はアイテムの行をスタイル設定します。

**レスポンシブ（`@media`）** は機能します — モバイル専用の調整に最適です。`@media`内ではセレクタを使用する必要があります（これは標準CSS）ため、アイテム自体に`&`を使用します：

```css
@media (max-width: 768px) {
  & { padding: 8px; }
  .name { font-size: 13px; }
}
```

注記：

* **`#SF-…`が不要**で、**`<style>`タグが不要** — Navi+がこのアイテムのみにすべてを自動的にスコープするため、他のアイテムに影響することはありません。アイテムを複製した場合、CSSはアイテムと共に移動します。
* **セレクタなし**の裸の宣言（`color: red;`）を記述することもできます — それはこのアイテムの行に適用されます。この旧来のスタイルは機能し続けていますが、`&`がより明確で、`@media`内で行をスタイル設定する唯一の方法です。
* プロパティがここ**と**アイテムのビジュアル設定（Media box/Inner box shadow など）の両方で設定されている場合、**ビジュアル設定が優先**されます。CSSが有効になるようにその設定を削除/オーバーライドしてください。
* デバイスごとにアイテムを**表示/非表示**にするには、CSSではなくエディタの**モバイルに表示/デスクトップに表示**を使用してください — **Wix**では、ビューポートベースの`@media`が実際の画面と一致しない場合があります；そこではDisplay設定を使用してください。
* より大きなコードエディタを開くには**展開アイコン**（ボックスの右上）を使用してください；**Esc**または**完了**を押して閉じます。

**アイテムごとのCSS**を1つのアイテムに対する1回限りの調整に使用してください；**このメニュー用のカスタムCSS**（`.inner-level1`、`[data-name="…"]`など付き）を多くのアイテムまたは全レベルをスタイル設定する場合に使用してください。

***

### 詳細デモ：1つの3レベルのブランチ（アイコン、画像、名前、説明）

例のラベル：**Shop**（レベル1：**アイコン** + 名前 + 説明）→ **Clothing**（レベル2：**画像** + 名前）→ **T-Shirts**（レベル3：**アイコン** + 名前 + 説明）。これは**両方のメディアタイプ**と**説明**を示しています。

全体のメニューは1つのブロックに収まります：

```html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…`はメニューの**埋め込みID**です — Navi+ダッシュボード（メニュータイトルの隣の青いバッジ）およびライブページのDevToolsで表示されます。

#### 各`div.inner`内の順序（ランタイム）

1. **`span.arrow`** — 矢印（サブメニュー/モバイル、メニュータイプによります）。
2. *(オプション)* **`span.cart_count`** — アイテムがカートバッジを使用している場合のみ。
3. **メディア — 次のいずれか：**
   * **アイコン（Remix Icon / `ri-…`）：** `span.icon` → `i.ri-…`
   * **画像：** `div.image-border` → `span.image-box` → `span.image` → `img`\
     \&#xNAN;*注意：* アイテムに**画像がある**場合、アプリは**画像を表示**し、その行のアイコンはレンダリングされません。
4. **`div.info`** → **`div.flexcol`** → **`span.name`**（ラベル）→ **`div.description`** *(エディタで説明を入力した場合のみ)*。
5. *(オプション/SEO)* アイコンまたは画像は**`a[href]`**でラップされる場合があります — `<a>…</a>`が`span.icon`またはDevToolsの画像ブロックの周りに表示されることがあります。

#### `li`クラスの説明

| クラス                             | 意味                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | このアイテムの深さ                                             |
| `is-parent-top`                   | 子を持つレベル1アイテム                                 |
| `is-parent`                       | 子を持つレベル2+アイテム                                |
| `data-name="…"`                   | アイテムラベル（属性、CSS `[data-name]`セレクタに便利） |

#### フルHTMLデモ（説明的なクラス/URL）

```html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Shop">
      <!-- レベル1：アイコン + 名前 + 説明 -->
      <div class="inner inner-level1">
        <span class="arrow"></span>
        <!-- <span class="cart_count">3</span>  ← カートバッジのみ -->

        <!-- アイコン：Remix Icon (ri-…) -->
        <span class="icon">
          <i class="ri-store-2-line"></i>
        </span>

        <div class="info">
          <div class="flexcol">
            <span class="name">Shop</span>
            <div class="description">すべてのカテゴリをブラウズ</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Clothing">
          <!-- レベル2：画像 + 名前（説明なし） -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- 画像：設定されている場合、アイコンはレンダリングされません -->
            <div class="image-border">
              <span class="image-box">
                <span class="image">
                  <img
                    src="https://cdn.shopify.com/…/clothing.jpg"
                    alt="Clothing"
                    title="Clothing"
                    loading="lazy"
                    decoding="async">
                </span>
              </span>
            </div>

            <div class="info">
              <div class="flexcol">
                <span class="name">Clothing</span>
                <!-- エディタで説明が空の場合、.descriptionはありません -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="T-Shirts">
              <!-- レベル3：アイコン + 名前 + 説明 -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">T-Shirts</span>
                    <div class="description">新しいコレクション</div>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </li>

      </ul>
    </li>

  </ul>
</div>
```

#### メディアスニペット（参考用）

**アイコンのみ（画像なし）：**

```html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**画像のみ（アイテムに画像URLが設定されている）：**

```html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### カスタムCSSのセレクター例（Navi+ボックス内 — `#SF-…`を入力しないでください）

```css
/* 矢印 */
.inner-level1 .arrow { }

/* アイコン（任意のレベル） */
.inner-level2 .icon i { font-size: 20px; }

/* 画像 */
.inner-level2 .image img { border-radius: 8px; }

/* タイトルと説明 */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }

/* アイテム名でターゲット */
[data-name="Shop"] .name { color: red; }
```

**覚えておいてください：** レベル2/3のサブメニューは親の**`li`**の**内部**にあり、親の`div.inner`の**後**にあります — `ul.navigation`の直接の子ではありません。

**同じブランチ、テキストダイアグラム：**

```
Shop              ← レベル1（メインバー）
  └─ Clothing     ← レベル2（最初のサブメニュー）
        └─ T-Shirts ← レベル3（ネストされたサブメニュー）
```

***

### クイックリファレンス（推奨クラス）

| レベル | 行（`li`） | コンテンツラッパー | 次のサブメニュー                        |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1     | `level-1`  | `.inner-level1` | `ul.children[menulevel="2"]`        |
| 2     | `level-2`  | `.inner-level2` | `ul.children[menulevel="3"]` がある場合 |
| 3     | `level-3`  | `.inner-level3` | —                                   |

`menulevel="2"` / `"3"`は**その**サブメニューパネルのインデックスです — トップレベルアイテムの`level-1`とは異なります。

***

### クイックヒント

* `.inner-level1`、`.inner-level2`、`.inner-level3`を使用して**1つの深さ**をターゲットにする代わりに、`.inner`のみを使用してください。
* **全体のパネル**（背景、半径）をスタイル設定：`ul.children[menulevel="2"]`または`[menulevel="3"]`。
* テキスト：`.info` → `.flexcol` → `.name`、`.description`。
* アイコン：`.icon`または`.icon i` — 画像：`.image-border`、`.image img`（上記の詳細デモを参照）。
* 矢印：`.arrow`（通常は`.inner`の最初の内部）。
* 特定のアイテムを名前でターゲット：`[data-name="Home"] .name { … }`。

***

### ストアにクラスが不足していますか？

テーマキャッシュをクリアし、メニューを再公開するか、スクリプトバージョンを確認してください。ライブページでDevToolsを使用してクラス名を確認してください。

***

サポートドキュメント — **Navi+**
