---
description: Hướng dẫn thêm item mới, sắp xếp thứ tự bằng kéo thả hoặc phím tắt, sao chép, xóa và hoàn tác trong Navi+.
lang: vi
layout: default
permalink: /vi/docs/menu-items/item-create-manage/
title: Tạo, Sắp xếp và Xóa Item
---

# Tạo, Sắp xếp và Xóa Item

## Thêm item mới

1. Trong cây menu, nhấn nút **+ Add item** (hoặc dấu cộng cuối danh sách).
2. Chọn loại item muốn thêm (Icon/Text, Big Image, Group Title, Blank Space, Tab Marker...).
3. Item mới xuất hiện ở cuối danh sách với nội dung mặc định.
4. Click vào item vừa thêm để mở panel Edit Item và điền thông tin.
5. Nhấn **Update** → **Save**.

> Item mới tự thêm vào cuối. Sau khi thêm, bạn có thể kéo lên vị trí mong muốn.

---

## Sắp xếp item (Thay đổi thứ tự)

### Bằng kéo thả

- Trỏ vào icon kéo (≡) bên trái item.
- Kéo **lên / xuống** để đổi thứ tự trong cùng cấp.
- Kéo **sang phải** để thụt vào thành item con của item phía trên.
- Kéo **sang trái** để đẩy ra thành item cấp trên.

### Bằng phím tắt (khi đang chọn item)

| Phím | Tác dụng |
|---|---|
| `↑` | Di chuyển lên (Mac: `Cmd+↑` / Win: `Alt+↑`) |
| `↓` | Di chuyển xuống (Mac: `Cmd+↓` / Win: `Alt+↓`) |
| `→` | Thụt vào — item thành con của item phía trên |
| `←` | Đẩy ra — item quay lại cấp trên |

> Phím tắt chỉ hoạt động khi con trỏ đang hover trên cây menu và item đã được chọn (viền xanh).

---

## Chỉnh sửa item

1. Click vào item → panel Edit Item mở.
2. Chỉnh field cần thiết.
3. Nhấn **Update** để lưu thay đổi vào item đó.

> Nhấn **Cancel** để đóng panel mà không lưu.

---

## Sao chép item (Duplicate)

1. Hover vào item → menu nhanh hiện ra.
2. Nhấn **Copy** (hoặc phím tắt `C`).
3. Item bản sao xuất hiện ngay bên dưới item gốc, giữ nguyên toàn bộ nội dung và cài đặt.
4. Chỉnh sửa bản sao theo nhu cầu.

---

## Xóa item

1. Hover vào item → menu nhanh hiện ra.
2. Nhấn **Delete** (hoặc phím `Del` / `Backspace` trên Mac).
3. Hộp xác nhận hiện lên — nhấn **Confirm** để xóa hẳn.

> **Lưu ý:** Xóa item cha sẽ xóa luôn tất cả item con bên trong. Hành động không thể hoàn tác sau khi xác nhận.

---

## Hoàn tác / Làm lại (Undo / Redo)

| Phím | Tác dụng |
|---|---|
| `Ctrl+Z` / `Cmd+Z` | Hoàn tác thao tác vừa làm |
| `Ctrl+Y` / `Cmd+Shift+Z` | Làm lại |

Lịch sử hoàn tác chỉ tồn tại trong phiên làm việc hiện tại — tải lại trang sẽ mất lịch sử.

---

## Lưu menu

Sau khi thêm, sắp xếp, hoặc xóa item:

- Nhấn **Save** trên thanh toolbar, hoặc `Ctrl+S` / `Cmd+S`.
- Giữ `Shift` khi nhấn Save để lưu và reload simulator ngay lập tức.

Chưa Save thì khách hàng chưa thấy thay đổi trên trang thật.
