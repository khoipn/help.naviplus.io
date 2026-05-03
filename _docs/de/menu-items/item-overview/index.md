---
description: Was ein Menüelement in Navi+ ist, die verfügbaren Elementarten und die vollständige Feldstruktur im Bearbeitungspanel.
layout: default
permalink: /de/docs/menu-items/item-overview/
title: Element-Übersicht
---
# Element-Übersicht

## Was ist ein Menüelement?

Jede Zeile in einer Menüliste ist ein **Element**. Ein Element ist die kleinste Einheit in Navi+ — es kann ein Navigationslink, eine Gruppenüberschrift, ein leerer Abstandhalter oder ein Tab-Trennzeichen sein.

Mehrere übereinander gestapelte Elemente bilden ein Menü. Das Menü wird dann für Besucher auf Ihrer Website gerendert.

---

## Elementarten

Wenn Sie ein neues Element hinzufügen, wählen Sie seine **Art**. Die Art bestimmt, wie das Element aussieht und was es tut.

| Art | Beschreibung | Wann verwenden |
|---|---|---|
| **Icon / Text** | Standardelement mit Icon und Beschriftung | Normale Navigationslinks |
| **Großbild / Text** | Große Kachel mit Vollbild-Bild und überlagertem Text | Kategorie-Banner, Produkt-Highlight-Bilder |
| **Gruppentitel** | Abschnittsüberschrift — kein Link | Elemente darunter visuell gruppieren |
| **Leerzeichen** | Transparente Lücke | Abstands- und Layout-Ausrichtung |
| **Tab-Marker** | Markiert den Beginn eines neuen Tabs | Menü in horizontale Tabs aufteilen |
| **Benutzerdefiniertes HTML** | Beliebiges HTML einbetten | Eigene Widgets, spezielle Banner |

---

## Feldstruktur

Klicken Sie auf ein Element, um das Bearbeitungspanel zu öffnen. Es ist in diese Abschnitte unterteilt:

```
┌─────────────────────────────────────────┐
│  MEDIEN                                 │
│    Icon  |  Bild                        │
├─────────────────────────────────────────┤
│  GRUNDINFORMATIONEN                     │
│    Text · Verknüpfung zu · HTML         │
│    Beschreibung · Trennlinie · Abzeichen│
├─────────────────────────────────────────┤
│  LAYOUT                                 │
│    Anzeigelayout · Breite · Position    │
│    Höhe fixieren                        │
├─────────────────────────────────────────┤
│  INTERFACE (UI)                         │
│    Klassen · Textstil                   │
│    Icon/Bild-Stil · Hintergrund         │
│    Abstand · Ausrichtung                │
├─────────────────────────────────────────┤
│  ERWEITERT                              │
│    Animation · CSS · Attribute          │
├─────────────────────────────────────────┤
│  VERÖFFENTLICHEN                        │
│    Veröffentlicht · Login-Bedingungen   │
└─────────────────────────────────────────┘
```

---

## Bearbeitungs-Workflow

1. Klicken Sie auf ein Element im Menübaum → das Bearbeitungspanel öffnet sich.
2. Ändern Sie die benötigten Felder.
3. Drücken Sie **Aktualisieren**, um Änderungen an diesem Element anzuwenden.
4. Drücken Sie **Speichern** (`Ctrl+S` / `Cmd+S`), um das gesamte Menü zu speichern und den Simulator zu aktualisieren.

> Wenn Sie Aktualisieren gedrückt, aber noch nicht gespeichert haben, werden die Änderungen nicht in Ihr Live-Menü geschrieben. Halten Sie Shift gedrückt, während Sie Speichern drücken, um zu speichern und den Simulator sofort neu zu laden.
