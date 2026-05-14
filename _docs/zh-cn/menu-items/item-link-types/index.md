---
description: Navi+ 支持的所有链接类型 — 内部页面、外部 URL、锚点、打开面板、电话/电子邮件、聊天应用、分享和 JavaScript。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/menu-items/item-link-types/
title: 链接类型
---
# 链接类型

在基本信息中的 **链接到** 字段控制访客点击或点击项目时发生的事情。Navi+ 支持许多链接类型，超出普通 URL。

当您点击链接到字段时，帮助弹出窗口会自动打开，提供完整示例。您也可以直接在字段中输入。

---

## 1. 内部商店页面

使用短路径（无域名）链接到您的 Shopify 商店内的页面。

| 目标 | 输入 |
|---|---|
| 首页 | *(留空)* |
| 所有产品 | `collections/all` |
| 一个集合 | `collections/collection-handle` |
| 产品页面 | `products/product-handle` |
| 静态页面（关于、常见问题…） | `pages/page-handle` |
| 博客列表 | `blogs/news` |
| 博客文章 | `blogs/news/post-handle` |
| 购物车 | `cart` |
| 搜索 | `search` |
| 联系 | `pages/contact` |

**自动清理提示：** 粘贴完整 URL（例如 `https://mystore.com/collections/sale`）→ 启用 **自动清理** 切换 → 系统会去掉域名，仅保留 `collections/sale`。

---

## 2. 完整 URL（外部链接）

使用完整 URL 链接到任何网站。

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. 在新标签页中打开

在任何链接后附加 `@new` 以在新标签页中打开它。

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. 无导航（父项）

当一个项目是包含子项的父项时，使用 `#` — 点击它会展开子项而不导航到任何地方。

```
#
```

---

## 5. 滚动（锚点）

| 动作 | 语法 |
|---|---|
| 滚动到顶部 | `scroll:Top` |
| 滚动到顶部，偏移 100px | `scroll:Top(100)` |
| 滚动到底部 | `scroll:Bottom` |
| 按 CSS 选择器滚动到某个部分 | `scroll:OnPage(#section-id)` *(Business / Elite)* |

**示例：** 一个 "返回顶部" 按钮 → 链接到是 `scroll:Top`。

---

## 6. 打开面板/弹出窗口 *(Business / Elite)*

在不离开页面的情况下打开主题 UI 组件。

| 动作 | 语法 |
|---|---|
| 打开 Navi+ 滑动菜单 | `open:NaviMenu(SF-XXXXXXXXXX)` |
| 点击 CSS 元素 | `open:clickTo(#cart-button)` |
| 聚焦输入字段 | `open:focusTo(.search-input)` |
| 打开主题搜索/购物车抽屉 | 使用帮助弹出窗口 → *打开面板* |
| 打开 Shopify 收件箱聊天 | 使用帮助弹出窗口 → *打开其他应用程序* |

`open:clickTo` 和 `open:focusTo` 接受 `Down` 或 `Up` 在执行之前滚动：  
`open:clickTo(.footer-element, Down)`

---

## 7. 电话、短信、电子邮件

| 动作 | 语法 |
|---|---|
| 电话 | `tel:+12125550100` |
| 短信 | `sms:+12125550100?body=Hello` |
| 电子邮件 | `mailto:hello@yourdomain.com` |

---

## 8. 聊天应用

| 应用 | 语法 |
|---|---|
| WhatsApp | `https://wa.me/12125550100` *(无 + 前缀)* |
| Messenger | `https://m.me/YourPageName` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/your-line-code` |

---

## 9. 分享

| 动作 | 语法 |
|---|---|
| 分享当前页面（本地分享对话框） | `open:ShareMe` |
| 复制 URL 到剪贴板 | `share:CopyUrl` |
| 分享到 Facebook | `share:Facebook` |
| 分享到 Twitter / X | `share:Tweet` |

---

## 10. 调用 JavaScript

调用页面上定义的任何 JavaScript 函数。

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. 切换语言

```
open:ChangeLanguage(fr)    ← 切换到法语
open:ChangeLanguage(vi)    ← 切换到越南语
open:ChangeLanguage()      ← 重置为默认语言
```
