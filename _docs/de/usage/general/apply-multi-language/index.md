---
description: 'Navi+ unterstützt vollständig die Mehrsprachigkeit in zwei Teilen:'
lang: de
layout: default
permalink: /de/docs/usage/general/apply-multi-language/
title: Mehrsprachigkeit anwenden
---
# Mehrsprachigkeit anwenden

Navi+ unterstützt vollständig die Mehrsprachigkeit in zwei Teilen:

**1) Verwenden Sie die Syntax, um automatisch die richtige Sprache anzuzeigen.**

Zum Beispiel, stellen Sie sich vor, Sie haben eine Navi+ Tabbar, die auf Ihrer Website mit 3 Sprachen angezeigt wird: Englisch (Standard), Französisch und Vietnamesisch. Der Short-Code für Französisch ist `fr` und für Vietnamesisch ist `vi`.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F6k6V0wCgNOrg7o30S7PT%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=5eb3293f-9f55-4917-87e1-dacff684ca9e" alt=""><figcaption></figcaption></figure>

Um das Menüelement **Home** in der richtigen Sprache anzuzeigen, verwenden Sie diese Syntax:

```
Home <fr: Maison> <vi: Trang chủ>
```

Wenn Ihre Tabbar angezeigt wird, wird Navi+ automatisch die aktuelle Sprache überprüfen.

* Wenn die Standard-Sprache Englisch ist, wird **Home** angezeigt.
* Wenn Französisch ausgewählt ist, wird **Maison** angezeigt.
* Wenn Vietnamesisch ausgewählt ist, wird **Trang chủ** angezeigt.

Dies funktioniert sowohl für **Beschreibung** als auch für **Link zu** Felder.

2\) Erstellen Sie ein Sprachumschalter-Menü in Navi+

Navi+ unterstützt eine spezielle Syntax, die es Ihnen ermöglicht, die Sprachen direkt aus Ihren Menüelementen zu wechseln.

* **Schritt 1:** (Optional) Fügen Sie Flaggen-Icons hinzu, wenn Sie möchten. Sie können Flaggen-Icons von Websites wie [Flaticon](https://www.flaticon.com "Flaticon") herunterladen (Zum Beispiel: <https://www.flaticon.com/authors/flags/rectangular?author_id=1&type=standard>).
* **Schritt 2:** Verwenden Sie die folgende Syntax, um die Sprachen zu wechseln:

```
open:ChangeLanguage(fr)
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FdTn5Nk2ETEUXO7unkIu9%2FHelp.MenuTree.1.1.2-1.png?alt=media&#x26;token=e1f13362-de09-4438-ad5a-a075a9750b7d" alt=""><figcaption></figcaption></figure>
