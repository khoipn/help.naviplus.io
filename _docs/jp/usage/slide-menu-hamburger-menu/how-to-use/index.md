---
description: '**スライドメニュー**—ハンバーガーメニュー、サイドバーメニュー、またはドロワーメニューとも呼ばれ、モバイル用にデスクトップメニューを適応させることで、Shopifyウェブサイトで一般的に使用されます。典型的には、このデフォルトメニューはシンプルで、画像や高度なレイアウトはありません。Navi+は、その基本的なデフォルトメニューの完全な置き換えを提供します。'
lang: jp
layout: default
permalink: /jp/docs/usage/slide-menu-hamburger-menu/how-to-use/
title: 使い方は？
---
# 使い方は？

**スライドメニュー**—ハンバーガーメニュー、サイドバーメニュー、またはドロワーメニューとも呼ばれ、モバイル用にデスクトップメニューを適応させることで、Shopifyウェブサイトで一般的に使用されます。典型的には、このデフォルトメニューはシンプルで、画像や高度なレイアウトはありません。Navi+は、その基本的なデフォルトメニューの完全な置き換えを提供します。

**主な利点:**

* Shopifyのシンプルなデフォルトメニューを完全に置き換えます
* **画像**、**グリッド**、および**多層**レイアウトを使用した複数のプレゼンテーションスタイルを提供し、豊かでプロフェッショナルな体験を実現します
* モバイルとデスクトップの両方でシームレスに機能し、一貫した体験を提供します

**FAQ:**

<details><summary><strong>1. 無料版か有料版を使うか決めていません。プロフェッショナルメニューテンプレートを試すことはできますか？</strong></summary>
<p>もちろんです！メニューグループは主に初心者がNavi+の高度な機能に圧倒されないようにするためのものです 😄。プロフェッショナルメニューを試して、すべての機能とレイアウトオプションを探索するのが最良の方法です。後で、必要ないメニューや不適切なメニューは簡単に削除できます。</p>
</details>

<details><summary><strong>2. ここでメニューを作成すると、すぐに私のウェブサイトに表示されますか？</strong></summary>
<p>まだです。ウェブサイトに表示させるには、正しいメニューを<strong>公開</strong>する必要があります。心配しないでください — 簡単です！</p>
</details>

<details><summary><strong>3. 間違ったテンプレートを選んだり、ミスをしたらどうなりますか？</strong></summary>
<p>全く問題ありません。いつでも削除して新しいものを作成できます。メニューをテストしていて別のテンプレートを試したい場合は、現在のものをバックアップファイルとして<strong>保存</strong>し、後で再オープンできます。メニュー間で部分を<strong>コピー＆ペースト</strong>することもできます（2つのブラウザタブを開くことで）ので、以前の作業を保持できます。自由に実験してください！</p>
</details>

<details><summary><strong>4. メニューを1つだけ作成すべきですか、それとも複数作成すべきですか？</strong></summary>
<p><strong>複数のメニュー</strong>を作成すべきです。<strong>アクティブ</strong>なメニューだけがサイトに表示されますが、異なるテンプレートを選択したり、メニューをクローンしたりして多くのバージョンを準備できます。メニューはページタイプ（ホーム、商品、コレクション...）、デバイス（モバイルまたはデスクトップ）、またはURLキーワードに基づいて表示/非表示に設定できます。ですので、各状況に合ったメニューを作成してください！</p>
</details>

### ステップ1: メニューツリーを編集する

#### 1.1. メニューツリーの理解

**メニューツリー**は、すべてのメニューの最も重要な部分です—それは構造を定義します。

こちらはスライドメニューのメニューツリーの例です：

```
スライドバナー  
デイリー・ディール  
カタログ  
オールマウンテン  
   - クルーズフレックス  
   - バランスライド  
   - その他のオールマウンテン  
        - レベル3メニュー項目  
フリースタイル  
   - パークボード  
   - ジブボード  
その他の製品  
ブログ  
もっと...  
```

これは3レベルのメニューツリーです。レベル1には**スライドバナー**、**デイリー・ディール**、
[**カタログ + オールマウンテン + フリースタイル + その他の製品**]、**ブログ**、および**もっと..**が含まれます。
カタログはグループ名として機能します。**オールマウンテン**はレベル1のメニュー項目で、3つのレベル2のサブメニュー：**クルーズフレックス**、**バランスライド**、および**その他のオールマウンテン**があります。

