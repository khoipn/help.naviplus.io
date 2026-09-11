---
description: "Navi+ が独立した2つのコンテンツ配信ネットワークでメニューを配信し、常にオンラインに保つ仕組みと、アプリ埋め込みの「Use a second CDN (BunnyCDN)」オプションの役割 — 一部地域の訪問者が Cloudflare に到達できない場合を含めて説明します。"
lang: jp
layout: default
permalink: /jp/docs/frequently-asked-questions/second-cdn-bunnycdn/
title: "Navi+ がメニューを常にオンラインに保つ仕組み — 「Use a second CDN (BunnyCDN)」オプション"
---
# Navi+ がメニューを常にオンラインに保つ仕組み — 「Use a second CDN (BunnyCDN)」オプション

メニューはテーマの中に保存されているわけではありません。ページが読み込まれるたびに、ブラウザは Navi+ からいくつかの小さなファイル — メニューエンジン、そのスタイル、メニューデータ — を取得します。これらのファイルがどこから届くかで、メニューが表示されるか、どれだけ速いかが決まります。このページでは、その配信の仕組み、障害に対する備え、そして Shopify アプリ埋め込みの **Use a second CDN (BunnyCDN)** チェックボックスが何を変えるのかを説明します。

---

## 2つのネットワーク、1つのメニュー

Navi+ はメニューのファイルをコンテンツ配信ネットワーク（CDN）経由で配信します。世界中に分散したサーバー群が同じファイルのコピーを保持し、各訪問者は近い拠点から配信を受けます。

1つのネットワークの問題でメニューが消えることが決してないように、同じファイルを異なる2社が運営する**独立した2つのネットワーク**に保持しています。

| ネットワーク | 提供元 | 役割 |
|---|---|---|
| メインネットワーク | Cloudflare | 初期設定ではすべてのストアに配信します。 |
| セカンドネットワーク | BunnyCDN | 同一のコピーを保持し、Navi+ のリリースごとに更新されます。メインネットワークが配信できないときに引き継ぎます。 |

各提供元はそれぞれ独自の稼働率保証を持つ世界規模のインフラを運用しています。2社はサーバーを共有していないため、一方の障害はもう一方に影響しません — メニューが1社の稼働に依存することはありません。

---

## 初期設定でのページ読み込みの流れ

<div align="center">

<svg viewBox="0 0 720 330" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="20" y="120" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">訪問者のブラウザ</text>
  <text x="95" y="172" text-anchor="middle" font-size="12" fill="#4b5563">ストアを開く</text>
  <text x="95" y="190" text-anchor="middle" font-size="12" fill="#4b5563">Navi+ 起動スクリプトが実行</text>

  <rect x="290" y="40" width="200" height="100" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="390" y="66" text-anchor="middle" font-size="14" font-weight="600" fill="#9a3412">メインネットワーク</text>
  <text x="390" y="86" text-anchor="middle" font-size="12" fill="#7c2d12">Cloudflare</text>
  <text x="390" y="110" text-anchor="middle" font-size="11" fill="#7c2d12">メニューエンジン · スタイル · メニューデータ</text>
  <text x="390" y="126" text-anchor="middle" font-size="11" fill="#7c2d12">訪問者に最も近い拠点から配信</text>

  <rect x="290" y="200" width="200" height="100" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="390" y="226" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">セカンドネットワーク</text>
  <text x="390" y="246" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN</text>
  <text x="390" y="270" text-anchor="middle" font-size="11" fill="#1e40af">すべてのファイルの同一コピー</text>
  <text x="390" y="286" text-anchor="middle" font-size="11" fill="#1e40af">Navi+ のリリースごとに更新</text>

  <rect x="560" y="120" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="152" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">メニューが</text>
  <text x="630" y="174" text-anchor="middle" font-size="12" fill="#047857">ページに表示</text>

  <path d="M170,150 C230,150 230,90 290,90" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="222" y="108" text-anchor="middle" font-size="11" fill="#374151">1. ファイルを要求</text>

  <path d="M490,90 C530,90 530,150 560,150" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="522" y="108" text-anchor="middle" font-size="11" fill="#374151">2. 配信</text>

  <path d="M170,180 C230,180 230,250 290,250" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>
  <text x="222" y="230" text-anchor="middle" font-size="11" fill="#dc2626">ファイル取得に失敗 →</text>
  <text x="222" y="244" text-anchor="middle" font-size="11" fill="#dc2626">自動で再試行</text>

  <path d="M490,250 C530,250 530,180 560,180" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>

  <path d="M390,140 L390,200" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="404" y="174" font-size="10" fill="#6b7280">常に同期</text>
</svg>

</div>

1. テーマ内の Navi+ アプリ埋め込みが、ごく小さな起動スクリプトを実行します。
2. 起動スクリプトが**メインネットワーク**にメニューエンジン、スタイル、メニューデータを要求します。
3. メニューが表示されます。

これらのファイルのいずれかがメインネットワークから届かない場合 — 障害、タイムアウト、地域的な問題 — 起動スクリプトは**同じファイルを BunnyCDN から自動で再取得**します。これは訪問者のブラウザ内で自動的に行われ、設定は一切不要です。実際には、1つのネットワークの不調をお客様が気づくことはありません。

---

## 自動再試行でカバーできない唯一のケース

自動再試行は起動スクリプトの中に組み込まれています。そこに死角があります。**起動スクリプト自体**が届かなければ何も実行されず、再試行するものも残りません。

