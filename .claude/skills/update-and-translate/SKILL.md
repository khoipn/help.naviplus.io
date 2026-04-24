---
name: update-and-translate
description: Update content from source and translate to all languages, then push to git. Use when user says "update content", "chạy script", "dịch và up git", or similar.
---

# Update Content & Translate

## Steps

1. Run the update script:
```bash
bash update_content_and_translate.sh
```

2. If it fails with `OPENAI_API_KEY is missing`, check that `.openai_api_key` file exists in project root.

3. After script completes, commit and push:
```bash
git add -A
git commit -m "Update content $(date '+%Y-%m-%d %H:%M')"
git push
```

## Speed notes

- **First run** after a major content change: translates all ~704 files (~30 min) — this is normal.
- **Subsequent runs** (only a few pages changed): only changed files are translated (fast, usually under 1 min), because `getMD.py` skips writing files whose content hasn't changed, preserving the translation cache.

## Known quirks

- `_docs/line/`, `_docs/line-1/`, `_docs/line-2/`, `_docs/line-3/` have `description: ''` — this is correct, do not change.
- The `_temp_content/` folder is auto-generated, safe to commit.
