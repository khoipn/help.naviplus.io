---
description: 使用 Navi+ 菜单构建器插件在 WordPress 上发布 Navi+ 滑动菜单（汉堡菜单）。该插件在整个网站加载菜单，触发器在 Navi+ 编辑器中配置 — 无需主题编辑，无需典型设置的短代码。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/slide-menu-hamburger-menu/publish-on-wordpress/
title: 滑动菜单 — 在 WordPress 上发布
---
# 滑动菜单 — 在 WordPress 上发布

一个 **滑动菜单**（又称汉堡菜单）从侧面滑入，是移动设备上深层菜单树的主要导航。在 WordPress 上，Navi+ 菜单构建器插件在整个网站加载它，Navi+ 编辑器负责打开触发器 — 无需主题编辑，无需典型设置的短代码。

> 其他平台（Wix、Squarespace、Webflow、自定义网站）：请参见 [在 Wix / Squarespace / 其他平台上发布]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/publish-on-wordpress-woocommerce-wix-others/)。

---

## 步骤

1. **安装插件** — 请参见 [安装 Navi+ 菜单构建器插件]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/)。
2. **在外观 → Naviplus 菜单构建器中构建您的滑动菜单**。请参见 [滑动菜单 — 如何使用]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/how-to-use/)。
3. **在编辑器中配置打开触发器** — Navi+ 处理前端的触发器连接，因此您无需向主题添加按钮或编写任何 JS。编辑器的发布面板允许您定位网站上现有的元素（例如您主题的汉堡按钮）。
4. **发布菜单**（状态：已发布，而非草稿）。

就这样。插件的全站嵌入加载了 Navi+ 运行时，运行时获取您发布的滑动菜单，当配置的触发器被点击时，菜单打开。

---

## 在固定位置嵌入滑动菜单（少见）

如果您希望菜单在页面中内联（不通过按钮触发），请使用与部分菜单相同的短代码：

```text
[naviwp embed_id="SF-123456789"]
```

这会将菜单的内容放入短代码所在的页面中。

---

## 移动提示

- 滑动菜单非常适合 **深层或大型** 菜单树 — 多级子菜单、巨型面板。
- 保持打开动画在 300 毫秒以内；更长时间会感觉迟缓。
- 如果您主题中现有的汉堡按钮有自己的点击处理程序，与滑动菜单冲突，请参见 [Navi+ 如何注入]({{ site.baseurl }}/docs/integrations/how-navi-injects/) 和 [搜索 / 购物车 / 菜单面板无法工作]({{ site.baseurl }}/docs/frequently-asked-questions/why-arent-menu-search-cart-panels-working/) 中的故障排除说明。

---

## 相关

- [WordPress / WooCommerce — 概述]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [发布示例]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/publishing-examples/)
- [滑动菜单 — 如何使用]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/how-to-use/)
