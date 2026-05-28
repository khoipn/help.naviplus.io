---
description: Mô tả menu bạn muốn và để AI dựng cấu trúc ban đầu trong Navi+ — kèm tuỳ chọn tự thêm icon theo từng cấp.
lang: vi
layout: default
permalink: /vi/docs/ai/create-menu-structure/
title: Tạo cấu trúc menu
---
# Tạo cấu trúc menu

Mô tả menu bạn cần và để AI dựng sẵn khung cấu trúc — nhanh chóng có điểm khởi đầu thay vì thêm từng item thủ công. Tính năng **miễn phí**.

Mở: nút **AI** → thẻ **Tạo cấu trúc menu**.

---

## Trước khi bắt đầu — sao lưu menu

> **⋮ More → Backup / Restore** — sao lưu menu hiện tại trước khi tạo cấu trúc mới, vì kết quả sẽ ghi đè menu đang có.

---

## Cách dùng

1. Mở thẻ **Tạo cấu trúc menu**.
2. (Tuỳ chọn) Chọn cấp muốn AI **tự thêm icon**:

   | Tuỳ chọn | Áp dụng cho |
   |---|---|
   | Level 1 | Các mục chính (cấp 1) |
   | Level 2 | Mục con cấp 2 |
   | Level 3 | Mục con cấp 3 |

3. Nhập mô tả vào ô **Mô tả yêu cầu của bạn**, ví dụ "Menu cho cửa hàng mỹ phẩm: Trang chủ, Sản phẩm (Son, Kem dưỡng, Mặt nạ), Khuyến mãi, Liên hệ".
4. (Tuỳ chọn) Bấm **Dùng mẫu** để chèn câu lệnh mẫu theo loại menu rồi chỉnh lại.
5. Bấm **Tạo menu**. Tiến trình hiển thị ở khung **Nhật ký hoạt động** bên phải.
6. AI dựng cấu trúc và áp dụng vào trình chỉnh sửa. Xem lại, tinh chỉnh, rồi bấm **Save**.

> Bấm **Save** (biểu tượng đĩa) để lưu lại câu lệnh mô tả, dùng lại cho lần sau.

---

## Sau khi tạo

AI chỉ dựng **khung cấu trúc** (các mục, cấp bậc, icon). Bạn nên kiểm tra và bổ sung:

- Liên kết (URL) cho từng mục
- Hình ảnh, badge nếu cần
- Màu sắc, bố cục qua phần **Design** và **Setting**

---

## Ví dụ mô tả

- Cửa hàng thời trang nam: Trang chủ, Áo (Áo thun, Sơ mi, Áo khoác), Quần, Phụ kiện, Sale, Liên hệ.
- Tab bar 5 mục cho app giao đồ ăn: Trang chủ, Tìm kiếm, Giỏ hàng, Đơn hàng, Tài khoản.
- Slide menu cho blog: Bài mới, Chuyên mục (Công nghệ, Du lịch, Ẩm thực), Giới thiệu, Liên hệ.
- Mega menu cho cửa hàng điện máy với 4 nhóm: Điện thoại, Laptop, Phụ kiện, Khuyến mãi — mỗi nhóm 4–5 mục con.

---

## Case study — dựng mega menu cho cửa hàng điện máy

**Bối cảnh:** Cửa hàng điện máy cần một mega menu desktop nhiều nhóm, mỗi nhóm vài mục con, kèm icon cho dễ nhìn.

1. **Sao lưu:** ⋮ More → Backup / Restore.
2. Mở thẻ **Tạo cấu trúc menu**. Tích **Level 1** và **Level 2** để AI thêm icon cho cả nhóm chính lẫn mục con.
3. Nhập mô tả:

   ```
   Mega menu cho cửa hàng điện máy, 4 nhóm:
   - Điện thoại (iPhone, Samsung, Xiaomi, Phụ kiện điện thoại)
   - Laptop (Văn phòng, Gaming, MacBook, Phụ kiện laptop)
   - Gia dụng (Máy lọc nước, Robot hút bụi, Nồi chiên không dầu)
   - Khuyến mãi
   ```

4. Bấm **Tạo menu**. Theo dõi **Nhật ký hoạt động** bên phải. AI dựng mega menu 4 nhóm, mỗi nhóm có mục con và icon.
5. Bổ sung sau khi tạo: gán **URL** cho từng mục, thêm ảnh banner cho nhóm Khuyến mãi, rồi **Save**.

**Kết quả:** Có ngay khung mega menu nhiều cấp với icon — chỉ còn việc gắn link và tinh chỉnh, thay vì tạo tay hàng chục mục.
