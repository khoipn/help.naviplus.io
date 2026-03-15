---
description: '**Mega Menu**は、特にデスクトップで最も人気があり効果的なメニュータイプの1つです。ユーザーは自然にウェブサイトのすぐ下にMega Menuを見つけることを期待します...'
lang: jp
layout: default
permalink: /jp/docs/usage/mega-menu-desktop/how-to-use/
title: 使い方は？
---
# 使い方は？

**Mega Menu**は、特にデスクトップで最も人気があり効果的なメニュータイプの1つです。ユーザーは自然にウェブサイトのヘッダーのすぐ下にMega Menuを見つけることを期待します。しかし、Shopifyのデフォルトメニューは通常シンプルで、強い構造が欠けており、画像サポートがほとんどありません。だからこそ、Navi+ Mega Menuを使用するべきです。

**主な利点:**

* Shopifyのシンプルなデフォルトメガメニューを完全に置き換えます
* **画像**、**グリッド**、および**マルチレベル**レイアウトを使用した複数のプレゼンテーションスタイルを提供し、リッチでプロフェッショナルな体験を実現します
* モバイルとデスクトップの両方でシームレスに機能し、一貫した体験を提供します

**FAQ:**

<details><summary><strong>1. 無料版と有料版のどちらを使用するか決めていません。プロフェッショナルメニューのテンプレートを試すことはできますか？</strong></summary>
<p>もちろんです！メニューグループは主に初心者がNavi+の高度な機能に圧倒されないようにするためのものです😄。プロフェッショナルメニューを試して、すべての機能とレイアウトオプションを探索するのが最良の方法です。後で、必要ないメニューや不適切なメニューを削除するだけです。</p>
</details>

<details><summary><strong>2. ここでメニューを作成すると、すぐに私のウェブサイトに表示されますか？</strong></summary>
<p>まだです。正しいメニューを<strong>公開</strong>する必要があります。それがウェブサイトに表示されるためです。心配しないでください — 簡単です！</p>
</details>

<details><summary><strong>3. 間違ったテンプレートを選んだり、ミスをしたらどうなりますか？</strong></summary>
<p>全く問題ありません。いつでも削除して新しいものを作成できます。メニューをテストしていて別のテンプレートを試したい場合は、現在のものをバックアップファイルとして<strong>保存</strong>し、後で再オープンできます。メニュー間で部分を<strong>コピー＆ペースト</strong>することもできます（2つのブラウザタブを開くことで）ので、以前の作業を保持できます。自由に実験してください！</p>
</details>

<details><summary><strong>4. メニューを1つだけ作成するべきですか、それとも複数作成するべきですか？</strong></summary>
<p>あなたは<strong>複数のメニュー</strong>を作成するべきです。<strong>アクティブ</strong>なメニューだけがサイトに表示されますが、異なるテンプレートを選択したり、メニューをクローンしたりして多くのバージョンを準備できます。メニューはページタイプ（ホーム、製品、コレクション...）、デバイス（モバイルまたはデスクトップ）、またはURLキーワードに基づいて表示/非表示に設定できます。ですので、各状況に合ったメニューを構築してください！</p>
</details>

### ステップ1: メニューツリーを編集する

#### 1.1. メニューツリーの理解

**メニューツリー**は、すべてのメニューの最も重要な部分です — 構造を定義します。

こちらはフルデスクトップメガメニューのメニューツリーの例です：

```
[+] メニュー  
[+] カテゴリ  
[+] アルファベット  
スケートボード  
   - コンポーネント（グループ名）  
   - デスク  
   - トラック  
   - もっと（詳細への青いリンク..）  
   - 完成品  
        - 帽子（グループ名）  
        - バートンランチラップイヤーフラップハット  
        - ボルコムランプストーン調整可能ハット  
        - ...  
[+] アクセサリー  
[+] ブログ  
[+] サポート  
[+] もっと
```

