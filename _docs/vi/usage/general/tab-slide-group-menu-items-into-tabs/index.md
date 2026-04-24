---
description: Thay vì hiển thị tất cả các mục menu cùng một lúc, **Tab Slide** cho phép bạn tổ chức menu của mình thành các nhóm và đặt mỗi nhóm dưới một tab riêng biệt. Khách truy cập chỉ cần t...
lang: vi
layout: default
permalink: /vi/docs/usage/general/tab-slide-group-menu-items-into-tabs/
title: Tab Slide — Nhóm các mục menu vào các tab
---
# Tab Slide — Nhóm các mục menu vào các tab

### Tab Slide là gì?

Thay vì hiển thị tất cả các mục menu cùng một lúc, **Tab Slide** cho phép bạn tổ chức menu của mình thành các nhóm và đặt mỗi nhóm dưới một tab riêng biệt. Khách truy cập chỉ cần chạm vào một tab để chuyển đổi giữa các nhóm — giúp các menu dài trở nên sạch sẽ, gọn gàng và dễ dàng điều hướng.

**Hình ảnh minh họa:**

```
┌──────────────────────────────────┐
│  [Shop]  [Blog]  [Deals]         │  ← tabs
│ ──────                           │
│  • T-Shirts                      │
│  • Pants                         │  ← nội dung của tab "Shop"
│  • Accessories                   │
└──────────────────────────────────┘
```

Khi một khách truy cập chạm vào "Blog", nội dung ngay lập tức chuyển sang các bài viết trên blog — không cần tải lại trang.

***

### Cách thiết lập Tab Slide

#### Bước 1 — Thêm một dấu hiệu Tab

1. Trong cây menu, nhấp vào **"Thêm mục"**
2. Chọn loại mục **Tab Slide** (biểu tượng tab màu xanh)
3. Nhập **tên tab** (ví dụ: "Shop", "Blog", "Deals")
4. Nhấp vào **Thêm**

> Dấu hiệu Tab sẽ xuất hiện trong cây menu với huy hiệu màu xanh **[Tab]**.

#### Bước 2 — Thêm nội dung vào tab

Tất cả các mục menu được đặt **ngay bên dưới** một dấu hiệu Tab thuộc về tab đó.

```
[Tab] Shop           ← Dấu hiệu Tab (được tạo trong Bước 1)
  T-Shirts           ← thuộc về tab "Shop"
  Pants              ← thuộc về tab "Shop"
  Accessories        ← thuộc về tab "Shop"
[Tab] Blog           ← dấu hiệu Tab tiếp theo
  Latest News        ← thuộc về tab "Blog"
  Style Guides       ← thuộc về tab "Blog"
```

#### Bước 3 — Thêm nhiều tab hơn (tùy chọn)

Lặp lại các bước 1–2 cho mỗi tab bạn muốn. Không có giới hạn về số lượng tab.

***

### Kết thúc nhóm Tab

Đôi khi bạn muốn một số mục **luôn hiển thị** — bên ngoài bất kỳ tab nào — ví dụ như một liên kết "Liên hệ" hoặc "Tìm kiếm" ở dưới cùng.

Để làm điều này:

1. Thêm một mục **Tab Slide** mới
2. Trong bảng chỉnh sửa, đánh dấu **"Kết thúc nhóm Tab"**
3. Tất cả các mục bên dưới dấu hiệu này sẽ hiển thị như các mục menu thông thường

```
[Tab] Shop
  T-Shirts, Pants...
[Tab] Blog
  News, Guides...
[End of Tab group]   ← đánh dấu kết thúc của các tab
  Contact Us         ← luôn hiển thị, không nằm trong bất kỳ tab nào
  About              ← luôn hiển thị
```

***

### Tùy chỉnh từng Tab

Mỗi dấu hiệu Tab có thể được định dạng độc lập:

| Tùy chọn         | Mô tả                                                      |
| -------------- | ---------------------------------------------------------------- |
| **Tên tab**   | Văn bản hiển thị trên nút tab                                 |
| **Biểu tượng**       | Một biểu tượng nhỏ bên cạnh tên (từ thư viện biểu tượng)            |
| **Hình ảnh**      | Một hình ảnh thay vì một biểu tượng                                      |
| **Bố cục**     | Biểu tượng ở trên/dưới/trái/phải của tên, chỉ biểu tượng, hoặc chỉ văn bản |
| **Màu văn bản** | Màu tùy chỉnh cho mỗi nhãn tab                                  |
| **Kích thước văn bản**  | Kích thước phông chữ tùy chỉnh cho mỗi nhãn tab                              |

**Mẹo:** Để bố cục ở chế độ "Tự động" hoạt động tốt cho hầu hết các menu — tab sẽ tự điều chỉnh để trông đẹp nhất.

***

### Các loại menu nào hỗ trợ Tab Slide?

Tab Slide hoạt động với **tất cả các loại menu Navi+**:

* ✅ Tab Bar
* ✅ Slide Menu
* ✅ Mega Menu
* ✅ FAB Menu
* ✅ Grid menu

Nó cũng hoạt động ở **bất kỳ cấp độ menu nào** — không chỉ menu chính, mà còn bên trong các menu con (cấp 2, cấp 3).

***

### Câu hỏi thường gặp

**Dấu hiệu Tab có xuất hiện như một mục menu không?** Không. Các dấu hiệu Tab không hiển thị cho khách truy cập — chúng chỉ tạo ra nút tab. Các mục menu thực tế của bạn là những gì xuất hiện bên trong mỗi tab.

**Tôi có thể thêm một biểu tượng vào một tab không?** Có. Chỉnh sửa dấu hiệu Tab như bất kỳ mục nào khác và chọn một biểu tượng từ thư viện, hoặc tải lên một hình ảnh tùy chỉnh.

**Tab nào được hiển thị đầu tiên?** Tab đầu tiên luôn được chọn theo mặc định khi menu mở.

**Có giới hạn nào về số lượng tab tôi có thể có không?** Không có giới hạn cứng, nhưng chúng tôi khuyên bạn nên giữ nó từ 3–6 tab để có trải nghiệm tốt nhất trên màn hình di động.

**Tôi có thể sử dụng Tab Slide bên trong một menu con không?** Có. Đặt các dấu hiệu Tab bên trong bất kỳ menu con nào và hành vi tab sẽ hoạt động ở cấp độ đó.


---

# Hướng dẫn cho đại lý: Truy vấn tài liệu này

Nếu bạn cần thông tin bổ sung không có sẵn trực tiếp trên trang này, bạn có thể truy vấn tài liệu một cách động bằng cách đặt câu hỏi.

Thực hiện yêu cầu GET HTTP trên URL trang hiện tại với tham số truy vấn `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/usage/general/tab-slide-group-menu-items-into-tabs.md?ask=<question>
```

Câu hỏi nên cụ thể, tự chứa và được viết bằng ngôn ngữ tự nhiên.
Phản hồi sẽ chứa một câu trả lời trực tiếp cho câu hỏi và các đoạn trích và nguồn liên quan từ tài liệu.
