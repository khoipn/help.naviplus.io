---
description: 多くの場合、ウェブサイトに埋め込まれた複数のアプリケーションを使用する必要があります。これにより、インターフェース要素が重なる可能性があるため、通常の使いやすさの問題が発生することがあります（s...
lang: jp
layout: default
permalink: /jp/docs/usage/shopify/how-to-other-applications-work-with-naviplus/
title: Navi+メニューが他のアプリと重ならないようにする
---
# Navi+メニューが他のアプリと重ならないようにする

### これが問題になる理由は？

多くの場合、ウェブサイトに埋め込まれた複数のアプリケーションを使用する必要があります。これにより、インターフェース要素が重なる可能性があるため、通常の使いやすさの問題が発生します（下の画像を参照）。簡単な例として、[Shopify Inbox ](https://www.shopify.com/vn/inbox "Shopify Inbox ")やWhatsAppのようなチャットアプリを頻繁に使用する場合があります。通常、これらのチャットアプリは、電話画面の右下隅に目立つ位置を占めます。ウェブサイトのナビゲーションを大幅に向上させるためにNavi+を使用することを決定すると、この問題が発生します。この問題に対処するためのいくつかの方法を以下に示します。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fdccbwi5aXf4XvOxYGIvU%2FFrame%201.png?alt=media&#x26;token=c953f4d5-442c-486d-9493-90490ffd309f" alt=""><figcaption></figcaption></figure>

### 解決策1: フロートボタンの位置を調整する（Shopify Inboxのデモ）

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F13ShtYFy9yreGicTmiOm%2FFrame%202.png?alt=media&#x26;token=13a96b69-4907-4ad5-88b5-b41dcc95c35d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FmYVravYrInpp21SPJuKm%2FFrame%203.png?alt=media&#x26;token=9d4c2fa0-2806-4b19-8dce-c403fc582315" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Feuh272YZES4OjBSMok8s%2FFrame%204.png?alt=media&#x26;token=d6b6f9f8-aa4e-4539-a29c-6ae39cbcd344" alt=""><figcaption></figcaption></figure>

### 解決策2: Navi+メニューのパディングを設定してアプリケーションとの重なりを避ける。

パディングとマージンは、技術において広く使用されている強力なツールです。特にHTML5/CSSでは、特定のエリアの位置に応じてパディングを設定することで、アプリケーションの重なりを避けることができます。また、マージンを調整することで、Navi+メニューとエッジとの距離を設定することもできます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fo0hlCj8BSJLa9WBqrLo8%2FFrame%205.png?alt=media&#x26;token=dfe6c2d9-ea6c-4b97-bd55-8ec33ef7d729" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fkj87WVMtDYGKHxPBAK91%2FFrame%206.png?alt=media&#x26;token=ced78c24-1797-422a-9662-45094a5cee12" alt=""><figcaption></figcaption></figure>

### 解決策3: ボトムバーをトップバー/サポートバーまたはフロートアクションボタンに置き換える

ボトムバーは、ユーザーを導くための最も効果的なツールですが、ほとんどすべてのモバイルネイティブアプリやモバイルウェブ（遅い）で使用されていますが、時にはNavi+メニューをトップ（トップバー）、右/左（サポートバー）、インターフェースの上に浮かせる（フロートアクションボタン）など、別の位置に配置したい場合があります。また、最適なナビゲーション効率のためにそれらを組み合わせることもできます。Navi+の以下のオプションを確認して、どのように行うかを理解してください。時には1秒で問題を解決できます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FiCuFsYdJSucFduHw9zJO%2FFrame%207.png?alt=media&#x26;token=1be98c44-27c3-489d-9e6d-87e1a95fafb7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FbE4JHbm6ZYI6C3uF0X9j%2FFrame%208.png?alt=media&#x26;token=5c85d3bd-5023-4851-82aa-9288f9294d1c" alt=""><figcaption></figcaption></figure>

### Z-index - "浮遊アプリケーション"の表示順序を優先する

z-indexプロパティは、要素のスタック順序を指定します。スタック順序が大きい要素は、常にスタック順序が小さい要素の前に表示されます。詳細を理解するために下の画像を参照してください。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyMHcqutHWOUtEEYqMDn6%2Fz-index1.png?alt=media&#x26;token=fb6a0100-e337-4115-9212-a8c8d32888ef" alt=""><figcaption></figcaption></figure>

Navi+メニューのデフォルトのz-indexはすべて50に設定されています。なぜなら、「他のアプリよりも自分たちが重要だとは考えていない」からですが、50はすべてのShopifyテーマでうまく表示するのに十分な数でもあります。以下のような場合には、Navi+メニューのz-indexを調整する必要があるかもしれません。

1. 1ページに複数のNavi+メニューを使用し、それらが重なるようにしたいが、1つのメニューが他のメニューの上に表示される場合。
2. 他のオブジェクト/アプリがNavi+メニューと重なっている場合、その場合、z-indexがすべてを解決します。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg93TvrzCEEKdFZvdmdbh%2Fz-index2.png?alt=media&#x26;token=1289e3a7-6ea1-44ec-a284-8964ac4b6f35" alt=""><figcaption></figcaption></figure>

挑戦的な質問があります：Navi+メニューが望ましいように重ならないようにするために、どのz-indexを設定すべきですか？複数のNavi+メニューがある場合、心配せずに好みに応じて配置できます。だからこそ、私たちはNavi+を現在のShopifyの「浮遊アプリケーション」に対してできるだけ多用途に構築しています。

他のアプリとの競合を処理するためにNavi+メニューのz-indexを設定する必要がある場合、z-indexを0から2,147,483,647の範囲で検索できます。これは少し難しいように思えるかもしれませんが、最も簡単で最良の方法です。なぜなら、z-indexは直面している問題以外のインターフェース表示に影響を与えないからです。CSSやHTMLのデバッグに慣れている場合、これは簡単です。検査モードをオンにして、競合アプリのz-indexを確認してください。または、最も簡単な方法は、CrispチャットアイコンをクリックしてNavi+アドバイザーとチャットすることです。この問題について喜んでお手伝いします。
