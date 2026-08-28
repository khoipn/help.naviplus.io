---
description: "表示ルール（Visibility Rules）は、メニューとメニュー項目に適用されます。デバイス、カート内容、スケジュール、市場、顧客タグ、B2B顧客に基づいて表示/非表示を制御します。"
lang: jp
layout: default
permalink: /jp/docs/development/setup-visibility-rule/
title: 表示ルールの設定
---
# 表示ルールの設定

表示ルール（Visibility Rules）は、特定の訪問者に対してメニューまたはメニュー項目を表示するかどうかを決定する条件セットです。デバイス、カート内容、スケジュール、市場、顧客タグ、またはB2B顧客に基づいて制御され、両方のレベルに対して正確に1つのルールセットが適用されます。

---

## どこで設定するか

- **メニュー項目レベル**: **Edit item** を開く → **Visibility** グループ → **Setup the Visibility rules** をクリック。 *(Visibility グループは折りたたまれたブロック内にあります。すぐに見当たらない場合は、**See more** をクリックして展開してください。)*
- **メニューレベル**: メニューの **Setting** パネルを開く → **Visibility Rules** カード。
- **メニュー一覧からのショートカット**: メニュー一覧ページの **Visibility Rules** 列に各メニューの **No rule** または **Setup** が表示されます — **Setup** をクリックすると、そのメニューの Visibility Rules カードに直接移動します。
- **メニューツリーからのショートカット**: 常に表示されるわけではない項目には、ツリー内の名前の横に目のアイコンが表示されます — ホバーすると有効な条件の概要が表示され、クリックするとその項目の Visibility Rules が直接開きます。

以下では、すべての条件、構文、および組み合わせ方が両方のレベルで **共有** されます。異なるのは場所だけです。

> Market / Customer tag / B2B は **Shopify** にのみ適用され、現在はテキスト入力フィールド（プリセットドロップダウンなし）です。各フィールドには **"View your Markets"** / **"Manage customer tags"** / **"Manage B2B companies"** リンクがあり、入力前に正確な値を確認するために対応する Shopify Admin ページに直接移動できます。

---

## サポートされている条件

| 条件 | プラン | 表示される条件 | 入力値 |
|---|---|---|---|
| **Device** | Business 以上 | 選択されたデバイスに一致 | `All devices` / `Mobile only` / `Desktop only` |
| **Page / URL** | Business 以上 | 正しいページタイプ、または URL がキーワードを含む/含まない | ページタイプをチェック（Home/Products/Collections/Pages/Blogs/Others）+ 2 つのキーワードフィールド |
| **Cart contents** | Business 以上 | カートに N 個以上の商品がある（または「下回ったら非表示」を有効にした場合は N 未満） | 整数、例 `1` |
| **Schedule** | Business 以上 | 設定した日付＋時刻の範囲内 | 開始 → 終了の日時を **UTC** で入力（入力前にローカル時間から変換）、訪問者のデバイス時計と比較 |
| **Market / Country** | Elite | 選択された市場の下で訪問者が閲覧している | 市場ハンドル、複数の値はコンマ区切り: `us, ca` |
| **Customer tag** | Elite | ログインした訪問者がタグを持っている | 単一のタグ、例 `vip` |
| **B2B customer** | Elite | ログインした訪問者が B2B アカウントを使用している | オン/オフ切り替え |

---

## 条件の組み合わせ方

有効なすべての条件が **すべて一致** する必要があります。メニュー/項目が表示されるには、1 つの条件が失敗するだけで直ちに非表示になります。空の条件はスキップされ、カウントされません。

例えば、Device = Mobile only **および** Schedule = 01/09–15/09 の両方を有効にする場合、モバイルデバイスの訪問者にのみ表示され、**かつ** その正確な 2 週間中のみ表示されます。

<div align="center">

<svg viewBox="0 0 680 300" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="vrArrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#1a7a4f"/>
    </marker>
    <marker id="vrArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="150" y="10" width="180" height="30" rx="15" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="30" font-size="12.5" text-anchor="middle" fill="#1a1d21">訪問者がページに到達</text>

  <line x1="240" y1="40" x2="240" y2="58" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="60" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="86" font-size="12.5" text-anchor="middle" fill="#1a1d21">Device — 選択されたデバイスに一致?</text>

  <line x1="240" y1="104" x2="240" y2="122" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="124" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="150" font-size="12.5" text-anchor="middle" fill="#1a1d21">Page/URL, Cart, Schedule — 条件を満たす?</text>

  <line x1="240" y1="168" x2="240" y2="186" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="188" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="214" font-size="12.5" text-anchor="middle" fill="#1a1d21">Market, Tag, B2B (Elite プラン) — この訪問者に一致?</text>

  <line x1="240" y1="232" x2="240" y2="250" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="150" y="252" width="180" height="34" rx="17" fill="#1a7a4f"/>
  <text x="240" y="274" font-size="13" font-weight="600" text-anchor="middle" fill="#fff">表示</text>

  <rect x="470" y="55" width="160" height="182" rx="10" fill="#fef2f2" stroke="#fecaca"/>
  <text x="550" y="140" font-size="16" font-weight="700" text-anchor="middle" fill="#b91c1c">非表示</text>
  <text x="550" y="158" font-size="11" text-anchor="middle" fill="#b91c1c">直ちに</text>

  <line x1="420" y1="82" x2="470" y2="82" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="76" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="146" x2="470" y2="146" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="140" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="210" x2="470" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="204" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>
