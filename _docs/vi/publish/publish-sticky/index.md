---
description: Xuất bản các menu dính (Tabbar, Tiêu đề Di động, FAB) trong Navi+ — sử dụng App Embeds cho Shopify hoặc tiêm mã cho các trang toàn cầu.
lang: vi
layout: default
permalink: /vi/docs/publish/publish-sticky/
title: Xuất bản dính — Tabbar & FAB
---
# Xuất bản dính — Tabbar & FAB

Áp dụng cho: **Tabbar**, **Mobile Header**, **FAB / Thanh hỗ trợ**

Menu dính là những menu nổi — chúng luôn xuất hiện trên màn hình và không gắn vào một vị trí DOM cố định. Phương pháp nhúng đơn giản nhất: kích hoạt toàn site qua một script duy nhất.

---

## Shopify — 3 bước

### Bước 1: Bật App Embeds trong Theme Editor

Vào **Theme Editor → App Embeds** và bật toggle Navi+.

- Điều này **không thay đổi bố cục theme** và có thể tắt bất cứ lúc nào mà không ảnh hưởng đến cửa hàng.
- Chỉ cần làm **một lần cho mỗi cửa hàng** — bỏ qua bước này cho các menu tiếp theo.

### Bước 2: Bật "Xuất bản menu này ở chế độ dính"

Toggle trong thẻ **Bước 2** của modal Xuất bản. Bật = menu live, tắt = ẩn khỏi website.

### Bước 3 (tùy chọn): Cấu hình hiển thị theo thiết bị và trang

Xem [Lọc Xuất bản](/docs/publish/publish-filter/) để biết chi tiết.

---

## Global (WordPress, Squarespace, Webflow...) — 3 bước

### Bước 1: Dán mã nhúng vào `<head>`

> **Người dùng app Wix bỏ qua bước này** — nếu bạn cài Navi+ từ Wix App Market, nhúng tự động và không cần dán code. Nhảy tới Bước 2.

Mã hiển thị trong modal kèm nút **Copy**. Dán vào `<head>` của website:

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` xác định cửa hàng của bạn — mỗi cửa hàng có token duy nhất.
- `start.js` tải async và không chặn rendering trang.

### Bước 2: Bật "Xuất bản menu này ở chế độ dính"

Giống Shopify — bật toggle.

### Bước 3 (tùy chọn): Cấu hình hiển thị theo thiết bị và trang

Xem [Lọc Xuất bản](/docs/publish/publish-filter/) để biết chi tiết.

---

## Ghi chú theo loại menu

| Menu | Hạn chế |
|---|---|
| Mobile Header | Toggle desktop bị tắt — chỉ mobile |
| FAB / Thanh hỗ trợ | Không có bộ chọn vị trí (FAB có vị trí riêng trong tab Setting) |
| Tabbar | Đầy đủ tùy chọn mobile + desktop |

---

## Khắc phục sự cố

**Menu không xuất hiện sau khi bật toggle?**
1. Kiểm tra App Embeds đã bật (Shopify) hoặc mã nhúng dán đúng (Global).
2. Kiểm tra cài đặt thiết bị — **Hiển thị menu trên mobile** hoặc **Hiển thị menu trên desktop** phải bật.
3. Kiểm tra bộ lọc URL — có thể đang lọc trang hiện tại.
4. Tải lại trình duyệt (Ctrl+Shift+R) để xóa cache.
