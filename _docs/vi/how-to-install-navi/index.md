---
description: Cài đặt Navi+ trên Shopify hoặc bất kỳ trang web nào, và hiểu ba cách mà Navi+ triển khai menu — nổi, định vị, và kích hoạt.
lang: vi
layout: default
permalink: /vi/docs/how-to-install-navi/
title: Cài đặt Navi+
---
# Cài đặt Navi+

## Bước 1 — Cài đặt

**Shopify:** Cài đặt từ [Shopify App Store](https://apps.shopify.com/pronavi-navigation-design). Ứng dụng sẽ tự động mở sau khi cài đặt.

**Các nền tảng khác** (WordPress, WooCommerce, Wix, Webflow, Squarespace, hoặc bất kỳ trang web nào):
1. Tạo một tài khoản miễn phí tại [dash.naviplus.app](https://dash.naviplus.app)
2. Thêm tên miền trang web của bạn
3. Sao chép đoạn mã nhúng của bạn — bạn sẽ sử dụng nó ở Bước 2

---

## Bước 2 — Hiểu cách menu của bạn sẽ được triển khai

Navi+ sử dụng **ba phương pháp triển khai khác nhau** tùy thuộc vào loại menu. Hiểu điều này ngay từ đầu sẽ tiết kiệm thời gian trong quá trình thiết lập.

### 1. Menu nổi — Tab Bar & FAB

Tab Bar và FAB là **menu dính** nổi trên trang của bạn ở vị trí cố định. Chúng không bao giờ cuộn đi.

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">📍</div>
    <strong>Vị trí</strong><br>Đỉnh, đáy, bên trái, hoặc bên phải của màn hình
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔼</div>
    <strong>Tự động ẩn khi cuộn</strong><br>Ẩn khi cuộn xuống, xuất hiện lại khi cuộn lên
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">👇</div>
    <strong>Hiện khi cuộn xuống</strong><br>Ẩn theo mặc định, chỉ xuất hiện khi người dùng cuộn xuống — tiết kiệm không gian màn hình
  </div>
</div>

**Một trường hợp sử dụng phổ biến:** hợp nhất các yếu tố nổi khác — WhatsApp, Crisp, Messenger, các widget trò chuyện trực tiếp — vào các mục menu của Navi+. Điều này giải phóng không gian màn hình và loại bỏ sự lộn xộn của nhiều biểu tượng nổi chồng lên nhau.

### 2. Menu định vị — Mega Menu & Grid Menu

Mega Menu và Grid Menu cần được **đặt ở một vị trí cụ thể** trên trang của bạn. Có một số cách để làm điều này:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🎯</div>
    <strong>CSS Selector</strong><br>Chỉ định Navi+ đến bất kỳ phần tử nào trên trang của bạn. Chèn trước, sau, hoặc thay thế hoàn toàn — đây là cách Mega Menu có thể hoàn toàn thay thế điều hướng hiện có của chủ đề của bạn.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🧩</div>
    <strong>Phần Shopify</strong><br>Sử dụng một App Block bên trong Theme Customizer để thả menu vào bất kỳ phần nào của bố cục của bạn — không cần mã.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🖥️</div>
    <strong>Mã nhúng</strong><br>Dán một đoạn mã ngắn trực tiếp vào HTML của trang của bạn tại vị trí chính xác mà menu nên xuất hiện.
  </div>
</div>

> **CSS Selector** là một cách để xác định bất kỳ điểm nào trên một trang web — đó là cách mà các trình duyệt nhắm đến các phần tử cụ thể. Navi+ sử dụng nó để biết chính xác nơi để chèn menu của bạn. Bạn không cần phải viết CSS cho riêng mình; Navi+ có một công cụ chọn hình ảnh tìm selector cho bạn.

### 3. Menu kích hoạt — Slide Menu

Slide Menu **không xuất hiện một mình**. Nó vẫn ẩn cho đến khi có điều gì đó kích hoạt nó:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">☰</div>
    <strong>Phần tử hiện có</strong><br>Một người dùng nhấp vào một cái gì đó đã có trên trang của bạn — như biểu tượng hamburger của chủ đề của bạn
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">⚡</div>
    <strong>Kích hoạt tùy chỉnh</strong><br>Bất kỳ phần tử nào trên trang của bạn — được chỉ định bởi CSS Selector của nó
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔗</div>
    <strong>Menu Navi+ khác</strong><br>Một mục Tab Bar hoặc FAB mở Slide Menu khi được nhấp
  </div>
</div>

Điều này làm cho Slide Menu linh hoạt — nó có thể thay thế điều hướng hiện có của bạn mà không thêm bất kỳ điều gì mới về mặt hình ảnh vào trang.

---

## Bước 3 — Tạo menu đầu tiên của bạn

Sau khi cài đặt, hãy đến bảng điều khiển và tạo menu đầu tiên của bạn. → [Menu đầu tiên của bạn (hướng dẫn nhanh 5 phút)](/docs/getting-started/your-first-menu/)
