---
description: 在 Navi+ 中发布 Section 菜单（Mega Menu、Grid）— 使用 CSS Selector 进行 Insert/Replace 或在 Shopify 上使用 App Block。
layout: default
permalink: /docs/publish/publish-section/
title: Publish Section — Mega Menu 和 Grid
---
# Publish Section — Mega Menu 和 Grid

适用于：**Mobile Mega Menu**、**Mobile Grid**、**Desktop Mega Menu**

Section 菜单**不是浮动的** — 它们被插入到页面布局的特定位置。有两种部署方法，可以同时使用：

| | 方法 1：Insert/Replace | 方法 2：App Block |
|---|---|---|
| 平台 | Shopify + 全局 | 仅限 Shopify |
| 机制 | CSS Selector → 在元素前/后插入或替换元素 | Theme Editor 中的 App Block"Navi+ on Section" |
| 灵活性 | 高 — 可嵌入任何位置 | 中 — 受 Shopify 区块 schema 限制 |
| 配置 | 需要了解 CSS Selector | 只需输入 Embed ID |

---

## 方法 1：使用 CSS Selector 进行 Insert/Replace

**推荐**方法 — 适用于 Shopify 和全局。

### 步骤 1：嵌入代码

**Shopify：** **Theme Editor → App Embeds** → 启用 Navi+。仅一次。

**全局：** 粘贴到 `<head>`：
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### 步骤 2：启用"Publish menu by Insert/Replace method"

启用开关以展开下方的配置区域。

### 步骤 3：输入 CSS Selector

输入**一个** CSS Selector。菜单将相对于匹配的元素进行放置。

**设备特定语法：**

| 后缀 | 设备 |
|---|---|
| `header` | 移动端和桌面端 |
| `header(M)` | 仅移动端 |
| `header(D)` | 仅桌面端 |

**热门 Shopify 主题的 CSS Selector 技巧：**

| 菜单类型 | 目的 | 建议的 CSS Selector |
|---|---|---|
| Desktop Mega | 替换桌面端导航 | `nav.header__inline-menu ul.list-menu` |
| Desktop Mega | 在 header 下方插入 | `header` |
| Mobile Mega | 在移动端 header 下方插入 | `header` |

### 步骤 4：选择放置方式（Insert/Replace）

| 值 | 行为 |
|---|---|
| **Replace** | 用 Navi+ 菜单完全替换原始元素 |
| **Insert Before** | 在元素前插入 Navi+ 菜单 |
| **Insert After** | 在元素后插入 Navi+ 菜单 |

> 选择 **Replace** 后，考虑添加 CSS 在 Navi+ 加载期间隐藏原始元素 — 参阅 [Publish Optimize](/docs/publish/publish-optimize/)。

---

## 方法 2：App Block（仅限 Shopify）

### 设置方法

1. 复制菜单的 **Embed ID**（显示在弹窗中 — 点击复制）。
2. 前往 **Shopify Theme Editor** → 找到 **"Navi+ on Section"** App Block。
3. 将 Embed ID 粘贴到对应字段。
4. 保存主题。

### "滚动时固定在顶部"

在滚动时将 Section 菜单固定在页面顶部的开关。

**使用场景：** 如果主题没有内置的粘性 header，启用此功能可让 Desktop Mega Menu 在用户向下滚动时保持可见。

---

## 可以同时使用两种方法吗？

可以。Shopify 用户可以同时启用两种方法：
- App Block 用于 Theme Editor 预览（更稳定，更易于预览）。
- Insert/Replace 用于在店面中更精确的放置。

通常只需要一种方法。

---

## 各菜单类型注意事项

| 菜单 | 设备 | 说明 |
|---|---|---|
| Mobile Mega Menu | 桌面端开关已禁用 | 仅限移动端 |
| Mobile Header | 桌面端开关已禁用 | 仅限移动端 |
| Desktop Mega Menu | 移动端开关已禁用 | 仅限桌面端 |
| Mobile Grid | 两者 | 无限制 |

---

## 故障排查

**配置 Insert/Replace 后菜单不显示？**
1. 检查 CSS Selector 是否正确 — 使用 DevTools 或 Navi+ Debug Mode。
2. 检查"Publish menu by Insert/Replace method"开关是否已启用。
3. 检查 App Embeds / 嵌入代码是否已就位。

**菜单出现两次（重复）？**
→ App Block 和 Insert/Replace 同时处于激活状态。禁用其中一个。
