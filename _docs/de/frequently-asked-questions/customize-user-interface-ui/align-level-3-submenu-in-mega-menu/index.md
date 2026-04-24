---
description: Einige Mega-Menüs können sehr hoch sein. In diesem Fall lässt das Erweitern eines Level 3 Menüs möglicherweise nicht genug Platz. Wenn dies passiert, sollten Sie das Level 3 Menü stattdessen oben anheften.
lang: de
layout: default
permalink: /de/docs/frequently-asked-questions/customize-user-interface-ui/align-level-3-submenu-in-mega-menu/
title: Level 3 Untermenü im Mega-Menü ausrichten?
---
# Level 3 Untermenü im Mega-Menü ausrichten?

Einige Mega-Menüs können sehr hoch sein. In diesem Fall lässt das Erweitern eines Level 3 Menüs möglicherweise nicht genug Platz. Wenn dies passiert, sollten Sie das Level 3 Menü stattdessen oben anheften.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fro68elhDmY0dYZVM33lW%2F1.1.png?alt=media&#x26;token=f8dc87a7-e10d-4ac7-a398-a4b5220ce72c" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FX4M1o8bgaNDF6VYTtini%2F1.2.png?alt=media&#x26;token=e2d65a92-418c-4c4a-bff7-51a5b9044d41" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F2tyR71IfHrMmPmZN0Ewi%2F1.3.png?alt=media&#x26;token=cdd6854c-2782-40ec-a959-a74d576eb177" alt=""><figcaption></figcaption></figure>

Fügen Sie es in das interne Stylesheet / CSS-Feld ein:

```
ul.children[menulevel="2"] li.child.is-parent.menu-expand {
  position: initial;
}

ul.children[menulevel="2"] li.child.is-parent.menu-expand ul.children[menulevel="3"]{
  top: 0px;
}
```

---

# Agentenanweisungen: Abfragen dieser Dokumentation

Wenn Sie zusätzliche Informationen benötigen, die auf dieser Seite nicht direkt verfügbar sind, können Sie die Dokumentation dynamisch abfragen, indem Sie eine Frage stellen.

Führen Sie eine HTTP GET-Anfrage an die aktuelle Seiten-URL mit dem `ask` Abfrageparameter aus:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/customize-user-interface-ui/align-level-3-submenu-in-mega-menu.md?ask=<question>
```

Die Frage sollte spezifisch, eigenständig und in natürlicher Sprache verfasst sein.
Die Antwort enthält eine direkte Antwort auf die Frage sowie relevante Auszüge und Quellen aus der Dokumentation.

Verwenden Sie diesen Mechanismus, wenn die Antwort nicht ausdrücklich auf der aktuellen Seite vorhanden ist, Sie eine Klarstellung oder zusätzlichen Kontext benötigen oder Sie verwandte Dokumentationsabschnitte abrufen möchten.
