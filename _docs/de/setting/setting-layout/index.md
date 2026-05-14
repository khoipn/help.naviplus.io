---
description: Konfigurieren Sie die Menüposition, den Abstand, den Rand, den z-Index und die Breite des Untermenüs in Navi+.
lang: de
layout: default
permalink: /de/docs/setting/setting-layout/
title: Layout einstellen — Position & Abstand
---
# Layout einstellen — Position & Abstand

Diese Einstellungen steuern die **Position** des gesamten Menüs auf der Seite, seine **Stapelanordnung** im Verhältnis zu anderen Elementen und die **Breite** der Untermenüs.

---

## Menüabstand & Rand

Steuert den äußeren und inneren Abstand des **gesamten Menücontainers** — anders als der Abstand auf Elementebene im Design.

| Feld | Beschreibung |
|---|---|
| **Rand Oben / Rechts / Unten / Links (px)** | Abstand zwischen dem Menü und dem Bildschirmrand oder umgebenden Elementen |
| **Abstand Oben / Rechts / Unten / Links (px)** | Abstand innerhalb des Menücontainers, bevor die Elemente angezeigt werden |

**Wann zu verwenden:**
- Drücken Sie eine Tabbar über die Browser-Navigationsleiste auf iOS: `Margin Bottom = 34`
- Fügen Sie Abstand zwischen einem Mega Menu und dem Header hinzu: `Margin Top = 8`

---

## Z-Index

Stapelanordnung des Menüs im Verhältnis zu anderen Seitenelementen (Header, Chat-Widget, Popups usw.).

| Feld | Beschreibung | Standard |
|---|---|---|
| **Z-Index** | Ganzzahlwert — höher = oben | Auto |

**Wann anzupassen:**
- Menü wird von einem Sticky-Header überdeckt → Z-Index über den Headerwert erhöhen.
- Menü überdeckt ein Chat-Widget → Z-Index unter das Widget verringern.

Häufige Referenzwerte: Themen-Header sind normalerweise `1000–9999`; Chat-Widgets sind normalerweise `9999–99999`.

---

## Breite des Untermenüs

Gilt für Dropdown-Untermenüs (Tabbar, einspaltiges Mega Menu).

| Feld | Beschreibung | Standard |
|---|---|---|
| **Breite des Untermenüs (px)** | Breite der einspaltigen Untermenü-Panels | 360px |

---

## Desktop — Verhalten & Breite des Untermenüs

Gilt, wenn das Menü auf dem Desktop angezeigt wird.

| Feld | Beschreibung |
|---|---|
| **Untermenü bei Hover anzeigen** | Untermenüs bei Mouseover ohne Klicken öffnen |
| **Vollständige Untermenübreite (px)** | Breite der mehrspaltigen Untermenüs (Desktop Mega Menu) |
| **Richtung des Untermenüs** | Richtung, in die Untermenüs geöffnet werden: rechts / links / oben / unten |

---

## Multi-Sites *(Elite)*

Binden Sie das Menü auf mehreren Domains außerhalb des Haupt-Shopify-Stores ein.

| Feld | Beschreibung |
|---|---|
| **Multi-Sites** | Komma-getrennte Liste von Domains (z.B. `brand.com,shop.brand.com`) |
