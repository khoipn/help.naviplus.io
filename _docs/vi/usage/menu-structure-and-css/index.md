---
description: 'Hướng dẫn ngắn gọn để tạo kiểu cho menu với **CSS tùy chỉnh cho menu này**, **Lớp tái sử dụng (CSS)**, và HTML mặc định. Menu có **ba cấp độ**: thanh chính...'
lang: vi
layout: default
permalink: /vi/docs/usage/menu-structure-and-css/
title: Cấu trúc menu và CSS
---
# Cấu trúc menu và CSS

Hướng dẫn ngắn gọn để tạo kiểu cho menu với **CSS tùy chỉnh cho menu này**, **Lớp tái sử dụng (CSS)**, và HTML mặc định. Menu có **ba cấp độ**: thanh chính, menu con, menu con lồng.

> **Lưu ý:** Bản demo này bao gồm một **Slide / Standard menu**. Cấu trúc giống nhau cho hầu hết các loại menu; TABBAR và Mega Menu có thể có những khác biệt nhỏ — sử dụng DevTools trên trang trực tiếp để xác nhận.

***

### CSS tùy chỉnh — những gì cần nhập

Trong **Nâng cao → CSS tùy chỉnh cho menu này**, Navi+ **thêm một tiền tố** (bao gồm `#SF-…` và phạm vi menu). Viết **chỉ các bộ chọn bình thường** — **không** tự nhập `#SF-12345678`.

```css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

**`&` = menu chính nó** (vùng chứa `#SF-…`). Nó là tùy chọn — nhưng nó là cách sạch sẽ để tạo kiểu cho toàn bộ menu, và là cách duy nhất để thực hiện nó bên trong `@media`:

```css
&              { background: #111; }        /* the menu container */
&:hover        { box-shadow: 0 4px 12px rgba(0,0,0,.15); }
& .inner-level1 { padding: 12px 16px; }     /* '& ' with a space = inside the menu, same as .inner-level1 */

/* Responsive — only on small screens */
@media (max-width: 768px) {
  & { padding: 6px; }
  .name { font-size: 13px; }
}
```

Bạn **không phải** sử dụng `&` — CSS mà không có nó tiếp tục hoạt động chính xác như trước (`.inner-level1 { … }` không thay đổi). `&` chỉ là phím tắt cho "menu này".

Sử dụng **`#SF-…` thủ công** chỉ khi bạn **không** sử dụng hộp này (ví dụ CSS trong tệp chủ đề).

**Bảng định kiểu toàn cầu / CSS** là một trường **tách biệt**: nó áp dụng cho **toàn bộ trang web** và không bị giới hạn cho một menu — sử dụng cẩn thận.

**Lớp tái sử dụng (CSS):** định nghĩa `.yourClass { … }` trong bảng Tái sử dụng và gán lớp cho các mục — các quy tắc vẫn nằm trong cùng một gói CSS nội bộ; bạn **không** cần thêm `#SF-…` vào hộp. Lớp xuất hiện trên **`li`**.

Không **bọc** nội dung trong thẻ `<style>` trong hộp — chỉ CSS thuần.

***

### CSS cho từng mục (tạo kiểu cho chỉ một mục)

Mỗi mục menu có **riêng** hộp CSS của nó: **sửa mục → Nâng cao → Bảng định kiểu nội bộ / CSS**. Điều này tách biệt khỏi **CSS tùy chỉnh cho menu này** (dùng chung cho menu). CSS cho từng mục **di chuyển cùng mục** — nếu bạn sao chép hoặc nhân đôi mục, kiểu của nó cũng đi kèm.

> **Hướng dẫn đầy đủ:** để tìm hiểu cấu trúc HTML của một mục và mọi cú pháp CSS, xem [Cấu trúc mục menu và CSS](/docs/usage/menu-item-structure-and-css/).

Viết CSS thuần. **`&` có nghĩa là *mục này*** (hàng của mục / `li`) — giống như `&` trong Sass:

```css
& { background: #fff5f5; border-radius: 10px; }
&:hover { background: #ffe4e6; }
```

Nhắm tới **các phần bên trong** của mục với các bộ chọn lớp bình thường (cùng tên với phần còn lại của menu: `.inner`, `.name`, `.description`, `.icon`, `.image`, `.arrow`):

```css
.name { color: #b91c1c; }
.icon i { font-size: 22px; }
& .description { opacity: 0.8; }
```