</svg>

</div>

*有効な条件が 1 つ失敗する（右側の分岐 ✗）と、メニュー/項目が直ちに非表示になります。他の条件に合格しているかどうかに関係なく。空の条件（有効ではない）はスキップされ、無視されます。*

---

## 5 つの実例

### 1. 卸売と小売を同時に実施し、卸売価格を小売客から隠す（メニューレベル）

ストアは卸売と小売の両方を販売しています。卸売客（Shopify が承認した B2B アカウント）はより良い価格で購入でき、独自の製品/コレクショングループを持っています。「卸売価格」、「迅速な卸売注文」、「卸売製品」のメニューグループが必要で、卸売客のみに表示されるようにしたいです。小売客は（価格の混乱を避けるため）このメニューを見えないようにしたいです。

**方法:** 卸売リンクを含む別のメニュー（またはメニューグループ）を作成します。**Setting → Visibility Rules** に移動し、**B2B customer** を有効にします。結果：このメニュー全体は、ログインしている B2B アカウントユーザーにのみ表示されます。小売客（ログイン中でも）は閲覧中にこのメニューを見ることはありません。

### 2. 期間限定のプロモーションバナー、ショッピング中のみ表示（項目レベル）

「50€ 以上のご注文で送料無料」というバナーを販売期間中のみ、かつカートに少なくとも 1 つの製品を追加した顧客にのみ表示したいです（新規訪問者の着陸時の気を散らすのを避けるため）。

**方法:** バナー項目で **Setup the Visibility rules** をクリック → **Cart contents** = `1` を有効にし、**Schedule** = 販売開始/終了日を設定します。

### 3. VIP 顧客向け排他的オファーリンク（項目レベル）

VIP でタグ付けされた顧客にのみ表示される「VIP 特典」というメニュー項目が欲しいです。一般顧客はそれが存在することすら知りません。

**方法:** Shopify Flow/Customer Segment 経由で VIP 顧客グループにタグを付けます（Segment → Flow "Customer enters segment" → タグを適用）。項目で **Setup the Visibility rules** をクリック → **Customer tag** = `vip` を有効にします。

### 4. VIP 顧客向けプレミアム Tab Bar（メニューレベル）

VIP 顧客に異なるナビゲーション体験を提供したいです。ダークバックグラウンド、グロウエフェクト、プレミアムな雰囲気です。他のすべての顧客と標準インターフェースを共有する代わりに。

**方法:** プレミアムなダークテンプレートを使用した別の Tab Bar を作成し、ストアがデフォルトで使用する同じ Tab Bar 位置に公開します。**Setting → Visibility Rules** に移動し、**Customer tag** = `vip` を有効にします（例 3 のように Shopify Flow/Customer Segment 経由でタグを付けます）。結果：VIP タグの付いた顧客はプレミアム Tab Bar を見ます。一般顧客は依然として標準 Tab Bar を見ます。*(Mobile Menu は同じアプローチを使用します。)*

### 5. FAB は顧客が最初の項目を追加する直後にアップセルを促す（メニューレベル）

顧客は初めて製品をカートに追加しました。決定的な瞬間です。プロモーション情報を含むフローティングボタン（FAB）を表示したいです（「さらに購入して送料無料をアンロック」、無料ギフト など）。チェックアウトに向けてより早く進むように促します。FAB がいつも表示されて最初から見た目を乱すのではなく。

**方法:** プロモーションコンテンツを含む FAB（Floating Button）を作成します。**Setting → Visibility Rules** に移動し、**Cart contents** = `1` を有効にします（カートに 1+ の製品がある場合のみ表示）。結果：顧客がカートに最初の製品を追加するまで、FAB は非表示のままです。*注：条件はカート内の製品の数のみをチェックし、注文値はチェックしません。「50€+ は送料無料をアンロック」はマーケティング用テキストで、FAB 内に自分で記入するものです。価格で計算する Visibility Rule ではありません。*

---
