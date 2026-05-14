---
description: 使用 Navi+ 菜单构建器插件在 WordPress 上发布 Navi+ 菜单——粘性菜单自动在整个站点上呈现，而部分菜单则通过 [naviwp] 短代码或 Gutenberg 块放置。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/integrations/wordpress-woocommerce/publish-menus/
title: 在 WordPress 上发布您的菜单
---
# 在 WordPress 上发布您的菜单

Navi+ 有两种发布模式——**粘性**和**部分**——WordPress 插件支持这两种模式。适用的模式取决于菜单类型。

| 菜单类型 | 模式 | 出现位置 |
| --- | --- | --- |
| Tab Bar | 粘性 | 锚定到视口，整个站点 |
| FAB | 粘性 | 浮动按钮，整个站点 |
| Slide Menu | 粘性 / 上下文 | 通过点击任何元素触发 |
| Mega Menu (Desktop) | 部分 | 嵌入的位置 |
| Mega Menu (Mobile) | 部分 | 嵌入的位置 |
| Grid Menu | 部分 | 嵌入的位置 |

请参阅 [发布概述]({{ site.baseurl }}/docs/publish/publish-overview/) 以获取完整的粘性与部分比较。

---

## 粘性菜单 — Tab Bar, FAB, Slide

安装插件并保存您的第一个菜单后，编辑器中标记为 **已发布** 的粘性菜单会自动在您网站的每个页面上呈现。

您无需插入任何内容。显示规则（设备、URL 模式、登录状态）由浏览器中的 Navi+ 运行时评估。

### 切换全站嵌入

插件管理包括一个全站嵌入的开关：

- **开启（默认）：** 运行时被注入到每个页面的 `<head>` 中；粘性菜单在整个站点上呈现。
- **关闭：** 运行时仅在包含 `[naviwp]` 短代码或块的页面上加载。如果您希望菜单仅出现在少量页面上（例如，仅限移动的着陆页），请使用此选项。

如果粘性菜单未出现，请检查：

- 菜单在编辑器中是 **已发布**（而不是草稿）。
- 显示规则与您正在测试的页面匹配。
- 运行时已加载——请参阅 [验证部分]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection)。

---

## 部分菜单 — Mega Menu, Grid

部分菜单需要放置在页面的特定位置。插件提供三种方法。

### 方法 1 — 短代码（推荐）

在任何帖子、页面或支持短代码的小部件中：

```text
[naviwp embed_id="SF-123456789"]
```

将 `SF-123456789` 替换为您的菜单的 **嵌入 ID**（在菜单的发布面板中显示）。

### 方法 2 — Gutenberg 块

在块编辑器中：

1. 点击 **+** 插入新块。
2. 搜索 **Naviplus Menu Builder**。
3. 插入块并将您的菜单的 **嵌入 ID** 粘贴到块侧边栏中。

该块在编辑器中呈现一个空占位符，并在前端被实时菜单替换。您还可以放置一个 **短代码** 块并粘贴 `[naviwp embed_id="..."]`——这同样有效。

### 方法 3 — 在段落块内

插件识别直接粘贴到段落块中的 `[naviwp ...]` 短代码；您无需先切换到短代码块。

### 方法 4 — 页面构建器（Elementor, Divi, Bricks, Oxygen）

使用构建器的 **短代码** 小部件并粘贴 `[naviwp embed_id="..."]`。如果构建器没有短代码小部件，带有嵌入 div 的 **HTML** 小部件也可以工作：

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

插件已经加载了 Navi+ 运行时，因此菜单会在该容器内呈现。

---

## 一个令牌，多个菜单

插件每个页面加载一次运行时，并从同一个 Navi+ 服务获取每个菜单——无论是粘性还是部分。要停止发布菜单，请在编辑器中将其切换为 **草稿**；无需进行 WordPress 更改。

---

## 缓存插件（WP Rocket, W3 Total Cache, LiteSpeed Cache）

Navi+ 运行时从 CDN 提供，并且对缓存友好。您**不**需要将其排除在页面缓存之外。在编辑器中更新菜单后，变更会在下次页面加载时出现——无需刷新 WordPress 缓存，因为菜单是由浏览器在运行时获取的，而不是烘焙到 HTML 中。

如果您看到过时的输出，通常是浏览器缓存。强制重新加载（Cmd/Ctrl + Shift + R）可以清除它。
