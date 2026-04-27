---
description: Navi+ Menüsichtbarkeit nach Gerät, Scroll-Verhalten, Shopify-Seitentypen und URL-Schlüsselwörtern filtern.
layout: default
permalink: /docs/publish/publish-filter/
title: Publish Filter — Geräte- & URL-Regeln
---
# Publish Filter — Geräte- & URL-Regeln

Nach dem Aktivieren des Publish-Schalters kannst du mit zwei Filterschichten einschränken, wann das Menü erscheint: **Gerät** (Mobil/Desktop + Scroll-Verhalten) und **URL-Schlüsselwörter** (anzeigen/ausblenden basierend auf URL-Inhalt).

---

## Nach Gerät filtern

### Aktivieren/Deaktivieren nach Plattform

Zwei Schalter oben im Publish-Modal:

| Einstellung | Standard | Hinweise |
|---|---|---|
| **Menü auf Mobilgeräten anzeigen** | An | Menü auf mobilen Geräten anzeigen |
| **Menü auf Desktop anzeigen** | Aus | Menü auf Desktop-Geräten anzeigen |

Einige Menütypen deaktivieren einen dieser Schalter — zum Beispiel deaktiviert Desktop Mega Menu den Mobil-Schalter.

---

### Scroll-Verhalten (nur Sticky-Menüs)

Separat für Mobil und Desktop konfigurierbar.

#### Mobiles Scroll-Verhalten

| Einstellung | Verhalten |
|---|---|
| **Beim Scrollen nach unten ausblenden** | Menü ausblenden wenn Nutzer nach **unten** scrollt |
| **Nach dem Scrollen anzeigen** | Menü nur anzeigen, nachdem der Nutzer nach unten gescrollt hat (beim Seitenaufruf nicht angezeigt) |

#### Desktop-Scroll-Verhalten

| Einstellung | Verhalten |
|---|---|
| **Beim Scrollen nach unten ausblenden** | Menü beim Scrollen nach unten auf dem Desktop ausblenden |
| **Nach dem Scrollen anzeigen** | Nur nach dem Scrollen nach unten auf dem Desktop anzeigen |

> Auto-Ausblenden und Auto-Anzeigen können gleichzeitig aktiviert werden: Menü blendet sich beim Scrollen nach unten aus, erscheint wieder beim Scrollen nach oben — ein gängiges Muster für untere Tabbars.

---

### Bildschirmposition (nur Sticky / Tabbar)

Position aus einem Optionsfeld-Auswähler mit visuellen Illustrationen wählen.

**Mobil** — 6 voreingestellte Positionen (unten mitte, unten links, unten rechts, oben-Varianten...)

**Desktop** — 12 voreingestellte Positionen (obere Leiste, untere Leiste, linke/rechte Seitenleiste, Eckpositionen...)

---

### Seitengruppen (nur Shopify, Sticky-Menüs)

Auswählen, auf welchen Shopify-Seitentypen das Menü erscheint. Standard: alle.

| Gruppe | URL-Muster |
|---|---|
| Startseite | `/` |
| Produktdetail | `/products/*` |
| Produktkategorien | `/collections/*` |
| Seiten | `/pages/*` |
| Blogs | `/blogs/*` |
| Andere | Alle verbleibenden Seiten |

> Globaler Markt (WordPress, Wix, etc.) hat diese Funktion nicht. Stattdessen URL-Schlüsselwortfilter verwenden.

---

## Nach URL-Schlüsselwörtern filtern

Die Karte **"Menü nach Schlüsselwörtern anzeigen"** — gilt für alle Menütypen außer Context Slide.

### Zwei Filtertypen

| Einstellung | Verhalten |
|---|---|
| **Schlüsselwort enthalten** | Menü **wird nur angezeigt** wenn URL **mindestens ein Schlüsselwort enthält** |
| **Schlüsselwort nicht enthalten** | Menü **wird nicht angezeigt** wenn URL **eines der Schlüsselwörter enthält** |

Mehrere Schlüsselwörter durch Kommas `,` getrennt.

### Beispiele

**Nur auf Snowboard-Produktseiten anzeigen:**
```
Enthalten: snowboard
```
→ Menü wird nur auf URLs wie `yourdomain.com/products/the-collection-snowboard-hydrogen` angezeigt

**Auf Mehrstandort-Seiten ausblenden:**
```
Nicht enthalten: multi-location
```
→ Menü wird **nicht** auf `yourdomain.com/products/the-multi-location-snowboard` angezeigt

**Kombiniert:**
```
Enthalten: collections
Nicht enthalten: sale, outlet
```
→ Wird nur auf Kategorieseiten angezeigt, aber auf "sale"- und "outlet"-Kategorien ausgeblendet.

### Hinweise

- Filter verwendet **vollständige URL-Zeichenkettenübereinstimmung**, kein Regex.
- Schlüsselwörter sind **nicht zwischen Groß-/Kleinschreibung unterscheidend**.
- Leer lassen = kein Filter (Menü wird auf allen Seiten angezeigt).
- Beide Filter sind per UND verknüpft — beide Bedingungen müssen erfüllt sein.
