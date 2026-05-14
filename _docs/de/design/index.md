---
description: Steuern Sie das Erscheinungsbild Ihres Navi+ Menüs — Farben, Schriftarten, Abstände, Hintergründe und Symbole durch ein hierarchisches Designsystem.
lang: de
layout: default
permalink: /de/docs/design/
title: Design
---
# Design

Die **Design**-Sektion steuert das gesamte Erscheinungsbild Ihres Menüs: Farben, Typografie, Abstände, Hintergründe und Symbole. Die Einstellungen hier gelten für das **gesamte Menü** unter Verwendung eines dreistufigen Vererbungssystems.

---

## Themen

| # | Thema | |
|---|---|---|
| 1 | Vererbungssystem und Überschreibmechanismus (zuerst lesen) | [Design Übersicht](/docs/design/design-overview/) |
| 2 | Stufe 1 — Erscheinungsbild der Hauptmenüelemente | [Design Stufe 1](/docs/design/design-level1/) |
| 3 | Stufe 2-3 — Erscheinungsbild der Untermenüs | [Design Stufe 2-3](/docs/design/design-level2/) |
| 4 | Trennlinie — Separatorlinien | [Design Trennlinie](/docs/design/design-divider/) |

---

## Schnellreferenz

```
Globale Standardwerte (fest codiert)
    ↓
Stufe 1  — gilt für alle obersten Menüelemente
    ↓  (Stufe 2-3 erbt, wenn leer)
Stufe 2-3 — gilt für Untermenüs / Dropdowns
    ↓  (überschreibt alles)
Pro-Element — individuelle Einstellungen in Element bearbeiten
```

**Regel:** Leer = von oben erben. Einen Wert setzen = überschreiben.
