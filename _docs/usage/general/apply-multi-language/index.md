---
description: 'Navi+ fully supports multi-language in two parts:'
layout: default
permalink: /docs/usage/general/apply-multi-language/
title: Apply multi-language
---
# Apply multi-language

Navi+ fully supports multi-language in two parts:

**1) Use syntax to automatically display the correct language.**

For example, imagine you have a Navi+ Tabbar shown on your website with 3 languages: English (default), French, and Vietnamese. The short-code for French is `fr` and for Vietnamese is `vi`.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F6k6V0wCgNOrg7o30S7PT%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=5eb3293f-9f55-4917-87e1-dacff684ca9e" alt=""><figcaption></figcaption></figure>

To display the menu item **Home** in the right language, use this syntax:

```
Home <fr: Maison> <vi: Trang chủ>
```

When your Tabbar is displayed, Navi+ will automatically check the current language.

* If the default is English, it shows **Home**.
* If French is selected, it shows **Maison**.
* If Vietnamese is selected, it shows **Trang chủ**.

This works for both **description** and **link-to** fields.

2\) Create a language switcher menu in Navi+

Navi+ supports a special syntax that lets you switch languages directly from your menu items.

* **Step 1:** (Optional) Add flag icons if you want. You can download flag icons from websites like [Flaticon](https://www.flaticon.com "Flaticon") (For example: <https://www.flaticon.com/authors/flags/rectangular?author_id=1&type=standard>).
* **Step 2:** Use the following syntax to switch languages:

```
open:ChangeLanguage(fr)
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FdTn5Nk2ETEUXO7unkIu9%2FHelp.MenuTree.1.1.2-1.png?alt=media&#x26;token=e1f13362-de09-4438-ad5a-a075a9750b7d" alt=""><figcaption></figcaption></figure>
