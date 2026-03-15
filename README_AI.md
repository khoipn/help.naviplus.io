# Navi+ Help Center - Tài liệu kỹ thuật

Dự án này là trung tâm trợ giúp chính thức của **Navi+**, được xây dựng dựa trên Jekyll (static site generator) và được thiết kế để hỗ trợ đa ngôn ngữ thông qua các quy trình tự động hóa bằng Python.

## 🚀 Công nghệ sử dụng

-   **Jekyll 4.4.1**: Engine chính để tạo trang tĩnh.
-   **Liquid**: Ngôn ngữ templating được Jekyll sử dụng.
-   **Python 3**: Dùng cho các kịch bản tự động hóa (lấy nội dung, dịch thuật, xây dựng menu).
-   **Cloudflare Pages**: Nền tảng hosting và CI/CD.

## 📂 Cấu trúc thư mục chính

-   `_docs/`: Chứa các tệp nội dung Markdown. Các thư mục con như `vi/`, `jp/`, `fr/`,... chứa nội dung đã được dịch.
-   `_data/`: Chứa các tệp cấu hình dữ liệu, đặc biệt là `navigation.yml` (menu chính) và các biến thể đa ngôn ngữ (`navigation_vi.yml`,...).
-   `_includes/`: Các thành phần giao diện dùng chung (header, footer, sidebar, navbar).
-   `_layouts/`: Các mẫu giao diện (default.html).
-   `theme/assets/`: Chứa các tệp tĩnh như CSS, JS và hình ảnh của giao diện.
-   `vendor/bundle/`: Các gem Ruby được cài đặt cục bộ.

## ⚙️ Quy trình tự động hóa (Workflow)

Quy trình cập nhật nội dung từ GitBook đã được gói vào 1 script để chạy 1 lệnh là xong.

### 1) `update_content_and_translate.sh` (1 lệnh để update content)
- Tự tạo `.venv` và cài dependencies Python cần thiết.
- Chạy lần lượt: `getMD.py` → `translate_i18n.py` → `build_navigation_i18n.py`.
- Dịch theo cơ chế incremental (chỉ dịch trang thay đổi nhờ `.i18n-cache.json`).

### 2) `getMD.py` (Lấy nội dung)
-   Tải tệp Markdown gốc từ một URL từ xa (cấu hình trong `MAIN_NAVIGATION_MD_URL`).
-   Phân tích cấu trúc tệp để xây dựng sơ đồ trang web.
-   Tải tất cả các tệp nội dung liên quan và lưu vào thư mục `_docs/`.
-   Tự động tạo tệp `_data/navigation.yml`.

### 3) `translate_i18n.py` (Dịch thuật AI)
-   Sử dụng AI (thông qua API) để dịch nội dung từ tiếng Anh sang các ngôn ngữ đích: `vi`, `fr`, `de`, `zh-cn`, `jp`, `it`, `pt-br`, `es`.
-   Có cơ chế cache (`.i18n-cache.json`) để tránh dịch lại các nội dung không thay đổi, giúp tiết kiệm chi phí và thời gian.
-   Bảo vệ HTML ảnh (`<figure>`, `<img>`) để không bị hỏng khi dịch và tự phát hiện bản dịch lỗi để dịch lại.
-   Hỗ trợ dịch lại 1 trang bằng `--only` (ví dụ chỉ fix một URL bị lỗi).

### 4) `build_navigation_i18n.py` (Xây dựng Menu đa ngôn ngữ)
-   Đọc tệp `_data/navigation.yml` gốc.
-   Tìm kiếm tiêu đề đã được dịch trong các tệp `index.md` tương ứng ở các thư mục ngôn ngữ.
-   Tạo ra các tệp menu riêng biệt cho từng ngôn ngữ (ví dụ: `_data/navigation_vi.yml`).

## 🛠 Hướng dẫn phát triển Local

### 1. Cài đặt môi trường
Đảm bảo bạn đã cài đặt Ruby và Python 3.

```bash
# Dùng Ruby của Homebrew (tránh /usr/bin/ruby 2.6 gây lỗi bundler)
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"

# Cài bundler đúng phiên bản theo Gemfile.lock (chỉ cần làm 1 lần)
gem install bundler -v 4.0.8

# Cài đặt các gem Ruby
bundle _4.0.8_ install
```

### 2. Cập nhật nội dung mới
Mỗi khi có thay đổi từ GitBook, chạy đúng 1 lệnh:

```bash
bash update_content_and_translate.sh
```

### 3. Chạy Server Local
```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle _4.0.8_ exec jekyll serve
```
Sau đó truy cập: [http://localhost:4000](http://localhost:4000)

## 🎨 Tùy chỉnh Giao diện

-   **Navbar/Menu**: Chỉnh sửa tại `theme/assets/js/navbar-links.js`.
-   **CSS/Styles**: Chỉnh sửa tại `theme/assets/css/theme-styles.css`.
-   **Cấu hình Site**: Chỉnh sửa tại `_config.yml` (Tiêu đề, Email, URL,...).

## ☁️ Triển khai (Deployment)

Dự án được cấu hình để tự động triển khai thông qua Cloudflare. Các thiết lập nằm trong thư mục `.cloudflare/`. Mọi thay đổi khi push lên nhánh chính sẽ kích hoạt quy trình build và deploy tự động.

---
*Tài liệu này được tạo tự động bởi AI để hỗ trợ quản lý dự án.*
