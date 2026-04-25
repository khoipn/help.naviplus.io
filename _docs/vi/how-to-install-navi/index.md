---
description: Cài đặt Navi+ trên Shopify hoặc bất kỳ website nào, và hiểu 3 cách Navi+ triển khai menu — floating, positioned và triggered.
lang: vi
layout: default
permalink: /vi/docs/how-to-install-navi/
title: Cài đặt Navi+
---
# Cài đặt Navi+

## Bước 1 — Cài đặt

**Shopify:** Cài từ [Shopify App Store](https://apps.shopify.com/pronavi-navigation-design). App tự động mở sau khi cài xong.

**Nền tảng khác** (WordPress, WooCommerce, Wix, Webflow, Squarespace, hoặc bất kỳ website nào):
1. Tạo tài khoản miễn phí tại [dash.naviplus.app](https://dash.naviplus.app)
2. Thêm domain website của bạn
3. Sao chép embed snippet — bạn sẽ dùng ở Bước 2

---

## Bước 2 — Hiểu cách menu của bạn được triển khai

Navi+ sử dụng **3 phương thức triển khai khác nhau** tùy theo loại menu. Hiểu điều này trước sẽ giúp bạn setup nhanh hơn.

### 1. Floating menus — Tab Bar & FAB

Tab Bar và FAB là **sticky menu** — chúng nổi trên trang ở một vị trí cố định, không bao giờ cuộn theo trang.

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">📍</div>
    <strong>Vị trí</strong><br>Cạnh trên, dưới, trái hoặc phải của màn hình — tùy chọn của bạn
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔼</div>
    <strong>Tự động ẩn khi scroll</strong><br>Ẩn khi cuộn xuống, hiện lại khi cuộn lên
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">👇</div>
    <strong>Chỉ hiện khi scroll xuống</strong><br>Mặc định ẩn, chỉ xuất hiện khi người dùng scroll xuống — tiết kiệm không gian hiển thị
  </div>
</div>

**Một use case phổ biến:** gom các thành phần floating khác — WhatsApp, Crisp, Messenger, live chat widget — thành các menu item trong Navi+. Điều này giải phóng không gian màn hình và loại bỏ tình trạng nhiều icon floating chồng lên nhau.

### 2. Positioned menus — Mega Menu & Grid Menu

Mega Menu và Grid Menu cần được **đặt vào một vị trí cụ thể** trên trang. Có nhiều cách để thực hiện:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🎯</div>
    <strong>CSS Selector</strong><br>Trỏ Navi+ đến bất kỳ phần tử nào trên trang. Chèn trước, chèn sau, hoặc thay thế hoàn toàn — đây là cách Mega Menu thay thế menu navigation hiện có của theme.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🧩</div>
    <strong>Shopify Section</strong><br>Dùng App Block trong Theme Customizer để đặt menu vào bất kỳ section nào — không cần động vào code.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🖥️</div>
    <strong>Embed code</strong><br>Dán một đoạn snippet ngắn trực tiếp vào HTML tại đúng vị trí menu cần hiển thị.
  </div>
</div>

> **CSS Selector** là cách để xác định bất kỳ điểm nào trên một trang web — đây là cơ chế trình duyệt dùng để nhắm vào các phần tử cụ thể. Navi+ dùng nó để biết chính xác nơi cần inject menu. Bạn không cần tự viết CSS; Navi+ có công cụ chọn trực quan giúp tìm selector cho bạn.

### 3. Triggered menus — Slide Menu

Slide Menu **không tự động hiển thị**. Nó ẩn cho đến khi có thứ gì đó kích hoạt nó:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">☰</div>
    <strong>Phần tử có sẵn</strong><br>Người dùng click vào thứ gì đó đã có trên trang — ví dụ icon hamburger của theme
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">⚡</div>
    <strong>Trigger tùy chỉnh</strong><br>Bất kỳ phần tử nào trên trang — được chỉ định thông qua CSS Selector
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔗</div>
    <strong>Menu Navi+ khác</strong><br>Một Tab Bar hoặc FAB item mở Slide Menu khi được click
  </div>
</div>

Điều này khiến Slide Menu rất linh hoạt — nó có thể thay thế navigation hiện tại mà không cần thêm bất cứ thứ gì mới nhìn thấy được trên trang.

---

## Bước 3 — Tạo menu đầu tiên

Sau khi cài xong, vào dashboard và tạo menu đầu tiên. → [Menu đầu tiên của bạn (5 phút)](/vi/docs/getting-started/your-first-menu/)
