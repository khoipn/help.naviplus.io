---
description: 您需要使用像TourGuideJS这样的库，这是一个可以嵌入到您的网站中的JavaScript库，以通过属性格式添加逐步的导航指南，例如<div data-tg-tour="<span>我的第一次导览</span>"> ... </div>。它是完全免费的。请按照以下说明通过Navi+菜单添加导航，无论是整个菜单还是单个菜单项。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/development/add-walk-through-to-navi/
title: 添加导航到Navi+
---
# 添加导航到Navi+

您需要使用像TourGuideJS这样的库，这是一个可以嵌入到您的网站中的JavaScript库，以通过属性格式添加逐步的导航指南，例如<div data-tg-tour="<span>我的第一次导览</span>"> ... </div>。它是完全免费的。请按照以下说明通过Navi+菜单添加导航，无论是整个菜单还是单个菜单项。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgmsAKbB1RrFhKxGHHznd%2Fimage.png?alt=media&#x26;token=a24149db-b3ac-456b-810e-3ffb7e0213e4" alt=""><figcaption></figcaption></figure>

```
<!-- Navi+ 插入导览库 --->
<script src="https://unpkg.com/@sjmc11/tourguidejs/dist/tour.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://unpkg.com/@sjmc11/tourguidejs/dist/css/tour.min.css">
 
<script>
  setTimeout(function() {
      const tg = new tourguide.TourGuideClient();
      tg.start();        
  }, 2000);
</script>
<!-- Navi+ 插入导览库 --->
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FZd2WXeOFi673MXis8P5Z%2Fimage.png?alt=media&#x26;token=66b7d8c5-5ece-40ec-87f9-4ef6f33d23b8" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F4T8gzFPxbRyPUMVGOKJc%2Fimage.png?alt=media&#x26;token=cff87c3b-d6e9-4430-8c21-419b7da019f9" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTQ1AYMdEbDyFvme90s9Z%2Fimage.png?alt=media&#x26;token=363f644e-6acd-4112-ae32-9eb9c7a1a81f" alt=""><figcaption></figcaption></figure>


---

# 代理说明：查询此文档

如果您需要此页面中未直接提供的其他信息，您可以通过提问动态查询文档。

在当前页面URL上执行HTTP GET请求，带有`ask`查询参数：

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/development/add-walk-through-to-navi+.md?ask=<question>
```

问题应具体、自包含，并用自然语言书写。
响应将包含对问题的直接回答以及文档中的相关摘录和来源。

当答案未在当前页面中明确存在时，您需要澄清或额外的上下文，或者您想检索相关文档部分时，请使用此机制。
