---
description: 在 Shopify 或任何网站上安装 Navi+，并了解 Navi+ 部署菜单的三种方式——浮动、定位和触发。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/how-to-install-navi/
title: 安装 Navi+
---
# 安装 Navi+

## 第一步 — 安装

**Shopify:** 从 [Shopify 应用商店](https://apps.shopify.com/pronavi-navigation-design) 安装。安装后应用会自动打开。

**其他平台**（WordPress、WooCommerce、Wix、Webflow、Squarespace 或任何网站）：
1. 在 [dash.naviplus.app](https://dash.naviplus.app) 创建一个免费账户
2. 添加您的网站域名
3. 复制您的嵌入代码——您将在第二步中使用此代码

---

## 第二步 — 了解您的菜单将如何部署

Navi+ 使用 **三种不同的部署方法**，具体取决于菜单类型。提前了解这一点可以节省设置时间。

### 1. 浮动菜单 — Tab Bar & FAB

Tab Bar 和 FAB 是 **粘性菜单**，在页面上以固定位置浮动。它们不会滚动消失。

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">📍</div>
    <strong>位置</strong><br>屏幕的顶部、底部、左侧或右侧
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔼</div>
    <strong>滚动时自动隐藏</strong><br>向下滚动时隐藏，向上滚动时重新出现
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">👇</div>
    <strong>向下滚动时显示</strong><br>默认隐藏，仅在用户向下滚动时出现——节省屏幕空间
  </div>
</div>

**一个常见的用例：** 将其他浮动元素——WhatsApp、Crisp、Messenger、实时聊天小部件——整合到 Navi+ 菜单项中。这可以释放屏幕空间，并消除多个浮动图标重叠的杂乱。

### 2. 定位菜单 — Mega Menu & Grid Menu

Mega Menu 和 Grid Menu 需要在页面上的 **特定位置** 放置。有几种方法可以做到这一点：

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🎯</div>
    <strong>CSS 选择器</strong><br>将 Navi+ 指向页面上的任何元素。在其前面、后面插入，或完全替换——这就是 Mega Menu 如何完全替换您主题的现有导航。
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🧩</div>
    <strong>Shopify 部分</strong><br>在主题自定义器中使用应用块将菜单放入布局的任何部分——无需代码。
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🖥️</div>
    <strong>嵌入代码</strong><br>将短代码直接粘贴到页面的 HTML 中，放在菜单应该出现的确切位置。
  </div>
</div>

> **CSS 选择器** 是识别网页上任何点的一种方式——它是浏览器定位特定元素的方式。Navi+ 使用它来准确知道在哪里注入您的菜单。您无需自己编写 CSS；Navi+ 有一个可视化选择器，可以为您找到选择器。

### 3. 触发菜单 — Slide Menu

Slide Menu **不会自行出现**。它保持隐藏，直到某个事件触发它：

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">☰</div>
    <strong>现有元素</strong><br>用户点击页面上已有的某个东西——例如您主题的汉堡图标
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">⚡</div>
    <strong>自定义触发器</strong><br>页面上的任何元素——由其 CSS 选择器指定
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔗</div>
    <strong>另一个 Navi+ 菜单</strong><br>点击时打开 Slide Menu 的 Tab Bar 或 FAB 项
  </div>
</div>

这使得 Slide Menu 灵活——它可以在不视觉上向页面添加任何新内容的情况下替换您现有的导航。

---

## 第三步 — 创建您的第一个菜单

安装后，前往仪表板并创建您的第一个菜单。→ [您的第一个菜单（5分钟快速入门）](/docs/getting-started/your-first-menu/)
