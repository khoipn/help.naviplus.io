---
description: Verstehen Sie das dreistufige Designvererbungssystem in Navi+ — wie Stile von Level 1 zu Level 2-3 zu per-Item-Überschreibungen kaskadieren.
lang: de
layout: default
permalink: /de/docs/design/design-overview/
title: Designübersicht — Vererbung & Überschreibung
---
# Designübersicht — Vererbung & Überschreibung

Navi+ verwendet ein **dreistufiges Stilsystem**. Das Verständnis davon ermöglicht es Ihnen, Ihr Menü effizient zu gestalten, ohne Einstellungen zu wiederholen.

---

## Drei Ebenen

```
┌─────────────────────────────────────────────────────┐
│  LEVEL 1  (Design → Level 1)                        │
│  Gilt für alle obersten Menüelemente                │
│  Dies ist der globale Standard für das gesamte Menü │
└───────────────────┬─────────────────────────────────┘
                    │  Level 2-3 erbt, wenn leer
┌───────────────────▼─────────────────────────────────┐
│  LEVEL 2-3  (Design → Level 2-3)                    │
│  Gilt für Untermenüs / Dropdowns                    │
│  Leer = gleich wie Level 1                            │
└───────────────────┬─────────────────────────────────┘
                    │  Per-Item überschreibt alles
┌───────────────────▼─────────────────────────────────┐
│  PER-ITEM  (Element bearbeiten → Schnittstelle)      │
│  Per-Item-Einstellungen für einzelne Elemente       │
│  Überschreibt Level 1 und Level 2-3 vollständig      │
└─────────────────────────────────────────────────────┘
```

---

## Vererbungsregeln

**Level 2-3 erbt von Level 1** für alle leeren Felder:

| Level 2-3 Feld | Erbt von Level 1 |
|---|---|
| Textfarbe | Textfarbe |
| Schriftgröße | Schriftgröße |
| Schriftgewicht | Schriftgewicht |
| Symbolfarbe | Symbolfarbe |
| Symbolgröße | Symbolgröße |
| Anzeige-Layout | Anzeige-Layout |
| Ausrichtung | Ausrichtung |
| Trennfarbe | Trennfarbe (global) |

Wenn Sie nur Level 1 konfigurieren, folgen Untermenüs automatisch. Gehen Sie nur zu Level 2-3, wenn Sie möchten, dass Untermenüs **anders** aussehen als das Hauptmenü.

---

## Per-Item-Überschreibung

Einstellungen, die auf ein bestimmtes Element in **Element bearbeiten → Schnittstelle** (Textfarbe, Symbolgröße, Hintergrund usw.) angewendet werden, überschreiben Level 1 und Level 2-3 nur für dieses Element. Andere Elemente sind nicht betroffen.

Um eine Überschreibung zu entfernen: Löschen Sie das Feld in Element bearbeiten — das Element kehrt zu Level 1/2-3 zurück.

---

## Beispiel

**Ziel:** Alle 5 Elemente haben weißen Text, außer "Sale", das rot ist.

1. Design → Level 1 → Textfarbe = `#FFFFFF`
2. Element bearbeiten → "Sale" → Schnittstelle → Textfarbe = `#FF0000`

Ergebnis: 4 Elemente bleiben weiß, "Sale" wird rot. Es ist nicht notwendig, jedes Element einzeln zu bearbeiten.

---

## Mobile | Desktop-Syntax

Einige Abstandsfelder unterstützen unterschiedliche Werte für Mobilgeräte und Desktop:

```
8 16 8 16             →  gleicher Wert auf beiden Geräten
8 8 8 8 | 12 24 12 24  →  links: mobil, rechts: desktop
```

Der Teil vor `|` gilt für Mobilgeräte; der Teil danach gilt für Desktop (≥768px).
