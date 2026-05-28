---
description: Dịch tên, mô tả và liên kết của các mục menu sang nhiều ngôn ngữ bằng AI — chỉ trong vài bước. Dành cho gói Business / Elite.
lang: vi
layout: default
permalink: /vi/docs/ai/auto-translate/
title: Tự động dịch menu
---
# Tự động dịch menu

Dịch tên, mô tả và liên kết của các mục menu sang nhiều ngôn ngữ chỉ trong vài bước, thay vì nhập thủ công từng bản dịch. *(Business / Elite)*

Mở: nút **AI** → thẻ **Tự động dịch menu**.

---

## Bước 1 — Sao lưu menu

> **⋮ More → Backup / Restore** — tạo một bản sao menu trước khi dịch.

---

## Bước 2 — Chọn ngôn ngữ đích

Gõ vào ô tìm kiếm để chọn một hoặc nhiều ngôn ngữ muốn dịch sang. AI sẽ dịch **tên**, **liên kết** và **mô tả** của các mục.

> Bỏ qua ngôn ngữ gốc của menu — nội dung mặc định đã ở ngôn ngữ đó rồi.

---

## Bước 3 — Xác nhận tuỳ chọn

### Phạm vi dịch

| Lựa chọn | Ý nghĩa |
|---|---|
| **Chỉ thêm ngôn ngữ còn thiếu** | Với mỗi mục, chỉ thêm bản dịch cho ngôn ngữ chưa có. Giữ nguyên các bản dịch đã có. |
| **Dịch lại toàn bộ từ đầu** | Ghi đè tất cả bản dịch hiện có, dịch lại hoàn toàn. |

### Xử lý liên kết

| Lựa chọn | Khi nào dùng |
|---|---|
| **Tự đổi link thành /[ngôn-ngữ]/tên-sản-phẩm** | Khi cửa hàng dùng tiền tố đường dẫn theo ngôn ngữ, ví dụ `/vi/collections` — tốt cho SEO đa ngôn ngữ. |
| **Dùng cơ chế tự động của Navi+** | Để Navi+ tự xử lý liên kết theo ngôn ngữ hiển thị. |

---

## Bước 4 — Dịch và lưu

Bấm nút dịch. Tiến trình hiển thị trong nhật ký hoạt động; AI dịch song song nên thường rất nhanh. Khi xong, xem lại menu và bấm **Save**.

> Các bản dịch được lưu kèm trong từng mục menu. Menu sẽ tự hiển thị đúng ngôn ngữ theo ngôn ngữ trang web mà khách đang xem.

---

## Yêu cầu gói

Tính năng này thuộc gói **Business / Elite**. Gói thấp hơn sẽ thấy thông báo nâng cấp khi mở thẻ này.

---

## Case study — đưa menu tiếng Việt ra tiếng Anh và tiếng Nhật

**Bối cảnh:** Cửa hàng có menu tiếng Việt hoàn chỉnh, vừa mở bán cho khách quốc tế, cần thêm tiếng Anh và tiếng Nhật. Cửa hàng dùng tiền tố đường dẫn `/en/` và `/ja/`.

1. **Sao lưu:** ⋮ More → Backup / Restore (menu đã có nội dung, đừng bỏ qua).
2. Mở thẻ **Tự động dịch menu**. Ở ô tìm kiếm, chọn **English** và **日本語 (Japanese)**. Bỏ qua tiếng Việt vì là ngôn ngữ gốc.
3. **Phạm vi dịch:** chọn **Chỉ thêm ngôn ngữ còn thiếu** (lần đầu nên menu chưa có bản dịch nào, AI sẽ thêm cả EN và JP).
4. **Xử lý liên kết:** chọn **Tự đổi link thành /[ngôn-ngữ]/...** vì cửa hàng dùng tiền tố — link sẽ thành `/en/...` và `/ja/...`, tốt cho SEO đa ngôn ngữ.
5. Bấm dịch. AI dịch tên + mô tả tất cả mục sang cả 2 ngôn ngữ trong vài giây.
6. Xem lại vài mục quan trọng (đặc biệt tên riêng/thương hiệu), rồi **Save**.

**Lần sau thêm sản phẩm mới:** chạy lại với phạm vi **Chỉ thêm ngôn ngữ còn thiếu** — các mục đã dịch được giữ nguyên, chỉ những mục mới được dịch bổ sung.

**Kết quả:** Menu hiển thị đúng tiếng Việt / Anh / Nhật theo ngôn ngữ trang web khách đang xem, link tự khớp tiền tố.
