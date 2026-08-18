---
description: 'If you deploy your website on Shopify, please install the dedicated Shopify app here: <https://apps.shopify.com/pronavi-navigation-design> - It is optimized ...'
layout: default
permalink: /docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/
title: Publish on Squarespace / Others
---
# Publish on Squarespace / Others

> **On WordPress?** Use the dedicated [Naviplus Menu Builder plugin]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/) instead of the manual embed below — no theme edits, place the Mega Menu via shortcode or Gutenberg block.

> **On Shopify?** Install the dedicated [Shopify app](https://apps.shopify.com/pronavi-navigation-design) — it's optimised for the platform with built-in publish options.

> **On Wix?** See the dedicated **[Publish on Wix]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publishing-on-wix/)** guide — install the Navi+ app from the Wix App Market and it embeds automatically, no code. The manual embed below is only for Squarespace, Webflow, and custom sites.

This page covers the **manual script embed** method, which is the right path for [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), and custom websites built with PHP, Node.js, or pure HTML. You have the following implementation methods:

### 1. Embed Navi+ on Your Website

This implementation method is suitable for all menu types that Navi+ currently supports, including: Tabbar, Mega menu, Slide menu, FAB, and Grid menu. This code only needs to be used once for all menus.

```html
<!-- Insert this code to the <head> of website. (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Insert this code to the <head> of website -->
```

### FAQ (Frequently Asked Questions)

<details><summary>What is token?</summary>
<p>Each Navi+ account is assigned a unique token. You can view and copy this token directly from the application header. The token is used to securely publish your menu.</p>
</details>

<details><summary>What is https://live.naviplus.app/start.js?</summary>
<p>This is Navi+’s fixed URL that contains the application’s initialization logic. The script is lightweight (around 4KB), allowing it to load quickly across most devices and network conditions. It is delivered via Cloudflare and BunnyCDN to provide stable global performance and reliable compatibility with modern browsers.</p>
<p>Using the async loading method also means it does not affect the website’s loading process.</p>
</details>

<details><summary>Does this embed code slow down my website?</summary>
<p>The code below is extremely lightweight and can be inserted into your website without affecting speed (only taking about 100-200ms for the first load and 0ms for subsequent loads), customer experience, or SEO scores</p>
</details>

<details><summary>What is the best place to insert this code snippet?</summary>
<p>In the head section (or as early as possible). Why? The website will sequentially load resources to render the interface. Placing Navi+ earliest in the HTML code will help your menu be ready to display as soon as possible by waiting until conditions are met, then the menu will immediately appear. This improves user experience.</p>
</details>

<details><summary>How can I tell if this code has been successfully embedded on my website?</summary>
<p>There are two ways:</p>
<p><strong>Method 1 (for everyone):</strong></p>
<p>Open your website with the suffix #navidebug-on, for example: <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>. If the website switches to Debug mode, the embed is working correctly. Debug mode helps you easily identify CSS selectors. Use #navidebug-off to turn it off.</p>
<p><strong>Method 2 (for developers):</strong></p>
<p>Open your browser’s inspect tools, go to the Console tab, and look for a green message: “Using Navi+..”. This message indicates that the code has been embedded successfully.</p>
</details>

***

### 2. Publish the menu using CSS Selector (recommended)

After embedding the script above, go to the Navi+ app to configure where and how your menu appears on the page.

#### I.1. Understanding CSS Selector

A CSS Selector is a way to target a specific HTML element on your webpage. Navi+ uses it to know exactly **where** to place your menu — whether to insert it before or after an element, or to replace an existing one entirely.

You don't need to be a developer to use this. Navi+ provides a simple input field where you enter the selector, and it handles the rest.

To find the correct CSS Selector for your website, you can use:
- [Debug Mode](/docs/usage/debug-mode-find-css-selectors/) — Navi+'s built-in tool: hover over any element on your page and instantly copy its selector
- [Browser DevTools](/docs/usage/general/find-css-selector/) — A manual method using your browser's built-in inspector

#### I.2. Three publishing options

Step 1: Click the **Publish to website** button in the Navi+ app.

Step 2: Turn on toggle "Publish menu by Insert/Replace method".

Step 3: Enter your CSS Selector and choose one of the three publishing options below.

<details><summary>Option 1: Insert Before</summary>
<p>Inserts the Navi+ menu immediately <strong>before</strong> the selected element.</p>
<p><strong>Example:</strong> CSS Selector <code>main</code> → the menu appears above the page's main content area.</p>
<p>Common CSS selectors for this option:</p>
<ul>
<li><code>main</code> — works on most platforms (Webflow, Magento, custom sites)</li>
<li><code>#main</code> — some platforms and custom themes</li>
<li><code>.main-content</code> — various platforms</li>
</ul>
<p>Not in this list? You can chat with a Navi+ supporter for instant help, or use <a href="/docs/usage/debug-mode-find-css-selectors/">Debug Mode</a> or <a href="/docs/usage/general/find-css-selector/">Browser DevTools</a> to find it yourself.</p>
</details>

