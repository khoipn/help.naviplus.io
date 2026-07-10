---
description: 在 Wix 上发布 Navi+ 标签栏。Navi+ 是一个原生 Wix 应用市场应用——安装它、发布标签栏，它就会在整个网站上自动显示。无需代码，无需嵌入代码片段。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/tabbar-bottom-navigation/publishing-on-wix/
title: 在 Wix 上发布
---
# 在 Wix 上发布

> 💡 初次在 Wix 上使用 Navi+？请参阅 naviplus.io 上的 [Navi+ 在 Wix 上概览](https://naviplus.io/zh-CN/blogs/compare/topic/naviplus-on-wix/)。

Navi+ 在 Wix 上作为**原生 Wix 应用市场应用**运行。**标签栏**是一个**粘性**菜单——它锚定到视口（在移动设备上通常靠近底部），在访客滚动时保持固定。在 Wix 上，一旦你安装 Navi+ 并发布标签栏，它就会**在整个网站范围内自动渲染**——无需粘贴代码，无需自定义代码步骤。

> 其他平台：请参见[在 Shopify 上发布]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publishing-on-shopify/)、[在 WordPress 上发布]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/)，或[Squarespace / Webflow / 其他]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/)。

---

## 步骤

1. **从 [Wix 应用市场](https://www.wix.com/app-market)安装 Navi+** ——它在你的 Wix 仪表板内打开，已连接到你的网站。Wix 负责身份验证，所以无需设置 API 密钥。
2. **构建你的标签栏** ——选择**标签栏**布局并添加 3–5 个主要目的地。有关设计提示，请参见[标签栏——如何使用]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/)。
3. **发布菜单**（状态：已发布，而不是草稿）。

就这么简单。Navi+ 通过 Wix 的嵌入脚本自动嵌入到你的实时 Wix 网站中，标签栏立即出现在每一页上——无需代码片段，无需主题编辑。

---

## 将标签栏限制在特定页面

在 Navi+ 编辑器中限制标签栏的范围——不要尝试删除应用：

- **显示规则 → URL 模式** ——仅在匹配通配符的 URL 上显示标签栏（例如 `/shop/*`）。
- **显示规则 → 设备** ——仅限制在移动设备上。
- **显示规则 → 访客状态** ——仅限制登录用户等。

规则在浏览器中评估，所以更改会在下一页加载时应用。

---

## 账单

Wix 上的 Navi+ 通过 **Wix** 计费——免费版本加上 **Starter、Business 和 Elite** 计划，与你的 Wix 订阅一起收费。从应用内的定价屏幕升级。

---

## 相关

- [标签栏——如何使用]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/)
- [安装 Navi+]({{ site.baseurl }}/docs/how-to-install-navi/)
