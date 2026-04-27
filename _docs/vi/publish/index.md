---
description: Xuất bản menu Navi+ lên website — bật/tắt menu, chọn phương thức nhúng, cấu hình thiết bị và lọc URL.
layout: default
permalink: /vi/docs/publish/
title: Publish
---
# Publish

Phần **Publish** kiểm soát cách menu xuất hiện trên website thực: bật/tắt menu, chọn phương thức nhúng, cấu hình thiết bị và lọc URL. Đây là bước cuối cùng sau khi thiết kế — không lưu Publish = menu không hiện.

---

## Chủ đề

| # | Chủ đề | |
|---|---|---|
| 1 | Tổng quan: loại menu và phương thức deploy | [Tổng quan Publish](/vi/docs/publish/publish-overview/) |
| 2 | Sticky / FAB — App Embeds (Shopify) hoặc `<head>` (Global) | [Publish Sticky](/vi/docs/publish/publish-sticky/) |
| 3 | Slide menu — kích hoạt bằng trigger | [Publish Slide](/vi/docs/publish/publish-slide/) |
| 4 | Section / Mega / Grid — Insert/Replace và App Block | [Publish Section](/vi/docs/publish/publish-section/) |
| 5 | Lọc hiển thị theo thiết bị và URL keyword | [Publish Filter](/vi/docs/publish/publish-filter/) |
| 6 | Tối ưu tốc độ và UX sau khi publish | [Publish Optimize](/vi/docs/publish/publish-optimize/) |

---

## Tóm tắt nhanh

```
Loại menu           Phương thức chính
────────────────────────────────────────────────────
Sticky / TABBAR     App Embeds (Shopify) / <head> (Global) + bật toggle
Sticky / FAB        App Embeds (Shopify) / <head> (Global) + bật toggle
Slide (CONTEXT)     App Embeds / <head> + bật toggle + cấu hình trigger
Section (Mega/Grid) Insert/Replace (CSS Selector) hoặc App Block (Shopify)
```

**Nguyên tắc:** Bật toggle = menu live. Tắt toggle = ẩn hoàn toàn khỏi website, không cần xóa nhúng code.
