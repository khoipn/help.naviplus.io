---
description: 两个设置可以防止您的 Desktop Mega Menu 换行或过早切换到移动版本，还有一种方式可以在移动设备上以 Slide menu 形式展示它。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/mega-menu-desktop/faq/
title: 常见问题
---
# 常见问题

#### 问题 1：我如何防止 Desktop Mega Menu 换行到第二行？

有两种情况会破坏桌面 Mega Menu 栏的布局：顶级项目过多，或网站在比标准桌面更窄的窗口中查看。两个设置可以解决这个问题 — 无需代码。

<div align="center">

<svg viewBox="0 0 680 340" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="24" font-size="14" font-weight="600" fill="#1a1d21">Before — too many items wrap to a second line</text>
  <rect x="20" y="36" width="640" height="110" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="69" y="68" text-anchor="middle">Home</text>
    <rect x="112" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="147" y="68" text-anchor="middle">Shop</text>
    <rect x="190" y="50" width="110" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="245" y="68" text-anchor="middle">Categories</text>
    <rect x="308" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="343" y="68" text-anchor="middle">Sale</text>
    <rect x="386" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="421" y="68" text-anchor="middle">Blog</text>
    <rect x="464" y="50" width="82" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="505" y="68" text-anchor="middle">About</text>
    <rect x="554" y="50" width="42" height="28" rx="14" fill="#fff" stroke="#e6e8eb" stroke-dasharray="3 2"/>
  </g>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="92" width="42" height="28" rx="14" fill="#fff" stroke="#e6e8eb" stroke-dasharray="3 2"/>
    <rect x="84" y="92" width="94" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="131" y="110" text-anchor="middle">Contact</text>
    <rect x="186" y="92" width="94" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="233" y="110" text-anchor="middle">Support</text>
  </g>
  <text x="600" y="140" font-size="20" text-anchor="middle" fill="#dc2626">⚠</text>
  <text x="20" y="170" font-size="12" fill="#4b5563">The second row pushes page content down, and the header height changes unpredictably across screen sizes.</text>

  <text x="20" y="204" font-size="14" font-weight="600" fill="#1a1d21">After — "Menu overflow navigation" keeps it on one row</text>
  <rect x="20" y="216" width="640" height="50" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="228" width="70" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="69" y="245" text-anchor="middle">Home</text>
    <rect x="112" y="228" width="70" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="147" y="245" text-anchor="middle">Shop</text>
    <rect x="190" y="228" width="106" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="243" y="245" text-anchor="middle">Categories</text>
    <rect x="304" y="228" width="66" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="337" y="245" text-anchor="middle">Sale</text>
    <rect x="378" y="228" width="66" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="411" y="245" text-anchor="middle">Blog</text>
  </g>
  <rect x="600" y="228" width="40" height="26" rx="13" fill="#1a7a4f"/>
  <text x="620" y="246" font-size="14" text-anchor="middle" fill="#fff">›</text>
  <path d="M615 216 L625 216 L620 208 Z" fill="#fff" stroke="#e6e8eb"/>
  <rect x="520" y="150" width="140" height="66" rx="6" fill="#fff" stroke="#e6e8eb"/>
  <text x="590" y="170" font-size="12" text-anchor="middle" fill="#1a1d21">About</text>
  <text x="590" y="188" font-size="12" text-anchor="middle" fill="#1a1d21">Contact</text>
  <text x="590" y="206" font-size="12" text-anchor="middle" fill="#1a1d21">Support</text>
  <text x="20" y="298" font-size="12" fill="#4b5563">Items that don't fit (About, Contact, Support...) live behind the arrow button — click to reveal them, without wrapping.</text>
</svg>

</div>

**Menu overflow navigation** — 前往 **Setting → Layout → Desktop**，然后切换 **"Show navigation arrows when menu overflows"**。启用后，顶级栏始终保持在一行；不适应的项目隐藏在 `›` 箭头按钮后面，而不是换行。两个额外字段让您为按钮设置样式：**Button background color** 和 **Arrow icon color**。

**Mobile switch breakpoint** — 默认情况下，任何宽度小于 768px 的屏幕都会将整个菜单切换到移动/汉堡菜单模式，即使仍有足够空间容纳桌面布局（在平板电脑或调整大小的浏览器窗口上常见）。在相同的 **Setting → Layout → Desktop** 区域中，降低 **Breakpoint (px)** 字段的值以保持桌面栏在更窄的宽度上可见。

<div align="center">

