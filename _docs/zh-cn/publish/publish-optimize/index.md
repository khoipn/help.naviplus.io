---
description: 发布 Navi+ 菜单后优化速度和用户体验 — 使用 Insert/Replace 或 CSS Selector 触发器时防止原始内容闪烁。
layout: default
permalink: /zh-cn/docs/publish/publish-optimize/
title: Publish Optimize — 速度和用户体验
---
# Publish Optimize — 速度和用户体验

使用 **Insert/Replace**（Section 菜单）或 **CSS Selector 触发器**（Slide 菜单）时，网站需要短暂时间加载 Navi+。在此期间，原始元素（主题的旧菜单）仍然可见 — 导致**闪烁**或布局偏移。

---

## 何时需要优化？

| 方法 | 需要优化？ |
|---|---|
| Sticky / FAB（App Embeds / `<head>`） | 否 — 菜单被添加到 DOM，没有任何东西被替换 |
| Slide 菜单 — 方法 1（从 Navi+ 项目打开） | 否 — 触发按钮是 Navi+ 项目 |
| **Slide 菜单 — 方法 2（CSS Selector 触发器）** | **是** — 原始触发元素在 Navi+ 加载前保持可见 |
| **Section — Replace** | **是** — 原始菜单首先显示，然后被 Navi+ 替换 |
| Section — Insert Before/After | 不需要 — 两个菜单并排显示 |

---

## 技术：通过 CSS 隐藏原始元素

### 工作原理

1. 使用 CSS 立即隐藏原始元素（在 Navi+ 加载之前）。
2. 可选显示加载占位符以防止布局偏移。
3. Navi+ 准备好后自动删除或替换元素 — 布局稳定。

### 实现方式

**添加 CSS 隐藏原始元素**（粘贴到主题自定义 CSS 或 `<head>`）：

```css
/* Navi+ 加载时隐藏原始菜单 */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* 预留空间以防止布局偏移 */
}
```

Navi+ 替换元素后，此 CSS 不再有效 — 元素已从 DOM 中删除。

**带加载占位符**（高级）：
```css
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  position: relative;
}
nav.header__inline-menu ul.list-menu::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f5f5f5;
  border-radius: 4px;
}
```

---

## 特殊情况：使用 CSS Selector 触发器的 Slide 菜单

当 Slide 菜单使用 CSS Selector 触发器（方法 2）时，原始触发元素（例如主题的汉堡按钮）仍然可见，在 Navi+ 加载并覆盖事件之前**仍然有效**（打开主题的滑动面板）。

### 解决方案 A：隐藏原始元素，改用 Navi+ 项目作为触发器

```css
/* 隐藏主题汉堡按钮 */
#Details-menu-drawer-container {
  display: none !important;
}
```

然后使用**方法 1**（从 Navi+ 项目打开）代替方法 2 — 更简洁，无需担心闪烁。

### 解决方案 B：淡出原始元素

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

添加 JS：当 Navi+ 准备好时（`naviReady` 事件），删除隐藏样式以恢复原始元素的可见性。

---

## 一般速度说明

- `start.js` 以 `async` 方式加载 — 不阻塞页面渲染。
- 菜单 JSON 配置缓存在 Cloudflare CDN 上 — 从最近的边缘节点快速加载。
- 访客无需服务器端渲染 — 所有菜单渲染均为静态 JSON 的客户端渲染。

为获得最快速度，预加载脚本：
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
