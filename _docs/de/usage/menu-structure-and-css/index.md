---
description: 'Kurze Anleitung zur Gestaltung des Menüs mit **Benutzerdefiniertem CSS für dieses Menü**, **Wiederverwendbaren Klassen (CSS)** und dem Standard-HTML. Das Menü hat **drei Ebenen**: Hauptleiste...'
lang: de
layout: default
permalink: /de/docs/usage/menu-structure-and-css/
title: Menüstruktur und CSS
---
# Menüstruktur und CSS

Kurze Anleitung zur Gestaltung des Menüs mit **Benutzerdefiniertem CSS für dieses Menü**, **Wiederverwendbaren Klassen (CSS)** und dem Standard-HTML. Das Menü hat **drei Ebenen**: Hauptleiste, Untermenü, geschachteltes Untermenü.

> **Hinweis:** Diese Demo behandelt ein **Slide / Standardmenü**. Die Struktur ist für die meisten Menütpyen gleich; TABBAR und Mega Menu können geringfügige Unterschiede aufweisen — verwenden Sie DevTools auf der Live-Seite, um dies zu bestätigen.

***

### Benutzerdefiniertes CSS — was zu tippen ist

In **Erweitert → Benutzerdefiniertes CSS für dieses Menü** fügt Navi+ **ein Präfix hinzu** (einschließlich `#SF-…` und Menübereich). Schreiben Sie **nur normale Selektoren** — tippen Sie **nicht** `#SF-12345678` selbst.

````css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

Verwenden Sie **`#SF-…` manuell** nur, wenn Sie **dieses Feld nicht** verwenden (zum Beispiel CSS in der Theme-Datei).

**Globale Stylesheet / CSS** ist ein **separates** Feld: es gilt für die **gesamte Seite** und ist nicht auf ein Menü beschränkt — verwenden Sie es mit Bedacht.

**Wiederverwendbare Klassen (CSS):** definieren Sie `.yourClass { … }` in der Wiederverwendbaren Tabelle und weisen Sie die Klasse den Elementen zu — die Regeln bleiben im selben internen CSS-Bundle; Sie müssen `#SF-…` nicht in das Feld einfügen. Die Klasse erscheint auf dem **`li`**.

Tun Sie **nicht** den Inhalt in ein `<style>` Tag im Feld einfügen — nur einfaches CSS.

***

### Detaillierte Demo: ein dreistufiger Zweig (Symbol, Bild, Name, Beschreibung)

Beispielbezeichnungen: **Shop** (Ebene 1: **Symbol** + Name + Beschreibung) → **Kleidung** (Ebene 2: **Bild** + Name) → **T-Shirts** (Ebene 3: **Symbol** + Name + Beschreibung). Dies zeigt **beide Medientypen** und **Beschreibung**.

Das gesamte Menü sitzt in einem Block:

````html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` ist die Menü **Einbettungs-ID** — sichtbar im Navi+ Dashboard (das blaue Abzeichen neben dem Menütitel) und in DevTools auf der Live-Seite.

#### Reihenfolge innerhalb jedes `div.inner` (Laufzeit)

1. **`span.arrow`** — Pfeil (Untermenü / mobil, hängt vom Menütyp ab).
2. *(Optional)* **`span.cart_count`** — nur wenn das Element das Warenkorb-Abzeichen mit Anzahl verwendet.
3. **Medien — eines von:**
   * **Symbol (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Bild:** `div.image-border` → `span.image-box` → `span.image` → `img`\
     \&#xNAN;*Hinweis:* Wenn das Element **ein Bild hat**, zeigt die App **das Bild** an und rendert das Symbol für diese Zeile nicht.
4. **`div.info`** → **`div.flexcol`** → **`span.name`** (Bezeichnung) → **`div.description`** *(nur wenn Sie die Beschreibung im Editor ausfüllen)*.
5. *(Optional / SEO)* Symbol oder Bild kann in **`a[href]`** gewickelt sein — Sie können `<a>…</a>` um `span.icon` oder den Bildblock in DevTools sehen.

#### `li` Klassen erklärt

| Klasse                             | Bedeutung                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | Tiefe dieses Elements                                             |
| `is-parent-top`                   | Level-1 Element, das Kinder hat                                 |
| `is-parent`                       | Level-2+ Element, das Kinder hat                                |
| `data-name="…"`                   | Elementbezeichnung (Attribut, nützlich für CSS `[data-name]` Selektoren) |

#### Vollständige HTML-Demo (veranschaulichende Klassen / URLs)

````html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Shop">
      <!-- EBENE 1: Symbol + Name + Beschreibung -->
      <div class="inner inner-level1">
        <span class="arrow"></span>
        <!-- <span class="cart_count">3</span>  ← Warenkorb-Abzeichen nur -->

        <!-- SYMBOL: Remix Icon (ri-…) -->
        <span class="icon">
          <i class="ri-store-2-line"></i>
        </span>

        <div class="info">
          <div class="flexcol">
            <span class="name">Shop</span>
            <div class="description">Durchsuchen Sie alle Kategorien</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Kleidung">
          <!-- EBENE 2: Bild + Name (keine Beschreibung) -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- BILD: wenn gesetzt, wird das Symbol nicht gerendert -->
            <div class="image-border">
              <span class="image-box">
                <span class="image">
                  <img
                    src="https://cdn.shopify.com/…/clothing.jpg"
                    alt="Clothing"
                    title="Clothing"
                    loading="lazy"
                    decoding="async">
                </span>
              </span>
            </div>

            <div class="info">
              <div class="flexcol">
                <span class="name">Kleidung</span>
                <!-- keine .description, wenn die Beschreibung im Editor leer ist -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="T-Shirts">
              <!-- EBENE 3: Symbol + Name + Beschreibung -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">T-Shirts</span>
                    <div class="description">Neue Kollektion</div>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </li>

      </ul>
    </li>

  </ul>
</div>
```

