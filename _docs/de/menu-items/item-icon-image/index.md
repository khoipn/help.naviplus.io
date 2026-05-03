---
description: So fügen Sie integrierte Icons und eigene Bilder zu Menüelementen in Navi+ hinzu und passen sie an.
layout: default
permalink: /de/docs/menu-items/item-icon-image/
title: Icons & Bilder
---
# Icons & Bilder

Jedes Element kann ein visuelles Element haben — entweder ein **integriertes Icon** oder ein **eigenes Bild**. Sie können jeweils nur eines verwenden, nicht beide gleichzeitig.

---

## Integriertes Icon

Icons sind Vektorsymbole aus der integrierten **Remixicon**-Bibliothek. Sie sind in jeder Größe scharf und erfordern keinen Dateiupload.

### Hinzufügen

1. Klicken Sie im Bearbeitungspanel auf die Schaltfläche **Icon**.
2. Das Icon-Suchfeld öffnet sich — geben Sie ein Stichwort ein (z.B. `home`, `cart`, `phone`, `search`).
3. Klicken Sie auf ein Icon, um es auszuwählen — eine Vorschau erscheint sofort am Element.
4. Klicken Sie auf **×**, um das aktuelle Icon zu entfernen.

### Wann Icons verwenden

- Elemente in einer **Tab-Leiste** — Icons sind die Standardmethode zum Beschriften von Tabs.
- Wenn Sie ein sauberes, einheitliches Erscheinungsbild möchten.
- Wenn Sie noch keine eigenen Bilder haben.

---

## Eigenes Bild

Verwenden Sie Ihr eigenes Foto, Logo oder Grafik anstelle eines Bibliotheks-Icons.

> **Starter-Plan:** Eigene Bilder werden nicht unterstützt — verwenden Sie stattdessen integrierte Icons.

### Option A — Aus Galerie hochladen *(Business / Elite)*

1. Klicken Sie auf die Schaltfläche **Bild** im Bearbeitungspanel.
2. Klicken Sie auf **Galerie** → der Upload-Dialog öffnet sich.
3. Wählen oder laden Sie ein Bild hoch (JPG, PNG, GIF).
4. Bestätigen — die Bild-URL wird automatisch ausgefüllt.

### Option B — Bild-URL einfügen *(Elite)*

1. Klicken Sie auf die Schaltfläche **Bild**.
2. Fügen Sie die vollständige Bild-URL in das URL-Feld ein.
3. Klicken Sie auf **Aktualisieren**.

### Bildtipps

- Verwenden Sie **quadratische (1:1)** Bilder für Tab-Leisten-Icons.
- Verwenden Sie **Querformat**-Bilder für Großbild-Elemente.
- **PNG mit transparentem Hintergrund** eignet sich am besten für Logos und Symbole.
- Halten Sie die Dateigröße klein — große Bilder verlangsamen das Menü auf Mobilgeräten.
- Elite konvertiert Bilder automatisch in WebP und normalisiert Abmessungen.

---

## Darstellungslayout

Nach dem Hinzufügen eines Icons oder Bildes wählen Sie in **Layout → Darstellungslayout**, wie Icon/Bild und Text angeordnet werden:

| Option | Layout |
|---|---|
| **Automatisch** | Folgt dem Menütyp-Standard |
| **Oben-Unten** | Icon/Bild oben, Text unten |
| **Links-Rechts** | Icon/Bild links, Text rechts |
| **Unten-Oben** | Text oben, Icon/Bild unten |
| **Rechts-Links** | Text links, Icon/Bild rechts |
| **Nur Icon/Bild** | Nur Icon/Bild — Text ausgeblendet |
| **Nur Text** | Nur Text — Icon/Bild ausgeblendet |

---

## Icon oder Bild gestalten

Gehen Sie zu **Interface → Icon / Bildstil**, um das Erscheinungsbild anzupassen:

| Einstellung | Effekt |
|---|---|
| **Icon-Farbe** | Vektorfarbe des Icons ändern (Hex). Gilt nicht für Bilddateien. |
| **Größe (px)** | Anzeigegröße des Icons oder Bildes |
| **Container** | Hintergrundfarbe des umgebenden Rahmens |
| **Abstand (px)** | Abstand zwischen Icon und Container-Rahmen |
| **Kurve (px)** | Eckenradius des Containers — `50` für Kreis |

**Beispiel — weißes Icon in rundem blauen Rahmen:**

```
Icon-Farbe:  #FFFFFF
Container:   #0066CC
Abstand:     10
Kurve:       50
```
