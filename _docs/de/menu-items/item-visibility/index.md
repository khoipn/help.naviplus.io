---
description: So steuern Sie, wann und für wen ein Menüelement in Navi+ sichtbar ist — Veröffentlichungsstatus, Login-Bedingungen und seitenbasiertes Ausblenden.
layout: default
permalink: /de/docs/menu-items/item-visibility/
title: Sichtbarkeit & Bedingungen
---
# Sichtbarkeit & Bedingungen

Der Abschnitt **Veröffentlichen** im Bearbeitungspanel ermöglicht Ihnen zu steuern, wer ein Element sieht, wann und auf welchen Seiten.

---

## Veröffentlicht

**Standard: an (Element ist für alle sichtbar).**

Deaktivieren Sie dies, um das Element im Live-Menü auszublenden, ohne es zu löschen. Das Element bleibt im Editor — Sie können es jederzeit wieder aktivieren.

**Verwenden wenn:**
- Ein saisonales Angebot vorübergehend ausgeblendet werden soll.
- Ein Element vorbereitet wird, bevor es live geht.
- Ein Backup-Element ohne Löschen aufbewahrt wird.

---

## Ausblenden wenn eingeloggt

Wenn aktiviert, ist das Element **nur für nicht eingeloggte Besucher sichtbar**.

**Verwenden für:**
- Einen „Einloggen"-Button — Kunden, die bereits eingeloggt sind, brauchen ihn nicht.
- Einen „Konto erstellen"-Link.

---

## Nur anzeigen wenn eingeloggt

Wenn aktiviert, ist das Element **nur für eingeloggte Kunden sichtbar**.

**Verwenden für:**
- „Mein Konto"-Link.
- Treuepunkte, Bestellhistorie.
- Funktionen für Mitglieder.

---

## Auf bestimmten Seitentypen ausblenden (hidepages)

Verwenden Sie das Attribut `hidepages` unter **Erweitert → Attribute**, um ein Element auf bestimmten Seitentypen auszublenden.

**Syntax:**

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Wert | Seiten, auf denen ausgeblendet wird |
|---|---|
| `index` | Startseite |
| `products` | Produktdetailseiten |
| `collections` | Kollektions- / Kategorieseiten |
| `pages` | Statische Seiten (Über uns, Kontakt…) |
| `blogs` | Blog-Liste und Beitragsseiten |
| `others` | Jede Seite, die nicht in den obigen Kategorien ist |

Mehrere Werte mit `|` trennen, keine Leerzeichen.

**Beispiel:** „Jetzt kaufen"-Button auf der Startseite und Blog-Seiten ausblenden:

```
hidepages=index|blogs
```

---

## Nach Gerät ausblenden (Mobil / Desktop)

> **Wichtig:** Navi+ hat keinen Ein-/Aus-Schalter pro Element für Mobil/Desktop. Die Gerätesteuerung erfolgt auf **Menü-Ebene**, nicht auf Element-Ebene.

**Der richtige Ansatz:**
- Gehen Sie zum Tab **Veröffentlichen** des Menüs → schalten Sie **Mobil** und **Desktop** für das gesamte Menü um.
- Erstellen Sie zwei separate Menüs — eines für Mobil, eines für Desktop.

**Workaround pro Element (wenn wirklich nötig):**  
Verwenden Sie **Erweitert → CSS** mit einer Media Query:

```css
/* Nur auf Mobil ausblenden */
@media (max-width: 767px) { display: none !important; }

/* Nur auf Desktop ausblenden */
@media (min-width: 768px) { display: none !important; }
```

---

## Zusammenfassung

| Bedingung | Einstellung |
|---|---|
| Vollständig ausblenden | Veröffentlicht → aus |
| Vor eingeloggten Nutzern ausblenden | Ausblenden wenn eingeloggt → an |
| Vor Gästen ausblenden | Nur anzeigen wenn eingeloggt → an |
| Auf Startseite ausblenden | Attribute: `hidepages=index` |
| Auf Mobil ausblenden | CSS: `@media (max-width: 767px) { display: none !important; }` |
| Auf Desktop ausblenden | CSS: `@media (min-width: 768px) { display: none !important; }` |
