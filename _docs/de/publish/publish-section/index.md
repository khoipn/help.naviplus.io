---
description: Section-Menüs (Mega Menu, Grid) in Navi+ veröffentlichen — Einfügen/Ersetzen mit CSS Selector oder App Block auf Shopify.
layout: default
permalink: /de/docs/publish/publish-section/
title: Publish section — Mega menu & grid
---
# Publish Section — Mega Menu & Grid

Gilt für: **Mobile Mega Menu**, **Mobile Grid**, **Desktop Mega Menu**

Section-Menüs sind **nicht schwebend** — sie werden an einer bestimmten Position im Seitenlayout eingefügt. Es gibt zwei Bereitstellungsmethoden, die zusammen verwendet werden können:

| | Methode 1: Einfügen/Ersetzen | Methode 2: App Block |
|---|---|---|
| Plattform | Shopify + Global | Nur Shopify |
| Mechanismus | CSS Selector → vor/nach/anstelle des Elements einfügen | App Block "Navi+ on Section" im Theme Editor |
| Flexibilität | Hoch — überall einbettbar | Mittel — durch Shopify-Section-Schema begrenzt |
| Einrichtung | Erfordert Kenntnis des CSS Selectors | Nur Embed-ID eingeben |

---

## Methode 1: Einfügen/Ersetzen mit CSS Selector

Die **empfohlene** Methode — funktioniert für Shopify und Global.

### Schritt 1: Einbettungscode

**Shopify:** **Theme Editor → App Embeds** → Navi+ aktivieren. Nur einmal.

**Global:** In `<head>` einfügen:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### Schritt 2: "Menü per Einfügen/Ersetzen-Methode veröffentlichen" aktivieren

Schalter aktivieren, um den Konfigurationsbereich darunter zu erweitern.

### Schritt 3: CSS Selector eingeben

**Einen** CSS Selector eingeben. Das Menü wird relativ zum übereinstimmenden Element platziert.

**Gerätespezifische Syntax:**

| Suffix | Gerät |
|---|---|
| `header` | Mobil und Desktop |
| `header(M)` | Nur Mobil |
| `header(D)` | Nur Desktop |

**CSS Selector-Tipps für beliebte Shopify-Themes:**

| Menütyp | Zweck | Vorgeschlagener CSS Selector |
|---|---|---|
| Desktop Mega | Desktop-Navigation ersetzen | `nav.header__inline-menu ul.list-menu` |
| Desktop Mega | Unterhalb des Headers einfügen | `header` |
| Mobile Mega | Unterhalb des mobilen Headers einfügen | `header` |

### Schritt 4: Platzierung wählen (Einfügen/Ersetzen)

| Wert | Verhalten |
|---|---|
| **Ersetzen** | Das ursprüngliche Element vollständig durch das Navi+ Menü ersetzen |
| **Vor einfügen** | Navi+ Menü vor dem Element einfügen |
| **Nach einfügen** | Navi+ Menü nach dem Element einfügen |

> Nach Wahl von **Ersetzen** sollte CSS hinzugefügt werden, um das ursprüngliche Element während des Ladens von Navi+ auszublenden — siehe [Publish Optimize](/de/docs/publish/publish-optimize/).

---

## Methode 2: App Block (nur Shopify)

### Einrichtung

1. Die **Embed-ID** des Menüs kopieren (im Modal angezeigt — klicken zum Kopieren).
2. Zu **Shopify Theme Editor** gehen → den **"Navi+ on Section"** App Block finden.
3. Die Embed-ID in das entsprechende Feld einfügen.
4. Theme speichern.

### "Beim Scrollen oben fixieren"

Schalter, um das Section-Menü beim Scrollen oben an der Seite zu fixieren.

**Verwendung:** Wenn das Theme keinen eingebauten Sticky-Header hat, aktivieren, damit das Desktop Mega Menu beim Scrollen sichtbar bleibt.

---

## Können beide Methoden zusammen verwendet werden?

Ja. Shopify-Nutzer können beide aktivieren:
- App Block für Theme Editor-Vorschau (stabiler, einfacher zu testen).
- Einfügen/Ersetzen für präzisere Platzierung im Storefront.

Typischerweise wird nur eine Methode benötigt.

---

## Hinweise nach Menütyp

| Menü | Gerät | Hinweise |
|---|---|---|
| Mobile Mega Menu | Desktop-Schalter deaktiviert | Nur Mobil |
| Mobile Header | Desktop-Schalter deaktiviert | Nur Mobil |
| Desktop Mega Menu | Mobil-Schalter deaktiviert | Nur Desktop |
| Mobile Grid | Beide | Keine Einschränkungen |

---

## Fehlerbehebung

**Menü erscheint nicht nach dem Konfigurieren von Einfügen/Ersetzen?**
1. Prüfen ob der CSS Selector korrekt ist — DevTools oder Navi+ Debug-Modus verwenden.
2. Prüfen ob der Schalter "Menü per Einfügen/Ersetzen-Methode veröffentlichen" aktiviert ist.
3. Prüfen ob App Embeds / Einbettungscode vorhanden ist.

**Menü erscheint doppelt (dupliziert)?**
→ Sowohl App Block als auch Einfügen/Ersetzen sind gleichzeitig aktiv. Eine davon deaktivieren.
