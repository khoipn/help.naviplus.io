---
description: '**Mobile Mega Menus** không phổ biến trên di động như Tabbar hoặc Slide Menus, vì khu vực chạm của Mega Menu thường quá nhỏ cho ngón tay của người dùng. Tuy nhiên...'
lang: vi
layout: default
permalink: /vi/docs/usage/mega-menu-mobile/how-to-use/
title: Cách sử dụng?
---
# Cách sử dụng?

**Mobile Mega Menus** không phổ biến trên di động như Tabbar hoặc Slide Menus, vì khu vực chạm của Mega Menu thường quá nhỏ cho ngón tay của người dùng. Tuy nhiên, đôi khi bạn có thể muốn duy trì trải nghiệm nhất quán giữa máy tính để bàn và di động bằng cách sử dụng Mega Menu trên cả hai nền tảng.

Mobile Mega Menus cũng có những lợi thế: chúng gọn nhẹ, được đặt dưới tiêu đề và không chiếm không gian màn hình vì chúng nổi trên màn hình. Là một menu phần, chúng cuộn theo trang.

**Lợi ích chính:**

* Hoạt động liền mạch trên cả di động và máy tính để bàn để có trải nghiệm nhất quán
* Tiết kiệm không gian và cuộn theo trang.
* Cung cấp nhiều kiểu trình bày với **hình ảnh**, **lưới**, và **bố cục nhiều cấp** cho một trải nghiệm phong phú, chuyên nghiệp

**Câu hỏi thường gặp:**

<details><summary><strong>1. Tôi chưa quyết định có nên sử dụng phiên bản miễn phí hay trả phí. Tôi có thể thử các mẫu menu chuyên nghiệp không?</strong></summary>
<p>Chắc chắn rồi! Các nhóm menu chủ yếu nhằm giúp người mới bắt đầu tránh cảm thấy choáng ngợp bởi các tính năng nâng cao trong Navi+ 😄. Cách tốt nhất là thử nghiệm các menu chuyên nghiệp để khám phá tất cả các tính năng và tùy chọn bố cục. Sau đó, bạn có thể đơn giản xóa bất kỳ menu nào bạn không cần hoặc thấy không phù hợp.</p>
</details>

<details><summary><strong>2. Việc tạo một menu ở đây có làm nó xuất hiện ngay lập tức trên trang web của tôi không?</strong></summary>
<p>Chưa. Bạn sẽ cần phải <strong>xuất bản</strong> menu đúng để nó xuất hiện trên trang web của bạn. Đừng lo — điều này rất dễ dàng!</p>
</details>

<details><summary><strong>3. Nếu tôi chọn sai mẫu hoặc mắc lỗi thì sao?</strong></summary>
<p>Không vấn đề gì cả. Bạn có thể xóa nó và tạo một cái mới bất cứ lúc nào. Nếu bạn đang thử nghiệm một menu và muốn thử một mẫu khác, bạn có thể <strong>lưu</strong> cái hiện tại như một tệp sao lưu và mở lại sau. Bạn thậm chí có thể <strong>sao chép và dán</strong> các phần giữa các menu (bằng cách mở hai tab trình duyệt) để giữ lại công việc trước đó. Hãy thoải mái thử nghiệm!</p>
</details>

<details><summary><strong>4. Tôi nên tạo chỉ một menu hay nhiều menu?</strong></summary>
<p>Bạn nên tạo <strong>nhiều menu</strong>. Chỉ menu <strong>đang hoạt động</strong> sẽ hiển thị trên trang của bạn, nhưng bạn có thể chuẩn bị nhiều phiên bản — bằng cách chọn các mẫu khác nhau hoặc nhân bản các menu. Các menu có thể được cấu hình để hiển thị/ẩn dựa trên loại trang (trang chủ, sản phẩm, bộ sưu tập...), thiết bị (di động hoặc máy tính để bàn), hoặc từ khóa URL. Vì vậy, hãy tiếp tục và xây dựng các menu phù hợp với từng tình huống!</p>
</details>

### Bước 1: Chỉnh sửa cây menu

#### 1.1. Hiểu về Cây Menu

Cây **menu** là phần quan trọng nhất của bất kỳ menu nào — nó xác định cấu trúc.

Dưới đây là một ví dụ về cây menu của mobile mega menu:

```
Menu
Home  
Catalog 
- All Mountain  
   - Cruise Flex  
   - Balance Ride
- Freestyle  
   - Park Board  
   - Jib Board  
- Freeride  
Blogs
Support  
More 
```

Đây là một cây menu 3 cấp. Cấp-1 bao gồm **Menu, Home**, **Catalog**, **Support, Blogs** và **More**. **All-Mountain** là một mục menu cấp-2, với một số mục con: **Cruise Flex** và **Balance Ride**.

Bạn sẽ dành phần lớn thời gian của mình để xây dựng cây menu này cho trang web của bạn, giúp khách hàng tìm thấy nội dung mà họ đang tìm kiếm.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FosZUYAtOckjPUD5T8F5q%2FHelp.MenuTree.1.1.0.png?alt=media&#x26;token=c1eec6d7-a0b6-45f5-aea5-6678540a884a" alt="Catalog: A level 1 menu item, displayed as a tab on the tab bar. All-Mountain: Level 2 menu item that appears when you tap on Catalog."><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fh6AHpLQvuPq0AadY0TOH%2FHelp.MenuTree.1.1.1.png?alt=media&#x26;token=06a10cb0-ab20-44be-a734-a221597a4ea9" alt="Cruise Flex, Balance Ride: Level 3 menu item that appears when you tap on All-Mountain."><figcaption></figcaption></figure>

#### 1.2. Các tương tác cơ bản với Cây Menu

Bạn có thể kéo và thả các mục menu lên và xuống hoặc sang trái và phải để thay đổi vị trí và mối quan hệ cha-con trong cây menu.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMAz90izqLq6bJcZst2rw%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=27b190ca-50eb-4272-9ba9-30741e95d33a" alt="\
