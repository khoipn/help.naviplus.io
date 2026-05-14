---
description: 在发布Navi+菜单后优化速度和用户体验 — 防止在使用插入/替换或CSS选择器触发器时闪烁原始内容。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/publish/publish-optimize/
title: 发布优化 — 速度与用户体验
---
# 发布优化 — 速度与用户体验

当使用 **插入/替换**（部分菜单）或 **CSS选择器触发器**（滑动菜单）时，网站需要短暂的时间来加载Navi+。在此期间，原始元素（主题的旧菜单）仍然可见 — 导致 **闪烁** 或布局偏移。

---

## 何时需要优化？

| 方法 | 需要优化？ |
|---|---|
| Sticky / FAB (应用嵌入 / `<head>`) | 不 — 菜单已添加到DOM，未替换任何内容 |
| 滑动菜单 — 方法1（从Navi+项目打开） | 不 — 触发按钮是Navi+项目 |
| **滑动菜单 — 方法2（CSS选择器触发器）** | **是** — 原始触发元素在Navi+加载之前仍然可见 |
| **部分 — 替换** | **是** — 原始菜单首先显示，然后被Navi+替换 |
| 部分 — 插入前/后 | 不需要 — 两个菜单并排出现 |

---

## 技术：通过CSS隐藏原始元素

### 它是如何工作的

1. 使用CSS立即隐藏原始元素（在Navi+加载之前）。
2. 可选地显示加载占位符以防止布局偏移。
3. 当Navi+准备好时，自动移除或替换该元素 — 布局稳定。

### 实现

**添加CSS以隐藏原始元素**（粘贴到主题自定义CSS或`<head>`）：

```css
/* 在Navi+加载时隐藏原始菜单 */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* 保留空间以防止布局偏移 */
}
```

一旦Navi+替换了该元素，这段CSS将无效 — 该元素将从DOM中移除。

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

## 特殊情况：使用CSS选择器触发器的滑动菜单

当滑动菜单使用CSS选择器触发器（方法2）时，原始触发元素（例如主题的汉堡按钮）仍然可见并且 **仍然有效**（打开主题的滑动面板），直到Navi+加载并覆盖该事件。

### 解决方案A：隐藏原始元素，使用Navi+项目作为触发器

```css
/* 隐藏主题汉堡按钮 */
#Details-menu-drawer-container {
  display: none !important;
}
```

然后使用 **方法1**（从Navi+项目打开）而不是方法2 — 更干净，无需担心闪烁。

### 解决方案B：淡出原始元素

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

添加JS：当Navi+准备好时（`naviReady`事件），移除隐藏样式以恢复原始元素的可见性。

---

## 一般速度注意事项

- `start.js` 以 `async` 加载 — 不会阻塞页面渲染。
- 菜单JSON配置在Cloudflare CDN上缓存 — 从最近的边缘节点快速加载。
- 对于访客没有服务器端渲染 — 所有菜单渲染都是从静态JSON的客户端渲染。

要预加载脚本以获得最大速度：
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
