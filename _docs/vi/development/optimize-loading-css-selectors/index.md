---
description: "Cú pháp CSS Selector để trigger skeleton menu và tích hợp theme — tối ưu thời gian load menu và trải nghiệm người dùng với định dạng selector theo thiết bị và labeled."
layout: default
permalink: /vi/docs/development/optimize-loading-css-selectors/
title: Tối ưu hóa tốc độ và UX — cú pháp CSS Selector
---
# Tối ưu hóa tốc độ và UX — cú pháp CSS Selector

Trong **Theme Editor → App embeds → Store Connector**, nhóm **Speed & UX optimization** có 2 field CSS Selector giúp menu load mượt hơn — không cần tự viết CSS/JS tay như cách cũ. Bài này giải thích cú pháp nhập cho cả 2 field.

---

## 2 field, 2 mục đích khác nhau

| Field | Dùng cho | Cơ chế |
|---|---|---|
| **Mobile Menu CSS Selector** | Nút mở Mobile Menu (hamburger) khi dùng cách bắt sự kiện bằng CSS Selector | Bấm nút TRƯỚC khi Navi+ tải xong → mở ngay một khung menu giả (skeleton, phản hồi tức thì) thay vì im lặng chờ. Navi+ tải xong tới đâu, khung giả nhường chỗ menu thật tới đó. |
| **CSS Selector for Mega Menu Replacement** | Vùng menu gốc của theme, khi Navi+ chạy ở chế độ thay thế (Replacement mode) | Che vùng đó bằng hiệu ứng loading dạng thanh shimmer trong lúc chờ Navi+ tải, tránh nội dung gốc "nhấp nháy" hiện ra rồi biến mất khi bị thay thế. |

Cả 2 field đều **optional** — để trống thì không có gì thay đổi so với hành vi mặc định.

---

## Cú pháp chung — nhiều selector, ngăn bằng dấu phẩy

```
selector-1, selector-2, selector-3
```

Dùng dấu phẩy `,` hoặc chấm phẩy `;` để ngăn nhiều selector trong cùng 1 field. Dấu phẩy/chấm phẩy nằm bên trong `(...)`, `[...]`, hoặc trong chuỗi `"..."`/`'...'` (ví dụ attribute selector `[data-value="a,b"]`) được nhận diện đúng ngữ cảnh, không bị hiểu nhầm là dấu ngăn giữa 2 selector.

---

## Cú pháp Legacy — hậu tố `(M)` / `(D)`

Dùng được ở **cả 2 field**. Thêm hậu tố ngay sau selector để giới hạn theo thiết bị:

```
.hamburger-mobile (M)
.hamburger-desktop (D)
.trigger-luon-ap-dung
```

| Hậu tố | Áp dụng cho |
|---|---|
| `(M)` | Chỉ Mobile |
| `(D)` | Chỉ Desktop |
| *(không có hậu tố)* | Mọi thiết bị |

---

## Cú pháp Labeled — chỉ field "Mobile Menu CSS Selector"

Field **Mobile Menu CSS Selector** hỗ trợ thêm 1 cú pháp chi tiết hơn để tuỳ chỉnh giao diện khung menu giả (skeleton) — field **Mega Menu (Replacement mode)** KHÔNG hỗ trợ cú pháp này, chỉ nhận `(M)`/`(D)`.

```
.hamburger (Device:M | Color:#1a1a1a | Direction:left | Width:85%)
```

Nhận diện bằng dấu `:` bên trong `(...)` — có `:` thì hiểu là Labeled, không có `:` thì hiểu là Legacy (`(M)`/`(D)`). Các tham số cách nhau bằng `|`:

| Tham số | Giá trị hợp lệ | Mặc định khi bỏ trống/sai |
|---|---|---|
| `Device` | `M` hoặc `D` (liệt kê cả `M,D` = không giới hạn thiết bị, coi như bỏ trống) | Mọi thiết bị |
| `Color` | Mã hex CSS: `#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa` | `#fff` |
| `Direction` | `left` hoặc `right` — hướng khung menu giả trượt ra | `left` |
| `Width` | Phần trăm `NN%` hoặc pixel `NNpx` (số nguyên hoặc thập phân) | `85%` |

**Ví dụ:**
```
.hamburger (Device:M | Color:#1a1a1a | Width:320px)
```
→ Chỉ áp dụng trên Mobile, khung menu giả nền `#1a1a1a`, rộng cố định `320px`.

### Chịu lỗi từng tham số riêng lẻ

- Khoảng trắng và hoa/thường trong key lẫn value đều được chuẩn hoá trước khi so khớp (`Color: #1A1A1A` và `color:#1a1a1a` như nhau).
- Tham số sai định dạng (vd `Color:red` — không phải mã hex) hoặc key lạ (typo, tên không tồn tại) chỉ bị **bỏ qua đúng tham số đó**, dùng giá trị mặc định thay thế — không làm hỏng các tham số khác hay các selector khác trong cùng field.

---

## Selector không hợp lệ (lỗi cú pháp CSS)

Nếu 1 selector trong field **Mobile Menu CSS Selector** bị lỗi cú pháp CSS thật sự (khác với tham số Labeled sai — đây là chính selector không parse được), Navi+ in cảnh báo trong Console trình duyệt (F12 → Console), trỏ thẳng lại field cần sửa:

```
[Navi+] INVALID TRIGGER CSS SELECTOR — this one was skipped
selector      : <selector lỗi>
browser error : <lỗi trình duyệt trả về>
Fix it in Theme Editor → App embeds → Store Connector →
Mobile Menu CSS Selector.
```

Selector lỗi bị bỏ qua riêng, các selector hợp lệ khác trong field vẫn hoạt động bình thường.

---

## Ví dụ thực tế

### 1. Bảo vệ nút hamburger mặc định, không tuỳ chỉnh gì thêm

```
#Details-menu-drawer-container
```
Bấm sớm vẫn có phản hồi ngay (skeleton mặc định), không cần khai báo Device/Color/Direction/Width.

### 2. Hamburger Mobile riêng, trượt từ phải, theo màu thương hiệu

```
.hamburger-mobile (Device:M | Color:#0f172a | Direction:right | Width:90%)
```

### 3. Thay thế vùng mega menu gốc của theme trên cả 2 thiết bị

```
nav.header__inline-menu
```
(field **CSS Selector for Mega Menu Replacement**, không hậu tố = áp dụng mọi thiết bị)

### 4. Kết hợp nhiều selector, giới hạn thiết bị khác nhau

```
.mega-menu (D), .mobile-nav-wrapper (M)
```
