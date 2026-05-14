---
description: Veröffentlichen Sie Navi+ Menüs auf WordPress mit dem Navi+ Menu Builder Plugin – Sticky Menüs werden automatisch siteweit gerendert, während Abschnittsmenüs über den [naviwp] Shortcode oder Gutenberg Block platziert werden.
lang: de
layout: default
permalink: /de/docs/integrations/wordpress-woocommerce/publish-menus/
title: Veröffentlichen Sie Ihre Menüs auf WordPress
---
# Veröffentlichen Sie Ihre Menüs auf WordPress

Navi+ hat zwei Veröffentlichungsmodi – **sticky** und **section** – und das WordPress-Plugin unterstützt beide. Der anwendbare Modus hängt vom Menütetyp ab.

| Menütetyp | Modus | Wo es erscheint |
| --- | --- | --- |
| Tab Bar | Sticky | An das Ansichtsfenster angeheftet, siteweit |
| FAB | Sticky | Schwebende Schaltfläche, siteweit |
| Slide Menu | Sticky / kontextuell | Ausgelöst durch Antippen eines beliebigen Elements |
| Mega Menu (Desktop) | Section | An der Stelle, an der Sie es einfügen |
| Mega Menu (Mobile) | Section | An der Stelle, an der Sie es einfügen |
| Grid Menu | Section | An der Stelle, an der Sie es einfügen |

Siehe [Publish overview]({{ site.baseurl }}/docs/publish/publish-overview/) für den vollständigen Vergleich von sticky und section.

---

## Sticky Menüs – Tab Bar, FAB, Slide

Mit dem installierten Plugin und Ihrem ersten Menü, das gespeichert ist, werden Sticky Menüs, die im Editor als **Published** markiert sind, automatisch auf jeder Seite Ihrer Website gerendert.

Sie müssen nichts einfügen. Die Anzeige-Regeln (Gerät, URL-Muster, Anmeldestatus) werden zur Laufzeit von Navi+ im Browser ausgewertet.

### Umschalten der siteweiten Einbettung

Die Plugin-Admin-Oberfläche enthält einen Schalter für die siteweite Einbettung:

- **On (Standard):** Die Laufzeit wird in `<head>` jeder Seite injiziert; Sticky Menüs werden über die gesamte Website gerendert.
- **Off:** Die Laufzeit wird nur auf Seiten geladen, die einen `[naviwp]` Shortcode oder Block enthalten. Verwenden Sie dies, wenn Sie möchten, dass Menüs nur auf einer kleinen Anzahl von Seiten erscheinen (z. B. nur auf mobilen Landingpages).

Wenn ein Sticky Menü nicht erscheint, überprüfen Sie:

- Das Menü ist im Editor als **Published** (nicht Entwurf) markiert.
- Die Anzeige-Regeln stimmen mit der Seite überein, die Sie testen.
- Die Laufzeit ist geladen – siehe den [verify section]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Abschnittsmenüs – Mega Menu, Grid

Abschnittsmenüs müssen an einem bestimmten Ort auf einer Seite platziert werden. Das Plugin bietet drei Möglichkeiten.

### Methode 1 – Shortcode (empfohlen)

In jedem Beitrag, auf jeder Seite oder in einem shortcode-fähigen Widget:

```text
[naviwp embed_id="SF-123456789"]
```

Ersetzen Sie `SF-123456789` durch die **Embed ID** Ihres Menüs (im Editor im Veröffentlichungsbereich des Menüs angezeigt).

### Methode 2 – Gutenberg Block

Im Block-Editor:

1. Klicken Sie auf **+**, um einen neuen Block einzufügen.
2. Suchen Sie nach **Naviplus Menu Builder**.
3. Fügen Sie den Block ein und fügen Sie die **Embed ID** Ihres Menüs in die Block-Seitenleiste ein.

Der Block rendert einen leeren Platzhalter im Editor und wird an der Frontend-Ansicht durch das Live-Menü ersetzt. Sie können auch einen **Shortcode**-Block einfügen und `[naviwp embed_id="..."]` einfügen – das funktioniert identisch.

### Methode 3 – Innerhalb eines Absatzblocks

Das Plugin erkennt `[naviwp ...]` Shortcodes, die direkt in einen Absatzblock eingefügt werden; Sie müssen nicht zuerst zu einem Shortcode-Block wechseln.

### Methode 4 – Page Builder (Elementor, Divi, Bricks, Oxygen)

Verwenden Sie das **Shortcode**-Widget des Builders und fügen Sie `[naviwp embed_id="..."]` ein. Wenn ein Builder kein Shortcode-Widget hat, funktioniert auch ein **HTML**-Widget mit dem Embed-Div:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

Das Plugin lädt bereits die Navi+ Laufzeit, sodass das Menü in diesem Container gerendert wird.

---

## Ein Token, viele Menüs

Das Plugin lädt die Laufzeit einmal pro Seite und ruft jedes Menü – sticky oder section – vom selben Navi+ Dienst ab. Um die Veröffentlichung eines Menüs zu stoppen, schalten Sie es im Editor auf **Draft**; keine WordPress-Änderung ist erforderlich.

---

## Caching-Plugins (WP Rocket, W3 Total Cache, LiteSpeed Cache)

Die Navi+ Laufzeit wird von einem CDN bereitgestellt und ist cache-freundlich. Sie müssen es **nicht** von der Seiten-Caching ausschließen. Nach dem Aktualisieren von Menüs im Editor erscheinen Änderungen beim nächsten Seitenaufruf – kein WordPress-Cache-Flush erforderlich, da Menüs zur Laufzeit vom Browser abgerufen werden, nicht in das HTML eingebaut.

Wenn Sie veraltete Ausgaben sehen, ist es normalerweise der Browser-Cache. Ein harter Reload (Cmd/Ctrl + Shift + R) leert ihn.
