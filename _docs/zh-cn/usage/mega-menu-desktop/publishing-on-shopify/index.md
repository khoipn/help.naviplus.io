---
description: 步骤 1：点击在线商店，然后点击主题。提示：右键点击在线商店并选择“在新标签页中打开链接”以节省时间。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/mega-menu-desktop/publishing-on-shopify/
title: 在 Shopify 上发布
---
# 在 Shopify 上发布

### 步骤 2：（Shopify）在您的网站上发布菜单。

#### **I) 方法 1：在您网站的特定位置插入（在此菜单之前或之后），或使用 CSS 选择器替换现有菜单。（**&#x52;ECOMMENDED)

#### I.1. 在应用嵌入中打开 Navi+

步骤 1：点击在线商店，然后点击主题。提示：右键点击在线商店并选择“在新标签页中打开链接”以节省时间。

步骤 2：选择您想要发布菜单的主题。  点击：**自定义**

* 如果您的网站是新的且尚无用户，请随意发布菜单，无需担心——您可以随时轻松开启或关闭，而不会影响访客。
* 如果您的网站已经有常规流量，请更加小心。最佳做法是创建一个**重复主题**，并首先在该版本上测试 Navi+。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

步骤 3：转到应用嵌入，找到“在所有页面上使用 Navi+”，并将其打开。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

步骤 4：别忘了点击“保存”以应用更改。

经过这 4 个步骤，Navi+ 已经安装在您的网站上并准备显示。然而，过程尚未完成。返回到 Navi+ 应用标签以实际开启**发布菜单**。

#### I.2. 理解 CSS 选择器

CSS 选择器是一种在您的网页上定位特定 HTML 元素的方法。Navi+ 使用它来准确知道**在哪里**放置您的菜单——无论是插入在元素之前还是之后，或完全替换现有元素。

要找到您网站的正确 CSS 选择器，您可以使用：
- [调试模式](/docs/usage/debug-mode-find-css-selectors/) — Navi+ 的内置工具：悬停在任何元素上并立即复制其选择器
- [浏览器开发者工具](/docs/usage/general/find-css-selector/) — 使用浏览器的检查器的手动方法

<details><summary><strong>如何使用浏览器开发者工具找到 CSS 选择器</strong></summary>
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

步骤 1：点击**发布到网站**按钮。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

步骤 2：开启切换 “通过插入/替换方法发布菜单”。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMKj8nfrhd9jdA3bXSFio%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=dd78fff1-36fb-4ce9-93e5-24d3076c170d" alt=""><figcaption></figcaption></figure>

步骤 3：输入您的 CSS 选择器并选择以下三种发布选项之一。

<details><summary>选项 1：插入之前</summary>
<p>在所选元素<strong>之前</strong>立即插入 Navi+ 菜单。</p>
<p><strong>示例：</strong> CSS 选择器 <code>main</code> → 菜单出现在页面的主要内容区域上方。</p>
<p>Shopify 主题的常见 CSS 选择器（Dawn、Sense、Savor、Horizon）：</p>
<ul>
<li><code>main</code> — 大多数 Shopify 主题</li>
<li><code>#MainContent</code> — Shopify Dawn 主题</li>
</ul>
<p>不在此列表中？与 Navi+ 支持人员聊天，或使用 <a href="/docs/usage/debug-mode-find-css-selectors/">调试模式</a> 或 <a href="/docs/usage/general/find-css-selector/">浏览器开发者工具</a>。</p>
</details>

<details><summary>选项 2：插入之后（桌面 Mega Menu 最常见）</summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F8qcOprJA7RFqTtJUD1PB%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=94ea06fa-2cbe-4fc8-be0b-7c5dd0864f47" alt=""><figcaption></figcaption></figure>
<p>在所选元素<strong>之后</strong>立即插入 Navi+ 菜单。</p>
<p><strong>示例：</strong> CSS 选择器 <code>header</code> → 菜单出现在标题下方。</p>
<p>Shopify 主题的常见 CSS 选择器（Dawn、Sense、Savor、Horizon）：</p>
<ul>
<li><code>header</code> — 大多数 Shopify 主题</li>
<li><code>.header-wrapper</code> — 一些主题</li>
<li><code>.announcement-bar</code> — 将菜单放在公告栏下方</li>
</ul>
<p>不在此列表中？与 Navi+ 支持人员聊天，或使用 <a href="/docs/usage/debug-mode-find-css-selectors/">调试模式</a> 或 <a href="/docs/usage/general/find-css-selector/">浏览器开发者工具</a>。</p>
</details>

