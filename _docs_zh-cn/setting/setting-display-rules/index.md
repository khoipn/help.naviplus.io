---
description: 控制哪些页面和设备显示 Navi+ 菜单 — 设备开关、URL 关键词、Shopify 页面类型。
layout: default
permalink: /docs/setting/setting-display-rules/
title: 设置显示规则 — 条件可见性
---
# 设置显示规则 — 条件可见性

## 按设备显示（Publish 标签页）

移动端开关 + 桌面端开关。默认：仅移动端开启。手动启用桌面端。

## URL 关键词规则

Contain Keyword：仅当 URL 包含关键词时显示菜单。例："collections, products/sale"
Don't Contain Keyword：当 URL 包含关键词时隐藏菜单。例："checkout, account/login"

## Shopify 页面类型

Home、Product Detail、Product Categories、Pages、Blogs、Others。取消勾选则在该类型上隐藏。

## 规则顺序

1. 设备已启用？否：隐藏。
2. 页面类型已勾选？否：隐藏。
3. URL 匹配不显示条件？是：隐藏。
4. URL 匹配仅显示条件？否：隐藏。
5. 显示菜单。
