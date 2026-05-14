---
description: 如何创建父子嵌套并使用 Tab Slide 将 Navi+ 菜单项组织成多级结构。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/menu-items/multi-level-structure/
title: 多级结构
---
# 多级结构

Navi+ 支持两种方式来组织菜单内容的深度：**父子嵌套**（向左/右拖动以缩进）和 **Tab Slide**（将菜单分成水平切换区域）。您可以使用任一方法或结合两者。

---

## 选项 1 — 父子嵌套（通过拖动缩进）

嵌套将平面列表转换为分级层次结构。父项可以展开以显示其子项。

```
Home                        ← Level 1 (parent)
  Collections               ← Level 2 (child)
    New Arrivals            ← Level 3 (grandchild)
    Sale
  Lookbook
Contact                     ← Level 1 (parent, no children)
```

### 如何做到这一点

**通过拖放**

1. 将鼠标悬停在您想要嵌套的项目上。
2. 向 **右** 拖动 — 它会作为子项嵌入到上面的项目下。
3. 向 **左** 拖动以将其移回父级。

**通过键盘快捷键**

1. 单击项目以选择它。
2. 按 `→`（右箭头）进行缩进 — 该项目成为上面项目的子项。
3. 按 `←`（左箭头）进行缩进 — 该项目向上移动一级。

### 按菜单类型的最大嵌套深度

深度限制取决于 **菜单类型**，而不是计划。

| 菜单类型 | 最大级别 |
|---|:---:|
| 移动网格 | 1（无嵌套） |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> 如果您尝试超出限制进行缩进，编辑器将阻止并显示消息。

---

## 选项 2 — Tab Slide（水平区域）

Tab Slide 将项目分为水平选项卡。每个选项卡显示一组单独的项目，而不是像子项那样向下展开。

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← tab headers
├─────────────────────────────────┤
│  • Collections                  │
│  • New Arrivals                 │  ← content of active tab
│  • Sale                         │
└─────────────────────────────────┘
```

### 如何做到这一点

1. 添加一个新项目，类型为 **Tab Marker**。
2. 设置 Tab Marker 标签 — 这将成为选项卡标题文本（例如 "Shop"）。
3. 在 Tab Marker 下方添加项目 — 它们属于该选项卡的内容区域。
4. 重复：添加下一个 Tab Marker，然后为该选项卡添加项目。

```
[Tab Marker]  "Shop"
  Collections
  New Arrivals
  Sale

[Tab Marker]  "Pages"
  About us
  Contact

[Tab Marker]  "More"
  Blog
  FAQ
```

---

## 使用哪种方法？

| 目标 | 使用 |
|---|---|
| 在父项下显示子类别 | **父子嵌套（选项 1）** |
| 将不相关的部分并排分组 | **Tab Slide（选项 2）** |
| 包含多个类别的许多项目的菜单 | **Tab Slide** |
| 深度钻取导航（类别 → 子类别） | **父子嵌套** |
| 外部选项卡内嵌套项目 | **两者** |

---

## 需要记住的限制

- **Tab Markers 不能嵌套在另一个项目内。** 缩进 Tab Marker 被阻止。
- **选项卡内的项目仍然可以有子项** — 受菜单类型深度限制的约束。
- **移动网格不支持嵌套** — 如果需要分组，请使用 Tab Slide。
- **通过拖动 Tab Marker 向上或向下重新排序选项卡** — 下面的项目会随之移动。
