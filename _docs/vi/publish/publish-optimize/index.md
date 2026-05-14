---
description: Tối ưu hóa tốc độ và UX sau khi xuất bản các menu Navi+ — ngăn chặn hiện tượng nhấp nháy nội dung gốc khi sử dụng các kích hoạt Chèn/Thay thế hoặc CSS Selector.
lang: vi
layout: default
permalink: /vi/docs/publish/publish-optimize/
title: Tối ưu hóa xuất bản — Tốc độ & UX
---
# Tối ưu hóa xuất bản — Tốc độ & UX

Khi sử dụng **Chèn/Thay thế** (menu Phần) hoặc **kích hoạt CSS Selector** (menu Slide), trang web cần một khoảnh khắc ngắn để tải Navi+. Trong thời gian đó, phần tử gốc (menu cũ của giao diện) vẫn hiển thị — gây ra một **hiện tượng nhấp nháy** hoặc thay đổi bố cục.

---

## Khi nào cần tối ưu hóa?

| Phương pháp | Cần tối ưu hóa? |
|---|---|
| Sticky / FAB (Nhúng ứng dụng / `<head>`) | Không — menu được thêm vào DOM, không có gì bị thay thế |
| Menu Slide — Phương pháp 1 (mở từ mục Navi+) | Không — nút kích hoạt là một mục Navi+ |
| **Menu Slide — Phương pháp 2 (kích hoạt CSS Selector)** | **Có** — phần tử kích hoạt gốc vẫn hiển thị cho đến khi Navi+ tải xong |
| **Phần — Thay thế** | **Có** — menu gốc hiển thị trước, sau đó được thay thế bởi Navi+ |
| Phần — Chèn Trước/Sau | Không cần thiết — hai menu xuất hiện cạnh nhau |

---

## Kỹ thuật: Ẩn phần tử gốc qua CSS

### Cách hoạt động

1. Sử dụng CSS để ẩn phần tử gốc ngay lập tức (trước khi Navi+ tải).
2. Tùy chọn hiển thị một placeholder tải để ngăn chặn thay đổi bố cục.
3. Navi+ tự động xóa hoặc thay thế phần tử khi sẵn sàng — bố cục ổn định.

### Triển khai

**Thêm CSS để ẩn phần tử gốc** (dán vào CSS Tùy chỉnh của giao diện hoặc `<head>`):

```css
/* Ẩn menu gốc trong khi Navi+ tải */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* dự trữ không gian để ngăn chặn thay đổi bố cục */
}
```

Khi Navi+ thay thế phần tử, CSS này không còn tác dụng — phần tử bị xóa khỏi DOM.

**Với placeholder tải** (nâng cao):
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

## Trường hợp đặc biệt: Menu Slide với kích hoạt CSS Selector

Khi một menu Slide sử dụng kích hoạt CSS Selector (Phương pháp 2), phần tử kích hoạt gốc (ví dụ: nút hamburger của giao diện) vẫn hiển thị và **vẫn hoạt động** (mở bảng điều khiển slide của giao diện) cho đến khi Navi+ tải và ghi đè sự kiện.

### Giải pháp A: Ẩn phần tử gốc, sử dụng mục Navi+ làm kích hoạt thay thế

```css
/* Ẩn nút hamburger của giao diện */
#Details-menu-drawer-container {
  display: none !important;
}
```

Sau đó sử dụng **Phương pháp 1** (mở từ mục Navi+) thay vì Phương pháp 2 — sạch hơn, không có hiện tượng nhấp nháy để lo lắng.

### Giải pháp B: Làm mờ phần tử gốc

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

Thêm JS: khi Navi+ sẵn sàng (`naviReady` sự kiện), xóa kiểu ẩn để khôi phục khả năng hiển thị của phần tử gốc.

---

## Ghi chú chung về tốc độ

- `start.js` tải với `async` — không chặn việc hiển thị trang.
- Cấu hình JSON menu được lưu vào bộ nhớ đệm trên Cloudflare CDN — tải nhanh từ nút biên gần nhất.
- Không có việc hiển thị phía máy chủ cho khách truy cập — tất cả việc hiển thị menu là phía khách từ JSON tĩnh.

Để tải trước tập lệnh cho tốc độ tối đa:
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
