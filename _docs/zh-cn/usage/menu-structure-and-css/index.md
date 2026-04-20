---
description: 关于使用**此菜单的自定义CSS**、**可重用类（CSS）**和默认HTML样式菜单的简短指南。菜单有**三个级别**：主栏...
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/menu-structure-and-css/
title: 菜单结构和CSS
---
# 菜单结构和CSS

关于使用**此菜单的自定义CSS**、**可重用类（CSS）**和默认HTML样式菜单的简短指南。菜单有**三个级别**：主栏、子菜单、嵌套子菜单。

> **注意：** 此演示涵盖**滑动/标准菜单**。结构对于大多数菜单类型是相同的；TABBAR和Mega Menu可能有小的差异——请在实时页面上使用开发者工具确认。

***

### 自定义CSS — 输入内容

在**高级 → 此菜单的自定义CSS**中，Navi+ **添加前缀**（包括`#SF-…`和菜单范围）。只需输入**普通选择器**——请**不要**自己输入`#SF-12345678`。

```css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

仅在**不**使用此框时**手动使用**`#SF-…`（例如主题文件中的CSS）。

**全局样式表/CSS**是一个**单独**的字段：它适用于**整个网站**，而不是仅限于一个菜单——请谨慎使用。

**可重用类（CSS）：** 在可重用表中定义`.yourClass { … }`并将类分配给项目——规则保留在同一内部CSS包中；您**不**需要在框中添加`#SF-…`。该类出现在**`li`**上。

请**不要**在框中用`<style>`标签包裹内容——仅使用普通CSS。

***

### 详细演示：一个三层分支（图标、图片、名称、描述）

示例标签：**商店**（级别1：**图标** + 名称 + 描述）→ **服装**（级别2：**图片** + 名称）→ **T恤**（级别3：**图标** + 名称 + 描述）。这显示了**两种媒体类型**和**描述**。

整个菜单位于一个块中：

```html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…`是菜单**嵌入ID**——在Navi+仪表板中可见（菜单标题旁边的蓝色徽章）以及在实时页面的开发者工具中。

#### 每个`div.inner`内部的顺序（运行时）

1. **`span.arrow`** — 箭头（子菜单/移动，取决于菜单类型）。
2. *(可选)* **`span.cart_count`** — 仅当项目使用带计数的购物车徽章时。
3. **媒体 — 其中之一：**
   * **图标（Remix Icon / `ri-…`）：** `span.icon` → `i.ri-…`
   * **图片：** `div.image-border` → `span.image-box` → `span.image` → `img`  
     
*注意：* 如果项目**有图片**，应用程序**显示图片**，并且不为该行渲染图标。
4. **`div.info`** → **`div.flexcol`** → **`span.name`**（标签）→ **`div.description`** *(仅当您在编辑器中填写描述时)*。
5. *(可选/SEO)* 图标或图片可以包裹在**`a[href]`**中——您可能会在开发者工具中看到`<a>…</a>`围绕`span.icon`或图片块。

#### `li`类解释

| 类别                             | 含义                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | 此项的深度                                             |
| `is-parent-top`                   | 具有子项的级别1项目                                 |
| `is-parent`                       | 具有子项的级别2+项目                                |
| `data-name="…"`                   | 项目标签（属性，适用于CSS `[data-name]`选择器） |

#### 完整HTML演示（说明性类/URL）

````html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Shop">
      <!-- 级别1：图标 + 名称 + 描述 -->
      <div class="inner inner-level1">
        <span class="arrow"></span>
        <!-- <span class="cart_count">3</span>  ← 仅购物车徽章 -->

        <!-- 图标：Remix Icon (ri-…) -->
        <span class="icon">
          <i class="ri-store-2-line"></i>
        </span>

        <div class="info">
          <div class="flexcol">
            <span class="name">商店</span>
            <div class="description">浏览所有类别</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Clothing">
          <!-- 级别2：图片 + 名称（无描述） -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- 图片：设置时，不渲染图标 -->
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
                <!-- 如果编辑器中的描述为空，则没有.description -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="T-Shirts">
              <!-- 级别3：图标 + 名称 + 描述 -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">T-Shirts</span>
                    <div class="description">新系列</div>
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

**仅图标（无图片）：**

````html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**仅图片（项目上设置的图片URL）：**

````html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### 自定义CSS选择器示例（在Navi+框中——请勿输入`#SF-…`）

````css
/* 箭头 */
.inner-level1 .arrow { }

/* 图标（任何级别） */
.inner-level2 .icon i { font-size: 20px; }

/* 图片 */
.inner-level2 .image img { border-radius: 8px; }

/* 标题和描述 */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }

/* 按项目名称定位 */
[data-name="Shop"] .name { color: red; }
```

**记住：** 级别2/3子菜单位于父级**`li`**内部，**在**父级的`div.inner`**之后——而不是作为`ul.navigation`的直接子项。  

**相同分支，文本图示：**

```
商店              ← 级别1（主栏）
  └─ 服装     ← 级别2（第一个子菜单）
        └─ T恤 ← 级别3（嵌套子菜单）
```

***

### 快速参考（建议类）

| 级别 | 行（`li`） | 内容包装 | 下一个子菜单                        |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1     | `level-1`  | `.inner-level1` | `ul.children[menulevel="2"]`        |
| 2     | `level-2`  | `.inner-level2` | `ul.children[menulevel="3"]` 如果有 |
| 3     | `level-3`  | `.inner-level3` | —                                   |

`menulevel="2"` / `"3"`是**该**子菜单面板的索引——与顶级项目上的`level-1`不同。

***

### 快速提示

* 使用`.inner-level1`、`.inner-level2`、`.inner-level3`来定位**一个深度**，而不是仅使用`.inner`。
* 样式设置**整个面板**（背景、半径）：`ul.children[menulevel="2"]`或`[menulevel="3"]`。
* 文本：`.info` → `.flexcol` → `.name`、`.description`。
* 图标：`.icon`或`.icon i` — 图片：`.image-border`、`.image img`（见上面的详细演示）。
* 箭头：`.arrow`（通常在`.inner`内部的第一个）。
* 按名称定位特定项目：`[data-name="Home"] .name { … }`。

***

### 商店中缺少的类？

清除主题缓存，重新发布菜单，或检查脚本版本。使用开发者工具确认实时页面上的类名。

***

支持文档 — **Navi+**
