---
description: Was ein Menüelement in Navi+ ist, die verfügbaren Elementarten und die vollständige Feldstruktur im Bearbeiten-Element-Panel.
lang: de
layout: default
permalink: /de/docs/menu-items/item-overview/
title: Artikelübersicht
---
# Artikelübersicht

## Was ist ein Menüelement?

Jede Zeile in einer Menüliste ist ein **Element**. Ein Element ist die kleinste Einheit in Navi+ — es kann ein Navigationslink, eine Gruppenüberschrift, ein leerer Abstandshalter oder ein Tab-Trenner sein.

Mehrere übereinander gestapelte Elemente bilden ein Menü. Das Menü wird dann für Besucher auf Ihrer Website angezeigt.

---

## Elementarten

Wenn Sie ein neues Element hinzufügen, wählen Sie seine **Art**. Die Art bestimmt, wie das Element aussieht und was es tut.

| Art | Beschreibung | Wann zu verwenden |
|---|---|---|
| **Icon / Text** | Standardelement mit einem Icon und Label | Regelmäßige Navigationslinks |
| **Big Image / Text** | Großes Kachel mit einem vollflächigen Bild und überlagertem Text | Kategoriebanner, hervorgehobene Produktbilder |
| **Gruppentitel** | Abschnittsüberschrift — kein Link | Visuelle Gruppierung der darunter liegenden Elemente |
| **Leerer Raum** | Transparente Lücke | Abstände und Layout-Ausrichtung |
| **Tab-Markierung** | Markiert den Beginn eines neuen Tabs | Teilt das Menü in horizontale Tabs |
| **Benutzerdefiniertes HTML** | Beliebiges HTML einbetten | Benutzerdefinierte Widgets, spezielle Banner |

---

## Feldstruktur

Klicken Sie auf ein Element, um das Bearbeiten-Element-Panel zu öffnen. Es ist in diese Abschnitte organisiert:

```
┌─────────────────────────────────────────┐
│  MEDIEN                                 │
│    Icon  |  Bild                       │
├─────────────────────────────────────────┤
│  GRUNDINFORMATIONEN                     │
│    Text · Link zu · HTML                │
│    Beschreibung · Trennzeichen · Badge  │
├─────────────────────────────────────────┤
│  LAYOUT                                 │
│    Anzeige-Layout · Breite · Position   │
│    Höhe fix                             │
├─────────────────────────────────────────┤
│  BENUTZEROBERFLÄCHE (UI)               │
│    Klassennamen · Textstil              │
│    Icon/Bild-Stil · Hintergrund         │
│    Abstände · Ausrichten                │
├─────────────────────────────────────────┤
│  ERWEITERT                              │
│    Animation · CSS · Attribute          │
├─────────────────────────────────────────┤
│  VERÖFFENTLICHEN                        │
│    Ist veröffentlicht · Anmeldebedingungen│
└─────────────────────────────────────────┘
```

---

## Bearbeitungsworkflow

1. Klicken Sie auf ein Element im Menübaum → das Bearbeiten-Element-Panel öffnet sich.
2. Ändern Sie die benötigten Felder.
3. Drücken Sie **Aktualisieren**, um die Änderungen an diesem Element anzuwenden.
4. Drücken Sie **Speichern** (`Ctrl+S` / `Cmd+S`), um das gesamte Menü zu speichern und den Simulator zu aktualisieren.

> Wenn Sie Aktualisieren gedrückt haben, aber noch nicht gespeichert haben, werden die Änderungen nicht in Ihr Live-Menü geschrieben. Halten Sie die Umschalttaste gedrückt, während Sie auf Speichern drücken, um zu speichern und den Simulator sofort neu zu laden.
