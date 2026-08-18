---
description: 'Kurzes Handbuch zum Formatieren des Menüs mit **Benutzerdefiniertes CSS für dieses Menü**, **Wiederverwendbare Klassen (CSS)** und dem Standard-HTML. Das Menü hat **drei Ebenen**: Hauptleiste...'
lang: de
layout: default
permalink: /de/docs/usage/menu-structure-and-css/
title: Menüstruktur und CSS
---
# Menüstruktur und CSS

Kurzes Handbuch zum Formatieren des Menüs mit **Benutzerdefiniertes CSS für dieses Menü**, **Wiederverwendbare Klassen (CSS)** und dem Standard-HTML. Das Menü hat **drei Ebenen**: Hauptleiste, Untermenü, verschachteltes Untermenü.

> **Hinweis:** Diese Demo behandelt ein **Slide / Standard-Menü**. Die Struktur ist für die meisten Menütypen gleich; TABBAR und Mega Menu können kleinere Unterschiede haben — verwenden Sie DevTools auf der Live-Seite zur Bestätigung.

***

### Benutzerdefiniertes CSS — Was Sie eingeben

In **Erweitert → Benutzerdefiniertes CSS für dieses Menü** fügt Navi+ ein Präfix hinzu (einschließlich `#SF-…` und Menübereich). Schreiben Sie **nur normale Selektoren** — geben Sie nicht **`#SF-12345678`** selbst ein.

```css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

**`&` = das Menü selbst** (den Container `#SF-…`). Es ist optional — aber es ist der saubere Weg, das gesamte Menü zu formatieren, und der einzige Weg, es innerhalb von `@media` zu tun:

```css
&              { background: #111; }        /* the menu container */
&:hover        { box-shadow: 0 4px 12px rgba(0,0,0,.15); }
& .inner-level1 { padding: 12px 16px; }     /* '& ' with a space = inside the menu, same as .inner-level1 */

/* Responsive — only on small screens */
@media (max-width: 768px) {
  & { padding: 6px; }
  .name { font-size: 13px; }
}
```

Sie **müssen nicht** `&` verwenden — CSS ohne sie funktioniert weiterhin genau wie zuvor (`.inner-level1 { … }` ist unverändert). `&` ist nur eine Abkürzung für „dieses Menü".

Verwenden Sie **`#SF-…` manuell** nur wenn Sie **dieses Feld nicht verwenden** (z.B. CSS in der Theme-Datei).

**Globales Stylesheet / CSS** ist ein **separates** Feld: es gilt für die **gesamte Website** und ist nicht auf ein Menü beschränkt — verwenden Sie mit Vorsicht.

**Wiederverwendbare Klassen (CSS):** definieren Sie `.yourClass { … }` in der Tabelle Wiederverwendbar und weisen Sie die Klasse Elementen zu — Regeln bleiben im gleichen internen CSS-Paket; Sie **müssen nicht** `#SF-…` ins Feld einfügen. Die Klasse erscheint auf dem **`li`**.

Wickeln Sie den Inhalt **nicht** in ein `<style>`-Tag im Feld — nur reines CSS.

***

### Pro-Element-CSS (nur ein Element formatieren)

Jedes Menüelement hat sein **eigenes** CSS-Feld: **Element bearbeiten → Erweitert → Internes Stylesheet / CSS**. Dies ist getrennt vom **Benutzerdefinierten CSS für dieses Menü** (das menüweit ist). Pro-Element-CSS **reist mit dem Element** — wenn Sie das Element kopieren oder duplizieren, kommt seine Formatierung mit.

> **Vollständiges Handbuch:** für die HTML-Struktur eines Elements und alle CSS-Syntax, siehe [Menüelement-Struktur und CSS](/docs/usage/menu-item-structure-and-css/).

Schreiben Sie reines CSS. **`&` bedeutet *dieses Element*** (die Element-Zeile / `li`) — wie `&` in Sass:

```css
& { background: #fff5f5; border-radius: 10px; }
&:hover { background: #ffe4e6; }
```

