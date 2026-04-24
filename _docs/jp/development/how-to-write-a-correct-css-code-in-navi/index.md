---
description: CSSは、Navi+のために深くカスタマイズする必要があるときのすべての問題の鍵です。Navi+のほとんどすべてのインターフェースのことは、CSSコードで解決できます。Navi+には、2つのCSSレベルがあります。
lang: jp
layout: default
permalink: /jp/docs/development/how-to-write-a-correct-css-code-in-navi/
title: Navi+で正しいCSSコードを書く方法
---
# Navi+で正しいCSSコードを書く方法

CSSは、Navi+のために深くカスタマイズする必要があるときのすべての問題の鍵です。Navi+のほとんどすべてのインターフェースのことは、CSSコードで解決できます。Navi+には、2つのCSSレベルがあります：

### レベル1：内部スタイルシート / CSS (#SF-123456789)

これは、ほとんどの場合に推奨されるレベルです。このボックスにコードを書くと、システムは自動的にCSSタグの先頭に#SF-123456789（それがあなたのメニューIDです）というプレフィックスを追加します。これにより、他のすべてのインターフェースコンポーネントとの競合がないことが保証されます。

このボックスでCSSをコンパイルする前後の例を見てください

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

### レベル2：グローバルスタイルシート / CSS

CSSの経験がない限り、このボックスを乱用するのは避けてください。すべてが、競合保護層なしでCSSコードを書く形式でそのまま押し出されます。
