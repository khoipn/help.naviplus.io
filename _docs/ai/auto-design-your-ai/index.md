---
description: Use ChatGPT, Claude, or Gemini to redesign your Navi+ menu — Navi+ generates the prompt, you paste the JSON result back.
layout: default
permalink: /docs/ai/auto-design-your-ai/
title: Auto design using your AI app
---
# Auto design using your AI app

Redesign your menu with an AI tool you already know — ChatGPT, Claude, or Gemini. Navi+ prepares the data and prompt; you just run it through the AI and bring the result back. This feature is **free**.

Open: the **AI** button → **Auto design using your AI app** card.

---

## Before you start — back up your menu

> **⋮ More → Backup / Restore** — save your current menu as a file or to the cloud before making changes. Don't skip this step.

---

<div class="install-step" markdown="1">
### 1 — Train your AI

You need a web-based AI tool. Recommended large-context models: **Claude Opus 4.7**, **ChatGPT GPT-5**, or **Gemini Pro 1.5**.

Click **Open training docs**, copy everything, and paste it into your AI chat. This teaches the AI how Navi+ menus are structured.
</div>

<div class="install-step" markdown="1">
### 2 — Send your current menu (JSON) to the AI

Once the AI understands the structure from Step 1, send it your current menu:

- **Copy current menu to clipboard** and paste it into the chat, or
- **Download the JSON file** and attach it to the chat.
</div>

<div class="install-step" markdown="1">
### 3 — Give design instructions

Type your request in natural language. You have full control over the design; the AI returns a new menu as JSON. For example:

- Add 2 items: Blog and Careers.
- Change the primary color to blue `#1a73e8`.
- Trim to 4 main items, move the rest under a More item.
- Add a fitting icon to each item and bold the Promotions item.
- Translate all item names to English.
</div>

<div class="install-step" markdown="1">
### 4 — Paste the result and apply

Copy the JSON the AI returns, then apply it to Navi+ in one of two ways:

- **Option 1:** Paste the JSON into the input box and click **Apply**.
- **Option 2:** Click **Upload JSON file** and choose your `.json` file.

Repeat Steps 3–4 until the menu looks right, then click **Save**.
</div>

> Tip: The AI only changes the structure and content in the JSON. Fields you configured but didn't mention are kept — but still review the menu after applying.

---

## Case study — declutter a tab bar with Claude

**Context:** A store has a messy 8-item tab bar and wants to trim it to 5 items and add icons, while keeping all existing links.

1. **Back up:** ⋮ More → Backup / Restore → save a copy.
2. **Step 1 — Train the AI:** Open Claude (Opus 4.7), click **Open training docs** in Navi+, copy everything, and paste it into Claude.
3. **Step 2 — Send the menu:** Click **Copy current menu to clipboard** and paste the JSON into Claude.
4. **Step 3 — Instruct:** Tell Claude:

   ```
   Merge these 8 items into 5 main items: Home, Products, Promotions,
   Blog, Account. Move the leftover items into suitable sub-groups.
   Add an icon to each level-1 item. Keep all existing links unchanged.
   ```

5. **Step 4 — Apply:** Claude returns new JSON. Copy it, paste into the **Apply** box in Navi+ → click **Apply**.
6. Check: 5 items, full icons, original links intact. Need more tweaks? Repeat Steps 3–4. Happy? Click **Save**.

**Result:** A clean 5-item tab bar with icons, all links preserved — no editing each item by hand.