Richten Sie die **inneren Teile** des Elements mit normalen Klassen-Selektoren ein (gleiche Namen wie im Rest des Menüs: `.inner`, `.name`, `.description`, `.icon`, `.image`, `.arrow`):

```css
.name { color: #b91c1c; }
.icon i { font-size: 22px; }
& .description { opacity: 0.8; }
```

Ein **Leerzeichen nach `&`** bedeutet „ein Teil innerhalb des Elements", daher sind `& .name` und `.name` identisch. `&` geschrieben **ohne Leerzeichen** (`&:hover`, `&.active`) formatiert die Element-Zeile selbst.

**Responsive (`@media`)** funktioniert — großartig für Mobile-only Anpassungen. Innerhalb von `@media` müssen Sie einen Selektor verwenden (das ist Standard-CSS), verwenden Sie also `&` für das Element selbst:

```css
@media (max-width: 768px) {
  & { padding: 8px; }
  .name { font-size: 13px; }
}
```

Anmerkungen:

* **Kein `#SF-…` notwendig**, und **kein `<style>`-Tag** — Navi+ definiert automatisch CSS nur für dieses eine Element, daher beeinflusst es nie andere Elemente. Das CSS reist auch mit dem Element, wenn Sie es duplizieren.
* Sie können immer noch eine **Bare-Erklärung** ohne Selektor schreiben (`color: red;`) — sie gilt für diese Element-Zeile. Dieser ältere Stil funktioniert weiterhin, aber `&` ist klarer und ist der einzige Weg, die Zeile innerhalb von `@media` zu formatieren.
* Wenn eine Eigenschaft sowohl hier als auch durch die visuellen Einstellungen des Elements (Medien-Box-Schatten / Innen-Box usw.) festgelegt ist, **gewinnt die visuelle Einstellung**. Entfernen/überschreiben Sie diese Einstellung, wenn Sie möchten, dass das CSS übernimmt.
* Um ein Element nach Gerät **anzuzeigen/auszublenden**, verwenden Sie **Auf Mobilgeräten anzeigen / Auf Desktop anzeigen** im Editor — nicht CSS. Auf **Wix** entspricht `@media` möglicherweise nicht dem echten Bildschirm; bevorzugen Sie die Anzeigeeinstellungen dort.
* Verwenden Sie das **Erweiterungssymbol** (oben rechts im Feld), um einen größeren Code-Editor zu öffnen; drücken Sie **Esc** oder **Fertig**, um zu schließen.

Verwenden Sie **Pro-Element-CSS** für eine einmalige Anpassung an ein einzelnes Element; verwenden Sie **Benutzerdefiniertes CSS für dieses Menü** (mit `.inner-level1`, `[data-name="…"]`, usw.), wenn Sie mehrere Elemente oder ganze Ebenen auf einmal formatieren möchten.

***

### Ausführliche Demo: ein Drei-Ebenen-Zweig (Symbol, Bild, Name, Beschreibung)

Beispielbezeichnungen: **Shop** (Ebene 1: **Symbol** + Name + Beschreibung) → **Kleidung** (Ebene 2: **Bild** + Name) → **T-Shirts** (Ebene 3: **Symbol** + Name + Beschreibung). Dies zeigt **beide Medientypen** und **Beschreibung**.

Das gesamte Menü sitzt in einem Block:

```html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` ist die **Einbettungs-ID** des Menüs — sichtbar im Navi+-Dashboard (das blaue Badge neben dem Menütitel) und in DevTools auf der Live-Seite.

#### Reihenfolge innerhalb jedes `div.inner` (Laufzeit)

