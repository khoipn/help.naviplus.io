---
description: <details><summary>How to change the menu appearance using Navi+’s built-in settings or by adding custom CSS?</summary>
layout: default
permalink: /docs/frequently-asked-questions/menu-interface-ui/
title: Menu interface (UI)
---
# Menu interface (UI)

<details><summary>How to change the menu appearance using Navi+’s built-in settings or by adding custom CSS?</summary>
<p>Navi+ provides several common configuration options for menus, in the <strong>"Design"</strong> tab, such as background, typography (font familly, size..) , and icons/images (size, gap, curve...). By using these settings, your menu can usually be styled to match the overall design and branding of your website.</p>
<p>Navi+ menus support up to 3 levels. In the <strong>"Design"</strong> tab, you can only configure the style for 2 levels, and there is no direct option to set font size or icon/image size for level 2 and level 3 menus. So how can you do that?</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEeUzjyXb0DDSzsPobpqC%2FCSS%201.0.png?alt=media&#x26;token=ab2b0265-e0cd-4777-964d-285e4d947c64" alt=""><figcaption></figcaption></figure>

<h4>Deep menu customization with the CSS &amp; Coding tool</h4>
<p>However, if you or your website developer have a basic understanding of CSS (Stylesheets), you can customize the entire menu design using the built-in "<strong>CSS &amp; Coding"</strong> tool in Navi+ without editing your theme files directly. This offers several benefits:</p>
<ul>
<li>You can separate CSS configurations for Navi+ menus from your theme. This means upgrading or changing your theme won’t affect your Navi+ menus.</li>
<li>Navi+ uses a smart protection mechanism by automatically adding a prefix (like <code>#SF-123456789</code>) at the start of each CSS rule. This keeps CSS for different Navi+ menus isolated, minimizing the risk of style conflicts.</li>
<li>If needed, you can still add CSS that affects the entire website directly within Navi+, though this should be used sparingly and only when necessary.</li>
</ul>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwIMkFPG3bnaAfvN3fRy4%2FCSS.1.1.png?alt=media&#x26;token=91b34b8a-ae77-4d14-a52d-f30568f8b2c5" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRMPDJmuihVuXKunOmmAZ%2FCSS.1.2.png?alt=media&#x26;token=0ebcac44-dba7-4306-80aa-815323c027b3" alt=""><figcaption></figcaption></figure>

<p><strong>Important note:</strong> The <strong>Internal Stylesheet / CSS textbox</strong> automatically adds a prefix (e.g., <code>#SF-123456789</code>) before each CSS rule. This ensures that your CSS only applies to the specific menu being customized and prevents style conflicts.</p>
<h4>Some typical case studies of using CSS</h4>
<p>1) To configure the appearance of the entire menu at the highest level, you can write a snippet that is not standard CSS but very simple. For example, the snippet below changes the menu background to red. Add the following code to the Internal Stylesheet / CSS textbox:</p>
<pre class="codehilite"><code>{
    background: red;
}
</code></pre>

<p>2) Configure size, typography, and colors for each menu item level. Add the following code to the Internal Stylesheet / CSS textbox:</p>
<pre class="codehilite"><code>// Customize the text style of level 1 menu items
ul &gt; li.item &gt; .inner .name {
    font-size: 14px;
    color: red;
}

// Customize the text style of level 2 menu items
ul.children[menulevel=&quot;2&quot;] &gt; li.child &gt; .inner .name{
     font-size: 16px; 
     color: blue;
}

// Customize the text style of level 3 menu items
ul.children[menulevel=&quot;3&quot;] &gt; li.child &gt; .inner .name{
     font-size: 13px; 
     color: green;     
}
</code></pre>

<p>3) Change font thickness using <code>font-weight.</code>Add the following code to the Internal Stylesheet / CSS textbox:</p>
<pre class="codehilite"><code>// Set the font thickness of name
.name {
  font-weight: 700;
}

// Set the font thickness of description
.description {
  font-weight: 700;
}
</code></pre>

<p>4) Adjust the size of the arrow. Add the following code to the Internal Stylesheet / CSS textbox:</p>
<pre class="codehilite"><code>ul &gt; li.is-parent-top::after {
  font-size: 24px !important;
}
</code></pre>
</details>

<details><summary>How to remove the active state (gray background) on a menu item?</summary>
<p>By default, Navi+ checks the current page URL to show the active state on the menu (using a gray background). This helps your customers navigate more easily.</p>
<p>However, the active state is not always necessary, especially on wide desktop screens where there are other ways to indicate "where you are," such as breadcrumbs. Sometimes, you may want to remove the active state to make the menu look cleaner.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FAQCfjosVopNC9mXDDbII%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=1167aaa9-c22e-4102-9eb9-6e5ee10dc14a" alt=""><figcaption></figcaption></figure>

<p>Here’s how to do it:</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyaI6k6GmW3A5CGipYz1p%2FCSS.1.1.png?alt=media&#x26;token=1ddf87db-9f58-4109-9886-441efd8e8f24" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FXRcp2647QfYG9b0JyS1t%2FCSS.1.2.png?alt=media&#x26;token=742f4ac0-50c1-48ec-bf8f-ccc7d89818cc" alt=""><figcaption></figcaption></figure>

<p>Method 1: If you want to apply it only to this menu only, the CSS code is as follows (paste it into the Internal Stylesheet / CSS box):</p>
<pre class="codehilite"><code>ul li.navi-active {
  background: initial;
}
</code></pre>

<p>Explanation: This adds a CSS rule like <code>#SF-123456789 ul li.navi-active { background: initial; }</code> to the page, applying only to this menu (with embedID <code>SF-123456789</code>) and not affecting other menus.</p>
<p>Method 2: If you want to remove all active effects across all Navi+ menus, use the following code (paste it into the Global Stylesheet / CSS box):</p>
<pre class="codehilite"><code>.naviItem ul li.navi-active {
  background: initial;
}
</code></pre>
</details>

<details><summary>How to align the level 3 submenu with the level 2 menu in the desktop mega menu?</summary>
<p>Some mega menus can be very tall. In that case, expanding a level 3 menu may not leave enough space. When this happens, you should pin the level 3 menu to the top instead.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fro68elhDmY0dYZVM33lW%2F1.1.png?alt=media&#x26;token=f8dc87a7-e10d-4ac7-a398-a4b5220ce72c" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FX4M1o8bgaNDF6VYTtini%2F1.2.png?alt=media&#x26;token=e2d65a92-418c-4c4a-bff7-51a5b9044d41" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F2tyR71IfHrMmPmZN0Ewi%2F1.3.png?alt=media&#x26;token=cdd6854c-2782-40ec-a959-a74d576eb177" alt=""><figcaption></figcaption></figure>

<p>Paste it into the Internal Stylesheet / CSS box:</p>
<pre class="codehilite"><code>ul.children[menulevel=&quot;2&quot;] li.child.is-parent.menu-expand {
  position: initial;
}

ul.children[menulevel=&quot;2&quot;] li.child.is-parent.menu-expand ul.children[menulevel=&quot;3&quot;]{
  top: 0px;
}
</code></pre>
</details>
