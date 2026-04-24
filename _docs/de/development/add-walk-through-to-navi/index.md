---
description: Sie müssen eine Bibliothek wie TourGuideJS verwenden, eine JavaScript-Bibliothek, die in Ihre Website eingebettet werden kann, um Schritt-für-Schritt-Anleitungen durch ein ...
lang: de
layout: default
permalink: /de/docs/development/add-walk-through-to-navi/
title: Fügen Sie eine Schritt-für-Schritt-Anleitung zu Navi+ hinzu
---
# Fügen Sie eine Schritt-für-Schritt-Anleitung zu Navi+ hinzu

Sie müssen eine Bibliothek wie TourGuideJS verwenden, eine JavaScript-Bibliothek, die in Ihre Website eingebettet werden kann, um Schritt-für-Schritt-Anleitungen durch ein Attributformat wie <div data-tg-tour="<span>Meine erste Tour</span>"> ... </div> hinzuzufügen. Es ist völlig kostenlos. Befolgen Sie die Anweisungen unten, um Anleitungen durch die Navi+ Menüs hinzuzufügen, entweder für das gesamte Menü oder für einzelne Menüpunkte.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgmsAKbB1RrFhKxGHHznd%2Fimage.png?alt=media&#x26;token=a24149db-b3ac-456b-810e-3ffb7e0213e4" alt=""><figcaption></figcaption></figure>

```
<!-- Navi+ Tour Guide-Bibliothek einfügen --->
<script src="https://unpkg.com/@sjmc11/tourguidejs/dist/tour.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://unpkg.com/@sjmc11/tourguidejs/dist/css/tour.min.css">
 
<script>
  setTimeout(function() {
      const tg = new tourguide.TourGuideClient();
      tg.start();        
  }, 2000);
</script>
<!-- Navi+ Tour Guide-Bibliothek einfügen --->
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FZd2WXeOFi673MXis8P5Z%2Fimage.png?alt=media&#x26;token=66b7d8c5-5ece-40ec-87f9-4ef6f33d23b8" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F4T8gzFPxbRyPUMVGOKJc%2Fimage.png?alt=media&#x26;token=cff87c3b-d6e9-4430-8c21-419b7da019f9" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTQ1AYMdEbDyFvme90s9Z%2Fimage.png?alt=media&#x26;token=363f644e-6acd-4112-ae32-9eb9c7a1a81f" alt=""><figcaption></figcaption></figure>


---

# Anweisungen für Agenten: Abfragen dieser Dokumentation

Wenn Sie zusätzliche Informationen benötigen, die auf dieser Seite nicht direkt verfügbar sind, können Sie die Dokumentation dynamisch abfragen, indem Sie eine Frage stellen.

Führen Sie eine HTTP GET-Anfrage an die aktuelle Seiten-URL mit dem `ask` Abfrageparameter aus:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/development/add-walk-through-to-navi+.md?ask=<Frage>
```

Die Frage sollte spezifisch, eigenständig und in natürlicher Sprache verfasst sein.
Die Antwort enthält eine direkte Antwort auf die Frage sowie relevante Auszüge und Quellen aus der Dokumentation.

Verwenden Sie diesen Mechanismus, wenn die Antwort nicht ausdrücklich auf der aktuellen Seite vorhanden ist, Sie eine Klärung oder zusätzlichen Kontext benötigen oder Sie verwandte Dokumentationsabschnitte abrufen möchten.