これは訪問者の回線がメインネットワークにまったく到達できない場合に起こります。Cloudflare はインターネット最大級のネットワークですが、どこからでも到達できるわけではありません。

- 国レベルで Cloudflare のトラフィックを制限・抑制している国があります。
- 企業や学校のネットワークが Web フィルタリングの一環としてブロックしている場合があります。
- 特定の地域で Cloudflare への経路が不安定なプロバイダーがあり、リクエストがタイムアウトします。

お客様の多くがそうした場所にいるストアでは、あなたには完璧に動くメニューがお客様には表示されないことがあり — 自動再試行が助けになる機会は訪れません。

---

## 「Use a second CDN (BunnyCDN)」の役割

このオプションを有効にすると優先順位が入れ替わり、メニューはメインネットワークにまったく依存しなくなります。

<div align="center">

<svg viewBox="0 0 720 300" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb"/>
    </marker>
  </defs>

  <rect x="20" y="105" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="135" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">訪問者のブラウザ</text>
  <text x="95" y="157" text-anchor="middle" font-size="12" fill="#4b5563">ストアを開く</text>
  <text x="95" y="175" text-anchor="middle" font-size="12" fill="#4b5563">起動スクリプトを2か所に要求</text>

  <rect x="290" y="30" width="200" height="80" rx="10" fill="#fafafa" stroke="#d1d5db" stroke-width="1.5"/>
  <text x="390" y="56" text-anchor="middle" font-size="14" font-weight="600" fill="#6b7280">メインネットワーク</text>
  <text x="390" y="76" text-anchor="middle" font-size="12" fill="#6b7280">Cloudflare</text>
  <text x="390" y="96" text-anchor="middle" font-size="11" fill="#6b7280">起動スクリプトのみ</text>

  <rect x="290" y="150" width="200" height="120" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="390" y="176" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">セカンドネットワーク</text>
  <text x="390" y="196" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN — メインに</text>
  <text x="390" y="220" text-anchor="middle" font-size="11" fill="#1e40af">起動スクリプト</text>
  <text x="390" y="236" text-anchor="middle" font-size="11" fill="#1e40af">メニューエンジン · スタイル · メニューデータ</text>
  <text x="390" y="256" text-anchor="middle" font-size="11" fill="#1e40af">起動後のすべて</text>

  <rect x="560" y="105" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="137" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">メニューが</text>
  <text x="630" y="159" text-anchor="middle" font-size="12" fill="#047857">ページに表示</text>

  <path d="M170,135 C230,135 230,70 290,70" fill="none" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#cdnArrow2)"/>
  <text x="222" y="90" text-anchor="middle" font-size="11" fill="#6b7280">起動（先に応答</text>
  <text x="222" y="104" text-anchor="middle" font-size="11" fill="#6b7280">した方）</text>

  <path d="M170,165 C230,165 230,210 290,210" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>

  <path d="M490,210 C530,210 530,150 560,150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>
  <text x="522" y="192" text-anchor="middle" font-size="11" fill="#2563eb">配信</text>
</svg>

</div>

- **起動スクリプトは両方のネットワークに要求**されるため、訪問者の場所からどちらか一方に到達できればメニューは起動します。
- **それ以降のすべて** — メニューエンジン、スタイル、メニューデータ — は Cloudflare ではなく **BunnyCDN** から読み込まれます。

メインネットワークは起動スクリプトの予備としてのみ残り、メニュー本体の主な配信元は BunnyCDN になります。

---

## いつ有効にすべきか

次のいずれかに当てはまらない限り、**オフ**のままにしてください。

- **Navi+ サポートから依頼があった場合。** 一部の訪問者にメニューが表示されないとご報告いただいた際、私たちはその訪問者の所在地と到達できるネットワークを確認します。メインネットワークが原因であれば、このオプションの有効化をお願いします。
- **お客様が Cloudflare の制限や不安定さのある地域にいると分かっている場合。** ストアが主にそうした地域向けであれば、BunnyCDN をメインにする方が安全です。オプションにチェックを入れてお知らせください — こちら側から問題ないことを確認します。

典型的な兆候：あなたや大多数の訪問者にはメニューが表示されるのに、特定の国や特定のネットワークのお客様からは「一度も表示されない」と報告がある。

---

## 初期設定でオフになっている理由

どちらのネットワークも世界規模で高速です。大多数のストアでは切り替えても得るものはなく、初期設定の経路は私たちが最も注意深く監視し、修正を最初に展開する経路です。このオプションは上記のまれなケース向けのツールであり、パフォーマンス設定ではありません。

---

## ページ速度に影響しますか？

目立った変化はありません。BunnyCDN は同じファイルを独自の世界各地の拠点から配信します。起動スクリプトを2つのネットワークに要求することで小さなリクエストが1つ増えますが、メニューエンジンとメニューデータは引き続き1つの配信元から1回だけ読み込まれます。

---

## オン／オフの切り替え方法

1. Shopify 管理画面で **オンラインストア → テーマ → カスタマイズ** を開きます。
2. 左サイドバーの **アプリ埋め込み** アイコンをクリックします。
3. **Navi+** を見つけて展開します。
4. **Advanced** の下にある **Use a second CDN (BunnyCDN)** にチェックを入れる／外します。
5. **保存** をクリックします。

変更は次のページ読み込みから反映されます。Navi+ アプリ内で設定することはありません。

> 問題の調査中にサポートから有効化を依頼された場合は、解決の確認があるまでオンのままにしてください — その後、オフに戻して構いません。
