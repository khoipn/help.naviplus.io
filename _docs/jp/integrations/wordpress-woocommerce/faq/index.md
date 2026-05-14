---
description: Navi+ メニュービルダー WordPress プラグインに関するよくある質問 — 価格、パフォーマンス、WooCommerce、マルチサイト、ページビルダー、キャッシング、プライバシー、アンインストール。
lang: jp
layout: default
permalink: /jp/docs/integrations/wordpress-woocommerce/faq/
title: Navi+ メニュービルダー FAQ
---
# Navi+ メニュービルダー FAQ

<details>
<summary>このプラグインは無料ですか？</summary>
<p>はい。このプラグイン自体は WordPress.org で無料です。あなたの Navi+ サブスクリプション (Starter / Business / Elite) が、どのメニュータイプとクォータが利用可能かを決定します。<a href="{{ site.baseurl }}/docs/frequently-asked-questions/navi-plans-starter-business-and-elite/">プランと価格</a>を参照してください。</p>
</details>

<details>
<summary>インストールする前に Navi+ アカウントが必要ですか？</summary>
<p>いいえ。<strong>外観 → Naviplus メニュービルダー</strong> で最初のメニューを保存すると、プラグインが自動的にあなたのサイトを Navi+ サービスに接続します — 別途サインアップやトークンを貼り付ける必要はありません。</p>
</details>

<details>
<summary>このプラグインは私のサイトを遅くしますか？</summary>
<p>測定可能な影響はありません。このプラグインは、Navi+ ランタイム (~4&nbsp;KB) を Cloudflare/BunnyCDN から読み込むために、<code>&lt;script async&gt;</code> タグを <code>&lt;head&gt;</code> に追加するだけです。ランタイムは完全に非同期で、ページのレンダリングをブロックしません。典型的な初回読み込みのオーバーヘッドは 100–200&nbsp;ms であり、以降の読み込みは HTTP キャッシングにより 0&nbsp;ms です。</p>
</details>

<details>
<summary>WooCommerce で動作しますか？</summary>
<p>はい。WooCommerce ページは標準の WordPress ページであるため、メニューは追加の設定なしでショップ、商品、カート、チェックアウトページに表示されます。エディタ内の表示ルールを使用して (URL に <code>/cart</code>、<code>/checkout</code> などが含まれる) メニューの表示場所を制御します。</p>
</details>

<details>
<summary>WordPress マルチサイトで動作しますか？</summary>
<p>はい。サイトごとにプラグインを有効化し (ネットワーク有効化もサポートされています)、各サイトのメニューをそのサイトの <strong>外観 → Naviplus メニュービルダー</strong> から設定します。各サイトは、最初のメニューが保存されると独立して Navi+ に自動接続されます。</p>
</details>

<details>
<summary>私のテーマやページビルダー (Elementor、Divi、Bricks、Oxygen) と競合しますか？</summary>
<p>既知の競合はありません。メニューはそれぞれのコンテナにレンダリングされ、孤立したスタイルを使用します。ページビルダー内にセクションメニューを挿入するには、<code>[naviwp embed_id="SF-..."]</code> を使用した<strong>ショートコード</strong>ウィジェットを使用するか、埋め込み div を使用した<strong>HTML</strong>ウィジェットを使用します。</p>
</details>

<details>
<summary>プラグインと一般的なスクリプト埋め込みを同時に使用できますか？</summary>
<p>いいえ — どちらかを選んでください。プラグインはすでに Navi+ ランタイムを注入しているため、手動のスクリプトタグを追加すると二重に読み込まれます。以前にテーマ内やヘッダーインジェクターを介してスクリプトを埋め込んでいた場合は、プラグインを有効化する前にそのスニペットを削除してください。</p>
</details>

<details>
<summary>メニューを更新したが、サイトに変更が表示されません。</summary>
<p>メニューはランタイムで取得されるため、WordPress キャッシュのフラッシュは必要ありません。変更がまだ表示されない場合は、ブラウザキャッシュをバイパスするためにハードリロード (Cmd/Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;R) を行ってください。スティッキーメニューの場合、メニューが<strong>公開</strong> (ドラフトではない) に設定されていることと、その表示ルールがページに一致していることを確認してください。</p>
</details>

<details>
<summary>すべての Navi+ メニューを一時的に非表示にするにはどうすればよいですか？</summary>
<p>2つのオプションがあります：</p>
<ul>
<li><strong>サイト全体：</strong>プラグイン管理画面で "Inject site-wide" スイッチをオフにします — ランタイムは <code>[naviwp]</code> ショートコード/ブロックがあるページを除いて読み込まなくなります。</li>
<li><strong>メニューごと：</strong>エディタでメニューを<strong>ドラフト</strong>に切り替えます。</li>
</ul>
</details>

<details>
<summary>プラグインをアンインストールするにはどうすればよいですか？</summary>
<p><strong>プラグイン → インストール済みプラグイン</strong> から無効化して削除します。このプラグインは、サイト識別子といくつかのオプションを <code>wp_options</code> にのみ保存します。アンインストールすると、それらは自動的に削除されます。Navi+ サービス上のメニューは保持されます — 後で再インストールすると、同じ埋め込み ID を引き続き使用できます。</p>
</details>

<h2 id="privacy">プライバシー &amp; 外部サービス</h2>

<p>このプラグインは、メニューを作成およびレンダリングするために Navi+ メニュービルダーサービスに接続します。交換されるデータには、あなたの<strong>サイトドメイン</strong>、あなたの<strong>メニュー設定</strong>、およびメニューをレンダリングするために必要な最小限の使用データが含まれる場合があります。</p>

<ul>
<li>プライバシーポリシー: <a href="https://naviplus.io/privacy">https://naviplus.io/privacy</a></li>
<li>スクリプトローダー: <code>https://live.naviplus.app/start.js</code></li>
</ul>

<details>
<summary>バグを報告したり、機能をリクエストするにはどうすればよいですか？</summary>
<p>公式サポートフォーラムを使用してください: <a href="https://wordpress.org/support/plugin/naviplus-menu-builder/">https://wordpress.org/support/plugin/naviplus-menu-builder/</a>。アカウントや請求に関する質問は、<a href="mailto:support@naviplus.io">support@naviplus.io</a> にメールしてください。</p>
</details>
