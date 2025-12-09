---
description: In many cases, you'll need to use multiple applications embedded on your website. This can make an usual usability issue as interface elements may overlap (s...
layout: default
permalink: /docs/usage/shopify/how-to-other-applications-work-with-naviplus/
title: Prevent Navi+ menus from overlapping other apps
---
# Prevent Navi+ menus from overlapping other apps

### Why this will be an issue?

In many cases, you'll need to use multiple applications embedded on your website. This can make an usual usability issue as interface elements may overlap (see the picture below). A simple example is when you frequently use a chat application like [Shopify Inbox ](https://www.shopify.com/vn/inbox "Shopify Inbox ")or WhatsApp. Typically, these chat apps occupy a prominent position at the bottom right corner of the phone screen. When you decide to use Navi+ to significantly enhance navigation on your website, this issue arises. Here are some ways to address this problem.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fdccbwi5aXf4XvOxYGIvU%2FFrame%201.png?alt=media&#x26;token=c953f4d5-442c-486d-9493-90490ffd309f" alt=""><figcaption></figcaption></figure>

### Solution 1: Adjust the position of the float buttons (Demo with Shopify inbox)

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F13ShtYFy9yreGicTmiOm%2FFrame%202.png?alt=media&#x26;token=13a96b69-4907-4ad5-88b5-b41dcc95c35d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FmYVravYrInpp21SPJuKm%2FFrame%203.png?alt=media&#x26;token=9d4c2fa0-2806-4b19-8dce-c403fc582315" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Feuh272YZES4OjBSMok8s%2FFrame%204.png?alt=media&#x26;token=d6b6f9f8-aa4e-4539-a29c-6ae39cbcd344" alt=""><figcaption></figcaption></figure>

### Solution 2: Set up the padding of the Navi+ menu to avoid overlapping with applications.

Padding and margin are widely used and powerful tools in technology, especially in HTML5/CSS. By setting the padding according to the position of that area, you can avoid overlapping of applications. You can also set the distance from the Navi+ menu to the edges by adjusting the margin.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fo0hlCj8BSJLa9WBqrLo8%2FFrame%205.png?alt=media&#x26;token=dfe6c2d9-ea6c-4b97-bd55-8ec33ef7d729" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fkj87WVMtDYGKHxPBAK91%2FFrame%206.png?alt=media&#x26;token=ced78c24-1797-422a-9662-45094a5cee12" alt=""><figcaption></figcaption></figure>

### Solution 3: Replace Bottom Bars by Top bars/Support bars or Float Action buttons

Although the Bottom Bar is the most effective tool to lead users, used by almost all mobile native apps, or mobile web (slower), sometimes you may want to place your Navi+ menu in a different position such as the top (Top Bar), right/left (Support Bar), floating above the interface (Float action button). Or you can combine them for the best navigation efficiency. Check out the following options from Navi+ to understand how to do it, sometimes it only takes 1s, and you'll solve your problem.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FiCuFsYdJSucFduHw9zJO%2FFrame%207.png?alt=media&#x26;token=1be98c44-27c3-489d-9e6d-87e1a95fafb7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FbE4JHbm6ZYI6C3uF0X9j%2FFrame%208.png?alt=media&#x26;token=5c85d3bd-5023-4851-82aa-9288f9294d1c" alt=""><figcaption></figcaption></figure>

### Z-index - prioritizing the display order of "floating applications"

The z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order. See picture below to undertand more.&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyMHcqutHWOUtEEYqMDn6%2Fz-index1.png?alt=media&#x26;token=fb6a0100-e337-4115-9212-a8c8d32888ef" alt=""><figcaption></figcaption></figure>

The default z-index for the Navi+ menu is set to 50 for all, as we 'do not consider ourselves more important than other apps,' but 50 is also the number sufficient to display well on all Shopify themes. Sometimes you may need to adjust the z-index of your Navi+ menu in the following cases:&#x20;

1. When you use multiple Navi+ menus on one page and you want them to overlap, but one menu appears above the others.&#x20;
2. When there are other objects/apps overlapping your Navi+ menu, in which case, the z-index will resolve all.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg93TvrzCEEKdFZvdmdbh%2Fz-index2.png?alt=media&#x26;token=1289e3a7-6ea1-44ec-a284-8964ac4b6f35" alt=""><figcaption></figcaption></figure>

There's a challenging question: what z-index should you set up for your Navi+ menu to avoid overlapping as desired? If you have multiple Navi+ menus, you can arrange them according to your preferences without worrying – that's why we're building Navi+ to be as versatile as possible for current 'floating applications' on Shopify.&#x20;

If you need to set up the z-index for your Navi+ menu to handle conflicts with other apps, you can search for your z-index from a minimum of 0 to a maximum of 2,147,483,647. This may seem a bit difficult, but it's the easiest and best way because the z-index won't affect your interface display other than the issue you're facing. If you're experienced with CSS and HTML debugging – this is easy, just turn on inspect mode to see what z-index the conflicting app has. Or, the easiest way, simply click on the Crisp chat icon to chat with a Navi+ advisor; we'd be happy to assist you with this issue.