<svg viewBox="0 0 640 210" width="100%" style="max-width:600px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="10" width="600" height="190" rx="10" fill="#fff" stroke="#e6e8eb"/>
  <text x="40" y="34" font-size="12" font-style="italic" fill="#4b5563">Setting → Layout → Desktop</text>
  <line x1="40" y1="44" x2="580" y2="44" stroke="#e6e8eb"/>
  <rect x="40" y="62" width="24" height="24" rx="6" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="52" y="79" font-size="13" text-anchor="middle" fill="#1a7a4f">↔</text>
  <text x="76" y="72" font-size="13" font-weight="600" fill="#1a1d21">Mobile switch breakpoint</text>
  <text x="76" y="90" font-size="11" fill="#6b7280">Screen width below which the menu switches to mobile</text>
  <rect x="480" y="60" width="80" height="26" rx="5" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="520" y="78" font-size="12" text-anchor="middle" fill="#1a1d21">768 px</text>
  <line x1="40" y1="114" x2="580" y2="114" stroke="#f0f2f4"/>
  <rect x="40" y="132" width="24" height="24" rx="6" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="52" y="149" font-size="13" text-anchor="middle" fill="#1a7a4f">›</text>
  <text x="76" y="142" font-size="13" font-weight="600" fill="#1a1d21">Menu overflow navigation</text>
  <text x="76" y="160" font-size="11" fill="#6b7280">Show navigation arrows when the menu overflows</text>
  <rect x="520" y="130" width="40" height="22" rx="11" fill="#1a7a4f"/>
  <circle cx="550" cy="141" r="9" fill="#fff"/>
  <text x="40" y="188" font-size="11" fill="#6b7280">Both cards only appear for a Desktop Mega Menu — not Tabbar, FAB, Slide, or Mobile Mega Menu.</text>
</svg>

</div>

<div align="center">

<svg viewBox="0 0 680 260" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="22" font-size="14" font-weight="600" fill="#1a1d21">Default — fixed at 768px</text>
  <rect x="40" y="34" width="384" height="34" fill="#e6e8eb"/>
  <text x="232" y="56" font-size="12" text-anchor="middle" fill="#4b5563">Mobile / Hamburger</text>
  <rect x="424" y="34" width="216" height="34" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="532" y="56" font-size="12" text-anchor="middle" fill="#0f5c3a">Desktop Mega Menu</text>
  <line x1="424" y1="26" x2="424" y2="76" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="424" y="90" font-size="11" text-anchor="middle" fill="#1a1d21">768px</text>

  <text x="20" y="140" font-size="14" font-weight="600" fill="#1a1d21">After setting Breakpoint = 600 (+ overflow navigation enabled)</text>
  <rect x="40" y="152" width="300" height="34" fill="#e6e8eb"/>
  <text x="190" y="174" font-size="12" text-anchor="middle" fill="#4b5563">Mobile / Hamburger</text>
  <rect x="340" y="152" width="84" height="34" fill="#e6f4ed" stroke="#1a7a4f" stroke-dasharray="4 2"/>
  <text x="382" y="169" font-size="10.5" text-anchor="middle" fill="#0f5c3a">Desktop</text>
  <text x="382" y="181" font-size="10.5" text-anchor="middle" fill="#0f5c3a">(new range)</text>
  <rect x="424" y="152" width="216" height="34" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="532" y="174" font-size="12" text-anchor="middle" fill="#0f5c3a">Desktop Mega Menu</text>
  <line x1="340" y1="144" x2="340" y2="194" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="340" y="208" font-size="11" text-anchor="middle" fill="#1a1d21">600px</text>
  <line x1="424" y1="144" x2="424" y2="194" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="424" y="208" font-size="11" text-anchor="middle" fill="#1a1d21">768px</text>
  <text x="20" y="238" font-size="12" fill="#4b5563">The 600–768px range used to be hidden as mobile — it now keeps the desktop layout.</text>
</svg>

</div>

> 这打开的新范围（在您的断点和 768px 之间）比标准桌面更窄 — 启用上面的 **Menu overflow navigation** 以确保顶级项目在该范围内不换行。

**示例：** Breakpoint = `600`，启用 Menu overflow navigation：

| 屏幕宽度 | 行为 |
|---|---|
| 低于 600px | 移动 / 汉堡菜单 |
| 600px – 768px | Desktop Mega Menu，箭头按钮将项目保持在一行 |
| 768px 以上 | Desktop Mega Menu，标准行为 |

