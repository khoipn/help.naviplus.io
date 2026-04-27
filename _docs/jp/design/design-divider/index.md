---
description: Navi+ メニューのデフォルト区切り線スタイルを設定する — 色、太さ、タイプ、幅。
layout: default
permalink: /jp/docs/design/design-divider/
title: デザイン区切り — 区切り線
---
# デザイン区切り — 区切り線

デザイン → 区切りの設定はすべての区切りのデフォルト外観を定義します。

メニューレベルのスタイル — 個別の項目は編集項目 → 基本情報 → Add Divider でオーバーライドできます。

## フィールド

| フィールド | 説明 | デフォルト |
|---|---|---|
| Divider Color | 線の色（hex） | #EEEEEE |
| Divider Size (px) | 線の太さ | 1px |
| Divider Type | Solid / Dashed / Dotted / Double | Solid |
| Divider Width | Full / Inset / Under text | Full |

Divider Type と Divider Width は Business または Elite プランが必要です。

## 仕組み

1. 項目で Add Divider が有効な場合のデフォルト。
2. 項目ごとのスタイルがこれをオーバーライドします。
3. Divider Color が空の場合、レベル 2-3 が継承します。

## Divider Width

Full = 項目の全幅。Inset = 両側にインデント。Under text = テキストの下のみ。
