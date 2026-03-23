---
description: Here you'll find guides on how to connect Navi+ with other apps (like Chat tools, Loyalty, etc.). You can add them as menu items, open apps directly from Nav...
layout: default
permalink: /docs/integrations/integrating-navi-with-your-website-and-external-apps/
title: Integrating Navi+ with your website and external apps
---
# Integrating Navi+ with your website and external apps

Here you'll find guides on how to connect Navi+ with other apps (like Chat tools, Loyalty, etc.). You can add them as menu items, open apps directly from Navi+, and make sure everything works together smoothly without overlapping on your site.

### 1. Integrate other sticky apps into a single Navi+ menu item

Navi+ consolidates multiple apps (Chat Box, Loyalty, Social Proof, Promo bars, etc.) into menu items, keeping your website clean and preventing overlaps—especially valuable on mobile devices with limited screen space.\
To achieve this, follow these 2 steps:

• Step 1: Hide sticky app icons using CSS. See detail here\
• Step 2: Use JavaScript for menu items so that clicking them opens the respective app panels.

See the example of Tidi chat integration. This is a relatively advanced setup, so please contact Navi+ support for assistance.

### 2. JavaScript triggers – interact with external apps

Navi+ allows running JavaScript functions from menu items when clicked by users (javascript:Function). See the example of Tidi chat integration to understand how to use two JavaScript functions to integrate Tidio chat as a Navi+ menu item:

1. Hide Tidio icon: A global function that waits for Tidio to render, then hides it
2. openTidio(): Opens Tidio's chat panel when users click the "Chat with us" menu item

Navi+ also support you define the class and attribute assignments (even in the form of id="menu-item-1") to enable interaction with other applications or JavaScript code. You can use JavaScript functions to directly access menu items via class or attribute, for example: to create a walkthrough tutorial.

### 3. Customizing Navi+ Interface with External CSS

Each Navi+ menu is defined by a div element with id="SF-123456789" (embeded id). View the HTML/CSS structure framework of a Navi+ menu here to write CSS code for customizing the menu interface.\
For example, to change the color of a level 2 menu item, you can write the following CSS:

`#SF-123456789 ul li ul.children li .name { color: red; }`

Navi+ also support you define the class and attribute assignments (even in the form of id="menu-item-1") to enable interaction with other applications or JavaScript code. You can style each menu item using class names or attributes.

### 4. Communication Between Navi+ Menus

From a Navi+ menu item, you can call to open another Navi+ Slide menu using the syntax: `open:NaviMenu.`\
With this syntax, you can infinitely expand menu levels by having slide menus call other slide menus.

### 5. Open a Slide Menu from anywhere on your website

With slide menus, in addition to opening them via menu items from other Navi+ menus, you can also trigger a Navi+ slide menu by calling the JavaScript function: `naviman.openNaviMenu()`.\
For example: Create a floating button using HTML and CSS, then assign its click action to open a Navi+ Slide menu – you'll instantly have a professional-looking menu.

### 6. Simulate user actions (click, focus, scroll, etc.)

Navi+ provides several functions (triggered when a menu item is clicked):

* `open:clickTo` to simulate clicking on an HTML CSS Selector. This is extremely helpful for enabling Navi+ menu to trigger default hamburger menus, search tools, cart panels, language dropdowns... or activate chat tools from other apps.
* `open:focusTo` to simulate focusing on an HTML CSS Selector. This is extremely useful for simulating clicks on search tools or email subscription fields
* `scroll:Top`, `scroll:Bottom`, `scroll:OnPage` to scroll the webpage to the desired area. This is extremely useful when you want to scroll to a target section on the page instead of navigating to a different page.

### 7. For sharing and improving site engagement

Navi+ provides several functions (triggered when a menu item is clicked):

* `open:ShareMe` to share the website link
* `share:CopyUrl` to copy current URL to clipboard of device
* `share:Facebook` to share current URL to Facebook
* `share:Tweet` to share current URL to Twitter (X)

### 8. Integration with other device apps (such as Phone)

Navi+ provides several functions (triggered when a menu item is clicked):

* `tel:+[Country code][Phone]` to call to number
* `sms:+[Country code][Phone]?body=[Text]` to send SMS message to number with a setup content (optional)
* `mailto:[Address]` to send an email
* `https://m.me/[YourName]` to chat with your Facebook Messenger
* `https://wa.me/[Phone]` to chat with your WhatsApp
* `https://lin.ee/[line-code]` to chat with your Line
* `https://zalo.me/+[Country code][Phone]` to chat with your Zalo

### 9. For Shopify Only

Navi+ provides several functions (triggered when a menu item is clicked):

* `open:ChangeLanguage` to change language if the website uses Shopify
* Shopify Inbox: Hide the Shopify Inbox icon and integrate it into Navi+ menu as a menu item that opens the chat panel on click. See detail here
* Open the hamburger menu or cart, search panel: See detail here

### Don’t see it in the list?

Feel free to send me your integration request. I'm glad to help, and it also supports Navi+'s growth.
