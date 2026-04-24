---
description: 默认情况下，Navi+ 检查当前页面 URL 以在菜单上显示活动状态（使用灰色背景）。这有助于您的客户更轻松地导航。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state/
title: 移除菜单项活动状态？
---
# 移除菜单项活动状态？

默认情况下，Navi+ 检查当前页面 URL 以在菜单上显示活动状态（使用灰色背景）。这有助于您的客户更轻松地导航。

然而，活动状态并不总是必要的，特别是在宽大的桌面屏幕上，还有其他方式来指示 "where you are," 例如面包屑。有时，您可能希望移除活动状态，以使菜单看起来更干净。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FAQCfjosVopNC9mXDDbII%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=1167aaa9-c22e-4102-9eb9-6e5ee10dc14a" alt=""><figcaption></figcaption></figure>

这里是如何做到的：

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyaI6k6GmW3A5CGipYz1p%2FCSS.1.1.png?alt=media&#x26;token=1ddf87db-9f58-4109-9886-441efd8e8f24" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FXRcp2647QfYG9b0JyS1t%2FCSS.1.2.png?alt=media&#x26;token=742f4ac0-50c1-48ec-bf8f-ccc7d89818cc" alt=""><figcaption></figcaption></figure>

方法 1：如果您只想将其应用于此菜单，CSS 代码如下（将其粘贴到内部样式表 / CSS 框中）：

```
ul li.navi-active {
  background: initial;
}
```

说明：这会向页面添加一个 CSS 规则，如 `#SF-123456789 ul li.navi-active { background: initial; }`，仅应用于此菜单（嵌入 ID `SF-123456789`），而不影响其他菜单。

方法 2：如果您想移除所有 Navi+ 菜单的活动效果，请使用以下代码（将其粘贴到全局样式表 / CSS 框中）：

```
.naviItem ul li.navi-active {
  background: initial;
}
```

---

# 代理说明：查询此文档

如果您需要此页面中未直接提供的额外信息，您可以通过提问动态查询文档。

在当前页面 URL 上执行 HTTP GET 请求，带有 `ask` 查询参数：

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state.md?ask=<question>
```

问题应具体、自包含，并用自然语言书写。
响应将包含对问题的直接回答以及文档中的相关摘录和来源。

当当前页面中没有明确的答案时，您需要澄清或额外的上下文，或者您想检索相关文档部分时，请使用此机制。
