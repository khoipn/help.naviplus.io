---
description: Veröffentlichen Sie Sticky-Menüs (Tabbar, Mobile Header, FAB) in Navi+ — unter Verwendung von App-Embeds für Shopify oder Skripteinfügungen für globale Seiten.
lang: de
layout: default
permalink: /de/docs/publish/publish-sticky/
title: Veröffentlichen Sie Sticky — Tabbar & FAB
---
# Veröffentlichen Sie Sticky — Tabbar & FAB

Gilt für: **Tabbar**, **Mobile Header**, **FAB / Supportleiste**

Sticky-Menüs sind schwebend — sie erscheinen immer auf dem Bildschirm und sind nicht an eine feste DOM-Position gebunden. Die Einbettungsmethode ist die einfachste: aktivieren Sie sie seitenweit über ein einzelnes Skript.

---

## Shopify — 3 Schritte

### Schritt 1: Aktivieren Sie App-Embeds im Theme-Editor

Gehen Sie zu **Theme Editor → App Embeds** und aktivieren Sie den Navi+ Schalter.

- Dies ändert **nicht das Layout des Themas** und kann jederzeit deaktiviert werden, ohne den Shop zu beeinträchtigen.
- Muss nur **einmal pro Shop** durchgeführt werden — überspringen Sie diesen Schritt für nachfolgende Menüs.

### Schritt 2: Aktivieren Sie "Veröffentlichen Sie dieses Menü im Sticky-Modus"

Der Schalter im **Schritt 2**-Karten des Veröffentlichungsmodals. Aktivieren = Menü ist live, deaktivieren = von der Website verborgen.

### Schritt 3 (optional): Konfigurieren Sie die Sichtbarkeit von Geräten und Seiten

Siehe [Publish Filter](/docs/publish/publish-filter/) für Details.

---

## Global (WordPress, Wix, Webflow...) — 3 Schritte

### Schritt 1: Fügen Sie den Einbettungscode in `<head>` ein

Der Code wird im Modal mit einer **Kopieren**-Schaltfläche angezeigt. Fügen Sie ihn in das `<head>` Ihrer Website ein:

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` identifiziert Ihren Shop — jeder Shop hat einen einzigartigen Token.
- `start.js` wird asynchron geladen und blockiert nicht das Rendern der Seite.

### Schritt 2: Aktivieren Sie "Veröffentlichen Sie dieses Menü im Sticky-Modus"

Gleich wie Shopify — aktivieren Sie den Schalter.

### Schritt 3 (optional): Konfigurieren Sie die Sichtbarkeit von Geräten und Seiten

Siehe [Publish Filter](/docs/publish/publish-filter/) für Details.

---

## Hinweise nach Menütet

| Menü | Einschränkung |
|---|---|
| Mobile Header | Desktop-Schalter deaktiviert — nur mobil |
| FAB / Supportleiste | Kein Positionsauswähler (FAB hat seine eigene Positionierung im Einstellungs-Tab) |
| Tabbar | Vollständige mobile + Desktop-Optionen verfügbar |

---

## Fehlersuche

**Menü erscheint nicht nach Aktivierung des Schalters?**
1. Überprüfen Sie, ob App-Embeds aktiviert ist (Shopify) oder der Einbettungscode korrekt eingefügt wurde (Global).
2. Überprüfen Sie die Geräteeinstellungen — **Menü auf Mobilgeräten anzeigen** oder **Menü auf Desktop anzeigen** muss aktiviert sein.
3. Überprüfen Sie den URL-Filter — er könnte die aktuelle Seite herausfiltern.
4. Führen Sie eine harte Aktualisierung des Browsers durch (Strg+Umschalt+R), um den Cache zu leeren.