1. **`span.arrow`** — Pfeil (Untermenü / Mobilgerät, hängt vom Menütyp ab).
2. *(Optional)* **`span.cart_count`** — nur wenn das Element ein Warenkorbabzeichen mit Anzahl verwendet.
3. **Medien — einer davon:**
   * **Symbol (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Bild:** `div.image-border` → `span.image-box` → `span.image` → `img`

4. **`div.info`** → **`div.flexcol`** → **`span.name`** (Label) → **`div.description`** *(nur wenn Sie die Beschreibung im Editor ausfüllen)*.
5. *(Optional / SEO)* Symbol oder Bild können in **`a[href]`** eingewickelt sein — Sie können `<a>…</a>` um `span.icon` oder den Bildblock in DevTools sehen.

#### `li`-Klassen erklärt

| Klasse | Bedeutung |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | Tiefe dieses Elements |
| `is-parent-top` | Ebene-1-Element mit Kindern |
| `is-parent` | Ebene-2+-Element mit Kindern |
| `data-name="…"` | Element-Label (Attribut, nützlich für CSS-Selektoren `[data-name]`) |

#### Vollständige HTML-Demo (illustrative Klassen / URLs)

```html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Shop">
      <!-- LEVEL 1: icon + name + description -->
      <div class="inner inner-level1">
        <span class="arrow"></span>
        <!-- <span class="cart_count">3</span>  ← cart badge only -->

        <!-- ICON: Remix Icon (ri-…) -->
        <span class="icon">
          <i class="ri-store-2-line"></i>
        </span>

        <div class="info">
          <div class="flexcol">
            <span class="name">Shop</span>
            <div class="description">Browse all categories</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Clothing">
          <!-- LEVEL 2: image + name (no description) -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- IMAGE: when set, icon is not rendered -->
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
                <span class="name">Clothing</span>
                <!-- no .description if description is empty in the editor -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="T-Shirts">
              <!-- LEVEL 3: icon + name + description -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">T-Shirts</span>
                    <div class="description">New collection</div>
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

```html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**Nur Bild (Bild-URL auf dem Element gesetzt):**

```html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### Selektor-Beispiele für Benutzerdefiniertes CSS (im Navi+-Feld — geben Sie `#SF-…` nicht ein)

```css
/* Arrow */
.inner-level1 .arrow { }

/* Icon (any level) */
.inner-level2 .icon i { font-size: 20px; }

/* Image */
.inner-level2 .image img { border-radius: 8px; }

/* Title and description */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }

/* Target by item name */
[data-name="Shop"] .name { color: red; }
```

**Denken Sie daran:** Untermenüs der Ebene 2 / 3 befinden sich **innerhalb** des übergeordneten **`li`**, **nach** dem `div.inner` des übergeordneten — nicht als direkte Kinder von `ul.navigation`.

**Gleicher Zweig, Textdiagramm:**

```
Shop              ← level 1 (main bar)
  └─ Clothing     ← level 2 (first submenu)
        └─ T-Shirts ← level 3 (nested submenu)
```

***

### Schnelle Referenz (empfohlene Klassen)

| Ebene | Zeile (`li`) | Inhalts-Wrapper | Nächstes Untermenü |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1 | `level-1` | `.inner-level1` | `ul.children[menulevel="2"]` |
| 2 | `level-2` | `.inner-level2` | `ul.children[menulevel="3"]` if any |
| 3 | `level-3` | `.inner-level3` | — |

`menulevel="2"` / `"3"` ist der Index **dieses** Untermenüs — nicht das gleiche wie `level-1` auf einem Element der obersten Ebene.

***

### Schnelle Tipps

* Richten Sie **eine Tiefe** mit `.inner-level1`, `.inner-level2`, `.inner-level3` ein, anstatt nur `.inner`.
* Formatieren Sie ein **gesamtes Panel** (Hintergrund, Radius): `ul.children[menulevel="2"]` oder `[menulevel="3"]`.
* Text: `.info` → `.flexcol` → `.name`, `.description`.
* Symbol: `.icon` oder `.icon i` — Bild: `.image-border`, `.image img` (siehe ausführliche Demo oben).
* Pfeil: `.arrow` (normalerweise zuerst innerhalb von `.inner`).
* Richten Sie ein bestimmtes Element nach Name ein: `[data-name="Home"] .name { … }`.

***

### Fehlende Klassen im Shop?

Cache löschen, Menü neu veröffentlichen oder Skriptversion überprüfen. Verwenden Sie DevTools zur Bestätigung der Klassennamen auf der Live-Seite.

***

Support documentation — **Navi+**
