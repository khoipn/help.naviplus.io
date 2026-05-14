---
description: Filter Navi+ Menü-Sichtbarkeit nach Gerät, Scrollverhalten, Shopify-Seitentypen und URL-Schlüsselwörtern.
lang: de
layout: default
permalink: /de/docs/publish/publish-filter/
title: Veröffentlichen Filter — Geräte- & URL-Regeln
---
# Veröffentlichen Filter — Geräte- & URL-Regeln

Nachdem Sie den Veröffentlichungs-Schalter aktiviert haben, können Sie eingrenzen, wann das Menü erscheint, indem Sie zwei Filterebenen verwenden: **Gerät** (mobil/Desktop + Scrollverhalten) und **URL-Schlüsselwörter** (anzeigen/ausblenden basierend auf URL-Inhalt).

---

## Filter nach Gerät

### Aktivieren/deaktivieren nach Plattform

Zwei Schalter oben im Veröffentlichungs-Modal:

| Einstellung | Standard | Hinweise |
|---|---|---|
| **Menü auf Mobilgeräten anzeigen** | Ein | Menü auf mobilen Geräten anzeigen |
| **Menü auf Desktop anzeigen** | Aus | Menü auf Desktop-Geräten anzeigen |

Einige Menütpyen deaktivieren einen dieser Schalter — zum Beispiel deaktiviert das Desktop Mega Menu den mobilen Schalter.

---

### Scrollverhalten (Sticky-Menüs nur)

Separat für mobil und Desktop konfiguriert.

#### Mobiles Scrollen

| Einstellung | Verhalten |
|---|---|
| **Automatisch ausblenden beim Scrollen nach unten** | Menü ausblenden, wenn der Benutzer **nach unten** scrollt |
| **Automatisch anzeigen nach Scrollen** | Menü nur anzeigen, nachdem der Benutzer nach unten gescrollt hat (nicht beim Laden der Seite angezeigt) |

#### Desktop-Scrollen

| Einstellung | Verhalten |
|---|---|
| **Automatisch ausblenden beim Scrollen nach unten** | Menü ausblenden, wenn auf dem Desktop nach unten gescrollt wird |
| **Automatisch anzeigen nach Scrollen** | Nur anzeigen, nachdem auf dem Desktop nach unten gescrollt wurde |

> Automatisch ausblenden und automatisch anzeigen können zusammen aktiviert werden: Menü blendet beim Scrollen nach unten aus, erscheint beim Scrollen nach oben wieder — ein gängiges Muster für untere Tabbars.

---

### Bildschirmposition (Sticky / Tabbar nur)

Wählen Sie eine Position aus einem Radio-Button-Auswahlfeld mit visuellen Illustrationen.

**Mobil** — 6 voreingestellte Positionen (unten Mitte, unten links, unten rechts, obere Varianten...)

**Desktop** — 12 voreingestellte Positionen (obere Leiste, untere Leiste, links/rechts Sidebar, Eckenpositionen...)

---

### Seiten Gruppen (Shopify nur, Sticky-Menüs)

Wählen Sie aus, auf welchen Shopify-Seitentypen das Menü erscheint. Standard: alle.

| Gruppe | URL-Muster |
|---|---|
| Startseite | `/` |
| Produktdetail | `/products/*` |
| Produktkategorien | `/collections/*` |
| Seiten | `/pages/*` |
| Blogs | `/blogs/*` |
| Andere | Alle verbleibenden Seiten |

> Globaler Markt (WordPress, Wix usw.) hat diese Funktion nicht. Verwenden Sie stattdessen den URL-Schlüsselwortfilter.

---

## Filter nach URL-Schlüsselwörtern

Die **"Menü nach Schlüsselwörtern anzeigen"** Karte — gilt für alle Menütpyen außer Kontext-Slide.

### Zwei Filtertypen

| Einstellung | Verhalten |
|---|---|
| **Enthält Schlüsselwort** | Menü **zeigt nur** an, wenn die URL **mindestens ein** Schlüsselwort **enthält** |
| **Enthält kein Schlüsselwort** | Menü **zeigt nicht an**, wenn die URL **irgendeines** der Schlüsselwörter **enthält** |

Mehrere Schlüsselwörter durch Kommas getrennt `,`.

### Beispiele

**Nur auf Snowboard-Produktseiten anzeigen:**
```
Enthält: snowboard
```
→ Menü zeigt nur auf URLs wie `yourdomain.com/products/the-collection-snowboard-hydrogen`

**Auf Multi-Standort-Seiten ausblenden:**
```
Enthält nicht: multi-location
```
→ Menü wird **nicht** angezeigt auf `yourdomain.com/products/the-multi-location-snowboard`

**Kombiniert:**
```
Enthält: collections
Enthält nicht: sale, outlet
```
→ Zeigt nur auf Kategorieseiten an, wird jedoch auf "sale" und "outlet" Kategoriene ausblenden.

### Hinweise

- Der Filter verwendet **vollständige URL-Zeichenfolgenübereinstimmung**, nicht Regex.
- Schlüsselwörter sind **nicht groß-/kleinschreibungsempfindlich**.
- Leer lassen = kein Filter (Menü wird auf allen Seiten angezeigt).
- Beide Filter werden mit AND verknüpft — beide Bedingungen müssen erfüllt sein.
