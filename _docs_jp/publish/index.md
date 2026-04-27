---
description: Navi+ メニューをウェブサイトに公開する — 有効/無効の切り替え、埋め込み方法の選択、デバイス表示設定、URLによるフィルタリング。
layout: default
permalink: /jp/docs/publish/
title: 公開（Publish）
---
# 公開（Publish）

**Publish** セクションでは、ライブウェブサイトへのメニューの表示方法を管理します：メニューのオン/オフ切り替え、埋め込み方法の選択、デバイス表示設定、URLによるフィルタリング。これはデザイン後の最終ステップです — Publish 設定を保存しないと、メニューは表示されません。

---

## トピック

| # | トピック | |
|---|---|---|
| 1 | メニュータイプとデプロイ方法の概要 | [Publish Overview](/jp/docs/publish/publish-overview/) |
| 2 | Sticky / FAB — App Embeds（Shopify）または `<head>`（グローバル） | [Publish Sticky](/jp/docs/publish/publish-sticky/) |
| 3 | スライドメニュー — トリガーベースのアクティベーション | [Publish Slide](/jp/docs/publish/publish-slide/) |
| 4 | Section / Mega / Grid — Insert/Replace と App Block | [Publish Section](/jp/docs/publish/publish-section/) |
| 5 | デバイスと URL キーワードによるフィルタリング | [Publish Filter](/jp/docs/publish/publish-filter/) |
| 6 | 公開後のスピードと UX の最適化 | [Publish Optimize](/jp/docs/publish/publish-optimize/) |

---

## クイックリファレンス

```
メニュータイプ          主な方法
────────────────────────────────────────────────────
Sticky / TABBAR     App Embeds (Shopify) / <head> (Global) + 有効トグル
Sticky / FAB        App Embeds (Shopify) / <head> (Global) + 有効トグル
Slide (CONTEXT)     App Embeds / <head> + 有効トグル + トリガー設定
Section (Mega/Grid) Insert/Replace (CSS Selector) または App Block (Shopify)
```

**ルール：** 有効トグル = メニューはライブ状態。無効トグル = ウェブサイトから完全に非表示（埋め込みコードを削除する必要はありません）。
