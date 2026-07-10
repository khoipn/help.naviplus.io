---
description: Navi+ Tab Bar を Wix で公開します。Navi+ は Wix App Market のネイティブアプリです — インストールして Tab Bar を公開すると、サイト全体に自動的に表示されます。コード不要、埋め込みコードなし。
lang: jp
layout: default
permalink: /jp/docs/usage/tabbar-bottom-navigation/publishing-on-wix/
title: Wix で公開
---
# Wix で公開

> 💡 Wix での Navi+ が初めてですか？ naviplus.io の [Wix での Navi+ の概要](https://naviplus.io/jp/blogs/compare/topic/naviplus-on-wix/) をご覧ください。

Navi+ は Wix App Market の**ネイティブアプリ**として Wix で動作します。**Tab Bar** は**固定**メニュー — ビューポートに固定され（モバイルでは通常下部）、訪問者がスクロールしても常に表示されます。Wix では、Navi+ をインストールして Tab Bar を公開すると、**サイト全体に自動的に表示されます** — コードを貼り付ける必要はなく、カスタムコードステップもありません。

> 他のプラットフォーム: [Shopify で公開]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publishing-on-shopify/)、[WordPress で公開]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/)、または [Squarespace / Webflow / その他]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/)をご覧ください。

---

## ステップ

1. **[Wix App Market](https://www.wix.com/app-market) から Navi+ をインストール** — Wix ダッシュボード内で開き、サイトに既に接続されています。Wix が認証を処理するため、API キーを設定する必要はありません。
2. **Tab Bar を構築** — **Tab Bar** レイアウトを選択し、3～5 個のメイン宛先を追加します。デザインのヒントについては、[Tab Bar — 使い方]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/)をご覧ください。
3. **メニューを公開** （ステータス: 公開、下書きではない）。

以上です。Navi+ は Wix の Embedded Script 経由で Wix ライブサイトに自動的に埋め込まれ、Tab Bar がすべてのページに即座に表示されます — スニペット不要、テーマ編集不要。

---

## Tab Bar を特定のページに制限する

Navi+ エディター内で Tab Bar のスコープを指定 — アプリの削除を試さないでください:

- **Display rules → URL pattern** — グロブにマッチする URL にのみ Tab Bar を表示（例: `/shop/*`）。
- **Display rules → Device** — モバイルのみに制限。
- **Display rules → Visitor state** — ログイン済みユーザーのみに制限など。

ルールはブラウザで評価されるため、変更は次のページ読み込み時に適用されます。

---

## 請求

Wix 上の Navi+ は **Wix** 経由で請求されます — 無料ティアプラス **Starter、Business、Elite** プラン、Wix サブスクリプションと合わせて請求されます。アプリ内の価格画面からアップグレードしてください。

---

## 関連

- [Tab Bar — 使い方]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/)
- [Navi+ をインストール]({{ site.baseurl }}/docs/how-to-install-navi/)
