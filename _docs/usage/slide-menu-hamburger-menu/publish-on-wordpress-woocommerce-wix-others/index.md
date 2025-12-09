---
description: Navi+ offers a wide range of properties for menu items, allowing you to customize them for different purposes. Browse the list below and use them as needed.
layout: default
permalink: /docs/usage/slide-menu-hamburger-menu/publish-on-wordpress-woocommerce-wix-others/
title: Publish on WordPress / WooCommerce / Wix / Others
---
# Publish on WordPress / WooCommerce / Wix / Others

# Step 1: Other properties of menu item

Navi+ offers a wide range of properties for menu items, allowing you to customize them for different purposes. Browse the list below and use them as needed.

<details><summary>Sub group: Other basic options (Divider, Badge)</summary>
<p><strong>Add Divider</strong>: Use this to separate menu items with a line. You can customize its size, style, and color.\
<strong>Tip:</strong> If your menu is long (more than 5 items), separate items with dividers or better—group them with custom group titles.</p>
<p><strong>Add Badge</strong>: Adds a red dot (you can change the badge color) to draw user attention.\
Use “Show badge (+n) when items are in the cart” if this is a Cart menu item.</p>
</details>

<details><summary>Sub group: Layout Group (Display Layout, Width Layout)</summary>
<ul>
<li><strong>Display Layout</strong>: A key setting that defines how icon/image and text are positioned—top-bottom, left-right, text only, icon only, etc.\
  Use <strong>Automation</strong> to let Navi+ choose the best layout based on context.</li>
<li><strong>Width Layout</strong>: Defines the width of the menu item.\
  Example 1: Set 3/12 width for 4 items in a row to create a grid layout, common in modern designs.\
  Example 2: Choose <strong>Hug content</strong> to make width flexible based on content length, useful in horizontal or mega menus.\
  Example 3: Choose <strong>Enter a fixed width</strong> to set a specific pixel value.\
  <strong>Automation</strong> is a smart option to auto-assign a suitable width.</li>
</ul>
</details>

<details><summary>Sub group: Interface (Text style, Icon/Image style, Background, Spacing, Align)</summary>
<ul>
<li><strong>Text Style</strong>: Customize color and font for this menu item only, without affecting others.</li>
<li><strong>Icon/Image Style</strong>: Customize the size and color of the icon or image.\
  <strong>Container</strong>: A box wrapping around the icon/image. You can style its color, spacing, and border radius. Useful for creative and colorful designs.</li>
<li><strong>Background</strong>: Set a background color or image for this menu item.</li>
<li><strong>Spacing</strong>: Define the padding/margin around this menu item.</li>
<li><strong>Align</strong>: Align the menu item to the left, center, or right.</li>
</ul>
<p>{% comment %}hint style="info" {% endcomment %}
<strong>Important Tip:</strong>\
All interface settings can also be applied globally in the <strong>Design</strong> tab.\
Individual settings here will override global ones if defined.
{% comment %}endhint{% endcomment %}</p>
</details>

<details><summary>Sub group: Advance (Class name, Animation, Internal Stylesheet (CSS), Attributes)</summary>
<p>As the group name suggests, these properties are for users with experience and deeper knowledge of HTML/CSS, allowing more control over how a menu item is displayed.</p>
<ul>
<li><strong>Class Name</strong>: Define a custom class name for this menu item (e.g., <code>red-button</code>), then go to the <strong>CSS/Coding</strong> section to write styles for it (e.g., <code>.red-button { background: red; }</code>).\
  There are also many built-in hidden class options:\
  Example 1: <code>navi-expand</code> — this item will auto-expand if it’s a parent.\
  Example 2: <code>navi-click</code> — this item will auto-click 2 seconds after it appears.</li>
<li><strong>Animation</strong>: Apply visual effects (e.g., blink, shake, bounce) when the menu item appears. Great for drawing attention to specific items.</li>
<li><strong>Internal Stylesheet (CSS)</strong>: Custom CSS that applies only to this menu item.</li>
<li><strong>Attributes</strong>: Use these to make the menu item interact with other apps on your site.\
  Example: If you install a tooltip app, use attributes to trigger a tooltip when users hover over the item.</li>
</ul>
</details>

<details><summary>Sub group: Publish</summary>
<p>Set visibility rules to show or hide a menu item based on context—for example, only show it when the user is logged in.</p>
</details>

<details><summary>Sub group: Submenu</summary>
<p>Only for parent menu items, properties in this group apply specifically to their sub-menus—for example, expanded dropdown settings.</p>
</details>
