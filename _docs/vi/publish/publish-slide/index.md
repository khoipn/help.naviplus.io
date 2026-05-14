---
description: Xuất bản Slide (Ngữ cảnh) trong Navi+ — bật công tắc rồi cấu hình một trình kích hoạt để mở menu.
lang: vi
layout: default
permalink: /vi/docs/publish/publish-slide/
title: Xuất bản slide — Menu slide ngữ cảnh
---
# Xuất bản Slide — Menu Slide Ngữ Cảnh

Áp dụng cho: **Menu Slide ngữ cảnh**

Menu slide **khác với Sticky**: sau khi xuất bản, menu không **xuất hiện tự động** trên trang. Nó chỉ mở khi được kích hoạt bởi một hành động. Đây là sự khác biệt chính so với menu Sticky.

---

## Quy trình xuất bản

```
Bước 1: Nhúng mã vào trang web
        ↓
Bước 2: Bật công tắc "Xuất bản menu này"
        ↓
Bước 3: Cấu hình trình kích hoạt (cách mở menu)
```

Sau Bước 2, menu được tải trên trang web nhưng **trong trạng thái ẩn**. Bước 3 quyết định điều gì mở nó.

---

## Bước 1: Nhúng mã

**Shopify:** Đi đến **Trình chỉnh sửa giao diện → Nhúng ứng dụng** → bật Navi+. Làm điều này chỉ một lần.

**Toàn cầu:** Dán vào `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Bước 2: Bật công tắc

Bật công tắc **"Xuất bản menu này"** trong hộp thoại Xuất bản.

> Sau bước này, menu **sẽ không xuất hiện** trên trang web ngay. Điều này là bình thường — Menu slide cần một trình kích hoạt để mở.

---

## Bước 3: Cấu hình trình kích hoạt

Giao diện trình kích hoạt được chia thành hai tab: **Cài đặt di động** và **Cài đặt máy tính để bàn**. Các phương pháp có thể được kết hợp tự do. Một khu vực **Dành cho nhà phát triển** nằm ngoài các tab.

---

### Phương pháp 1: Mở từ một mục menu Navi+

Sử dụng cú pháp `open:NaviMenu(embed_id)` trong trường **Liên kết** của bất kỳ mục menu nào. embed_id được hiển thị trong hộp thoại và có thể được nhấp để sao chép:

```
open:NaviMenu(ABC123)
```

Cần **gói Business hoặc cao hơn** (cần 2+ menu).

**Di động — các trường hợp sử dụng phổ biến:**
- Một Tabbar với mục đầu tiên như "☰ Menu" mở menu Slide — **cài đặt phổ biến nhất**
- Một menu FAB & Hỗ trợ với một mục duy nhất mở menu Slide
- Một menu Mega di động với một mục "☰ Menu" dưới tiêu đề

**Máy tính để bàn — các trường hợp sử dụng phổ biến:**
- Một menu Mega máy tính để bàn với một mục "☰ Menu" — giữ trải nghiệm nhất quán với di động
- Một menu Mega máy tính để bàn với một mục duy nhất "☰" đặt trước logo — phản chiếu hamburger di động trên máy tính để bàn (cần một số CSS; [liên hệ với chúng tôi](mailto:support@naviplus.io) nếu bạn cần trợ giúp)
- Một menu FAB & Hỗ trợ với một mục duy nhất mở menu Slide
- Một Tabbar với một mục "☰ Menu"

---

### Phương pháp 2: Mở khi nhấp vào một phần tử (CSS Selector)

Nhập một hoặc nhiều CSS Selectors, cách nhau bằng dấu phẩy (`,`).

**Cú pháp theo thiết bị:**

| Hậu tố | Thiết bị |
|---|---|
| `#element` | Cả di động và máy tính để bàn |
| `#element(M)` | Chỉ di động |
| `#element(D)` | Chỉ máy tính để bàn |

**Bước 1 — tìm selector của bạn:**

*Trên Shopify (Dawn, Craft, Spotlight...):*
Thử `#Details-menu-drawer-container` cho menu hamburger di động. Đối với các giao diện khác, sử dụng **Chế độ gỡ lỗi Navi+**: truy cập `yoursite.com/#navidebug-on`, di chuột qua phần tử, nhấn `Cmd/Ctrl+C` để sao chép selector của nó.

*Trên máy tính để bàn:*
Thường không có biểu tượng hamburger — bạn cần tạo một trình kích hoạt có thể nhấp:
- Thêm một mục "☰ Menu" vào menu mega hiện có của bạn
- Hoặc đặt một biểu tượng ☰ trước logo bằng HTML/CSS ([liên hệ với chúng tôi](mailto:support@naviplus.io) nếu bạn cần trợ giúp)

**Bước 2 — tối ưu hóa UX:**
Khi đã thiết lập, thêm một chỉ báo tải vào phần tử đã thay thế để tránh nhấp nháy bố cục — xem [Tối ưu hóa Xuất bản](/docs/publish/publish-optimize/).

---

### Nâng cao (Máy tính để bàn): Thanh bên cố định

Thay vì mở/đóng, menu Slide có thể hiển thị như một thanh bên luôn hiển thị trên máy tính để bàn.

**Cách bật:** Đi đến **Nâng cao** → **Hướng slide vào** → chọn tùy chọn Thanh bên cố định → bật "Hiển thị menu cố định trên máy tính để bàn".

Không cần trình kích hoạt — menu luôn hiển thị trên máy tính để bàn.

---

### Dành cho nhà phát triển: Hàm JavaScript

Gọi hàm này từ bất kỳ đâu trong mã trang:

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Phù hợp để tích hợp menu Slide vào UI tùy chỉnh mà không cần selector cố định.

---

## Khắc phục sự cố

**Công tắc đã bật nhưng menu không xuất hiện?**
→ Hành vi đúng. Menu slide cần một trình kích hoạt (Bước 3). Kiểm tra xem ít nhất một phương pháp đã được cấu hình.

**CSS Selector không hoạt động?**
1. Sử dụng **Chế độ gỡ lỗi Navi+** để tìm selector chính xác cho phần tử.
2. Kiểm tra xem phần tử thực sự tồn tại trên trang (một số giao diện ẩn/xóa phần tử ở một số điểm ngắt).
3. Thử thêm hậu tố `(M)` hoặc `(D)` để phân tách theo thiết bị.

**Muốn nhiều menu Slide trên cùng một trang?**
→ Tạo các menu riêng biệt, mỗi menu với một `embed_id` khác nhau, sử dụng các trình kích hoạt khác nhau.
