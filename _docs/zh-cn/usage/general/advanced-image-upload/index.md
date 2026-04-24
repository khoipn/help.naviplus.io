---
description: 使用较小的图像尺寸可以帮助您的网站加载更快。搜索引擎如Google将页面速度视为一个重要的排名因素，因此优化过的图像可以...
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/general/advanced-image-upload/
title: 高级图像上传
---
# 高级图像上传

#### I. 为什么较小的图像尺寸对SEO和用户体验更好？

使用较小的图像尺寸可以帮助您的网站加载更快。搜索引擎如Google将页面速度视为一个重要的排名因素，因此优化过的图像可以改善您的SEO。

更快的加载速度也使网站对访客来说更加流畅和愉快，尤其是在移动设备或较慢的连接上。这意味着用户更有可能停留在您的网站上并继续浏览您的产品。

#### II. Navi+如何处理您的图像？

Navi+首先以原始大小上传您的图像。然后，它使用优化的算法压缩图像并减少显示大小。这个大小是Navi+精心选择的，既适合用户体验又适合SEO，因为菜单中的图像通常是缩略图或图标，需要小且快速加载。

**注意：** 对于像徽标或图标这样的小图像，Navi+不会压缩它们以保持清晰度。

之后，Navi+将您的图像存储在BunnyCDN上——一个强大的内容分发网络（CDN），用于图像、JavaScript、CSS等。BunnyCDN通过其全球服务器网络提供极快的加载速度。这确保了您的网站可以处理数百万次访问而不会减慢或造成延迟。

#### III. 如果我想保持图像的原始质量，我该怎么办？

在某些特殊情况下，您可能希望Navi+不修改您的图像质量——否则，压缩可能会降低您期望的质量，例如一些重要的产品图像。在这种情况下，您需要直接将图像上传到Shopify，并提供链接给Navi+以保持原始质量。

**步骤1：准备您的图像（手动过程）**\
按需准备您的图像并重命名以进行SEO优化。（Navi+仅在通过Navi+工具上传时才会重命名图像。）\
您还应该将图像压缩到合理的大小——理想情况下为几百KB。您可以在这里使用Shopify的图像调整工具：<https://www.shopify.com/tools/image-resizer>。

**步骤2：上传到Shopify**\
右键单击菜单**内容**，选择**在新标签页中打开链接**，然后转到**文件**。将步骤1中准备的图像拖放到此处。上传后，在列表中找到您的文件并单击链接图标以复制其URL。此URL将在Navi+中用于上传图像。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F35kK3wzf4jQ6lgRuPIK6%2F1.2.png?alt=media&#x26;token=1b45a6ad-32fb-4988-bda2-9de4aaa7db53" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRKyGXqaCHjUzEEI12woQ%2F1.3.png?alt=media&#x26;token=dbdc467c-13b0-4eb7-9786-558c5d1704d2" alt=""><figcaption></figcaption></figure>

**步骤3：在Navi+中使用图像URL**\
使用**上传图像**工具将步骤2中获得的URL粘贴到Navi+中。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FPy9nqxsNKCo4RMjo1cTP%2F1.4.png?alt=media&#x26;token=a0a4897c-5e1c-47d8-951c-52028b705e1e" alt=""><figcaption></figcaption></figure>


---

# 代理指令：查询此文档

如果您需要此页面中未直接提供的额外信息，您可以通过提问动态查询文档。

在当前页面URL上执行HTTP GET请求，使用`ask`查询参数：

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/usage/general/advanced-image-upload.md?ask=<question>
```

问题应具体、自包含，并用自然语言书写。
响应将包含对问题的直接回答以及文档中的相关摘录和来源。

当答案未在当前页面中明确存在时，您需要澄清或额外的上下文，或者您想检索相关文档部分时，请使用此机制。
