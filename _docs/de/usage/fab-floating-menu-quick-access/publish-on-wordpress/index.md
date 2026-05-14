---
description: Veröffentlichen Sie einen Navi+ FAB (Floating Action Button) auf WordPress mit dem Navi+ Menu Builder Plugin. Der FAB ist ein Sticky-Menü — einmal im Editor veröffentlicht, erscheint er automatisch auf der gesamten Website.
lang: de
layout: default
permalink: /de/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/
title: FAB — Veröffentlichen auf WordPress
---
# FAB — Veröffentlichen auf WordPress

Ein **FAB (Floating Action Button)** ist ein **Sticky**-Menü — es schwebt über der Seite (typischerweise in einer Ecke) und bleibt an Ort und Stelle, während die Besucher scrollen. Auf WordPress rendert das Navi+ Menu Builder Plugin es automatisch auf der gesamten Website; Sie fügen keinen Code oder Shortcode ein.

> Andere Plattformen (Wix, Squarespace, Webflow, benutzerdefinierte Seiten): siehe [Veröffentlichen auf Wix / Squarespace / Andere]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress-woocommerce-wix-others/).

---

## Schritte

1. **Installieren Sie das Plugin** — siehe [Installieren Sie das Navi+ Menu Builder Plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Erstellen Sie Ihren FAB** in **Aussehen → Naviplus Menu Builder**. Siehe [FAB — So verwenden Sie es]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/) für Designrichtlinien (einzelne Aktion vs. erweiterbares Menü).
3. **Veröffentlichen Sie das Menü** im Editor (Status: Veröffentlicht, nicht Entwurf).

Der FAB erscheint sofort auf jeder Seite Ihrer WordPress-Website. Kein Shortcode, keine Theme-Bearbeitung.

---

## Einschränkung des FAB auf bestimmte Seiten oder Zielgruppen

Deaktivieren Sie nicht die site-weite Einbettung des Plugins (das schaltet die Laufzeit vollständig aus). Begrenzen Sie den FAB im Editor:

- **Anzeigeregeln → URL-Muster** — nur auf `/contact*` anzeigen, auf `/checkout*` ausblenden, usw.
- **Anzeigeregeln → Gerät** — Desktop, mobil oder beides.
- **Anzeigeregeln → Besucherstatus** — nur angemeldete Benutzer, usw.

---

## Mobile Tipps

- Wählen Sie eine Ecke, die nicht mit der Browser-Benutzeroberfläche auf Mobilgeräten in Konflikt steht (die untere rechte Ecke ist ein sicherer Standard; die untere Mitte kann mit der URL-Leiste auf iOS kollidieren).
- Stellen Sie sicher, dass der FAB nicht mit einer Tabbar oder einem Chat-Widget überlappt. Siehe [Menü überlappt andere Elemente]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).
- Wenn der FAB sich zu einem Menü erweitert, halten Sie die Aktionsliste kurz (3–6 Elemente) — lange Listen sind auf Touch-Geräten unhandlich.

---

## Überprüfen Sie, ob der FAB aktiv ist

Fügen Sie `#navidebug-on` an jede Seiten-URL an. Die Seite wechselt in den Navi+ Debug-Modus, wenn das Plugin verbunden ist. Siehe [Erstellen Sie Ihr erstes Menü — Überprüfen Sie die Verbindung]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Verwandt

- [WordPress / WooCommerce — Übersicht]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Veröffentlichen Sie Ihre Menüs auf WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [FAB — So verwenden Sie es]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/)
