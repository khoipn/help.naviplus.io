---
description: Navi+ 非常快。它完全部署在一个领先的 CDN 上，延迟非常低（约 100 毫秒），可以在不减慢速度的情况下为数百万客户提供服务。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-speed-and-improve-the-user-experience-ux/
title: 优化速度并改善用户体验（UX）。
---
# 优化速度并改善用户体验（UX）。

#### 为什么需要这样做？Navi+ 不已经很快了吗？

Navi+ 非常快。它完全部署在一个领先的 CDN 上，延迟非常低（约 100 毫秒），可以在不减慢速度的情况下为数百万客户提供服务。

然而，Navi+ 仍然在 Shopify 生态系统内运行。Shopify 有自己的加载规则：

1. Shopify 优先加载自己的资源。
2. 然后 Shopify 加载主题内容。
3. 最后，Shopify 加载应用内容，但没有特定的顺序。

这意味着如果您使用多个应用，Navi+ 有时可能会比预期加载得更晚。这就是为什么在某些情况下它会感觉更慢。

***

### 我的解决方案是什么？

目前，Navi+ 在 Shopify 网站加载时具有高优先级。然而，仍然存在一定的延迟。我们将在这里逐一解决这些问题：

#### Slide Menu：添加加载效果并锁定触发选择器

非常简单：只需将您用于 Slide Menu 的 CSS 选择器输入到 Navi+ 应用的嵌入部分（见下图）。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

#### Mega Menu（替换模式）：添加加载效果并锁定触发选择器

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

注意：

* 如果您希望它仅在移动设备上应用，请添加后缀 **(M)**。
* 如果您希望它仅在桌面上应用，请添加后缀 **(D)**。
* 如果您希望它在两个平台上都应用，请不添加后缀。

---

# 代理指令：查询此文档

如果您需要此页面中未直接提供的额外信息，您可以通过提问动态查询文档。

在当前页面 URL 上执行 HTTP GET 请求，使用 `ask` 查询参数：

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-speed-and-improve-the-user-experience-ux-..md?ask=<question>
```

问题应具体、自包含，并用自然语言书写。
响应将包含对问题的直接回答以及文档中的相关摘录和来源。

当答案在当前页面中未明确存在时，您需要澄清或额外的上下文，或想要检索相关文档部分时，请使用此机制。
