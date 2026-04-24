---
description: Navi+ 提供了几个常见的菜单配置选项，在 **"Design"** 标签中，例如背景、排版（字体系列、大小..）和图标/图像...
lang: zh-cn
layout: default
permalink: /zh-cn/docs/frequently-asked-questions/customize-user-interface-ui/using-built-in-settings-or-custom-css/
title: 使用内置设置还是自定义 CSS？
---
# 使用内置设置还是自定义 CSS？

Navi+ 提供了几个常见的菜单配置选项，在 **"Design"** 标签中，例如背景、排版（字体系列、大小..）和图标/图像（大小、间距、曲线...）。通过使用这些设置，您的菜单通常可以被样式化以匹配您网站的整体设计和品牌。

Navi+ 菜单支持最多 3 个级别。在 **"Design"** 标签中，您只能配置 2 个级别的样式，并且没有直接选项来设置第 2 级和第 3 级菜单的字体大小或图标/图像大小。那么您该如何做到呢？

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEeUzjyXb0DDSzsPobpqC%2FCSS%201.0.png?alt=media&#x26;token=ab2b0265-e0cd-4777-964d-285e4d947c64" alt=""><figcaption></figcaption></figure>

#### 使用 CSS 和编码工具进行深度菜单自定义

但是，如果您或您的网站开发人员对 CSS（样式表）有基本的了解，您可以使用 Navi+ 中内置的 "**CSS & Coding"** 工具自定义整个菜单设计，而无需直接编辑您的主题文件。这提供了几个好处：

* 您可以将 Navi+ 菜单的 CSS 配置与您的主题分开。这意味着升级或更改您的主题不会影响您的 Navi+ 菜单。
* Navi+ 使用智能保护机制，通过在每个 CSS 规则的开头自动添加前缀（如 `#SF-123456789`）来保持不同 Navi+ 菜单的 CSS 隔离，最小化样式冲突的风险。
* 如果需要，您仍然可以在 Navi+ 中直接添加影响整个网站的 CSS，尽管这应该谨慎使用，仅在必要时使用。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwIMkFPG3bnaAfvN3fRy4%2FCSS.1.1.png?alt=media&#x26;token=91b34b8a-ae77-4d14-a52d-f30568f8b2c5" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRMPDJmuihVuXKunOmmAZ%2FCSS.1.2.png?alt=media&#x26;token=0ebcac44-dba7-4306-80aa-815323c027b3" alt=""><figcaption></figcaption></figure>

**重要说明：** **内部样式表 / CSS 文本框** 会在每个 CSS 规则之前自动添加前缀（例如，`#SF-123456789`），这确保您的 CSS 仅适用于正在自定义的特定菜单，并防止样式冲突。

#### 使用 CSS 的一些典型案例研究

1) 要配置整个菜单在最高级别的外观，您可以编写一个不是标准 CSS 但非常简单的代码片段。例如，下面的代码片段将菜单背景更改为红色。将以下代码添加到内部样式表 / CSS 文本框：

```
{
    background: red;
}
```

2) 为每个菜单项级别配置大小、排版和颜色。将以下代码添加到内部样式表 / CSS 文本框：

```
// 自定义第 1 级菜单项的文本样式
ul > li.item > .inner .name {
    font-size: 14px;
    color: red;
}

// 自定义第 2 级菜单项的文本样式
ul.children[menulevel="2"] > li.child > .inner .name{
     font-size: 16px; 
     color: blue;
}

// 自定义第 3 级菜单项的文本样式
ul.children[menulevel="3"] > li.child > .inner .name{
     font-size: 13px; 
     color: green;     
}
```

3) 使用 `font-weight.` 更改字体粗细。将以下代码添加到内部样式表 / CSS 文本框：

```
// 设置名称的字体粗细
.name {
  font-weight: 700;
}

// 设置描述的字体粗细
.description {
  font-weight: 700;
}
```

4) 调整箭头的大小。将以下代码添加到内部样式表 / CSS 文本框：

```
ul > li.is-parent-top::after {
  font-size: 24px !important;
}
```
