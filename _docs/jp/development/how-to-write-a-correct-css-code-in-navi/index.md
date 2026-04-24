---
description: CSSは、Navi+のために深くカスタマイズする必要があるときのすべての問題の鍵です。Navi+のほとんどすべてのインターフェースのことは、CSSコードで解決できます。Navi+では、CSSには2つのレベルがあります。
lang: jp
layout: default
permalink: /jp/docs/development/how-to-write-a-correct-css-code-in-navi/
title: Navi+で正しいCSSコードを書く方法
---
# Navi+で正しいCSSコードを書く方法

CSSは、Navi+のために深くカスタマイズする必要があるときのすべての問題の鍵です。Navi+のほとんどすべてのインターフェースのことは、CSSコードで解決できます。Navi+では、CSSには2つのレベルがあります：

### レベル1：内部スタイルシート / CSS (#SF-123456789)

これは、ほとんどの場合に使用することを推奨されるレベルです。このボックスにコードを書くと、システムは自動的にCSSタグの先頭に#SF-123456789（それがあなたのメニューIDです）というプレフィックスを追加します。これにより、他のすべてのインターフェースコンポーネントとの競合がないことが保証されます。

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

CSSの経験がない限り、このボックスを乱用するのは避けてください。すべてが、競合保護層なしで書いたCSSコードの形式でそのまま押し出されます。

---

# エージェントの指示：このドキュメントを照会する

このページに直接利用できない追加情報が必要な場合は、質問をしてドキュメントを動的に照会できます。

現在のページURLに`ask`クエリパラメータを付けてHTTP GETリクエストを実行します：

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/development/how-to-write-a-correct-css-code-in-navi+.md?ask=<question>
```

質問は具体的で、自己完結しており、自然言語で書かれている必要があります。
回答には、質問への直接的な回答と、ドキュメントからの関連する抜粋や情報源が含まれます。

現在のページに明示的に存在しない回答が必要な場合、明確化や追加のコンテキストが必要な場合、または関連するドキュメントセクションを取得したい場合は、このメカニズムを使用してください。