<details><summary>Option 2: Insert After</summary>
<p>Inserts the Navi+ menu immediately <strong>after</strong> the selected element.</p>
<p><strong>Example:</strong> CSS Selector <code>header</code> → the menu appears just below the header.</p>
<p>This is the most common setup for a desktop Mega Menu.</p>
<p>Common CSS selectors for this option:</p>
<ul>
<li><code>header</code> — works on most platforms</li>
<li><code>.header-wrapper</code> — some platforms</li>
<li><code>.site-header</code> — various platforms</li>
</ul>
<p>Not in this list? You can chat with a Navi+ supporter for instant help, or use <a href="/docs/usage/debug-mode-find-css-selectors/">Debug Mode</a> or <a href="/docs/usage/general/find-css-selector/">Browser DevTools</a> to find it yourself.</p>
</details>

<details><summary>Option 3: Replace</summary>
<p>Replaces the selected element entirely with the Navi+ menu. The original element is hidden and Navi+ takes its place.</p>
<p><strong>Example:</strong> CSS Selector <code>.main-nav</code> → the site's default navigation is hidden and replaced by your Navi+ Mega Menu.</p>
<p>Common CSS selectors for this option:</p>
<ul>
<li><code>nav</code> — generic navigation element</li>
<li><code>.main-nav</code> — various platforms</li>
<li><code>.site-navigation</code> — various platforms</li>
</ul>
<p><strong>Note:</strong> When using Replace mode, a brief flash of the original menu may appear while Navi+ loads. See I.4 below to prevent this.</p>
<p>Not in this list? You can chat with a Navi+ supporter for instant help, or use <a href="/docs/usage/debug-mode-find-css-selectors/">Debug Mode</a> or <a href="/docs/usage/general/find-css-selector/">Browser DevTools</a> to find it yourself.</p>
</details>

#### I.3. Device-specific targeting

You can control whether the CSS Selector applies on mobile, desktop, or both by adding a suffix to your selector:

| Suffix | Applies to |
|--------|------------|
| `(M)` | Mobile only |
| `(D)` | Desktop only |
| *(none)* | Both mobile and desktop |

**Examples:**
- `header(D)` — inserts or replaces only on desktop
- `header(M)` — inserts or replaces only on mobile
- `header` — inserts or replaces on both platforms

**I.4. Important! Optimize Mega Menu speed and user experience (Replace mode)**

When you replace one menu with another, Navi+ waits until the old menu is displayed and then instantly swaps it with the new one. Although this happens almost immediately, there is still a brief moment where the old menu appears, which may confuse users.

With this step, you can completely hide the old menu and show a loading effect instead. This makes the website feel faster and improves the user experience. Navi+ provides a simple built-in option for this in the publish settings — enable it and configure the CSS Selector of the element to hide, with an optional `(M)` or `(D)` suffix for device-specific control.

***

### 3. Insert a Navi+ Menu at Any Point on Your Website

The code below can be used multiple times on a website with different insertion information (especially the **Embeded ID**, such as SF-123456789). When the website is rendered, the menu will be deployed and displayed at the position where the code is inserted when conditions are met. This menu type is suitable for: Mega menu, Grid, etc.

```html
<!-- Insert the code where the menu SF-123456789 appears. (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Insert the code where the menu SF-123456789 appears -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">Important</mark>**:** The code above uses the sample embed code <mark style="color:orange;">SF-123456789</mark>. Make sure to replace it with your actual menu embed code.
{% comment %}endhint{% endcomment %}

***

### 4. Keep the Desktop Mega Menu from wrapping to a second line

Once your menu is live, there are two situations that can break the layout of a desktop Mega Menu bar: too many top-level items, or the site being viewed in a narrower window than a standard desktop. Two settings inside the Navi+ app fix this — no code required.

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

**Where to configure it:** open your menu in the Navi+ app, go to **Setting → Layout → Desktop** (this section only appears for a Desktop Mega Menu).

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

**Menu overflow navigation** — toggle **"Show navigation arrows when menu overflows"**. When enabled, the top-level bar always stays on one row; items that don't fit are tucked behind a `›` arrow button instead of wrapping. Two extra fields let you style the button: **Button background color** and **Arrow icon color**.

**Mobile switch breakpoint** — by default, any screen narrower than 768px switches the whole menu to mobile/hamburger mode, even if there's still enough room for a desktop layout (common on tablets or a resized browser window). Lower the **Breakpoint (px)** field to keep the desktop bar visible down to a narrower width.

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

> The new range this opens up (between your breakpoint and 768px) is narrower than a standard desktop — enable **Menu overflow navigation** above so top-level items don't wrap in that range.

**Example:** Breakpoint = `600` with Menu overflow navigation enabled:

| Screen width | Behavior |
|---|---|
| Below 600px | Mobile / hamburger menu |
| 600px – 768px | Desktop Mega Menu, arrow button keeps items on one row |
| Above 768px | Desktop Mega Menu, standard behavior |

{% comment %}hint style="info" {% endcomment %}
**Note:** These two settings are independent — turning one on does not turn on the other. They only affect the **Desktop Mega Menu**, not the Tabbar, FAB, Slide menu, or Mobile Mega Menu. If you lower the breakpoint below roughly 400–500px, keep in mind that range is mostly touch devices, where hover-to-open submenus are less convenient than tapping.
{% comment %}endhint{% endcomment %}