これは3レベルのメニューツリーです。レベル1には**メニュー**、**カテゴリ、アルファベット、スケートボード...**および**もっと..**が含まれています。  
**スケートボード**には5つのレベル2サブメニューがあります：**コンポーネント、デスク、完成品**（いくつかのレベル3メニューサブメニューを含む：**帽子、バートンランチラップイヤーフラップハット**...）

あなたはこのメニューツリーを構築するのにほとんどの時間を費やし、顧客が探しているコンテンツを見つける手助けをします。&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FJdoP60xMLS1qPJRoP1NB%2FHelp.MenuTree.1.1.0.png?alt=media&#x26;token=abcbf81d-d5d6-4e08-89a5-8409c9d9608d" alt="カタログ：タブバーに表示されるレベル1メニュー項目。オールマウンテン：カタログをタップしたときに表示されるレベル2メニュー項目。"><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FGJpo5jWFTPreiPlpJM2P%2FHelp.MenuTree.1.1.1.png?alt=media&#x26;token=504bf18a-d988-404d-a4af-427826a0edd8" alt="クルーズフレックス、バランスライド：オールマウンテンをタップしたときに表示されるレベル3メニュー項目。"><figcaption></figcaption></figure>

#### 1.2. メニューツリーとの基本的なインタラクション

メニュー項目を上下または左右にドラッグ＆ドロップして、メニューツリー内の位置や親子関係を変更できます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FfDZzxdLeYHGDsuS5AIU2%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=1df0b87e-06cf-4ce7-ba13-e6b0b3d3ad76" alt=""><figcaption></figcaption></figure>

任意のメニュー項目にマウスをホバーすると、追加のオプションが表示されます：項目の詳細を編集する、メニューツリーから削除する、または他の場所にコピー＆ペーストすることができます。

{% comment %}hint style="info" {% endcomment %}
**ヒント：** 2つのブラウザタブでNavi+アプリを開くことで、1つのメニュー項目を別のメニューにコピーできます。
{% comment %}endhint{% endcomment %}

#### 1.3. 重要！サンプルメニュー項目を削除し、必要な構造だけを保持してください。

これはNavi+でメニューを作成する際の一般的な状況です。新しいメニューを作成すると、レイアウトアイデアを示し、必要に応じてコピー/ペーストできる人気のメニュー項目を含む完全な例が含まれます。しかし、Navi+に不慣れでStarterプランを使用している場合、画像のアップロードや高度なインタラクションの使用など、利用できない機能に対して多くの赤い（i）警告が表示されます。

これらの高度な機能が必要な場合は、BusinessまたはEliteプランへのアップグレードを検討してください。しかし、Starterプランを続けたい場合は、赤い（i）警告のあるメニュー項目を見つけて削除してください。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FuUi6snWaLS1ZC6kSuRDG%2FHelp.MenuTree.1.1.3.png?alt=media&#x26;token=72b33ea5-7941-4036-b1ef-cf9199fb90f2" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fpstdwu2GBy4wymYsInJe%2FHelp.MenuTree.1.1.3b.png?alt=media&#x26;token=8a2ebfc9-2cbc-4efb-a1b4-fec1fd621ec8" alt=""><figcaption></figcaption></figure>

{% comment %}hint style="info" {% endcomment %}
**重要なヒント：** 削除確認が表示されたら、「次回は再度尋ねない」をオンにして、より早く削除できます。
{% comment %}endhint{% endcomment %}

#### 1.4. メニューツリーにメニュー項目を追加する

メニュー項目を追加するには、2つのオプションがあります：

**オプション1&#x20;**<mark style="background-color:$warning;">**（Navi+に不慣れな場合は推奨しません）**</mark>**：** 「メニューを追加」をクリックして、メニューツリーの最後に空のメニュー項目を挿入します。この方法は、メニュー項目の設定をよく理解している必要があります。これは後で説明します。最初は圧倒されるかもしれませんので、後で探索することができます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FP8GKAiPpBlFdnzEM0TiI%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=5b87d791-686b-4768-b7dd-d17ff95841c4" alt=""><figcaption></figcaption></figure>

