---
description: "スケルトンメニュートリガーとテーマ統合の CSS セレクタ構文 — デバイス固有およびラベル付きセレクタ形式によるメニュー読み込み時間と UX の最適化。"
layout: default
permalink: /jp/docs/development/optimize-loading-css-selectors/
title: Speed と UX 最適化 — CSS セレクタ構文
---
# Speed と UX 最適化 — CSS セレクタ構文

**Theme Editor → App embeds → Store Connector** の **Speed & UX optimization** グループ内には、メニューをスムーズに読み込むのに役立つ 2 つの CSS セレクタフィールドがあります。従来のようにカスタム CSS/JS を作成する必要はありません。このガイドでは、両方のフィールドの構文について説明します。

---

## 2 つのフィールド、2 つの異なる目的

| フィールド | 用途 | メカニズム |
|---|---|---|
| **Mobile Menu CSS Selector** | CSS セレクタイベントバインディングを使用する場合のメニュートリガーボタン（ハンバーガーメニュー） | ボタンをクリック Navi+ がまだ読み込まれていない → スケルトンメニューをすぐに表示（即座のフィードバック）。Navi+ が読み込まれるにつれて、スケルトンは実際のメニューにリードバックされます。 |
| **CSS Selector for Mega Menu Replacement** | Navi+ が Replacement モードで実行する場合のオリジナルテーマメニューエリア | 読み込み中のシミングローディング効果でそのエリアをカバーし、オリジナルコンテンツが置き換え時にちらつかないようにします。 |

両方のフィールドは **オプション** です。空白のままにしておくとデフォルトの動作から何も変わりません。

---

## 共通構文 — カンマで区切られた複数のセレクタ

```
selector-1, selector-2, selector-3
```

単一フィールド内の複数のセレクタをカンマ `,` またはセミコロン `;` で分離します。括弧 `(...)` 内、括弧 `[...]` 内、または引用符付きの文字列 `"..."` / `'...'` 内（属性セレクタ `[data-value="a,b"]` など）のカンマ/セミコロンは文脈によって認識され、セレクタデリミタと混同されません。

---

## レガシー構文 — `(M)` / `(D)` サフィックス

**両方のフィールド** で機能します。セレクタの直後にサフィックスを追加してデバイスによって制限します。

```
.hamburger-mobile (M)
.hamburger-desktop (D)
.trigger-all-devices
```

| サフィックス | 適用先 |
|---|---|
| `(M)` | Mobile のみ |
| `(D)` | Desktop のみ |
| *(サフィックスなし)* | すべてのデバイス |

---

## ラベル付き構文 — 「Mobile Menu CSS Selector」フィールドのみ

**Mobile Menu CSS Selector** フィールドは、スケルトンメニューの外観をカスタマイズするための高度な構文をサポートしています。**Mega Menu (Replacement mode)** フィールドはこれをサポートしておらず、`(M)` / `(D)` のみを受け付けます。

```
.hamburger (Device:M | Color:#1a1a1a | Direction:left | Width:85%)
```

`(...)` 内のコロン `:` で識別されます。コロンがある場合は Labeled 形式。そうでない場合は Legacy (`(M)` / `(D)`)。パラメータはパイプ `|` で分離されます。

| パラメータ | 有効な値 | 省略/無効な場合のデフォルト |
|---|---|---|
| `Device` | `M` または `D` （両方を列挙 `M,D` = デバイス制限なし、省略と同じ） | すべてのデバイス |
| `Color` | 16 進数 CSS コード：`#rgb`、`#rgba`、`#rrggbb`、`#rrggbbaa` | `#fff` |
| `Direction` | `left` または `right` — スケルトンスライドアウト方向 | `left` |
| `Width` | パーセンテージ `NN%` またはピクセル `NNpx` （整数または小数） | `85%` |

**例:**
```
.hamburger (Device:M | Color:#1a1a1a | Width:320px)
```
→ Mobile でのみ適用、スケルトン背景 `#1a1a1a`、固定幅 `320px`。

### パラメータごとのフォールトトレランス

- キーと値内の空白と大文字/小文字は一致前に正規化されます（`Color: #1A1A1A` と `color:#1a1a1a` は同じです）。
- 無効なパラメータ形式（例：`Color:red` — 16 進数ではない）または未知のキー（タイプミス、存在しない名前）は、**そのパラメータのみサイレントにスキップ** され、デフォルト値が使用されます。他のパラメータや同じフィールド内の他のセレクタは壊れません。

---

## 無効なセレクタ（CSS 構文エラー）

**Mobile Menu CSS Selector** フィールド内のセレクタが実際の CSS 構文エラーを持っている場合（無効なラベル付きパラメータと異なる — これは解析できないセレクタです）、Navi+ はブラウザコンソール（F12 → Console）に警告をログし、フィールドを直接指します。

```
[Navi+] INVALID TRIGGER CSS SELECTOR — this one was skipped
selector      : <無効なセレクタ>
browser error : <ブラウザエラーメッセージ>
Fix it in Theme Editor → App embeds → Store Connector →
Mobile Menu CSS Selector.
```

無効なセレクタは単独でスキップされ、フィールド内の他の有効なセレクタは正常に機能し続けます。

---

## 実際の例

### 1. デフォルトのハンバーガーを保護、カスタマイズなし

```
#Details-menu-drawer-container
```
早期クリックは依然として即座のフィードバック（デフォルトスケルトン）を取得し、Device/Color/Direction/Width を宣言する必要はありません。

### 2. Mobile ハンバーガーのみ、右からスライド、ブランドカラー

```
.hamburger-mobile (Device:M | Color:#0f172a | Direction:right | Width:90%)
```

### 3. 両方のデバイスでテーマのオリジナルメニューエリアを置き換える

```
nav.header__inline-menu
```
（**CSS Selector for Mega Menu Replacement** フィールド、サフィックスなし = すべてのデバイスに適用）

### 4. 複数のセレクタを組み合わせる、デバイス固有の制限

```
.mega-menu (D), .mobile-nav-wrapper (M)
```
