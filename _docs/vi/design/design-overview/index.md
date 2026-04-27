---
description: Hiểu hệ thống kế thừa style 3 lớp trong Navi+ — cách style lan xuống từ Level 1 sang Level 2-3 và cách ghi đè per-item.
layout: default
permalink: /vi/docs/design/design-overview/
title: Tổng quan Design — Kế thừa & Ghi đè
---
# Tổng quan Design — Kế thừa & Ghi đè

Navi+ dùng **hệ thống style 3 lớp**. Hiểu cơ chế này giúp bạn cài đặt menu nhanh hơn và không bị lặp lại.

---

## Ba lớp style

```
┌─────────────────────────────────────────────────────┐
│  LEVEL 1  (Design → Level 1)                        │
│  Áp dụng cho tất cả item cấp 1 của menu             │
│  Đây là "màu mặc định" của toàn bộ menu             │
└───────────────────┬─────────────────────────────────┘
                    │  Level 2-3 kế thừa nếu để trống
┌───────────────────▼─────────────────────────────────┐
│  LEVEL 2-3  (Design → Level 2-3)                    │
│  Áp dụng cho submenu / dropdown khi item được mở    │
│  Để trống = giống hệt Level 1                       │
└───────────────────┬─────────────────────────────────┘
                    │  Item riêng lẻ ghi đè tất cả
┌───────────────────▼─────────────────────────────────┐
│  PER-ITEM  (Edit Item → Interface)                  │
│  Cài đặt riêng cho từng item cụ thể                 │
│  Ghi đè Level 1 và Level 2-3 hoàn toàn             │
└─────────────────────────────────────────────────────┘
```

---

## Quy tắc kế thừa

**Level 2-3 kế thừa Level 1** cho tất cả field bị để trống:

| Field Level 2-3 | Kế thừa từ Level 1 |
|---|---|
| Màu chữ | Màu chữ |
| Cỡ chữ | Cỡ chữ |
| Font weight | Font weight |
| Màu icon | Màu icon |
| Kích thước icon | Kích thước icon |
| Display layout | Display layout |
| Căn lề | Căn lề |
| Màu divider | Divider (toàn menu) |

Nếu chỉ cài Level 1, submenu sẽ tự theo. Chỉ vào Level 2-3 khi muốn submenu **khác** với menu chính.

---

## Quy tắc ghi đè per-item

Khi đặt style cho item cụ thể trong **Edit Item → Interface**: style đó ghi đè hoàn toàn Level 1 và Level 2-3 cho item đó. Các item khác không bị ảnh hưởng.

Để xóa ghi đè: xóa trắng field đó trong Edit Item — item quay lại dùng style Level 1/2-3.

---

## Ví dụ

**Mục tiêu:** 5 item đều chữ trắng, riêng item "Sale" chữ đỏ.

1. Design → Level 1 → Text Color = `#FFFFFF`
2. Edit Item → "Sale" → Interface → Text Color = `#FF0000`

Kết quả: 4 item còn lại vẫn trắng, "Sale" đỏ. Không cần sửa từng item.

---

## Cú pháp Mobile | Desktop

Một số field spacing hỗ trợ giá trị khác nhau cho mobile và desktop:

```
8 16 8 16             →  cùng giá trị cả hai thiết bị
8 8 8 8 | 12 24 12 24  →  trái: mobile, phải: desktop
```

Phần trước `|` áp dụng trên mobile, phần sau áp dụng trên desktop (≥768px).
