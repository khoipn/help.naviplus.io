---
description: デスクトップメガメニューが2行目に折り返すのを防ぎ、モバイルへの切り替えを遅延させる2つの設定と、モバイルでスライドメニューとして表示する方法について説明します。
lang: jp
layout: default
permalink: /jp/docs/usage/mega-menu-desktop/faq/
title: FAQ
---
# FAQ

#### 質問1: Desktop Mega Menuが2行目に折り返すのを防ぐにはどうすればいいですか？

Desktop Mega Menuのレイアウトを崩す可能性がある2つの状況があります。トップレベルアイテムが多すぎるか、標準的なデスクトップより狭いウィンドウでサイトが表示されている場合です。`Setting → Layout → Desktop`の下にある2つの設定がこれを修正します——コード不要です。

<div align="center">

<svg viewBox="0 0 680 340" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="24" font-size="14" font-weight="600" fill="#1a1d21">Before — too many items wrap to a second line</text>
  <rect x="20" y="36" width="640" height="110" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="69" y="68" text-anchor="middle">Home</text>
    <rect x="112" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="147" y="68" text-anchor="middle">Shop</text>
    <rect x="190" y="50" width="110" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="245" y="68" text-anchor="middle">Categories</text>
    <rect x="308" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="343" y="68" text-anchor="middle">Sale</text>
    <rect x="386" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="421" y="68" text-anchor="middle">Blog</text>
    <rect x="464" y="50" width="82" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="505" y="68" text-anchor="middle">About</text>
    <rect x="554" y="50" width="42" height="28" rx="14" fill="#fff" stroke="#e6e8eb" stroke-dasharray="3 2"/>
  </g>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="92" width="42" height="28" rx="14" fill="#fff" stroke="#e6e8eb" stroke-dasharray="3 2"/>
    <rect x="84" y="92" width="94" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="131" y="110" text-anchor="middle">Contact</text>
    <rect x="186" y="92" width="94" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="233" y="110" text-anchor="middle">Support</text>
  </g>
  <text x="600" y="140" font-size="20" text-anchor="middle" fill="#dc2626">⚠</text>
  <text x="20" y="170" font-size="12" fill="#4b5563">The second row pushes page content down, and the header height changes unpredictably across screen sizes.</text>

  <text x="20" y="204" font-size="14" font-weight="600" fill="#1a1d21">After — "Menu overflow navigation" keeps it on one row</text>
  <rect x="20" y="216" width="640" height="50" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="228" width="70" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="69" y="245" text-anchor="middle">Home</text>
    <rect x="112" y="228" width="70" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="147" y="245" text-anchor="middle">Shop</text>
    <rect x="190" y="228" width="106" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="243" y="245" text-anchor="middle">Categories</text>
    <rect x="304" y="228" width="66" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="337" y="245" text-anchor="middle">Sale</text>
    <rect x="378" y="228" width="66" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="411" y="245" text-anchor="middle">Blog</text>
  </g>
  <rect x="600" y="228" width="40" height="26" rx="13" fill="#1a7a4f"/>
  <text x="620" y="246" font-size="14" text-anchor="middle" fill="#fff">›</text>
  <path d="M615 216 L625 216 L620 208 Z" fill="#fff" stroke="#e6e8eb"/>
  <rect x="520" y="150" width="140" height="66" rx="6" fill="#fff" stroke="#e6e8eb"/>
  <text x="590" y="170" font-size="12" text-anchor="middle" fill="#1a1d21">About</text>
  <text x="590" y="188" font-size="12" text-anchor="middle" fill="#1a1d21">Contact</text>
  <text x="590" y="206" font-size="12" text-anchor="middle" fill="#1a1d21">Support</text>
  <text x="20" y="298" font-size="12" fill="#4b5563">Items that don't fit (About, Contact, Support...) live behind the arrow button — click to reveal them, without wrapping.</text>
</svg>

</div>

##### Menu overflow navigation

