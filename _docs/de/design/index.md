---
description: Steuern Sie das Erscheinungsbild Ihres Navi+ Menüs — Farben, Schriftarten, Abstände, Hintergründe und Symbole über ein hierarchisches Designsystem.
layout: default
permalink: /de/docs/design/
title: Design
---
# Design

Der Bereich **Design** steuert das gesamte Erscheinungsbild Ihres Menüs: Farben, Typografie, Abstände, Hintergründe und Symbole. Die Einstellungen hier gelten für das **gesamte Menü** über ein dreistufiges Vererbungssystem.

---

## Themen

| # | Thema | |
|---|---|---|
| 1 | Vererbungssystem und Überschreibungsmechanismus (zuerst lesen) | [Design-Übersicht](/de/docs/design/design-overview/) |
| 2 | Stufe 1 — Erscheinungsbild von Hauptmenüelementen | [Design Stufe 1](/de/docs/design/design-level1/) |
| 3 | Stufe 2-3 — Erscheinungsbild von Untermenüs | [Design Stufe 2-3](/de/docs/design/design-level2/) |
| 4 | Trennlinie — Trennlinien | [Design Trennlinie](/de/docs/design/design-divider/) |

---

## Kurzreferenz

```
Globale Standards (hardcodiert)
    ↓
Stufe 1  — gilt für alle Hauptmenüelemente
    ↓  (Stufe 2-3 erbt bei Leerzeichen)
Stufe 2-3 — gilt für Untermenüs / Dropdowns
    ↓  (überschreibt alles)
Pro Element — individuelle Einstellungen in Element bearbeiten
```

**Regel:** Leer = von oben erben. Wert setzen = überschreiben.
