---
description: 如果您在Shopify上部署您的网站，请在此处安装专用的Shopify应用程序：<https://apps.shopify.com/pronavi-navigation-design> - 它经过优化...
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/
title: 在Wix / Squarespace / 其他平台上发布
---
# 在Wix / Squarespace / 其他平台上发布

> **在WordPress上？** 使用专用的 [Naviplus Menu Builder plugin]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/) 而不是下面的手动嵌入 — 无需主题编辑，无需Tab Bar的短代码。

> **在Shopify上？** 安装专用的 [Shopify app](https://apps.shopify.com/pronavi-navigation-design) — 它针对该平台进行了优化，具有内置的发布选项。

本页面涵盖**手动脚本嵌入**方法，这是适合 [Wix](https://wix.com/ "Wix")、[Squarespace](https://www.squarespace.com/ "Squarespace")、[Webflow](https://webflow.com/ "Webflow")、[Magento](https://magento-opensource.com/ "Magento") 和使用PHP、Node.js或纯HTML构建的自定义网站的正确路径。您有以下实施方法：

### 1. 在您的网站上嵌入Navi+

此实施方法适用于Navi+当前支持的所有菜单类型，包括：Tabbar、Mega menu、Slide menu、FAB和Grid menu。此代码只需使用一次即可适用于所有菜单。

```html
<!-- 将此代码插入到网站的<head>中。 (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- 将此代码插入到网站的<head>中 -->
```

### 常见问题解答（FAQ）

<details><summary>什么是token？</summary>
<p>每个Navi+账户都分配有一个唯一的token。您可以直接从应用程序头部查看和复制此token。该token用于安全地发布您的菜单。</p>
</details>

<details><summary>什么是https://live.naviplus.app/start.js？</summary>
<p>这是Navi+的固定URL，包含应用程序的初始化逻辑。该脚本非常轻量（约4KB），可以在大多数设备和网络条件下快速加载。它通过Cloudflare和BunnyCDN提供，以提供稳定的全球性能和与现代浏览器的可靠兼容性。</p>
<p>使用异步加载方法也意味着它不会影响网站的加载过程。</p>
</details>

<details><summary>此嵌入代码会减慢我的网站速度吗？</summary>
<p>下面的代码极其轻量，可以插入到您的网站中而不会影响速度（首次加载大约需要100-200毫秒，后续加载为0毫秒）、客户体验或SEO评分</p>
</details>

<details><summary>插入此代码片段的最佳位置是什么？</summary>
<p>在<head>部分（或尽可能早）。为什么？网站将按顺序加载资源以呈现界面。将Navi+尽早放入HTML代码中将有助于您的菜单在条件满足时尽快准备好显示，然后菜单将立即出现。这改善了用户体验。</p>
</details>

<details><summary>我如何判断此代码是否已成功嵌入到我的网站中？</summary>
<p>有两种方法：</p>
<p><strong>方法1（适用于所有人）：</strong></p>
<p>打开您的网站，后缀为#navidebug-on，例如：<a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>。如果网站切换到调试模式，则嵌入正常工作。调试模式帮助您轻松识别CSS选择器。使用#navidebug-off可以关闭它。</p>
<p><strong>方法2（适用于开发人员）：</strong></p>
<p>打开浏览器的检查工具，转到控制台选项卡，查找绿色消息：“Using Navi+..”。此消息表示代码已成功嵌入。</p>
</details>

***

### 2. 在您的网站的任何位置插入Navi+菜单

下面的代码可以在网站上多次使用，具有不同的插入信息（特别是**Embeded ID**，例如SF-123456789）。当网站被渲染时，菜单将在代码插入的位置显示，当条件满足时。此菜单类型适用于：Mega menu、Grid等。

```html
<!-- 在菜单SF-123456789出现的地方插入代码。 (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- 在菜单SF-123456789出现的地方插入代码 -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">重要</mark>**:** 上面的代码使用了示例嵌入代码 <mark style="color:orange;">SF-123456789</mark>。确保将其替换为您的实际菜单嵌入代码。
{% comment %}endhint{% endcomment %}
