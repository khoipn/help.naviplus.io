---
description: Navi+ cung cấp một số tùy chọn cấu hình chung cho các menu, trong tab **"Design"**, chẳng hạn như nền, kiểu chữ (họ phông, kích thước..), và biểu tượng/hình ảnh...
lang: vi
layout: default
permalink: /vi/docs/frequently-asked-questions/customize-user-interface-ui/using-built-in-settings-or-custom-css/
title: Sử dụng cài đặt tích hợp sẵn hay CSS tùy chỉnh?
---
# Sử dụng cài đặt tích hợp sẵn hay CSS tùy chỉnh?

Navi+ cung cấp một số tùy chọn cấu hình chung cho các menu, trong tab **"Design"**, chẳng hạn như nền, kiểu chữ (họ phông, kích thước..), và biểu tượng/hình ảnh (kích thước, khoảng cách, độ cong...). Bằng cách sử dụng những cài đặt này, menu của bạn thường có thể được định dạng để phù hợp với thiết kế tổng thể và thương hiệu của trang web của bạn.

Navi+ hỗ trợ tối đa 3 cấp độ. Trong tab **"Design"**, bạn chỉ có thể cấu hình kiểu cho 2 cấp độ, và không có tùy chọn trực tiếp để đặt kích thước phông chữ hoặc kích thước biểu tượng/hình ảnh cho menu cấp 2 và cấp 3. Vậy bạn có thể làm điều đó như thế nào?

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEeUzjyXb0DDSzsPobpqC%2FCSS%201.0.png?alt=media&#x26;token=ab2b0265-e0cd-4777-964d-285e4d947c64" alt=""><figcaption></figcaption></figure>

#### Tùy chỉnh menu sâu với công cụ CSS & Coding

Tuy nhiên, nếu bạn hoặc nhà phát triển trang web của bạn có hiểu biết cơ bản về CSS (Stylesheets), bạn có thể tùy chỉnh toàn bộ thiết kế menu bằng cách sử dụng công cụ "**CSS & Coding**" tích hợp sẵn trong Navi+ mà không cần chỉnh sửa trực tiếp các tệp chủ đề của bạn. Điều này mang lại một số lợi ích:

* Bạn có thể tách các cấu hình CSS cho các menu Navi+ khỏi chủ đề của bạn. Điều này có nghĩa là việc nâng cấp hoặc thay đổi chủ đề sẽ không ảnh hưởng đến các menu Navi+ của bạn.
* Navi+ sử dụng một cơ chế bảo vệ thông minh bằng cách tự động thêm một tiền tố (như `#SF-123456789`) ở đầu mỗi quy tắc CSS. Điều này giữ cho CSS cho các menu Navi+ khác nhau được tách biệt, giảm thiểu rủi ro xung đột kiểu dáng.
* Nếu cần, bạn vẫn có thể thêm CSS ảnh hưởng đến toàn bộ trang web trực tiếp trong Navi+, mặc dù điều này nên được sử dụng một cách tiết kiệm và chỉ khi cần thiết.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwIMkFPG3bnaAfvN3fRy4%2FCSS.1.1.png?alt=media&#x26;token=91b34b8a-ae77-4d14-a52d-f30568f8b2c5" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRMPDJmuihVuXKunOmmAZ%2FCSS.1.2.png?alt=media&#x26;token=0ebcac44-dba7-4306-80aa-815323c027b3" alt=""><figcaption></figcaption></figure>

**Lưu ý quan trọng:** Hộp văn bản **Internal Stylesheet / CSS** tự động thêm một tiền tố (ví dụ, `#SF-123456789`) trước mỗi quy tắc CSS. Điều này đảm bảo rằng CSS của bạn chỉ áp dụng cho menu cụ thể đang được tùy chỉnh và ngăn ngừa xung đột kiểu dáng.

#### Một số nghiên cứu điển hình điển hình về việc sử dụng CSS

1) Để cấu hình giao diện của toàn bộ menu ở cấp độ cao nhất, bạn có thể viết một đoạn mã không phải CSS tiêu chuẩn nhưng rất đơn giản. Ví dụ, đoạn mã dưới đây thay đổi nền menu thành màu đỏ. Thêm đoạn mã sau vào hộp văn bản Internal Stylesheet / CSS:

```
{
    background: red;
}
```

2) Cấu hình kích thước, kiểu chữ và màu sắc cho mỗi cấp độ mục menu. Thêm đoạn mã sau vào hộp văn bản Internal Stylesheet / CSS:

```
// Tùy chỉnh kiểu chữ của các mục menu cấp 1
ul > li.item > .inner .name {
    font-size: 14px;
    color: red;
}

// Tùy chỉnh kiểu chữ của các mục menu cấp 2
ul.children[menulevel="2"] > li.child > .inner .name{
     font-size: 16px; 
     color: blue;
}

// Tùy chỉnh kiểu chữ của các mục menu cấp 3
ul.children[menulevel="3"] > li.child > .inner .name{
     font-size: 13px; 
     color: green;     
}
```

3) Thay đổi độ dày phông chữ bằng cách sử dụng `font-weight.` Thêm đoạn mã sau vào hộp văn bản Internal Stylesheet / CSS:

```
// Đặt độ dày phông chữ của tên
.name {
  font-weight: 700;
}

// Đặt độ dày phông chữ của mô tả
.description {
  font-weight: 700;
}
```

4) Điều chỉnh kích thước của mũi tên. Thêm đoạn mã sau vào hộp văn bản Internal Stylesheet / CSS:

```
ul > li.is-parent-top::after {
  font-size: 24px !important;
}
```
