---
description: 在 Navi+ 中发布 Slide（Context）菜单 — 启用开关后配置触发器以打开菜单。
layout: default
permalink: /zh-cn/docs/publish/publish-slide/
title: Publish Slide — Context 滑动菜单
---
# Publish Slide — Context 滑动菜单

适用于：**Context Slide 菜单**

Slide 菜单**与 Sticky 不同**：发布后，菜单**不会自动显示**在页面上。只有在操作触发时才会打开。这是与 Sticky 菜单的关键区别。

---

## 发布流程

```
步骤 1: 将代码嵌入网站
        ↓
步骤 2: 启用"Publish this menu"开关
        ↓
步骤 3: 配置触发器（如何打开菜单）
```

步骤 2 之后，菜单加载到网站但处于**隐藏状态**。步骤 3 决定什么来打开它。

---

## 步骤 1：嵌入代码

**Shopify：** 前往 **Theme Editor → App Embeds** → 启用 Navi+。仅需一次。

**全局：** 粘贴到 `<head>`：
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## 步骤 2：启用开关

在 Publish 弹窗中启用 **"Publish this menu"** 开关。

> 此步骤之后，菜单**不会在网站上显示**。这是预期行为 — Slide 菜单需要触发器才能打开。

---

## 步骤 3：配置触发器

有 4 种方式打开 Slide 菜单：

---

### 方法 1：从 Navi+ 菜单项打开

在任意菜单项的**链接**字段中使用 `open:NaviMenu(embed_id)` 语法。

示例：Tabbar 有一个"菜单"项 → 链接 = `open:NaviMenu(ABC123)` → 点击该项即可打开 Slide 菜单。

**embed_id** 显示在弹窗中，可点击复制：
```
open:NaviMenu(ABC123)
```

这是最常见的方案 — 将 Tabbar + Slide 菜单结合以扩展导航空间。

---

### 方法 2：点击页面上的元素打开（CSS Selector）

输入一个或多个 CSS Selector，用逗号分隔。Navi+ 监听匹配元素上的点击/触摸事件并打开 Slide 菜单。

**设备特定语法：**

| 后缀 | 设备 |
|---|---|
| `#element` | 移动端和桌面端 |
| `#element(M)` | 仅移动端 |
| `#element(D)` | 仅桌面端 |

**Shopify Dawn 主题示例：**

| 目的 | CSS Selector |
|---|---|
| 替换移动端汉堡菜单 | `#Details-menu-drawer-container` |
| 按设备使用不同选择器 | `#Details-menu-drawer-container(M), .desktop-menu-btn(D)` |

> 配置 CSS Selector 触发器后，考虑隐藏原始元素以避免闪烁 — 参阅 [Publish Optimize](/zh-cn/docs/publish/publish-optimize/)。

---

### 方法 3：调用 JavaScript 函数

从页面代码的任意位置调用此函数：

```javascript
naviman.openNaviMenu('EMBED_ID')
```

适合将 Slide 菜单集成到没有固定选择器的自定义 UI 中。

---

### 方法 4：桌面端固定侧边栏

Slide 菜单可以固定为桌面端永久左侧边栏，而不是打开/关闭。

**启用方法：** 前往 **Advance** 标签 → 选择 **"Fix on left"** 方向。

无需触发器 — 菜单始终在桌面端可见。

---

## 故障排查

**启用开关但菜单不显示？**
→ 正常行为。Slide 菜单需要触发器（步骤 3）。检查是否至少配置了一种方法。

**CSS Selector 不工作？**
1. 使用 **Navi+ Debug Mode** 找到元素的精确选择器。
2. 检查元素是否实际存在于页面上（某些主题在特定断点会隐藏/删除元素）。
3. 尝试添加 `(M)` 或 `(D)` 后缀以按设备分开。

**同一页面需要多个 Slide 菜单？**
→ 创建独立菜单，每个使用不同的 `embed_id`，配置不同的触发器。
