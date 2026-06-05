# Need Update - help.naviplus.io

## Tổng quan

Tài liệu publishing trên help.naviplus.io hiện tại thiếu phần quan trọng về **CSS Selector method** để publish menu. Cần bổ sung đầy đủ cho 3 loại menu.

## Files cần update

### 1. Mega Menu Desktop - Publishing on Shopify
**File**: `_source_md/usage/mega-menu-desktop/publishing-on-shopify.md`

**Nội dung cần thêm**:

#### Section I.2: Understanding CSS Selector (mới)
Thêm sau section I.1 "Turn on Navi+ on App Embeds", trước section hiện tại "Select display settings and publish the menu".

Nội dung:
- Giải thích CSS Selector là gì
- Tại sao cần dùng CSS Selector để publish menu
- 3 phương pháp: Insert Before, Insert After, Replace
- Link đến 2 guides:
  - Debug Mode: `/docs/usage/debug-mode-find-css-selectors/`
  - Find CSS Selector: `/docs/usage/general/find-css-selector/`

#### Section I.3: Three publishing options (mới)
Thêm sau section I.2 mới, trước section hiện tại về "Select display settings".

**Option 1: Insert Before**
- Giải thích: Chèn menu Navi+ VÀO TRƯỚC một element
- Ví dụ: Insert before `header` → menu xuất hiện phía trên header
- CSS Selector phổ biến: `header`, `main`, `.header-wrapper`
- Screenshot minh họa

**Option 2: Insert After**
- Giải thích: Chèn menu Navi+ VÀO SAU một element
- Ví dụ: Insert after `header` → menu xuất hiện ngay dưới header
- CSS Selector phổ biến: `header`, `.announcement-bar`
- Screenshot minh họa

**Option 3: Replace**
- Giải thích: Thay thế hoàn toàn một element bằng menu Navi+
- Ví dụ: Replace `.header-menu` → ẩn menu gốc, hiển thị menu Navi+
- CSS Selector phổ biến: `.header-menu`, `.header__menu`, `nav.menu`
- Screenshot minh họa
- **Lưu ý quan trọng**: Cần optimize UX để tránh flash (xem section I.4)

#### Section I.4: Device-specific targeting (mới)
Thêm sau section I.3.

**Suffix notation**:
- `(M)` - Chỉ áp dụng trên Mobile
- `(D)` - Chỉ áp dụng trên Desktop
- Không có suffix - Áp dụng trên cả 2 platforms

**Ví dụ**:
- `header(M)` - Insert/Replace chỉ trên mobile
- `.header-menu(D)` - Insert/Replace chỉ trên desktop
- `main` - Insert/Replace trên cả mobile và desktop

#### Section I.5: Optimize UX for Replace mode (đã có, cần update)
Section hiện tại "I.3. Important! Optimize Mega Menu speed..." đổi thành I.5 và cập nhật:
- Giải thích rõ hơn về vấn đề flash khi replace
- Hướng dẫn hide element gốc và show loading placeholder
- Thêm ví dụ với device-specific suffix

---

### 2. Mega Menu Mobile - Publishing on Shopify
**File**: `_source_md/usage/mega-menu-mobile/publishing-on-shopify.md`

**Nội dung cần thêm**: Tương tự Mega Menu Desktop, nhưng:
- Lưu ý: Trên mobile thường không có Mega Menu gốc để replace
- Phương pháp phổ biến nhất: Insert After `header`
- CSS Selector phổ biến cho mobile:
  - `header` (insert after)
  - `.mobile-header` (insert after)
  - `main` (insert before)

**Sections cần thêm**:
- I.2: Understanding CSS Selector
- I.3: Three publishing options (nhấn mạnh Insert Before/After, ít dùng Replace)
- I.4: Device-specific targeting
- I.5: Optimize UX (nếu dùng Replace mode)

---

### 3. Grid Menu - Publishing on Shopify
**File**: `_source_md/usage/grid-menu/publishing-on-shopify.md`

**Nội dung cần thêm**: Tương tự 2 loại trên, nhưng:
- Grid Menu thường được insert before `main` để hiển thị như một section
- Ít khi dùng Replace vì không có Grid Menu gốc trên theme
- CSS Selector phổ biến:
  - `main` (insert before)
  - `.main-content` (insert before)
  - `#MainContent` (insert before - Shopify Dawn theme)

**Sections cần thêm**:
- I.2: Understanding CSS Selector
- I.3: Three publishing options (nhấn mạnh Insert Before, ít dùng After/Replace)
- I.4: Device-specific targeting

