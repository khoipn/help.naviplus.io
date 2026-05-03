---
description: Navi+がサポートするすべてのリンクタイプ — 内部ページ、外部URL、アンカー、パネルを開く、電話/メール、チャットアプリ、共有、JavaScript。
layout: default
permalink: /jp/docs/menu-items/item-link-types/
title: リンクタイプ
---
# リンクタイプ

基本情報の **リンク先** フィールドで、訪問者がアイテムをタップまたはクリックしたときの動作を制御します。Navi+はシンプルなURL以外にも多くのリンクタイプをサポートします。

リンク先フィールドをクリックすると、完全な例のヘルプポップアップが自動的に開きます。直接フィールドに入力することもできます。

---

## 1. 内部ストアページ

Shopifyストア内のページへのリンクには短いパス（ドメインなし）を使用します。

| 目的 | 入力 |
|---|---|
| ホームページ | *(空欄のまま)* |
| 全製品 | `collections/all` |
| コレクション | `collections/collection-handle` |
| 製品ページ | `products/product-handle` |
| 静的ページ | `pages/page-handle` |
| ブログ一覧 | `blogs/news` |
| ブログ記事 | `blogs/news/post-handle` |
| カート | `cart` |
| 検索 | `search` |
| お問い合わせ | `pages/contact` |

**Auto Cleanのヒント:** 完全なURLを貼り付け → **Auto clean** トグルを有効化 → システムがドメインを削除してパスのみ保持。

---

## 2. 完全URL（外部リンク）

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. 新しいタブで開く

任意のリンクに `@new` を追加。

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. ナビゲーションなし（親アイテム）

```
#
```

---

## 5. スクロール（アンカー）

| アクション | 構文 |
|---|---|
| 上にスクロール | `scroll:Top` |
| 100pxオフセットで上に | `scroll:Top(100)` |
| 下にスクロール | `scroll:Bottom` |
| CSSセレクターでセクションへ | `scroll:OnPage(#section-id)` *(Business / Elite)* |

---

## 6. パネル / ポップアップを開く *(Business / Elite)*

| アクション | 構文 |
|---|---|
| Navi+スライドメニューを開く | `open:NaviMenu(SF-XXXXXXXXXX)` |
| CSS要素をクリック | `open:clickTo(#cart-button)` |
| 入力フィールドにフォーカス | `open:focusTo(.search-input)` |
| テーマの検索/カートドロワー | ヘルプポップアップ → *パネルを開く* |
| Shopify Inboxチャット | ヘルプポップアップ → *他のアプリを開く* |

---

## 7. 電話、SMS、メール

| アクション | 構文 |
|---|---|
| 電話 | `tel:+81312345678` |
| SMS | `sms:+81312345678?body=こんにちは` |
| メール | `mailto:hello@yourdomain.jp` |

---

## 8. チャットアプリ

| アプリ | 構文 |
|---|---|
| WhatsApp | `https://wa.me/81312345678` |
| Messenger | `https://m.me/YourPageName` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/your-line-code` |

---

## 9. 共有

| アクション | 構文 |
|---|---|
| 現在のページを共有 | `open:ShareMe` |
| URLをコピー | `share:CopyUrl` |
| Facebookで共有 | `share:Facebook` |
| Twitter / Xで共有 | `share:Tweet` |

---

## 10. JavaScript呼び出し

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. 言語切替

```
open:ChangeLanguage(ja)
open:ChangeLanguage(en)
open:ChangeLanguage()
```
