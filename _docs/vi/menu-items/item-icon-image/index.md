---
description: Cách thêm biểu tượng tích hợp và hình ảnh tùy chỉnh vào các mục menu trong Navi+, và cách định dạng chúng.
lang: vi
layout: default
permalink: /vi/docs/menu-items/item-icon-image/
title: Biểu tượng & Hình ảnh
---
# Biểu tượng & Hình ảnh

Mỗi mục có thể có một yếu tố hình ảnh — hoặc là một **biểu tượng tích hợp** hoặc một **hình ảnh tùy chỉnh**. Bạn chỉ có thể sử dụng một trong hai, không cả hai.

---

## Biểu tượng tích hợp

Biểu tượng là các ký hiệu vector từ thư viện **Remixicon** tích hợp. Chúng sắc nét ở bất kỳ kích thước nào và không yêu cầu tải tệp lên.

### Cách thêm

1. Trong bảng chỉnh sửa mục, nhấp vào nút **Biểu tượng**.
2. Hộp tìm kiếm biểu tượng mở ra — gõ một từ khóa (ví dụ: `home`, `cart`, `phone`, `search`).
3. Nhấp vào một biểu tượng để chọn — một bản xem trước xuất hiện ngay lập tức trên mục.
4. Nhấp **×** để xóa biểu tượng hiện tại.

### Khi nào sử dụng biểu tượng

- Các mục trong **Tab Bar** — biểu tượng là cách tiêu chuẩn để gán nhãn các tab.
- Khi bạn muốn một cái nhìn sạch sẽ, nhất quán.
- Khi bạn không có hình ảnh tùy chỉnh sẵn sàng.

---

## Hình ảnh tùy chỉnh

Sử dụng ảnh, logo hoặc đồ họa của riêng bạn thay vì biểu tượng từ thư viện.

> **Gói Starter:** Hình ảnh tùy chỉnh không được hỗ trợ — hãy sử dụng biểu tượng tích hợp thay vào đó.

### Tùy chọn A — Tải lên từ thư viện *(Business / Elite)*

1. Nhấp vào nút **Hình ảnh** trong bảng chỉnh sửa mục.
2. Nhấp **Thư viện** → hộp thoại tải lên mở ra.
3. Chọn hoặc tải lên một hình ảnh (JPG, PNG, GIF).
4. Xác nhận — URL hình ảnh sẽ được điền tự động.

### Tùy chọn B — Dán URL hình ảnh *(Elite)*

1. Nhấp vào nút **Hình ảnh**.
2. Dán URL hình ảnh đầy đủ vào trường URL.
3. Nhấp **Cập nhật**.

### Mẹo về hình ảnh

- Sử dụng hình ảnh **vuông (1:1)** cho biểu tượng Tab Bar.
- Sử dụng hình ảnh **ngang** cho các mục Hình ảnh Lớn.
- **PNG với nền trong suốt** hoạt động tốt nhất cho logo và biểu tượng.
- Giữ kích thước tệp nhỏ — hình ảnh nặng làm chậm menu trên di động.
- Elite tự động chuyển đổi hình ảnh sang WebP và chuẩn hóa kích thước.

---

## Bố cục hiển thị

Sau khi thêm biểu tượng hoặc hình ảnh, chọn cách bố trí biểu tượng/hình ảnh và văn bản trong **Bố cục → Bố cục hiển thị**:

| Tùy chọn | Bố cục |
|---|---|
| **Tự động** | Theo mặc định loại menu |
| **Trên-Dưới** | Biểu tượng/hình ảnh ở trên, văn bản ở dưới |
| **Trái-Phải** | Biểu tượng/hình ảnh ở bên trái, văn bản ở bên phải |
| **Dưới-Trên** | Văn bản ở trên, biểu tượng/hình ảnh ở dưới |
| **Phải-Trái** | Văn bản ở bên trái, biểu tượng/hình ảnh ở bên phải |
| **Chỉ Biểu tượng/Hình ảnh** | Chỉ biểu tượng/hình ảnh — văn bản bị ẩn |
| **Chỉ Văn bản** | Chỉ văn bản — biểu tượng/hình ảnh bị ẩn |

---

## Định dạng biểu tượng hoặc hình ảnh

Đi đến **Giao diện → Kiểu Biểu tượng / Hình ảnh** để tinh chỉnh diện mạo:

| Cài đặt | Hiệu ứng |
|---|---|
| **Màu Biểu tượng** | Thay đổi màu vector của biểu tượng (hex). Không áp dụng cho tệp hình ảnh. |
| **Kích thước (px)** | Kích thước hiển thị của biểu tượng hoặc hình ảnh |
| **Container** | Màu nền của hộp bao quanh biểu tượng |
| **Khoảng cách (px)** | Khoảng cách giữa biểu tượng và hộp chứa của nó |
| **Góc (px)** | Bán kính góc của hộp chứa — đặt `50` cho một hình tròn |

**Ví dụ — biểu tượng trắng trong một hộp xanh tròn:**

```
Màu Biểu tượng:  #FFFFFF
Container:   #0066CC
Khoảng cách:     10
Góc:       50
```
