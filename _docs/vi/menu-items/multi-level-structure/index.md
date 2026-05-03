---
description: Cách tạo lồng cha con và dùng Tab Slide để tổ chức các mục menu Navi+ thành cấu trúc nhiều lớp.
layout: default
permalink: /vi/docs/menu-items/multi-level-structure/
title: Cấu trúc nhiều lớp
---
# Cấu trúc nhiều lớp

Navi+ hỗ trợ hai cách tổ chức nội dung menu theo chiều sâu: **lồng cha con** (kéo trái/phải để thụt lề) và **Tab Slide** (chia menu thành các vùng chuyển đổi ngang). Bạn có thể dùng một trong hai hoặc kết hợp cả hai.

---

## Tùy chọn 1 — Lồng cha con (thụt lề bằng kéo)

Lồng chuyển danh sách phẳng thành cấu trúc phân cấp nhiều tầng. Một mục cha có thể được mở rộng để hiện các mục con.

```
Home                        ← Cấp 1 (cha)
  Collections               ← Cấp 2 (con)
    New Arrivals            ← Cấp 3 (cháu)
    Sale
  Lookbook
Contact                     ← Cấp 1 (cha, không có con)
```

### Cách thực hiện

**Bằng kéo thả**

1. Di chuột lên mục bạn muốn lồng.
2. Kéo sang **phải** — mục đó gắn vào bên dưới mục phía trên như một mục con.
3. Kéo sang **trái** để đưa mục trở lại cấp cha.

**Bằng phím tắt**

1. Click vào mục để chọn.
2. Nhấn `→` (mũi tên phải) để thụt lề — mục trở thành con của mục phía trên.
3. Nhấn `←` (mũi tên trái) để bỏ thụt lề — mục được đưa lên một cấp.

### Độ sâu lồng tối đa theo loại menu

Giới hạn độ sâu phụ thuộc vào **loại menu**, không phải gói dịch vụ.

| Loại menu | Số cấp tối đa |
|---|:---:|
| Mobile Grid | 1 (không hỗ trợ lồng) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> Nếu bạn cố thụt lề vượt giới hạn, trình chỉnh sửa sẽ chặn lại và hiển thị thông báo.

---

## Tùy chọn 2 — Tab Slide (vùng ngang)

Tab Slide chia các mục thành các tab ngang. Thay vì mở rộng xuống dưới như các mục con, mỗi tab hiện một tập hợp mục riêng biệt.

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← tiêu đề tab
├─────────────────────────────────┤
│  • Collections                  │
│  • New Arrivals                 │  ← nội dung tab đang active
│  • Sale                         │
└─────────────────────────────────┘
```

### Cách thực hiện

1. Thêm một mục mới với loại **Tab Marker**.
2. Đặt nhãn cho Tab Marker — đây sẽ là văn bản tiêu đề tab (ví dụ: "Shop").
3. Thêm các mục bên dưới Tab Marker — chúng thuộc vùng nội dung của tab đó.
4. Lặp lại: thêm Tab Marker tiếp theo, rồi thêm các mục cho tab đó.

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

## Nên dùng cách nào?

| Mục tiêu | Dùng |
|---|---|
| Hiển thị danh mục con dưới mục cha | **Lồng cha con (Tùy chọn 1)** |
| Nhóm các phần không liên quan cạnh nhau | **Tab Slide (Tùy chọn 2)** |
| Menu có nhiều mục trong nhiều danh mục | **Tab Slide** |
| Điều hướng drill-down sâu (danh mục → danh mục con) | **Lồng cha con** |
| Tab ngoài có các mục lồng bên trong mỗi tab | **Cả hai** |

---

## Giới hạn cần lưu ý

- **Tab Marker không thể lồng bên trong một mục khác.** Việc thụt lề Tab Marker sẽ bị chặn.
- **Các mục bên trong tab vẫn có thể có con** — theo giới hạn độ sâu của loại menu.
- **Mobile Grid không hỗ trợ lồng** — dùng Tab Slide nếu bạn cần nhóm.
- **Sắp xếp lại tab** bằng cách kéo Tab Marker lên hoặc xuống — các mục bên dưới sẽ theo.
