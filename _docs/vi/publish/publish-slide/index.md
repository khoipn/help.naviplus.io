---
description: Publish Slide (Context) menu trong Navi+ — bật toggle rồi cấu hình trigger để mở menu.
layout: default
permalink: /vi/docs/publish/publish-slide/
title: Publish Slide — Context Slide Menu
---
# Publish Slide — Context Slide Menu

Áp dụng cho: **Context Slide menu**

Slide menu **khác với Sticky**: sau khi publish, menu **không tự xuất hiện** trên trang. Nó chỉ mở khi có sự kiện kích hoạt (trigger). Đây là điểm khác biệt quan trọng so với Sticky menu.

---

## Luồng publish

```
Bước 1: Nhúng code vào website
        ↓
Bước 2: Bật toggle "Publish this menu"
        ↓
Bước 3: Cấu hình trigger (cách mở menu)
```

Sau Bước 2, menu đã được tải lên website nhưng **ở trạng thái ẩn**. Bước 3 quyết định cái gì sẽ mở nó ra.

---

## Bước 1: Nhúng code

**Shopify:** Vào **Theme Editor → App Embeds** → bật Navi+. Chỉ làm một lần.

**Global:** Paste vào `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "NAVI_TOKEN_CUA_BAN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Bước 2: Bật toggle

Bật toggle **"Publish this menu"** trong modal Publish.

> Sau bước này, menu **chưa xuất hiện** trên website. Đây là hành vi đúng — Slide menu cần trigger để mở.

---

## Bước 3: Cấu hình trigger

Có 4 cách kích hoạt Slide menu:

---

### Method 1: Mở từ item của menu Navi+ khác

Dùng cú pháp `open:NaviMenu(embed_id)` trong phần **Link** của bất kỳ menu item nào.

Ví dụ: Tabbar có item "Menu" → Link = `open:NaviMenu(ABC123)` → tap vào item đó sẽ mở Slide menu.

**embed_id** hiển thị sẵn trong modal, click để copy:
```
open:NaviMenu(ABC123)
```

Đây là cách phổ biến nhất — kết hợp Tabbar + Slide menu để mở rộng không gian điều hướng.

---

### Method 2: Mở khi click/tap một element trên trang (CSS Selector)

Nhập một hoặc nhiều CSS Selector, cách nhau bằng dấu phẩy. Navi+ lắng nghe sự kiện click/tap trên các element khớp và mở Slide menu.

**Cú pháp tách thiết bị:**

| Suffix | Thiết bị |
|---|---|
| `#element` | Cả mobile lẫn desktop |
| `#element(M)` | Chỉ mobile |
| `#element(D)` | Chỉ desktop |

**Ví dụ cho Shopify Dawn theme:**

| Mục đích | CSS Selector |
|---|---|
| Thay hamburger menu mobile | `#Details-menu-drawer-container` |
| Tách mobile/desktop | `#Details-menu-drawer-container(M), .desktop-menu-btn(D)` |

> Sau khi cấu hình CSS Selector trigger, nên ẩn element gốc để tránh flash — xem [Publish Optimize](/vi/docs/publish/publish-optimize/).

---

### Method 3: Gọi JavaScript function (dành cho developer)

Gọi hàm này từ bất kỳ đâu trong code trang:

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Phù hợp khi muốn tích hợp Slide menu vào UI tùy chỉnh, không dùng selector cố định.

---

### Method 4: Sidebar cố định trên desktop

Thay vì mở/đóng, Slide menu có thể được ghim như sidebar cố định bên trái màn hình desktop.

**Cách bật:** Vào tab **Advance** → chọn hướng **"Fix on left"**.

Không cần trigger — menu luôn hiện ở đó trên desktop.

---

## Troubleshooting

**Bật toggle nhưng menu không hiện gì?**
→ Đúng. Slide menu cần trigger (Bước 3). Kiểm tra đã cấu hình ít nhất một method chưa.

**CSS Selector không hoạt động?**
1. Dùng **Navi+ Debug Mode** để tìm đúng selector của element.
2. Kiểm tra element có thực sự tồn tại trên trang không.
3. Thử thêm suffix `(M)` hoặc `(D)` để tách theo thiết bị.

**Muốn nhiều Slide menu trên cùng trang?**
→ Tạo nhiều menu riêng biệt, mỗi menu có `embed_id` khác nhau, dùng các trigger khác nhau.
