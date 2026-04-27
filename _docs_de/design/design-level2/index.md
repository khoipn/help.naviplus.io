---
description: Konfigurieren Sie das Erscheinungsbild von Untermenüs mit automatischer Vererbung von Stufe 1 für alle leeren Felder.
layout: default
permalink: /docs/design/design-level2/
title: Design Stufe 2-3 — Untermenüelemente
---
# Design Stufe 2-3 — Untermenüelemente

Einstellungen unter **Design → Stufe 2-3** gelten für Untermenüs. Jedes leere Feld **erbt automatisch** von Stufe 1.

> **Regel:** Füllen Sie hier nur Felder aus, wenn das Untermenü **anders** als das Hauptmenü aussehen soll.

---

## Textstil

| Feld | Erbt von Stufe 1 bei Leerfeld |
|---|---|
| **Textfarbe** | `textColor` |
| **Schriftgröße (px)** | `textSize` |
| **Schriftstärke** | `fontWeight` |
| **Texttransformation** | `textTransform` |
| **Schriftfamilie** | `fontFamily` |
| **Beschreibungsfarbe** | `descriptionColor` |
| **Beschreibungsgröße (px)** | `descriptionTextSize` |

---

## Symbol / Bildstil

| Feld | Erbt von Stufe 1 bei Leerfeld |
|---|---|
| **Symbolfarbe** | `iconColor` |
| **Symbolgröße (px)** | `iconSize` |
| **Abstand Text-Symbol (px)** | `spaceTextIcon` |
| **Bildradius (px)** | `imageRadius` |

---

## Abstand

| Feld | Beschreibung |
|---|---|
| **Element-Innenabstand (px)** | Erbt nicht — verwendet Thema-Standard |
| **Element-Außenabstand (px)** | Außenabstand |
| **Mindesthöhe (px)** | Mindesthöhe |

---

## Hintergrund & Rahmen

| Feld | Beschreibung |
|---|---|
| **Hintergrundfarbe** | Untermenü-Hintergrund |
| **Rahmenradius (px)** | Eckenrundung |
| **Hintergrund ausblenden** | Hintergrund ausblenden |
| **Schlagschatten** | Schlagschatten |

---

## Anzeige

| Feld | Erbt von Stufe 1 bei Leerfeld |
|---|---|
| **Anzeigelayout** | `displayLayout` |
| **Ausrichtung** | `align` |

---

## Trennlinie

| Feld | Erbt von Stufe 1 bei Leerfeld |
|---|---|
| **Trennlinienfarbe** | `dividerColor` |

---

## Beispiel

**Ziel:** Dunkles Hauptmenü mit weißem Text. Weißes Untermenü mit dunklem Text.

Nur 2 Felder bei Stufe 2-3 ausfüllen:
- Hintergrundfarbe = `#FFFFFF`
- Textfarbe = `#000000`
