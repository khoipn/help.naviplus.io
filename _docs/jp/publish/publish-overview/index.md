---
description: Navi+メニュータイプとそれに対応する展開方法の概要 — スティッキー、スライド、セクションメニュー。
lang: jp
layout: default
permalink: /jp/docs/publish/publish-overview/
title: 公開概要 — メニュータイプと展開方法
---
# 公開概要 — メニュータイプと展開方法

Navi+メニューは、メニュータイプ（`menu_kind`）によって自動的に決定される3つの展開グループに分かれています：

| グループ | メニュータイプ | 方法 |
|---|---|---|
| **スティッキー** | Tabbar, Mobile Header, FAB | アプリ埋め込み（Shopify）または `<head>` コード（グローバル）→ トグルを有効にする |
| **スライド** | コンテキストスライド | アプリ埋め込み / `<head>` → トグルを有効にする → トリガーを設定 |
| **セクション** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | 挿入/置換（CSSセレクタ）および/またはアプリブロック（Shopify） |

---

## 2つの市場：Shopify vs. グローバル

| ステップ | Shopify | グローバル（WordPress, Wix...） |
|---|---|---|
| 埋め込みコード | **アプリ埋め込み**（テーマエディタ）で有効にする — コードの貼り付けは不要 | ウェブサイトの `<head>` に `<script>` を貼り付け |
| トークン | 不要 — Shopify OAuthが処理します | 必要 — スクリプト内の `token:
