---
description: 'Tìm hiểu sâu về một mục menu duy nhất — cấu trúc HTML của nó (biểu tượng, hình ảnh, tên, mô tả, mũi tên, huy hiệu) và cách tạo kiểu cho chỉ mục đó bằng hộp CSS cho từng mục, bao gồm & (mục này), bộ chọn bên trong, hover và @media.'
lang: vi
layout: default
permalink: /vi/docs/usage/menu-item-structure-and-css/
title: Cấu trúc mục menu và CSS
---
# Cấu trúc mục menu và CSS

Trang này tìm hiểu sâu về **một mục menu** — HTML mà nó hiển thị và cách tạo kiểu cho **chỉ mục đó** bằng cách sử dụng hộp CSS riêng của mục (**sửa mục → Nâng cao → Bảng định kiểu nội bộ / CSS**).

> Hộp này tạo kiểu cho **chỉ mục bạn đang sửa**, và CSS **di chuyển cùng mục** khi bạn nhân đôi nó. Để tạo kiểu CSS trên toàn bộ menu, hãy sử dụng **CSS tùy chỉnh cho menu này** thay thế — xem [Cấu trúc menu và CSS](/docs/usage/menu-structure-and-css/).

***

## Cấu trúc của một mục

Mỗi mục là một `li` duy nhất chứa một `div.inner`. Bên trong `.inner`, theo thứ tự:

```html
<li class="item level-1 …" data-name="Shop">
  <div class="inner inner-level1">
    <span class="arrow"></span>            <!-- submenu arrow (if any) -->
    <!-- <span class="cart_count">3</span> --> <!-- cart badge with count (optional) -->

    <!-- MEDIA — icon OR image (if the item has an image, the icon is not rendered) -->
    <span class="icon"><i class="ri-store-2-line"></i></span>
    <!-- or -->
    <div class="image-border">
      <span class="image-box"><span class="image"><img src="…"></span></span>
    </div>

    <!-- TEXT -->
    <div class="info">
      <div class="flexcol">
        <span class="name">Shop</span>
        <div class="description">Browse all categories</div>   <!-- only if you filled description -->
      </div>
    </div>
  </div>
</li>
```

### Các phần bạn có thể nhắm tới

| Phần | Bộ chọn | Ghi chú |
| ---- | -------- | ----- |
| Mục chính nó (hàng) | `&` | Cái `li`. `&` là phím tắt cho "mục này". |
| Trình bọc nội dung | `.inner` | Bọc mọi thứ bên trong mục |
| Biểu tượng glyph | `.icon i` | Remix Icon (`ri-…`) |
| Hình ảnh | `.image img` (hộp: `.image-border`, `.image-box`, `.image`) | Được hiển thị thay vì biểu tượng khi mục có hình ảnh |
| Tiêu đề | `.name` | Nhãn |
| Mô tả | `.description` | Chỉ tồn tại nếu bạn điền vào trường mô tả |
| Cột văn bản | `.info`, `.flexcol` | Giữ tên + mô tả |
| Mũi tên | `.arrow` | Mũi tên menu con |
| Huy hiệu giỏ hàng | `.cart_count` | Chỉ dành cho các mục giỏ hàng có số lượng |

***

## Viết CSS cho một mục

Hộp chấp nhận **ba hình thức, có thể kết hợp với nhau**. Bạn không bao giờ nhập `#SF-…` và không bao giờ thêm thẻ `<style>` — Navi+ tự động định phạm vi mọi thứ cho mục này duy nhất.

### 1. `&` — mục này (được khuyến nghị)

`&` có nghĩa là hàng của chính mục (cái `li`), giống như `&` trong Sass:

```css
& { border: 1px solid #eee; border-radius: 12px; }
&:hover { background: #f8fafc; }
```

### 2. Bộ chọn bên trong — các phần bên trong mục

Sử dụng tên lớp từ bảng trên:

```css
.name { font-weight: 700; }
.description { font-size: 12px; opacity: .8; }
.icon i { font-size: 22px; color: #2563eb; }
.image img { border-radius: 10px; }
```

Một **khoảng trắng sau `&`** cũng có nghĩa là "bên trong mục", vì vậy `& .name` và `.name` là như nhau. `&` được viết **mà không có khoảng trắng** (`&:hover`, `&.active`) tạo kiểu cho chính hàng.

### 3. Khai báo trần — phím tắt cũ hơn

Viết các thuộc tính với **không có bộ chọn** áp dụng chúng cho hàng của mục:

```css
color: red;
font-weight: 700;
```

Điều này tiếp tục hoạt động (các menu cũ dựa vào nó), nhưng `&` rõ ràng hơn — và các khai báo trần **không thể** được sử dụng bên trong `@media`.

***

## Đáp ứng với `@media`

`@media` hoạt động ở đây. Bên trong `@media` bạn phải sử dụng một bộ chọn (đó là CSS tiêu chuẩn), vì vậy hãy sử dụng `&` cho mục chính nó:

```css
/* Smaller padding + hide the description on phones */
@media (max-width: 768px) {
  & { padding: 8px; }
  .description { display: none; }
  .name { font-size: 13px; }
}
```

> Để **hiển thị hoặc ẩn** mục theo thiết bị, hãy ưu tiên **Hiển thị trên di động / Hiển thị trên máy tính để bàn** trong trình chỉnh sửa — không phải CSS. Trên **Wix**, `@media` dựa trên khung nhìn có thể không khớp với màn hình thực; hãy sử dụng cài đặt Hiển thị ở đó.

***

## Ví dụ

**Biến một mục thành viên / huy hiệu:**

```css
& { background: #111; color: #fff; border-radius: 999px; padding: 6px 14px; }
.name { color: #fff; }
```

**Làm nổi bật khi di chuột:**

```css
&:hover { transform: translateY(-2px); transition: transform .15s; }
&:hover .name { color: #2563eb; }
```

**Biểu tượng lớn hơn, có màu:**

```css
.icon i { font-size: 24px; color: #e11d48; }
```

**Hình ảnh được làm tròn với khung tinh tế:**

```css
.image img { border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,.12); }
```

**Gọn gàng trên di động:**

```css
& { padding: 12px; }
@media (max-width: 768px) {
  & { padding: 6px; }
  .description { display: none; }
}
```

***

## Điều tốt để biết

* **Không `#SF-…`, không thẻ `<style>`** — Navi+ định phạm vi CSS cho mục này duy nhất; nó không bao giờ ảnh hưởng đến các mục khác.
* CSS **di chuyển cùng mục** khi bạn nhân đôi nó (nó là theo mục, tái sử dụng được).
* Nếu một thuộc tính được đặt ở cả **tại đây** và bằng cách sử dụng cài đặt trực quan của mục (Hộp phương tiện / Màu hộp bên trong, đường viền, bóng…), thì **cài đặt trực quan sẽ thắng** — nó được áp dụng nội tuyến. Xóa cài đặt đó nếu bạn muốn CSS của mình tiếp quản.
* Sử dụng **biểu tượng mở rộng** (phía trên bên phải của hộp) để có trình chỉnh sửa lớn hơn; nhấn **Esc** hoặc **Xong** để đóng.

***

Support documentation — **Navi+**
