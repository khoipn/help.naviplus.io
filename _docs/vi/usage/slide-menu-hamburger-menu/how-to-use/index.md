---
description: '**Slide Menu**—còn được gọi là Hamburger Menu, Sidebar Menu, hoặc Drawer Menu—thường được sử dụng trên các trang web Shopify bằng cách điều chỉnh menu trên máy tính để bàn cho di động. Thông thường, menu mặc định này rất đơn giản, không có hình ảnh hoặc bố cục nâng cao. Navi+ cung cấp một sự thay thế hoàn chỉnh cho menu mặc định cơ bản đó.'
lang: vi
layout: default
permalink: /vi/docs/usage/slide-menu-hamburger-menu/how-to-use/
title: Cách sử dụng?
---
# Cách sử dụng?

**Slide Menu**—còn được gọi là Hamburger Menu, Sidebar Menu, hoặc Drawer Menu—thường được sử dụng trên các trang web Shopify bằng cách điều chỉnh menu trên máy tính để bàn cho di động. Thông thường, menu mặc định này rất đơn giản, không có hình ảnh hoặc bố cục nâng cao. Navi+ cung cấp một sự thay thế hoàn chỉnh cho menu mặc định cơ bản đó.

**Lợi ích chính:**

* Thay thế hoàn toàn menu mặc định đơn giản của Shopify
* Cung cấp nhiều kiểu trình bày với **hình ảnh**, **lưới**, và **bố cục nhiều cấp** cho một trải nghiệm phong phú, chuyên nghiệp
* Hoạt động liền mạch trên cả di động và máy tính để bàn để có trải nghiệm nhất quán

**Câu hỏi thường gặp:**

<details><summary><strong>1. Tôi chưa quyết định có nên sử dụng phiên bản miễn phí hay trả phí. Tôi có thể thử các mẫu menu chuyên nghiệp không?</strong></summary>
<p>Chắc chắn rồi! Các nhóm menu chủ yếu nhằm giúp người mới bắt đầu tránh cảm thấy choáng ngợp bởi các tính năng nâng cao trong Navi+ 😄. Cách tốt nhất là thử nghiệm các menu chuyên nghiệp để khám phá tất cả các tính năng và tùy chọn bố cục. Sau đó, bạn có thể đơn giản xóa bất kỳ menu nào bạn không cần hoặc thấy không phù hợp.</p>
</details>

<details><summary><strong>2. Việc tạo một menu ở đây có làm nó xuất hiện trên trang web của tôi ngay lập tức không?</strong></summary>
<p>Chưa. Bạn sẽ cần phải <strong>xuất bản</strong> menu đúng để nó xuất hiện trên trang web của bạn. Đừng lo — điều đó rất dễ dàng!</p>
</details>

<details><summary><strong>3. Nếu tôi chọn sai mẫu hoặc mắc lỗi thì sao?</strong></summary>
<p>Không vấn đề gì cả. Bạn có thể xóa nó và tạo một cái mới bất cứ lúc nào. Nếu bạn đang thử nghiệm một menu và muốn thử một mẫu khác, bạn có thể <strong>lưu</strong> cái hiện tại như một tệp sao lưu và mở lại sau. Bạn thậm chí có thể <strong>sao chép và dán</strong> các phần giữa các menu (bằng cách mở hai tab trình duyệt) để giữ lại công việc trước đó. Hãy thoải mái thử nghiệm!</p>
</details>

<details><summary><strong>4. Tôi nên tạo chỉ một menu hay nhiều menu?</strong></summary>
<p>Bạn nên tạo <strong>nhiều menu</strong>. Chỉ có menu <strong>đang hoạt động</strong> mới hiển thị trên trang của bạn, nhưng bạn có thể chuẩn bị nhiều phiên bản — bằng cách chọn các mẫu khác nhau hoặc nhân bản các menu. Các menu có thể được cấu hình để hiển thị/ẩn dựa trên loại trang (trang chủ, sản phẩm, bộ sưu tập...), thiết bị (di động hoặc máy tính để bàn), hoặc từ khóa URL. Vậy nên hãy tiếp tục và xây dựng các menu phù hợp với từng tình huống!</p>
</details>

### Bước 1: Chỉnh sửa cây menu

#### 1.1. Hiểu về Cây Menu

Cây **menu** là phần quan trọng nhất của bất kỳ menu nào — nó xác định cấu trúc.

Dưới đây là một ví dụ về cây menu của Slide menu:

```
Slide banner  
Deal of the Day
Catalog 
All Mountain  
   - Cruise Flex  
   - Balance Ride
   - Other all-mountain
        - Level 3 menu item
Freestyle  
   - Park Board  
   - Jib Board  
Other products  
Blogs  
More...  
```

Đây là một cây menu 3 cấp. Cấp 1 bao gồm **Slide banner**, **Deal of the Day**, 
[**Catalog + All-Mountain + Freestyle + Other products], Blogs** và **More..**. Catalog sẽ hoạt động như một tên nhóm. **All-Mountain** cũng là một mục menu cấp 1, với ba menu con cấp 2: **Cruise Flex,** **Balance Ride** và **Other all-mountain.**&#x20;

Bạn sẽ dành phần lớn thời gian của mình để xây dựng cây menu này cho trang web của mình, giúp khách hàng tìm thấy nội dung họ đang tìm kiếm.&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FiLkKHBvckAjUmgqjoEyu%2FHelp.MenuTree.1.1.0.png?alt=media&#x26;token=63628235-a03f-47b8-b0dc-eb27512ac21e" alt="Catalog: A level 1 menu item, displayed as a tab on the tab bar. All-Mountain: Level 2 menu item that appears when you tap on Catalog."><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FnNyXxyermApo9zO1eTgy%2FHelp.MenuTree.1.1.1.png?alt=media&#x26;token=0cd15617-75b0-469d-9170-f10158b85a07" alt="Cruise Flex, Balance Ride: Level 3 menu item that appears when you tap on All-Mountain."><figcaption></figcaption></figure>

#### 1.2. Các tương tác cơ bản với Cây Menu

Bạn có thể kéo và thả các mục menu lên và xuống hoặc sang trái và phải để thay đổi vị trí và mối quan hệ cha-con trong cây menu.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fdexnk8WyoGnydVqI6TJ9%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=ae89e32d-4d3b-46e7-bb27-0ca69082b93e" alt="\
