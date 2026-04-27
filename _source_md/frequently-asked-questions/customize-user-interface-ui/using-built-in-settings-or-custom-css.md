# Using built-in settings or custom CSS?

Navi+ provides several common configuration options for menus, in the **"Design"** tab, such as background, typography (font familly, size..) , and icons/images (size, gap, curve...). By using these settings, your menu can usually be styled to match the overall design and branding of your website.

Navi+ menus support up to 3 levels. In the **"Design"** tab, you can only configure the style for 2 levels, and there is no direct option to set font size or icon/image size for level 2 and level 3 menus. So how can you do that?

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEeUzjyXb0DDSzsPobpqC%2FCSS%201.0.png?alt=media&#x26;token=ab2b0265-e0cd-4777-964d-285e4d947c64" alt=""><figcaption></figcaption></figure>

#### Deep menu customization with the CSS & Coding tool

However, if you or your website developer have a basic understanding of CSS (Stylesheets), you can customize the entire menu design using the built-in "**CSS & Coding"** tool in Navi+ without editing your theme files directly. This offers several benefits:

* You can separate CSS configurations for Navi+ menus from your theme. This means upgrading or changing your theme won’t affect your Navi+ menus.
* Navi+ uses a smart protection mechanism by automatically adding a prefix (like `#SF-123456789`) at the start of each CSS rule. This keeps CSS for different Navi+ menus isolated, minimizing the risk of style conflicts.
* If needed, you can still add CSS that affects the entire website directly within Navi+, though this should be used sparingly and only when necessary.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwIMkFPG3bnaAfvN3fRy4%2FCSS.1.1.png?alt=media&#x26;token=91b34b8a-ae77-4d14-a52d-f30568f8b2c5" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRMPDJmuihVuXKunOmmAZ%2FCSS.1.2.png?alt=media&#x26;token=0ebcac44-dba7-4306-80aa-815323c027b3" alt=""><figcaption></figcaption></figure>

**Important note:** The **Internal Stylesheet / CSS textbox** automatically adds a prefix (e.g., `#SF-123456789`) before each CSS rule. This ensures that your CSS only applies to the specific menu being customized and prevents style conflicts.

#### Some typical case studies of using CSS

1\) To configure the appearance of the entire menu at the highest level, you can write a snippet that is not standard CSS but very simple. For example, the snippet below changes the menu background to red. Add the following code to the Internal Stylesheet / CSS textbox:

```
{
    background: red;
}

```

2\) Configure size, typography, and colors for each menu item level. Add the following code to the Internal Stylesheet / CSS textbox:

```
// Customize the text style of level 1 menu items
ul > li.item > .inner .name {
    font-size: 14px;
    color: red;
}

// Customize the text style of level 2 menu items
ul.children[menulevel="2"] > li.child > .inner .name{
     font-size: 16px; 
     color: blue;
}

// Customize the text style of level 3 menu items
ul.children[menulevel="3"] > li.child > .inner .name{
     font-size: 13px; 
     color: green;     
}
```

3\) Change font thickness using `font-weight.`Add the following code to the Internal Stylesheet / CSS textbox:

```
// Set the font thickness of name
.name {
  font-weight: 700;
}

// Set the font thickness of description
.description {
  font-weight: 700;
}
```

4\) Adjust the size of the arrow. Add the following code to the Internal Stylesheet / CSS textbox:

```
ul > li.is-parent-top::after {
  font-size: 24px !important;
}
```
