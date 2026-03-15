---
description: '**Mobile Mega Menus** không phổ biến trên di động như Tabbar hoặc Slide Menus, vì khu vực chạm của Mega Menu thường quá nhỏ cho ngón tay của người dùng. Tuy nhiên...'
lang: vi
layout: default
permalink: /vi/docs/usage/mega-menu-mobile/how-to-use/
title: Cách sử dụng?
---
# Cách sử dụng?

**Mobile Mega Menus** không phổ biến trên di động như Tabbar hoặc Slide Menus, vì khu vực chạm của Mega Menu thường quá nhỏ cho ngón tay của người dùng. Tuy nhiên, đôi khi bạn có thể muốn duy trì trải nghiệm nhất quán giữa máy tính để bàn và di động bằng cách sử dụng Mega Menu trên cả hai nền tảng.

Mobile Mega Menus cũng có những lợi thế: chúng gọn nhẹ, được đặt dưới tiêu đề, và không chiếm không gian màn hình vì chúng nổi trên màn hình. Là một menu phần, chúng cuộn theo trang.

**Lợi ích chính:**

* Hoạt động liền mạch trên cả di động và máy tính để bàn để có trải nghiệm nhất quán
* Tiết kiệm không gian và cuộn theo trang.
* Cung cấp nhiều kiểu trình bày với **hình ảnh**, **lưới**, và **bố cục nhiều cấp** cho một trải nghiệm phong phú, chuyên nghiệp

**Câu hỏi thường gặp:**

<details><summary><strong>1. Tôi chưa quyết định có nên sử dụng phiên bản miễn phí hay trả phí. Tôi có thể thử các mẫu menu chuyên nghiệp không?</strong></summary>
<p>Chắc chắn rồi! Các nhóm menu chủ yếu nhằm giúp người mới bắt đầu tránh cảm thấy choáng ngợp bởi các tính năng nâng cao trong Navi+ 😄. Cách tốt nhất là thử nghiệm các menu chuyên nghiệp để khám phá tất cả các tính năng và tùy chọn bố cục. Sau đó, bạn có thể đơn giản xóa bất kỳ menu nào bạn không cần hoặc thấy không phù hợp.</p>
</details>

<details><summary><strong>2. Việc tạo một menu ở đây có làm nó xuất hiện ngay lập tức trên trang web của tôi không?</strong></summary>
<p>Chưa. Bạn sẽ cần phải <strong>xuất bản</strong> menu đúng để nó xuất hiện trên trang web của bạn. Đừng lo — điều đó rất dễ dàng!</p>
</details>

<details><summary><strong>3. Nếu tôi chọn sai mẫu hoặc mắc lỗi thì sao?</strong></summary>
<p>Không vấn đề gì cả. Bạn có thể xóa nó và tạo một cái mới bất cứ lúc nào. Nếu bạn đang thử nghiệm một menu và muốn thử một mẫu khác, bạn có thể <strong>lưu</strong> cái hiện tại như một tệp sao lưu và mở lại sau. Bạn thậm chí có thể <strong>sao chép và dán</strong> các phần giữa các menu (bằng cách mở hai tab trình duyệt) để giữ lại công việc trước đó. Hãy thoải mái thử nghiệm!</p>
</details>

<details><summary><strong>4. Tôi nên tạo chỉ một menu hay nhiều menu?</strong></summary>
<p>Bạn nên tạo <strong>nhiều menu</strong>. Chỉ menu <strong>đang hoạt động</strong> sẽ hiển thị trên trang của bạn, nhưng bạn có thể chuẩn bị nhiều phiên bản — bằng cách chọn các mẫu khác nhau hoặc nhân bản các menu. Các menu có thể được cấu hình để hiển thị/ẩn dựa trên loại trang (trang chủ, sản phẩm, bộ sưu tập...), thiết bị (di động hoặc máy tính để bàn), hoặc từ khóa URL. Vậy nên hãy tiếp tục và xây dựng các menu phù hợp với từng tình huống!</p>
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

Bạn sẽ dành phần lớn thời gian của mình để xây dựng cây menu này cho trang web của bạn, giúp khách hàng tìm thấy nội dung họ đang tìm kiếm.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FosZUYAtOckjPUD5T8F5q%2FHelp.MenuTree.1.1.0.png?alt=media&#x26;token=c1eec6d7-a0b6-45f5-aea5-6678540a884a" alt="Catalog: A level 1 menu item, displayed as a tab on the tab bar. All-Mountain: Level 2 menu item that appears when you tap on Catalog."><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fh6AHpLQvuPq0AadY0TOH%2FHelp.MenuTree.1.1.1.png?alt=media&#x26;token=06a10cb0-ab20-44be-a734-a221597a4ea9" alt="Cruise Flex, Balance Ride: Level 3 menu item that appears when you tap on All-Mountain."><figcaption></figcaption></figure>

