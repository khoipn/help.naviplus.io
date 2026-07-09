---
description: Cài đặt Navi+ trên Shopify hoặc bất kỳ trang web nào, và hiểu ba cách mà Navi+ triển khai menu — nổi, định vị, và kích hoạt.
lang: vi
layout: default
permalink: /vi/docs/how-to-install-navi/
title: Cài đặt Navi+
---
# Cài đặt Navi+

## Bước 1 — Cài đặt

**Shopify:** Cài từ [Shopify App Store](https://apps.shopify.com/pronavi-navigation-design). App tự động mở sau khi cài.

**Wix:** Cài Navi+ từ [Wix App Market](https://www.wix.com/app-market). Nó mở trong dashboard Wix của bạn và tự nhúng vào site live — không cần dán code, không cần tài khoản riêng. Xác thực và thanh toán xử lý qua Wix.

**Các nền tảng khác** (WordPress, WooCommerce, Webflow, Squarespace, hay bất kỳ website):
1. Tạo tài khoản miễn phí tại [dash.naviplus.app](https://dash.naviplus.app)
2. Khai báo tên miền website của bạn
3. Copy đoạn embed snippet — sẽ dùng ở Bước 2

---

## Bước 2 — Hiểu cách menu của bạn sẽ triển khai

Navi+ dùng **ba phương pháp triển khai khác nhau** tùy theo loại menu. Hiểu từ đầu sẽ tiết kiệm thời gian cài đặt.

### 1. Menu nổi — Tab Bar & FAB

Tab Bar và FAB là **menu dính** nổi trên trang của bạn ở vị trí cố định. Chúng không bao giờ cuộn mất.

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">📍</div>
    <strong>Vị trí</strong><br>Đỉnh, đáy, trái, hoặc phải của màn hình
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔼</div>
    <strong>Tự ẩn khi cuộn</strong><br>Ẩn khi cuộn xuống, lộ lại khi cuộn lên
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">👇</div>
    <strong>Hiển thị khi cuộn</strong><br>Ẩn mặc định, chỉ hiển thị khi user cuộn xuống — tiết kiệm không gian
  </div>
</div>

**Trường hợp sử dụng phổ biến:** gộp các yếu tố nổi khác — WhatsApp, Crisp, Messenger, live chat — vào menu item Navi+. Giải phóng không gian màn hình, bỏ đi sự lộn xộn của nhiều icon nổi xếp chồng.

### 2. Menu định vị — Mega Menu & Grid Menu

Mega Menu và Grid Menu cần **đặt ở một vị trí cụ thể** trên trang. Có vài cách:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🎯</div>
    <strong>CSS Selector</strong><br>Chỉ định Navi+ đến phần tử trên trang. Chèn trước, sau, hoặc thay thế — cách Mega Menu có thể thay hoàn toàn menu cũ.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🧩</div>
    <strong>Shopify Section</strong><br>Dùng App Block trong Theme Customizer để đặt menu vào bất kỳ phần nào — không cần code.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🖥️</div>
    <strong>Embed code</strong><br>Dán đoạn mã vào HTML trang tại điểm chính xác menu cần xuất hiện.
  </div>
</div>

> **CSS Selector** là cách xác định bất kỳ phần tử trên trang — cách trình duyệt nhắm đến những phần cụ thể. Navi+ dùng để biết chính xác nơi tiêm menu. Bạn không cần viết CSS; Navi+ có công cụ chọn hình ảnh tìm selector cho bạn.

### 3. Menu kích hoạt — Slide Menu

Slide Menu **không hiện tự động**. Nó ẩn cho đến khi có điều gì kích hoạt:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">☰</div>
    <strong>Phần tử có sẵn</strong><br>User bấm thứ gì đó trên trang — như icon hamburger của theme
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">⚡</div>
    <strong>Trigger tùy chỉnh</strong><br>Bất kỳ phần tử trên trang — xác định bằng CSS Selector
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔗</div>
    <strong>Menu Navi+ khác</strong><br>Item Tab Bar hoặc FAB bấm vào là mở Slide Menu
  </div>
</div>

Điều này làm Slide Menu linh hoạt — có thể thay menu cũ mà không thêm gì mới về mặt hình ảnh.

---

## Bước 3 — Tạo menu đầu tiên

Sau cài đặt, vào dashboard tạo menu đầu tiên. → [Menu đầu tiên của bạn (quickstart 5 phút)](/docs/getting-started/your-first-menu/)
