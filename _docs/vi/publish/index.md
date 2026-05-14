---
description: Xuất bản menu Navi+ của bạn lên website — bật/tắt, chọn phương thức nhúng, cấu hình khả năng hiển thị trên thiết bị và lọc theo URL.
lang: vi
layout: default
permalink: /vi/docs/publish/
title: Xuất bản
---
# Xuất bản

Phần **Xuất bản** kiểm soát cách menu của bạn xuất hiện trên website trực tiếp: bật/tắt menu, chọn phương thức nhúng, cấu hình khả năng hiển thị trên thiết bị và lọc theo URL. Đây là bước cuối cùng sau khi thiết kế — nếu không lưu cài đặt Xuất bản, menu sẽ không xuất hiện.

---

## Các chủ đề

| # | Chủ đề | |
|---|---|---|
| 1 | Tổng quan về các loại menu và phương thức triển khai | [Tổng quan Xuất bản](/docs/publish/publish-overview/) |
| 2 | Sticky / FAB — Nhúng ứng dụng (Shopify) hoặc `<head>` (Toàn cầu) | [Xuất bản Sticky](/docs/publish/publish-sticky/) |
| 3 | Menu trượt — kích hoạt dựa trên kích hoạt | [Xuất bản Slide](/docs/publish/publish-slide/) |
| 4 | Phần / Mega / Lưới — Chèn/Thay thế và Khối ứng dụng | [Xuất bản Section](/docs/publish/publish-section/) |
| 5 | Lọc theo thiết bị và từ khóa URL | [Xuất bản Filter](/docs/publish/publish-filter/) |
| 6 | Tối ưu hóa tốc độ và UX sau khi xuất bản | [Xuất bản Optimize](/docs/publish/publish-optimize/) |

---

## Tham khảo nhanh

```
Loại menu           Phương thức chính
────────────────────────────────────────────────────
Sticky / TABBAR     Nhúng ứng dụng (Shopify) / <head> (Toàn cầu) + bật công tắc
Sticky / FAB        Nhúng ứng dụng (Shopify) / <head> (Toàn cầu) + bật công tắc
Slide (CONTEXT)     Nhúng ứng dụng / <head> + bật công tắc + cấu hình kích hoạt
Phần (Mega/Lưới) Chèn/Thay thế (CSS Selector) hoặc Khối ứng dụng (Shopify)
```

**Quy tắc:** Bật công tắc = menu đang hoạt động. Tắt công tắc = hoàn toàn ẩn khỏi website, không cần xóa mã nhúng.
