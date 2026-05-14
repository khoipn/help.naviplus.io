---
description: Hiểu hệ thống kế thừa thiết kế ba cấp trong Navi+ — cách các kiểu được kế thừa từ Cấp 1 đến Cấp 2-3 đến các ghi đè theo từng mục.
lang: vi
layout: default
permalink: /vi/docs/design/design-overview/
title: Tổng quan thiết kế — Kế thừa & ghi đè
---
# Tổng quan thiết kế — Kế thừa & Ghi đè

Navi+ sử dụng một **hệ thống kiểu ba cấp**. Hiểu điều này cho phép bạn định dạng menu của mình một cách hiệu quả mà không cần lặp lại các cài đặt.

---

## Ba lớp

```
┌─────────────────────────────────────────────────────┐
│  CẤP 1  (Thiết kế → Cấp 1)                        │
│  Áp dụng cho tất cả các mục menu cấp cao nhất      │
│  Đây là mặc định toàn cầu cho toàn bộ menu        │
└───────────────────┬─────────────────────────────────┘
                    │  Cấp 2-3 kế thừa nếu trống
┌───────────────────▼─────────────────────────────────┐
│  CẤP 2-3  (Thiết kế → Cấp 2-3)                    │
│  Áp dụng cho các menu con / dropdowns              │
│  Trống = giống như Cấp 1                            │
└───────────────────┬─────────────────────────────────┘
                    │  Ghi đè theo từng mục mọi thứ
┌───────────────────▼─────────────────────────────────┐
│  THEO TỪNG MỤC  (Chỉnh sửa Mục → Giao diện)        │
│  Cài đặt theo từng mục cho các mục riêng lẻ       │
│  Ghi đè hoàn toàn Cấp 1 và Cấp 2-3                 │
└─────────────────────────────────────────────────────┘
```

---

## Quy tắc kế thừa

**Cấp 2-3 kế thừa từ Cấp 1** cho tất cả các trường trống:

| Trường Cấp 2-3 | Kế thừa từ Cấp 1 |
|---|---|
| Màu chữ | Màu chữ |
| Kích thước phông | Kích thước phông |
| Độ dày phông | Độ dày phông |
| Màu biểu tượng | Màu biểu tượng |
| Kích thước biểu tượng | Kích thước biểu tượng |
| Bố cục hiển thị | Bố cục hiển thị |
| Căn chỉnh | Căn chỉnh |
| Màu phân cách | Phân cách (toàn cầu) |

Nếu bạn chỉ cấu hình Cấp 1, các menu con sẽ tự động theo sau. Chỉ chuyển đến Cấp 2-3 khi bạn muốn các menu con trông **khác** với menu chính.

---

## Ghi đè theo từng mục

Các cài đặt áp dụng cho một mục cụ thể trong **Chỉnh sửa Mục → Giao diện** (màu chữ, kích thước biểu tượng, nền, v.v.) ghi đè Cấp 1 và Cấp 2-3 chỉ cho mục đó. Các mục khác không bị ảnh hưởng.

Để xóa một ghi đè: xóa trường trong Chỉnh sửa Mục — mục sẽ trở về Cấp 1/2-3.

---

## Ví dụ

**Mục tiêu:** Tất cả 5 mục có chữ màu trắng, ngoại trừ "Sale" có màu đỏ.

1. Thiết kế → Cấp 1 → Màu chữ = `#FFFFFF`
2. Chỉnh sửa Mục → "Sale" → Giao diện → Màu chữ = `#FF0000`

Kết quả: 4 mục giữ màu trắng, "Sale" chuyển sang màu đỏ. Không cần chỉnh sửa từng mục một cách riêng lẻ.

---

## Cú pháp di động | Máy tính để bàn

Một số trường khoảng cách hỗ trợ các giá trị khác nhau cho di động và máy tính để bàn:

```
8 16 8 16             →  cùng giá trị trên cả hai thiết bị
8 8 8 8 | 12 24 12 24  →  trái: di động, phải: máy tính để bàn
```

Phần trước `|` áp dụng trên di động; phần sau áp dụng trên máy tính để bàn (≥768px).
