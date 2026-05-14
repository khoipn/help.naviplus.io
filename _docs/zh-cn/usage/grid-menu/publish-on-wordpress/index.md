---
description: 使用 Navi+ 菜单构建器插件在 WordPress 上发布 Navi+ 网格菜单。使用 [naviwp embed_id="..."] 短代码或 Gutenberg 块将其插入到应出现的位置。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/grid-menu/publish-on-wordpress/
title: 网格菜单 — 在 WordPress 上发布
---
# 网格菜单 — 在 WordPress 上发布

一个 **网格菜单** 是一个 **部分** 菜单 — 它在您嵌入它的页面位置呈现。它非常适合类别快捷方式、中心页面和 "您想做什么？" 面板。在 WordPress 上，Navi+ 菜单构建器插件通过短代码或 Gutenberg 块放置它；您无需编辑主题文件。

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

---

## 移动提示

- 使用 **[响应式网格菜单]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** 根据断点切换列数 — 例如，桌面上 4 列，移动设备上 2 列。
- 保持图块内容简短 — 一个图标，一个一到两个单词的标签， optionally 一个小描述。长标签的换行不可预测。
- 目标点击区域至少为 44 × 44 像素，包括填充。

---

## 以后更新菜单

编辑器中的编辑将在下次前端页面加载时应用 — 无需刷新 WordPress 缓存。

---

## 相关

- [WordPress / WooCommerce — 概述]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [在 WordPress 上发布您的菜单]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [响应式网格菜单]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
