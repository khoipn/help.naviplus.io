---
description: Frequently asked questions about the Navi+ Menu Builder WordPress plugin — pricing, performance, WooCommerce, multisite, page builders, caching, privacy, and uninstall.
layout: default
permalink: /docs/integrations/wordpress-woocommerce/faq/
title: Navi+ Menu Builder FAQ
---
# Navi+ Menu Builder FAQ

<details>
<summary>Is the plugin free?</summary>
<p>Yes. The plugin itself is free on WordPress.org. Your Navi+ subscription (Starter / Business / Elite) is what determines which menu types and quotas are available. See <a href="{{ site.baseurl }}/docs/frequently-asked-questions/navi-plans-starter-business-and-elite/">Plans &amp; Pricing</a>.</p>
</details>

<details>
<summary>Do I need a Navi+ account before installing?</summary>
<p>No. When you save your first menu in <strong>Appearance → Naviplus Menu Builder</strong>, the plugin auto-connects your site to the Navi+ service — no separate signup, no token to paste.</p>
</details>

<details>
<summary>Does the plugin slow down my site?</summary>
<p>No measurable impact. The plugin only adds a single <code>&lt;script async&gt;</code> tag in <code>&lt;head&gt;</code> that loads the Navi+ runtime (~4&nbsp;KB) from Cloudflare/BunnyCDN. The runtime is fully asynchronous and does not block page rendering. Typical first-load overhead is 100–200&nbsp;ms; subsequent loads are 0&nbsp;ms because of HTTP caching.</p>
</details>

<details>
<summary>Does it work with WooCommerce?</summary>
<p>Yes. WooCommerce pages are standard WordPress pages, so menus render on shop, product, cart, and checkout pages with no extra configuration. Use display rules in the editor (URL contains <code>/cart</code>, <code>/checkout</code>, etc.) to control where menus appear.</p>
</details>

<details>
<summary>Does it work on WordPress Multisite?</summary>
<p>Yes. Activate the plugin per site (Network Activate is also supported) and configure each site's menus from its own <strong>Appearance → Naviplus Menu Builder</strong>. Each site auto-connects to Navi+ independently when its first menu is saved.</p>
</details>

<details>
<summary>Will it conflict with my theme or page builder (Elementor, Divi, Bricks, Oxygen)?</summary>
<p>No known conflicts. Menus render into their own containers and use isolated styles. To insert a section menu inside a page builder, use a <strong>Shortcode</strong> widget with <code>[naviwp embed_id="SF-..."]</code> — or an <strong>HTML</strong> widget with the embed div.</p>
</details>

<details>
<summary>Can I use the plugin and the generic script embed at the same time?</summary>
<p>No — pick one. The plugin already injects the Navi+ runtime, so a manual script tag would load it twice. If you previously embedded the script in your theme or via a header injector, remove that snippet before activating the plugin.</p>
</details>

<details>
<summary>I updated a menu but don't see the change on my site.</summary>
<p>Menus are fetched at runtime, so a WordPress cache flush is not required. If the change still doesn't appear, do a hard reload (Cmd/Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;R) to bypass the browser cache. For sticky menus, also confirm the menu is set to <strong>Published</strong> (not draft) and that its display rules match the page.</p>
</details>

<details>
<summary>How do I temporarily hide all Navi+ menus?</summary>
<p>Two options:</p>
<ul>
<li><strong>Site-wide:</strong> turn off the "Inject site-wide" switch in the plugin admin — the runtime stops loading except on pages with a <code>[naviwp]</code> shortcode/block.</li>
<li><strong>Per menu:</strong> switch the menu to <strong>Draft</strong> in the editor.</li>
</ul>
</details>

<details>
<summary>How do I uninstall the plugin?</summary>
<p>Deactivate and delete it from <strong>Plugins → Installed Plugins</strong>. The plugin stores only the site identifier and a few options in <code>wp_options</code>; uninstall removes them automatically. Your menus on the Navi+ service are preserved — if you reinstall later you can keep using the same embed IDs.</p>
</details>

<h2 id="privacy">Privacy &amp; external services</h2>

<p>The plugin connects to the Navi+ Menu Builder service to create and render menus. Data exchanged may include (but is not limited to): your <strong>site domain</strong>, your <strong>menu configuration</strong>, and minimal usage data needed to render menus.</p>

<ul>
<li>Privacy policy: <a href="https://naviplus.io/privacy">https://naviplus.io/privacy</a></li>
<li>Script loader: <code>https://live.naviplus.app/start.js</code></li>
</ul>

<details>
<summary>Where do I report a bug or request a feature?</summary>
<p>Use the official support forum: <a href="https://wordpress.org/support/plugin/naviplus-menu-builder/">https://wordpress.org/support/plugin/naviplus-menu-builder/</a>. For account or billing questions, email <a href="mailto:support@naviplus.io">support@naviplus.io</a>.</p>
</details>
