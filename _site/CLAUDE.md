# CLAUDE.md — Navi+ Help Center

## Title Conventions

Use **sentence case** (NOT title case) for all doc titles — frontmatter `title:` and navigation YMLs.

- ✅ `Design level 1 — Main menu items`
- ❌ `Design Level 1 — Main Menu Items`

Rules:
- Capitalize only the first word of the title
- After the em dash `—`, also use sentence case
- Preserve proper nouns and brand names: FAB, URL, UX, Tabbar, Mega Menu, Navi+
- Apply to ALL languages (frontmatter `title:` AND `_data/navigation*.yml`)

## Directory Structure

- English docs: `_docs/` (root)
- Other languages: `_docs/{lang}/` where lang = `vi`, `de`, `fr`, `es`, `jp`, `zh-cn`, `pt-br`, `it`
- Navigation configs: `_data/navigation.yml` (EN), `_data/navigation_{lang}.yml` (others)
- Permalinks must include lang prefix for non-EN: `/{lang}/docs/...`
