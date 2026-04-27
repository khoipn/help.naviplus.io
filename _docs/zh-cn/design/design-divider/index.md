---
description: 配置 Navi+ 菜单中默认分隔线样式 — 颜色、粗细、类型和宽度。
layout: default
permalink: /zh-cn/docs/design/design-divider/
title: 设计分隔符 — 分隔线
---
# 设计分隔符 — 分隔线

设计 → 分隔符的设置定义所有分隔符的默认外观。

菜单级别样式 — 单个项目可通过编辑项 → 基本信息 → Add Divider 进行覆盖。

## 字段

| 字段 | 描述 | 默认值 |
|---|---|---|
| Divider Color | 线条颜色（hex） | #EEEEEE |
| Divider Size (px) | 线条粗细 | 1px |
| Divider Type | Solid / Dashed / Dotted / Double | Solid |
| Divider Width | Full / Inset / Under text | Full |

Divider Type 和 Divider Width 需要 Business 或 Elite 计划。

## 工作原理

1. 项目启用 Add Divider 时的默认样式。
2. 单项样式覆盖此设置。
3. 如果为空，第 2-3 级继承 Divider Color。

## Divider Width

Full = 项目全宽。Inset = 两侧缩进。Under text = 仅在文本下方。
