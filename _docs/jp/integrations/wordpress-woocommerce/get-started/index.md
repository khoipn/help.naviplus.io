---
description: Navi+ メニュービルダープラグインを有効にした後、外観 → Naviplus メニュービルダーを開き、ビジュアルエディターで最初のメニューを作成し、プラグインがあなたの WordPress サイトを Navi+ に自動接続させます。
lang: jp
layout: default
permalink: /jp/docs/integrations/wordpress-woocommerce/get-started/
title: 最初のメニューを作成する
---
# 最初のメニューを作成する

プラグインが有効化されると、WordPress 内でメニューを構築します — 別途サインアップする必要もなく、トークンを貼り付ける必要もありません。

---

## 1. メニュービルダーを開く

WordPress 管理画面で、次に進みます:

> **外観 → Naviplus メニュービルダー**

これにより、あなたの WordPress ダッシュボード内に Navi+ ビジュアルエディターが開きます。

---

## 2. 最初のメニューを作成する

画面のフローに従ってメニューを作成します。最初のメニューを保存すると、プラグインがあなたのサイトを **自動接続** します:

- Navi+ サービスがあなたの WordPress インストールを認識できるようにする **サイト識別子** を登録します。
- その識別子を WordPress に保存し、以降のメニュー変更が正しいサイトにルーティングされるようにします。

> サイト識別子は **あなたの WordPress パスワードではなく**、管理する必要のある Navi+ トークンでもありません。それはプラグインがあなたのために処理する不透明な値です。

プラグインをインストールする前に Navi+ アカウントを作成する必要はありません — 最初のメニューの保存が接続を処理します。

---

## 3. レイアウトをデザインする

エディター内で、メニュータイプ (Tab Bar, Slide / hamburger, Mega Menu, Grid, FAB) を選択し、レイアウトをデザインします。エディタードキュメント:

- [メニュータイプの概要]({{ site.baseurl }}/docs/usage/explore-common-menus/)
- [メニューアイテム — アイテム、リンク、アイコン、バッジ]({{ site.baseurl }}/docs/menu-items/item-overview/)
- [デザインの概要]({{ site.baseurl }}/docs/design/design-overview/)

メニューの構造とスタイルは Navi+ サービスに保存され、WordPress はサイト識別子のみを保存します。

---

## 4. 接続を確認する

サイトのフロントエンドを開きます。エディターで **公開** とマークした固定メニュー (Tab Bar, FAB) は、サイト全体に自動的に表示されます。

ランタイムが読み込まれていることを確認するには、次のいずれかを使用します:

- **デバッグモード (全員):** 任意の URL に `#navidebug-on` を追加します — 例: `https://your-site.com/#navidebug-on`。プラグインが接続されている場合、ページは Navi+ デバッグモードに切り替わります。 `#navidebug-off` を使用してオフにします。
- **コンソール (開発者):** DevTools → コンソールを開きます; 緑の `Using Navi+..` メッセージが表示されるはずです。

---

## 次のステップ

特定のページに配置された Mega Menu と Grid Menu については、**[メニューを公開する]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)** を参照し、`[naviwp]` ショートコードと Gutenberg ブロックを確認してください。
