---
description: 一些 Mega 菜单可能非常高。在这种情况下，展开 3 级菜单可能不会留出足够的空间。当这种情况发生时，您应该将 3 级菜单固定在顶部。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/frequently-asked-questions/customize-user-interface-ui/align-level-3-submenu-in-mega-menu/
title: 在 Mega 菜单中对齐 3 级子菜单？
---
# 在 Mega 菜单中对齐 3 级子菜单？

一些 Mega 菜单可能非常高。在这种情况下，展开 3 级菜单可能不会留出足够的空间。当这种情况发生时，您应该将 3 级菜单固定在顶部。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fro68elhDmY0dYZVM33lW%2F1.1.png?alt=media&#x26;token=f8dc87a7-e10d-4ac7-a398-a4b5220ce72c" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FX4M1o8bgaNDF6VYTtini%2F1.2.png?alt=media&#x26;token=e2d65a92-418c-4c4a-bff7-51a5b9044d41" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F2tyR71IfHrMmPmZN0Ewi%2F1.3.png?alt=media&#x26;token=cdd6854c-2782-40ec-a959-a74d576eb177" alt=""><figcaption></figcaption></figure>

将其粘贴到内部样式表 / CSS 框中：

```
ul.children[menulevel="2"] li.child.is-parent.menu-expand {
  position: initial;
}

ul.children[menulevel="2"] li.child.is-parent.menu-expand ul.children[menulevel="3"]{
  top: 0px;
}
```

---

# 代理指令：查询此文档

如果您需要此页面中未直接提供的其他信息，您可以通过提问动态查询文档。

在当前页面 URL 上执行 HTTP GET 请求，使用 `ask` 查询参数：

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/customize-user-interface-ui/align-level-3-submenu-in-mega-menu.md?ask=<question>
```

问题应具体、自包含，并用自然语言书写。
响应将包含对问题的直接回答以及文档中的相关摘录和来源。

当当前页面中未明确存在答案时，您需要澄清或额外上下文，或想要检索相关文档部分时，请使用此机制。
