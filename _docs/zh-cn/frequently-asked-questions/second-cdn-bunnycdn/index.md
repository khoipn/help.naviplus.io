---
description: "Navi+ 如何通过两个相互独立的内容分发网络交付菜单、确保菜单始终在线，以及应用嵌入中「Use a Secondary CDN (BunnyCDN)」选项的作用 — 包括部分地区访客无法连接 Cloudflare 的情况。"
lang: zh-cn
layout: default
permalink: /zh-cn/docs/frequently-asked-questions/second-cdn-bunnycdn/
title: "Navi+ 如何让菜单始终在线 — 「Use a Secondary CDN (BunnyCDN)」选项"
---
# Navi+ 如何让菜单始终在线 — 「Use a Secondary CDN (BunnyCDN)」选项

菜单并不存储在你的主题里。每次页面加载时，浏览器会从 Navi+ 获取几个小文件 — 菜单引擎、它的样式以及你的菜单数据。这些文件来自哪里，决定了菜单能否显示、显示得有多快。本页说明这套交付机制如何运作、如何抵御故障，以及 Shopify 应用嵌入中的 **Use a Secondary CDN (BunnyCDN)** 复选框会改变什么。

---

## 两个网络，一个菜单

Navi+ 通过内容分发网络（CDN）提供菜单文件：分布在全球的一组服务器保存着相同文件的副本，让每位访客都从离自己最近的节点获取。

为了确保任何一个网络出问题都不会让你的菜单消失，同一套文件保存在由两家不同供应商运营的**两个独立网络**上：

| 网络 | 供应商 | 作用 |
|---|---|---|
| 主网络 | Cloudflare | 默认为所有店铺提供服务。 |
| 第二网络 | BunnyCDN | 保存完全相同的副本，每次 Navi+ 发布时刷新。当主网络无法交付时接替。 |

每家供应商都运营着自己的全球基础设施，并各自承诺可用性。由于两者不共用服务器，一方发生故障不会影响另一方 — 菜单从不依赖某一家公司的持续运行。

---

## 默认情况下页面加载的流程

<div align="center">

<svg viewBox="0 0 720 330" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="20" y="120" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">访客的浏览器</text>
  <text x="95" y="172" text-anchor="middle" font-size="12" fill="#4b5563">打开你的店铺</text>
  <text x="95" y="190" text-anchor="middle" font-size="12" fill="#4b5563">Navi+ 启动脚本运行</text>

  <rect x="290" y="40" width="200" height="100" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="390" y="66" text-anchor="middle" font-size="14" font-weight="600" fill="#9a3412">主网络</text>
  <text x="390" y="86" text-anchor="middle" font-size="12" fill="#7c2d12">Cloudflare</text>
  <text x="390" y="110" text-anchor="middle" font-size="11" fill="#7c2d12">菜单引擎 · 样式 · 菜单数据</text>
  <text x="390" y="126" text-anchor="middle" font-size="11" fill="#7c2d12">从离访客最近的节点提供</text>

  <rect x="290" y="200" width="200" height="100" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="390" y="226" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">第二网络</text>
  <text x="390" y="246" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN</text>
  <text x="390" y="270" text-anchor="middle" font-size="11" fill="#1e40af">每个文件的完全相同副本</text>
  <text x="390" y="286" text-anchor="middle" font-size="11" fill="#1e40af">每次 Navi+ 发布时刷新</text>

  <rect x="560" y="120" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="152" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">菜单显示</text>
  <text x="630" y="174" text-anchor="middle" font-size="12" fill="#047857">在页面上</text>

  <path d="M170,150 C230,150 230,90 290,90" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="222" y="108" text-anchor="middle" font-size="11" fill="#374151">1. 请求文件</text>

  <path d="M490,90 C530,90 530,150 560,150" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="522" y="108" text-anchor="middle" font-size="11" fill="#374151">2. 交付</text>

  <path d="M170,180 C230,180 230,250 290,250" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>
  <text x="222" y="230" text-anchor="middle" font-size="11" fill="#dc2626">若某个文件失败 →</text>
  <text x="222" y="244" text-anchor="middle" font-size="11" fill="#dc2626">自动重试</text>

  <path d="M490,250 C530,250 530,180 560,180" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>

  <path d="M390,140 L390,200" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="404" y="174" font-size="10" fill="#6b7280">保持同步</text>
</svg>

</div>

1. 主题中的 Navi+ 应用嵌入运行一个很小的启动脚本。
2. 启动脚本向**主网络**请求菜单引擎、样式和你的菜单数据。
3. 菜单显示出来。

如果其中任何一个文件无法从主网络到达 — 故障、超时、区域性问题 — 启动脚本会**自动从 BunnyCDN 重新获取同一个文件**。这一切在访客的浏览器中自动完成，你无需任何配置。实际上，单个网络的一时故障对你的顾客来说是完全无感的。

---

## 自动重试唯一无法覆盖的情况

自动重试机制就在启动脚本里。这就带来了一个盲区：如果**启动脚本本身**始终无法到达，那么什么都不会运行，也就没有东西可以重试了。

