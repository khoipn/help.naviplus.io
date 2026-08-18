---
description: '使用**此菜单的自定义 CSS**、**可重复使用的类 (CSS)** 和默认 HTML 设置菜单样式的简短指南。菜单有**三个级别**：主栏...'
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/menu-structure-and-css/
title: 菜单结构和 CSS
---
# 菜单结构和 CSS

使用**此菜单的自定义 CSS**、**可重复使用的类 (CSS)** 和默认 HTML 设置菜单样式的简短指南。菜单有**三个级别**：主栏、子菜单、嵌套子菜单。

> **注意：** 本演示涵盖**幻灯片 / 标准菜单**。大多数菜单类型的结构相同；TABBAR 和 Mega Menu 可能有细微差异 — 在实时页面上使用 DevTools 确认。

***

### 自定义 CSS — 输入的内容

在**高级 → 此菜单的自定义 CSS** 中，Navi+ **添加前缀**（包括 `#SF-…` 和菜单范围）。**仅编写普通选择器** — **不要**自己键入 `#SF-12345678`。

```css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

**`&` = 菜单本身**（`#SF-…` 容器）。这是可选的 — 但这是设置整个菜单样式的干净方式，也是在 `@media` 内执行此操作的唯一方式：

```css
&              { background: #111; }        /* the menu container */
&:hover        { box-shadow: 0 4px 12px rgba(0,0,0,.15); }
& .inner-level1 { padding: 12px 16px; }     /* '& ' with a space = inside the menu, same as .inner-level1 */

/* Responsive — only on small screens */
@media (max-width: 768px) {
  & { padding: 6px; }
  .name { font-size: 13px; }
}
```

您**不必**使用 `&` — 没有它的 CSS 完全按照以前的方式继续工作（`.inner-level1 { … }` 不变）。`&` 只是"此菜单"的快捷方式。

**仅手动使用 `#SF-…`** 当您**不使用**此框时（例如主题文件中的 CSS）。

**全局样式表 / CSS** 是一个**单独的**字段：它适用于**整个网站**，不限于一个菜单 — 谨慎使用。

**可重复使用的类 (CSS)：** 在可重复使用表中定义 `.yourClass { … }` 并将类分配给项目 — 规则保留在相同的内部 CSS 包中；您**不需要**在框中添加 `#SF-…`。该类出现在 **`li`** 上。

不要**将内容包装在框中的 `<style>` 标记中** — 仅纯 CSS。

***

### 按项目 CSS（仅设置一个项目的样式）

每个菜单项都有其**自己的** CSS 框：**编辑项目 → 高级 → 内部样式表 / CSS**。这与**此菜单的自定义 CSS**（菜单范围）分开。按项目 CSS **随项目一起移动** — 如果您复制或复制项目，其样式也会随之而来。

> **完整指南：** 对于项目的 HTML 结构和所有 CSS 语法，请参阅[菜单项结构和 CSS](/docs/usage/menu-item-structure-and-css/)。

编写纯 CSS。**`&` 表示 *此项目*** （项目的行 / `li`）— 就像 Sass 中的 `&` 一样：

```css
& { background: #fff5f5; border-radius: 10px; }
&:hover { background: #ffe4e6; }
```

使用普通类选择器（与菜单其余部分相同的名称：`.inner`、`.name`、`.description`、`.icon`、`.image`、`.arrow`）定位项目的**内部部分**：

```css
.name { color: #b91c1c; }
.icon i { font-size: 22px; }
& .description { opacity: 0.8; }
```

**`&` 之后的空格**意味着"项目内的一部分"，所以 `& .name` 和 `.name` 相同。`&` **不带空格**写入（`&:hover`、`&.active`）对项目自己的行进行样式设置。

**响应式 (`@media`)** 有效 — 非常适合仅限移动的调整。在 `@media` 内，您必须使用选择器（这是标准 CSS），所以对项目本身使用 `&`：

```css
@media (max-width: 768px) {
  & { padding: 8px; }
  .name { font-size: 13px; }
}
```

注意：

