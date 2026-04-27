---
description: Verstehen Sie das dreistufige Stil-Vererbungssystem von Navi+ — wie Stile von Stufe 1 zu Stufe 2-3 kaskadieren und Pro-Element-Überschreibungen funktionieren.
layout: default
permalink: /docs/design/design-overview/
title: Design-Übersicht — Vererbung & Überschreibung
---
# Design-Übersicht — Vererbung & Überschreibung

Navi+ verwendet ein **dreistufiges Stilsystem**. Wenn Sie dies verstehen, können Sie Ihr Menü effizient gestalten.

---

## Drei Stufen

```
┌─────────────────────────────────────────────────────┐
│  STUFE 1  (Design → Stufe 1)                        │
│  Gilt für alle Hauptmenüelemente                    │
│  Dies ist der globale Standard für das gesamte Menü │
└───────────────────┬─────────────────────────────────┘
                    │  Stufe 2-3 erbt bei Leerzeichen
┌───────────────────▼─────────────────────────────────┐
│  STUFE 2-3  (Design → Stufe 2-3)                    │
│  Gilt für Untermenüs / Dropdowns                    │
│  Leer = identisch mit Stufe 1                       │
└───────────────────┬─────────────────────────────────┘
                    │  Pro Element überschreibt alles
┌───────────────────▼─────────────────────────────────┐
│  PRO ELEMENT  (Element bearbeiten → Interface)      │
│  Pro-Element-Einstellungen für einzelne Elemente    │
│  Überschreibt Stufe 1 und Stufe 2-3 vollständig     │
└─────────────────────────────────────────────────────┘
```

---

## Vererbungsregeln

**Stufe 2-3 erbt von Stufe 1** für alle leeren Felder:

| Stufe 2-3 Feld | Erbt von Stufe 1 |
|---|---|
| Textfarbe | Textfarbe |
| Schriftgröße | Schriftgröße |
| Schriftstärke | Schriftstärke |
| Symbolfarbe | Symbolfarbe |
| Symbolgröße | Symbolgröße |
| Anzeigelayout | Anzeigelayout |
| Ausrichtung | Ausrichtung |
| Trennlinienfarbe | Trennlinie (global) |

Wenn Sie nur Stufe 1 konfigurieren, folgen die Untermenüs automatisch. Gehen Sie nur zu Stufe 2-3, wenn Sie möchten, dass Untermenüs **anders** aussehen.

---

## Pro-Element-Überschreibung

In **Element bearbeiten → Interface** angewendete Einstellungen überschreiben Stufe 1 und Stufe 2-3 nur für dieses Element.

Um eine Überschreibung zu entfernen: Feld in Element bearbeiten leeren.

---

## Beispiel

**Ziel:** Alle 5 Elemente sind weißer Text, außer „Sale", das rot ist.

1. Design → Stufe 1 → Textfarbe = `#FFFFFF`
2. Element bearbeiten → „Sale" → Interface → Textfarbe = `#FF0000`

---

## Mobil | Desktop Syntax

Einige Abstandsfelder unterstützen unterschiedliche Werte:

```
8 16 8 16              →  gleich auf beiden Geräten
8 8 8 8 | 12 24 12 24  →  links: Mobil, rechts: Desktop
```
