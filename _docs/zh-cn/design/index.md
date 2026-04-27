---
description: 通过分层设计系统控制 Navi+ 菜单的外观 — 颜色、字体、间距、背景和图标。
layout: default
permalink: /zh-cn/docs/design/
title: 设计
---
# 设计

**设计**部分控制菜单的整体外观：颜色、排版、间距、背景和图标。此处的设置使用三级继承系统应用于**整个菜单**。

## 主题

| # | 主题 | |
|---|---|---|
| 1 | 继承系统与覆盖机制（请先阅读） | [设计概述](/zh-cn/docs/design/design-overview/) |
| 2 | 第 1 级 — 主菜单项的外观 | [设计第 1 级](/zh-cn/docs/design/design-level1/) |
| 3 | 第 2-3 级 — 子菜单的外观 | [设计第 2-3 级](/zh-cn/docs/design/design-level2/) |
| 4 | 分隔符 — 分隔线 | [设计分隔符](/zh-cn/docs/design/design-divider/) |

## 快速参考

```
全局默认值（硬编码）
    ↓
第 1 级  — 应用于所有顶级菜单项
    ↓  （为空时第 2-3 级继承）
第 2-3 级 — 应用于子菜单 / 下拉菜单
    ↓  （覆盖所有内容）
单项 — 编辑项中的单个项设置
```

规则：空 = 继承上级。设置值 = 覆盖。
