---
description: So erstellen Sie eine Eltern-Kind-Verschachtelung und verwenden Sie Tab Slide, um Navi+ Menüelemente in mehrstufige Strukturen zu organisieren.
lang: de
layout: default
permalink: /de/docs/menu-items/multi-level-structure/
title: Mehrstufige Struktur
---
# Mehrstufige Struktur

Navi+ unterstützt zwei Möglichkeiten, um Menüinhalte in die Tiefe zu organisieren: **Eltern-Kind-Verschachtelung** (nach links/rechts ziehen, um einzurücken) und **Tab Slide** (das Menü in horizontale Wechselzonen aufteilen). Sie können entweder Ansatz verwenden oder beide kombinieren.

---

## Option 1 — Eltern-Kind-Verschachtelung (einrücken durch Ziehen)

Die Verschachtelung verwandelt eine flache Liste in eine gestufte Hierarchie. Ein Elternelement kann erweitert werden, um seine Kinder anzuzeigen.

```
Home                        ← Ebene 1 (Eltern)
  Collections               ← Ebene 2 (Kind)
    New Arrivals            ← Ebene 3 (Enkel)
    Sale
  Lookbook
Contact                     ← Ebene 1 (Eltern, keine Kinder)
```

### So geht's

**Durch Ziehen und Ablegen**

1. Fahren Sie mit der Maus über das Element, das Sie verschachteln möchten.
2. Ziehen Sie es **nach rechts** — es wird unter dem darüber liegenden Element als Kind eingeklinkt.
3. Ziehen Sie es **nach links**, um es wieder auf die Elternebene zu verschieben.

**Durch Tastenkombination**

1. Klicken Sie auf das Element, um es auszuwählen.
2. Drücken Sie `→` (rechte Pfeiltaste), um einzurücken — das Element wird ein Kind des darüber liegenden Elements.
3. Drücken Sie `←` (linke Pfeiltaste), um es wieder nach oben zu verschieben — das Element bewegt sich um eine Ebene nach oben.

### Maximale Verschachtelungstiefe nach Menütyp

Die Tiefenbegrenzung hängt vom **Menütyp** ab, nicht vom Plan.

| Menütyp | Max. Ebenen |
|---|:---:|
| Mobile Grid | 1 (keine Verschachtelung) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> Wenn Sie versuchen, über das Limit hinaus einzurücken, wird der Editor dies blockieren und eine Nachricht anzeigen.

---

## Option 2 — Tab Slide (horizontale Zonen)

Tab Slide teilt Elemente in horizontale Tabs. Anstatt nach unten wie Kinder zu expandieren, zeigt jeder Tab eine separate Menge von Elementen.

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← Tab-Header
├─────────────────────────────────┤
│  • Collections                  │
│  • New Arrivals                 │  ← Inhalt des aktiven Tabs
│  • Sale                         │
└─────────────────────────────────┘
```

### So geht's

1. Fügen Sie ein neues Element mit der Art **Tab Marker** hinzu.
2. Setzen Sie das Tab Marker-Label — dies wird der Text des Tab-Headers (z.B. "Shop").
3. Fügen Sie Elemente unter dem Tab Marker hinzu — sie gehören zum Inhaltsbereich dieses Tabs.
4. Wiederholen: Fügen Sie den nächsten Tab Marker hinzu und dann Elemente für diesen Tab.

```
[Tab Marker]  "Shop"
  Collections
  New Arrivals
  Sale

[Tab Marker]  "Pages"
  About us
  Contact

[Tab Marker]  "More"
  Blog
  FAQ
```

---

## Welchen Ansatz verwenden?

| Ziel | Verwendung |
|---|---|
| Unterkategorien unter einem Elternelement anzeigen | **Eltern-Kind-Verschachtelung (Option 1)** |
| Unabhängige Abschnitte nebeneinander gruppieren | **Tab Slide (Option 2)** |
| Menü mit vielen Elementen über mehrere Kategorien | **Tab Slide** |
| Tiefe Navigation (Kategorie → Unterkategorie) | **Eltern-Kind-Verschachtelung** |
| Äußere Tabs mit verschachtelten Elementen in jedem Tab | **Beide** |

---

## Grenzen, die Sie beachten sollten

- **Tab Marker können nicht in ein anderes Element verschachtelt werden.** Das Einrücken eines Tab Markers ist blockiert.
- **Elemente innerhalb eines Tabs können weiterhin Kinder haben** — vorbehaltlich der Tiefenbegrenzung des Menütyps.
- **Mobile Grid unterstützt keine Verschachtelung** — verwenden Sie Tab Slide, wenn Sie Gruppierungen benötigen.
- **Tabs neu anordnen** durch Ziehen eines Tab Markers nach oben oder unten — die darunter liegenden Elemente folgen.
