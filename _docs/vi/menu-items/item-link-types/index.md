---
description: Tất cả các loại liên kết được hỗ trợ bởi Navi+ — trang nội bộ, URL bên ngoài, neo, mở bảng, điện thoại/email, ứng dụng trò chuyện, chia sẻ và JavaScript.
lang: vi
layout: default
permalink: /vi/docs/menu-items/item-link-types/
title: Các loại liên kết
---
# Các loại liên kết

The **Link To** field in Basic Info controls what happens when a visitor taps or clicks an item. Navi+ supports many link types beyond a plain URL.

When you click the Link To field, a help popup opens automatically with full examples. You can also type directly into the field.

---

## 1. Trang cửa hàng nội bộ

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

## 2. URL đầy đủ (Liên kết bên ngoài)

Link to any website using a full URL.

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. Mở trong tab mới

Append `@new` to any link to open it in a new tab.

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. Không điều hướng (mục cha)

Use `#` when an item is a parent that contains child items — tapping it expands the children without navigating anywhere.

```
#
```

---

## 5. Cuộn (Neo)

| Action | Syntax |
|---|---|
| Cuộn lên trên | `scroll:Top` |
| Cuộn lên trên với 100px offset | `scroll:Top(100)` |
| Cuộn xuống dưới | `scroll:Bottom` |
| Cuộn đến một phần bằng CSS selector | `scroll:OnPage(#section-id)` *(Business / Elite)* |

**Example:** A "Back to top" button → Link To is `scroll:Top`.

---

## 6. Mở bảng / popup *(Business / Elite)*

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

## 7. Điện thoại, SMS, Email

| Action | Syntax |
|---|---|
| Gọi điện thoại | `tel:+12125550100` |
| SMS | `sms:+12125550100?body=Hello` |
| Email | `mailto:hello@yourdomain.com` |

---

## 8. Ứng dụng trò chuyện

| App | Syntax |
|---|---|
| WhatsApp | `https://wa.me/12125550100` *(no + prefix)* |
| Messenger | `https://m.me/YourPageName` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/your-line-code` |

---

## 9. Chia sẻ

| Action | Syntax |
|---|---|
| Chia sẻ trang hiện tại (hộp thoại chia sẻ gốc) | `open:ShareMe` |
| Sao chép URL vào clipboard | `share:CopyUrl` |
| Chia sẻ lên Facebook | `share:Facebook` |
| Chia sẻ lên Twitter / X | `share:Tweet` |

---

## 10. Gọi JavaScript

Call any JavaScript function defined on the page.

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. Chuyển đổi ngôn ngữ

```
open:ChangeLanguage(fr)    ← switch to French
open:ChangeLanguage(vi)    ← switch to Vietnamese
open:ChangeLanguage()      ← reset to default language
```
