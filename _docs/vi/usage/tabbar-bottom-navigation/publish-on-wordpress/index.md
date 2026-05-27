---
description: Publish a Navi+ Tab Bar on WordPress with the Navi+ AI Menu Builder plugin — no code edits. The Tab Bar is a sticky menu, so it renders site-wide automatically once published in the editor.
lang: vi
layout: default
permalink: /vi/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/
title: Tab Bar — Publish on WordPress
---
# Tab Bar — Publish on WordPress

The **Tab Bar** is a **sticky** menu — nó gắn vào viewport (thường gần đáy trên di động) và giữ nguyên vị trí khi người dùng cuộn. Trên WordPress, plugin Navi+ AI Menu Builder tự động hiển thị Tab Bar trên toàn bộ trang; bạn không cần dán bất kỳ mã hoặc shortcode nào.

> Các nền tảng khác (Wix, Squarespace, Webflow, các trang tùy chỉnh): xem [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/).

---

## Steps

1. **Cài đặt plugin** — xem [Install the Navi+ AI Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Mở trình chỉnh sửa** — trong quản trị WordPress, đi đến **Appearance → Naviplus Menu Builder**.
3. **Xây dựng Tab Bar của bạn** — chọn bố cục **Tab Bar**, thêm 3–5 điểm đến chính. Xem [Tab Bar — How to use]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/) để biết mẹo thiết kế.
4. **Xuất bản menu** trong trình chỉnh sửa (trạng thái: Đã xuất bản, không phải Bản nháp).

Đó là tất cả. Tab Bar xuất hiện ngay lập tức trên giao diện của trang WordPress của bạn — không cần shortcode, không cần chỉnh sửa giao diện. Việc nhúng toàn bộ trang của plugin (mặc định bật) tải runtime Navi+ trên mỗi trang, và runtime lấy mọi menu sticky đã xuất bản cho trang của bạn.

---

## Giới hạn Tab Bar cho các trang cụ thể

Đừng tắt nhúng toàn bộ trang của plugin — điều đó sẽ tắt hoàn toàn runtime. Thay vào đó, giới hạn Tab Bar trong trình chỉnh sửa:

- **Quy tắc hiển thị → Mẫu URL** — chỉ hiển thị Tab Bar trên các URL khớp với glob (ví dụ: `/shop/*`).
- **Quy tắc hiển thị → Thiết bị** — giới hạn chỉ trên di động.
- **Quy tắc hiển thị → Trạng thái người dùng** — giới hạn cho người dùng đã đăng nhập, v.v.

Các quy tắc hiển thị được runtime đánh giá trong trình duyệt, vì vậy các thay đổi sẽ áp dụng khi tải trang tiếp theo.

---

## Mẹo di động cho Tab Bar

- Giữ lại **3–5 tab** — nhiều hơn sẽ làm chật viewport.
- Sử dụng nhãn ngắn (một từ nếu có thể) và biểu tượng rõ ràng.
- Kiểm tra kích thước mục chạm trên thiết bị thực, không chỉ trong bản xem trước của trình chỉnh sửa.
- Nếu Tab Bar chồng lên một phần tử cố định khác (ví dụ: một widget trò chuyện), xem [Menu overlapping other elements]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).

---

## Xác minh Tab Bar đang hoạt động

Thêm `#navidebug-on` vào bất kỳ URL trang nào (ví dụ: `https://your-site.com/#navidebug-on`). Trang sẽ chuyển sang chế độ Debug của Navi+ nếu plugin đã được kết nối. Thêm `#navidebug-off` để tắt nó.

Để kiểm tra sâu hơn, xem [Create your first menu — Verify the connection]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Liên quan

- [WordPress / WooCommerce — overview]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publish your menus on WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Naviplus Menu Builder FAQ]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/)
