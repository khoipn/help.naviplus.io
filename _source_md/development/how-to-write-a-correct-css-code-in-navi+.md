# How to write a correct CSS code in Navi+

CSS is the key to every problem when you need to customize deeply for Navi+. Almost all interface things on Navi+ can be solved with CSS code. In Navi+, there are 2 levels of CSS:

### Level 1: Internal Stylesheet / CSS (#SF-123456789)

This is the recommended level to use in most cases. When you write code in this box, the system automatically adds a prefix that is #SF-123456789 (that is your menu ID) to the beginning of CSS tags. This will ensure there is no conflict with all other interface components.

See the example before and after compiling CSS in this box below

```css
// Your CSS code
{
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   {
      margin-bottom: 164px;
   }
}
```

```css
// The CSS code after being compiled

#SF-123456789 {
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   #SF-123456789 {
      margin-bottom: 164px;
   }
}

```

### Level 2: Global Stylesheet / CSS

Unless you have experience with CSS, avoid abusing this box because everything will be pushed straight out in the form you write CSS code without any conflict protection layer.
