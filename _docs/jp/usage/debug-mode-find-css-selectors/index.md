---
description: デバッグモードは、Navi+ライブラリに組み込まれた軽量ツールセットで、Navi+メニューをより効果的に操作するのに役立ちます。
lang: jp
layout: default
permalink: /jp/docs/usage/debug-mode-find-css-selectors/
title: デバッグモード - CSSセレクタを見つける
---
# デバッグモード - CSSセレクタを見つける

デバッグモードは、Navi+ライブラリに組み込まれた軽量ツールセットで、Navi+メニューをより効果的に操作するのに役立ちます。

### 1. CSSセレクタを見つける

デバッグモードを有効にするには、次のURL形式を使用します：
`yourdomain.com#navidebug-on`

あなたのウェブサイトはNavi+デバッグモードに切り替わります。ウェブサイトのさまざまな領域にマウスをホバーさせて、それに対応するCSSセレクタを表示します。カーソルを移動させて、目的のターゲットエリアを正確に特定してください。

効率的に作業するために、以下のキーボードショートカットに注意してください。

**ショートカット 1.** CSSセレクタのコピー

* MacOSでは**⌘+C**、Windowsでは**Ctrl+C**を押して、選択したCSSセレクタをコピーします。

その後、次のために**公開メニュー**設定に貼り付けることができます：

* メガメニュー / グリッドメニュー：ターゲットCSSセレクタの前、後、または置き換えるためにメニューを挿入する
* スライドメニュー：ターゲットCSSセレクタがクリックまたはタップされたときにスライドメニューをトリガーする

**ショートカット 2.** セレクタレベル間のナビゲーション

* 親レベルのセレクタに移動するには、
[↑/←]またはBackspaceを押します
* 子レベルのセレクタに移動するには、
[↓/→]を押します

**重要なヒント：** ほとんどの場合、完璧なCSSセレクタをすぐに見つけることはできません。経験に基づくと、次のようにする方が簡単です：

1. 子レベルのセレクタを選択することから始める
2. その後、1〜2の親レベルに移動する（ウェブサイトに視覚的なハイライトが表示されます）
3. ⌘+C（Ctrl+C）を使用してセレクタをコピーする
4. メニュー設定に貼り付けてテストする

時には、目的のユーザーエクスペリエンスを達成するために、CSSセレクタにメニューイベントを挿入、置き換え、またはバインドする際に、このプロセスを何度も繰り返す必要があるかもしれません。

#### 1.1. デスクトップでCSSセレクタを見つける

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FlstMiQTp0fQqvJ89jXhD%2FFrame%20210.webp?alt=media&#x26;token=95d6a152-b58b-4894-9cdc-150200fae5e1" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fuc7fc7CicJcQ3XNvwDVA%2FFrame%20211.webp?alt=media&#x26;token=84a5c3ad-04bf-4b4e-9c8c-bc334f7f4646" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FuE3IlMcHedAfwQR98YhM%2FFrame%20212.webp?alt=media&#x26;token=e02c2aa2-0792-4811-8005-46a5b7b0b9fe" alt=""><figcaption></figcaption></figure>

#### 1.2. モバイルでCSSセレクタを見つける

モバイルでCSSセレクタを見つけるには、ブラウザでモバイル（レスポンシブ）モードを有効にします。
その後、ページの任意の場所を右クリックし、次を選択します：

* Chrome: 検査
* Safari: 要素を検査
* Firefox: 検査
* Edge: 検査 / 要素を検査

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FK7F58NVYCerBTqG9EWjB%2FFrame%20213.webp?alt=media&#x26;token=2f2c059a-1346-446d-a19f-e2998050791a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FsNvXhBMniymbZ1tD9c4p%2FFrame%20214.webp?alt=media&#x26;token=257f082d-ff6b-4ce0-8eaa-6160a697a67e" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FJAZm1dPEZrfeqtpNXA8O%2FFrame%20215.webp?alt=media&#x26;token=2847a4ef-e298-4986-9367-36a6abf914d8" alt=""><figcaption></figcaption></figure>
