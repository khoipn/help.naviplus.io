---
description: Navi+は、**"Design"**タブで、背景、タイポグラフィ（フォントファミリー、サイズ..）、アイコン/画像など、メニューのためのいくつかの一般的な設定オプションを提供します。
lang: jp
layout: default
permalink: /jp/docs/frequently-asked-questions/customize-user-interface-ui/using-built-in-settings-or-custom-css/
title: 組み込み設定またはカスタムCSSを使用しますか？
---
# 組み込み設定またはカスタムCSSを使用しますか？

Navi+は、**"Design"**タブで、背景、タイポグラフィ（フォントファミリー、サイズ..）、アイコン/画像（サイズ、ギャップ、カーブ...）など、メニューのためのいくつかの一般的な設定オプションを提供します。これらの設定を使用することで、メニューは通常、ウェブサイトの全体的なデザインやブランディングに合わせてスタイルを調整できます。

Navi+メニューは最大3レベルをサポートしています。**"Design"**タブでは、2レベルのスタイルのみを設定でき、レベル2およびレベル3メニューのフォントサイズやアイコン/画像サイズを設定する直接的なオプションはありません。では、どうすればそれができますか？

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEeUzjyXb0DDSzsPobpqC%2FCSS%201.0.png?alt=media&#x26;token=ab2b0265-e0cd-4777-964d-285e4d947c64" alt=""><figcaption></figcaption></figure>

#### CSS & コーディングツールによる深いメニューのカスタマイズ

しかし、あなたやあなたのウェブサイトの開発者がCSS（スタイルシート）について基本的な理解を持っている場合、Navi+の組み込み"**CSS & Coding"**ツールを使用して、テーマファイルを直接編集することなく、メニュー全体のデザインをカスタマイズできます。これにはいくつかの利点があります：

* Navi+メニューのCSS設定をテーマから分離できます。これにより、テーマをアップグレードまたは変更しても、Navi+メニューには影響しません。
* Navi+は、各CSSルールの先頭にプレフィックス（`#SF-123456789`のような）を自動的に追加するスマートな保護メカニズムを使用しています。これにより、異なるNavi+メニューのCSSが分離され、スタイルの競合のリスクが最小限に抑えられます。
* 必要に応じて、Navi+内でウェブサイト全体に影響を与えるCSSを追加することもできますが、これは控えめに使用し、必要な場合にのみ行うべきです。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwIMkFPG3bnaAfvN3fRy4%2FCSS.1.1.png?alt=media&#x26;token=91b34b8a-ae77-4d14-a52d-f30568f8b2c5" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRMPDJmuihVuXKunOmmAZ%2FCSS.1.2.png?alt=media&#x26;token=0ebcac44-dba7-4306-80aa-815323c027b3" alt=""><figcaption></figcaption></figure>

**重要な注意事項：** **内部スタイルシート / CSSテキストボックス**は、各CSSルールの前に自動的にプレフィックス（例：`#SF-123456789`）を追加します。これにより、あなたのCSSはカスタマイズされている特定のメニューにのみ適用され、スタイルの競合を防ぎます。

#### CSSを使用したいくつかの典型的なケーススタディ

1) メニュー全体の外観を最高レベルで設定するには、標準CSSではないが非常にシンプルなスニペットを書くことができます。たとえば、以下のスニペットはメニューの背景を赤に変更します。以下のコードを内部スタイルシート / CSSテキストボックスに追加します：

```
{
    background: red;
}
```

2) 各メニューアイテムレベルのサイズ、タイポグラフィ、色を設定します。以下のコードを内部スタイルシート / CSSテキストボックスに追加します：

```
// レベル1メニューアイテムのテキストスタイルをカスタマイズ
ul > li.item > .inner .name {
    font-size: 14px;
    color: red;
}

// レベル2メニューアイテムのテキストスタイルをカスタマイズ
ul.children[menulevel="2"] > li.child > .inner .name{
     font-size: 16px; 
     color: blue;
}

// レベル3メニューアイテムのテキストスタイルをカスタマイズ
ul.children[menulevel="3"] > li.child > .inner .name{
     font-size: 13px; 
     color: green;     
}
```

3) `font-weight.`を使用してフォントの太さを変更します。以下のコードを内部スタイルシート / CSSテキストボックスに追加します：

```
// 名前のフォントの太さを設定
.name {
  font-weight: 700;
}

// 説明のフォントの太さを設定
description {
  font-weight: 700;
}
```

4) 矢印のサイズを調整します。以下のコードを内部スタイルシート / CSSテキストボックスに追加します：

```
ul > li.is-parent-top::after {
  font-size: 24px !important;
}
```
