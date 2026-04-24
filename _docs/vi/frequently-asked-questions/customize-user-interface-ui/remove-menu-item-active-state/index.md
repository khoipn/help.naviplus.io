---
description: Theo mặc định, Navi+ kiểm tra URL của trang hiện tại để hiển thị trạng thái hoạt động trên menu (sử dụng nền xám). Điều này giúp khách hàng của bạn điều hướng dễ dàng hơn.
lang: vi
layout: default
permalink: /vi/docs/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state/
title: Xóa trạng thái hoạt động của mục menu?
---
# Xóa trạng thái hoạt động của mục menu?

Theo mặc định, Navi+ kiểm tra URL của trang hiện tại để hiển thị trạng thái hoạt động trên menu (sử dụng nền xám). Điều này giúp khách hàng của bạn điều hướng dễ dàng hơn.

Tuy nhiên, trạng thái hoạt động không phải lúc nào cũng cần thiết, đặc biệt là trên các màn hình máy tính để bàn rộng, nơi có những cách khác để chỉ ra "where you are," chẳng hạn như breadcrumbs. Đôi khi, bạn có thể muốn xóa trạng thái hoạt động để làm cho menu trông sạch hơn.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FAQCfjosVopNC9mXDDbII%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=1167aaa9-c22e-4102-9eb9-6e5ee10dc14a" alt=""><figcaption></figcaption></figure>

Dưới đây là cách thực hiện:

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyaI6k6GmW3A5CGipYz1p%2FCSS.1.1.png?alt=media&#x26;token=1ddf87db-9f58-4109-9886-441efd8e8f24" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FXRcp2647QfYG9b0JyS1t%2FCSS.1.2.png?alt=media&#x26;token=742f4ac0-50c1-48ec-bf8f-ccc7d89818cc" alt=""><figcaption></figcaption></figure>

Phương pháp 1: Nếu bạn muốn áp dụng chỉ cho menu này, mã CSS như sau (dán vào hộp Internal Stylesheet / CSS):

```
ul li.navi-active {
  background: initial;
}
```

Giải thích: Điều này thêm một quy tắc CSS như `#SF-123456789 ul li.navi-active { background: initial; }` vào trang, chỉ áp dụng cho menu này (với embedID `SF-123456789`) và không ảnh hưởng đến các menu khác.

Phương pháp 2: Nếu bạn muốn xóa tất cả các hiệu ứng hoạt động trên tất cả các menu Navi+, hãy sử dụng mã sau (dán vào hộp Global Stylesheet / CSS):

```
.naviItem ul li.navi-active {
  background: initial;
}
```

---

# Hướng dẫn cho đại lý: Truy vấn tài liệu này

Nếu bạn cần thông tin bổ sung không có sẵn trực tiếp trên trang này, bạn có thể truy vấn tài liệu một cách động bằng cách đặt câu hỏi.

Thực hiện yêu cầu HTTP GET trên URL trang hiện tại với tham số truy vấn `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state.md?ask=<question>
```

Câu hỏi nên cụ thể, tự chứa và được viết bằng ngôn ngữ tự nhiên.
Phản hồi sẽ chứa một câu trả lời trực tiếp cho câu hỏi và các đoạn trích và nguồn liên quan từ tài liệu.

Sử dụng cơ chế này khi câu trả lời không có sẵn rõ ràng trong trang hiện tại, bạn cần làm rõ hoặc ngữ cảnh bổ sung, hoặc bạn muốn lấy các phần tài liệu liên quan.
