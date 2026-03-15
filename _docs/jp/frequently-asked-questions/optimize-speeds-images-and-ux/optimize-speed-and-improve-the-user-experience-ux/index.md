---
description: Navi+は非常に高速です。非常に低いレイテンシ（約100ms）で、主要なCDNに完全に展開されており、数百万の顧客に対して遅延なくサービスを提供できます。
lang: jp
layout: default
permalink: /jp/docs/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-speed-and-improve-the-user-experience-ux/
title: 速度を最適化し、ユーザーエクスペリエンス（UX）を向上させる。
---
# 速度を最適化し、ユーザーエクスペリエンス（UX）を向上させる。

#### なぜこれを行う必要があるのですか？Navi+はすでに速くないですか？

Navi+は非常に高速です。非常に低いレイテンシ（約100ms）で、主要なCDNに完全に展開されており、数百万の顧客に対して遅延なくサービスを提供できます。

しかし、Navi+はまだShopifyエコシステム内で動作しています。Shopifyには独自の読み込みルールがあります：

1. Shopifyは自社のリソースを最初に読み込むことを優先します。
2. 次にShopifyはテーマコンテンツを読み込みます。
3. 最後にShopifyはアプリコンテンツを読み込みますが、特定の順序はありません。

これは、複数のアプリを使用している場合、Navi+が予想よりも遅れて読み込まれることがあることを意味します。だからこそ、特定のケースでは遅く感じることがあります。

***

### 私の解決策は何ですか？

現在、Navi+はShopifyウェブサイトでの読み込み時に高い優先度を持っています。しかし、まだ一定の遅延があります。ここでこれらの問題に一つずつ対処します：

#### スライドメニュー：読み込み効果を追加し、トリガーセレクタをロックする

非常に簡単です：スライドメニューに使用しているCSSセレクタをNavi+アプリの埋め込みセクションに入力するだけです（下の画像を参照）。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

#### メガメニュー（置き換えモード）：読み込み効果を追加し、トリガーセレクタをロックする

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

注意：

* モバイルのみに適用したい場合は、接尾辞**(M)**を追加してください。
* デスクトップのみに適用したい場合は、接尾辞**(D)**を追加してください。
* 両方のプラットフォームに適用したい場合は、接尾辞を残さないでください。
