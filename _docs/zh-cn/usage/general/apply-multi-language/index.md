---
description: Navi+ 完全支持多语言，分为两个部分：
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/general/apply-multi-language/
title: 应用多语言
---
# 应用多语言

Navi+ 完全支持多语言，分为两个部分：

**1) 使用语法自动显示正确的语言。**

例如，想象一下您在网站上显示的 Navi+ Tabbar 有 3 种语言：英语（默认）、法语和越南语。法语的短代码是 `fr`，越南语的短代码是 `vi`。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F6k6V0wCgNOrg7o30S7PT%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=5eb3293f-9f55-4917-87e1-dacff684ca9e" alt=""><figcaption></figcaption></figure>

要以正确的语言显示菜单项 **Home**，请使用以下语法：

```
Home <fr: Maison> <vi: Trang chủ>
```

当您的 Tabbar 显示时，Navi+ 将自动检查当前语言。

* 如果默认语言是英语，它显示 **Home**。
* 如果选择法语，它显示 **Maison**。
* 如果选择越南语，它显示 **Trang chủ**。

这适用于 **description** 和 **link-to** 字段。

2) 在 Navi+ 中创建语言切换菜单

Navi+ 支持一种特殊语法，让您可以直接从菜单项切换语言。

* **步骤 1：**（可选）如果需要，可以添加国旗图标。您可以从像 [Flaticon](https://www.flaticon.com "Flaticon") 这样的网站下载国旗图标（例如：<https://www.flaticon.com/authors/flags/rectangular?author_id=1&type=standard>）。
* **步骤 2：** 使用以下语法切换语言：

```
open:ChangeLanguage(fr)
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FdTn5Nk2ETEUXO7unkIu9%2FHelp.MenuTree.1.1.2-1.png?alt=media&#x26;token=e1f13362-de09-4438-ad5a-a075a9750b7d" alt=""><figcaption></figcaption></figure>

---

# 代理指令：查询此文档

如果您需要此页面中未直接提供的额外信息，可以通过提问动态查询文档。

在当前页面 URL 上执行 HTTP GET 请求，带上 `ask` 查询参数：

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/usage/general/apply-multi-language.md?ask=<question>
```

问题应具体、自包含，并用自然语言书写。
响应将包含对问题的直接回答以及文档中的相关摘录和来源。

当答案未在当前页面明确存在时，您需要澄清或额外上下文，或想要检索相关文档部分时，请使用此机制。
