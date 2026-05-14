---
description: 将您的 Navi+ 菜单发布到您的网站 — 启用/禁用，选择嵌入方式，配置设备可见性，并按 URL 过滤。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/publish/
title: 发布
---
# 发布

该 **发布** 部分控制您的菜单在实时网站上的显示方式：切换菜单的开/关，选择嵌入方式，配置设备可见性，以及按 URL 过滤。这是设计后的最后一步 — 如果不保存发布设置，菜单将不会出现。

---

## 主题

| # | 主题 | |
|---|---|---|
| 1 | 菜单类型和部署方法概述 | [发布概述](/docs/publish/publish-overview/) |
| 2 | Sticky / FAB — 应用嵌入（Shopify）或 `<head>`（全局） | [发布 Sticky](/docs/publish/publish-sticky/) |
| 3 | Slide 菜单 — 基于触发器的激活 | [发布 Slide](/docs/publish/publish-slide/) |
| 4 | Section / Mega / Grid — 插入/替换和应用块 | [发布 Section](/docs/publish/publish-section/) |
| 5 | 按设备和 URL 关键字过滤 | [发布过滤](/docs/publish/publish-filter/) |
| 6 | 发布后优化速度和用户体验 | [发布优化](/docs/publish/publish-optimize/) |

---

## 快速参考

```
菜单类型           主要方法
────────────────────────────────────────────────────
Sticky / TABBAR     应用嵌入（Shopify） / <head>（全局） + 启用切换
Sticky / FAB        应用嵌入（Shopify） / <head>（全局） + 启用切换
Slide (CONTEXT)     应用嵌入 / <head> + 启用切换 + 配置触发器
Section (Mega/Grid) 插入/替换（CSS 选择器）或应用块（Shopify）
```

**规则：** 启用切换 = 菜单处于活动状态。禁用切换 = 完全从网站隐藏，无需移除嵌入代码。
