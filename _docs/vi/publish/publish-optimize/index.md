---
description: Tối ưu tốc độ và UX sau khi publish menu Navi+ — tránh flash nội dung gốc khi dùng Insert/Replace hoặc CSS Selector trigger.
layout: default
permalink: /vi/docs/publish/publish-optimize/
title: Publish optimize — Tốc độ & UX
---
# Publish Optimize — Tốc độ & UX

Khi dùng **Insert/Replace** (Section menu) hoặc **CSS Selector trigger** (Slide menu), website cần một khoảng thời gian nhỏ để tải Navi+. Trong lúc đó, element gốc (menu cũ của theme) vẫn hiện — gây ra hiện tượng **flash** (nhấp nháy) hoặc layout shift không mong muốn.

---

## Khi nào cần tối ưu?

| Phương thức | Cần tối ưu? |
|---|---|
| Sticky / FAB (App Embeds / `<head>`) | Không — menu thêm vào DOM, không replace |
| Slide menu — Method 1 (mở từ Navi+ item) | Không — trigger button là Navi+ item |
| **Slide menu — Method 2 (CSS Selector trigger)** | **Có** — element trigger gốc vẫn hiện cho đến khi Navi+ load |
| **Section — Replace** | **Có** — menu gốc hiện trước, sau đó bị replace bởi Navi+ |
| Section — Insert Before/After | Không bắt buộc — hai menu xuất hiện song song |

---

## Kỹ thuật: Ẩn element gốc bằng CSS

### Nguyên lý

1. Dùng CSS ẩn element gốc ngay từ đầu (trước khi Navi+ load).
2. Optionally: hiện loading placeholder để tránh layout shift.
3. Navi+ tự động remove hoặc replace element đó khi sẵn sàng — layout ổn định.

### Cách thực hiện

**Thêm CSS ẩn element gốc** (paste vào Custom CSS của theme hoặc `<head>`):

```css
/* Ẩn menu gốc trong khi chờ Navi+ load */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* giữ chỗ để tránh layout shift */
}
```

Sau khi Navi+ replace element, CSS này không còn tác dụng vì element đã bị xóa khỏi DOM.

**Dùng loading placeholder** (nâng cao):
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

## Trường hợp đặc biệt: Slide menu với CSS Selector trigger

Khi Slide menu dùng CSS Selector (Method 2), element trigger gốc (ví dụ hamburger button của theme) vẫn hiện và **vẫn hoạt động** (mở slide panel của theme) cho đến khi Navi+ load xong.

### Giải pháp A: Ẩn hoàn toàn, dùng Navi+ item làm trigger

```css
/* Ẩn hamburger button gốc của theme */
#Details-menu-drawer-container {
  display: none !important;
}
```

Rồi dùng **Method 1** (mở từ Navi+ item) thay vì Method 2 — sạch hơn, không cần lo flash.

### Giải pháp B: Fade out tạm thời

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

Thêm JS: khi Navi+ load xong (event `naviReady`), xóa style ẩn để element gốc visible trở lại.

---

## Tối ưu tốc độ load chung

- Script `start.js` tải với `async` — không block render trang.
- JSON config của menu được cache trên Cloudflare CDN — load nhanh từ edge node gần nhất.
- Toàn bộ menu render client-side từ JSON tĩnh — không có server-side rendering cho visitor.

Để preload script tối đa tốc độ:
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
