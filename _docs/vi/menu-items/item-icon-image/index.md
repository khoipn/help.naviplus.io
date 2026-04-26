---
description: Cách thêm icon từ thư viện Remixicon hoặc hình ảnh tùy chỉnh cho menu item, và các tùy chọn bố cục hiển thị trong Navi+.
lang: vi
layout: default
permalink: /vi/docs/menu-items/item-icon-image/
title: Icon và Hình ảnh
---

# Icon và Hình ảnh

Mỗi item có thể có một hình ảnh đại diện — chọn **icon từ thư viện** hoặc **ảnh tùy chỉnh**. Chỉ dùng một trong hai, không dùng đồng thời.

---

## Icon từ thư viện (Built-in icon)

Icon là biểu tượng dạng vector từ thư viện **Remixicon** tích hợp sẵn. Sắc nét ở mọi kích thước, không cần upload file.

### Cách thêm

1. Trong panel Edit Item, nhấn nút **Icon**.
2. Hộp tìm kiếm icon mở ra — gõ từ khóa tiếng Anh (ví dụ: `home`, `cart`, `phone`, `search`).
3. Click icon để chọn — xem trước ngay trên item.
4. Nhấn **×** để xóa icon đang chọn.

### Khi nào dùng icon

- Item trong **Tabbar** — icon là cách tiêu chuẩn để gắn nhãn tab.
- Khi cần giao diện đồng nhất, gọn gàng.
- Khi chưa có ảnh tùy chỉnh.

---

## Hình ảnh tùy chỉnh (Custom image)

> **Starter:** Không hỗ trợ hình ảnh tùy chỉnh — dùng icon thư viện thay thế.

### Cách A — Tải lên từ gallery *(Business / Elite)*

1. Nhấn nút **Image** trong panel Edit Item.
2. Nhấn **Gallery** → hộp upload mở ra.
3. Chọn hoặc tải ảnh lên (JPG, PNG, GIF).
4. Xác nhận — URL ảnh tự điền.

### Cách B — Dán URL ảnh bên ngoài *(Elite)*

1. Nhấn nút **Image**.
2. Dán URL đầy đủ của ảnh vào ô URL.
3. Nhấn **Update**.

### Lưu ý về ảnh

- Dùng ảnh **vuông (1:1)** cho icon trong Tabbar.
- Dùng ảnh **ngang** cho item kiểu Big Image.
- Ảnh **PNG nền trong suốt** phù hợp nhất cho logo và biểu tượng.
- Giữ file nhỏ — ảnh nặng làm menu tải chậm trên mobile.

---

## Bố cục hiển thị (Display Layout)

| Lựa chọn | Bố cục |
|---|---|
| **Automatic** | Theo mặc định của loại menu |
| **Top-Down** | Icon/ảnh trên, text dưới |
| **Left-Right** | Icon/ảnh trái, text phải |
| **Down-Top** | Text trên, icon/ảnh dưới |
| **Right-Left** | Text trái, icon/ảnh phải |
| **Icon/Image Only** | Chỉ icon/ảnh — ẩn text |
| **Text Only** | Chỉ text — ẩn icon/ảnh |

---

## Tùy chỉnh ngoại hình icon/ảnh

| Cài đặt | Tác dụng |
|---|---|
| **Icon Color** | Đổi màu icon vector (hex). Không áp dụng cho file ảnh |
| **Size (px)** | Kích thước hiển thị của icon/ảnh |
| **Container** | Màu nền ô bao quanh icon |
| **Padding (px)** | Khoảng trống giữa icon và ô nền |
| **Curve (px)** | Bo tròn góc ô nền — `50` để tạo hình tròn |
