---
description: Trong nhiều trường hợp, bạn sẽ cần sử dụng nhiều ứng dụng nhúng trên trang web của mình. Điều này có thể gây ra vấn đề về khả năng sử dụng thông thường khi các phần tử giao diện có thể chồng lên nhau (s...
lang: vi
layout: default
permalink: /vi/docs/usage/shopify/how-to-other-applications-work-with-naviplus/
title: Ngăn chặn các menu Navi+ chồng lên các ứng dụng khác
---
# Ngăn chặn các menu Navi+ chồng lên các ứng dụng khác

### Tại sao điều này sẽ là một vấn đề?

Trong nhiều trường hợp, bạn sẽ cần sử dụng nhiều ứng dụng nhúng trên trang web của mình. Điều này có thể gây ra vấn đề về khả năng sử dụng thông thường khi các phần tử giao diện có thể chồng lên nhau (xem hình ảnh bên dưới). Một ví dụ đơn giản là khi bạn thường xuyên sử dụng một ứng dụng trò chuyện như [Shopify Inbox ](https://www.shopify.com/vn/inbox "Shopify Inbox ")hoặc WhatsApp. Thông thường, các ứng dụng trò chuyện này chiếm một vị trí nổi bật ở góc dưới bên phải của màn hình điện thoại. Khi bạn quyết định sử dụng Navi+ để nâng cao đáng kể khả năng điều hướng trên trang web của mình, vấn đề này phát sinh. Dưới đây là một số cách để giải quyết vấn đề này.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fdccbwi5aXf4XvOxYGIvU%2FFrame%201.png?alt=media&#x26;token=c953f4d5-442c-486d-9493-90490ffd309f" alt=""><figcaption></figcaption></figure>

### Giải pháp 1: Điều chỉnh vị trí của các nút nổi (Demo với Shopify inbox)

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F13ShtYFy9yreGicTmiOm%2FFrame%202.png?alt=media&#x26;token=13a96b69-4907-4ad5-88b5-b41dcc95c35d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FmYVravYrInpp21SPJuKm%2FFrame%203.png?alt=media&#x26;token=9d4c2fa0-2806-4b19-8dce-c403fc582315" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Feuh272YZES4OjBSMok8s%2FFrame%204.png?alt=media&#x26;token=d6b6f9f8-aa4e-4539-a29c-6ae39cbcd344" alt=""><figcaption></figcaption></figure>

### Giải pháp 2: Thiết lập khoảng đệm của menu Navi+ để tránh chồng lên các ứng dụng.

Khoảng đệm và lề là những công cụ được sử dụng rộng rãi và mạnh mẽ trong công nghệ, đặc biệt là trong HTML5/CSS. Bằng cách thiết lập khoảng đệm theo vị trí của khu vực đó, bạn có thể tránh chồng lên các ứng dụng. Bạn cũng có thể thiết lập khoảng cách từ menu Navi+ đến các cạnh bằng cách điều chỉnh lề.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fo0hlCj8BSJLa9WBqrLo8%2FFrame%205.png?alt=media&#x26;token=dfe6c2d9-ea6c-4b97-bd55-8ec33ef7d729" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fkj87WVMtDYGKHxPBAK91%2FFrame%206.png?alt=media&#x26;token=ced78c24-1797-422a-9662-45094a5cee12" alt=""><figcaption></figcaption></figure>

### Giải pháp 3: Thay thế các thanh dưới bằng các thanh trên/Thanh hỗ trợ hoặc nút hành động nổi

Mặc dù thanh dưới là công cụ hiệu quả nhất để dẫn dắt người dùng, được sử dụng bởi hầu hết các ứng dụng di động gốc, hoặc web di động (chậm hơn), đôi khi bạn có thể muốn đặt menu Navi+ của mình ở một vị trí khác như trên cùng (Thanh trên), bên phải/trái (Thanh hỗ trợ), nổi trên giao diện (nút hành động nổi). Hoặc bạn có thể kết hợp chúng để đạt được hiệu quả điều hướng tốt nhất. Hãy xem các tùy chọn sau từ Navi+ để hiểu cách thực hiện, đôi khi chỉ mất 1 giây, và bạn sẽ giải quyết được vấn đề của mình.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FiCuFsYdJSucFduHw9zJO%2FFrame%207.png?alt=media&#x26;token=1be98c44-27c3-489d-9e6d-87e1a95fafb7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FbE4JHbm6ZYI6C3uF0X9j%2FFrame%208.png?alt=media&#x26;token=5c85d3bd-5023-4851-82aa-9288f9294d1c" alt=""><figcaption></figcaption></figure>

### Z-index - ưu tiên thứ tự hiển thị của "các ứng dụng nổi"

Thuộc tính z-index xác định thứ tự xếp chồng của một phần tử. Một phần tử có thứ tự xếp chồng lớn hơn luôn nằm ở phía trước một phần tử có thứ tự xếp chồng thấp hơn. Xem hình ảnh bên dưới để hiểu thêm.&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyMHcqutHWOUtEEYqMDn6%2Fz-index1.png?alt=media&#x26;token=fb6a0100-e337-4115-9212-a8c8d32888ef" alt=""><figcaption></figcaption></figure>

Mặc định z-index cho menu Navi+ được đặt là 50 cho tất cả, vì chúng tôi 'không coi mình quan trọng hơn các ứng dụng khác', nhưng 50 cũng là số đủ để hiển thị tốt trên tất cả các chủ đề Shopify. Đôi khi bạn có thể cần điều chỉnh z-index của menu Navi+ của mình trong các trường hợp sau:&#x20;

1. Khi bạn sử dụng nhiều menu Navi+ trên một trang và bạn muốn chúng chồng lên nhau, nhưng một menu xuất hiện trên các menu khác.&#x20;
2. Khi có các đối tượng/ứng dụng khác chồng lên menu Navi+ của bạn, trong trường hợp đó, z-index sẽ giải quyết tất cả.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg93TvrzCEEKdFZvdmdbh%2Fz-index2.png?alt=media&#x26;token=1289e3a7-6ea1-44ec-a284-8964ac4b6f35" alt=""><figcaption></figcaption></figure>

Có một câu hỏi khó: bạn nên thiết lập z-index cho menu Navi+ của mình là bao nhiêu để tránh chồng lên như mong muốn? Nếu bạn có nhiều menu Navi+, bạn có thể sắp xếp chúng theo sở thích của mình mà không cần lo lắng – đó là lý do tại sao chúng tôi xây dựng Navi+ để trở nên linh hoạt nhất có thể cho các 'ứng dụng nổi' hiện tại trên Shopify.&#x20;

Nếu bạn cần thiết lập z-index cho menu Navi+ của mình để xử lý xung đột với các ứng dụng khác, bạn có thể tìm kiếm z-index của mình từ tối thiểu 0 đến tối đa 2,147,483,647. Điều này có thể có vẻ hơi khó khăn, nhưng đó là cách dễ nhất và tốt nhất vì z-index sẽ không ảnh hưởng đến hiển thị giao diện của bạn ngoài vấn đề bạn đang gặp phải. Nếu bạn có kinh nghiệm với việc gỡ lỗi CSS và HTML – điều này rất dễ, chỉ cần bật chế độ kiểm tra để xem z-index của ứng dụng xung đột có. Hoặc, cách dễ nhất, chỉ cần nhấp vào biểu tượng trò chuyện Crisp để trò chuyện với một cố vấn Navi+; chúng tôi rất vui được hỗ trợ bạn với vấn đề này.
