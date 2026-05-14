---
description: Navi+がサポートするすべてのリンクタイプ — 内部ページ、外部URL、アンカー、パネルを開く、電話/メール、チャットアプリ、共有、JavaScript。
lang: jp
layout: default
permalink: /jp/docs/menu-items/item-link-types/
title: リンクタイプ
---
# リンクタイプ

The **Link To** field in Basic Info controls what happens when a visitor taps or clicks an item. Navi+ supports many link types beyond a plain URL.

When you click the Link To field, a help popup opens automatically with full examples. You can also type directly into the field.

---

## 1. 内部ストアページ

Use short paths (no domain) to link to pages within your Shopify store.

| Destination | Enter |
|---|---|
| Home page | *(leave empty)* |
| All products | `collections/all` |
| A collection | `collections/collection-handle` |
| A product page | `products/product-handle` |
| A static page (About, FAQ…) | `pages/page-handle` |
| Blog listing | `blogs/news` |
| A blog post | `blogs/news/post-handle` |
| Cart | `cart` |
| Search | `search` |
| Contact | `pages/contact` |

**Auto Clean tip:** Paste a full URL (e.g. `https://mystore.com/collections/sale`) → enable the **Auto clean** toggle → the system strips the domain and keeps only `collections/sale`.

---

## 2. フルURL（外部リンク）

Link to any website using a full URL.

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. 新しいタブで開く

Append `@new` to any link to open it in a new tab.

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. ナビゲーションなし（親アイテム）

Use `#` when an item is a parent that contains child items — tapping it expands the children without navigating anywhere.

```
#
```

---

## 5. スクロール（アンカー）

| Action | Syntax |
|---|---|
| Scroll to top | `scroll:Top` |
| Scroll to top with 100px offset | `scroll:Top(100)` |
| Scroll to bottom | `scroll:Bottom` |
| Scroll to a section by CSS selector | `scroll:OnPage(#section-id)` *(Business / Elite)* |

**Example:** A "Back to top" button → Link To is `scroll:Top`.

---

## 6. パネル/ポップアップを開く *(Business / Elite)*

Open theme UI components without leaving the page.

| Action | Syntax |
|---|---|
| Open a Navi+ Slide menu | `open:NaviMenu(SF-XXXXXXXXXX)` |
| Click a CSS element | `open:clickTo(#cart-button)` |
| Focus an input field | `open:focusTo(.search-input)` |
| Open theme search / cart drawer | Use the help popup → *Open panels* |
| Open Shopify Inbox chat | Use the help popup → *Open other applications* |

`open:clickTo` and `open:focusTo` accept `Down` or `Up` to scroll before acting:  
`open:clickTo(.footer-element, Down)`

---

## 7. 電話、SMS、メール

| Action | Syntax |
|---|---|
| Phone call | `tel:+12125550100` |
| SMS | `sms:+12125550100?body=Hello` |
| Email | `mailto:hello@yourdomain.com` |

---

## 8. チャットアプリ

| App | Syntax |
|---|---|
| WhatsApp | `https://wa.me/12125550100` *(no + prefix)* |
| Messenger | `https://m.me/YourPageName` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/your-line-code` |

---

## 9. 共有

| Action | Syntax |
|---|---|
| Share current page (native share dialog) | `open:ShareMe` |
| Copy URL to clipboard | `share:CopyUrl` |
| Share to Facebook | `share:Facebook` |
| Share to Twitter / X | `share:Tweet` |

---

## 10. JavaScriptを呼び出す

Call any JavaScript function defined on the page.

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. 言語を切り替える

```
open:ChangeLanguage(fr)    ← switch to French
open:ChangeLanguage(vi)    ← switch to Vietnamese
open:ChangeLanguage()      ← reset to default language
```
