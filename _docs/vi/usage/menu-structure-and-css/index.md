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

Sử dụng **`#SF-…` thủ công** chỉ khi bạn **không** sử dụng hộp này (ví dụ CSS trong tệp chủ đề).

**Stylesheet toàn cầu / CSS** là một trường **tách biệt**: nó áp dụng cho **toàn bộ trang web** và không bị giới hạn cho một menu — sử dụng cẩn thận.

**Lớp tái sử dụng (CSS):** định nghĩa `.yourClass { … }` trong bảng Tái sử dụng và gán lớp cho các mục — các quy tắc vẫn nằm trong cùng một gói CSS nội bộ; bạn **không** cần thêm `#SF-…` vào hộp. Lớp xuất hiện trên **`li`**.

Không **bọc** nội dung trong thẻ `<style>` trong hộp — chỉ CSS thuần.

***

### Demo chi tiết: một nhánh ba cấp độ (biểu tượng, hình ảnh, tên, mô tả)

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
2. *(Tùy chọn)* **`span.cart_count`** — chỉ khi mục sử dụng huy hiệu giỏ hàng với số lượng.
3. **Phương tiện — một trong:**
   * **Biểu tượng (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Hình ảnh:** `div.image-border` → `span.image-box` → `span.image` → `img`\
     \&#xNAN;*Lưu ý:* nếu mục **có hình ảnh**, ứng dụng **hiển thị hình ảnh** và không hiển thị biểu tượng cho hàng đó.
4. **`div.info`** → **`div.flexcol`** → **`span.name`** (nhãn) → **`div.description`** *(chỉ nếu bạn điền mô tả trong trình chỉnh sửa)*.
5. *(Tùy chọn / SEO)* biểu tượng hoặc hình ảnh có thể được bọc trong **`a[href]`** — bạn có thể thấy `<a>…</a>` xung quanh `span.icon` hoặc khối hình ảnh trong DevTools.

#### Các lớp `li` được giải thích

| Lớp                             | Ý nghĩa                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | Độ sâu của mục này                                             |
| `is-parent-top`                   | Mục cấp 1 có trẻ em                                         |
| `is-parent`                       | Mục cấp 2+ có trẻ em                                        |
| `data-name="…"`                   | Nhãn mục (thuộc tính, hữu ích cho các bộ chọn CSS `[data-name]`) |

#### Demo HTML đầy đủ (các lớp minh họa / URL)

```html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Cửa hàng">
      <!-- CẤP 1: biểu tượng + tên + mô tả -->
      <div class="inner inner-level1">
        <span class="arrow"></span>
        <!-- <span class="cart_count">3</span>  ← huy hiệu giỏ hàng chỉ -->

        <!-- BIỂU TƯỢNG: Remix Icon (ri-…) -->
        <span class="icon">
          <i class="ri-store-2-line"></i>
        </span>

        <div class="info">
          <div class="flexcol">
            <span class="name">Cửa hàng</span>
            <div class="description">Duyệt tất cả các danh mục</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Thời trang">
          <!-- CẤP 2: hình ảnh + tên (không có mô tả) -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- HÌNH ẢNH: khi được đặt, biểu tượng không được hiển thị -->
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
                <span class="name">Thời trang</span>
                <!-- không có .description nếu mô tả trống trong trình chỉnh sửa -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="Áo phông">
              <!-- CẤP 3: biểu tượng + tên + mô tả -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">Áo phông</span>
                    <div class="description">Bộ sưu tập mới</div>
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

#### Mẫu phương tiện (để tham khảo)

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
/* Mũi tên */
.inner-level1 .arrow { }

/* Biểu tượng (bất kỳ cấp độ nào) */
.inner-level2 .icon i { font-size: 20px; }

/* Hình ảnh */
.inner-level2 .image img { border-radius: 8px; }

/* Tiêu đề và mô tả */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }

/* Nhắm mục theo tên mục */
[data-name="Cửa hàng"] .name { color: red; }
```

**Nhớ:** menu con cấp 2 / 3 nằm **bên trong** mục cha **`li`**, **sau** `div.inner` của cha — không phải là con trực tiếp của `ul.navigation`.

**Cùng một nhánh, sơ đồ văn bản:**

```
Cửa hàng              ← cấp 1 (thanh chính)
  └─ Thời trang     ← cấp 2 (menu con đầu tiên)
        └─ Áo phông ← cấp 3 (menu con lồng)
```

***

### Tham khảo nhanh (các lớp gợi ý)

| Cấp độ | Hàng (`li`) | Bọc nội dung | Menu con tiếp theo                        |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1     | `level-1`  | `.inner-level1` | `ul.children[menulevel="2"]`        |
| 2     | `level-2`  | `.inner-level2` | `ul.children[menulevel="3"]` nếu có |
| 3     | `level-3`  | `.inner-level3` | —                                   |

`menulevel="2"` / `"3"` là chỉ số của **menu con đó** — không giống như `level-1` trên một mục cấp cao.

***

### Mẹo nhanh

* Nhắm **một độ sâu** với `.inner-level1`, `.inner-level2`, `.inner-level3` thay vì chỉ `.inner`.
* Tạo kiểu cho một **bảng điều khiển** (nền, bán kính): `ul.children[menulevel="2"]` hoặc `[menulevel="3"]`.
* Văn bản: `.info` → `.flexcol` → `.name`, `.description`.
* Biểu tượng: `.icon` hoặc `.icon i` — hình ảnh: `.image-border`, `.image img` (xem demo chi tiết ở trên).
* Mũi tên: `.arrow` (thường là đầu tiên bên trong `.inner`).
* Nhắm một mục cụ thể theo tên: `[data-name="Home"] .name { … }`.

***

### Các lớp thiếu trên cửa hàng?

Xóa bộ nhớ cache của chủ đề, xuất bản lại menu, hoặc kiểm tra phiên bản kịch bản. Sử dụng DevTools để xác nhận tên lớp trên trang trực tiếp.

***

Tài liệu hỗ trợ — **Navi+**
