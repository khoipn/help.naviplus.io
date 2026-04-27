# Publish on WordPress / Woo / Wix / Others

If you deploy your website on Shopify, please install the dedicated [Shopify](https://www.shopify.com/) app here: <https://apps.shopify.com/pronavi-navigation-design> - It is optimized for this platform, allowing for stable deployment with many useful built-in options.

If you deploy your website on other platforms (such as [WordPress](https://wordpress.org/), [WooCommerce](https://woocommerce.com/), [Wix](https://wix.com/), [Squarespace](https://www.squarespace.com/), [Webflow](https://webflow.com/), [Magento](https://magento-opensource.com/), and custom websites built with PHP, Node.js, or pure HTML..), you have the following implementation methods:

### 1. Embed Navi+ on Your Website

This implementation method is suitable for all menu types that Navi+ currently supports, including: Tabbar, Mega menu, Slide menu, FAB, and Grid menu. This code only needs to be used once for all menus.

```html
<!-- Insert this code to the <head> of website. (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
<!-- Insert this code to the <head> of website -->
```

### FAQ (Frequently Asked Questions)

<details>

<summary>What is token?</summary>

Each Navi+ account is assigned a unique token. You can view and copy this token directly from the application header. The token is used to securely publish your menu.

</details>

<details>

<summary>What is https://live.naviplus.app/start.js?</summary>

This is Navi+’s fixed URL that contains the application’s initialization logic. The script is lightweight (around 4KB), allowing it to load quickly across most devices and network conditions. It is delivered via Cloudflare and BunnyCDN to provide stable global performance and reliable compatibility with modern browsers.

Using the async loading method also means it does not affect the website’s loading process.

</details>

<details>

<summary>Does this embed code slow down my website?</summary>

The code below is extremely lightweight and can be inserted into your website without affecting speed (only taking about 100-200ms for the first load and 0ms for subsequent loads), customer experience, or SEO scores

</details>

<details>

<summary>What is the best place to insert this code snippet?</summary>

In the head section (or as early as possible). Why? The website will sequentially load resources to render the interface. Placing Navi+ earliest in the HTML code will help your menu be ready to display as soon as possible by waiting until conditions are met, then the menu will immediately appear. This improves user experience.

</details>

<details>

<summary>How can I tell if this code has been successfully embedded on my website?</summary>

There are two ways:

**Method 1 (for everyone):**

Open your website with the suffix #navidebug-on, for example: <https://domain.com#navidebug-on>. If the website switches to Debug mode, the embed is working correctly. Debug mode helps you easily identify CSS selectors. Use #navidebug-off to turn it off.

**Method 2 (for developers):**

Open your browser’s inspect tools, go to the Console tab, and look for a green message: “Using Navi+..”. This message indicates that the code has been embedded successfully.

</details>

***

### 2. Insert a Navi+ Menu at Any Point on Your Website

The code below can be used multiple times on a website with different insertion information (especially the **Embeded ID**, such as SF-123456789). When the website is rendered, the menu will be deployed and displayed at the position where the code is inserted when conditions are met. This menu type is suitable for: Mega menu, Grid, etc.

```html
<!-- Insert the code where the menu SF-123456789 appears. (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
<!-- Insert the code where the menu SF-123456789 appears -->
```

{% hint style="info" %} <mark style="color:orange;">Important</mark>**:** The code above uses the sample embed code <mark style="color:orange;">SF-123456789</mark>. Make sure to replace it with your actual menu embed code.
{% endhint %}
