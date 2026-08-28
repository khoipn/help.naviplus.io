---
description: "可见性规则适用于菜单和菜单项 — 根据设备、购物车内容、日程、市场、客户标签和 B2B 客户来显示或隐藏。"
lang: zh-cn
layout: default
permalink: /zh-cn/docs/development/setup-visibility-rule/
title: 设置可见性规则
---
# 设置可见性规则

可见性规则（Visibility Rules）是一组条件，决定某个**菜单**或某个**菜单项**是否向特定访问者显示 — 根据设备、购物车内容、日程、市场、客户标签或 B2B 客户 — 在两个级别应用，每个级别恰好有一套规则。

---

## 在哪里设置

- **菜单项级别**: 打开 **Edit item** → **Visibility** 组 → 点击 **Setup the Visibility rules**。 *(Visibility 组在折叠的区块内 — 如果未立即看到，点击 **See more** 展开。)*
- **菜单级别**: 打开菜单的 **Setting** 面板 → **Visibility Rules** 卡片。

从这里开始，所有条件、语法和组合方式在两个级别都是**共享的** — 只是位置不同。

> Market / Customer tag / B2B 仅适用于 **Shopify**，目前是自由文本字段（无预设下拉菜单）— 每个字段都有一个 **"View your Markets"** / **"Manage customer tags"** / **"Manage B2B companies"** 链接，直接进入相应的 Shopify Admin 页面，以便在输入前验证确切的值。

---

## 支持的条件

| 条件 | 套餐 | 显示时机 | 输入值 |
|---|---|---|---|
| **Device** | Business 及以上 | 与选定的设备匹配 | `All devices` / `Mobile only` / `Desktop only` |
| **Page / URL** | Business 及以上 | 正确的页面类型，或 URL 包含/不包含关键词 | 勾选页面类型（Home/Products/Collections/Pages/Blogs/Others）+ 2 个关键词字段 |
| **Cart contents** | Business 及以上 | 购物车有 N 个或更多产品 | 整数，例如 `1` |
| **Schedule** | Business 及以上 | 在设定的日期范围内 | 开始日期 → 结束日期（根据访问者的设备时间检查） |
| **Referrer / campaign** | Business 及以上 | 引荐网址包含文本 | 例如 `instagram.com` 或 `utm_campaign=summer` |
| **Market / Country** | Elite | 访问者在选定的市场下浏览 | 市场句柄，多个值用逗号分隔：`us, ca` |
| **Customer tag** | Elite | 已登录的访问者有该标签 | 单个标签，例如 `vip` |
| **B2B customer** | Elite | 已登录的访问者使用 B2B 帐户 | 开/关切换 |

> ⚠️ **菜单级别**的条件目前**不适用于 Mobile Menu (Slide)** — 如果在 Mobile Menu 上设置可见性规则，在店铺前端显示时无效。**项目级别**的条件（Mobile Menu 内）正常工作。我们正在修复此限制。

---

## 条件如何组合

所有启用的条件必须**全部匹配**才能显示菜单/项目 — 只要有一个条件失败就会立即隐藏。空条件被跳过，不计算。

例如，同时启用 Device = Mobile only **和** Schedule = 01/09–15/09：仅对手机用户显示，**并且**仅在这 2 周内显示。

<div align="center">

<svg viewBox="0 0 680 300" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="vrArrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#1a7a4f"/>
    </marker>
    <marker id="vrArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="150" y="10" width="180" height="30" rx="15" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="30" font-size="12.5" text-anchor="middle" fill="#1a1d21">访问者进入页面</text>

  <line x1="240" y1="40" x2="240" y2="58" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="60" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="86" font-size="12.5" text-anchor="middle" fill="#1a1d21">Device — 符合选定的设备?</text>

  <line x1="240" y1="104" x2="240" y2="122" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="124" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="150" font-size="12.5" text-anchor="middle" fill="#1a1d21">Page/URL, Cart, Schedule, Referrer — 满足条件?</text>

  <line x1="240" y1="168" x2="240" y2="186" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="188" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="214" font-size="12.5" text-anchor="middle" fill="#1a1d21">Market, Tag, B2B (Elite 套餐) — 符合该访问者?</text>

  <line x1="240" y1="232" x2="240" y2="250" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="150" y="252" width="180" height="34" rx="17" fill="#1a7a4f"/>
  <text x="240" y="274" font-size="13" font-weight="600" text-anchor="middle" fill="#fff">显示</text>

  <rect x="470" y="55" width="160" height="182" rx="10" fill="#fef2f2" stroke="#fecaca"/>
  <text x="550" y="140" font-size="16" font-weight="700" text-anchor="middle" fill="#b91c1c">隐藏</text>
  <text x="550" y="158" font-size="11" text-anchor="middle" fill="#b91c1c">立即</text>

  <line x1="420" y1="82" x2="470" y2="82" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="76" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="146" x2="470" y2="146" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="140" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="210" x2="470" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="204" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>
