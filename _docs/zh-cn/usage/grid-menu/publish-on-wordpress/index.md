---
description: 使用 Navi+ 菜单构建器插件在 WordPress 上发布 Navi+ 网格菜单。使用 [naviwp embed_id="..."] 短代码或 Gutenberg 块将其插入到应出现的位置。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/grid-menu/publish-on-wordpress/
title: 网格菜单 — 在 WordPress 上发布
---
# 网格菜单 — 在 WordPress 上发布

一个 **网格菜单** 是一个 **部分** 菜单 — 它在您嵌入的页面位置呈现。它非常适合类别快捷方式、中心页面和 "你想做什么？" 面板。在 WordPress 上，Navi+ 菜单构建器插件通过短代码或 Gutenberg 块放置它；您无需编辑主题文件。

> 其他平台（Wix、Squarespace、Webflow、自定义网站）：请参见 [在 Wix / Squarespace / 其他平台上发布]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/)。

---

## 步骤

1. **安装插件** — 请参见 [安装 Navi+ 菜单构建器插件]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/)。
2. **在外观 → Naviplus 菜单构建器中构建您的网格菜单**。请参见 [网格菜单 — 如何使用]({{ site.baseurl }}/docs/usage/grid-menu/how-to-use/) 和 [响应式网格菜单]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)。
3. **复制嵌入 ID**（例如 `SF-123456789`）。
4. **使用以下方法之一嵌入它**。

---

## 插入菜单

### 选项 1 — 短代码（推荐）

```text
[naviwp embed_id="SF-123456789"]
```

将其放入任何帖子、页面或支持短代码的小部件中。

典型位置：

- 带有类别图块的主页英雄部分。
- 折叠以上的着陆页。
- 类别存档的空状态。

### 选项 2 — Gutenberg 块

在块编辑器中，**+ → Naviplus 菜单构建器**，然后将嵌入 ID 粘贴到块侧边栏。一个普通的 **短代码** 块与 `[naviwp embed_id="SF-..."]` 是等效的。

### 选项 3 — 页面构建器（Elementor、Divi、Bricks、Oxygen）

使用带有 `[naviwp embed_id="SF-..."]` 的 **短代码** 小部件。如果构建器没有短代码小部件，则带有嵌入 div 的 **HTML** 小部件有效：

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

### 选项 4 — CSS 选择器（来自 Navi+ 应用的自动放置）

您可以让 Navi+ 自动插入或替换元素，而不是手动放置短代码，使用 CSS 选择器 — 完全从 Navi+ 应用中配置。

#### 理解 CSS 选择器

CSS 选择器针对您页面上的特定 HTML 元素。Navi+ 使用它来准确知道 **在哪里** 放置您的菜单 — 插入之前、插入之后或替换现有元素。

要找到正确的 CSS 选择器，请使用：
- [调试模式](/docs/usage/debug-mode-find-css-selectors/) — 悬停在任何元素上并立即复制其选择器
- [浏览器开发工具](/docs/usage/general/find-css-selector/) — 通过浏览器检查器的手动方法

#### 三种发布选项

在 Navi+ 应用中：点击 **发布到网站** → 打开 **"通过插入/替换方法发布菜单"** → 输入您的 CSS 选择器并选择一个选项：

<details><summary>选项 A：插入之前</summary>
<p>在所选元素<strong>之前</strong>立即插入网格菜单，显示为完整部分。</p>
<p><strong>示例：</strong> <code>main</code> → 网格菜单出现在主内容区域上方。</p>
<p>这是 WordPress 上网格菜单最常见的设置。</p>
<p>WordPress 主题的常见选择器：</p>
<ul>
<li><code>main</code> — 大多数主题</li>
<li><code>#main</code> — Twenty Twenty、Astra、OceanWP</li>
<li><code>.site-main</code> — 许多主题</li>
<li><code>#content</code> — Divi，一些默认主题</li>
</ul>
</details>

<details><summary>选项 B：插入之后</summary>
<p>在所选元素<strong>之后</strong>立即插入网格菜单。</p>
<p><strong>示例：</strong> <code>header</code> → 网格菜单出现在标题下方。</p>
<p>WordPress 主题的常见选择器：</p>
<ul>
<li><code>header</code> — 大多数主题</li>
<li><code>.site-header</code> — OceanWP、Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One 和默认 WordPress 主题</li>
</ul>
</details>

<details><summary>选项 C：替换</summary>
<p>大多数 WordPress 网站没有内置的网格菜单元素可供替换。插入之前 <code>main</code> 是推荐的方法。</p>
<p>如果您的主题确实有一个您想要替换的网格样式元素，请使用 <a href="/docs/usage/debug-mode-find-css-selectors/">调试模式</a> 或 <a href="/docs/usage/general/find-css-selector/">浏览器开发工具</a> 找到其选择器。</p>
</details>

#### 设备特定目标

添加后缀以仅在特定设备上应用选择器：

| 后缀 | 应用到 |
|--------|------------|
| `(M)` | 仅移动设备 |
| `(D)` | 仅桌面设备 |
| *(无)* | 两者 |

示例： `main(D)` — 仅在桌面上插入网格菜单。

---

## 移动提示

- 使用 **[响应式网格菜单]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** 根据断点切换列数 — 例如，桌面上 4 列，移动设备上 2 列。
- 保持图块内容简短 — 一个图标，一个一到两个字的标签，选择性地添加一个小描述。长标签会不可预测地换行。
- 目标点击区域至少为 44 × 44 像素，包括填充。

---

## 以后更新菜单

编辑在编辑器中的更改将在下次前端页面加载时应用 — 无需刷新 WordPress 缓存。

---

## 相关

- [WordPress / WooCommerce — 概述]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [在 WordPress 上发布您的菜单]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [响应式网格菜单]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
