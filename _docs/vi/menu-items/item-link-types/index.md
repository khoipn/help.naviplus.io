---
description: Tất cả các loại đường dẫn trong Navi+ — URL nội bộ, external link, anchor scroll, mở panel, chat, chia sẻ và gọi JavaScript.
lang: vi
layout: default
permalink: /vi/docs/menu-items/item-link-types/
title: Các loại đường dẫn
---

# Các loại đường dẫn (Link Types)

Ô **Link To** trong phần Basic Info quyết định điều gì xảy ra khi người dùng nhấn vào item. Navi+ hỗ trợ nhiều loại đường dẫn vượt ra ngoài URL thông thường.

Khi click vào ô Link To, popup trợ giúp tự mở ra với đầy đủ ví dụ. Bạn cũng có thể gõ trực tiếp vào ô.

---

## 1. Trang nội bộ của store

Dùng đường dẫn ngắn (không cần domain) để dẫn đến các trang trong Shopify store.

| Muốn dẫn đến | Nhập vào |
|---|---|
| Trang chủ | *(để trống)* |
| Tất cả sản phẩm | `collections/all` |
| Một bộ sưu tập | `collections/tên-bộ-sưu-tập` |
| Trang chi tiết sản phẩm | `products/tên-sản-phẩm` |
| Trang tĩnh (About, FAQ...) | `pages/tên-trang` |
| Danh sách blog | `blogs/news` |
| Một bài viết blog | `blogs/news/tên-bài-viết` |
| Giỏ hàng | `cart` |
| Tìm kiếm | `search` |
| Liên hệ | `pages/contact` |

**Mẹo Auto Clean:** Dán URL đầy đủ (ví dụ `https://mystore.com/collections/sale`) → bật toggle **Auto clean** → hệ thống tự cắt domain, chỉ giữ `collections/sale`.

---

## 2. URL đầy đủ (External link)

Dẫn đến bất kỳ trang web nào bằng URL đầy đủ.

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. Mở tab mới

Thêm `@new` vào cuối bất kỳ đường dẫn nào để mở trong tab mới.

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. Không điều hướng (Parent item)

Dùng `#` khi item là cha chứa item con — nhấn vào sẽ mở rộng danh sách con, không chuyển trang.

```
#
```

---

## 5. Cuộn trang (Anchor / Scroll)

| Muốn làm gì | Cú pháp |
|---|---|
| Cuộn lên đầu trang | `scroll:Top` |
| Cuộn lên đầu, giữ khoảng cách 100px | `scroll:Top(100)` |
| Cuộn xuống cuối trang | `scroll:Bottom` |
| Cuộn đến một section theo CSS selector | `scroll:OnPage(#id-section)` *(Business / Elite)* |

**Ví dụ thực tế:** Nút "Back to top" trong menu → Link To là `scroll:Top`.

---

## 6. Mở panel / popup *(Business / Elite)*

| Muốn làm gì | Cú pháp |
|---|---|
| Mở một Navi+ Slide menu | `open:NaviMenu(SF-XXXXXXXXXX)` |
| Click vào một phần tử CSS | `open:clickTo(#cart-button)` |
| Focus vào một ô nhập liệu | `open:focusTo(.search-input)` |
| Mở thanh tìm kiếm / giỏ hàng của theme | dùng popup trợ giúp → *Open panels* |
| Mở Shopify Inbox chat | dùng popup trợ giúp → *Open other applications* |

---

## 7. Gọi điện, SMS, Email

| Muốn làm gì | Cú pháp |
|---|---|
| Gọi điện thoại | `tel:+84123456789` |
| Gửi SMS | `sms:+84123456789?body=Xin chào` |
| Gửi email | `mailto:lienhe@yourdomain.com` |

---

## 8. Chat

| Ứng dụng | Cú pháp |
|---|---|
| WhatsApp | `https://wa.me/84123456789` *(không có dấu +)* |
| Messenger | `https://m.me/TênTrangFacebook` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/mã-line` |

---

## 9. Chia sẻ

| Muốn làm gì | Cú pháp |
|---|---|
| Chia sẻ trang hiện tại (native share dialog) | `open:ShareMe` |
| Sao chép URL vào clipboard | `share:CopyUrl` |
| Chia sẻ lên Facebook | `share:Facebook` |
| Chia sẻ lên Twitter / X | `share:Tweet` |

---

## 10. Gọi JavaScript

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. Đổi ngôn ngữ

```
open:ChangeLanguage(vi)    ← chuyển sang tiếng Việt
open:ChangeLanguage(fr)    ← chuyển sang tiếng Pháp
open:ChangeLanguage()      ← về ngôn ngữ mặc định
```