#### Medien-Snippets (zur Referenz)

**Nur Symbol (kein Bild):**

````html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**Nur Bild (Bild-URL auf dem Element gesetzt):**

````html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### Selektorbeispiele für Benutzerdefiniertes CSS (im Navi+ Feld — tippen Sie nicht `#SF-…`)

````css
/* Pfeil */
.inner-level1 .arrow { }

/* Symbol (jede Ebene) */
.inner-level2 .icon i { font-size: 20px; }

/* Bild */
.inner-level2 .image img { border-radius: 8px; }

/* Titel und Beschreibung */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }

/* Nach Elementname zielen */
[data-name="Shop"] .name { color: red; }
```

**Denken Sie daran:** Ebene 2 / 3 Untermenüs sitzen **innerhalb** des übergeordneten **`li`**, **nach** dem `div.inner` des übergeordneten Elements — nicht als direkte Kinder von `ul.navigation`.

**Dasselbe Zweig, Textdiagramm:**

```
Shop              ← Ebene 1 (Hauptleiste)
  └─ Kleidung     ← Ebene 2 (erstes Untermenü)
        └─ T-Shirts ← Ebene 3 (geschachteltes Untermenü)
```

***

### Schnelle Referenz (vorgeschlagene Klassen)

| Ebene | Zeile (`li`) | Inhaltswrapper | Nächstes Untermenü                        |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1     | `level-1`  | `.inner-level1` | `ul.children[menulevel="2"]`        |
| 2     | `level-2`  | `.inner-level2` | `ul.children[menulevel="3"]` wenn vorhanden |
| 3     | `level-3`  | `.inner-level3` | —                                   |

`menulevel="2"` / `"3"` ist der Index von **diesem** Untermenü-Panel — nicht dasselbe wie `level-1` bei einem Element auf oberster Ebene.

***

### Schnelle Tipps

* Zielen Sie auf **eine Tiefe** mit `.inner-level1`, `.inner-level2`, `.inner-level3` anstelle von nur `.inner`.
* Stylen Sie ein **ganzes Panel** (Hintergrund, Radius): `ul.children[menulevel="2"]` oder `[menulevel="3"]`.
* Text: `.info` → `.flexcol` → `.name`, `.description`.
* Symbol: `.icon` oder `.icon i` — Bild: `.image-border`, `.image img` (siehe detaillierte Demo oben).
* Pfeil: `.arrow` (normalerweise zuerst innerhalb von `.inner`).
* Zielen Sie auf ein bestimmtes Element nach Namen: `[data-name="Home"] .name { … }`.

***

### Klassen, die im Shop fehlen?

Leeren Sie den Theme-Cache, veröffentlichen Sie das Menü erneut oder überprüfen Sie die Skriptversion. Verwenden Sie DevTools, um die Klassennamen auf der Live-Seite zu bestätigen.

***

Support-Dokumentation — **Navi+**
