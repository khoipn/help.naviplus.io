---
description: 配置子菜单外观，对所有空字段自动从第 1 级继承。
layout: default
permalink: /zh-cn/docs/design/design-level2/
title: 设计第 2-3 级 — 子菜单项
---
# 设计第 2-3 级 — 子菜单项

设计 → 第 2-3 级的设置应用于子菜单。空字段 = 从第 1 级继承。

规则：仅在希望子菜单与主菜单外观不同时才填写。

## 文本样式（为空时从第 1 级继承）

Text Color、Font Size、Font Weight、Text Transform、Font Family、Description Color、Description Size

## 图标 / 图片样式（为空时从第 1 级继承）

Icon Color、Icon Size、Space Text-Icon、Image Radius

## 间距

| 字段 | 描述 |
|---|---|
| Item Padding (px) | 不继承 — 使用主题默认值 |
| Item Margin (px) | 外部间距 |
| Min Height (px) | 最小高度 |

## 背景与边框

Background Color、Border Radius、Hide Background、Drop Shadow

## 显示（为空时从第 1 级继承）

Display Layout、Align

## 分隔符（为空时从第 1 级继承）

Divider Color

## 示例

目标：深色主菜单，白色文本。白色子菜单，深色文本。
仅在第 2-3 级填写 2 个字段：Background Color = #FFFFFF，Text Color = #000000