#### 1.2. Các tương tác cơ bản với Cây Menu

Bạn có thể kéo và thả các mục menu lên và xuống hoặc sang trái và phải để thay đổi vị trí và mối quan hệ cha-con trong cây menu.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMAz90izqLq6bJcZst2rw%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=27b190ca-50eb-4272-9ba9-30741e95d33a" alt=""><figcaption></figcaption></figure>

Khi bạn di chuột qua bất kỳ mục menu nào, bạn sẽ thấy các tùy chọn bổ sung: chỉnh sửa chi tiết của mục, xóa nó khỏi cây menu, hoặc sao chép và dán nó ở nơi khác.

{% comment %}hint style="info" {% endcomment %}
**Mẹo:** Bạn có thể sao chép một mục menu từ menu này sang menu khác bằng cách mở ứng dụng Navi+ trong hai tab trình duyệt.
{% comment %}endhint{% endcomment %}

#### 1.3. QUAN TRỌNG! Xóa các mục menu mẫu và chỉ giữ lại cấu trúc bạn muốn.

Đây là một tình huống phổ biến khi tạo một menu với Navi+. Khi bạn tạo một menu mới, chúng tôi bao gồm một ví dụ đầy đủ với các mục menu phổ biến để hiển thị ý tưởng bố cục và cho phép bạn sao chép/dán khi cần. Tuy nhiên, nếu bạn mới sử dụng Navi+ và đang sử dụng gói Starter, bạn sẽ thấy nhiều cảnh báo đỏ (i) cho các tính năng không có sẵn, chẳng hạn như tải lên hình ảnh hoặc sử dụng các tương tác nâng cao.

Nếu bạn thích những tính năng nâng cao này, hãy xem xét nâng cấp lên gói Business hoặc Elite. Nhưng nếu bạn muốn tiếp tục với gói Starter, hãy tìm và xóa các mục menu có cảnh báo đỏ (i).

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE7iIBanCUi5x1wUBoySS%2FHelp.MenuTree.1.1.3.png?alt=media&#x26;token=04573f08-79ed-494b-91a6-f744a5f4779c" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fpstdwu2GBy4wymYsInJe%2FHelp.MenuTree.1.1.3b.png?alt=media&#x26;token=8a2ebfc9-2cbc-4efb-a1b4-fec1fd621ec8" alt=""><figcaption></figcaption></figure>

{% comment %}hint style="info" {% endcomment %}
**Mẹo quan trọng:** Khi xác nhận xóa xuất hiện, hãy bật “Đừng hỏi lại lần sau” để xóa nhanh hơn.
{% comment %}endhint{% endcomment %}

#### 1.4. Thêm các mục menu vào Cây Menu

Để thêm một mục menu, bạn có hai tùy chọn:

**Tùy chọn 1&#x20;**<mark style="background-color:$warning;">**(Không khuyến nghị nếu bạn mới sử dụng Navi+)**</mark>**:** Nhấp vào “Thêm menu” để chèn một mục menu trống ở cuối cây menu. Phương pháp này yêu cầu hiểu biết tốt về cài đặt mục menu, mà chúng tôi sẽ đề cập bên dưới. Nó có thể cảm thấy choáng ngợp lúc đầu, vì vậy bạn có thể khám phá điều này sau.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FP8GKAiPpBlFdnzEM0TiI%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=5b87d791-686b-4768-b7dd-d17ff95841c4" alt=""><figcaption></figcaption></figure>

**Tùy chọn 2 (Khuyến nghị):** Chúng tôi đã chuẩn bị nhiều mẫu mục menu được thiết kế tốt cho bạn. Chỉ cần sao chép và dán chúng vào đúng vị trí. Sau khi hoàn thành cây menu của bạn, chỉ cần xóa các mẫu không sử dụng.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FjBJUHMA8dTOONOJoOt8S%2FHelp.MenuTree.1.1.5.png?alt=media&#x26;token=e6316df1-e99a-4259-8370-5fc3afaf331a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FChui5Q4pxEpW1cDVoE3E%2FHelp.MenuTree.1.1.5b.png?alt=media&#x26;token=9e29309f-3177-4d89-ac38-d319bba7a541" alt=""><figcaption></figcaption></figure>
