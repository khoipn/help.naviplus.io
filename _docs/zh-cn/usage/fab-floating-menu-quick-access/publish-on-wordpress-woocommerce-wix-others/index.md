---
description: 如果您在 Shopify 上部署您的网站，请在此处安装专用的 Shopify 应用程序：<https://apps.shopify.com/pronavi-navigation-design> - 它经过优化 ...
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress-woocommerce-wix-others/
title: 在 WordPress / WooCommerce / Wix / 其他平台上发布
---
# 在 WordPress / WooCommerce / Wix / 其他平台上发布

如果您在 Shopify 上部署您的网站，请在此处安装专用的 [Shopify](https://www.shopify.com/ "Shopify") 应用程序：<https://apps.shopify.com/pronavi-navigation-design> - 它经过优化以适应该平台，允许稳定部署并提供许多有用的内置选项。

如果您在其他平台上部署您的网站（例如 [WordPress](https://wordpress.org/ "WordPress"), [WooCommerce](https://woocommerce.com/ "WooCommerce"), [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), 以及使用 PHP、Node.js 或纯 HTML 构建的自定义网站..)，您可以使用以下实施方法：

### 1. 在您的网站上嵌入 Navi+

此实施方法适用于 Navi+ 当前支持的所有菜单类型，包括：Tabbar、Mega menu、Slide menu、FAB 和 Grid menu。此代码只需使用一次即可适用于所有菜单。

```html
<!-- 将此代码插入到网站的 <head> 中。 (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- 将此代码插入到网站的 <head> 中 -->
```

### 常见问题解答 (FAQ)

<details><summary>什么是 token？</summary>
<p>每个 Navi+ 账户都会分配一个唯一的 token。您可以直接从应用程序头部查看和复制此 token。该 token 用于安全地发布您的菜单。</p>
</details>

<details><summary>什么是 https://live.naviplus.app/start.js？</summary>
<p>这是 Navi+ 的固定 URL，包含应用程序的初始化逻辑。该脚本非常轻量（约 4KB），可以在大多数设备和网络条件下快速加载。它通过 Cloudflare 和 BunnyCDN 提供稳定的全球性能，并与现代浏览器可靠兼容。</p>
<p>使用异步加载方法也意味着它不会影响网站的加载过程。</p>
</details>

<details><summary>此嵌入代码会减慢我的网站吗？</summary>
<p>下面的代码极其轻量，可以插入到您的网站中而不会影响速度（首次加载大约需要 100-200 毫秒，后续加载为 0 毫秒）、客户体验或 SEO 分数</p>
</details>

<details><summary>插入此代码片段的最佳位置是什么？</summary>
<p>在头部部分（或尽早）。为什么？网站将按顺序加载资源以呈现界面。将 Navi+ 尽早放入 HTML 代码中将有助于您的菜单在条件满足时尽快准备好显示，然后菜单将立即出现。这改善了用户体验。</p>
</details>

<details><summary>我如何判断此代码是否已成功嵌入我的网站？</summary>
<p>有两种方法：</p>
<p><strong>方法 1（适用于所有人）：</strong></p>
<p>打开您的网站，后缀为 #navidebug-on，例如：<a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>。如果网站切换到调试模式，则嵌入正常工作。调试模式帮助您轻松识别 CSS 选择器。使用 #navidebug-off 关闭它。</p>
<p><strong>方法 2（适用于开发者）：</strong></p>
<p>打开浏览器的检查工具，转到控制台选项卡，查找绿色消息：“使用 Navi+..”。此消息表示代码已成功嵌入。</p>
</details>

***

### 2. 在您的网站的任何位置插入 Navi+ 菜单

下面的代码可以在网站上多次使用，具有不同的插入信息（特别是 **Embeded ID**，例如 SF-123456789）。当网站被渲染时，菜单将在代码插入的位置部署并显示，当条件满足时。此菜单类型适用于：Mega menu、Grid 等。

```html
<!-- 在菜单 SF-123456789 出现的位置插入代码。 (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- 在菜单 SF-123456789 出现的位置插入代码 -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">重要</mark>**:** 上面的代码使用了示例嵌入代码 <mark style="color:orange;">SF-123456789</mark>。确保将其替换为您的实际菜单嵌入代码。
{% comment %}endhint{% endcomment %}
