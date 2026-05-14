---
description: Konfigurieren Sie das Erscheinungsbild von Untermenüelementen in Navi+ — mit automatischer Vererbung von Level 1 für alle leeren Felder.
lang: de
layout: default
permalink: /de/docs/design/design-level2/
title: Design Level 2-3 — Untermenüelemente
---
# Design Level 2-3 — Untermenüelemente

Einstellungen unter **Design → Level 2-3** gelten für Untermenüelemente (Dropdowns, die erscheinen, wenn ein übergeordnetes Element geöffnet wird). Jedes leer gelassene Feld **vererbt automatisch** den entsprechenden Wert von Level 1.

> **Regel:** Füllen Sie hier nur Felder aus, wenn das Untermenü **anders** aussehen soll als das Hauptmenü. Leer lassen = gleich wie Level 1.

---

## Textstil

| Feld | Vererbt von Level 1, wenn leer |
|---|---|
| **Textfarbe** | `textColor` |
| **Schriftgröße (px)** | `textSize` |
| **Schriftgewicht** | `fontWeight` |
| **Texttransformation** | `textTransform` |
| **Schriftfamilie** | `fontFamily` |
| **Beschreibung Farbe** | `descriptionColor` |
| **Beschreibung Größe (px)** | `descriptionTextSize` |

---

## Icon / Bildstil

| Feld | Vererbt von Level 1, wenn leer |
|---|---|
| **Iconfarbe** | `iconColor` |
| **Icons Größe (px)** | `iconSize` |
| **Abstand Text-Icon (px)** | `spaceTextIcon` |
| **Bildradius (px)** | `imageRadius` |

---

## Abstände

| Feld | Beschreibung |
|---|---|
| **Element-Padding (px)** | Innerer Abstand für Untermenüelemente. Vererbt nicht — verwendet das Standarddesign, wenn leer |
| **Element-Margin (px)** | Äußerer Abstand für Untermenüelemente |
| **Minimale Höhe (px)** | Minimale Höhe für Untermenüelemente |

---

## Hintergrund & Rahmen

| Feld | Beschreibung |
|---|---|
| **Hintergrundfarbe** | Hintergrundfarbe des Untermenübereichs |
| **Eckenradius (px)** | Abrundung der Ecken des Untermenücontainers |
| **Hintergrund ausblenden** | Hintergrund des Untermenüs ausblenden |
| **Schattenwurf** | Schattenwurf für den Untermenücontainer |

---

## Anzeige

| Feld | Vererbt von Level 1, wenn leer |
|---|---|
| **Anzeigelayout** | `displayLayout` |
| **Ausrichten** | `align` |

---

## Trennlinie

| Feld | Vererbt von Level 1, wenn leer |
|---|---|
| **Trennlinienfarbe** | `dividerColor` (von Design → Trennlinie) |

---

## Beispiel

**Ziel:** Hauptmenü hat dunklen Hintergrund und weißen Text. Untermenü sollte weißen Hintergrund und dunklen Text haben.

Füllen Sie nur diese beiden Felder auf Level 2-3 aus:
- Hintergrundfarbe = `#FFFFFF`
- Textfarbe = `#000000`

Alle anderen Felder (Schriftgröße, Icons Größe, Abstände usw.) vererben automatisch von Level 1.
