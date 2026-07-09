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

| 步骤 | Shopify | Global (WordPress, Squarespace, Webflow...) |
|---|---|---|
| 嵌入代码 | 在 **App Embeds** (主题编辑器) 中启用 — 无需粘贴代码 | 将 `<script>` 粘贴到网站 `<head>` 中 |
| 令牌 | 不需要 — Shopify OAuth 处理 | 必需 — 脚本中的 `token: "NAVI123456"` |
| App Block | 可用 (仅 Shopify) — Section 菜单的方法 2 | 不可用 |

> **Wix：** 如果您从 Wix App Market 安装了 Navi+ 应用，嵌入是自动的 — Navi+ 会通过 Wix 嵌入式脚本为您注入 `start.js`，因此您**无需粘贴任何代码**。身份验证和计费均通过 Wix 处理。只有自管理平台 (WordPress、Squarespace、Webflow、Magento、自定义网站) 才需要上面的手动 `<script>` 粘贴。

---

## 一般流程

```
1. 设计菜单 (Design + Setting)
        ↓
2. 打开发布模态框
        ↓
3. 将代码嵌入网站 (仅需一次)
   - Shopify: 主题编辑器中的 App Embeds
   - Global: 将 <script> 粘贴到 <head>
        ↓
4. 启用 "发布此菜单" 切换
        ↓
5. (可选) 配置设备、页面显示、URL 过滤
        ↓
6. 保存 → 菜单上线
```

> 第 3 步 (嵌入代码) 只需**每个网站执行一次**。后续菜单仅需从第 4 步开始。
