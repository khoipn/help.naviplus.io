---
description: 'If you deploy your website on Shopify, please install the dedicated Shopify app here: <https://apps.shopify.com/pronavi-navigation-design> - It is optimized ...'
layout: default
permalink: /docs/usage/fab-floating-menu-quick-access/publish-on-wordpress-woocommerce-wix-others/
title: Publish on WordPress / WooCommerce / Wix / Others
---
# Publish on WordPress / WooCommerce / Wix / Others

If you deploy your website on Shopify, please install the dedicated [Shopify](https://www.shopify.com/ "Shopify") app here: <https://apps.shopify.com/pronavi-navigation-design> - It is optimized for this platform, allowing for stable deployment with many useful built-in options.

If you deploy your website on other platforms (such as [WordPress](https://wordpress.org/ "WordPress"), [WooCommerce](https://woocommerce.com/ "WooCommerce"), [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), and custom websites built with PHP, Node.js, or pure HTML..), you have the following implementation methods:

### 1. Embed Navi+ on Your Website

The code below is extremely lightweight and can be inserted into your website without affecting speed (only taking about 100-200ms for the first load and 0ms for subsequent loads), customer experience, or SEO scores. This implementation method is suitable for all menu types that Navi+ currently supports, including: Tabbar, Mega menu, Slide menu, FAB, and Grid menu. This code only needs to be used once for all menus.

**Best position to insert into your website:** in the head section (or as early as possible). Why? The website will sequentially load resources to render the interface. Placing Navi+ earliest in the HTML code will help your menu be ready to display as soon as possible by waiting until conditions are met, then the menu will immediately appear. This improves user experience.

```html
<!-- Insert this code to the <head> of website. (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({});</script>
<script src="https://live.naviplus.app/start.js" async></script>
<!-- Insert this code to the <head> of website -->
```

### Important Notes:

You need to fill in your information in **\[your-domain.com]**, matching the domain declaration you created in the backend at <https://dash.naviplus.io>. If this information is invalid, the menu will not display on your website. You need to enter the normalized domain information - without subdomain (but it will still display on all subdomains) - see examples below for clarity:

**Valid cases:**

* **your-domain.com**: The menu will be deployed on all main domains and subdomains of this domain such as: your-domain.com, blogs.your-domain.com, chat.guide.your-domain.com
* Other valid examples: your-domain.ai (accepts all common extensions), Your-Domain.com.jp (characters will be automatically lowercased), you-domain.co.uk, tên-miền.com.vn (country domains are accepted), tên-miền.com.vn (special characters or accented characters valid in domain names are accepted)

Non-standard cases (not recommended):

* [www.your-domain.com](http://www.your-domain.com "www.your-domain.com"), info.your-domain.com
* In these cases, the [www](http://www "www"). and info. subdomain parts will be stripped, leaving the root domain as your-domain.com, and it will work normally as in the cases above. However, you should remove unnecessary subdomain parts to make maintenance easier and keep the product configuration clean.

**Invalid cases:**

* localhost, 127.0.0.1:8080 (Local test environments will not be able to display the menu)
* <https://your-domain.com/index.php?v=123#toProduct> (Too much "clutter" in your declaration such as https\://, index.php, ?v=123, #toProduct... Navi+'s algorithm will not be able to display the menu correctly)

### FAQ (Frequently Asked Questions)

<details><summary>What is <a href="https://live.naviplus.app/start.js">https://live.naviplus.app/start.js</a>?</summary>
<p>This is Navi+'s unique and fixed URL containing the entire application initialization logic. This script file is extremely lightweight — only 2KB — so it loads almost instantly on all devices and network conditions. The system can handle unlimited requests, even at tens of millions of visits per day, without creating any latency.</p>
<p>The script is simultaneously distributed on two of the world's leading CDNs: Cloudflare and BunnyCDN, ensuring optimal speed globally. Thanks to the multi-cluster distribution mechanism and ultra-stable infrastructure of these two providers, the error rate is nearly 0 (approximately 0.00001%), and it works perfectly on all modern browsers.</p>
</details>

***

### 2. Insert a Navi+ Menu at Any Point on Your Website

The code below can be used multiple times on a website with different insertion information (especially the **Embeded ID**, such as SF-123456789). When the website is rendered, the menu will be deployed and displayed at the position where the code is inserted when conditions are met. This menu type is suitable for: Mega menu, Grid, etc.

```html
<!-- Insert the code where the menu SF-123456789 appears. (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   embed_id: "SF-123456789"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
<!-- Insert the code where the menu SF-123456789 appears -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">**Important**</mark>**:** The code above uses the sample embed code [<mark style="color:orange;">SF-123456789</mark>](#user-content-fn-1 "<mark style="color:orange;">SF-123456789</mark>")[^1]. Make sure to replace it with your actual menu embed code.
{% comment %}endhint{% endcomment %}

### Important Notes:

You need to fill in your information in **\[your-domain.com]**, matching the domain declaration you created in the backend at <https://dash.naviplus.io>. You also need to fill in the **Embeded ID** information of the menu (in the format SF-123456789) into 2 places in the code above. Note: do not keep the \[] brackets when filling in and replacing in the code.

Other information is similar to case 1, which you can refer to above.

[^1]:
