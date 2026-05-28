---
description: Dùng ChatGPT, Claude hoặc Gemini để thiết kế lại menu Navi+ — Navi+ sinh sẵn câu lệnh, bạn dán kết quả JSON trở lại.
lang: vi
layout: default
permalink: /vi/docs/ai/auto-design-your-ai/
title: Tự động thiết kế bằng app AI của bạn
---
# Tự động thiết kế bằng app AI của bạn

Thiết kế lại menu bằng công cụ AI bạn đã quen — ChatGPT, Claude hay Gemini. Navi+ chuẩn bị sẵn dữ liệu và câu lệnh, bạn chỉ việc đưa qua AI rồi mang kết quả về. Tính năng **miễn phí**.

Mở: nút **AI** → thẻ **Tự động thiết kế bằng app AI của bạn**.

---

## Trước khi bắt đầu — sao lưu menu

> **⋮ More → Backup / Restore** — lưu menu hiện tại thành file hoặc lên cloud trước khi thay đổi. Đừng bỏ qua bước này.

---

## Bước 1 — Huấn luyện AI

Bạn cần một công cụ AI chạy trên web. Khuyến nghị các model ngữ cảnh lớn:

| Công cụ | Model gợi ý |
|---|---|
| Claude | Opus 4.7 |
| ChatGPT | GPT-5 |
| Gemini | Pro 1.5 |

Bấm **Mở tài liệu huấn luyện**, copy toàn bộ và dán vào khung chat AI. Việc này giúp AI hiểu cấu trúc menu của Navi+.

---

## Bước 2 — Gửi menu hiện tại (JSON) cho AI

Sau khi AI đã hiểu cấu trúc ở Bước 1, gửi menu hiện tại của bạn cho AI:

- **Copy menu hiện tại vào clipboard** rồi dán vào chat, hoặc
- **Tải file JSON** rồi đính kèm vào chat.

---

## Bước 3 — Đưa yêu cầu thiết kế

Nhập yêu cầu bằng ngôn ngữ tự nhiên, ví dụ:

- "Thêm 2 mục nữa vào menu"
- "Đổi màu chủ đạo sang xanh dương"
- "Gộp các mục sản phẩm thành một nhóm có tiêu đề"

Bạn toàn quyền kiểm soát thiết kế. AI sẽ trả về một menu mới dưới dạng JSON.

---

## Bước 4 — Dán kết quả và áp dụng

Copy đoạn JSON mà AI trả về, sau đó áp dụng vào Navi+ theo một trong hai cách:

- **Cách 1:** Dán JSON vào ô nhập rồi bấm **Áp dụng**.
- **Cách 2:** Bấm **Tải lên file JSON** và chọn file `.json`.

Lặp lại Bước 3–4 đến khi menu ưng ý, sau đó bấm **Save** để lưu.

> Mẹo: AI chỉ thay đổi cấu trúc và nội dung trong JSON. Các trường bạn đã cấu hình mà không nhắc tới sẽ được giữ nguyên — nhưng vẫn nên kiểm tra lại menu sau khi áp dụng.

---

## Ví dụ yêu cầu (Bước 3)

- Thêm 2 mục: Blog và Tuyển dụng.
- Đổi màu chủ đạo sang xanh dương `#1a73e8`.
- Rút gọn còn 4 mục chính, gộp phần còn lại vào mục More.
- Thêm icon phù hợp cho mỗi mục và in đậm mục Khuyến mãi.
- Dịch toàn bộ tên mục sang tiếng Anh.

---

## Case study — dọn gọn tab bar bằng Claude

**Bối cảnh:** Cửa hàng có tab bar 8 mục lộn xộn, muốn rút còn 5 mục cho gọn và thêm icon, nhưng vẫn giữ nguyên các liên kết cũ.

1. **Sao lưu:** ⋮ More → Backup / Restore → lưu một bản.
2. **Bước 1 — Huấn luyện AI:** Mở Claude (Opus 4.7), bấm **Mở tài liệu huấn luyện** trong Navi+, copy toàn bộ và dán vào Claude.
3. **Bước 2 — Gửi menu:** Bấm **Copy menu hiện tại vào clipboard**, dán đoạn JSON vào Claude.
4. **Bước 3 — Ra lệnh:** Gõ cho Claude:

   ```
   Gộp 8 mục này còn 5 mục chính: Trang chủ, Sản phẩm, Khuyến mãi,
   Blog, Tài khoản. Đưa các mục lẻ vào nhóm con phù hợp.
   Thêm icon cho mỗi mục cấp 1. Giữ nguyên toàn bộ link cũ.
   ```

5. **Bước 4 — Áp dụng:** Claude trả về JSON mới. Copy, dán vào ô **Áp dụng** trong Navi+ → bấm **Áp dụng**.
6. Kiểm tra: 5 mục, icon đầy đủ, link cũ còn nguyên. Cần chỉnh thêm thì lặp lại Bước 3–4. Ưng thì bấm **Save**.

**Kết quả:** Tab bar gọn còn 5 mục có icon, các liên kết được giữ nguyên — không phải sửa tay từng item.
