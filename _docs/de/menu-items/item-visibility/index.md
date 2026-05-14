---
description: Wie Sie steuern, wann und für wen ein Menüelement in Navi+ sichtbar ist – veröffentlichter Zustand, Anmeldebedingungen und seitenbasiertes Ausblenden.
lang: de
layout: default
permalink: /de/docs/menu-items/item-visibility/
title: Sichtbarkeit & Bedingungen
---
# Sichtbarkeit & Bedingungen

Die **Veröffentlichen**-Sektion im Bearbeiten-Element-Panel ermöglicht es Ihnen, zu steuern, wer ein Element sieht, wann und auf welchen Seiten.

---

## Ist veröffentlicht

**Standard: ein (Element ist für alle sichtbar).**

Schalten Sie dies aus, um das Element im Live-Menü auszublenden, ohne es zu löschen. Das Element bleibt im Editor – Sie können es jederzeit wieder aktivieren.

**Verwenden, wenn:**
- Temporäres Ausblenden eines saisonalen Verkaufslinks.
- Vorbereitung eines Elements, bevor es live geht.
- Behalten eines Backup-Elements, ohne es zu löschen.

---

## Ausblenden, wenn angemeldet

Wenn aktiviert, ist das Element **nur für Besucher sichtbar, die nicht angemeldet sind**.

**Verwenden für:**
- Einen "Anmelden"-Button – Kunden, die bereits angemeldet sind, benötigen ihn nicht.
- Einen "Konto erstellen"-Link.

---

## Nur anzeigen, wenn angemeldet

Wenn aktiviert, ist das Element **nur für angemeldete Kunden sichtbar**.

**Verwenden für:**
- "Mein Konto"-Link.
- Treuepunkte, Bestellhistorie.
- Funktionen, die für Mitglieder reserviert sind.

---

## Auf bestimmten Seitentypen ausblenden (hidepages)

Verwenden Sie das `hidepages`-Attribut in **Erweitert → Attribute**, um ein Element auf bestimmten Seitentypen auszublenden.

**Syntax:**

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Wert | Auf welchen Seiten ausgeblendet |
|---|---|
| `index` | Startseite |
| `products` | Produktdetailseiten |
| `collections` | Sammlungs-/Kategorieseiten |
| `pages` | Statische Seiten (Über, Kontakt…) |
| `blogs` | Blog-Listen- und Beitragsseiten |
| `others` | Jede Seite, die nicht in den oben genannten Kategorien ist |

Trennen Sie mehrere Werte mit `|`, keine Leerzeichen.

**Beispiel:** Blenden Sie einen "Jetzt kaufen"-Button auf der Startseite und Blogseiten aus:

```
hidepages=index|blogs
```

---

## Nach Gerät ausblenden (Mobil / Desktop)

> **Wichtig:** Navi+ hat keinen pro-Element-Mobil-/Desktop-Umschalter. Die Geräteausrichtung wird auf **Menüebene** gesteuert, nicht auf Elementebene.

**Der richtige Ansatz:**

- Gehen Sie zum **Veröffentlichen**-Tab des Menüs → schalten Sie **Mobil** und **Desktop** für das gesamte Menü um.
- Erstellen Sie zwei separate Menüs – eines für Mobilgeräte, eines für Desktop – und setzen Sie den Geräteumschalter für jedes.

**Pro-Element-Workaround (falls wirklich benötigt):**  
Verwenden Sie **Erweitert → CSS** mit einer Medienabfrage:

```css
/* Blenden Sie dieses Element nur auf Mobilgeräten aus */
@media (max-width: 767px) { display: none !important; }

/* Blenden Sie dieses Element nur auf Desktop aus */
@media (min-width: 768px) { display: none !important; }
```

---

## Zusammenfassung

| Bedingung | Wie man es einstellt |
|---|---|
| Vollständig ausblenden | Ist veröffentlicht → aus |
| Ausblenden von angemeldeten Benutzern | Ausblenden, wenn angemeldet → ein |
| Ausblenden von Gästen | Nur anzeigen, wenn angemeldet → ein |
| Auf der Startseite ausblenden | Attribute: `hidepages=index` |
| Auf Mobilgeräten ausblenden | CSS: `@media (max-width: 767px) { display: none !important; }` |
| Auf Desktop ausblenden | CSS: `@media (min-width: 768px) { display: none !important; }` |
