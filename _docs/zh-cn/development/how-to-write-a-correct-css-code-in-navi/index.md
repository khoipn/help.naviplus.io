---
description: CSS是当您需要为Navi+进行深度自定义时解决每个问题的关键。几乎所有Navi+上的界面问题都可以通过CSS代码解决。在Navi+中，有2个CSS级别：
lang: zh-cn
layout: default
permalink: /zh-cn/docs/development/how-to-write-a-correct-css-code-in-navi/
title: 如何在Navi+中编写正确的CSS代码
---
# 如何在Navi+中编写正确的CSS代码

CSS是当您需要为Navi+进行深度自定义时解决每个问题的关键。几乎所有Navi+上的界面问题都可以通过CSS代码解决。在Navi+中，有2个CSS级别：

### 级别1：内部样式表 / CSS (#SF-123456789)

这是在大多数情况下推荐使用的级别。当您在此框中编写代码时，系统会自动在CSS标签的开头添加一个前缀，即#SF-123456789（这是您的菜单ID）。这将确保与所有其他界面组件没有冲突。

请查看下面此框中编译CSS之前和之后的示例

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

### 级别2：全局样式表 / CSS

除非您有CSS经验，否则请避免滥用此框，因为所有内容将以您编写CSS代码的形式直接推出，而没有任何冲突保护层。
