---
description: 使用 Navi+ 菜单构建器插件在 WordPress 上发布 Navi+ 标签栏 — 无需代码编辑。标签栏是一个粘性菜单，因此在编辑器中发布后会自动在整个站点上呈现。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/
title: 标签栏 — 在 WordPress 上发布
---
# 标签栏 — 在 WordPress 上发布

**标签栏** 是一个 **粘性** 菜单 — 它固定在视口（通常在移动设备上靠近底部），并在访客滚动时保持在原位。在 WordPress 上，Navi+ 菜单构建器插件会自动在整个站点上呈现标签栏；您无需粘贴任何代码或短代码。

> 其他平台（Wix、Squarespace、Webflow、自定义网站）：请参见 [在 Wix / Squarespace / 其他平台上发布]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/)。

---

## 步骤

1. **安装插件** — 请参见 [安装 Navi+ 菜单构建器插件]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/)。
2. **打开编辑器** — 在 WordPress 管理后台，转到 **外观 → Naviplus 菜单构建器**。
3. **构建您的标签栏** — 选择 **标签栏** 布局，添加 3–5 个主要目的地。有关设计提示，请参见 [标签栏 — 如何使用]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/)。
4. **在编辑器中发布菜单**（状态：已发布，而不是草稿）。

就是这样。标签栏会立即出现在您 WordPress 网站的前端 — 无需短代码，无需主题编辑。插件的全站嵌入（默认开启）会在每个页面加载 Navi+ 运行时，而运行时会获取您网站上每个已发布的粘性菜单。

---

## 将标签栏限制在特定页面

不要禁用插件的全站嵌入 — 这会完全关闭运行时。相反，在编辑器中限制标签栏：

- **显示规则 → URL 模式** — 仅在与 glob 匹配的 URL 上显示标签栏（例如 `/shop/*`）。
- **显示规则 → 设备** — 限制为仅移动设备。
- **显示规则 → 访客状态** — 限制为已登录用户等。

显示规则由浏览器中的运行时评估，因此更改将在下次页面加载时生效。

---

## 标签栏的移动设备提示

- 保持 **3–5 个标签** — 超过这个数量会拥挤视口。
- 使用简短标签（尽可能一个词）和清晰图标。
- 在真实设备上测试点击目标大小，而不仅仅是在编辑器预览中。
- 如果标签栏与另一个固定元素（例如聊天小部件）重叠，请参见 [菜单与其他元素重叠]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/)。

---

## 验证标签栏是否在线

在任何页面 URL 后附加 `#navidebug-on`（例如 `https://your-site.com/#navidebug-on`）。如果插件已连接，页面将切换到 Navi+ 调试模式。附加 `#navidebug-off` 以关闭它。

有关更深入的检查，请参见 [创建您的第一个菜单 — 验证连接]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection)。

---

## 相关

- [WordPress / WooCommerce — 概述]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [在 WordPress 上发布您的菜单]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Naviplus 菜单构建器常见问题]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/)
