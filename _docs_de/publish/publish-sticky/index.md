---
description: Sticky-Menüs (Tabbar, Mobile Header, FAB) in Navi+ veröffentlichen — App Embeds für Shopify oder Script-Injektion für Global-Websites.
layout: default
permalink: /docs/publish/publish-sticky/
title: Publish Sticky — Tabbar & FAB
---
# Publish Sticky — Tabbar & FAB

Gilt für: **Tabbar**, **Mobile Header**, **FAB / Support bar**

Sticky-Menüs sind schwebend — sie erscheinen immer auf dem Bildschirm und sind nicht an eine feste DOM-Position gebunden. Die Einbettungsmethode ist die einfachste: seitenweite Aktivierung über ein einzelnes Skript.

---

## Shopify — 3 Schritte

### Schritt 1: App Embeds im Theme Editor aktivieren

Gehe zu **Theme Editor → App Embeds** und aktiviere den Navi+ Schalter.

- Dies **ändert nicht das Theme-Layout** und kann jederzeit deaktiviert werden, ohne den Shop zu beeinflussen.
- Muss nur **einmal pro Shop** durchgeführt werden — bei nachfolgenden Menüs diesen Schritt überspringen.

### Schritt 2: "Dieses Menü im Sticky-Modus veröffentlichen" aktivieren

Der Schalter in der **Schritt 2**-Karte des Publish-Modals. Aktiviert = Menü ist live, deaktiviert = von der Website ausgeblendet.

### Schritt 3 (optional): Gerät- und Seitensichtbarkeit konfigurieren

Siehe [Publish Filter](/docs/publish/publish-filter/) für Details.

---

## Global (WordPress, Wix, Webflow...) — 3 Schritte

### Schritt 1: Einbettungscode in `<head>` einfügen

Der Code wird im Modal mit einer **Kopieren**-Schaltfläche angezeigt. Füge ihn in den `<head>` deiner Website ein:

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` identifiziert deinen Shop — jeder Shop hat einen eindeutigen Token.
- `start.js` lädt asynchron und blockiert nicht das Seitenrendering.

### Schritt 2: "Dieses Menü im Sticky-Modus veröffentlichen" aktivieren

Gleich wie Shopify — Schalter aktivieren.

### Schritt 3 (optional): Gerät- und Seitensichtbarkeit konfigurieren

Siehe [Publish Filter](/docs/publish/publish-filter/) für Details.

---

## Hinweise nach Menütyp

| Menü | Einschränkung |
|---|---|
| Mobile Header | Desktop-Schalter deaktiviert — nur mobil |
| FAB / Support bar | Kein Positionsauswähler (FAB hat eigene Positionierung im Setting-Tab) |
| Tabbar | Vollständige Optionen für Mobil + Desktop verfügbar |

---

## Fehlerbehebung

**Menü erscheint nicht nach dem Aktivieren des Schalters?**
1. Prüfen ob App Embeds aktiviert ist (Shopify) oder ob der Einbettungscode korrekt eingefügt wurde (Global).
2. Geräteeinstellungen prüfen — **Menü auf Mobilgeräten anzeigen** oder **Menü auf Desktop anzeigen** muss aktiviert sein.
3. URL-Filter prüfen — er könnte die aktuelle Seite herausfiltern.
4. Browser-Cache leeren (Strg+Umschalt+R).