这两个设置是独立的 — 启用其中一个不会启用另一个。它们仅影响 **Desktop Mega Menu**，不影响 Tabbar、FAB、Slide menu 或 Mobile Mega Menu。

***

#### 问题 2：我如何在移动设备上以 Slide menu 形式展示我的 Desktop Mega Menu？

使用 **Smart responsive** 而不是手动重建树：打开您的 Desktop Mega Menu → **Setting → Mobile** → 卡片 **"Smart responsive"**。它将此菜单的 **live reference** 嵌入到 Slide menu 中 — 您只在此处编辑内容，移动版本会自动更新。

<div align="center">

<svg viewBox="0 0 640 300" width="100%" style="max-width:600px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="20" font-size="13" font-weight="600" fill="#1a1d21">Desktop Mega Menu — 3 columns</text>
  <rect x="20" y="30" width="270" height="230" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="35" y="50" font-size="11" font-weight="600" fill="#1a1d21">Collections</text>
  <line x1="20" y1="58" x2="290" y2="58" stroke="#e6e8eb"/>
  <line x1="110" y1="66" x2="110" y2="252" stroke="#e6e8eb"/>
  <line x1="200" y1="66" x2="200" y2="252" stroke="#e6e8eb"/>
  <text x="35" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Women</text>
  <text x="35" y="94" font-size="10.5" fill="#1a1d21">Dresses</text>
  <text x="35" y="112" font-size="10.5" fill="#1a1d21">Tops</text>
  <text x="125" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Men</text>
  <text x="125" y="94" font-size="10.5" fill="#1a1d21">New in</text>
  <text x="125" y="112" font-size="10.5" fill="#1a1d21">Sale</text>
  <text x="215" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Info</text>
  <text x="215" y="94" font-size="10.5" fill="#1a1d21">Size guide</text>
  <text x="215" y="112" font-size="10.5" fill="#1a1d21">Shipping</text>

  <text x="315" y="150" font-size="22" text-anchor="middle" fill="#1a7a4f">→</text>
  <text x="315" y="172" font-size="10" text-anchor="middle" fill="#6b7280">Smart</text>
  <text x="315" y="184" font-size="10" text-anchor="middle" fill="#6b7280">responsive</text>

  <text x="360" y="20" font-size="13" font-weight="600" fill="#1a1d21">Slide menu — flattened to 1 column</text>
  <rect x="360" y="30" width="130" height="250" rx="16" fill="#1a1d21"/>
  <rect x="368" y="42" width="114" height="226" rx="4" fill="#fff"/>
  <text x="425" y="60" font-size="10.5" font-weight="600" text-anchor="middle" fill="#1a1d21">Collections</text>
  <line x1="374" y1="68" x2="476" y2="68" stroke="#e6e8eb"/>
  <text x="380" y="86" font-size="9.5" fill="#1a1d21">Dresses</text>
  <text x="380" y="102" font-size="9.5" fill="#1a1d21">Tops</text>
  <line x1="374" y1="112" x2="476" y2="112" stroke="#f0f2f4"/>
  <text x="380" y="128" font-size="9.5" fill="#1a1d21">New in</text>
  <text x="380" y="144" font-size="9.5" fill="#1a1d21">Sale</text>
  <line x1="374" y1="154" x2="476" y2="154" stroke="#f0f2f4"/>
  <text x="380" y="170" font-size="9.5" fill="#1a1d21">Size guide</text>
  <text x="380" y="186" font-size="9.5" fill="#1a1d21">Shipping</text>
  <text x="425" y="250" font-size="8.5" text-anchor="middle" fill="#6b7280">one tap reaches every link</text>
</svg>

</div>

**步骤 1：复制此菜单项模板** — 点击 **Copy embed item**。

**步骤 2：选择要粘贴的 Slide menu** — 将其粘贴到现有 Slide menu 的 **level 1**（如果您还没有 Slide menu，请先创建一个）。

**步骤 3：从移动副本中隐藏项目** *(可选)* — 打开任何项目 → **Visibility** → 启用 **"Exclude when embedded"**。它保留在桌面版本中，仅从嵌入的移动副本中消失。

多列布局会自动展平：列变为一个垂直列表，列标题被删除，在原来的单独列之间插入分隔线 — 这样访问者只需点击一次就能到达每个链接，而不是两次。

嵌入后，卡片会显示 **"This menu already shows on mobile"**，并带有直接指向 Slide menu 的链接，以便您随时检查。
