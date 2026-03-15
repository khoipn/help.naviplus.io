# README_AI — help.naviplus.io

Tài liệu “ghi nhớ” để dùng lại sau: mô tả cấu trúc dự án, pipeline generate docs, search, SEO nội bộ, và workflow đa ngôn ngữ (dịch tự động + cache tiết kiệm chi phí).

## 1) Tổng quan

- Website: help.naviplus.io (Jekyll static site).
- Nội dung gốc (English) được generate từ nguồn Markdown bên ngoài qua script Python [getMD.py](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/getMD.py).
- Output build tĩnh nằm trong `_site/` (không sửa tay vì sẽ bị build ghi đè).
- Đa ngôn ngữ theo URL prefix:
  - English: `/docs/...`
  - Các ngôn ngữ khác: `/{lang}/docs/...` (ví dụ `/vi/docs/...`, `/jp/docs/...`)

## 2) Thư mục / file quan trọng

- Nội dung docs (source):
  - [_docs/](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_docs) (English là nguồn chuẩn)
  - `_docs/<lang>/...` (bản dịch), ví dụ `_docs/vi/usage/explore-common-menus/index.md`
- Cây sidebar/navigation (được generate):
  - [navigation.yml](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_data/navigation.yml)
- Layout + include:
  - [default.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_layouts/default.html)
  - [head.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_includes/head.html)
  - [navbar.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_includes/navbar.html)
  - [sidebar.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_includes/sidebar.html)
  - [prev_next.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_includes/prev_next.html)
- Theme assets:
  - CSS: [theme-styles.css](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/theme/assets/css/theme-styles.css)
  - Sidebar JS: [sidebar.js](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/theme/assets/js/sidebar.js)
  - Navbar + language switcher JS: [navbar-links.js](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/theme/assets/js/navbar-links.js)
  - Search JS: [search.js](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/theme/assets/js/search.js)
- Search index generator (Jekyll): [search.txt](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/search.txt) → build ra `/search.json`
- Script dịch i18n: [translate_i18n.py](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/translate_i18n.py)
- Output build: [_site/](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_site)

## 3) Chạy local (dev)

### Python venv

- Virtualenv dùng sẵn: `.venv/`
- Chạy python bằng `.venv/bin/python` để đảm bảo đúng environment.

### Generate/update English docs

```bash
.venv/bin/python getMD.py
```

Kết quả:
- tải markdown vào `_temp_content/`
- generate `_docs/**/index.md` (English)
- generate `_data/navigation.yml`

Lưu ý: `getMD.py` đã được chỉnh để khi refresh English thì **giữ lại thư mục bản dịch** trong `_docs/` (vi/jp/fr/de/zh-cn/it/pt-br/es).

### Jekyll build/serve

