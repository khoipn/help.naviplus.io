---
description: 在 Navi+ 中发布 Sticky 菜单（Tabbar、Mobile Header、FAB）— 使用 Shopify 的 App Embeds 或全局站点的脚本注入。
layout: default
permalink: /zh-cn/docs/publish/publish-sticky/
title: Publish Sticky — Tabbar 和 FAB
---
# Publish Sticky — Tabbar 和 FAB

适用于：**Tabbar**、**Mobile Header**、**FAB / Support bar**

Sticky 菜单是浮动的 — 始终显示在屏幕上，不固定于 DOM 中的特定位置。嵌入方式最为简单：通过单个脚本在整个站点范围内激活。

---

## Shopify — 3 个步骤

### 步骤 1：在 Theme Editor 中启用 App Embeds

前往 **Theme Editor → App Embeds** 并启用 Navi+ 开关。

- 这**不会更改主题布局**，可随时关闭而不影响商店。
- **每个商店只需操作一次** — 后续菜单可跳过此步骤。

### 步骤 2：启用"Publish this menu in sticky mode"

Publish 弹窗中**步骤 2**卡片里的开关。启用 = 菜单上线，禁用 = 从网站隐藏。

### 步骤 3（可选）：配置设备和页面可见性

详情请参阅 [Publish Filter](/zh-cn/docs/publish/publish-filter/)。

---

## 全局（WordPress、Wix、Webflow...）— 3 个步骤

### 步骤 1：将嵌入代码粘贴到 `<head>`

弹窗中显示带有**复制**按钮的代码。将其粘贴到您网站的 `<head>` 中：

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` 标识您的商店 — 每个商店有唯一的 token。
- `start.js` 异步加载，不阻塞页面渲染。

### 步骤 2：启用"Publish this menu in sticky mode"

与 Shopify 相同 — 启用开关。

### 步骤 3（可选）：配置设备和页面可见性

详情请参阅 [Publish Filter](/zh-cn/docs/publish/publish-filter/)。

---

## 各菜单类型注意事项

| 菜单 | 限制 |
|---|---|
| Mobile Header | 桌面端开关已禁用 — 仅限移动端 |
| FAB / Support bar | 无位置选择器（FAB 在 Setting 标签中有自己的定位设置） |
| Tabbar | 完整的移动端 + 桌面端选项可用 |

---

## 故障排查

**启用开关后菜单不显示？**
1. 检查 App Embeds 是否已启用（Shopify）或嵌入代码是否正确粘贴（全局）。
2. 检查设备设置 — **Show menu on mobile** 或 **Show menu on desktop** 必须开启。
3. 检查 URL 过滤器 — 可能正在过滤当前页面。
4. 强制刷新浏览器（Ctrl+Shift+R）以清除缓存。
