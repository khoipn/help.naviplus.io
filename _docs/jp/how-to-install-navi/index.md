---
description: Shopifyまたは任意のウェブサイトにNavi+をインストールし、Navi+がメニューを展開する3つの方法—フローティング、ポジション、トリガー—を理解します。
lang: jp
layout: default
permalink: /jp/docs/how-to-install-navi/
title: Navi+のインストール
---
# Navi+のインストール

## ステップ1 — インストール

**Shopify:** [Shopify App Store](https://apps.shopify.com/pronavi-navigation-design)からインストールします。アプリはインストール後に自動的に開きます。

**他のプラットフォーム**（WordPress、WooCommerce、Wix、Webflow、Squarespace、または任意のウェブサイト）：
1. [dash.naviplus.app](https://dash.naviplus.app)で無料アカウントを作成します。
2. ウェブサイトのドメインを追加します。
3. 埋め込みスニペットをコピーします — これをステップ2で使用します。

---

## ステップ2 — メニューがどのように展開されるかを理解する

Navi+は、メニューの種類に応じて**3つの異なる展開方法**を使用します。これを事前に理解することで、セットアップ中の時間を節約できます。

### 1. フローティングメニュー — Tab Bar & FAB

Tab BarとFABは、ページの上に固定位置で浮かぶ**スティッキーメニュー**です。スクロールしても消えません。

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">📍</div>
    <strong>位置</strong><br>画面の上、下、左、または右の端
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔼</div>
    <strong>スクロール時に自動非表示</strong><br>下にスクロールすると隠れ、上にスクロールすると再表示されます
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">👇</div>
    <strong>下にスクロール時に表示</strong><br>デフォルトでは隠れており、ユーザーが下にスクロールしたときのみ表示されます — スクリーンスペースを節約します
  </div>
</div>

**一般的な使用例:** 他のフローティング要素 — WhatsApp、Crisp、Messenger、ライブチャットウィジェット — をNavi+メニューアイテムに統合します。これにより、スクリーンスペースが解放され、複数のフローティングアイコンが重なり合う混乱が解消されます。

### 2. ポジションメニュー — Mega Menu & Grid Menu

Mega MenuとGrid Menuは、ページの**特定の位置に配置する必要があります**。これを行う方法はいくつかあります：

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🎯</div>
    <strong>CSSセレクタ</strong><br>Navi+をページ上の任意の要素にポイントします。前に挿入、後に挿入、または完全に置き換えます — これがMega Menuがテーマの既存のナビゲーションを完全に置き換える方法です。
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🧩</div>
    <strong>Shopifyセクション</strong><br>テーマカスタマイザー内のアプリブロックを使用して、レイアウトの任意のセクションにメニューをドロップします — コードは不要です。
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🖥️</div>
    <strong>埋め込みコード</strong><br>メニューが表示される正確な場所にページのHTMLに短いスニペットを直接貼り付けます。
  </div>
</div>

> **CSSセレクタ**は、ウェブページ上の任意のポイントを特定する方法です — ブラウザが特定の要素をターゲットにする方法です。Navi+は、メニューを正確にどこに挿入するかを知るためにこれを使用します。自分でCSSを書く必要はありません; Navi+には、セレクタを見つけるためのビジュアルピッカーがあります。

### 3. トリガーメニュー — Slide Menu

Slide Menuは**自動的には表示されません**。何かがそれをトリガーするまで隠れています：

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">☰</div>
    <strong>既存の要素</strong><br>ユーザーがページ上の何かをクリックします — 例えば、テーマのハンバーガーアイコン
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">⚡</div>
    <strong>カスタムトリガー</strong><br>ページ上の任意の要素 — そのCSSセレクタによって指定されます
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔗</div>
    <strong>別のNavi+メニュー</strong><br>クリックするとSlide Menuが開くTab BarまたはFABアイテム
  </div>
</div>

これにより、Slide Menuは柔軟性があり、ページに新しい視覚的要素を追加することなく、既存のナビゲーションを置き換えることができます。

---

## ステップ3 — 最初のメニューを作成する

インストールが完了したら、ダッシュボードに移動して最初のメニューを作成します。→ [最初のメニュー（5分クイックスタート）](/docs/getting-started/your-first-menu/)
