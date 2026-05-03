---
description: 如何在 Navi+ 中控制菜单项的显示时间和显示对象 — 发布状态、登录条件和按页面隐藏。
layout: default
permalink: /zh-cn/docs/menu-items/item-visibility/
title: 可见性与条件
---
# 可见性与条件

编辑面板中的 **发布** 部分让您控制谁能看到菜单项、何时显示以及在哪些页面显示。

---

## 已发布

**默认：开启（所有人可见）。**

关闭可以在不删除的情况下从实时菜单中隐藏该菜单项。

**使用场景：**
- 临时隐藏季节性促销链接。
- 在上线前准备菜单项。
- 保留备用菜单项而不删除。

---

## 登录时隐藏

开启后，该菜单项**仅对未登录访客可见**。

**用于：**"登录"按钮、"创建账户"链接。

---

## 仅登录时显示

开启后，该菜单项**仅对已登录客户可见**。

**用于：**"我的账户"、积分、订单历史、会员专属功能。

---

## 在特定页面类型隐藏 (hidepages)

在 **高级 → 属性** 中使用 `hidepages` 属性。

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| 值 | 隐藏的页面 |
|---|---|
| `index` | 首页 |
| `products` | 商品详情页 |
| `collections` | 系列/分类页面 |
| `pages` | 静态页面 |
| `blogs` | 博客 |
| `others` | 其他页面 |

**示例：** `hidepages=index|blogs`

---

## 按设备隐藏

> Navi+ 在**菜单层级**控制设备显示，不在菜单项层级。创建两个独立菜单，或使用 CSS。

```css
/* 仅在移动端隐藏 */
@media (max-width: 767px) { display: none !important; }

/* 仅在桌面端隐藏 */
@media (min-width: 768px) { display: none !important; }
```

---

## 总结

| 条件 | 设置方式 |
|---|---|
| 完全隐藏 | 已发布 → 关闭 |
| 对登录用户隐藏 | 登录时隐藏 → 开启 |
| 对访客隐藏 | 仅登录时显示 → 开启 |
| 在首页隐藏 | `hidepages=index` |
| 在移动端隐藏 | CSS `@media (max-width: 767px)` |
| 在桌面端隐藏 | CSS `@media (min-width: 768px)` |
