---
description: Navi+ メニューを表示するページとデバイスを制御する — デバイストグル、URL キーワード、Shopify ページタイプ。
layout: default
permalink: /jp/docs/setting/setting-display-rules/
title: 設定表示ルール — 条件付き可視性
---
# 設定表示ルール — 条件付き可視性

## デバイスによる表示（Publish タブ）

モバイルトグル + デスクトップトグル。デフォルト：モバイルのみオン。デスクトップは手動で有効化。

## URL キーワードルール

Contain Keyword：URL にキーワードが含まれる場合のみメニューを表示。例：「collections, products/sale」
Don't Contain Keyword：URL にキーワードが含まれる場合はメニューを非表示。例：「checkout, account/login」

## Shopify ページタイプ

Home、Product Detail、Product Categories、Pages、Blogs、Others。チェックを外すとそのタイプで非表示。

## ルールの順序

1. デバイス有効？ いいえ：非表示。
2. ページタイプにチェック？ いいえ：非表示。
3. URL が非表示条件と一致？ はい：非表示。
4. URL が表示限定条件と一致？ いいえ：非表示。
5. メニューを表示。
