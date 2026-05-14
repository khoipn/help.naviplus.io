---
description: Xuất bản các menu Section (Mega Menu, Grid) trong Navi+ — Chèn/Thay thế bằng CSS Selector hoặc App Block trên Shopify.
lang: vi
layout: default
permalink: /vi/docs/publish/publish-section/
title: Xuất bản phần — Mega menu & grid
---
# Xuất bản phần — Mega Menu & Grid

Áp dụng cho: **Mobile Mega Menu**, **Mobile Grid**, **Desktop Mega Menu**

Các menu phần là **không nổi** — chúng được chèn vào một vị trí cụ thể trong bố cục trang. Có hai phương pháp triển khai, có thể sử dụng cùng nhau:

| | Phương pháp 1: Chèn/Thay thế | Phương pháp 2: App Block |
|---|---|---|
| Nền tảng | Shopify + Global | Chỉ Shopify |
| Cơ chế | CSS Selector → chèn trước/sau/thay thế phần tử | App Block "Navi+ on Section" trong Theme Editor |
| Tính linh hoạt | Cao — nhúng ở bất kỳ đâu | Trung bình — bị giới hạn bởi sơ đồ phần Shopify |
| Cài đặt | Cần biết CSS Selector | Chỉ cần nhập Embed ID |

---

## Phương pháp 1: Chèn/Thay thế bằng CSS Selector

Phương pháp **Được khuyến nghị** — hoạt động cho cả Shopify và Global.

### Bước 1: Nhúng mã

**Shopify:** **Theme Editor → App Embeds** → kích hoạt Navi+. Chỉ một lần.

**Global:** Dán vào `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### Bước 2: Kích hoạt "Xuất bản menu bằng phương pháp Chèn/Thay thế"

Kích hoạt công tắc để mở rộng phần cấu hình bên dưới.

### Bước 3: Nhập CSS Selector

Nhập **một** CSS Selector. Menu sẽ được đặt tương đối với phần tử khớp.

**Cú pháp theo thiết bị:**

| Hậu tố | Thiết bị |
|---|---|
| `header` | Cả di động và máy tính để bàn |
| `header(M)` | Chỉ di động |
| `header(D)` | Chỉ máy tính để bàn |

**Mẹo CSS Selector cho các chủ đề Shopify phổ biến:**

| Loại menu | Mục đích | CSS Selector gợi ý |
|---|---|---|
| Desktop Mega | Thay thế điều hướng máy tính để bàn | `nav.header__inline-menu ul.list-menu` |
| Desktop Mega | Chèn dưới tiêu đề | `header` |
| Mobile Mega | Chèn dưới tiêu đề di động | `header` |

### Bước 4: Chọn vị trí (Chèn/Thay thế)

| Giá trị | Hành vi |
|---|---|
| **Thay thế** | Hoàn toàn thay thế phần tử gốc bằng menu Navi+ |
| **Chèn Trước** | Chèn menu Navi+ trước phần tử |
| **Chèn Sau** | Chèn menu Navi+ sau phần tử |

> Sau khi chọn **Thay thế**, hãy xem xét thêm CSS để ẩn phần tử gốc trong khi Navi+ tải — xem [Xuất bản Tối ưu hóa](/docs/publish/publish-optimize/).

---

## Phương pháp 2: App Block (chỉ Shopify)

### Cách thiết lập

1. Sao chép **Embed ID** của menu (hiển thị trong modal — nhấp để sao chép).
2. Đi tới **Shopify Theme Editor** → tìm **"Navi+ on Section"** App Block.
3. Dán Embed ID vào trường tương ứng.
4. Lưu chủ đề.

### "Cố định ở trên cùng trong khi cuộn"

Kích hoạt để ghim menu phần ở trên cùng của trang trong khi cuộn.

**Khi nào sử dụng:** Nếu chủ đề không có tiêu đề dính sẵn, hãy kích hoạt điều này để menu Desktop Mega vẫn hiển thị khi người dùng cuộn xuống.

---

## Có thể sử dụng cả hai phương pháp cùng nhau không?

Có. Người dùng Shopify có thể kích hoạt cả hai:
- App Block cho xem trước Theme Editor (ổn định hơn, dễ xem trước hơn).
- Chèn/Thay thế cho vị trí chính xác hơn trên cửa hàng.

Thường chỉ cần một phương pháp là đủ.

---

## Ghi chú theo loại menu

| Menu | Thiết bị | Ghi chú |
|---|---|---|
| Mobile Mega Menu | Tắt công tắc máy tính để bàn | Chỉ di động |
| Mobile Header | Tắt công tắc máy tính để bàn | Chỉ di động |
| Desktop Mega Menu | Tắt công tắc di động | Chỉ máy tính để bàn |
| Mobile Grid | Cả hai | Không có hạn chế |

---

## Khắc phục sự cố

**Menu không xuất hiện sau khi cấu hình Chèn/Thay thế?**
1. Kiểm tra rằng CSS Selector là chính xác — sử dụng DevTools hoặc Chế độ Gỡ lỗi Navi+.
2. Kiểm tra rằng công tắc "Xuất bản menu bằng phương pháp Chèn/Thay thế" đã được kích hoạt.
3. Kiểm tra rằng App Embeds / mã nhúng đã được đặt.

**Menu xuất hiện hai lần (bị trùng lặp)?**
→ Cả App Block và Chèn/Thay thế đều đang hoạt động đồng thời. Vô hiệu hóa một trong số chúng.