あなたはこのメニューツリーを構築するのにほとんどの時間を費やし、顧客が探しているコンテンツを見つける手助けをします。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FiLkKHBvckAjUmgqjoEyu%2FHelp.MenuTree.1.1.0.png?alt=media&#x26;token=63628235-a03f-47b8-b0dc-eb27512ac21e" alt="Catalog: A level 1 menu item, displayed as a tab on the tab bar. All-Mountain: Level 2 menu item that appears when you tap on Catalog."><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FnNyXxyermApo9zO1eTgy%2FHelp.MenuTree.1.1.1.png?alt=media&#x26;token=0cd15617-75b0-469d-9170-f10158b85a07" alt="Cruise Flex, Balance Ride: Level 3 menu item that appears when you tap on All-Mountain."><figcaption></figcaption></figure>

#### 1.2. メニューツリーとの基本的なインタラクション

メニュー項目を上下または左右にドラッグ＆ドロップして、メニューツリー内の位置や親子関係を変更できます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fdexnk8WyoGnydVqI6TJ9%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=ae89e32d-4d3b-46e7-bb27-0ca69082b93e" alt=""><figcaption></figcaption></figure>

任意のメニュー項目にマウスをホバーすると、追加のオプションが表示されます：項目の詳細を編集する、メニューツリーから削除する、または他の場所にコピー＆ペーストすることができます。

{% comment %}hint style="info" {% endcomment %}
**ヒント:** Navi+アプリを2つのブラウザタブで開くことで、1つのメニュー項目を別のメニューにコピーできます。
{% comment %}endhint{% endcomment %}

#### 1.3. 重要！サンプルメニュー項目を削除し、必要な構造だけを保持してください。

これはNavi+でメニューを作成する際の一般的な状況です。新しいメニューを作成すると、レイアウトアイデアを示し、必要に応じてコピー/ペーストできる人気のメニュー項目を含む完全な例が含まれます。ただし、Navi+に不慣れでStarterプランを使用している場合は、画像のアップロードや高度なインタラクションの使用など、利用できない機能に対して多くの赤い(i)警告が表示されます。

これらの高度な機能が必要な場合は、BusinessまたはEliteプランにアップグレードすることを検討してください。しかし、Starterプランを続けたい場合は、赤い(i)警告のあるメニュー項目を見つけて削除してください。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg2kAhlxANcsXQT6RPrH9%2FHelp.MenuTree.1.1.3.png?alt=media&#x26;token=da8a7362-0017-43f8-865b-dbdd23803d9a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fpstdwu2GBy4wymYsInJe%2FHelp.MenuTree.1.1.3b.png?alt=media&#x26;token=8a2ebfc9-2cbc-4efb-a1b4-fec1fd621ec8" alt=""><figcaption></figcaption></figure>

{% comment %}hint style="info" {% endcomment %}
**重要なヒント:** 削除確認が表示されたら、「次回は再度尋ねない」をオンにして、より早く削除してください。
{% comment %}endhint{% endcomment %}

#### 1.4. メニューツリーにメニュー項目を追加する

メニュー項目を追加するには、2つのオプションがあります：

**オプション1&#x20;**<mark style="background-color:$warning;">**(Navi+に不慣れな場合は推奨しません)**</mark>**:** 「メニューを追加」をクリックして、メニューツリーの最後に空のメニュー項目を挿入します。この方法は、メニュー項目の設定をよく理解している必要があります。これは後で説明します。最初は圧倒されるかもしれませんので、後で探索することができます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FP8GKAiPpBlFdnzEM0TiI%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=5b87d791-686b-4768-b7dd-d17ff95841c4" alt=""><figcaption></figcaption></figure>

**オプション2（推奨）：** すでに多くのデザインされたメニュー項目テンプレートを用意しています。単にそれらを適切な場所にコピー＆ペーストしてください。メニューツリーが完成したら、未使用のテンプレートを削除するだけです。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FjBJUHMA8dTOONOJoOt8S%2FHelp.MenuTree.1.1.5.png?alt=media&#x26;token=e6316df1-e99a-4259-8370-5fc3afaf331a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FChui5Q4pxEpW1cDVoE3E%2FHelp.MenuTree.1.1.5b.png?alt=media&#x26;token=9e29309f-3177-4d89-ac38-d319bba7a541" alt=""><figcaption></figcaption></figure>
