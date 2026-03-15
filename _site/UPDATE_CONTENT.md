# Hướng dẫn cập nhật nội dung (GitBook → Website)

Tài liệu này mô tả quy trình **update nội dung nguồn trên GitBook** và đồng bộ sang website Jekyll tại repo này, bao gồm **dịch đa ngôn ngữ** và **cập nhật navigation**.

---

## 1) Nguồn nội dung là gì?

- Website lấy nội dung Markdown từ một file “navigation” chính trên GitBook (URL đang cấu hình trong:
  - [getMD.py](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/getMD.py) (`MAIN_NAVIGATION_MD_URL`)
  - [_config.yml](file:///Users/khoipham/Dev/MDWebsites/help.naviplus.io/_config.yml) (`gitbook_source_link`)
)
- Nội dung sau khi tải về sẽ được lưu vào thư mục:
  - `_docs/` (tiếng gốc)
  - `_docs/<lang>/` (bản dịch theo ngôn ngữ)

Ngôn ngữ đang hỗ trợ: `vi`, `jp`, `fr`, `de`, `zh-cn`, `it`, `pt-br`, `es`.

---

## 2) Khi bạn update nội dung trên GitBook, cần làm gì trong repo này?

### Bước A — Kéo lại nội dung mới từ GitBook

Chạy:

```bash
python3 getMD.py
```

Kết quả:
- Cập nhật nội dung Markdown tiếng gốc trong `_docs/`
- Cập nhật menu `_data/navigation.yml`

### Bước B — Dịch lại đa ngôn ngữ (nếu cần)

Chạy:

```bash
export OPENAI_API_KEY="..."
python3 translate_i18n.py
```

Mặc định script sẽ **chỉ dịch những trang đã thay đổi** (nhờ cache `.i18n-cache.json`). Nếu bạn muốn ép dịch lại tất cả (hoặc một phần lớn) thì chạy:

```bash
export OPENAI_API_KEY="..."
python3 translate_i18n.py --force
```

### Bước C — Build lại navigation theo ngôn ngữ

Chạy:

```bash
python3 build_navigation_i18n.py
```

Kết quả:
- Tạo/cập nhật các file `_data/navigation_vi.yml`, `_data/navigation_jp.yml`, ... để sidebar hiển thị đúng tiêu đề đã dịch.

### Bước D — Chạy local để kiểm tra

Nếu bạn chạy Jekyll trên macOS với Ruby Homebrew (khuyến nghị), dùng:

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle _4.0.8_ install
bundle _4.0.8_ exec jekyll serve
```

Mở: http://localhost:4000/

### Bước E — Commit & push

- Commit các thay đổi trong `_docs/`, `_data/`, `.i18n-cache.json` (nếu có thay đổi) rồi push lên repo.
- Cloudflare build/deploy sẽ chạy theo pipeline của bạn.

---

## 3) Có đảm bảo ngôn ngữ được dịch không?

### Những gì được đảm bảo bởi quy trình

- **Có cơ chế dịch tự động**: `translate_i18n.py` sẽ tạo bản dịch cho các trang nguồn dưới `_docs/<lang>/.../index.md`.
- **Có cơ chế “dịch incremental”**: chỉ trang thay đổi mới bị dịch lại → nhanh và ổn định.
- **Có cơ chế cache** (`.i18n-cache.json`): hạn chế việc dịch lại vô tình làm “lệch câu chữ” so với lần trước.
- **Navigation ngôn ngữ** được build lại từ tiêu đề front-matter đã dịch → sidebar hiển thị đúng ngôn ngữ.

### Những gì KHÔNG thể đảm bảo tuyệt đối

- Chất lượng dịch phụ thuộc vào mô hình AI và nội dung gốc. Vì vậy không thể “đảm bảo 100% đúng ngữ nghĩa” cho mọi câu.
- Một số đoạn có HTML/code/URL/thuật ngữ sản phẩm được khóa không dịch (theo rule trong prompt) để tránh làm hỏng nội dung kỹ thuật.

### Cách kiểm soát và đảm bảo tính nhất quán

- Nếu chỉ sửa nhỏ trên GitBook: chạy `getMD.py` → `translate_i18n.py` → `build_navigation_i18n.py`. Bản dịch sẽ chỉ cập nhật đúng phần thay đổi.
- Nếu muốn “reset” bản dịch vì bạn vừa đổi phong cách viết: dùng `translate_i18n.py --force`.
- Nếu một trang dịch không ổn: bạn có thể sửa thủ công file `_docs/<lang>/.../index.md` và commit luôn (bước deploy vẫn bình thường).

---

## 4) Lưu ý quan trọng (đã gặp thực tế)

### 4.1 Literal `\n` trong bản dịch

AI đôi khi trả về chuỗi `\n` thay vì xuống dòng thực. Repo đã xử lý:
- Trong `translate_i18n.py`, literal `\n` sẽ được đổi thành **2 newline** (tạo đoạn mới) trước khi ghi ra file.

Nếu bạn vẫn thấy `\n` ở một file nào đó, có thể do file đó được sửa thủ công hoặc cache cũ. Bạn có thể:
- Chạy lại `python3 translate_i18n.py --force` để regenerate bản dịch, hoặc
- Tìm và sửa nhanh trong `_docs/<lang>/`.

### 4.2 Dịch chỉ chạy khi có API key

- `translate_i18n.py` cần `OPENAI_API_KEY` để chạy dịch thật.
- Không có key thì script sẽ fail (trừ khi chạy `--mock` hoặc `--dry-run`).

---

## 5) Checklist nhanh

```text
[ ] Update GitBook content
[ ] python3 getMD.py
[ ] export OPENAI_API_KEY=...
[ ] python3 translate_i18n.py   (hoặc --force khi cần)
[ ] python3 build_navigation_i18n.py
[ ] bundle _4.0.8_ exec jekyll serve (check local)
[ ] Commit + push
```