Một **khoảng trắng sau `&`** có nghĩa là "một phần bên trong mục", vì vậy `& .name` và `.name` là như nhau. `&` được viết **mà không có khoảng trắng** (`&:hover`, `&.active`) tạo kiểu cho chính hàng của mục.

**Đáp ứng (`@media`)** hoạt động — tuyệt vời cho các điều chỉnh chỉ dành cho di động. Bên trong `@media` bạn phải sử dụng một bộ chọn (đây là CSS tiêu chuẩn), vì vậy hãy sử dụng `&` cho mục chính nó:

```css
@media (max-width: 768px) {
  & { padding: 8px; }
  .name { font-size: 13px; }
}
```

Ghi chú:

* **Không `#SF-…` cần thiết**, và **không thẻ `<style>`** — Navi+ tự động định phạm vi mọi thứ cho mục này duy nhất, vì vậy nó không bao giờ ảnh hưởng đến các mục khác. CSS cũng di chuyển cùng mục nếu bạn nhân đôi nó.
* Bạn vẫn có thể viết một **khai báo trần** mà không có bộ chọn (`color: red;`) — nó được áp dụng cho hàng của mục này. Kiểu cũ hơn này tiếp tục hoạt động, nhưng `&` rõ ràng hơn và nó là cách duy nhất để tạo kiểu cho hàng bên trong `@media`.
* Nếu một thuộc tính được đặt ở cả tại đây và bằng cách sử dụng cài đặt trực quan của mục (Hộp phương tiện / Bóng hộp bên trong, v.v.), thì **cài đặt trực quan sẽ thắng**. Xóa/ghi đè cài đặt đó nếu bạn muốn CSS tiếp quản.
* Để **hiển thị/ẩn** mục theo thiết bị, sử dụng **Hiển thị trên di động / Hiển thị trên máy tính để bàn** trong trình chỉnh sửa — không phải CSS. Trên **Wix**, `@media` dựa trên khung nhìn có thể không khớp với màn hình thực; ưu tiên cài đặt Hiển thị ở đó.
* Sử dụng **biểu tượng mở rộng** (phía trên bên phải của hộp) để mở trình chỉnh sửa mã lớn hơn; nhấn **Esc** hoặc **Xong** để đóng.

Sử dụng **CSS cho từng mục** cho một điều chỉnh một lần cho một mục duy nhất; sử dụng **CSS tùy chỉnh cho menu này** (với `.inner-level1`, `[data-name="…"]`, v.v.) khi bạn muốn tạo kiểu cho nhiều mục hoặc toàn bộ cấp độ cùng lúc.

***

### Bản demo chi tiết: một nhánh ba cấp độ (biểu tượng, hình ảnh, tên, mô tả)

Ví dụ nhãn: **Cửa hàng** (cấp 1: **biểu tượng** + tên + mô tả) → **Thời trang** (cấp 2: **hình ảnh** + tên) → **Áo phông** (cấp 3: **biểu tượng** + tên + mô tả). Điều này cho thấy **cả hai loại phương tiện** và **mô tả**.

Toàn bộ menu nằm trong một khối:

```html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` là **id nhúng** của menu — hiển thị trong bảng điều khiển Navi+ (huy hiệu màu xanh bên cạnh tiêu đề menu) và trong DevTools trên trang trực tiếp.

#### Thứ tự bên trong mỗi `div.inner` (thời gian chạy)

