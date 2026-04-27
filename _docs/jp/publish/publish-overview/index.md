---
description: Navi+ メニュータイプと対応するデプロイ方法の概要 — Sticky、Slide、Section メニュー。
layout: default
permalink: /jp/docs/publish/publish-overview/
title: Publish Overview — メニュータイプとデプロイ方法
---
# Publish Overview — メニュータイプとデプロイ方法

Navi+ メニューはメニュータイプ（`menu_kind`）によって自動的に決定される 3 つのデプロイグループに分類されます：

| グループ | メニュータイプ | 方法 |
|---|---|---|
| **Sticky** | Tabbar、Mobile Header、FAB | App Embeds（Shopify）または `<head>` コード（グローバル）→ 有効トグル |
| **Slide** | Context Slide | App Embeds / `<head>` → 有効トグル → トリガー設定 |
| **Section** | Mobile Mega Menu、Mobile Grid、Desktop Mega Menu | Insert/Replace（CSS Selector）および/または App Block（Shopify） |

---

## 2 つの市場：Shopify vs. グローバル

| ステップ | Shopify | グローバル（WordPress、Wix...） |
|---|---|---|
| 埋め込みコード | **App Embeds**（Theme Editor）で有効化 — コードの貼り付け不要 | `<script>` をウェブサイトの `<head>` に貼り付け |
| トークン | 不要 — Shopify OAuth が処理 | 必要 — スクリプト内の `token: "NAVI123456"` |
| App Block | 利用可能（Shopify のみ）— Section メニューのメソッド 2 | 利用不可 |

---

## 一般的なフロー

```
1. メニューをデザイン（Design + Setting）
        ↓
2. Publish モーダルを開く
        ↓
3. 埋め込みコードをウェブサイトに追加（一度のみ）
   - Shopify: Theme Editor の App Embeds
   - グローバル: <script> を <head> に貼り付け
        ↓
4. "Publish this menu" トグルを有効化
        ↓
5. （オプション）デバイス、ページ表示、URL フィルターを設定
        ↓
6. 保存 → メニューがライブ状態に
```

> ステップ 3（コードの埋め込み）は**ウェブサイトごとに一度**だけ行う必要があります。その後のメニューはステップ 4 以降のみ必要です。
