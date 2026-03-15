---
description: Navi+中的网格菜单采用移动优先的设计理念。这意味着您首先在移动设备上配置和优化菜单，桌面版本将...
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/grid-menu/responsive-grid-menu/
title: 响应式网格菜单
---
# 响应式网格菜单

Navi+中的网格菜单采用移动优先的设计理念。这意味着您首先在移动设备上配置和优化菜单，桌面版本将自动从移动布局缩放，而不是从头开始重建。

网格菜单通常用于突出关键功能或重要类别，通常包含8到12个项目。在移动设备上，网格通常以2到3行显示，每行4到5个项目。为此，您可以使用宽度布局设置，例如3/12或2/10，以控制网格在较小屏幕上的适配。

在桌面上，可用的屏幕宽度要大得多（通常相当于2-3个移动屏幕）。如果网格每行仍然只显示4-5个项目，可能会显得过于稀疏。为了解决这个问题，Navi+提供了桌面/移动显示比例设置。例如，当您设置为2倍比例时，桌面每行显示的项目数量将是移动的两倍，从而每行显示8-10个项目，这在大屏幕上创建了更平衡的布局。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FA6MgTCEXSI8uDmWWPORM%2FGrid%201.2.webp?alt=media&#x26;token=5e73f11c-ec1f-4b66-96e5-7c48075352c4" alt=""><figcaption></figcaption></figure>

在移动设备上，网格菜单可以以两种方式显示。第一种选项是全宽，网格填满整个屏幕宽度，使项目易于查看和点击。第二种选项是水平可滚动的网格，项目大小保持固定，用户可以左右滑动以浏览更多内容。这两种选项在移动设备上都能很好地工作，您可以选择最适合您的内容和用例的选项。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FxAbzVsmAmdlzwSWu0cao%2FGrid%201.1.webp?alt=media&#x26;token=631c706b-7041-4a4f-8c04-0fbfcae6a6f5" alt=""><figcaption></figcaption></figure>

在桌面上，滑动手势并不常见，因此网格菜单以固定的100%宽度显示。通过将桌面/移动显示比例与特定设备的大小设置相结合（使用格式8 | 16，表示移动上为8，桌面上为16），您可以确保网格在较大屏幕上看起来清晰、充实且比例良好。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FB2co4DVahpG0xfxrHG7Y%2FGrid%201.3.webp?alt=media&#x26;token=c6b2b6fd-1e34-4e66-975f-4a2ec9388ffa" alt=""><figcaption></figcaption></figure>

这种方法使您的网格菜单在移动和桌面上保持一致，易于管理，简单更新——无需维护两个独立的菜单系统。您只需在移动设备上设计一次网格菜单，Navi+会处理其余的工作。
