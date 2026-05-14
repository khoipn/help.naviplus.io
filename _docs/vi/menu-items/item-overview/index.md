---
description: Một mục trong Navi+ là gì, các loại mục có sẵn và cấu trúc trường đầy đủ trong bảng chỉnh sửa mục.
lang: vi
layout: default
permalink: /vi/docs/menu-items/item-overview/
title: Tổng quan về mục
---
# Tổng quan về mục

## Một mục trong menu là gì?

Mỗi hàng trong danh sách menu là một **mục**. Một mục là đơn vị nhỏ nhất trong Navi+ — nó có thể là một liên kết điều hướng, một tiêu đề nhóm, một khoảng trống trống, hoặc một bộ phân tab.

Nhiều mục xếp chồng lên nhau tạo thành một menu. Menu sau đó được hiển thị cho khách truy cập trên trang web của bạn.

---

## Các loại mục

Khi bạn thêm một mục mới, bạn chọn **loại** của nó. Loại xác định cách mà mục đó trông như thế nào và nó làm gì.

| Loại | Mô tả | Khi nào sử dụng |
|---|---|---|
| **Biểu tượng / Văn bản** | Mục tiêu chuẩn với biểu tượng và nhãn | Liên kết điều hướng thông thường |
| **Hình ảnh lớn / Văn bản** | Gạch lớn với hình ảnh toàn bộ và văn bản phủ lên | Biểu ngữ danh mục, hình ảnh sản phẩm nổi bật |
| **Tiêu đề nhóm** | Tiêu đề phần — không phải là liên kết | Nhóm trực quan các mục bên dưới nó |
| **Khoảng trống trống** | Khoảng trống trong suốt | Căn chỉnh khoảng cách và bố cục |
| **Đánh dấu tab** | Đánh dấu sự bắt đầu của một tab mới | Chia menu thành các tab ngang |
| **HTML tùy chỉnh** | Nhúng HTML tùy ý | Tiện ích tùy chỉnh, biểu ngữ đặc biệt |

---

## Cấu trúc trường

Nhấp vào bất kỳ mục nào để mở bảng chỉnh sửa mục. Nó được tổ chức thành các phần sau:

```
┌─────────────────────────────────────────┐
│  MEDIA                                  │
│    Icon  |  Image                       │
├─────────────────────────────────────────┤
│  BASIC INFO                             │
│    Text · Link To · HTML                │
│    Description · Divider · Badge        │
├─────────────────────────────────────────┤
│  LAYOUT                                 │
│    Display Layout · Width · Position    │
│    Height Fix                           │
├─────────────────────────────────────────┤
│  INTERFACE (UI)                         │
│    Class Names · Text Style             │
│    Icon/Image Style · Background        │
│    Spacing · Align                      │
├─────────────────────────────────────────┤
│  ADVANCE                                │
│    Animation · CSS · Attributes         │
├─────────────────────────────────────────┤
│  PUBLISH                                │
│    Is Published · Login conditions      │
└─────────────────────────────────────────┘
```

---

## Quy trình chỉnh sửa

1. Nhấp vào một mục trong cây menu → bảng chỉnh sửa mục mở ra.
2. Thay đổi các trường bạn cần.
3. Nhấn **Cập nhật** để áp dụng các thay đổi cho mục đó.
4. Nhấn **Lưu** (`Ctrl+S` / `Cmd+S`) để lưu toàn bộ menu và làm mới mô phỏng.

> Nếu bạn đã nhấn Cập nhật nhưng chưa Lưu, các thay đổi sẽ không được ghi vào menu trực tiếp của bạn. Giữ phím Shift trong khi nhấn Lưu để lưu và ngay lập tức tải lại mô phỏng.
