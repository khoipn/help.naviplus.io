---
description: Veröffentliche einen Navi+ Tab Bar auf Wix. Navi+ ist eine native Wix App Market-App — installiere sie, veröffentliche den Tab Bar und er wird automatisch site-weit angezeigt. Kein Code, kein Embed-Snippet.
lang: de
layout: default
permalink: /de/docs/usage/tabbar-bottom-navigation/publishing-on-wix/
title: Auf Wix veröffentlichen
---
# Auf Wix veröffentlichen

> 💡 Neu bei Navi+ auf Wix? Siehe die [Navi+ auf Wix – Übersicht](https://naviplus.io/de/blogs/compare/topic/naviplus-on-wix/) auf naviplus.io.

Navi+ läuft auf Wix als **native Wix App Market-App**. Der **Tab Bar** ist ein **schwebendes** Menü — er verankert sich am Viewport (normalerweise in der Nähe des unteren Randes auf Mobile) und bleibt beim Scrollen der Besucher an Ort und Stelle. Auf Wix wird der Tab Bar nach der Installation von Navi+ und der Veröffentlichung **automatisch site-weit dargestellt** — es gibt keinen Code zum Einfügen und keinen Custom Code-Schritt.

> Andere Plattformen: siehe [Auf Shopify veröffentlichen]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publishing-on-shopify/), [Auf WordPress veröffentlichen]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/), oder [Squarespace / Webflow / Sonstiges]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/).

---

## Schritte

1. **Installiere Navi+ aus dem [Wix App Market](https://www.wix.com/app-market)** — es öffnet sich in deinem Wix-Dashboard, bereits mit deiner Website verbunden. Wix übernimmt die Authentifizierung, daher sind keine API-Schlüssel erforderlich.
2. **Erstelle deinen Tab Bar** — wähle das **Tab Bar**-Layout und füge 3–5 Hauptziele hinzu. Siehe [Tab Bar — So wird´s verwendet]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/) für Designtipps.
3. **Veröffentliche das Menü** (Status: Veröffentlicht, nicht Entwurf).

Das war es. Navi+ bettet sich selbst in deine Live-Wix-Website über Wix's Embedded Script ein, und der Tab Bar wird auf jeder Seite sofort angezeigt — kein Snippet, kein Theme-Edit.

---

## Begrenzung des Tab Bar auf bestimmte Seiten

Schränke den Tab Bar im Navi+ Editor ein — versuche nicht, die App zu entfernen:

- **Anzeigerregeln → URL-Muster** — zeige den Tab Bar nur auf URLs an, die einem Glob entsprechen (z.B. `/shop/*`).
- **Anzeigerregeln → Gerät** — beschränke auf mobile Geräte nur.
- **Anzeigerregeln → Besucherstatus** — beschränke auf angemeldete Benutzer usw.

Regeln werden im Browser ausgewertet, daher gelten Änderungen beim nächsten Seitenladegang.

---

## Abrechnung

Navi+ auf Wix wird über **Wix** abgerechnet — eine kostenlose Stufe plus **Starter-, Business- und Elite**-Pläne, zusammen mit deinem Wix-Abonnement berechnet. Führe ein Upgrade vom Preisbildschirm in der App durch.

---

## Verwandt

- [Tab Bar — So wird´s verwendet]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/)
- [Navi+ installieren]({{ site.baseurl }}/docs/how-to-install-navi/)