`Show navigation arrows when menu overflows`をオンにします。トップレベルバーは常に1行のままで、収まらないアイテムは折り返されるのではなく、`›`矢印ボタンの後ろに隠されます。`Button background color`と`Arrow icon color`の2つの色フィールドを使うと、ボタンをスタイルできます。

##### Mobile switch breakpoint

デフォルトでは、768pxより狭い画面はデスクトップレイアウト用のスペースがまだ十分にあってもモバイルモードに切り替わります——タブレットやサイズ変更されたブラウザウィンドウでよくあります。`Breakpoint (px)`フィールドを下げて、より狭い幅までデスクトップバーを表示させます。

<div align="center">

<svg viewBox="0 0 640 210" width="100%" style="max-width:600px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="10" width="600" height="190" rx="10" fill="#fff" stroke="#e6e8eb"/>
  <text x="40" y="34" font-size="12" font-style="italic" fill="#4b5563">Setting → Layout → Desktop</text>
  <line x1="40" y1="44" x2="580" y2="44" stroke="#e6e8eb"/>
  <rect x="40" y="62" width="24" height="24" rx="6" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="52" y="79" font-size="13" text-anchor="middle" fill="#1a7a4f">↔</text>
  <text x="76" y="72" font-size="13" font-weight="600" fill="#1a1d21">Mobile switch breakpoint</text>
  <text x="76" y="90" font-size="11" fill="#6b7280">Screen width below which the menu switches to mobile</text>
  <rect x="480" y="60" width="80" height="26" rx="5" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="520" y="78" font-size="12" text-anchor="middle" fill="#1a1d21">768 px</text>
  <line x1="40" y1="114" x2="580" y2="114" stroke="#f0f2f4"/>
  <rect x="40" y="132" width="24" height="24" rx="6" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="52" y="149" font-size="13" text-anchor="middle" fill="#1a7a4f">›</text>
  <text x="76" y="142" font-size="13" font-weight="600" fill="#1a1d21">Menu overflow navigation</text>
  <text x="76" y="160" font-size="11" fill="#6b7280">Show navigation arrows when the menu overflows</text>
  <rect x="520" y="130" width="40" height="22" rx="11" fill="#1a7a4f"/>
  <circle cx="550" cy="141" r="9" fill="#fff"/>
  <text x="40" y="188" font-size="11" fill="#6b7280">Both cards only appear for a Desktop Mega Menu — not Tabbar, FAB, Slide, or Mobile Mega Menu.</text>
</svg>

</div>

<div align="center">

<svg viewBox="0 0 680 260" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="22" font-size="14" font-weight="600" fill="#1a1d21">Default — fixed at 768px</text>
  <rect x="40" y="34" width="384" height="34" fill="#e6e8eb"/>
  <text x="232" y="56" font-size="12" text-anchor="middle" fill="#4b5563">Mobile / Hamburger</text>
  <rect x="424" y="34" width="216" height="34" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="532" y="56" font-size="12" text-anchor="middle" fill="#0f5c3a">Desktop Mega Menu</text>
  <line x1="424" y1="26" x2="424" y2="76" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="424" y="90" font-size="11" text-anchor="middle" fill="#1a1d21">768px</text>

  <text x="20" y="140" font-size="14" font-weight="600" fill="#1a1d21">After setting Breakpoint = 600 (+ overflow navigation enabled)</text>
  <rect x="40" y="152" width="300" height="34" fill="#e6e8eb"/>
  <text x="190" y="174" font-size="12" text-anchor="middle" fill="#4b5563">Mobile / Hamburger</text>
  <rect x="340" y="152" width="84" height="34" fill="#e6f4ed" stroke="#1a7a4f" stroke-dasharray="4 2"/>
  <text x="382" y="169" font-size="10.5" text-anchor="middle" fill="#0f5c3a">Desktop</text>
  <text x="382" y="181" font-size="10.5" text-anchor="middle" fill="#0f5c3a">(new range)</text>
  <rect x="424" y="152" width="216" height="34" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="532" y="174" font-size="12" text-anchor="middle" fill="#0f5c3a">Desktop Mega Menu</text>
  <line x1="340" y1="144" x2="340" y2="194" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="340" y="208" font-size="11" text-anchor="middle" fill="#1a1d21">600px</text>
  <line x1="424" y1="144" x2="424" y2="194" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="424" y="208" font-size="11" text-anchor="middle" fill="#1a1d21">768px</text>
  <text x="20" y="238" font-size="12" fill="#4b5563">The 600–768px range used to be hidden as mobile — it now keeps the desktop layout.</text>
