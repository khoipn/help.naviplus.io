---
description: WordPress.org ディレクトリ、ZIP アップロード、FTP、または WP-CLI から、あなたの WordPress または WooCommerce サイトに Navi+ メニュービルダープラグインをインストールします。
lang: jp
layout: default
permalink: /jp/docs/integrations/wordpress-woocommerce/install-plugin/
title: Navi+ メニュービルダープラグインのインストール
---
# Navi+ メニュービルダープラグインのインストール

> プラグインの正式名称は WordPress.org で **Naviplus Menu Builder** です。このドキュメントの残りの部分では **Navi+ AI Menu Builder** (または単に **Navi+**) と呼ばれています。

プラグインは公式の WordPress.org プラグインディレクトリに公開されているため、他の WordPress プラグインと同じ方法でインストールされます — 第三者からの ZIP は不要で、ライセンスキーも必要ありません。

> ディレクトリ: <https://wordpress.org/plugins/naviplus-menu-builder/>

---

## オプション A — WordPress 管理画面からインストール (推奨)

1. あなたの WordPress 管理画面にログインします (`/wp-admin/`)。
2. **プラグイン → 新規追加** に移動します。
3. **Naviplus Menu Builder** (または単に **Navi+**) を検索します。
4. **今すぐインストール** をクリックし、その後 **有効化** をクリックします。

有効化後、プラグインは管理サイドバーの **外観 → Naviplus Menu Builder** の下で利用可能になります。

---

## オプション B — ZIP をアップロード

ホストがディレクトリからのインストールをブロックしている場合は、これを使用します。

1. [WordPress.org プラグインページ](https://wordpress.org/plugins/naviplus-menu-builder/) で **ダウンロード** をクリックして `.zip` ファイルを取得します。
2. 管理画面で **プラグイン → 新規追加 → プラグインのアップロード** に移動します。
3. ZIP を選択し、**今すぐインストール** をクリックし、その後 **プラグインを有効化** をクリックします。

---

## オプション C — FTP / ファイルマネージャー

1. プラグイン ZIP を解凍します。アーカイブ内のルートフォルダは `naviplus-menu-builder/` です。
2. そのフォルダをサーバーの `wp-content/plugins/` にアップロードします。
3. **プラグイン → インストール済みプラグイン** で **Naviplus Menu Builder** の **有効化** をクリックします。

---

## オプション D — WP-CLI

```bash
wp plugin install naviplus-menu-builder --activate
```

---

## 要件

- WordPress **5.8** 以上 — ホストがサポートする最新の安定版 WordPress を使用することを推奨します。
- 管理者権限 — プラグインをインストールし、**外観** を編集するために必要です。

---

## 有効化後

プラグインはインストールされていますが、まだ何もレンダリングされていません — これは、エディタで最初のメニューを作成した後に発生し、その時点でプラグインがあなたのサイトを Navi+ に自動接続します。

**[最初のメニューを作成する]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)** を続けてください。