<details><summary>选项 3：替换</summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FWnWkPsXB1g3zZl0ejugp%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=ffaa1872-48b5-4092-a499-990a21a3abc3" alt=""><figcaption></figcaption></figure>
<p>完全用 Navi+ 菜单替换所选元素。原始元素被隐藏，Navi+ 取而代之。</p>
<p><strong>示例：</strong> CSS 选择器 <code>.header-menu</code> → 主题的默认导航被您的 Navi+ Mega Menu 替换。</p>
<p>Shopify 主题的常见 CSS 选择器（Dawn、Sense、Savor、Horizon）：</p>
<ul>
<li><code>.header-menu</code> — Shopify Dawn 主题</li>
<li><code>.header__menu</code> — 一些主题</li>
</ul>
<p><strong>注意：</strong>在 Navi+ 加载时，原始菜单可能会短暂闪现。请参见 I.5 以防止这种情况。</p>
<p>不在此列表中？与 Navi+ 支持人员聊天，或使用 <a href="/docs/usage/debug-mode-find-css-selectors/">调试模式</a> 或 <a href="/docs/usage/general/find-css-selector/">浏览器开发者工具</a>。</p>
</details>

#### I.4. 设备特定定位

您可以通过添加后缀来控制 CSS 选择器是否适用于移动设备、桌面或两者：

| 后缀 | 适用对象 |
|--------|------------|
| `(M)` | 仅适用于移动设备 |
| `(D)` | 仅适用于桌面 |
| *(无)* | 同时适用于移动和桌面 |

**示例：** `header(D)` — 仅适用于桌面 · `header(M)` — 仅适用于移动 · `header` — 同时适用于两个平台。

**I.5. 重要！优化 Mega Menu 的速度和用户体验（替换模式）**

当您用一个菜单替换另一个菜单时，Navi+ 会等待旧菜单显示，然后立即用新菜单替换它。尽管这几乎是瞬间发生的，但仍然会有一个短暂的时刻，旧菜单会出现，这可能会让用户感到困惑。

通过此步骤，您可以完全隐藏旧菜单，并显示加载效果。这使得网站感觉更快，并改善用户体验。

<details><summary>Navi+ 提供了一个简单的解决方案来优化用户体验和速度，步骤如下</summary>
<p><strong>为什么需要这样做？难道 Navi+ 不已经很快了吗？</strong></p>
<p>Navi+ 非常快。它完全部署在领先的 CDN 上，延迟非常低（约 100 毫秒），可以在不减速的情况下为数百万客户提供服务。</p>
<p>然而，Navi+ 仍然在 Shopify 生态系统内运行。Shopify 有自己的加载规则：</p>
<ol>
<li>Shopify 优先加载自己的资源。</li>
<li>然后 Shopify 加载主题内容。</li>
<li>最后，Shopify 加载应用内容，但没有特定顺序。</li>
</ol>
<p>这意味着如果您使用多个应用，Navi+ 有时可能会比预期加载得更晚。这就是为什么在某些情况下它会感觉更慢。</p>
<hr />
<h4>我的解决方案是什么？</h4>
<p>目前，Navi+ 在 Shopify 网站上的加载优先级很高。然而，仍然存在一定的延迟。我们将在这里逐一解决这些问题：</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

<p>注意：</p>
<ul>
<li>如果您希望它仅适用于移动设备，请添加后缀<strong>(M)</strong>。</li>
<li>如果您希望它仅适用于桌面，请添加后缀<strong>(D)</strong>。</li>
<li>如果您希望它适用于两个平台，请不添加后缀。</li>
</ul>
</details>

#### **II) 方法 2：将此菜单作为 Shopify 主题中的部分/区块添加**

此方法通过在您的 Shopify 主题中添加区块/部分来插入菜单。这是一种传统方法，因此我不会详细描述。使用此方法，您甚至不需要像方法 1 的步骤 1 中要求的那样**“在应用嵌入中打开 Navi+”**。

复制此菜单的嵌入 ID，然后插入到主题部分中名为 “Navi+ 在部分” 的区块中。您可以在添加后为此部分添加标题、设置全宽并调整边距。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FO2uavUwCekKwBVqvtJrt%2FMargin-padding%201.1.png?alt=media&#x26;token=35261670-ad9b-445f-9730-b10be40e406e" alt=""><figcaption></figcaption></figure>

<details><summary>将此菜单作为 Shopify 主题中的部分/区块添加的指南</summary>
<p>以下是将 Navi+ 菜单作为部分/区块插入到您的 Shopify 主题中的详细指南。此方法允许您以标准的、Shopify 支持的方式添加菜单，尽管它不如 Navi+ 提供的其他方法灵活。</p>
<p>此方法适用于<strong>Mega Menus</strong> 和 <strong>Grid Menus</strong>。它<strong>不适用于</strong> <strong>Tabbar</strong>、<strong>FAB</strong> 或 <strong>Slide Menus</strong>。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcdnKqInMqe14B9NBOTqr%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=dcac5183-9433-4a11-bf2e-6508101ab089" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FF5RAjnmtKv4kXRhIMxaV%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=8eb3748c-16c6-4508-aebe-781d00c2a8d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F1ss5KONiPDSu0AphvToH%2FHelp.MenuTree.1.1.9.png.png?alt=media&#x26;token=395e460a-f275-4642-9a86-41f996ea87f5" alt=""><figcaption></figcaption></figure>
</details>
