---
description: 在许多情况下，您需要在网站上使用多个嵌入的应用程序。这可能会造成常见的可用性问题，因为界面元素可能会重叠（见下图）。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/shopify/how-to-other-applications-work-with-naviplus/
title: 防止Navi+菜单与其他应用重叠
---
# 防止Navi+菜单与其他应用重叠

### 为什么这会成为一个问题？

在许多情况下，您需要在网站上使用多个嵌入的应用程序。这可能会造成常见的可用性问题，因为界面元素可能会重叠（见下图）。一个简单的例子是当您经常使用像[Shopify Inbox ](https://www.shopify.com/vn/inbox "Shopify Inbox ")或WhatsApp这样的聊天应用程序时。通常，这些聊天应用程序占据手机屏幕右下角的显著位置。当您决定使用Navi+来显著增强网站的导航时，这个问题就出现了。以下是一些解决此问题的方法。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fdccbwi5aXf4XvOxYGIvU%2FFrame%201.png?alt=media&#x26;token=c953f4d5-442c-486d-9493-90490ffd309f" alt=""><figcaption></figcaption></figure>

### 解决方案1：调整浮动按钮的位置（与Shopify Inbox的演示）

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F13ShtYFy9yreGicTmiOm%2FFrame%202.png?alt=media&#x26;token=13a96b69-4907-4ad5-88b5-b41dcc95c35d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FmYVravYrInpp21SPJuKm%2FFrame%203.png?alt=media&#x26;token=9d4c2fa0-2806-4b19-8dce-c403fc582315" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Feuh272YZES4OjBSMok8s%2FFrame%204.png?alt=media&#x26;token=d6b6f9f8-aa4e-4539-a29c-6ae39cbcd344" alt=""><figcaption></figcaption></figure>

### 解决方案2：设置Navi+菜单的内边距以避免与应用程序重叠。

内边距和外边距是技术中广泛使用且强大的工具，尤其是在HTML5/CSS中。通过根据该区域的位置设置内边距，您可以避免应用程序的重叠。您还可以通过调整外边距设置Navi+菜单与边缘的距离。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fo0hlCj8BSJLa9WBqrLo8%2FFrame%205.png?alt=media&#x26;token=dfe6c2d9-ea6c-4b97-bd55-8ec33ef7d729" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fkj87WVMtDYGKHxPBAK91%2FFrame%206.png?alt=media&#x26;token=ced78c24-1797-422a-9662-45094a5cee12" alt=""><figcaption></figcaption></figure>

### 解决方案3：用顶部栏/支持栏或浮动操作按钮替换底部栏

尽管底部栏是引导用户的最有效工具，几乎所有移动原生应用程序或移动网页（较慢）都在使用，但有时您可能希望将Navi+菜单放置在不同的位置，例如顶部（顶部栏）、右侧/左侧（支持栏）、浮动在界面上方（浮动操作按钮）。或者您可以将它们结合起来以获得最佳的导航效率。查看Navi+的以下选项以了解如何做到这一点，有时只需1秒，您就能解决问题。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FiCuFsYdJSucFduHw9zJO%2FFrame%207.png?alt=media&#x26;token=1be98c44-27c3-489d-9e6d-87e1a95fafb7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FbE4JHbm6ZYI6C3uF0X9j%2FFrame%208.png?alt=media&#x26;token=5c85d3bd-5023-4851-82aa-9288f9294d1c" alt=""><figcaption></figcaption></figure>

### Z-index - 优先显示"浮动应用程序"的顺序

z-index属性指定元素的堆叠顺序。堆叠顺序较大的元素总是在堆叠顺序较小的元素前面。请参见下图以了解更多信息。&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyMHcqutHWOUtEEYqMDn6%2Fz-index1.png?alt=media&#x26;token=fb6a0100-e337-4115-9212-a8c8d32888ef" alt=""><figcaption></figcaption></figure>

Navi+菜单的默认z-index设置为50，因为我们“并不认为自己比其他应用程序更重要”，但50也是在所有Shopify主题上良好显示的足够数字。有时您可能需要在以下情况下调整Navi+菜单的z-index：&#x20;

1. 当您在一页上使用多个Navi+菜单并希望它们重叠，但一个菜单出现在其他菜单之上。&#x20;
2. 当有其他对象/应用程序重叠您的Navi+菜单时，在这种情况下，z-index将解决所有问题。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg93TvrzCEEKdFZvdmdbh%2Fz-index2.png?alt=media&#x26;token=1289e3a7-6ea1-44ec-a284-8964ac4b6f35" alt=""><figcaption></figcaption></figure>

有一个棘手的问题：您应该为Navi+菜单设置什么z-index以避免重叠？如果您有多个Navi+菜单，您可以根据自己的喜好进行排列，而无需担心——这就是我们构建Navi+以尽可能灵活地适应当前Shopify上的“浮动应用程序”的原因。&#x20;

如果您需要为Navi+菜单设置z-index以处理与其他应用程序的冲突，您可以从0到2,147,483,647的最小值中搜索您的z-index。这可能看起来有点困难，但这是最简单和最好的方法，因为z-index不会影响您的界面显示，除了您面临的问题。如果您对CSS和HTML调试有经验——这很简单，只需打开检查模式以查看冲突应用程序的z-index。或者，最简单的方法，直接点击Crisp聊天图标与Navi+顾问聊天；我们很乐意帮助您解决这个问题。