</svg>

</div>

> 新しく開かれた範囲（ブレークポイントと768pxの間）は標準的なデスクトップより狭いため、その範囲でトップレベルアイテムが折り返されないよう、Menu overflow navigationもオンにしてください。

例：ブレークポイント = `600`でMenu overflow navigationがオンの場合：

| 画面幅 | 動作 |
|---|---|
| 600px未満 | モバイル/ハンバーガーメニュー |
| 600px – 768px | Desktop Mega Menu、矢印ボタンがアイテムを1行に保つ |
| 768px以上 | Desktop Mega Menu、標準的な動作 |

これら2つの設定は独立しており、Desktop Mega Menuにのみ影響します——TabBar、FAB、Slide menu、Mobile Mega Menuには影響しません。

***

#### 質問2: Desktop Mega Menuをモバイル上でSlide menuとして表示するにはどうすればいいですか？

時々、古典的なレスポンシブアプローチが必要です。1つのDesktop Mega Menuを構築し、モバイルで自動的にSlide（Hamburger）メニューに折りたたまれるようにします——最初からモバイル用の別のメニューを構築する代わりに。

<div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1.25rem 0;">
<div style="flex:1 1 260px;border-left:3px solid #1a7a4f;background:#e6f4ed;padding:0.85rem 1.1rem;border-radius:0 8px 8px 0;">
<span style="color:#0f5c3a;font-weight:600;">メリット</span><br>
<span style="color:#374151;">メンテナンスするメニューは1つだけです——デスクトップバージョンです。モバイルコピーは自動的に従い、同期を保つための2番目のツリーはありません。</span>
</div>
<div style="flex:1 1 260px;border-left:3px solid #dc2626;background:#fef2f2;padding:0.85rem 1.1rem;border-radius:0 8px 8px 0;">
<span style="color:#b91c1c;font-weight:600;">デメリット</span><br>
<span style="color:#374151;">モバイルファーストは今日のナビゲーション設計の方法です——携帯電話はほとんどのアクセスをもたらし、多くの場合、最も多くの収益をもたらします。広いデスクトップバーから絞られたツリーは本当にデスクトップファーストです。リンクあたりのタップが多すぎる、スタックされたリストとして読まれるドロップダウンスタイルのグループ、モバイル専用のショートカット用のスペースがありません。</span>
</div>
</div>

ストアのメインナビゲーションでは、最初からモバイル用に設計されたメニュー——専用のSlide、Grid、またはTabBarメニュー——は通常、余分なメンテナンスの価値があります。

> 中間的な方法：`Smart responsive`を使用してDesktop Mega MenuをSlide menuにミラーリングし（以下の手順）、それを直接開くTabBarアイテムを追加します。アイテムの`Link To`フィールドを`open:NaviMenu(SF-xxxxxxxxxx)`に設定します（Business / Elite）——Slide menuの埋め込みIDを使用します——モバイル訪問者が非表示のハンバーガーアイコンの代わりに、実際の下部バーのエントリポイントを取得するようにします。

##### Smart responsiveをセットアップする

Desktop Mega Menu → `Setting → Mobile` → カード`Smart responsive`を開きます。このメニューの生きたリファレンスをSlide menuに埋め込みます——ここのコンテンツのみを編集し続け、モバイルバージョンは自動的に更新されます。

<div align="center">

