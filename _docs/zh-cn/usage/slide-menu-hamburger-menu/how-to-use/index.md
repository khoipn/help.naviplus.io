---
description: '**滑动菜单**—也称为汉堡菜单、侧边菜单或抽屉菜单—通常通过将桌面菜单适配为移动端菜单而在 Shopify 网站上使用。典型...'
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/slide-menu-hamburger-menu/how-to-use/
title: 如何使用？
---
# 如何使用？

**滑动菜单**—也称为汉堡菜单、侧边菜单或抽屉菜单—通常通过将桌面菜单适配为移动端菜单而在 Shopify 网站上使用。典型情况下，这个默认菜单很简单，没有图像或高级布局。Navi+ 提供了一个完整的替代方案来替换这个基本的默认菜单。

**主要好处：**

* 完全替代 Shopify 的简单默认菜单
* 提供多种展示风格，带有 **图像**、**网格** 和 **多级** 布局，提供丰富、专业的体验
* 在移动端和桌面端无缝工作，提供一致的体验

**常见问题：**

<details><summary><strong>1. 我还没有决定是使用免费版还是付费版。我可以试用专业菜单模板吗？</strong></summary>
<p>当然可以！菜单组主要是为了帮助初学者避免被 Navi+ 中的高级功能所淹没 😄。最好的方法是试用专业菜单，以探索所有功能和布局选项。之后，您可以简单地删除任何不需要或觉得不合适的菜单。</p>
</details>

<details><summary><strong>2. 在这里创建菜单会立即在我的网站上显示吗？</strong></summary>
<p>还不行。您需要<strong>发布</strong>正确的菜单才能在您的网站上显示。别担心——这很简单！</p>
</details>

<details><summary><strong>3. 如果我选择了错误的模板或犯了错误怎么办？</strong></summary>
<p>完全没问题。您可以随时删除它并创建一个新的。如果您正在测试一个菜单并想尝试另一个模板，您可以<strong>保存</strong>当前的菜单作为备份文件，稍后再重新打开。您甚至可以<strong>复制和粘贴</strong>菜单之间的部分（通过打开两个浏览器标签）以保留之前的工作。随意尝试！</p>
</details>

<details><summary><strong>4. 我应该只创建一个菜单还是多个菜单？</strong></summary>
<p>您应该创建<strong>多个菜单</strong>。只有<strong>活动</strong>菜单会显示在您的网站上，但您可以准备多个版本——通过选择不同的模板或克隆菜单。菜单可以根据页面类型（主页、产品、集合...）、设备（移动或桌面）或 URL 关键字进行配置以显示/隐藏。因此，请继续构建适合每种情况的菜单！</p>
</details>

### 第一步：编辑菜单树

#### 1.1. 理解菜单树

**菜单树**是任何菜单中最重要的部分——它定义了结构。

以下是滑动菜单的菜单树示例：

```
滑动横幅  
今日特惠
目录  
全山  
   - 巡航灵活  
   - 平衡骑行
   - 其他全山
        - 三级菜单项
自由式  
   - 公园板  
   - 滑板  
其他产品  
博客  
更多...  
```

这是一个三级菜单树。第一级包括 **滑动横幅**、**今日特惠**、**目录 + 全山 + 自由式 + 其他产品**、**博客** 和 **更多..**。目录将作为组名。**全山**也是一个一级菜单项，具有三个二级子菜单：**巡航灵活**、**平衡骑行** 和 **其他全山**。&#x20;

您将花费大部分时间来构建此菜单树，以帮助客户找到他们所寻找的内容。&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FiLkKHBvckAjUmgqjoEyu%2FHelp.MenuTree.1.1.0.png?alt=media&#x26;token=63628235-a03f-47b8-b0dc-eb27512ac21e" alt="目录：一个一级菜单项，显示为选项卡上的标签。全山：当您点击目录时出现的二级菜单项。"><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FnNyXxyermApo9zO1eTgy%2FHelp.MenuTree.1.1.1.png?alt=media&#x26;token=0cd15617-75b0-469d-9170-f10158b85a07" alt="巡航灵活、平衡骑行：当您点击全山时出现的三级菜单项。"><figcaption></figcaption></figure>

#### 1.2. 与菜单树的基本交互

您可以拖放菜单项上下或左右以更改它们在菜单树中的位置和父子关系。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fdexnk8WyoGnydVqI6TJ9%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=ae89e32d-4d3b-46e7-bb27-0ca69082b93e" alt=""><figcaption></figcaption></figure>

当您将鼠标悬停在任何菜单项上时，您将看到其他选项：编辑该项的详细信息、将其从菜单树中删除或在其他地方复制和粘贴。

{% comment %}hint style="info" {% endcomment %}
**提示：** 您可以通过在两个浏览器标签中打开 Navi+ 应用程序，从一个菜单复制菜单项到另一个菜单。
{% comment %}endhint{% endcomment %}

#### 1.3. 重要！删除示例菜单项，仅保留您想要的结构。

这是在使用 Navi+ 创建菜单时的常见情况。当您创建一个新菜单时，我们会包含一个完整的示例，带有流行的菜单项，以展示布局想法并让您根据需要复制/粘贴。然而，如果您是 Navi+ 的新用户并使用 Starter 计划，您会看到许多红色 (i) 警告，表示某些功能不可用，例如上传图像或使用高级交互。

如果您喜欢这些高级功能，请考虑升级到 Business 或 Elite 计划。但如果您想继续使用 Starter 计划，请找到并删除带有红色 (i) 警告的菜单项。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg2kAhlxANcsXQT6RPrH9%2FHelp.MenuTree.1.1.3.png?alt=media&#x26;token=da8a7362-0017-43f8-865b-dbdd23803d9a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fpstdwu2GBy4wymYsInJe%2FHelp.MenuTree.1.1.3b.png?alt=media&#x26;token=8a2ebfc9-2cbc-4efb-a1b4-fec1fd621ec8" alt=""><figcaption></figcaption></figure>

{% comment %}hint style="info" {% endcomment %}
**重要提示：** 当删除确认出现时，打开“下次不再询问”以更快删除。
{% comment %}endhint{% endcomment %}

#### 1.4. 向菜单树添加菜单项

要添加菜单项，您有两个选项：

**选项 1&#x20;**<mark style="background-color:$warning;">**（如果您是 Navi+ 新手，不推荐）**</mark>**：** 点击“添加菜单”以在菜单树的末尾插入一个空白菜单项。此方法需要对菜单项设置有良好的理解，我们将在下面介绍。起初可能会感到不知所措，因此您可以稍后再探索。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FP8GKAiPpBlFdnzEM0TiI%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=5b87d791-686b-4768-b7dd-d17ff95841c4" alt=""><figcaption></figcaption></figure>

**选项 2（推荐）：** 我们已经为您准备了许多设计良好的菜单项模板。只需将它们复制并粘贴到正确的位置。完成菜单树后，只需删除未使用的模板。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FjBJUHMA8dTOONOJoOt8S%2FHelp.MenuTree.1.1.5.png?alt=media&#x26;token=e6316df1-e99a-4259-8370-5fc3afaf331a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FChui5Q4pxEpW1cDVoE3E%2FHelp.MenuTree.1.1.5b.png?alt=media&#x26;token=9e29309f-3177-4d89-ac38-d319bba7a541" alt=""><figcaption></figcaption></figure>