```bash
export PATH="/opt/homebrew/opt/ruby@3.2/bin:/opt/homebrew/lib/ruby/gems/3.2.0/bin:$PATH"
bundle exec jekyll build
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

## 4) Search (client-side)

- Index: `/search.json` được generate bởi [search.txt](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/search.txt) từ collection `site.docs`.
- UI: ô search nằm trong navbar: [navbar.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_includes/navbar.html)
- Logic: [search.js](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/theme/assets/js/search.js) fetch `/search.json` và search client-side.

## 5) SEO nội bộ: Prev/Next

- Mỗi trang trong `/docs/` có khối điều hướng “Back/Next”.
- Thứ tự dựa theo `navigation.yml` (flatten theo thứ tự hiển thị).
- Include: [prev_next.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_includes/prev_next.html)
- Render trong layout: [default.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_layouts/default.html)
- Với trang ngôn ngữ prefix (ví dụ `/vi/docs/...`), prev/next tự prefix để không nhảy về English.

## 6) Google Analytics

- GA gtag được chèn trong head: [head.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_includes/head.html)
- Measurement ID: `G-1PWVMJYX4Z`

## 7) Sidebar tree + trạng thái expand/collapse

### Sidebar render 2 lần (desktop + offcanvas)

Trong [default.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_layouts/default.html), `sidebar.html` được include cho:
- Mobile offcanvas
- Desktop sidebar

Để tránh bug Bootstrap collapse do trùng `id`, `sidebar.html` nhận `id_prefix`:
- `id_prefix="mobile"`
- `id_prefix="desktop"`

Trong [sidebar.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_includes/sidebar.html), mọi `collapse-...` đều được prefix theo `include.id_prefix`.

### Icon folder open/closed + persist state

- Icon folder open/closed được đồng bộ theo trạng thái collapse show/hide.
- Có persist trạng thái bằng localStorage.
- JS: [sidebar.js](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/theme/assets/js/sidebar.js)

## 8) Đa ngôn ngữ: URL prefix + switcher

### Prefix đang dùng

- English: không có prefix
- Các prefix hiện dùng:
  - `vi`, `fr`, `de`, `zh-cn`, `jp`, `it`, `pt-br`, `es`

### Language switcher (navbar)

[navbar-links.js](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/theme/assets/js/navbar-links.js) tạo dropdown Language theo URL prefix:
- Nếu đang ở `/docs/...` hoặc `/{lang}/docs/...` thì switch giữ nguyên path và chỉ đổi prefix.
- Nếu đang ở ngoài `/docs/` thì fallback về `/docs/getting-started/`.

### Sidebar/Prev-Next link theo ngôn ngữ

- Sidebar và prev/next tự phát hiện `current_page_url` có chứa `/{lang}/docs` để prefix link tương ứng.
- Sidebar: [sidebar.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_includes/sidebar.html)
- Prev/Next: [prev_next.html](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_includes/prev_next.html)

### Dịch menu tree (sidebar)

- `navigation.yml` (English) là nguồn cấu trúc.
- Sau khi có file dịch trong `_docs/<lang>/...`, chạy script để tạo `_data/navigation_<lang>.yml` (giữ cấu trúc, thay `title` bằng title trang đã dịch):
  - Script: [build_navigation_i18n.py](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/build_navigation_i18n.py)
  - Ví dụ:

```bash
.venv/bin/python build_navigation_i18n.py --languages vi,fr,de,zh-cn,jp,it,pt-br,es
```

## 9) Dịch tự động bằng OpenAI + cache tiết kiệm chi phí

### Bảo mật key

- Không lưu `OPENAI_API_KEY` vào repo.
- Chỉ set qua environment variables local/CI secrets.

### Script dịch

Script: [translate_i18n.py](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/translate_i18n.py)

Env vars:
- `OPENAI_API_KEY`: bắt buộc khi dịch thật
- `OPENAI_MODEL`: mặc định `gpt-4o-mini`
- `OPENAI_BASE_URL`: optional (mặc định `https://api.openai.com/v1/chat/completions`)
- `OPENAI_REQUEST_TIMEOUT`: timeout request (mặc định 120s)

Chạy dịch thật (tất cả ngôn ngữ) + in progress:

```bash
export OPENAI_API_KEY="..."
.venv/bin/python translate_i18n.py \
  --languages vi,fr,de,zh-cn,jp,it,pt-br,es \
  --model gpt-4o-mini \
  --sleep-ms 200 \
  --checkpoint-every 1
```

Dry-run (xem còn bao nhiêu trang cần dịch):

```bash
.venv/bin/python translate_i18n.py --dry-run --languages vi,fr,de,zh-cn,jp,it,pt-br,es
```

Test vài trang trước:

```bash
.venv/bin/python translate_i18n.py --languages vi --max-pages 2
```

Mock dịch (để test routing/UI, không gọi API):

```bash
.venv/bin/python translate_i18n.py --languages vi --mock
```

### Cache không dịch lại

- Cache file: `.i18n-cache.json`.
- Key: `<rel_path>::<lang_prefix>`
- Skip dịch khi:
  - `src_hash` không đổi (hash của `title + description + body`)
  - `engine` trùng (tách bạch mock vs dịch thật; thay prompt/model sẽ coi như engine mới)
  - file output đã tồn tại
- Cache được checkpoint theo `--checkpoint-every` để resume không tốn token.

### Prompt translation

Prompt được embed trong script qua `PROMPT_SINGLE_TEMPLATE`, yêu cầu:
- Preserve ALL HTML tags và structure (không escape, không add/remove tags)
- Không dịch `<code>`, `<pre>`, `{md}...{endmd}`
- Không dịch text trong `"..."` (double quotes)
- Giữ nguyên “Navi+”, “Starter/Business/Elite”, “Tabbar/Mega menu/FAB/Slide menu”
- Trả về JSON object có keys: `title`, `description`, `content`

Script còn wrap các đoạn “không được dịch” bằng `{md}...{endmd}` trước khi gọi model, rồi strip markers khi nhận output.

## 10) Lưu ý vận hành / lỗi thường gặp

- Khi chạy `jekyll serve` (watch mode), mỗi lần script dịch ghi file `_docs/<lang>/...` thì Jekyll auto-regenerate, nên bạn sẽ thấy nội dung “đổi dần” là đúng.
- HTML block như `<figure>...<figcaption></figcaption>...</figure>` cần được giữ ở đầu dòng; nếu biến nó thành inline text thì markdown processor có thể escape một phần HTML. Mock mode đã tránh prefix các dòng bắt đầu bằng `<` để giữ HTML block.
