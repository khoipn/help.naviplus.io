---
description: Xuất bản các menu dính (Tabbar, Tiêu đề Di động, FAB) trong Navi+ — sử dụng App Embeds cho Shopify hoặc tiêm mã cho các trang toàn cầu.
lang: vi
layout: default
permalink: /vi/docs/publish/publish-sticky/
title: Xuất bản dính — Tabbar & FAB
---
# Xuất bản dính — Tabbar & FAB

Áp dụng cho: **Tabbar**, **Tiêu đề Di động**, **FAB / Thanh hỗ trợ**

Các menu dính là nổi — chúng luôn xuất hiện trên màn hình và không gắn liền với một vị trí DOM cố định. Phương pháp nhúng là đơn giản nhất: kích hoạt trên toàn trang web thông qua một mã duy nhất.

---

## Shopify — 3 bước

### Bước 1: Kích hoạt App Embeds trong Trình chỉnh sửa giao diện

Đi đến **Trình chỉnh sửa giao diện → App Embeds** và kích hoạt công tắc Navi+.

- Điều này **không thay đổi bố cục giao diện** và có thể tắt bất cứ lúc nào mà không ảnh hưởng đến cửa hàng.
- Chỉ cần thực hiện **một lần cho mỗi cửa hàng** — bỏ qua bước này cho các menu tiếp theo.

### Bước 2: Kích hoạt "Xuất bản menu này ở chế độ dính"

Công tắc trong thẻ **Bước 2** của hộp thoại Xuất bản. Kích hoạt = menu đang hoạt động, tắt = ẩn khỏi trang web.

### Bước 3 (tùy chọn): Cấu hình khả năng hiển thị thiết bị và trang

Xem [Bộ lọc Xuất bản](/docs/publish/publish-filter/) để biết chi tiết.

---

## Toàn cầu (WordPress, Wix, Webflow...) — 3 bước

### Bước 1: Dán mã nhúng vào `<head>`

Mã được hiển thị trong hộp thoại với nút **Sao chép**. Dán nó vào `<head>` của trang web của bạn:

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` xác định cửa hàng của bạn — mỗi cửa hàng có một mã token duy nhất.
- `start.js` tải không đồng bộ và không chặn việc hiển thị trang.

### Bước 2: Kích hoạt "Xuất bản menu này ở chế độ dính"

Giống như Shopify — kích hoạt công tắc.

### Bước 3 (tùy chọn): Cấu hình khả năng hiển thị thiết bị và trang

Xem [Bộ lọc Xuất bản](/docs/publish/publish-filter/) để biết chi tiết.

---

## Ghi chú theo loại menu

| Menu | Hạn chế |
|---|---|
| Tiêu đề Di động | Công tắc máy tính để bàn bị vô hiệu hóa — chỉ di động |
| FAB / Thanh hỗ trợ | Không có bộ chọn vị trí (FAB có vị trí riêng trong tab Cài đặt) |
| Tabbar | Tùy chọn di động + máy tính để bàn đầy đủ có sẵn |

---

## Khắc phục sự cố

**Menu không xuất hiện sau khi kích hoạt công tắc?**
1. Kiểm tra xem App Embeds đã được kích hoạt (Shopify) hoặc mã nhúng đã được dán chính xác (Toàn cầu).
2. Kiểm tra cài đặt thiết bị — **Hiển thị menu trên di động** hoặc **Hiển thị menu trên máy tính để bàn** phải được bật.
3. Kiểm tra bộ lọc URL — nó có thể đang lọc trang hiện tại.
4. Tải lại trình duyệt (Ctrl+Shift+R) để xóa bộ nhớ cache.
