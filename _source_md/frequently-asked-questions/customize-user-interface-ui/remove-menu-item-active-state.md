# Remove menu item active state?

By default, Navi+ checks the current page URL to show the active state on the menu (using a gray background). This helps your customers navigate more easily.

However, the active state is not always necessary, especially on wide desktop screens where there are other ways to indicate "where you are," such as breadcrumbs. Sometimes, you may want to remove the active state to make the menu look cleaner.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FAQCfjosVopNC9mXDDbII%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=1167aaa9-c22e-4102-9eb9-6e5ee10dc14a" alt=""><figcaption></figcaption></figure>

Here’s how to do it:

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyaI6k6GmW3A5CGipYz1p%2FCSS.1.1.png?alt=media&#x26;token=1ddf87db-9f58-4109-9886-441efd8e8f24" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FXRcp2647QfYG9b0JyS1t%2FCSS.1.2.png?alt=media&#x26;token=742f4ac0-50c1-48ec-bf8f-ccc7d89818cc" alt=""><figcaption></figcaption></figure>

Method 1: If you want to apply it only to this menu only, the CSS code is as follows (paste it into the Internal Stylesheet / CSS box):

```
ul li.navi-active {
  background: initial;
}
```

Explanation: This adds a CSS rule like `#SF-123456789 ul li.navi-active { background: initial; }` to the page, applying only to this menu (with embedID `SF-123456789`) and not affecting other menus.

Method 2: If you want to remove all active effects across all Navi+ menus, use the following code (paste it into the Global Stylesheet / CSS box):

```
.naviItem ul li.navi-active {
  background: initial;
}
```