* **不需要 `#SF-…`**，且**没有 `<style>` 标记** — Navi+ 自动将所有内容的范围限定为此一个项目，因此它永远不会影响其他项目。如果您复制它，CSS 也会随项目一起移动。
* 您仍然可以编写**裸声明**而不是选择器（`color: red;`）— 它适用于此项目的行。这种较旧的样式继续工作，但 `&` 更清楚，也是在 `@media` 内设置行样式的唯一方法。
* 如果一个属性同时在此处和项目的视觉设置（媒体框阴影 / 内框等）中设置，则**视觉设置获胜**。如果您希望 CSS 接管，请删除/覆盖该设置。
* 要按设备**显示/隐藏**项目，请在编辑器中使用**在移动设备上显示 / 在桌面上显示** — 不是 CSS。在 **Wix** 上，基于视口的 `@media` 可能与实际屏幕不匹配；在那里优先使用显示设置。
* 使用**展开图标**（框右上角）打开更大的代码编辑器；按 **Esc** 或**完成**关闭。

使用**按项目 CSS** 对单个项目进行一次性调整；当您想同时设置多个项目或整个级别的样式时，使用**此菜单的自定义 CSS**（使用 `.inner-level1`、`[data-name="…"]` 等）。

***

### 详细演示：三级分支（图标、图像、名称、描述）

示例标签：**Shop**（级别 1：**图标** + 名称 + 描述）→ **Clothing**（级别 2：**图像** + 名称）→ **T-Shirts**（级别 3：**图标** + 名称 + 描述）。这展示了**两种媒体类型**和**描述**。

整个菜单坐在一个块中：

```html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` 是菜单的**嵌入 ID** — 在 Navi+ 仪表板中可见（菜单标题旁的蓝色徽章）和实时页面上的 DevTools 中。

#### 每个 `div.inner` 内的顺序（运行时）

1. **`span.arrow`** — 箭头（子菜单 / 移动设备，取决于菜单类型）。
2. *(可选)* **`span.cart_count`** — 仅当项目使用带计数的购物车徽章时。
3. **媒体 — 其中之一：**
   * **图标（Remix Icon / `ri-…`）:** `span.icon` → `i.ri-…`
   * **图像：** `div.image-border` → `span.image-box` → `span.image` → `img`

4. **`div.info`** → **`div.flexcol`** → **`span.name`** (标签) → **`div.description`** *(仅在您在编辑器中填充描述时)*。
5. *(可选 / SEO)* 图标或图像可能被包裹在 **`a[href]`** 中 — 您可能会在 DevTools 中看到 `span.icon` 或图像块周围的 `<a>…</a>`。

#### `li` 类解释

| 类 | 含义 |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | 此项目的深度 |
| `is-parent-top` | 有子项的第 1 级项目 |
| `is-parent` | 有子项的第 2+ 级项目 |
| `data-name="…"` | 项目标签（属性，适用于 CSS 选择器 `[data-name]`） |

#### 完整 HTML 演示（说明性类 / URL）

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

#### 媒体片段（供参考）

**仅图标（无图像）：**

```html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**仅图像（在项目上设置的图像 URL）：**

```html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### 自定义 CSS 的选择器示例（在 Navi+ 框中 — 不要键入 `#SF-…`）

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

**记住：** 2 级 / 3 级子菜单位于父 **`li`** **内部**，在父的 `div.inner` **之后** — 不是 `ul.navigation` 的直接子元素。

**相同分支，文本图表：**

```
Shop              ← level 1 (main bar)
  └─ Clothing     ← level 2 (first submenu)
        └─ T-Shirts ← level 3 (nested submenu)
```

***

### 快速参考（建议的类）

| 级别 | 行 (`li`) | 内容包装 | 下一个子菜单 |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1 | `level-1` | `.inner-level1` | `ul.children[menulevel="2"]` |
| 2 | `level-2` | `.inner-level2` | `ul.children[menulevel="3"]` if any |
| 3 | `level-3` | `.inner-level3` | — |

`menulevel="2"` / `"3"` 是**那个**子菜单的索引 — 不同于顶级项目上的 `level-1`。

***

### 快速提示

* 使用 `.inner-level1`、`.inner-level2`、`.inner-level3` 定位**一个深度**，而不是仅 `.inner`。
* 设置**整个面板**的样式（背景、半径）：`ul.children[menulevel="2"]` 或 `[menulevel="3"]`。
* 文本：`.info` → `.flexcol` → `.name`、`.description`。
* 图标：`.icon` 或 `.icon i` — 图像：`.image-border`、`.image img`（见上面的详细演示）。
* 箭头：`.arrow`（通常是 `.inner` 内的第一个）。
* 按名称定位特定项目：`[data-name="Home"] .name { … }`。

***

### 商店中缺少的类？

清除主题缓存、重新发布菜单或检查脚本版本。使用 DevTools 确认实时页面上的类名。

***

Support documentation — **Navi+**
