---
description: TourGuideJSのようなライブラリを使用する必要があります。これは、ウェブサイトに埋め込むことができるJavaScriptライブラリで、ステップバイステップのウォークスルーガイドを追加します...
lang: jp
layout: default
permalink: /jp/docs/development/add-walk-through-to-navi/
title: Navi+にウォークスルーを追加
---
# Navi+にウォークスルーを追加

TourGuideJSのようなライブラリを使用する必要があります。これは、ウェブサイトに埋め込むことができるJavaScriptライブラリで、属性形式を通じてステップバイステップのウォークスルーガイドを追加します。例えば、<div data-tg-tour="<span>My first tour</span>"> ... </div>。完全に無料です。以下の指示に従って、Navi+メニュー全体または個々のメニュー項目にウォークスルーを追加してください。

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgmsAKbB1RrFhKxGHHznd%2Fimage.png?alt=media&#x26;token=a24149db-b3ac-456b-810e-3ffb7e0213e4" alt=""><figcaption></figcaption></figure>

```
<!-- Navi+にツアーガイドライブラリを挿入 --->
<script src="https://unpkg.com/@sjmc11/tourguidejs/dist/tour.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://unpkg.com/@sjmc11/tourguidejs/dist/css/tour.min.css">
 
<script>
  setTimeout(function() {
      const tg = new tourguide.TourGuideClient();
      tg.start();        
  }, 2000);
</script>
<!-- Navi+にツアーガイドライブラリを挿入 --->
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FZd2WXeOFi673MXis8P5Z%2Fimage.png?alt=media&#x26;token=66b7d8c5-5ece-40ec-87f9-4ef6f33d23b8" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F4T8gzFPxbRyPUMVGOKJc%2Fimage.png?alt=media&#x26;token=cff87c3b-d6e9-4430-8c21-419b7da019f9" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTQ1AYMdEbDyFvme90s9Z%2Fimage.png?alt=media&#x26;token=363f644e-6acd-4112-ae32-9eb9c7a1a81f" alt=""><figcaption></figcaption></figure>


---

# エージェントの指示: このドキュメントを照会する

このページに直接利用可能でない追加情報が必要な場合は、質問をしてドキュメントを動的に照会できます。

現在のページURLに対してHTTP GETリクエストを実行し、`ask`クエリパラメータを追加します:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/development/add-walk-through-to-navi+.md?ask=<question>
```

質問は具体的で、自己完結しており、自然言語で書かれている必要があります。
回答には、質問への直接的な回答と、ドキュメントからの関連する抜粋や情報源が含まれます。

このメカニズムは、現在のページに明示的に存在しない回答が必要な場合、明確化や追加の文脈が必要な場合、または関連するドキュメントセクションを取得したい場合に使用してください。
