---
description: CSS 是您在需要为 Navi+ 深度自定义时解决每个问题的关键。几乎所有 Navi+ 上的界面问题都可以通过 CSS 代码解决。在 Navi+ 中，有 2 个 CSS 级别：
lang: zh-cn
layout: default
permalink: /zh-cn/docs/development/how-to-write-a-correct-css-code-in-navi/
title: 如何在 Navi+ 中编写正确的 CSS 代码
---
# 如何在 Navi+ 中编写正确的 CSS 代码

CSS 是您在需要为 Navi+ 深度自定义时解决每个问题的关键。几乎所有 Navi+ 上的界面问题都可以通过 CSS 代码解决。在 Navi+ 中，有 2 个 CSS 级别：

### 级别 1：内部样式表 / CSS (#SF-123456789)

这是在大多数情况下推荐使用的级别。当您在此框中编写代码时，系统会自动将前缀 #SF-123456789（即您的菜单 ID）添加到 CSS 标签的开头。这将确保与所有其他界面组件没有冲突。

请查看下面此框中编译 CSS 之前和之后的示例

```css
// Your CSS code
{
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   {
      margin-bottom: 164px;
   }
}
```

```css
// The CSS code after being compiled

#SF-123456789 {
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   #SF-123456789 {
      margin-bottom: 164px;
   }
}

```

### 级别 2：全局样式表 / CSS

除非您有 CSS 经验，否则请避免滥用此框，因为您编写的 CSS 代码将直接以您编写的形式推出，而没有任何冲突保护层。
