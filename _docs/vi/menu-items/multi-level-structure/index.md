---
description: Cách tạo cấu trúc lồng ghép cha-con và sử dụng Tab Slide để tổ chức các mục menu Navi+ thành các cấu trúc đa cấp.
lang: vi
layout: default
permalink: /vi/docs/menu-items/multi-level-structure/
title: Cấu trúc Đa cấp
---
# Cấu trúc Đa cấp

Navi+ hỗ trợ hai cách để tổ chức nội dung menu theo chiều sâu: **lồng ghép cha-con** (kéo trái/phải để thụt vào) và **Tab Slide** (chia menu thành các vùng chuyển đổi ngang). Bạn có thể sử dụng một trong hai cách hoặc kết hợp cả hai.

---

## Tùy chọn 1 — Lồng ghép cha-con (thụt vào bằng cách kéo)

Lồng ghép biến một danh sách phẳng thành một hệ thống phân cấp có cấp độ. Một mục cha có thể được mở rộng để tiết lộ các mục con của nó.

```
Home                        ← Cấp 1 (cha)
  Collections               ← Cấp 2 (con)
    New Arrivals            ← Cấp 3 (cháu)
    Sale
  Lookbook
Contact                     ← Cấp 1 (cha, không có con)
```

### Cách thực hiện

**Bằng cách kéo và thả**

1. Di chuột qua mục bạn muốn lồng ghép.
2. Kéo nó **qua phải** — nó sẽ tự động nằm dưới mục phía trên như một mục con.
3. Kéo nó **qua trái** để di chuyển nó trở lại cấp độ cha.

**Bằng phím tắt**

1. Nhấp vào mục để chọn nó.
2. Nhấn `→` (mũi tên phải) để thụt vào — mục trở thành một mục con của mục phía trên.
3. Nhấn `←` (mũi tên trái) để thụt ra — mục di chuyển trở lại một cấp độ.

### Độ sâu lồng ghép tối đa theo loại menu

Giới hạn độ sâu phụ thuộc vào **loại menu**, không phải gói.

| Loại menu | Số cấp tối đa |
|---|:---:|
| Mobile Grid | 1 (không lồng ghép) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> Nếu bạn cố gắng thụt vào vượt quá giới hạn, trình chỉnh sửa sẽ chặn lại và hiển thị một thông báo.

---

## Tùy chọn 2 — Tab Slide (các vùng ngang)

Tab Slide chia các mục thành các tab ngang. Thay vì mở rộng xuống như các mục con, mỗi tab hiển thị một tập hợp các mục riêng biệt.

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← tiêu đề tab
├─────────────────────────────────┤
│  • Collections                  │
│  • New Arrivals                 │  ← nội dung của tab đang hoạt động
│  • Sale                         │
└─────────────────────────────────┘
```

### Cách thực hiện

1. Thêm một mục mới với loại **Tab Marker**.
2. Đặt nhãn Tab Marker — điều này trở thành văn bản tiêu đề tab (ví dụ: "Shop").
3. Thêm các mục bên dưới Tab Marker — chúng thuộc về khu vực nội dung của tab đó.
4. Lặp lại: thêm Tab Marker tiếp theo, sau đó thêm các mục cho tab đó.

```
[Tab Marker]  "Shop"
  Collections
  New Arrivals
  Sale

[Tab Marker]  "Pages"
  About us
  Contact

[Tab Marker]  "More"
  Blog
  FAQ
```

---

## Nên sử dụng cách nào?

| Mục tiêu | Sử dụng |
|---|---|
| Hiển thị các danh mục con dưới một mục cha | **Lồng ghép cha-con (Tùy chọn 1)** |
| Nhóm các phần không liên quan bên cạnh nhau | **Tab Slide (Tùy chọn 2)** |
| Menu với nhiều mục qua nhiều danh mục | **Tab Slide** |
| Điều hướng sâu (danh mục → danh mục con) | **Lồng ghép cha-con** |
| Các tab bên ngoài với các mục lồng ghép bên trong mỗi tab | **Cả hai** |

---

## Giới hạn cần lưu ý

- **Tab Markers không thể được lồng ghép bên trong một mục khác.** Việc thụt vào một Tab Marker bị chặn.
- **Các mục bên trong một tab vẫn có thể có con** — tùy thuộc vào giới hạn độ sâu loại menu.
- **Mobile Grid không hỗ trợ lồng ghép** — sử dụng Tab Slide nếu bạn cần nhóm.
- **Sắp xếp lại các tab** bằng cách kéo một Tab Marker lên hoặc xuống — các mục bên dưới nó sẽ theo cùng.
