---
description: Chế độ gỡ lỗi là một bộ công cụ nhẹ được tích hợp trong thư viện Navi+ giúp bạn làm việc hiệu quả hơn với các menu của Navi+.
lang: vi
layout: default
permalink: /vi/docs/usage/debug-mode-find-css-selectors/
title: Chế độ gỡ lỗi - Tìm CSS Selectors
---
# Chế độ gỡ lỗi - Tìm CSS Selectors

Chế độ gỡ lỗi là một bộ công cụ nhẹ được tích hợp trong thư viện Navi+ giúp bạn làm việc hiệu quả hơn với các menu của Navi+.

### 1. Tìm CSS selectors

Để kích hoạt chế độ gỡ lỗi, sử dụng định dạng URL sau:\
`yourdomain.com#navidebug-on`

Website của bạn sẽ chuyển sang Chế độ Gỡ lỗi Navi+. Di chuột qua các khu vực khác nhau của website để xem các CSS selectors tương ứng. Di chuyển con trỏ của bạn để xác định chính xác khu vực mục tiêu mong muốn.

Vui lòng chú ý đến các phím tắt dưới đây để làm việc hiệu quả hơn.

**Phím tắt 1.** Sao chép một CSS selector

* Nhấn **⌘+C** trên MacOS hoặc **Ctrl+C** trên Windows để sao chép CSS selector đã chọn.

Bạn có thể dán nó vào cài đặt **Publish Menu** cho:

* Mega Menu / Grid Menu: để chèn menu trước, sau hoặc thay thế CSS selector mục tiêu
* Slide Menu: để kích hoạt menu trượt khi CSS selector mục tiêu được nhấp hoặc chạm vào

**Phím tắt 2.** Điều hướng giữa các cấp độ selector

* Nhấn \[↑/←], hoặc Backspace để di chuyển đến selector cấp cha
* Nhấn \[↓/→] để di chuyển đến selector cấp con

**Mẹo quan trọng:** Trong hầu hết các trường hợp, bạn sẽ không tìm thấy CSS selector hoàn hảo ngay lập tức. Dựa trên kinh nghiệm, thường thì dễ hơn để:

1. Bắt đầu bằng cách chọn một selector cấp con
2. Sau đó di chuyển lên 1–2 cấp cha (một điểm nhấn trực quan sẽ xuất hiện trên website của bạn)
3. Sao chép selector bằng ⌘+C (Ctrl+C)
4. Dán nó vào cấu hình menu và kiểm tra

Đôi khi, bạn có thể cần lặp lại quy trình này nhiều lần khi chèn, thay thế hoặc liên kết các sự kiện menu với CSS selectors để đạt được trải nghiệm người dùng mong muốn.

#### 1.1. Tìm CSS Selector trên Desktop

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FlstMiQTp0fQqvJ89jXhD%2FFrame%20210.webp?alt=media&#x26;token=95d6a152-b58b-4894-9cdc-150200fae5e1" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fuc7fc7CicJcQ3XNvwDVA%2FFrame%20211.webp?alt=media&#x26;token=84a5c3ad-04bf-4b4e-9c8c-bc334f7f4646" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FuE3IlMcHedAfwQR98YhM%2FFrame%20212.webp?alt=media&#x26;token=e02c2aa2-0792-4811-8005-46a5b7b0b9fe" alt=""><figcaption></figcaption></figure>

#### 1.2. Tìm CSS Selector trên Mobile

Để tìm một CSS selector trên di động, hãy kích hoạt chế độ Di động (Responsive) trong trình duyệt của bạn.\
Sau đó nhấp chuột phải vào bất kỳ đâu trên trang và chọn:

* Chrome: Inspect
* Safari: Inspect Element
* Firefox: Inspect
* Edge: Inspect / Inspect Element

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FK7F58NVYCerBTqG9EWjB%2FFrame%20213.webp?alt=media&#x26;token=2f2c059a-1346-446d-a19f-e2998050791a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FsNvXhBMniymbZ1tD9c4p%2FFrame%20214.webp?alt=media&#x26;token=257f082d-ff6b-4ce0-8eaa-6160a697a67e" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FJAZm1dPEZrfeqtpNXA8O%2FFrame%20215.webp?alt=media&#x26;token=2847a4ef-e298-4986-9367-36a6abf914d8" alt=""><figcaption></figcaption></figure>