---

## Cấu trúc chung cho mỗi file

```markdown
### Step 2: (Shopify) Publish the menu on your website.

#### I) METHOD 1: INSERT/REPLACE USING CSS SELECTOR (RECOMMENDED)

##### I.1. Turn on Navi+ on App Embeds
[Nội dung hiện tại giữ nguyên]

##### I.2. Understanding CSS Selector
[Nội dung mới - giải thích CSS Selector]

##### I.3. Three publishing options
[Nội dung mới - 3 options: Insert Before, Insert After, Replace]

<details>
<summary>Option 1: Insert Before</summary>
[Chi tiết + screenshot]
</details>

<details>
<summary>Option 2: Insert After</summary>
[Chi tiết + screenshot]
</details>

<details>
<summary>Option 3: Replace</summary>
[Chi tiết + screenshot]
</details>

##### I.4. Device-specific targeting
[Nội dung mới - (M), (D), no suffix]

##### I.5. Optimize UX for Replace mode (optional)
[Nội dung hiện tại, cập nhật thêm về device-specific]

#### II) METHOD 2: ADD AS SECTION/BLOCK
[Nội dung hiện tại giữ nguyên]
```

---

## Screenshots cần tạo

Cho mỗi loại menu (Desktop Mega, Mobile Mega, Grid), cần screenshots:

1. **Insert Before example**
   - UI trong Navi+ app showing CSS selector input
   - Dropdown chọn "Insert Before"
   - Kết quả trên website (menu xuất hiện trước element)

2. **Insert After example**
   - UI trong Navi+ app showing CSS selector input
   - Dropdown chọn "Insert After"
   - Kết quả trên website (menu xuất hiện sau element)

3. **Replace example**
   - UI trong Navi+ app showing CSS selector input
   - Dropdown chọn "Replace"
   - Kết quả trên website (menu gốc bị thay thế)

4. **Device-specific suffix example**
   - UI showing CSS selector với suffix `(M)` hoặc `(D)`
   - Giải thích visual về khi nào nó apply

---

## Links cần thêm

Trong mỗi section I.2 "Understanding CSS Selector", thêm links:

```markdown
To find the correct CSS Selector for your website, you can use:
- [Debug Mode](/docs/usage/debug-mode-find-css-selectors/) - Navi+ built-in tool
- [Browser DevTools](/docs/usage/general/find-css-selector/) - Manual method
```

---

## Ngôn ngữ

Sau khi hoàn thành tiếng Anh, cần translate sang 8 ngôn ngữ còn lại:
- vi (Tiếng Việt)
- ja (日本語)
- ko (한국어)
- zh (中文)
- th (ไทย)
- id (Bahasa Indonesia)
- es (Español)
- fr (Français)

---

## Phong cách viết

- **Marketing vừa phải**: Không quá kỹ thuật, không quá phô trương
- **Khiêm tốn**: Không phóng đại tính năng
- **Đúng sự thực**: Chỉ viết những gì sản phẩm thực sự có
- **Dễ hiểu**: User-friendly, có ví dụ cụ thể
- **Visual**: Có screenshots minh họa cho mỗi option

---

## Checklist

- [ ] Update Mega Menu Desktop - Publishing on Shopify
  - [ ] Add I.2: Understanding CSS Selector
  - [ ] Add I.3: Three publishing options
  - [ ] Add I.4: Device-specific targeting
  - [ ] Update I.5: Optimize UX
  - [ ] Add screenshots
  - [ ] Add links to Debug Mode & DevTools guides

- [ ] Update Mega Menu Mobile - Publishing on Shopify
  - [ ] Add I.2: Understanding CSS Selector
  - [ ] Add I.3: Three publishing options (focus on Insert)
  - [ ] Add I.4: Device-specific targeting
  - [ ] Add I.5: Optimize UX (if needed)
  - [ ] Add screenshots
  - [ ] Add links to guides

- [ ] Update Grid Menu - Publishing on Shopify
  - [ ] Add I.2: Understanding CSS Selector
  - [ ] Add I.3: Three publishing options (focus on Insert Before)
  - [ ] Add I.4: Device-specific targeting
  - [ ] Add screenshots
  - [ ] Add links to guides

- [ ] Translate to 8 languages
  - [ ] vi
  - [ ] ja
  - [ ] ko
  - [ ] zh
  - [ ] th
  - [ ] id
  - [ ] es
  - [ ] fr

- [ ] Review & test on dev environment
- [ ] Deploy to production
