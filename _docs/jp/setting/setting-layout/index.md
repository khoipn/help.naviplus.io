---
description: Navi+ でメニューの位置、パディング、マージン、Z インデックス、サブメニュー幅を設定する。
layout: default
permalink: /jp/docs/setting/setting-layout/
title: 設定レイアウト — 位置と間隔
---
# 設定レイアウト — 位置と間隔

メニュー全体の位置、重なり順、サブメニュー幅を制御します。

## メニューパディングとマージン

Margin Top／Right／Bottom／Left：メニューから画面端までの空間。
Padding Top／Right／Bottom／Left：メニューコンテナ内部の空間。

ユースケース：iOS ナビゲーションバーの上に Tabbar を押し上げる：Margin Bottom = 34。メガメニューの上部スペース：Margin Top = 8。

## Z インデックス

数値が大きいほど上に表示。スティッキーヘッダーにメニューが隠れる場合は増加。チャットウィジェットがメニューに隠れる場合は減少。
テーマヘッダー：1000–9999。チャットウィジェット：9999–99999。

## サブメニュー幅

Submenu Width（px）：単一カラムパネルの幅。デフォルト 360px。

## デスクトップ

ホバーでサブメニューを表示、Full-expand submenu width（px）、サブメニューの方向。

## マルチサイト（Elite）

カンマ区切りのドメインリスト 例：brand.com,shop.brand.com
