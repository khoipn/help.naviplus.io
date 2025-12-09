---
description: 'Step 1: Click Online Store, then click Themes. Tips: Right-click on Online Store and select “Open Link in New Tab” to save time.&'
layout: default
permalink: /docs/usage/slide-menu-hamburger-menu/publishing-on-shopify/
title: Publishing on Shopify
---
# Publishing on Shopify

### Step 2: (Shopify) Publish the menu on your website.

#### 2.1. Turn on Navi+ on App Embeds

Step 1: Click Online Store, then click Themes. Tips: Right-click on Online Store and select “Open Link in New Tab” to save time.&#x20;

Step 2: Select the theme where you want to publish the menu.  Click: **Customize**

* If your website is new and has no users yet, feel free to publish the menu without worry—you can easily turn it on or off at any time without affecting visitors.
* If your website already has regular traffic, be more careful. The best practice is to create a **duplicate Theme** and test Navi+ on that version first.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

Step 3: Go to App embeds, find “Navi+ on All pages”, and turn it on.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

Step 4: Don’t forget to click “Save” to apply the changes.

After these 4 steps, Navi+ has been installed on your website and is ready to display. However, the process is not yet complete. Go back to the Navi+ app tab to actually turn on **Publish Menu**.

#### 2.2. Select display settings and publish the menu.

Step 1: Click the **Publish to website** button.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

Step 2: Turn on toggle "Publish menu (visible only when opened by the user)".&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FhSDziWrg4Jxr9bZ9jB4j%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=3c39339c-fe75-4653-86e7-411318cf506d" alt=""><figcaption></figcaption></figure>

Step 3: Select display method&#x20;

**Method 1: Open this menu from another Navi+ menu item using the syntax open:NaviMenu**

This method allows you to open a slide menu when the user clicks or taps a menu item from another Navi+ menu (for example: on a tab bar, a FAB in the bottom corner of the screen, or a mega menu). Main purposes of this method:

<details><summary>Purpose 1: Improved visibility and user experience by showing the full site map in the slide menu while keeping it easy to access.</summary>
<p>The slide menu is ideal for displaying your full site map thanks to its large space and flexible layout, making it perfect for showing the entire product catalog, links to key pages, blogs, support tools, etc. However, the slide menu is often less visible by default. To improve discoverability, you can use another Navi+ menu (such as a tab bar) to present your most important and recognizable links, and place a highlighted menu item that triggers the slide menu. This ensures better visibility and user engagement for the slide menu.</p>
</details>

<details><summary>Purpose 2: <strong>Unlimited menu depth with a large, flexible menu structure (Only Navi+)</strong></summary>
<p>Instead of showing a popup with limited space when a menu item is clicked, you can open another slide menu with three levels and multiple ways to present information. This can be repeated for other menu items—or even for the same slide menu—allowing you to create virtually unlimited depth for your Navi+ menus.</p>
</details>

**Method 2: When a UI element (defined by a CSS selector such as #id\_of\_element or .class\_name) is clicked or tapped, this menu will be displayed.**

This is arguably the best and most commonly used method with the Slide Menu.\
In this guide, we’ll focus on replacing the website’s default hamburger menu on mobile.\
You can also apply this method creatively by finding and using other CSS selectors to trigger the menu.

<details><summary>How to replace your website’s default hambuger menu with the Navi+ Slide Menu (<strong>Popular guide)?</strong></summary>
<p>On most Shopify websites, the default hamburger menu is generated from the desktop version via responsive design. As a result, it’s usually very simple, has shallow depth, and lacks support for icons, images, or advanced layouts. Replacing it with a Navi+ Slide Menu is a common and practical choice to take advantage of Navi+’s advanced features.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIB9UqVXh9bL1z4AuHAQj%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=1bef8174-8a59-4765-b2ea-e669c1d12fd6" alt=""><figcaption></figcaption></figure>

<p>To do this, simply identify the CSS selector of your website’s hamburger menu icon and enter it into the textbox. We’ve already found the CSS selectors for some of the most popular themes for you, listed below.</p>
<ol>
<li>CSS selectors for some popular, free themes.. from Shopify as Dawn, Sense, Savor, Horizon..</li>
</ol>
<pre class="codehilite"><code>#Details-menu-drawer-container 
</code></pre>

<ol>
<li>Not in this list, don't worry</li>
</ol>
<pre class="codehilite"><code>- You can chat with a Navi+ supporter for instant help—this only takes a few minutes to find the CSS selector.

- Or, you can follow the self-help guide in next topics (Right after this topic).
</code></pre>
</details>

<details><summary><strong>How to find the CSS selector on your website?</strong></summary>
<p>You can chat with a Navi+ supporter to get instant help instead of doing it yourself.\
However, (1) this will help you understand the core idea, and (2) if you want to do it on your own, follow the instructions below.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### 2.3. Important! Optimize the slide menu speed, add a loading effect, and prevent duplicate menus

It’s not something you need to fix right away, but in the long run it’s important for the slide menu experience created by Navi+. Before Navi+ fully replaces the old slide menu, the theme’s original menu is still active. For a brief moment—about half a second—if a user loads the menu and quickly taps the hamburger button (a rare case, but still possible), the old theme menu may appear and cause a visual glitch.

<details><summary>Navi+ provides a simple solution to optimize the user experience and speed as follows steps</summary>
<h4>Why do you need to do this? Isn’t Navi+ already fast?</h4>
<p>Navi+ is very fast. It is fully deployed on a leading CDN with very low latency (around 100ms) and can serve millions of customers without slowing down.</p>
<p>However, Navi+ still runs within the Shopify ecosystem. Shopify has its own loading rules:</p>
<ol>
<li>Shopify prioritizes loading its own resources first.</li>
<li>Then Shopify loads the theme content.</li>
<li>Finally, Shopify loads app content, but not in any specific order.</li>
</ol>
<p>This means if you are using multiple apps, Navi+ may sometimes be loaded later than expected. That’s why it can feel slower in certain cases.</p>
<hr />
<h3>What is my solution?</h3>
<p>Currently, Navi+ has high priority when loading on Shopify websites. However, there is still a certain delay. We will address these issues one by one here:</p>
<h4>Slide Menu: Add a loading effect and lock the trigger selector</h4>
<p>Very simple: just enter the CSS selector you use for the Slide Menu into the embed section of the Navi+ app (see image below).</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

<p>Note:</p>
<ul>
<li>Add the suffix <strong>(M)</strong> if you want it to apply only on mobile.</li>
<li>Add the suffix <strong>(D)</strong> if you want it to apply only on desktop.</li>
<li>Leave no suffix if you want it to apply on both platforms.</li>
</ul>
</details>
