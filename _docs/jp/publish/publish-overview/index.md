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

## 2つのマーケット: Shopify vs. グローバル

| ステップ | Shopify | グローバル（WordPress, Squarespace, Webflow...） |
|---|---|---|
| 埋め込みコード | **App Embeds**（テーマエディタ）で有効にする — コードの貼り付けは不要 | ウェブサイトの `<head>` に `<script>` を貼り付ける |
| トークン | 不要 — Shopify OAuth が処理 | 必要 — スクリプト内の `token: "NAVI123456"`  |
| App Block | 利用可能（Shopify のみ）— セクションメニュー用方法 2 | 利用不可 |

> **Wix:** Wix アプリマーケットから Navi+ アプリをインストールした場合、埋め込みは自動 — Navi+ は Wix Embedded Script 経由で `start.js` を自動的に挿入するため、**コードを貼り付ける必要がありません**。認証と請求は Wix で処理されます。自己管理プラットフォーム（WordPress、Squarespace、Webflow、Magento、カスタムサイト）のみが上記の手動 `<script>` 貼り付けを必要とします。

---

## 一般的なフロー

```
1. メニューを設計（デザイン + 設定）
        ↓
2. 公開モーダルを開く
        ↓
3. ウェブサイトにコードを埋め込む（1 回のみ）
   - Shopify: テーマエディタの App Embeds
   - グローバル: <head> に <script> を貼り付ける
        ↓
4. 「このメニューを公開」トグルを有効にする
        ↓
5. （オプション）デバイス、ページ表示、URL フィルタを設定
        ↓
6. 保存 → メニューがライブになる
```

> ステップ 3（コード埋め込み）は **ウェブサイトごとに 1 回だけ** 実施が必要です。以降のメニューはステップ 4 以降のみです。
