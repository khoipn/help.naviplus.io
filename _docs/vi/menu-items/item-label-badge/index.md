---
description: Cách cấu hình nhãn chính, mô tả phụ, đường kẻ phân cách và badge huy hiệu cho menu item trong Navi+.
lang: vi
layout: default
permalink: /vi/docs/menu-items/item-label-badge/
title: Nhãn, Mô tả và Badge
---

# Nhãn, Mô tả và Badge

## Text (Nhãn chính)

Dòng chữ chính hiển thị trên item — đây là điều khách hàng đọc được.

**Lưu ý:**
- Giữ ngắn: 1–3 từ là tốt nhất cho menu mobile.
- Để trống nếu muốn item chỉ hiện icon (kết hợp Display Layout → Icon/Image Only).
- Hỗ trợ đa ngôn ngữ — nhấn **Multi** bên cạnh nhãn để thêm bản dịch cho từng ngôn ngữ.

**Ví dụ:** `Trang chủ`, `Shop`, `Liên hệ`

---

## Description (Mô tả phụ)

Dòng chữ nhỏ bên dưới Text chính — dùng để thêm thông tin ngắn hoặc sub-label.

**Ví dụ:** `Gọi: 0909 123 456 | 8AM–9PM`

**Lưu ý:**
- Chỉ hiển thị khi Display Layout hỗ trợ hai dòng (Top-Down, Left-Right, v.v.).
- Với layout Icon/Image Only hoặc Text Only, Description bị ẩn.
- Hỗ trợ đa ngôn ngữ.

---

## Icon-only (Chỉ hiện icon, ẩn chữ)

Để ẩn Text và chỉ hiện icon/ảnh, vào phần **Layout** → **Display Layout** → chọn **Icon/Image Only**.

Khi đó nhãn Text vẫn tồn tại trong dữ liệu (dùng cho SEO và accessibility) nhưng không hiển thị trực quan.

---

## Add Divider (Đường kẻ phân cách)

Tích **Add Divider** để thêm đường kẻ ngang bên dưới item, phân cách với item tiếp theo.

| Tùy chọn | Mô tả | Gói |
|---|---|---|
| **Size (px)** | Độ dày đường kẻ (mặc định 1px) | Tất cả |
| **Type** | Kiểu đường: Solid, Dashed, Dotted, Double | Business / Elite |
| **Color** | Màu đường kẻ (hex) | Tất cả |
| **Width** | Độ rộng: Full, Inset, Under text | Business / Elite |

---

## Add Badge (Huy hiệu nhỏ)

Tích **Add Badge** để hiện chấm huy hiệu nhỏ trên góc item.

### Badge giỏ hàng *(Business / Elite)*

Tích thêm **"Show badge (+n) when items are in the cart"** để badge tự động hiển thị số lượng sản phẩm đang có trong giỏ.

- Giỏ trống → badge ẩn.
- Có 3 sản phẩm → badge hiện số **3**.
