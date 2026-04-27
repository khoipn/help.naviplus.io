---
description: Navi+ 菜单类型及其对应部署方法的概览 — Sticky、Slide 和 Section 菜单。
layout: default
permalink: /docs/publish/publish-overview/
title: Publish Overview — 菜单类型和部署方法
---
# Publish Overview — 菜单类型和部署方法

Navi+ 菜单根据菜单类型（`menu_kind`）自动划分为 3 个部署组：

| 组别 | 菜单类型 | 方法 |
|---|---|---|
| **Sticky** | Tabbar、Mobile Header、FAB | App Embeds（Shopify）或 `<head>` 代码（全局）→ 启用开关 |
| **Slide** | Context Slide | App Embeds / `<head>` → 启用开关 → 配置触发器 |
| **Section** | Mobile Mega Menu、Mobile Grid、Desktop Mega Menu | Insert/Replace（CSS Selector）和/或 App Block（Shopify） |

---

## 两个市场：Shopify vs. 全局

| 步骤 | Shopify | 全局（WordPress、Wix...） |
|---|---|---|
| 嵌入代码 | 在 **App Embeds**（Theme Editor）中启用 — 无需粘贴代码 | 将 `<script>` 粘贴到网站 `<head>` |
| Token | 不需要 — Shopify OAuth 处理 | 必需 — 脚本中的 `token: "NAVI123456"` |
| App Block | 可用（仅限 Shopify）— Section 菜单的方法 2 | 不可用 |

---

## 一般流程

```
1. 设计菜单（Design + Setting）
        ↓
2. 打开 Publish 弹窗
        ↓
3. 将代码嵌入网站（仅一次）
   - Shopify: Theme Editor 中的 App Embeds
   - 全局: 将 <script> 粘贴到 <head>
        ↓
4. 启用"Publish this menu"开关
        ↓
5. （可选）配置设备、页面显示、URL 过滤器
        ↓
6. 保存 → 菜单上线
```

> 步骤 3（嵌入代码）每个网站只需操作**一次**。后续菜单只需从步骤 4 开始。
