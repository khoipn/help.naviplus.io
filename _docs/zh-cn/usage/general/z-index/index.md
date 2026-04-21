---
description: 这是一个常见的问题，但在使用Navi+时非常容易处理。您的网站可能有许多浮动元素——请查看下面的示例以识别它们。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/general/z-index/
title: Z-index
---
# Z-index

这是一个常见的问题，但在使用Navi+时非常容易处理。您的网站可能有许多浮动元素——请查看下面的示例以识别它们。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FL6naWQmaqD1bKTtzaALP%2FHelp.MenuTree.1.3.1b.png?alt=media&#x26;token=0e7dad3b-0395-4f66-9589-2562175e8800" alt=""><figcaption><p>Note: These are the current z-index setups on the Dawn theme (Shopify’s most popular free default theme) at this time.</p></figcaption></figure>

这些浮动元素由它们自己的**z-index值**控制。z-index越高，该元素在显示时的优先级就越高。棘手的部分是，z-index值没有固定的规则。您可以分配任何数字，最高可达2,147,483,647。您使用的每个主题和在您的Shopify商店上运行的每个应用程序都可以为浮动组件分配自己的z-index——通常基于开发者的偏好。当这些元素在您的网站上交互时，它们可能会以意想不到的方式重叠。

{% comment %}hint style="info" {% endcomment %}
让我们来点乐子 :joy:: 仔细看看上面的截图，您会看到——是的，这是一团糟，绝对**没有规则**。您正在查看的网站背后有三位开发者。

构建Dawn主题的开发者为菜单面板选择了z-index为3，为购物车面板选择了1000——完全无关，没有明确的逻辑。

然后是Rivo Loyalty Rewards应用的开发者——一个流行的忠诚度工具——他们选择了z-index为99999999999，可能甚至没有计算他们输入了多少个9。他们唯一的目标是：确保浮动的“奖励”按钮始终位于最上面，无论如何，甚至在您的购物车面板之上。

与此同时，Navi+的开发者谦虚地选择了一个较小的数字——仅为5——因为我们不想过于激进或侵入。那么，您应该怎么做？
{% comment %}endhint{% endcomment %}

**步骤1：** 找到您的Navi+菜单的正确z-index

<details><summary><strong>方法1：询问Navi+支持（</strong>最简单)</summary>
<p>这是最好的和最有效的方法。我们可以为您提供有关关键界面元素的z-index值的信息，例如菜单面板、购物车面板以及您正在使用的任何第三方应用程序，然后推荐最适合您情况的z-index设置。</p>
<p>请随时使用屏幕右下角的聊天框与Navi+支持人员交谈。Navi+正在成长，我们非常重视您的反馈——您的问题帮助我们指导我们构建更好的产品。</p>
<p>我们不是24/7在线——每天只有14小时，基于越南时区。然而，一旦我们看到您的消息，我们会立即回复。</p>
</details>

<details><summary><strong>方法2：使用浏览器的检查模式</strong>（详细，但需要一些技术知识）</summary>
<p>到目前为止，除非您使用检查模式，否则没有更好的方法来自己检查。这种开发者工具在所有现代浏览器中都可用，如Chrome、Firefox、Safari或Edge。右键单击您网站上的任何地方，然后选择<strong>检查</strong>以打开检查模式。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FswowawWsXN01MlvSqqjX%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=470cd65f-0ce8-416a-8749-b9a210f6f08f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOabxqNlZUroNKJQfTKsI%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=2b872306-63e3-4dcf-b89a-f16f162727b4" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FSbR8KCnlOK4nFHhxntTJ%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=64ec8298-196e-4999-99a7-f301e052b5dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FDkVp8u1XnJPTiSKksWAQ%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=641c59d0-9ecf-4ac2-9626-6a1a90cc151f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOgAwr2zm2dapUz9OSGJO%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=493df1eb-fa89-4bf6-806e-bec230ec8e82" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FZN3XAcWn9J8Ifn6AQSjW%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=8de191fd-4b39-4e4d-946b-07bedf55ee52" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcwtXWdRp5QaafcNjLGD5%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=beff473b-cd52-4a72-9657-b54687d99363" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FG7lIvYAGwNMcV4NRQUKI%2FHelp.MenuTree.1.4.10.png?alt=media&#x26;token=2a9db521-805c-4374-bc3b-303e97e8b990" alt=""><figcaption></figcaption></figure>
</details>

<details><summary><strong>方法3：</strong>根据我们的建议尝试和测试（个人经验）</summary>
<p>在大多数情况下，如果您没有使用太多应用程序，z-index问题是很少见的。主要问题通常来自于您的菜单与其他界面元素（如菜单面板或购物车面板）之间的重叠。</p>
<ul>
<li>对于Navi+的粘性菜单，如Tabbar或FAB：我们建议保持z-index较低，约为2或3。这些菜单占用屏幕空间，如果它们覆盖了功能面板（如购物车），会感觉破损或烦人。</li>
<li>对于Navi+的部分菜单，如Mega菜单：如果放置在顶部（在标题中），您可以安全地设置一个非常高的z-index（例如2000000000），以确保下拉子菜单不会被其他组件隐藏。</li>
<li>对于Navi+的网格菜单：z-index没有效果，因为菜单是平面的，没有分层深度。</li>
<li>对于Navi+的滑动菜单：z-index应设置得非常高（例如2000000000），以避免被其他元素隐藏。</li>
</ul>
</details>

**步骤2：** 更新您的Navi+菜单的z-index

<details><summary>如何更新Navi+菜单的z-index？</summary>
<p>选择高级菜单，向下滚动找到Z-index卡片，然后更新z-index，别忘了点击保存以应用更改。</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fh2SfwqpjqjNzZwmbs2yL%2Fz-index%201.1.png?alt=media&#x26;token=47b5f318-d0b3-4f2a-9668-f9e3ed7dab09" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F7np7UDMk5KFGnSvMr8HK%2Fz-index%201.2.png?alt=media&#x26;token=ae4aa403-fbd6-41c9-a16d-861e8cd032bc" alt=""><figcaption></figcaption></figure>
</details>
