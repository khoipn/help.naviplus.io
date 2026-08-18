---
description: '深入了解单个菜单项 — 其 HTML 结构（图标、图像、名称、描述、箭头、徽章）以及如何使用按项目 CSS 框来设置样式，包括 &（该项目）、内部选择器、悬停和 @media。'
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/menu-item-structure-and-css/
title: 菜单项结构和 CSS
---
# 菜单项结构和 CSS

本页深入了解**单个菜单项** — 它呈现的 HTML 以及如何使用项目自己的 CSS 框来设置样式**仅该项目**（**编辑项目 → 高级 → 内部样式表 / CSS**）。

> 此框仅设置**您正在编辑的项目**的样式，当您复制它时，CSS **随项目一起移动**。对于整个菜单的 CSS，请改用**此菜单的自定义 CSS** — 请参阅[菜单结构和 CSS](/docs/usage/menu-structure-and-css/)。

***

## 一个项目的结构

每个项目都是一个包含 `div.inner` 的 `li`。在 `.inner` 内，按顺序：

```html
<li class="item level-1 …" data-name="Shop">
  <div class="inner inner-level1">
    <span class="arrow"></span>            <!-- submenu arrow (if any) -->
    <!-- <span class="cart_count">3</span> --> <!-- cart badge with count (optional) -->

    <!-- MEDIA — icon OR image (if the item has an image, the icon is not rendered) -->
    <span class="icon"><i class="ri-store-2-line"></i></span>
    <!-- or -->
    <div class="image-border">
      <span class="image-box"><span class="image"><img src="…"></span></span>
    </div>

    <!-- TEXT -->
    <div class="info">
      <div class="flexcol">
        <span class="name">Shop</span>
        <div class="description">Browse all categories</div>   <!-- only if you filled description -->
      </div>
    </div>
  </div>
</li>
```

### 您可以定位的部分

| 部分 | 选择器 | 注意 |
| ---- | -------- | ----- |
| 项目本身（行） | `&` | `li`。`&` 是"此项目"的快捷方式。 |
| 内容包装 | `.inner` | 包装项目内的所有内容 |
| 图标字形 | `.icon i` | 混音图标 (`ri-…`) |
| 图像 | `.image img` (框: `.image-border`, `.image-box`, `.image`) | 当项目有图像时显示而不是图标 |
| 标题 | `.name` | 标签 |
| 描述 | `.description` | 仅在您填充描述字段时存在 |
| 文本列 | `.info`, `.flexcol` | 保留名称 + 描述 |
| 箭头 | `.arrow` | 子菜单箭头 |
| 购物车徽章 | `.cart_count` | 仅用于带有计数的购物车项目 |

***

## 为一个项目编写 CSS

该框接受**三种形式，可以混合使用**。您永远不会键入 `#SF-…` 也不会添加 `<style>` 标记 — Navi+ 会自动将所有内容限定到此一个项目。

### 1. `&` — 此项目（推荐）

`&` 表示项目本身的行（`li`），就像 Sass 中的 `&` 一样：

```css
& { border: 1px solid #eee; border-radius: 12px; }
&:hover { background: #f8fafc; }
```

### 2. 内部选择器 — 项目内的部分

使用上表中的类名：

```css
.name { font-weight: 700; }
.description { font-size: 12px; opacity: .8; }
.icon i { font-size: 22px; color: #2563eb; }
.image img { border-radius: 10px; }
```

**`&` 之后的空格**也意味着"项目内"，所以 `& .name` 和 `.name` 相同。`&` **不带空格**写入（`&:hover`、`&.active`）对行本身进行样式设置。

### 3. 裸声明 — 旧的快捷方式

编写**没有选择器的**属性会将它们应用于项目行：

```css
color: red;
font-weight: 700;
```

这继续工作（旧菜单依赖它），但 `&` 更清楚 — 裸声明**不能**在 `@media` 内使用。

***

## 使用 `@media` 的响应式

`@media` 在这里工作。在 `@media` 内，您必须使用选择器（这是标准 CSS），所以对项目本身使用 `&`：

```css
/* Smaller padding + hide the description on phones */
@media (max-width: 768px) {
  & { padding: 8px; }
  .description { display: none; }
  .name { font-size: 13px; }
}
```

> 要按设备**显示或隐藏**项目，在编辑器中使用**在移动设备上显示 / 在桌面上显示** — 不是 CSS。在**Wix** 上，基于视口的 `@media` 可能与实际屏幕不匹配；在那里使用显示设置。

***

## 示例

**将一个项目变成一个药丸 / 徽章：**

```css
& { background: #111; color: #fff; border-radius: 999px; padding: 6px 14px; }
.name { color: #fff; }
```

**悬停时突出显示：**

```css
&:hover { transform: translateY(-2px); transition: transform .15s; }
&:hover .name { color: #2563eb; }
```

**更大的彩色图标：**

```css
.icon i { font-size: 24px; color: #e11d48; }
```

**带有微妙框架的圆形图像：**

```css
.image img { border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,.12); }
```

**在移动设备上紧凑：**

```css
& { padding: 12px; }
@media (max-width: 768px) {
  & { padding: 6px; }
  .description { display: none; }
}
```

***

## 好处

* **没有 `#SF-…`，没有 `<style>` 标记** — Navi+ 将 CSS 的作用范围限定为此一个项目；它永远不会影响其他项目。
* 当您复制它时，CSS **随项目一起移动**（它是按项目的，可重复使用的）。
* 如果一个属性同时在**此处**和项目的视觉设置（媒体框 / 内框颜色、边框、阴影…）中设置，则**视觉设置获胜** — 它被内联应用。如果您希望 CSS 接管，请删除该设置。
* 使用**展开图标**（框右上角）获得更大的编辑器；按 **Esc** 或**完成**关闭。

***

Support documentation — **Navi+**
