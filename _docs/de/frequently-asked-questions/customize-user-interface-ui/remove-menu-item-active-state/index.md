---
description: Standardmäßig überprüft Navi+ die aktuelle Seiten-URL, um den aktiven Zustand im Menü anzuzeigen (mit einem grauen Hintergrund). Dies hilft Ihren Kunden, einfacher zu navigieren.
lang: de
layout: default
permalink: /de/docs/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state/
title: Menüelement aktiven Zustand entfernen?
---
# Menüelement aktiven Zustand entfernen?

Standardmäßig überprüft Navi+ die aktuelle Seiten-URL, um den aktiven Zustand im Menü anzuzeigen (mit einem grauen Hintergrund). Dies hilft Ihren Kunden, einfacher zu navigieren.

Allerdings ist der aktive Zustand nicht immer notwendig, insbesondere auf breiten Desktop-Bildschirmen, wo es andere Möglichkeiten gibt, "wo Sie sind," wie Breadcrumbs, anzuzeigen. Manchmal möchten Sie den aktiven Zustand entfernen, um das Menü sauberer aussehen zu lassen.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FAQCfjosVopNC9mXDDbII%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=1167aaa9-c22e-4102-9eb9-6e5ee10dc14a" alt=""><figcaption></figcaption></figure>

Hier erfahren Sie, wie es geht:

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyaI6k6GmW3A5CGipYz1p%2FCSS.1.1.png?alt=media&#x26;token=1ddf87db-9f58-4109-9886-441efd8e8f24" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FXRcp2647QfYG9b0JyS1t%2FCSS.1.2.png?alt=media&#x26;token=742f4ac0-50c1-48ec-bf8f-ccc7d89818cc" alt=""><figcaption></figcaption></figure>

Methode 1: Wenn Sie es nur auf dieses Menü anwenden möchten, lautet der CSS-Code wie folgt (fügen Sie ihn in das interne Stylesheet / CSS-Feld ein):

```
ul li.navi-active {
  background: initial;
}
```

Erklärung: Dies fügt eine CSS-Regel wie `#SF-123456789 ul li.navi-active { background: initial; }` zur Seite hinzu, die nur auf dieses Menü (mit embedID `SF-123456789`) angewendet wird und andere Menüs nicht beeinflusst.

Methode 2: Wenn Sie alle aktiven Effekte in allen Navi+ Menüs entfernen möchten, verwenden Sie den folgenden Code (fügen Sie ihn in das globale Stylesheet / CSS-Feld ein):

```
.naviItem ul li.navi-active {
  background: initial;
}
```
