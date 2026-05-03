---
description: Navi+ 支持的所有链接类型 — 内部页面、外部URL、锚点、打开面板、电话/邮件、聊天应用、分享和JavaScript。
layout: default
permalink: /zh-cn/docs/menu-items/item-link-types/
title: 链接类型
---
# 链接类型

基本信息中的 **链接到** 字段控制访客点击或点击菜单项时发生的事情。Navi+ 支持多种链接类型，不仅仅是普通的 URL。

点击链接到字段时，会自动打开包含完整示例的帮助弹出框。也可以直接在字段中输入。

---

## 1. 内部商店页面

使用短路径（无域名）链接到 Shopify 商店内的页面。

| 目标 | 输入 |
|---|---|
| 首页 | *(留空)* |
| 所有产品 | `collections/all` |
| 某个系列 | `collections/collection-handle` |
| 产品页面 | `products/product-handle` |
| 静态页面 | `pages/page-handle` |
| 博客列表 | `blogs/news` |
| 博客文章 | `blogs/news/post-handle` |
| 购物车 | `cart` |
| 搜索 | `search` |
| 联系 | `pages/contact` |

**Auto Clean 提示：** 粘贴完整 URL → 启用 **Auto clean** 开关 → 系统自动去掉域名，只保留路径。

---

## 2. 完整 URL（外部链接）

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. 在新标签页中打开

在任意链接末尾添加 `@new`。

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. 无导航（父级菜单项）

```
#
```

---

## 5. 滚动（锚点）

| 操作 | 语法 |
|---|---|
| 滚到顶部 | `scroll:Top` |
| 滚到顶部偏移100px | `scroll:Top(100)` |
| 滚到底部 | `scroll:Bottom` |
| 滚到CSS选择器指定的区域 | `scroll:OnPage(#section-id)` *(Business / Elite)* |

---

## 6. 打开面板 / 弹出框 *(Business / Elite)*

| 操作 | 语法 |
|---|---|
| 打开 Navi+ 滑动菜单 | `open:NaviMenu(SF-XXXXXXXXXX)` |
| 点击 CSS 元素 | `open:clickTo(#cart-button)` |
| 聚焦输入框 | `open:focusTo(.search-input)` |
| 打开主题搜索/购物车抽屉 | 帮助弹出框 → *打开面板* |
| 打开 Shopify Inbox 聊天 | 帮助弹出框 → *打开其他应用* |

---

## 7. 电话、短信、邮件

| 操作 | 语法 |
|---|---|
| 拨打电话 | `tel:+8610123456` |
| 短信 | `sms:+8610123456?body=您好` |
| 邮件 | `mailto:hello@yourdomain.com` |

---

## 8. 聊天应用

| 应用 | 语法 |
|---|---|
| WhatsApp | `https://wa.me/8610123456` |
| Messenger | `https://m.me/YourPageName` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/your-line-code` |

---

## 9. 分享

| 操作 | 语法 |
|---|---|
| 分享当前页面 | `open:ShareMe` |
| 复制 URL | `share:CopyUrl` |
| 分享到 Facebook | `share:Facebook` |
| 分享到 Twitter / X | `share:Tweet` |

---

## 10. 调用 JavaScript

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. 切换语言

```
open:ChangeLanguage(zh-cn)
open:ChangeLanguage(en)
open:ChangeLanguage()
```