<svg viewBox="0 0 640 300" width="100%" style="max-width:600px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="20" font-size="13" font-weight="600" fill="#1a1d21">Desktop Mega Menu — 3 columns</text>
  <rect x="20" y="30" width="270" height="230" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="35" y="50" font-size="11" font-weight="600" fill="#1a1d21">Collections</text>
  <line x1="20" y1="58" x2="290" y2="58" stroke="#e6e8eb"/>
  <line x1="110" y1="66" x2="110" y2="252" stroke="#e6e8eb"/>
  <line x1="200" y1="66" x2="200" y2="252" stroke="#e6e8eb"/>
  <text x="35" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Women</text>
  <text x="35" y="94" font-size="10.5" fill="#1a1d21">Dresses</text>
  <text x="35" y="112" font-size="10.5" fill="#1a1d21">Tops</text>
  <text x="125" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Men</text>
  <text x="125" y="94" font-size="10.5" fill="#1a1d21">New in</text>
  <text x="125" y="112" font-size="10.5" fill="#1a1d21">Sale</text>
  <text x="215" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Info</text>
  <text x="215" y="94" font-size="10.5" fill="#1a1d21">Size guide</text>
  <text x="215" y="112" font-size="10.5" fill="#1a1d21">Shipping</text>

  <text x="315" y="150" font-size="22" text-anchor="middle" fill="#1a7a4f">→</text>
  <text x="315" y="172" font-size="10" text-anchor="middle" fill="#6b7280">Smart</text>
  <text x="315" y="184" font-size="10" text-anchor="middle" fill="#6b7280">responsive</text>

  <text x="360" y="20" font-size="13" font-weight="600" fill="#1a1d21">Slide menu — flattened to 1 column</text>
  <rect x="360" y="30" width="130" height="250" rx="16" fill="#1a1d21"/>
  <rect x="368" y="42" width="114" height="226" rx="4" fill="#fff"/>
  <text x="425" y="60" font-size="10.5" font-weight="600" text-anchor="middle" fill="#1a1d21">Collections</text>
  <line x1="374" y1="68" x2="476" y2="68" stroke="#e6e8eb"/>
  <text x="380" y="86" font-size="9.5" fill="#1a1d21">Dresses</text>
  <text x="380" y="102" font-size="9.5" fill="#1a1d21">Tops</text>
  <line x1="374" y1="112" x2="476" y2="112" stroke="#f0f2f4"/>
  <text x="380" y="128" font-size="9.5" fill="#1a1d21">New in</text>
  <text x="380" y="144" font-size="9.5" fill="#1a1d21">Sale</text>
  <line x1="374" y1="154" x2="476" y2="154" stroke="#f0f2f4"/>
  <text x="380" y="170" font-size="9.5" fill="#1a1d21">Size guide</text>
  <text x="380" y="186" font-size="9.5" fill="#1a1d21">Shipping</text>
  <text x="425" y="250" font-size="8.5" text-anchor="middle" fill="#6b7280">one tap reaches every link</text>
</svg>

</div>

1. `Copy embed item`をクリックして、このメニューアイテムテンプレートをコピーします。
2. 既存のSlide menuの`level 1`に貼り付けます——またはまだない場合は最初に1つを作成します。

マルチカラムレイアウトは自動的にフラット化されます。カラムが1つの垂直リストになり、カラムタイトルは削除され、別のカラムが使用されていた場所に区切り線が挿入されます——訪問者は2回ではなく1回のタップですべてのリンクに到達できます。

埋め込み後、カードは`This menu already shows on mobile`とSlide menuへのリンクを表示するので、いつでもチェックできます。

##### モバイルコピーを微調整する

- **デスクトップ専用アイテムを非表示にします。** Desktop Mega Menuのアイテムを開く → `Visibility` → `Exclude when embedded`をオンにします。デスクトップに留まり、モバイルコピーからのみ消えます。
- **モバイル専用アイテムを追加します。** Slide menuはリファレンスが持ち込むものに限定されません——デスクトップバーが必要としないもの用に、埋め込まれたものの横に通常のレベル1アイテムを追加します。通話/WhatsAppボタン、営業時間、言語切り替え、またはテーマのヘッダーやフッターに通常存在するリンクなどです。これらはSlide menuに直接存在し、デスクトップバージョンには一切触れません。