</svg>

</div>

*仅有一个启用的条件失败（右侧分支 ✗）就会立即隐藏菜单/项目 — 无论其他条件是否通过。空条件（未启用）被跳过且忽略。*

---

## 5 个真实示例

### 1. 同时进行批发和零售，对零售客户隐藏批发价格（菜单级别）

您的店铺同时进行批发和零售。批发客户（有 Shopify 认可的 B2B 帐户）购买价格更优，有自己的产品/系列组。您想要一个菜单组"批发价格"、"快速批发订单"、"批发产品" — 仅对批发客户显示，零售访问者看不到这样的菜单（避免价格混淆并隐藏折扣）。

**方法:** 建立一个包含批发链接的单独菜单（或菜单组）。进入 **Setting → Visibility Rules**，启用 **B2B customer**。结果：此菜单仅对已登录的 B2B 帐户用户显示；零售客户（即使已登录）浏览时也看不到此菜单。

### 2. 限时促销横幅，仅在购物时显示（项目级别）

您想要一个"满 50 元免运费"横幅仅在销售期间显示，且仅对已向购物车添加至少一个产品的客户显示（避免分散新访问者的注意力）。

**方法:** 在横幅项上点击 **Setup the Visibility rules** → 启用 **Cart contents** = `1`，以及 **Schedule** = 销售开始/结束日期。

### 3. VIP 客户的独家优惠链接（项目级别）

您想要一个菜单项"VIP 特权"仅对标记为 VIP 的客户可见，而普通客户甚至不知道它存在。

**方法:** 通过 Shopify Flow/Customer Segment 标记 VIP 客户组（Segment → Flow "Customer enters segment" → 应用标签）。在项上点击 **Setup the Visibility rules** → 启用 **Customer tag** = `vip`。

### 4. 为 VIP 客户提供高级 Tab Bar（菜单级别）

您的店铺希望 VIP 客户有不同的导航体验 — 深色背景、闪耀效果、高级感觉 — 而不是与所有人共享标准界面。

**方法:** 建立一个高级深色模板的单独 Tab Bar，发布到您店铺默认使用的同一 Tab Bar 位置。进入 **Setting → Visibility Rules**，启用 **Customer tag** = `vip`（如示例 3 通过 Shopify Flow/Customer Segment 标记）。结果：VIP 标记的客户看到高级 Tab Bar；普通客户仍看到您的标准 Tab Bar。*(Mobile Menu 使用相同方法 — 但首先检查上面的 Mobile Menu (Slide) 限制说明。)*

### 5. 当客户添加第一个商品时 FAB 促进加购（菜单级别）

客户刚添加了第一个产品到购物车 — 关键时刻 — 您想要一个浮动按钮（FAB）显示促销信息来促进他们更快结账（如"多买可获免运费"、赠品等），而不是 FAB 一直显示从一开始就搞乱视图。

**方法:** 建立一个包含促销内容的 FAB（Floating Button）。进入 **Setting → Visibility Rules**，启用 **Cart contents** = `1`（仅在购物车有 1+ 个产品时显示）。结果：FAB 保持隐藏，直到客户将第一个产品添加到购物车。*注：条件仅检查购物车中的产品数量，不检查订单价值 — "50 元免运费"是您在 FAB 内自己编写的营销文案，不是按价格计算的可见性规则。*

---
