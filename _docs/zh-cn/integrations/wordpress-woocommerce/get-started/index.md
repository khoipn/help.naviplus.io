---
description: 在激活Navi+菜单构建器插件后，打开外观 → Naviplus菜单构建器，在可视化编辑器中创建您的第一个菜单，并让插件自动将您的WordPress网站连接到Navi+。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/integrations/wordpress-woocommerce/get-started/
title: 创建您的第一个菜单
---
# 创建您的第一个菜单

一旦插件被激活，您可以在WordPress中构建菜单——无需单独注册，无需粘贴令牌。

---

## 1. 打开菜单构建器

在WordPress管理后台，前往：

> **外观 → Naviplus菜单构建器**

这将在您的WordPress仪表板中打开Navi+可视化编辑器。

---

## 2. 创建您的第一个菜单

按照屏幕上的流程创建菜单。当您保存第一个菜单时，插件**自动连接**您的网站到Navi+：

- 它注册一个**站点标识符**，让Navi+服务识别您的WordPress安装。
- 它将该标识符保存在WordPress中，以便后续的菜单更改路由到正确的站点。

> 站点标识符**不是**您的WordPress密码，也**不是**您需要管理的Navi+令牌。它是插件为您处理的一个不透明值。

您**不需要**在安装插件之前创建Navi+账户——第一个菜单的保存处理了连接。

---

## 3. 设计布局

在编辑器中，选择一种菜单类型（Tab Bar、Slide / hamburger、Mega Menu、Grid、FAB），然后设计布局。编辑器文档：

- [菜单类型概述]({{ site.baseurl }}/docs/usage/explore-common-menus/)
- [菜单项 — 项目、链接、图标、徽章]({{ site.baseurl }}/docs/menu-items/item-overview/)
- [设计概述]({{ site.baseurl }}/docs/design/design-overview/)

菜单结构和样式存储在Navi+服务上；WordPress仅存储站点标识符。

---

## 4. 验证连接

打开您网站的前端。您在编辑器中标记为**已发布**的粘性菜单（Tab Bar、FAB）会自动出现在整个网站上。

要确认运行时正在加载，可以使用：

- **调试模式（所有人）：** 在任何URL后附加`#navidebug-on` — 例如 `https://your-site.com/#navidebug-on`。如果插件已连接，页面将切换到Navi+调试模式。使用 `#navidebug-off` 关闭它。
- **控制台（开发者）：** 打开DevTools → 控制台；您应该看到一条绿色的 `Using Navi+..` 消息。

---

## 下一步

对于Mega Menu和Grid Menu——放置在页面的特定位置——请参见 **[发布您的菜单]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)** 以获取 `[naviwp]` 短代码和Gutenberg块。
