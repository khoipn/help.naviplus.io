---
description: 步骤 1：点击在线商店，然后点击主题。提示：右键点击在线商店并选择“在新标签页中打开链接”以节省时间。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/slide-menu-hamburger-menu/publishing-on-shopify/
title: 在 Shopify 上发布
---
# 在 Shopify 上发布

### 步骤 2：（Shopify）在您的网站上发布菜单。

#### 2.1. 在应用嵌入中打开 Navi+

步骤 1：点击在线商店，然后点击主题。提示：右键点击在线商店并选择“在新标签页中打开链接”以节省时间。&#x20;

步骤 2：选择您想要发布菜单的主题。  点击：**自定义**

* 如果您的网站是新的且尚无用户，请随意发布菜单，无需担心——您可以随时轻松地打开或关闭它，而不会影响访客。
* 如果您的网站已经有常规流量，请更加小心。最佳做法是创建一个**重复主题**，并首先在该版本上测试 Navi+。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

步骤 3：转到应用嵌入，找到“在所有页面上使用 Navi+”，并将其打开。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

步骤 4：别忘了点击“保存”以应用更改。

完成这 4 个步骤后，Navi+ 已经安装在您的网站上并准备显示。然而，过程尚未完成。返回 Navi+ 应用标签以实际打开**发布菜单**。

#### 2.2. 选择显示设置并发布菜单。

步骤 1：点击**发布到网站**按钮。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

步骤 2：打开切换 "发布菜单（仅在用户打开时可见）".&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FhSDziWrg4Jxr9bZ9jB4j%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=3c39339c-fe75-4653-86e7-411318cf506d" alt=""><figcaption></figcaption></figure>

步骤 3：选择显示方法&#x20;

**方法 1：使用语法 open:NaviMenu 从另一个 Navi+ 菜单项打开此菜单**

此方法允许您在用户点击或轻触来自另一个 Navi+ 菜单的菜单项时打开滑动菜单（例如：在选项卡栏、屏幕底角的 FAB 或大菜单中）。此方法的主要目的：

<details><summary>目的 1：通过在滑动菜单中显示完整网站地图来改善可见性和用户体验，同时保持易于访问。</summary>
<p>滑动菜单非常适合展示您的完整网站地图，因为它具有大空间和灵活布局，非常适合展示整个产品目录、关键页面的链接、博客、支持工具等。然而，滑动菜单通常默认情况下可见性较低。为了提高可发现性，您可以使用另一个 Navi+ 菜单（例如选项卡栏）来展示您最重要和最易识别的链接，并放置一个突出显示的菜单项来触发滑动菜单。这确保了滑动菜单的更好可见性和用户参与度。</p>
</details>

<details><summary>目的 2：<strong>无限菜单深度与大型灵活菜单结构（仅限 Navi+）</strong></summary>
<p>您可以在点击菜单项时打开另一个具有三个级别和多种信息展示方式的滑动菜单，而不是显示一个空间有限的弹出窗口。这可以为其他菜单项重复使用——甚至为同一个滑动菜单——允许您为 Navi+ 菜单创建几乎无限的深度。</p>
</details>

**方法 2：当点击或轻触 UI 元素（由 CSS 选择器定义，例如 #id_of_element 或 .class_name）时，将显示此菜单。**

这可以说是使用滑动菜单的最佳和最常用的方法。\在本指南中，我们将重点介绍如何替换移动设备上网站的默认汉堡菜单。\您还可以通过查找和使用其他 CSS 选择器来创造性地应用此方法以触发菜单。

<details><summary>如何用 Navi+ 滑动菜单替换您网站的默认汉堡菜单（<strong>热门指南）？</strong></summary>
<p>在大多数 Shopify 网站上，默认汉堡菜单是通过响应式设计从桌面版本生成的。因此，它通常非常简单，深度较浅，并且缺乏对图标、图像或高级布局的支持。用 Navi+ 滑动菜单替换它是一个常见且实用的选择，以利用 Navi+ 的高级功能。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIB9UqVXh9bL1z4AuHAQj%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=1bef8174-8a59-4765-b2ea-e669c1d12fd6" alt=""><figcaption></figcaption></figure>

<p>要做到这一点，只需识别您网站的汉堡菜单图标的 CSS 选择器并将其输入到文本框中。我们已经为您找到了一些最流行主题的 CSS 选择器，列在下面。</p>
<ol>
<li>一些流行的免费主题的 CSS 选择器.. 来自 Shopify 的 Dawn、Sense、Savor、Horizon..</li>
</ol>
<pre class="codehilite"><code>#Details-menu-drawer-container 
</code></pre>

<ol>
<li>不在此列表中，别担心</li>
</ol>
<pre class="codehilite"><code>- 您可以与 Navi+ 支持人员聊天以获得即时帮助——这只需几分钟即可找到 CSS 选择器。

- 或者，您可以在下一个主题中遵循自助指南（在此主题之后）。
</code></pre>
</details>

<details><summary><strong>如何在您的网站上找到 CSS 选择器？</strong></summary>
<p>您可以与 Navi+ 支持人员聊天以获得即时帮助，而不是自己去做。\然而，（1）这将帮助您理解核心思想，(2) 如果您想自己做，请按照以下说明进行。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fhttps://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### 2.3. 重要！优化滑动菜单速度，添加加载效果，并防止重复菜单

这不是您需要立即修复的事情，但从长远来看，它对 Navi+ 创建的滑动菜单体验很重要。在 Navi+ 完全替换旧滑动菜单之前，主题的原始菜单仍然处于活动状态。在短暂的时刻——大约半秒钟——如果用户加载菜单并快速点击汉堡按钮（这种情况很少见，但仍然可能），旧主题菜单可能会出现并导致视觉故障。

<details><summary>Navi+ 提供了一个简单的解决方案来优化用户体验和速度，如下步骤</summary>
<h4>为什么您需要这样做？难道 Navi+ 还不够快吗？</h4>
<p>Navi+ 非常快。它完全部署在领先的 CDN 上，延迟非常低（约 100 毫秒），可以在不减慢速度的情况下为数百万客户提供服务。</p>
<p>然而，Navi+ 仍然在 Shopify 生态系统内运行。Shopify 有自己的加载规则：</p>
<ol>
<li>Shopify 优先加载自己的资源。</li>
<li>然后 Shopify 加载主题内容。</li>
<li>最后，Shopify 加载应用内容，但没有特定顺序。</li>
</ol>
<p>这意味着如果您使用多个应用，Navi+ 有时可能会比预期加载得更晚。这就是为什么在某些情况下它可能感觉更慢。</p>
<hr />
<h3>我的解决方案是什么？</h3>
<p>目前，Navi+ 在 Shopify 网站上的加载优先级很高。然而，仍然存在一定的延迟。我们将在这里逐一解决这些问题：</p>
<h4>滑动菜单：添加加载效果并锁定触发选择器</h4>
<p>非常简单：只需将您用于滑动菜单的 CSS 选择器输入到 Navi+ 应用的嵌入部分（见下图）。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

<p>注意：</p>
<ul>
<li>如果您希望它仅在移动设备上应用，请添加后缀<strong>(M)</strong>。</li>
<li>如果您希望它仅在桌面上应用，请添加后缀<strong>(D)</strong>。</li>
<li>如果您希望它在两个平台上都适用，请不添加后缀。</li>
</ul>
</details>
