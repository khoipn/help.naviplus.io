---
description: CSS is the key to every problem when you need to customize deeply for Navi+. Almost all interface things on Navi+ can be solved with CSS code. In Navi+, ther...
layout: default
permalink: /docs/development/how-to-write-a-correct-css-code-in-navi/
title: How to write a correct CSS code in Navi+
---
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


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/development/how-to-write-a-correct-css-code-in-navi+.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
