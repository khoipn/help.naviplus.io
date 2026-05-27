---
description: 如果您在Shopify上部署您的网站，请在此处安装专用的Shopify应用程序：<https://apps.shopify.com/pronavi-navigation-design> - 它经过优化...
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/
title: 在Wix / Squarespace / 其他平台上发布
---
# 在Wix / Squarespace / 其他平台上发布

> **在WordPress上？** 使用专用的 [Naviplus Menu Builder插件]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress/) 而不是下面的手动嵌入 — 无需编辑主题，通过短代码或Gutenberg块放置网格。

> **在Shopify上？** 安装专用的 [Shopify应用程序](https://apps.shopify.com/pronavi-navigation-design) — 它针对该平台进行了优化，具有内置的发布选项。

此页面涵盖**手动脚本嵌入**方法，这是适合[Wix](https://wix.com/ "Wix")、[Squarespace](https://www.squarespace.com/ "Squarespace")、[Webflow](https://webflow.com/ "Webflow")、[Magento](https://magento-opensource.com/ "Magento")和使用PHP、Node.js或纯HTML构建的自定义网站的正确路径。您有以下实施方法：

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
<p>每个Navi+账户都分配一个唯一的token。您可以直接从应用程序头部查看和复制此token。该token用于安全地发布您的菜单。</p>
</details>

<details><summary>什么是https://live.naviplus.app/start.js？</summary>
<p>这是Navi+的固定URL，包含应用程序的初始化逻辑。该脚本非常轻量（约4KB），可以在大多数设备和网络条件下快速加载。它通过Cloudflare和BunnyCDN提供，以提供稳定的全球性能和与现代浏览器的可靠兼容性。</p>
<p>使用异步加载方法也意味着它不会影响网站的加载过程。</p>
</details>

<details><summary>此嵌入代码会减慢我的网站吗？</summary>
<p>下面的代码极其轻量，可以插入到您的网站中而不会影响速度（首次加载大约需要100-200毫秒，后续加载为0毫秒）、客户体验或SEO评分</p>
</details>

<details><summary>插入此代码片段的最佳位置是什么？</summary>
<p>在<head>部分（或尽可能早）。为什么？网站将按顺序加载资源以呈现界面。将Navi+尽早放入HTML代码中将有助于您的菜单在条件满足时尽快准备好显示，然后菜单将立即出现。这改善了用户体验。</p>
</details>

<details><summary>我如何判断此代码是否已成功嵌入我的网站？</summary>
<p>有两种方法：</p>
<p><strong>方法1（适用于所有人）：</strong></p>
<p>打开您的网站，后缀为#navidebug-on，例如：<a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>。如果网站切换到调试模式，则嵌入正常工作。调试模式帮助您轻松识别CSS选择器。使用#navidebug-off关闭它。</p>
<p><strong>方法2（适用于开发者）：</strong></p>
<p>打开浏览器的检查工具，转到控制台选项卡，查找绿色消息：“使用Navi+..”。此消息表示代码已成功嵌入。</p>
</details>

***

### 2. 使用CSS选择器发布菜单（推荐）

在嵌入上述脚本后，前往Navi+应用程序配置您的菜单在页面上的显示位置和方式。

#### I.1. 理解CSS选择器

CSS选择器是一种定位网页上特定HTML元素的方法。Navi+使用它来准确知道**在哪里**放置您的菜单 — 无论是插入在元素之前还是之后，或完全替换现有元素。

您不需要是开发者即可使用此功能。Navi+提供一个简单的输入字段，您可以在其中输入选择器，系统会处理其余部分。

要找到您网站的正确CSS选择器，您可以使用：
- [调试模式](/docs/usage/debug-mode-find-css-selectors/) — Navi+的内置工具：将鼠标悬停在页面上的任何元素上，立即复制其选择器
- [浏览器开发者工具](/docs/usage/general/find-css-selector/) — 使用浏览器内置检查器的手动方法

#### I.2. 三种发布选项

步骤1：在Navi+应用程序中单击**发布到网站**按钮。

步骤2：打开切换 "通过插入/替换方法发布菜单"。

步骤3：输入您的CSS选择器并选择以下三种发布选项之一。

<details><summary>选项1：插入之前</summary>
<p>在所选元素<strong>之前</strong>立即插入Navi+菜单。</p>
<p><strong>示例：</strong> CSS选择器 <code>main</code> → 网格菜单出现在页面的主要内容区域上方，显示为完整部分。</p>
<p>这是在非Shopify平台上设置网格菜单的最常见方式。</p>
<p>此选项的常见CSS选择器：</p>
<ul>
<li><code>main</code> — 适用于大多数平台（Webflow、Magento、自定义网站）</li>
<li><code>#main</code> — 一些平台和自定义主题</li>
<li><code>.main-content</code> — 各种平台</li>
</ul>
<p>不在此列表中？您可以与Navi+支持人员聊天以获得即时帮助，或使用 <a href="/docs/usage/debug-mode-find-css-selectors/">调试模式</a> 或 <a href="/docs/usage/general/find-css-selector/">浏览器开发者工具</a> 自行查找。</p>
</details>

<details><summary>选项2：插入之后</summary>
<p>在所选元素<strong>之后</strong>立即插入Navi+菜单。</p>
<p><strong>示例：</strong> CSS选择器 <code>header</code> → 网格菜单出现在标题下方。</p>
<p>此选项的常见CSS选择器：</p>
<ul>
<li><code>header</code> — 适用于大多数平台</li>
<li><code>.header-wrapper</code> — 一些平台</li>
<li><code>.site-header</code> — 各种平台</li>
</ul>
<p>不在此列表中？您可以与Navi+支持人员聊天以获得即时帮助，或使用 <a href="/docs/usage/debug-mode-find-css-selectors/">调试模式</a> 或 <a href="/docs/usage/general/find-css-selector/">浏览器开发者工具</a> 自行查找。</p>
</details>

<details><summary>选项3：替换</summary>
<p>完全用Navi+菜单替换所选元素。原始元素被隐藏，Navi+取而代之。</p>
<p>大多数平台没有内置的网格菜单，因此替换模式很少适用于此菜单类型。插入之前 <code>main</code> 是推荐的方法。</p>
<p>如果您的平台确实有一个您想要替换的网格样式导航元素，请使用 <a href="/docs/usage/debug-mode-find-css-selectors/">调试模式</a> 或 <a href="/docs/usage/general/find-css-selector/">浏览器开发者工具</a> 查找其CSS选择器。</p>
</details>

#### I.3. 设备特定定位

您可以通过在选择器后添加后缀来控制CSS选择器是否适用于移动设备、桌面或两者：

| 后缀 | 适用范围 |
|--------|------------|
| `(M)` | 仅适用于移动设备 |
| `(D)` | 仅适用于桌面 |
| *(无)* | 同时适用于移动和桌面 |

**示例：**
- `main(D)` — 仅在桌面上插入
- `main(M)` — 仅在移动设备上插入
- `main` — 同时在两个平台上插入

这在您希望网格菜单仅在某些设备上出现时，或在移动设备与桌面之间需要不同位置时非常有用。

***

### 3. 在您的网站的任何位置插入Navi+菜单

下面的代码可以在网站上多次使用，具有不同的插入信息（特别是**嵌入ID**，例如SF-123456789）。当网站被渲染时，菜单将在代码插入的位置部署并显示，当条件满足时。此菜单类型适用于：Mega menu、Grid等。

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
