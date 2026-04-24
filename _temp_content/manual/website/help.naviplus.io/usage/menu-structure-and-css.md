# Menu structure and CSS

Short guide for styling the menu with **Custom CSS for this menu**, **Reusable Classes (CSS)**, and the default HTML. The menu has **three levels**: main bar, submenu, nested submenu.

> **Note:** This demo covers a **Slide / Standard menu**. Structure is the same for most menu types; TABBAR and Mega Menu may have minor differences — use DevTools on the live page to confirm.

***

### Custom CSS — what to type

In **Advanced → Custom CSS for this menu**, Navi+ **adds a prefix** (including `#SF-…` and menu scope). Write **normal selectors only** — do **not** type `#SF-12345678` yourself.

```css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

Use **`#SF-…` manually** only when you are **not** using this box (for example CSS in the theme file).

**Global Stylesheet / CSS** is a **separate** field: it applies to the **whole site** and is not scoped to one menu — use with care.

**Reusable Classes (CSS):** define `.yourClass { … }` in the Reusable table and assign the class to items — rules stay in the same internal CSS bundle; you do **not** need to add `#SF-…` in the box. The class appears on the **`li`**.

Do **not** wrap content in a `<style>` tag in the box — plain CSS only.

***

### Detailed demo: one three-level branch (icon, image, name, description)

Example labels: **Shop** (level 1: **icon** + name + description) → **Clothing** (level 2: **image** + name) → **T-Shirts** (level 3: **icon** + name + description). This shows **both media types** and **description**.

The whole menu sits in one block:

```html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` is the menu **embed id** — visible in the Navi+ dashboard (the blue badge next to the menu title) and in DevTools on the live page.

#### Order inside each `div.inner` (runtime)

1. **`span.arrow`** — arrow (submenu / mobile, depends on menu type).
2. *(Optional)* **`span.cart_count`** — only when the item uses cart badge with count.
3. **Media — one of:**
   * **Icon (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Image:** `div.image-border` → `span.image-box` → `span.image` → `img`\
     \&#xNAN;*Note:* if the item **has an image**, the app **shows the image** and does not render the icon for that row.
4. **`div.info`** → **`div.flexcol`** → **`span.name`** (label) → **`div.description`** *(only if you fill description in the editor)*.
5. *(Optional / SEO)* icon or image may be wrapped in **`a[href]`** — you may see `<a>…</a>` around `span.icon` or the image block in DevTools.

#### `li` classes explained

| Class                             | Meaning                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | Depth of this item                                             |
| `is-parent-top`                   | Level-1 item that has children                                 |
| `is-parent`                       | Level-2+ item that has children                                |
| `data-name="…"`                   | Item label (attribute, useful for CSS `[data-name]` selectors) |

#### Full HTML demo (illustrative classes / URLs)

```html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Shop">
      <!-- LEVEL 1: icon + name + description -->
      <div class="inner inner-level1">
        <span class="arrow"></span>
        <!-- <span class="cart_count">3</span>  ← cart badge only -->

        <!-- ICON: Remix Icon (ri-…) -->
        <span class="icon">
          <i class="ri-store-2-line"></i>
        </span>

        <div class="info">
          <div class="flexcol">
            <span class="name">Shop</span>
            <div class="description">Browse all categories</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Clothing">
          <!-- LEVEL 2: image + name (no description) -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- IMAGE: when set, icon is not rendered -->
            <div class="image-border">
              <span class="image-box">
                <span class="image">
                  <img
                    src="https://cdn.shopify.com/…/clothing.jpg"
                    alt="Clothing"
                    title="Clothing"
                    loading="lazy"
                    decoding="async">
                </span>
              </span>
            </div>

            <div class="info">
              <div class="flexcol">
                <span class="name">Clothing</span>
                <!-- no .description if description is empty in the editor -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="T-Shirts">
              <!-- LEVEL 3: icon + name + description -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">T-Shirts</span>
                    <div class="description">New collection</div>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </li>

      </ul>
    </li>

  </ul>
</div>
```

#### Media snippets (for reference)

**Icon only (no image):**

```html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**Image only (image URL set on the item):**

```html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### Selector examples for Custom CSS (in the Navi+ box — do not type `#SF-…`)

```css
/* Arrow */
.inner-level1 .arrow { }

/* Icon (any level) */
.inner-level2 .icon i { font-size: 20px; }

/* Image */
.inner-level2 .image img { border-radius: 8px; }

/* Title and description */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }

/* Target by item name */
[data-name="Shop"] .name { color: red; }
```

**Remember:** level 2 / 3 submenus sit **inside** the parent **`li`**, **after** the parent's `div.inner` — not as direct children of `ul.navigation`.

**Same branch, text diagram:**

```
Shop              ← level 1 (main bar)
  └─ Clothing     ← level 2 (first submenu)
        └─ T-Shirts ← level 3 (nested submenu)
```

***

### Quick reference (suggested classes)

| Level | Row (`li`) | Content wrapper | Next submenu                        |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1     | `level-1`  | `.inner-level1` | `ul.children[menulevel="2"]`        |
| 2     | `level-2`  | `.inner-level2` | `ul.children[menulevel="3"]` if any |
| 3     | `level-3`  | `.inner-level3` | —                                   |

`menulevel="2"` / `"3"` is the index of **that** submenu panel — not the same as `level-1` on a top-level item.

***

### Quick tips

* Target **one depth** with `.inner-level1`, `.inner-level2`, `.inner-level3` instead of only `.inner`.
* Style a **whole panel** (background, radius): `ul.children[menulevel="2"]` or `[menulevel="3"]`.
* Text: `.info` → `.flexcol` → `.name`, `.description`.
* Icon: `.icon` or `.icon i` — image: `.image-border`, `.image img` (see detailed demo above).
* Arrow: `.arrow` (usually first inside `.inner`).
* Target a specific item by name: `[data-name="Home"] .name { … }`.

***

### Classes missing on the store?

Clear theme cache, republish the menu, or check the script version. Use DevTools to confirm class names on the live page.

***

Support documentation — **Navi+**


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/usage/menu-structure-and-css.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