1. **`span.arrow`** — mũi tên (menu con / di động, tùy thuộc vào loại menu).
2. *(Tùy chọn)* **`span.cart_count`** — chỉ khi mục sử dụng huy hiệu giỏ hàng có số lượng.
3. **Phương tiện — một trong các:**
   * **Biểu tượng (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Hình ảnh:** `div.image-border` → `span.image-box` → `span.image` → `img`\
     \&#xNAN;*Lưu ý:* nếu mục **có hình ảnh**, ứng dụng **hiển thị hình ảnh** và không hiển thị biểu tượng cho hàng đó.
4. **`div.info`** → **`div.flexcol`** → **`span.name`** (nhãn) → **`div.description`** *(chỉ nếu bạn điền vào mô tả trong trình chỉnh sửa)*.
5. *(Tùy chọn / SEO)* biểu tượng hoặc hình ảnh có thể được bọc trong **`a[href]`** — bạn có thể thấy `<a>…</a>` xung quanh `span.icon` hoặc khối hình ảnh trong DevTools.

#### Các lớp `li` được giải thích

| Lớp | Ý nghĩa |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | Độ sâu của mục này |
| `is-parent-top` | Mục cấp 1 có con |
| `is-parent` | Mục cấp 2+ có con |
| `data-name="…"` | Nhãn mục (thuộc tính, hữu ích cho bộ chọn CSS `[data-name]`) |

#### Bản demo HTML đầy đủ (minh họa các lớp / URL)

```html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Shop">
      <!-- LEVEL 1: icon + name + description -->
      <div class="inner inner-level1">
        <span class="arrow"></span>
        <!-- <span class="cart_count">3</span>  ← cart badge only -->

        <!-- ICON: Remix Icon (ri-…) -->
        <span class="icon">
          <i class="ri-store-2-line"></i>
        </span>

        <div class="info">
          <div class="flexcol">
            <span class="name">Shop</span>
            <div class="description">Browse all categories</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Clothing">
          <!-- LEVEL 2: image + name (no description) -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- IMAGE: when set, icon is not rendered -->
            <div class="image-border">
              <span class="image-box">
                <span class="image">
                  <img
                    src="https://cdn.shopify.com/…/clothing.jpg"
                    alt="Clothing"
                    title="Clothing"
                    loading="lazy"
                    decoding="async">
                </span>
              </span>
            </div>

            <div class="info">
              <div class="flexcol">
                <span class="name">Clothing</span>
                <!-- no .description if description is empty in the editor -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="T-Shirts">
              <!-- LEVEL 3: icon + name + description -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">T-Shirts</span>
                    <div class="description">New collection</div>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </li>

      </ul>
    </li>

  </ul>
</div>
```

#### Đoạn phương tiện (tham khảo)

**Chỉ biểu tượng (không có hình ảnh):**

```html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**Chỉ hình ảnh (URL hình ảnh được đặt trên mục):**

```html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### Ví dụ bộ chọn cho CSS tùy chỉnh (trong hộp Navi+ — không nhập `#SF-…`)

```css
/* Arrow */
.inner-level1 .arrow { }

/* Icon (any level) */
.inner-level2 .icon i { font-size: 20px; }

/* Image */
.inner-level2 .image img { border-radius: 8px; }

/* Title and description */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }

/* Target by item name */
[data-name="Shop"] .name { color: red; }
```

**Ghi nhớ:** menu con cấp 2 / 3 nằm **bên trong** cha **`li`**, **sau** `div.inner` của cha — không phải là con trực tiếp của `ul.navigation`.

**Nhánh tương tự, sơ đồ văn bản:**

```
Shop              ← level 1 (main bar)
  └─ Clothing     ← level 2 (first submenu)
        └─ T-Shirts ← level 3 (nested submenu)
```

***

### Tham khảo nhanh (các lớp được đề xuất)

| Cấp độ | Hàng (`li`) | Trình bọc nội dung | Menu con tiếp theo |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1 | `level-1` | `.inner-level1` | `ul.children[menulevel="2"]` |
| 2 | `level-2` | `.inner-level2` | `ul.children[menulevel="3"]` if any |
| 3 | `level-3` | `.inner-level3` | — |

`menulevel="2"` / `"3"` là chỉ số của **menu con đó** — không giống như `level-1` trên mục cấp 1.

***

### Mẹo nhanh

* Nhắm tới **một độ sâu** với `.inner-level1`, `.inner-level2`, `.inner-level3` thay vì chỉ `.inner`.
* Tạo kiểu cho **toàn bộ bảng điều khiển** (nền, bán kính): `ul.children[menulevel="2"]` hoặc `[menulevel="3"]`.
* Văn bản: `.info` → `.flexcol` → `.name`, `.description`.
* Biểu tượng: `.icon` hoặc `.icon i` — hình ảnh: `.image-border`, `.image img` (xem bản demo chi tiết ở trên).
* Mũi tên: `.arrow` (thường đầu tiên bên trong `.inner`).
* Nhắm tới một mục cụ thể theo tên: `[data-name="Home"] .name { … }`.

***

### Các lớp bị thiếu trong cửa hàng?

Xóa bộ nhớ đệm chủ đề, xuất bản lại menu hoặc kiểm tra phiên bản tập lệnh. Sử dụng DevTools để xác nhận tên lớp trên trang trực tiếp.

***

Support documentation — **Navi+**
