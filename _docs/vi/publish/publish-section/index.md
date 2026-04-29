---
description: Publish Section menu (Mega Menu, Grid) trong Navi+ — Insert/Replace với CSS Selector hoặc App Block trên Shopify.
layout: default
permalink: /vi/docs/publish/publish-section/
title: Publish section — Mega menu & grid
---
# Publish Section — Mega Menu & Grid

Áp dụng cho: **Mobile Mega Menu**, **Mobile Grid**, **Desktop Mega Menu**

Section menu **không nổi** — nó được chèn vào một vị trí cụ thể trong layout trang. Có hai phương thức deploy, có thể dùng song song:

| | Method 1: Insert/Replace | Method 2: App Block |
|---|---|---|
| Nền tảng | Shopify + Global | Shopify only |
| Cơ chế | CSS Selector → chèn trước/sau/thay thế element | App Block "Navi+ on Section" trong Theme Editor |
| Linh hoạt | Rất cao — nhúng vào bất kỳ đâu | Trung bình — giới hạn bởi Shopify section schema |
| Setup | Cần biết CSS Selector | Chỉ cần nhập Embed ID |

---

## Method 1: Insert/Replace bằng CSS Selector

Phương thức **Recommended** — áp dụng được cho cả Shopify lẫn Global.

### Bước 1: Nhúng code vào website

**Shopify:** **Theme Editor → App Embeds** → bật Navi+. Chỉ làm một lần.

**Global:** Paste vào `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "NAVI_TOKEN_CUA_BAN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### Bước 2: Bật toggle "Publish menu by Insert/Replace method"

Bật toggle để mở phần cấu hình bên dưới.

### Bước 3: Nhập CSS Selector

Nhập **đúng một** CSS Selector. Menu sẽ được đặt tương đối với element đó.

**Cú pháp tách thiết bị:**

| Suffix | Thiết bị |
|---|---|
| `header` | Cả mobile lẫn desktop |
| `header(M)` | Chỉ mobile |
| `header(D)` | Chỉ desktop |

**CSS Selector gợi ý cho Shopify themes phổ biến:**

| Loại menu | Mục đích | CSS Selector gợi ý |
|---|---|---|
| Desktop Mega | Thay menu desktop | `nav.header__inline-menu ul.list-menu` |
| Desktop Mega | Chèn dưới header | `header` |
| Mobile Mega | Chèn dưới header mobile | `header` |

### Bước 4: Chọn cách đặt menu

| Lựa chọn | Hành vi |
|---|---|
| **Replace** | Thay thế hoàn toàn element cũ bằng Navi+ menu |
| **Insert Before** | Chèn Navi+ menu trước element |
| **Insert After** | Chèn Navi+ menu sau element |

> Sau khi chọn **Replace**, nên thêm CSS ẩn element gốc trong lúc Navi+ load — xem [Publish Optimize](/vi/docs/publish/publish-optimize/).

---

## Method 2: App Block (Shopify only)

### Cách setup

1. Copy **Embed ID** của menu (hiển thị sẵn trong modal, click để copy).
2. Vào **Shopify Theme Editor** → tìm App Block **"Navi+ on Section"**.
3. Paste Embed ID vào field tương ứng.
4. Lưu theme.

### "Fixed on top while scrolling"

Toggle để ghim Section menu cố định ở đầu trang khi scroll.

**Khi nào dùng:** Nếu theme không có sticky header sẵn, bật tùy chọn này để Desktop Mega menu luôn hiển thị khi user scroll xuống.

---

## Có thể dùng cả hai method cùng lúc không?

Có. Shopify users có thể bật cả hai:
- App Block để preview trong Theme Editor (ổn định hơn).
- Insert/Replace để nhúng chính xác hơn trên storefront.

Thông thường chỉ cần một trong hai.

---

## Lưu ý theo loại menu

| Menu | Thiết bị | Ghi chú |
|---|---|---|
| Mobile Mega Menu | Desktop toggle disable | Chỉ dành cho mobile |
| Mobile Header | Desktop toggle disable | Chỉ dành cho mobile |
| Desktop Mega Menu | Mobile toggle disable | Chỉ dành cho desktop |
| Mobile Grid | Cả hai | Không có hạn chế |

---

## Troubleshooting

**Menu không xuất hiện sau khi cấu hình Insert/Replace?**
1. Kiểm tra CSS Selector có đúng không — dùng DevTools hoặc Navi+ Debug Mode.
2. Kiểm tra toggle "Publish menu by Insert/Replace method" đã bật chưa.
3. Kiểm tra App Embeds / embed code đã được nhúng chưa.

**Menu xuất hiện nhưng bị nhân đôi?**
→ Cả App Block lẫn Insert/Replace đang hoạt động cùng lúc. Tắt một trong hai.