当访客的网络连接完全无法到达主网络时，就会出现这种情况。Cloudflare 是互联网上最大的网络之一，但并非从任何地方都能访问：

- 部分国家在国家层面限制或节流 Cloudflare 流量。
- 部分企业或学校网络在其网页过滤中屏蔽了它。
- 部分网络运营商在特定地区到 Cloudflare 的路由质量差，导致请求超时。

如果一家店铺的顾客大多位于这类地区，对你来说运行完美的菜单，对他们却可能不显示 — 而自动重试根本没有机会发挥作用。

---

## 「Use a Secondary CDN (BunnyCDN)」的作用

开启该选项会调换优先级，让菜单完全不再依赖主网络：

<div align="center">

<svg viewBox="0 0 720 300" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb"/>
    </marker>
  </defs>

  <rect x="20" y="105" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="135" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">访客的浏览器</text>
  <text x="95" y="157" text-anchor="middle" font-size="12" fill="#4b5563">打开你的店铺</text>
  <text x="95" y="175" text-anchor="middle" font-size="12" fill="#4b5563">启动脚本向两处请求</text>

  <rect x="290" y="30" width="200" height="80" rx="10" fill="#fafafa" stroke="#d1d5db" stroke-width="1.5"/>
  <text x="390" y="56" text-anchor="middle" font-size="14" font-weight="600" fill="#6b7280">主网络</text>
  <text x="390" y="76" text-anchor="middle" font-size="12" fill="#6b7280">Cloudflare</text>
  <text x="390" y="96" text-anchor="middle" font-size="11" fill="#6b7280">仅启动脚本</text>

  <rect x="290" y="150" width="200" height="120" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="390" y="176" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">第二网络</text>
  <text x="390" y="196" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN — 现为主源</text>
  <text x="390" y="220" text-anchor="middle" font-size="11" fill="#1e40af">启动脚本</text>
  <text x="390" y="236" text-anchor="middle" font-size="11" fill="#1e40af">菜单引擎 · 样式 · 菜单数据</text>
  <text x="390" y="256" text-anchor="middle" font-size="11" fill="#1e40af">启动后的一切</text>

  <rect x="560" y="105" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="137" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">菜单显示</text>
  <text x="630" y="159" text-anchor="middle" font-size="12" fill="#047857">在页面上</text>

  <path d="M170,135 C230,135 230,70 290,70" fill="none" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#cdnArrow2)"/>
  <text x="222" y="90" text-anchor="middle" font-size="11" fill="#6b7280">启动（谁先</text>
  <text x="222" y="104" text-anchor="middle" font-size="11" fill="#6b7280">响应用谁）</text>

  <path d="M170,165 C230,165 230,210 290,210" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>

  <path d="M490,210 C530,210 530,150 560,150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>
  <text x="522" y="192" text-anchor="middle" font-size="11" fill="#2563eb">交付</text>
</svg>

</div>

- **启动脚本会同时向两个网络请求**，只要访客所在位置能连上其中任意一个，菜单就能启动。
- **之后的一切** — 菜单引擎、样式和你的菜单数据 — 都从 **BunnyCDN** 加载，而不是 Cloudflare。

主网络仅作为启动脚本的第二次机会保留；BunnyCDN 成为菜单本身的主要来源。

---

## 什么时候应该开启？

除非符合以下情况之一，否则请保持**关闭**：

- **Navi+ 支持团队要求你开启。** 当你反馈部分访客看不到菜单时，我们会核查这些访客所在位置以及他们能连上哪个网络。如果问题出在主网络，我们会请你开启此选项。
- **你确知你的顾客位于 Cloudflare 受限或不稳定的地区。** 如果你的店铺主要服务这类地区，BunnyCDN 对你来说是更稳妥的主源选择。勾选该选项并告知我们 — 我们乐意从我们这边确认变更无误。

典型迹象：菜单对你和大多数访客都正常显示，但某个特定国家或特定网络的顾客反馈从未看到过菜单。

---

## 为什么默认关闭

两个网络都覆盖全球且速度快。对绝大多数店铺来说，切换并无收益，而默认路径是我们监控最严密、修复最先上线的路径。该选项是为上述少见情况准备的工具，不是性能设置。

---

## 会影响页面速度吗？

预计不会有明显变化。BunnyCDN 从其自有的全球节点提供相同的文件。向两个网络请求启动脚本只是多了一个很小的请求；菜单引擎和菜单数据仍然只从单一来源加载一次。

---

## 如何开启或关闭

1. 在 Shopify 后台打开 **在线商店 → 模板 → 自定义**。
2. 点击左侧边栏的 **应用嵌入** 图标。
3. 找到 **Navi+** 并展开。
4. 勾选或取消勾选 **Use a Secondary CDN (BunnyCDN)**。
5. 点击 **保存**。

变更在下一次页面加载时生效。Navi+ 应用内无需任何配置。

> 如果支持团队在排查问题期间请你开启，请保持开启直到他们确认问题已解决 — 之后你可以再关闭。
