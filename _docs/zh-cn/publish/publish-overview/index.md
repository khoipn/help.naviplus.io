---
description: Navi+ 菜单类型及其对应的部署方法概述 — Sticky、Slide 和 Section 菜单。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/publish/publish-overview/
title: 发布概述 — 菜单类型与部署方法
---
# 发布概述 — 菜单类型与部署方法

Navi+ 菜单分为 3 个部署组，由菜单类型 (`menu_kind`) 自动确定：

| 组别 | 菜单类型 | 方法 |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) 或 `<head>` 代码 (Global) → 启用切换 |
| **Slide** | Context Slide | App Embeds / `<head>` → 启用切换 → 配置触发器 |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | 插入/替换 (CSS 选择器) 和/或 App Block (Shopify) |

---

## 两个市场：Shopify 与 Global

| 步骤 | Shopify | Global (WordPress, Wix...) |
|---|---|---|
| 嵌入代码 | 在 **App Embeds** (主题编辑器) 中启用 — 无需粘贴代码 | 将 `<script>` 粘贴到网站 `<head>` 中 |
| 令牌 | 不需要 — Shopify OAuth 处理 | 必需 — `token:
