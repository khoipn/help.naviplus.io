---
description: Tìm hiểu menu item là gì, các loại item trong Navi+, cấu trúc field và quy trình chỉnh sửa.
lang: vi
layout: default
permalink: /vi/docs/menu-items/item-overview/
title: Tổng quan về Menu Item
---

# Tổng quan về Menu Item

## Menu item là gì?

Mỗi dòng trong danh sách menu là một **item**. Item là đơn vị nhỏ nhất trong Navi+ — nó có thể là một link điều hướng, một tiêu đề nhóm, một khoảng trắng, hoặc một tab phân vùng.

Nhiều item xếp lại tạo thành một menu. Menu được render ra cho khách hàng xem trên trang web.

---

## Các loại item (Item Kind)

Khi thêm item mới, bạn chọn loại (kind) cho nó. Loại quyết định item hiển thị như thế nào và dùng để làm gì.

| Loại | Mô tả | Dùng khi nào |
|---|---|---|
| **Icon / Text** | Item tiêu chuẩn với icon và chữ | Link điều hướng thông thường |
| **Big Image / Text** | Ô lớn với ảnh phủ và chữ đè lên | Banner danh mục, ảnh sản phẩm nổi bật |
| **Group Title** | Tiêu đề nhóm, không phải link | Phân nhóm các item bên dưới |
| **Blank Space** | Khoảng trống trong suốt | Căn chỉnh khoảng cách, tạo vùng trống |
| **Tab Marker** | Điểm bắt đầu một tab | Chia menu thành nhiều tab ngang |
| **Custom HTML** | Nhúng mã HTML tùy ý | Widget tùy chỉnh, banner đặc biệt |

---

## Các field chính của một item

Khi click vào item để chỉnh sửa, panel Edit Item mở ra với các phần sau:

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

1. Click vào item trong cây menu → panel Edit Item mở ra.
2. Chỉnh các field cần thiết.
3. Nhấn **Update** để áp dụng thay đổi vào item.
4. Nhấn **Save** (`Ctrl+S` / `Cmd+S`) để lưu toàn bộ menu và cập nhật simulator.

> Nếu nhấn Update nhưng chưa Save, thay đổi chưa được ghi vào dữ liệu thật. Giữ Shift khi nhấn Save để lưu và reload simulator ngay lập tức.
