---
description: Konfigurieren Sie Menüposition, Abstände, Z-Index und Untermenübreite in Navi+.
layout: default
permalink: /docs/setting/setting-layout/
title: Einstellung Layout — Position & Abstände
---
# Einstellung Layout — Position & Abstände

Steuert die **Position** des gesamten Menüs, die **Stapelreihenfolge** und die **Untermenübreite**.

---

## Menü-Innen- und Außenabstand

Steuert den äußeren und inneren Abstand des **gesamten Menü-Containers** — anders als der Elementebenen-Innenabstand im Design.

| Feld | Beschreibung |
|---|---|
| **Außenabstand Oben / Rechts / Unten / Links (px)** | Abstand vom Menü zum Bildschirmrand |
| **Innenabstand Oben / Rechts / Unten / Links (px)** | Abstand innerhalb des Menü-Containers |

**Wann verwenden:**
- Tabbar über die iOS-Browser-Navigationsleiste schieben: `Außenabstand Unten = 34`
- Abstand über dem Mega-Menü: `Außenabstand Oben = 8`

---

## Z-Index

| Feld | Beschreibung | Standard |
|---|---|---|
| **Z-Index** | Höher = darüber | Auto |

- Menü wird von Sticky-Header verdeckt → Z-Index erhöhen.
- Menü verdeckt Chat-Widget → Z-Index verringern.

Typisch: Theme-Header = `1000–9999`; Chat-Widgets = `9999–99999`.

---

## Untermenübreite

| Feld | Beschreibung | Standard |
|---|---|---|
| **Untermenübreite (px)** | Breite des einspaltigem Untermenü-Panels | 360px |

---

## Desktop

| Feld | Beschreibung |
|---|---|
| **Untermenü bei Hover anzeigen** | Untermenüs beim Maus-Hover öffnen |
| **Vollständig erweiterter Untermenü-Breite (px)** | Mehrspaltiger Untermenü-Breite |
| **Untermenü-Richtung** | Richtung, in die Untermenüs öffnen |

---

## Multi-Sites *(Elite)*

| Feld | Beschreibung |
|---|---|
| **Multi-Sites** | Kommagetrennte Domain-Liste (z.B. `brand.com,shop.brand.com`) |
