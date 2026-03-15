# UPDATE CONTENT (GitBook → Repo)

## 1) Chuẩn bị (làm 1 lần)

- Tạo file `.openai_api_key` (1 dòng duy nhất, không commit) và dán OpenAI API key vào đó.

## 2) Mỗi lần cần lấy content mới từ GitBook

Chạy đúng 1 lệnh:

```bash
bash update_content_and_translate.sh
```

Lệnh này sẽ tự làm:
- Kéo Markdown mới về `_docs/` + cập nhật `_data/navigation.yml`
- Dịch đa ngôn ngữ (chỉ dịch những trang thay đổi)
- Build lại navigation theo ngôn ngữ (`_data/navigation_vi.yml`, `_data/navigation_jp.yml`, ...)

## 3) Kiểm tra nhanh (tuỳ chọn)

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle _4.0.8_ exec jekyll serve
```

Mở: http://localhost:4000/

## 4) Commit & push

- Commit các thay đổi trong `_docs/`, `_data/`, `.i18n-cache.json` (nếu có) rồi push.
