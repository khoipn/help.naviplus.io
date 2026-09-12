---
description: "骨架菜单触发器和主题集成的 CSS 选择器语法 — 通过设备特定和标记选择器格式优化菜单加载时间和 UX。"
layout: default
permalink: /zh-cn/docs/development/optimize-loading-css-selectors/
title: 速度与 UX 优化 — CSS 选择器语法
---
# 速度与 UX 优化 — CSS 选择器语法

在 **Theme Editor → App embeds → Store Connector** 中，在 **Speed & UX optimization** 组下，你会找到 2 个 CSS 选择器字段，帮助你的菜单平稳加载 — 无需像以前那样编写自定义 CSS/JS。本指南说明两个字段的语法。

---

## 2 个字段，2 个不同的目的

| 字段 | 用于 | 机制 |
|---|---|---|
| **Mobile Menu CSS Selector** | 使用 CSS 选择器事件绑定时的菜单触发按钮（汉堡菜单） | 在 Navi+ 加载之前点击按钮 → 立即显示骨架菜单（即时反馈）而不是无声等待。当 Navi+ 加载时，骨架让位于真实菜单。 |
| **CSS Selector for Mega Menu Replacement** | 原始主题菜单区域，当 Navi+ 在替换模式下运行时 | 在等待 Navi+ 加载时用闪烁加载效果覆盖该区域，防止原始内容在被替换时闪烁。 |

两个字段都是**可选的** — 留空时默认行为不会改变。

---

## 常见语法 — 多个以逗号分隔的选择器

```
selector-1, selector-2, selector-3
```

在单个字段中使用逗号 `,` 或分号 `;` 分隔多个选择器。括号 `(...)` 内、方括号 `[...]` 内或引号字符串 `"..."` / `'...'` 内的逗号/分号（如属性选择器 `[data-value="a,b"]`）会根据上下文识别，不会被误认为是选择器分隔符。

---

## 旧语法 — `(M)` / `(D)` 后缀

在**两个字段中**都有效。在选择器后直接添加后缀以按设备限制：

```
.hamburger-mobile (M)
.hamburger-desktop (D)
.trigger-all-devices
```

| 后缀 | 适用于 |
|---|---|
| `(M)` | 仅移动设备 |
| `(D)` | 仅桌面 |
| *(无后缀)* | 所有设备 |

---

## 标记语法 — 仅"Mobile Menu CSS Selector"字段

**Mobile Menu CSS Selector** 字段支持高级语法来自定义骨架菜单外观 — **Mega Menu (Replacement mode)** 字段不支持此语法，仅接受 `(M)` / `(D)`。

```
.hamburger (Device:M | Color:#1a1a1a | Direction:left | Width:85%)
```

由 `(...)` 内的冒号 `:` 标识 — 如果有冒号，则为标记格式；否则为旧格式（`(M)` / `(D)`）。参数由管道 `|` 分隔：

| 参数 | 有效值 | 省略/无效时的默认值 |
|---|---|---|
| `Device` | `M` 或 `D` （同时列出 `M,D` = 无设备限制，等同于省略） | 所有设备 |
| `Color` | 十六进制 CSS 代码：`#rgb`、`#rgba`、`#rrggbb`、`#rrggbbaa` | `#fff` |
| `Direction` | `left` 或 `right` — 骨架滑出方向 | `left` |
| `Width` | 百分比 `NN%` 或像素 `NNpx` （整数或小数） | `85%` |

**示例：**
```
.hamburger (Device:M | Color:#1a1a1a | Width:320px)
```
→ 仅在移动设备上应用，骨架背景 `#1a1a1a`，固定宽度 `320px`。

### 每个参数的容错能力

- 键和值中的空格和大小写在比较前被规范化（`Color: #1A1A1A` 和 `color:#1a1a1a` 相同）。
- 无效的参数格式（如 `Color:red` — 不是十六进制）或未知键（打字错误、不存在的名称）会**仅针对该参数被静默跳过**，使用默认值 — 不会破坏其他参数或同一字段中的其他选择器。

---

## 无效选择器（CSS 语法错误）

如果 **Mobile Menu CSS Selector** 字段中的选择器有真正的 CSS 语法错误（不同于无效的标记参数 — 这是无法解析的选择器），Navi+ 会在浏览器控制台（F12 → Console）中记录警告，直接指向该字段：

```
[Navi+] INVALID TRIGGER CSS SELECTOR — this one was skipped
selector      : <无效选择器>
browser error : <浏览器错误消息>
Fix it in Theme Editor → App embeds → Store Connector →
Mobile Menu CSS Selector.
```

无效选择器会被单独跳过；字段中的其他有效选择器继续正常工作。

---

## 真实示例

### 1. 保护默认汉堡菜单，无需自定义

```
#Details-menu-drawer-container
```
早期点击仍然获得即时反馈（默认骨架），无需声明 Device/Color/Direction/Width。

### 2. 仅移动汉堡菜单，从右边滑出，品牌颜色

```
.hamburger-mobile (Device:M | Color:#0f172a | Direction:right | Width:90%)
```

### 3. 在两个设备上替换主题的原始菜单区域

```
nav.header__inline-menu
```
（在 **CSS Selector for Mega Menu Replacement** 字段中，无后缀 = 适用于所有设备）

### 4. 组合多个选择器，设备特定限制

```
.mega-menu (D), .mobile-nav-wrapper (M)
```
