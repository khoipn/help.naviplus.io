---
description: 步骤 1：点击在线商店，然后点击主题。提示：右键点击在线商店并选择 "在新标签页中打开" 以节省时间。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/grid-menu/publishing-on-shopify/
title: 在 Shopify 上发布
---
# 在 Shopify 上发布

### 步骤 2：（Shopify）在您的网站上发布菜单。

#### **I) 方法 1：在您网站的特定位置插入（在此菜单之前或之后），或使用 CSS 选择器替换现有菜单。（**&#x52;ECOMMENDED)

#### I.1. 在应用嵌入中打开 Navi+

步骤 1：点击在线商店，然后点击主题。提示：右键点击在线商店并选择 "在新标签页中打开" 以节省时间。

步骤 2：选择您想要发布菜单的主题。点击：**自定义**

* 如果您的网站是新的且尚无用户，请随意发布菜单，无需担心——您可以随时轻松地打开或关闭它，而不会影响访客。
* 如果您的网站已经有常规流量，请更加小心。最佳实践是创建一个**重复主题**，并首先在该版本上测试 Navi+。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

步骤 3：转到应用嵌入，找到 "Navi+ 在所有页面"，并将其打开。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

步骤 4：别忘了点击 "保存" 以应用更改。

经过这 4 个步骤，Navi+ 已经安装在您的网站上并准备显示。然而，过程尚未完成。返回到 Navi+ 应用标签以实际打开 **发布菜单**。

#### I.2. 理解 CSS 选择器

CSS 选择器是一种在您的网页上定位特定 HTML 元素的方法。Navi+ 使用它来准确知道 **在哪里** 放置您的菜单——无论是插入在元素之前还是之后，或完全替换现有元素。

要找到适合您网站的正确 CSS 选择器，您可以使用：
- [调试模式](/docs/usage/debug-mode-find-css-selectors/) — Navi+ 的内置工具：悬停在任何元素上并立即复制其选择器
- [浏览器开发工具](/docs/usage/general/find-css-selector/) — 使用浏览器的检查器的手动方法

<details><summary><strong>如何使用浏览器开发工具找到 CSS 选择器</strong></summary>
<p>您可以与 Navi+ 支持人员聊天以获得即时帮助，而无需自己操作。然而，如果您想自己操作，请按照下面的截图进行。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### I.3. 三种发布选项

步骤 1：点击 **发布到网站** 按钮。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

步骤 2：打开切换 "通过插入/替换方法发布菜单"。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMKj8nfrhd9jdA3bXSFio%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=dd78fff1-36fb-4ce9-93e5-24d3076c170d" alt=""><figcaption></figcaption></figure>

步骤 3：输入您的 CSS 选择器并选择以下三种发布选项之一。

<details><summary>选项 1：插入之前（最常见于网格菜单）</summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FFdsoRiQZP0I26RofqljL%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=51fec431-31e7-4bce-8c22-50a84664ee65" alt=""><figcaption></figcaption></figure>
<p>在所选元素<strong>之前</strong>立即插入 Navi+ 菜单。</p>
<p><strong>示例：</strong> CSS 选择器 <code>main</code> → 网格菜单出现在页面的主要内容区域上方。</p>
<p>适用于 Shopify 主题的常见 CSS 选择器（Dawn、Sense、Savor、Horizon）：</p>
<ul>
<li><code>main</code> — 大多数 Shopify 主题</li>
<li><code>#MainContent</code> — Shopify Dawn 主题</li>
</ul>
<p>不在此列表中？与 Navi+ 支持人员聊天，或使用 <a href="/docs/usage/debug-mode-find-css-selectors/">调试模式</a> 或 <a href="/docs/usage/general/find-css-selector/">浏览器开发工具</a>。</p>
</details>

<details><summary>选项 2：插入之后</summary>
<p>在所选元素<strong>之后</strong>立即插入 Navi+ 菜单。</p>
<p><strong>示例：</strong> CSS 选择器 <code>header</code> → 网格菜单出现在标题下方。</p>
<p>适用于 Shopify 主题的常见 CSS 选择器（Dawn、Sense、Savor、Horizon）：</p>
<ul>
<li><code>header</code> — 大多数 Shopify 主题</li>
<li><code>.header-wrapper</code> — 一些主题</li>
</ul>
<p>不在此列表中？与 Navi+ 支持人员聊天，或使用 <a href="/docs/usage/debug-mode-find-css-selectors/">调试模式</a> 或 <a href="/docs/usage/general/find-css-selector/">浏览器开发工具</a>。</p>
</details>

<details><summary>选项 3：替换</summary>
<p>在大多数 Shopify 商店中，没有内置的网格菜单元素可以替换。推荐的方法是插入之前 <code>main</code>。</p>
<p>如果您的主题确实有您想要替换的网格样式元素，请使用 <a href="/docs/usage/debug-mode-find-css-selectors/">调试模式</a> 或 <a href="/docs/usage/general/find-css-selector/">浏览器开发工具</a> 找到其选择器。</p>
</details>

#### I.4. 设备特定定位

您可以通过添加后缀来控制 CSS 选择器是否适用于移动设备、桌面或两者：

| 后缀 | 适用对象 |
|--------|------------|
| `(M)` | 仅移动 |
| `(D)` | 仅桌面 |
| *(无)* | 移动和桌面均适用 |

**示例：** `main(D)` — 仅桌面 · `main(M)` — 仅移动 · `main` — 两个平台均适用。


#### **II) 方法 2：将此菜单作为 Shopify 主题中的部分/区块添加**

此方法通过在您的 Shopify 主题中添加区块/部分来插入菜单。这是一种传统方法，因此我不会详细描述。使用此方法，您甚至不需要 **"在应用嵌入中打开 Navi+"**，如方法 1 的步骤 1 中所要求的。

复制此菜单的嵌入 ID，然后插入到主题部分中名为 "Navi+ 在部分" 的区块中。您可以在添加后为此部分添加标题、设置全宽并调整边距。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FO2uavUwCekKwBVqvtJrt%2FMargin-padding%201.1.png?alt=media&#x26;token=35261670-ad9b-445f-9730-b10be40e406e" alt=""><figcaption></figcaption></figure>

<details><summary>在 Shopify 主题中将此菜单作为部分/区块添加的指南</summary>
<p>以下是将 Navi+ 菜单作为部分/区块插入到您的 Shopify 主题中的详细指南。此方法允许您以标准的、Shopify 支持的方式添加菜单，尽管它不如 Navi+ 提供的其他方法灵活。</p>
<p>此方法适用于 <strong>Mega Menus</strong> 和 <strong>Grid Menus</strong>。它 <strong>不适用于</strong> <strong>Tabbar</strong>、<strong>FAB</strong> 或 <strong>Slide Menus</strong>。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcdnKqInMqe14B9NBOTqr%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=dcac5183-9433-4a11-bf2e-6508101ab089" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FF5RAjnmtKv4kXRhIMxaV%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=8eb3748c-16c6-4508-aebe-781d00c2a8d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F1ss5KONiPDSu0AphvToH%2FHelp.MenuTree.1.1.9.png.png?alt=media&#x26;token=395e460a-f275-4642-9a86-41f996ea87f5" alt=""><figcaption></figcaption></figure>
</details>
