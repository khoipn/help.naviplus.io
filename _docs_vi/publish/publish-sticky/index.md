---
description: Publish Sticky menu (Tabbar, Mobile Header, FAB) trong Navi+ — dùng App Embeds cho Shopify hoặc nhúng script cho Global.
layout: default
permalink: /vi/docs/publish/publish-sticky/
title: Publish Sticky — Tabbar & FAB
---
# Publish Sticky — Tabbar & FAB

Áp dụng cho: **Tabbar**, **Mobile Header**, **FAB / Support bar**

Sticky menu là loại menu "nổi" — luôn hiển thị trên màn hình, không gắn vào vị trí DOM cố định. Phương thức nhúng đơn giản nhất: kích hoạt toàn site thông qua một đoạn script duy nhất.

---

## Shopify — 3 bước

### Bước 1: Kích hoạt App Embeds trong Theme Editor

Vào **Theme Editor → App Embeds** và bật toggle của Navi+.

- Không thay đổi layout theme, có thể tắt bất cứ lúc nào mà không ảnh hưởng shop.
- Chỉ cần làm **một lần** cho toàn bộ shop — các menu tiếp theo bỏ qua bước này.

### Bước 2: Bật toggle "Publish this menu in sticky mode"

Toggle trong card **Step 2** của modal Publish. Bật = menu live, tắt = ẩn khỏi website.

### Bước 3 (tuỳ chọn): Cấu hình thiết bị và trang hiển thị

Xem [Publish Filter](/vi/docs/publish/publish-filter/) để biết chi tiết.

---

## Global (WordPress, Wix, Webflow...) — 3 bước

### Bước 1: Paste embed code vào `<head>`

Đoạn code hiển thị sẵn trong modal, có nút **Copy**. Paste vào `<head>` của website:

```html
<script>(window._navi_setting ||= []).push({
  token: "NAVI_TOKEN_CUA_BAN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` là mã định danh shop — mỗi shop có một token riêng.
- `start.js` tải async, không block render trang.

### Bước 2: Bật toggle "Publish this menu in sticky mode"

Giống Shopify — bật toggle.

### Bước 3 (tuỳ chọn): Cấu hình thiết bị và trang hiển thị

Xem [Publish Filter](/vi/docs/publish/publish-filter/) để biết chi tiết.

---

## Lưu ý theo loại menu

| Menu | Hạn chế |
|---|---|
| Mobile Header | Desktop toggle bị disable — chỉ hiện mobile |
| FAB / Support bar | Không có phần chọn vị trí (FAB có cơ chế vị trí riêng trong tab Setting) |
| Tabbar | Đầy đủ tùy chọn mobile + desktop |

---

## Troubleshooting

**Menu không hiện sau khi bật toggle?**
1. Kiểm tra App Embeds đã bật chưa (Shopify) / embed code đã paste đúng chưa (Global).
2. Kiểm tra setting thiết bị — **Show menu on mobile** hoặc **Show menu on desktop** phải được bật.
3. Kiểm tra URL filter có đang lọc trang hiện tại không.
4. Hard refresh browser (Ctrl+Shift+R) để xóa cache.
