---
description: 在 Navi+ 中发布粘性菜单（Tabbar、移动头部、FAB） — 使用 Shopify 的应用嵌入或全球网站的脚本注入。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/publish/publish-sticky/
title: 发布粘性 — Tabbar & FAB
---
# 发布粘性 — Tabbar & FAB

适用于: **Tabbar**, **移动头部**, **FAB / 支持栏**

粘性菜单是浮动的 — 它们始终出现在屏幕上，并且不附加到固定的 DOM 位置。嵌入方法是最简单的：通过单个脚本在全站激活。

---

## Shopify — 3 步骤

### 步骤 1: 在主题编辑器中启用应用嵌入

前往 **主题编辑器 → 应用嵌入** 并启用 Navi+ 切换。

- 这不会 **更改主题布局**，并且可以随时关闭而不影响商店。
- 只需 **每个商店执行一次** — 后续菜单跳过此步骤。

### 步骤 2: 启用 "在粘性模式下发布此菜单"

在发布模态的 **步骤 2** 卡片中的切换。启用 = 菜单上线，禁用 = 从网站隐藏。

### 步骤 3 (可选): 配置设备和页面可见性

有关详细信息，请参见 [发布过滤器](/docs/publish/publish-filter/)。

---

## 全球 (WordPress, Wix, Webflow...) — 3 步骤

### 步骤 1: 将嵌入代码粘贴到 `<head>`

代码在模态中显示，并带有 **复制** 按钮。将其粘贴到您网站的 `<head>` 中：

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` 识别您的商店 — 每个商店都有一个唯一的令牌。
- `start.js` 异步加载，不会阻塞页面渲染。

### 步骤 2: 启用 "在粘性模式下发布此菜单"

与 Shopify 相同 — 启用切换。

### 步骤 3 (可选): 配置设备和页面可见性

有关详细信息，请参见 [发布过滤器](/docs/publish/publish-filter/)。

---

## 按菜单类型的注意事项

| 菜单 | 限制 |
|---|---|
| 移动头部 | 桌面切换禁用 — 仅限移动 |
| FAB / 支持栏 | 无位置选择器 (FAB 在设置选项卡中有自己的定位) |
| Tabbar | 提供完整的移动 + 桌面选项 |

---

## 故障排除

**启用切换后菜单不出现？**
1. 检查应用嵌入是否已启用 (Shopify) 或嵌入代码是否正确粘贴 (全球)。
2. 检查设备设置 — **在移动设备上显示菜单** 或 **在桌面上显示菜单** 必须开启。
3. 检查 URL 过滤器 — 可能正在过滤当前页面。
4. 硬刷新浏览器 (Ctrl+Shift+R) 清除缓存。
