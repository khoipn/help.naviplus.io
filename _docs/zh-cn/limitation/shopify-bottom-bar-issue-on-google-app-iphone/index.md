---
description: 关于在iPhone的Google应用程序中打开使用Navi+的Shopify网站时，底部导航栏下方出现多余白边的问题说明。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/limitation/shopify-bottom-bar-issue-on-google-app-iphone/
title: Shopify底部栏在iPhone Google应用中的显示问题
---
# Shopify底部栏在iPhone Google应用中的显示问题

这是关于在iPhone的Google应用程序中打开使用**Navi+**的Shopify网站时，底部导航栏下方出现多余白边的问题说明。

当访问使用**Navi+**（或任何具有固定底部菜单、浮动按钮等的应用程序）的Shopify网站时，用户在**iPhone的Google应用程序内**打开网站时，有时会看到屏幕底部出现不正常的白色空白区域。

此问题仅在Google应用中发生，**不是Navi+造成的**。以下是清晰简单的解释。

***

### 1. 问题在哪里出现？

问题仅在以下条件下发生：

* 网站运行在 **Shopify** 上
* 存在**底部导航栏**（Navi+或其他应用），或**悬浮操作按钮（FAB）**（如聊天小部件、积分按钮等）
* 用户**通过iPhone上的Google应用打开网站**（通常是搜索后点击进入网站）

使用以下浏览器打开网站时**不会**出现此问题：

* Safari（iPhone默认浏览器）
* Chrome
* Facebook浏览器
* TikTok浏览器
* …

这证实了问题来源于iOS上的Google应用。

***

### 2. 为什么使用Navi+的Shopify网站更容易遇到此问题？

Google应用使用特殊方式渲染网站（Apple的WebView）。这个渲染引擎在计算具有以下特征的网站的实际屏幕高度时存在长期问题：

* 固定的底部导航栏
* 由JavaScript动态生成的HTML或UI
* 像Shopify这样的复杂布局（多个容器层和不断变化的区块）

当这些条件出现时，Google应用可能会错误计算实际视口高度，并创建**虚假的底部填充**。

➡️ 这就是为什么使用Navi+或其他底部栏/FAB应用的Shopify网站更频繁地出现此问题。

***

### 3. 这是Navi+的问题吗？

不是。\
这是**iPhone上Google应用**的固有bug，已经存在多年。

即使禁用Navi+，其他显示底部栏或FAB的Shopify应用在Google应用内仍会遇到相同问题。

***

### 4. 此问题无法完全修复的证据

* 许多包含底部栏或FAB的Shopify应用都遇到完全相同的问题。
* 即使是Shopify内置功能在Google应用内也表现出类似行为。
* 这是开发者社区中众所周知的问题，但Google应用尚未解决。
* 用户**点击屏幕任意位置**后问题消失 → Google应用强制重新渲染并重新计算正确高度。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIJeUOw7iYKzsFXSLVQK3%2FEx-1.1.2.png?alt=media&#x26;token=c2c351d9-10fd-47ed-bbef-1e436ab3ac4f" alt=""><figcaption></figcaption></figure>

***

### 5. Navi+目前的解决方案

Navi+已研究和测试了多种方法，但由于问题源于Google应用本身，因此无法完全解决。

然而，Navi+已实施了**尽可能最佳的缓解措施**：

#### ✔️ 问题只在第一次出现

通常发生在用户：

* 在Google应用内打开网站
* 在页面上导航或点击任意位置时

发生时，Navi+触发一次性纠正机制。一旦用户：

* 轻触屏幕
* 稍微滚动
* 进行任何小的交互

#### ✔️ 问题自动消失

Google应用将重新渲染整个布局，从那时起：

* 底部导航栏显示在正确位置
* 直到Google应用关闭并重新打开，问题不会再次出现

#### ✔️ 此缓解措施还减少了与Navi+一起使用时其他底部应用的类似错误

***

### 6. 面向非技术用户的简单说明

> "iPhone上的Google应用在打开使用Navi+等底部导航栏的Shopify网站时存在显示bug。此问题来自Google应用，影响许多应用，不仅仅是Navi+。它只发生一次，点击或滚动屏幕后会消失。使用Safari或Chrome时不会出现此问题。"

***

### 7. 结论

❌ 不是Navi+的问题\
❌ 不是Shopify的问题

✔️ iPhone上Google应用的显示bug\
✔️ Navi+将问题最小化，使其只出现一次然后消失\
✔️ Safari/Chrome完全不受影响
