---
description: Navi+は、2つの部分で多言語を完全にサポートしています。
lang: jp
layout: default
permalink: /jp/docs/usage/general/apply-multi-language/
title: 多言語の適用
---
# 多言語の適用

Navi+は、2つの部分で多言語を完全にサポートしています：

**1) 正しい言語を自動的に表示するための構文を使用します。**

例えば、あなたのウェブサイトに3つの言語（英語（デフォルト）、フランス語、ベトナム語）で表示されるNavi+ Tabbarがあると想像してください。フランス語のショートコードは`fr`、ベトナム語のショートコードは`vi`です。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F6k6V0wCgNOrg7o30S7PT%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=5eb3293f-9f55-4917-87e1-dacff684ca9e" alt=""><figcaption></figcaption></figure>

メニュー項目**ホーム**を正しい言語で表示するには、次の構文を使用します：

```
Home <fr: Maison> <vi: Trang chủ>
```

Tabbarが表示されると、Navi+は現在の言語を自動的にチェックします。

* デフォルトが英語の場合、**Home**が表示されます。
* フランス語が選択されている場合、**Maison**が表示されます。
* ベトナム語が選択されている場合、**Trang chủ**が表示されます。

これは、**説明**および**リンク先**フィールドの両方で機能します。

2) Navi+で言語スイッチャーメニューを作成する

Navi+は、メニュー項目から直接言語を切り替えることができる特別な構文をサポートしています。

* **ステップ1：**（オプション）必要に応じて旗のアイコンを追加します。旗のアイコンは、[Flaticon](https://www.flaticon.com "Flaticon")のようなウェブサイトからダウンロードできます（例：<https://www.flaticon.com/authors/flags/rectangular?author_id=1&type=standard>）。
* **ステップ2：** 言語を切り替えるために次の構文を使用します：

```
open:ChangeLanguage(fr)
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FdTn5Nk2ETEUXO7unkIu9%2FHelp.MenuTree.1.1.2-1.png?alt=media&#x26;token=e1f13362-de09-4438-ad5a-a075a9750b7d" alt=""><figcaption></figcaption></figure>
