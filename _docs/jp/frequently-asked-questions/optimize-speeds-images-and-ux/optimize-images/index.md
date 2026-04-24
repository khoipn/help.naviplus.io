---
description: Navi+ツールを使用してアップロードする際に、画像が圧縮されないようにするにはどうすればよいですか？
lang: jp
layout: default
permalink: /jp/docs/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-images/
title: 画像の最適化
---
# 画像の最適化

Navi+ツールを使用してアップロードする際に、画像が圧縮されないようにするにはどうすればよいですか？

#### I. なぜ小さい画像サイズがSEOとユーザー体験にとって良いのか？

小さい画像サイズを使用すると、ウェブサイトの読み込みが速くなります。Googleのような検索エンジンはページ速度を重要なランキング要因と見なしているため、最適化された画像はSEOを改善することができます。

読み込みが速いことは、特にモバイルデバイスや遅い接続で、訪問者にとってウェブサイトをよりスムーズで楽しいものにします。これは、ユーザーがあなたのサイトに留まり、製品を探索し続ける可能性が高くなることを意味します。

#### II. Navi+はどのように画像を処理するのか？

Navi+は最初に画像を元のサイズでアップロードします。その後、最適化されたアルゴリズムで画像を圧縮し、表示サイズを縮小します。このサイズは、ユーザー体験とSEOの両方にとって理想的であるようにNavi+によって慎重に選ばれます。メニュー内の画像は通常サムネイルやアイコンであり、小さくて迅速に読み込む必要があります。

**注意:** ロゴやアイコンのような小さな画像の場合、Navi+は鮮明さを保つために圧縮しません。

その後、Navi+は画像をBunnyCDNに保存します。BunnyCDNは、画像、JavaScript、CSSなどのための強力なコンテンツ配信ネットワーク（CDN）です。BunnyCDNは、グローバルなサーバーネットワークを通じて非常に高速な読み込み速度を提供します。これにより、あなたのウェブサイトは遅くなったり、遅延を引き起こすことなく、数百万の訪問を処理できることが保証されます。

#### III. 画像を元の品質のまま保持したい場合はどうすればよいか？

特別な場合には、Navi+に画像の品質を変更しないようにしたいことがあります。そうしないと、圧縮によって期待する品質が低下する可能性があります。たとえば、重要な製品画像などです。この場合、画像を直接Shopifyにアップロードし、Navi+に元の品質を保持するためのリンクを提供する必要があります。

**ステップ1: 画像を準備する（手動プロセス）**\
希望通りに画像を準備し、SEO最適化のために名前を変更します。（Navi+は、Navi+ツールを通じてアップロードされた場合にのみ画像の名前を変更します。）\
また、画像を適切なサイズに圧縮する必要があります。理想的には数百KBです。ここでShopifyの画像リサイズツールを使用できます: <https://www.shopify.com/tools/image-resizer>。

**ステップ2: Shopifyにアップロード**\
メニュー**Content**を右クリックし、**新しいタブでリンクを開く**を選択し、次に**Files**に移動します。ステップ1で準備した画像をドラッグ＆ドロップします。アップロードが完了したら、リスト内でファイルを見つけ、リンクアイコンをクリックしてそのURLをコピーします。このURLは、画像をアップロードするためにNavi+で使用されます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F35kK3wzf4jQ6lgRuPIK6%2F1.2.png?alt=media&#x26;token=1b45a6ad-32fb-4988-bda2-9de4aaa7db53" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRKyGXqaCHjUzEEI12woQ%2F1.3.png?alt=media&#x26;token=dbdc467c-13b0-4eb7-9786-558c5d1704d2" alt=""><figcaption></figcaption></figure>

**ステップ3: Navi+で画像URLを使用**\
ステップ2で取得したURLをNavi+の**Upload Image**ツールを使用して貼り付けます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FPy9nqxsNKCo4RMjo1cTP%2F1.4.png?alt=media&#x26;token=a0a4897c-5e1c-47d8-951c-52028b705e1e" alt=""><figcaption></figcaption></figure>


---

# エージェントの指示: このドキュメントを照会する

このページに直接利用できない追加情報が必要な場合は、質問をしてドキュメントを動的に照会できます。

現在のページURLに対して`ask`クエリパラメータを使用してHTTP GETリクエストを実行します:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-images.md?ask=<question>
```

質問は具体的で自己完結しており、自然言語で書かれている必要があります。
レスポンスには、質問への直接的な回答と、ドキュメントからの関連する抜粋や情報源が含まれます。

このメカニズムは、現在のページに明示的に存在しない回答が必要な場合、明確化や追加のコンテキストが必要な場合、または関連するドキュメントセクションを取得したい場合に使用してください。
