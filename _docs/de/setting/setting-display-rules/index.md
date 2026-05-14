---
description: Steuern Sie, auf welchen Seiten und Geräten Ihr Navi+ Menü angezeigt wird — mithilfe von Gerätetoggles, URL-Schlüsselwortregeln und Shopify-Seitentypfiltern.
lang: de
layout: default
permalink: /de/docs/setting/setting-display-rules/
title: Anzeige Regeln festlegen — Bedingte Sichtbarkeit
---
# Anzeige Regeln festlegen — Bedingte Sichtbarkeit

Steuern Sie, wo und wann Ihr Menü basierend auf Gerätetyp, URL oder Shopify-Seitentyp angezeigt wird.

---

## Anzeige nach Gerät

Gefunden im **Veröffentlichen** Tab des Menüs (nicht pro Artikel):

| Toggle | Effekt |
|---|---|
| **Mobil** | Menü auf mobilen Bildschirmen anzeigen/ausblenden |
| **Desktop** | Menü auf Desktop-Bildschirmen anzeigen/ausblenden |

Standard: nur Mobil ist aktiviert. Sie müssen Desktop manuell aktivieren, wenn Sie möchten, dass das Menü auf größeren Bildschirmen angezeigt wird.

> Um einzelne Elemente nach Gerät anzuzeigen/auszublenden → siehe [Element Sichtbarkeit](/docs/menu-items/item-visibility/).

---

## Anzeige nach URL-Schlüsselwörtern

Zwei Felder in **Einstellungen → Anzeige nach Schlüsselwörtern** ermöglichen es Ihnen, zu steuern, auf welchen URLs das Menü angezeigt wird.

### Nur anzeigen, wenn die URL das Schlüsselwort enthält

**Feld:** `Veröffentlichen — Enthält Schlüsselwort`

```
collections, products/sale
```

Das Menü erscheint nur auf Seiten, deren URL `collections` **oder** `products/sale` enthält.

**Beispiel:** Ein "Shop Navigation" Menü für Produktseiten → nur anzeigen auf `collections/` und `products/`.

---

### Ausblenden, wenn die URL das Schlüsselwort enthält

**Feld:** `Veröffentlichen — Enthält kein Schlüsselwort`

```
checkout, account/login
```

Das Menü ist auf Checkout- und Anmeldeseiten ausgeblendet; überall sonst sichtbar.

**Beispiel:** Blenden Sie die Tabbar während des Checkouts aus, um den Kunden nicht abzulenken.

---

## Anzeige nach Shopify-Seitentyp

Der **Veröffentlichen** Tab enthält auch 6 Shopify-Seitengruppen (nur Shopify-Stores):

| Gruppe | Seiten |
|---|---|
| **Startseite** | Startseite |
| **Produktdetails** | Produktdetailseiten |
| **Produktkategorien** | Sammlungs-/Kategorieseiten |
| **Seiten** | Statische Seiten (Über, Kontakt usw.) |
| **Blogs** | Blog-Listen- und Artikelseiten |
| **Sonstige** | Seiten, die nicht in den 5 Gruppen oben sind |

Deaktivieren Sie eine Gruppe → das Menü wird auf diesem Seitentyp nicht angezeigt.

---

## Wie Regeln gestapelt werden

Alle Bedingungen werden zusammen in dieser Reihenfolge ausgewertet:

```
1. Ist das Gerät aktiviert?              →  Wenn nein: ausgeblendet
2. Ist der Seitentyp aktiviert?           →  Wenn nein: ausgeblendet
3. Entspricht die URL "Nicht anzeigen"?    →  Wenn ja: ausgeblendet
4. Entspricht die URL "Nur anzeigen"?     →  Wenn nein: ausgeblendet
5. Menü anzeigen
```
