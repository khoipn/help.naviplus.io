---
description: 'Navi+ hoàn toàn hỗ trợ đa ngôn ngữ trong hai phần:'
lang: vi
layout: default
permalink: /vi/docs/usage/general/apply-multi-language/
title: Áp dụng đa ngôn ngữ
---
# Áp dụng đa ngôn ngữ

Navi+ hoàn toàn hỗ trợ đa ngôn ngữ trong hai phần:

**1) Sử dụng cú pháp để tự động hiển thị ngôn ngữ đúng.**

Ví dụ, hãy tưởng tượng bạn có một Tabbar của Navi+ hiển thị trên trang web của bạn với 3 ngôn ngữ: tiếng Anh (mặc định), tiếng Pháp và tiếng Việt. Mã ngắn cho tiếng Pháp là `fr` và cho tiếng Việt là `vi`.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F6k6V0wCgNOrg7o30S7PT%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=5eb3293f-9f55-4917-87e1-dacff684ca9e" alt=""><figcaption></figcaption></figure>

Để hiển thị mục menu **Trang chủ** bằng ngôn ngữ đúng, hãy sử dụng cú pháp này:

```
Home <fr: Maison> <vi: Trang chủ>
```

Khi Tabbar của bạn được hiển thị, Navi+ sẽ tự động kiểm tra ngôn ngữ hiện tại.

* Nếu mặc định là tiếng Anh, nó hiển thị **Home**.
* Nếu tiếng Pháp được chọn, nó hiển thị **Maison**.
* Nếu tiếng Việt được chọn, nó hiển thị **Trang chủ**.

Điều này hoạt động cho cả các trường **mô tả** và **liên kết đến**.

2\) Tạo menu chuyển đổi ngôn ngữ trong Navi+

Navi+ hỗ trợ một cú pháp đặc biệt cho phép bạn chuyển đổi ngôn ngữ trực tiếp từ các mục menu của bạn.

* **Bước 1:** (Tùy chọn) Thêm biểu tượng cờ nếu bạn muốn. Bạn có thể tải xuống biểu tượng cờ từ các trang web như [Flaticon](https://www.flaticon.com "Flaticon") (Ví dụ: <https://www.flaticon.com/authors/flags/rectangular?author_id=1&type=standard>). 
* **Bước 2:** Sử dụng cú pháp sau để chuyển đổi ngôn ngữ:

```
open:ChangeLanguage(fr)
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FdTn5Nk2ETEUXO7unkIu9%2FHelp.MenuTree.1.1.2-1.png?alt=media&#x26;token=e1f13362-de09-4438-ad5a-a075a9750b7d" alt=""><figcaption></figcaption></figure>
