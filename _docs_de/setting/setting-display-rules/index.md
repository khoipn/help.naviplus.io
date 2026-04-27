---
description: Kontrollieren Sie, auf welchen Seiten und Geräten das Navi+ Menü angezeigt wird — Geräte-Schalter, URL-Schlüsselwortregeln, Shopify-Seitentypfilter.
layout: default
permalink: /docs/setting/setting-display-rules/
title: Einstellung Anzeigeregeln — Bedingte Sichtbarkeit
---
# Einstellung Anzeigeregeln — Bedingte Sichtbarkeit

Kontrollieren Sie, wo das Menü basierend auf Gerätetyp, URL oder Shopify-Seitentyp angezeigt wird.

---

## Anzeige nach Gerät

Im Tab **Veröffentlichen**:

| Schalter | Effekt |
|---|---|
| **Mobil** | Auf Mobilgeräten anzeigen/ausblenden |
| **Desktop** | Auf Desktop anzeigen/ausblenden |

Standard: Nur Mobil ist aktiviert. Desktop muss manuell aktiviert werden.

---

## URL-Schlüsselwortregeln

### Nur anzeigen, wenn URL Schlüsselwort enthält

**Feld:** `Veröffentlichen — Schlüsselwort enthalten`

```
collections, products/sale
```

---

### Ausblenden, wenn URL Schlüsselwort enthält

**Feld:** `Veröffentlichen — Schlüsselwort nicht enthalten`

```
checkout, account/login
```

---

## Shopify-Seitentypen

| Gruppe | Seiten |
|---|---|
| **Startseite** | Startseite |
| **Produktdetail** | Produktseiten |
| **Produktkategorien** | Kollektionsseiten |
| **Seiten** | Statische Seiten |
| **Blogs** | Blog und Artikel |
| **Sonstiges** | Alles andere |

Gruppe deaktivieren → Menü wird auf diesem Seitentyp nicht angezeigt.

---

## Regelreihenfolge

```
1. Gerät aktiviert?            →  Wenn nein: ausgeblendet
2. Seitentyp ausgewählt?       →  Wenn nein: ausgeblendet
3. URL entspricht nicht-zeigen? →  Wenn ja: ausgeblendet
4. URL entspricht nur-zeigen?   →  Wenn nein: ausgeblendet
5. Menü anzeigen
```
