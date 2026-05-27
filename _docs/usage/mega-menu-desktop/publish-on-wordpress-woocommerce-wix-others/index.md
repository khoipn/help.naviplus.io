---
description: 'If you deploy your website on Shopify, please install the dedicated Shopify app here: <https://apps.shopify.com/pronavi-navigation-design> - It is optimized ...'
layout: default
permalink: /docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/
title: Publish on Wix / Squarespace / Others
---
# Publish on Wix / Squarespace / Others

> **On WordPress?** Use the dedicated [Naviplus Menu Builder plugin]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/) instead of the manual embed below — no theme edits, place the Mega Menu via shortcode or Gutenberg block.

> **On Shopify?** Install the dedicated [Shopify app](https://apps.shopify.com/pronavi-navigation-design) — it's optimised for the platform with built-in publish options.

This page covers the **manual script embed** method, which is the right path for [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), and custom websites built with PHP, Node.js, or pure HTML. You have the following implementation methods:

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