**オプション2（推奨）：** すでに多くのデザインされたメニュー項目テンプレートを用意しています。それらを適切な場所にコピー＆ペーストするだけです。メニューツリーが完成したら、未使用のテンプレートを削除してください。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FjBJUHMA8dTOONOJoOt8S%2FHelp.MenuTree.1.1.5.png?alt=media&#x26;token=e6316df1-e99a-4259-8370-5fc3afaf331a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FChui5Q4pxEpW1cDVoE3E%2FHelp.MenuTree.1.1.5b.png?alt=media&#x26;token=9e29309f-3177-4d89-ac38-d319bba7a541" alt=""><figcaption></figcaption></figure>

#### **1.5. 重要！** 「マルチカラムメニュー項目である」属性（デスクトップおよびメガメニュー専用）。

これは、デスクトップメガメニュー専用に設計された非常に専門的な機能です。複数のカラムを持つフルスクリーンメニュー項目が必要な場合に使用されます。各カラムはカスタム幅（例：3/12、4/12、6/12...）で設定できます。マルチカラムメニュー項目は、複雑なメニューレイアウトを構築するために非常に強力で柔軟です。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FybsBSjopbkXc3LeUUO11%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=a04b3a4a-bbea-40f1-83d6-6dadd0b3288c" alt=""><figcaption></figcaption></figure>

複雑なレイアウトが必要ない場合や、後で使用する予定がない場合は、レベル1メニュー項目から安全に削除できます。

<details><summary>「マルチカラムメニュー項目である」属性の使用方法に関する詳細な指示を参照してください。</summary>
<p>レベル1メニュー項目が<strong>「マルチカラムメニュー項目である」</strong>に設定されている場合、メニューツリーで薄い黄色でハイライトされ、そのレベル2メニュー項目は自動的に<strong>カラム</strong>（赤いアイコン付き）に変換されます。他の属性を割り当てた場合でも、すべてのカラムレベル2メニュー項目はこのように変換されます。</p>
<p>これらの<strong>カラムレベル2メニュー項目</strong>に対して使用できる属性は<strong>幅レイアウト</strong>のみです。そのカラムの下にあるすべてのサブメニュー項目は、単一のカラム内に配置されます。</p>
<p>{% comment %}hint style="info" {% endcomment %}
このタイプのメニューを使うのが難しいですか？その通りです！しかし、この属性を使用すると得られる結果は本当に素晴らしいです。
{% comment %}endhint{% endcomment %}</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRlftdLgJtyudsMcrmBDl%2FHelp.MenuTree.1.1.0.png?alt=media&#x26;token=9648c4e6-ddf9-43ae-9832-0117d3be867b" alt=""><figcaption></figcaption></figure>

<p>レベル1メニュー項目から<strong>「マルチカラムメニュー」</strong>属性を削除すると、すべてが元の状態に戻ります。</p>
<h4>なぜ<strong>「展開時のドロップダウン幅」</strong>属性が必要ですか？</h4>
<p>デフォルトでは、<strong>「マルチカラムメニュー項目である」</strong>属性を使用する場合、サブメニュー（ドロップダウン）はフルスクリーン幅（またはコンテナサイズに基づいて、通常は1280、1366、1440、または100% — <em>高度な</em>タブで設定可能）に展開されます。  
しかし、そのような広いエリアでは、常に十分なコンテンツやアイデアがあるわけではありません。</p>
<p>この場合、サブメニューの幅を制限することができます（各マルチカラムメニュー項目ごとに個別に）空のまたは不均衡な外観を避けるためです。</p>
<p><strong>例：</strong> 幅700pxのメニューを作成し、各6/12の2カラムを作成できます。このようにして、画面の不動産を無駄にすることなく、広々としたレイアウトを得ることができます。</p>
</details>
