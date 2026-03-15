---
description: Navi+のグリッドメニューは、モバイルファーストアプローチで設計されています。これは、モバイルでメニューを最初に構成および最適化し、デスクトップ版は...
lang: jp
layout: default
permalink: /jp/docs/usage/grid-menu/responsive-grid-menu/
title: レスポンシブグリッドメニュー
---
# レスポンシブグリッドメニュー

Navi+のグリッドメニューは、モバイルファーストアプローチで設計されています。これは、モバイルでメニューを最初に構成および最適化し、デスクトップ版は自動的にモバイルレイアウトからスケールされ、ゼロから再構築されることはありません。

グリッドメニューは、通常、8〜12項目で重要な機能や重要なカテゴリを強調するために使用されます。モバイルでは、グリッドは通常2〜3行で表示され、1行あたり4〜5項目が表示されます。これを実現するために、3/12や2/10などの幅レイアウト設定を使用して、グリッドが小さな画面にどのようにフィットするかを制御できます。

デスクトップでは、利用可能な画面幅ははるかに大きく（通常は2〜3のモバイル画面に相当）、グリッドが1行あたり4〜5項目しか表示されない場合、見た目がスカスカに見えることがあります。これを解決するために、Navi+はデスクトップ/モバイル表示比率設定を提供します。たとえば、2x比率を設定すると、デスクトップの1行あたりに表示される項目数はモバイルの2倍になり、1行あたり8〜10項目が表示され、広い画面でよりバランスの取れたレイアウトが作成されます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FA6MgTCEXSI8uDmWWPORM%2FGrid%201.2.webp?alt=media&#x26;token=5e73f11c-ec1f-4b66-96e5-7c48075352c4" alt=""><figcaption></figcaption></figure>

モバイルでは、グリッドメニューは2つの方法で表示できます。最初のオプションはフル幅で、グリッドが画面全体の幅を占め、項目が見やすくタップしやすくなります。2番目のオプションは水平方向にスクロール可能なグリッドで、項目のサイズは固定され、ユーザーは左または右にスワイプしてさらにコンテンツを探索できます。どちらのオプションもモバイルでうまく機能し、コンテンツや使用ケースに最適なものを選択できます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FxAbzVsmAmdlzwSWu0cao%2FGrid%201.1.webp?alt=media&#x26;token=631c706b-7041-4a4f-8c04-0fbfcae6a6f5" alt=""><figcaption></figcaption></figure>

デスクトップでは、スワイプジェスチャーは一般的ではないため、グリッドメニューは固定の100%幅で表示されます。デスクトップ/モバイル表示比率をデバイス固有のサイズ設定（8 | 16の形式を使用、モバイルで8、デスクトップで16を意味する）と組み合わせることで、グリッドが大きな画面で明確で満杯で、バランスの取れた外観になるようにできます。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FB2co4DVahpG0xfxrHG7Y%2FGrid%201.3.webp?alt=media&#x26;token=c6b2b6fd-1e34-4e66-975f-4a2ec9388ffa" alt=""><figcaption></figcaption></figure>

このアプローチにより、モバイルとデスクトップでグリッドメニューが一貫して保たれ、管理が容易で、更新が簡単になります—2つの別々のメニューシステムを維持することなく。モバイルでグリッドメニューを1回設計するだけで、Navi+が残りを処理します。
