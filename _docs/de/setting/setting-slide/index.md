---
description: Konfigurieren Sie die Richtung, Breite, Schaltfläche zum Schließen und das Verhalten des Desktop-Submenüs im Navi+.
lang: de
layout: default
permalink: /de/docs/setting/setting-slide/
title: Einstellung Slide — Optionen für das Slide-Menü
---
# Einstellung Slide — Optionen für das Slide-Menü

Diese Einstellungen gelten **nur für Slide-Menüs** (Kontext-Slide / Hamburger-Menü).

---

## Slide-Richtung

**Einstellung → Slide-Richtung** — von wo das Menü hereinschiebt und wie es fixiert ist.

| Option | Beschreibung |
|---|---|
| Von Links | Schiebt von der linken Kante herein (am häufigsten) |
| Von Rechts | Schiebt von der rechten Kante herein |
| Von Oben | Schiebt von oben nach unten |
| Von Unten | Schiebt von unten nach oben |
| Fest Links (Desktop) | Immer sichtbare Seitenleiste auf der linken Seite — kein Auslöser erforderlich |
| Fest Rechts (Desktop) | Immer sichtbare Seitenleiste auf der rechten Seite |

**Fix auf Mobil / Fix auf Desktop:**
- **Fix auf Mobil** → Menü bleibt dauerhaft sichtbar auf Mobilgeräten, ohne dass es geöffnet werden muss.
- **Fix auf Desktop** → Menü bleibt dauerhaft sichtbar auf dem Desktop (persistente Seitenleiste).

---

## Slide-Breite

| Feld | Beschreibung | Standard |
|---|---|---|
| **Mobile Breite** | Breite auf Mobilgeräten (px oder %) | Auto |
| **Desktop Max Breite (px)** | Maximale Breite auf dem Desktop | Auto |
| **Desktop Sub Breite (px)** | Breite des Level 2 Untermenü-Panels auf dem Desktop | Auto |

**Beispiel:** Slide von links, 80% des mobilen Bildschirms, max 400px auf dem Desktop:
- Mobile Breite = `80%`
- Desktop Max Breite = `400`

---

## Schließen-Symbol

| Feld | Beschreibung | Standard |
|---|---|---|
| **Schließen-Symbol ausblenden** | Schließen-Symbol × ausblenden | Sichtbar |
| **Schließen-Symbol Ausrichtung** | Position der Schaltfläche zum Schließen: Links / Rechts | Rechts |
| **Schließen-Symbol Oben (px)** | Abstand vom oberen Rand des Menüs zur Schaltfläche zum Schließen | 12px |

> Wenn Sie die Schaltfläche zum Schließen ausblenden, müssen die Benutzer den Überlagerungsbereich außerhalb des Menüs antippen, um es zu schließen. Halten Sie die Schaltfläche zum Schließen sichtbar, wenn das Menü den größten Teil des Bildschirms abdeckt.

---

## Desktop-Untermenü-Richtung

**Einstellung → Desktop → Untermenü-Richtung**

Wenn das Slide-Menü als feste Seitenleiste auf dem Desktop angezeigt wird, können Untermenüs in 4 Richtungen geöffnet werden:

| Wert | Untermenü öffnet sich in Richtung |
|---|---|
| 1 | Rechts (Standard) |
| 2 | Links |
| 3 | Nach unten |
| 4 | Nach oben |
