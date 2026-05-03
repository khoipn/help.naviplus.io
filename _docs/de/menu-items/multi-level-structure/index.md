---
description: Wie Sie übergeordnete-untergeordnete Verschachtelung und Tab Slide verwenden, um Navi+ Menüelemente in mehreren Ebenen zu organisieren.
layout: default
permalink: /de/docs/menu-items/multi-level-structure/
title: Mehrstufige Struktur
---
# Mehrstufige Struktur

Navi+ unterstützt zwei Methoden zur Tiefenorganisation von Menüinhalten: **Eltern-Kind-Verschachtelung** (durch Ziehen nach links/rechts einrücken) und **Tab Slide** (Menü in horizontal wechselnde Bereiche aufteilen). Sie können beide Methoden einzeln oder kombiniert verwenden.

---

## Option 1 — Eltern-Kind-Verschachtelung (durch Ziehen einrücken)

Verschachtelung wandelt eine flache Liste in eine gestufte Hierarchie um. Ein übergeordnetes Element kann erweitert werden, um seine untergeordneten Elemente anzuzeigen.

```
Home                        ← Ebene 1 (Elternelement)
  Collections               ← Ebene 2 (Kind)
    New Arrivals            ← Ebene 3 (Enkelkind)
    Sale
  Lookbook
Contact                     ← Ebene 1 (Elternelement, keine Kinder)
```

### So geht's

**Per Drag & Drop**

1. Fahren Sie mit der Maus über das Element, das Sie verschachteln möchten.
2. Ziehen Sie es **nach rechts** — es rastet als Kindelement unter dem darüber befindlichen Element ein.
3. Ziehen Sie es **nach links**, um es wieder auf die Elternebene zu verschieben.

**Per Tastenkürzel**

1. Klicken Sie auf das Element, um es auszuwählen.
2. Drücken Sie `→` (Rechtspfeil) zum Einrücken — das Element wird zum Kind des darüber befindlichen Elements.
3. Drücken Sie `←` (Linkspfeil) zum Ausrücken — das Element wandert eine Ebene nach oben.

### Maximale Verschachtelungstiefe nach Menütyp

Die Tiefenbegrenzung hängt vom **Menütyp** ab, nicht vom Tarif.

| Menütyp | Max. Ebenen |
|---|:---:|
| Mobile Grid | 1 (keine Verschachtelung) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> Wenn Sie versuchen, über das Limit hinaus einzurücken, blockiert der Editor dies und zeigt eine Meldung an.

---

## Option 2 — Tab Slide (horizontale Bereiche)

Tab Slide unterteilt Elemente in horizontale Registerkarten. Anstatt sich wie Kindelemente nach unten zu erweitern, zeigt jede Registerkarte eine separate Gruppe von Elementen.

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← Tab-Überschriften
├─────────────────────────────────┤
│  • Collections                  │
│  • New Arrivals                 │  ← Inhalt der aktiven Registerkarte
│  • Sale                         │
└─────────────────────────────────┘
```

### So geht's

1. Fügen Sie ein neues Element mit der Art **Tab Marker** hinzu.
2. Legen Sie die Tab Marker-Beschriftung fest — dies wird zum Tab-Überschriftentext (z. B. "Shop").
3. Fügen Sie Elemente unterhalb des Tab Markers hinzu — sie gehören zum Inhaltsbereich dieser Registerkarte.
4. Wiederholen: Fügen Sie den nächsten Tab Marker und dann Elemente für diese Registerkarte hinzu.

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

## Welche Methode verwenden?

| Ziel | Verwenden |
|---|---|
| Unterkategorien unter einem Elternelement anzeigen | **Eltern-Kind-Verschachtelung (Option 1)** |
| Unabhängige Bereiche nebeneinander gruppieren | **Tab Slide (Option 2)** |
| Menü mit vielen Elementen in mehreren Kategorien | **Tab Slide** |
| Tiefe Drill-Down-Navigation (Kategorie → Unterkategorie) | **Eltern-Kind-Verschachtelung** |
| Äußere Tabs mit verschachtelten Elementen in jedem Tab | **Beides** |

---

## Wichtige Einschränkungen

- **Tab Marker können nicht in einem anderen Element verschachtelt werden.** Das Einrücken eines Tab Markers ist blockiert.
- **Elemente innerhalb eines Tabs können weiterhin Kindelemente haben** — vorbehaltlich der Tiefenbegrenzung des Menütyps.
- **Mobile Grid unterstützt keine Verschachtelung** — verwenden Sie Tab Slide für Gruppierungen.
- **Tabs neu anordnen** durch Ziehen eines Tab Markers nach oben oder unten — die darunter befindlichen Elemente folgen mit.
