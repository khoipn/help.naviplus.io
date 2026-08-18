---
description: 'Tiefer Einblick in ein einzelnes Menüelement — seine HTML-Struktur (Symbol, Bild, Name, Beschreibung, Pfeil, Badge) und wie Sie dieses Element mit dem CSS-Feld pro Element formatieren, einschließlich & (dieses Element), innere Selektoren, Hover und @media.'
lang: de
layout: default
permalink: /de/docs/usage/menu-item-structure-and-css/
title: Menüelement-Struktur und CSS
---
# Menüelement-Struktur und CSS

Diese Seite befasst sich eingehend mit **einem Menüelement** — dem HTML, das es rendert, und wie Sie **nur dieses Element** mit dem eigenen CSS-Feld des Elements formatieren (**Element bearbeiten → Erweitert → Internes Stylesheet / CSS**).

> Dieses Feld formatiert **nur das Element, das Sie bearbeiten**, und das CSS **reist mit dem Element**, wenn Sie es duplizieren. Für CSS im gesamten Menü verwenden Sie stattdessen **Benutzerdefiniertes CSS für dieses Menü** — siehe [Menüstruktur und CSS](/docs/usage/menu-structure-and-css/).

***

## Die Struktur eines Elements

Jedes Element ist ein einzelnes `li` mit einem `div.inner`. Innerhalb von `.inner` in der Reihenfolge:

```html
<li class="item level-1 …" data-name="Shop">
  <div class="inner inner-level1">
    <span class="arrow"></span>            <!-- submenu arrow (if any) -->
    <!-- <span class="cart_count">3</span> --> <!-- cart badge with count (optional) -->

    <!-- MEDIA — icon OR image (if the item has an image, the icon is not rendered) -->
    <span class="icon"><i class="ri-store-2-line"></i></span>
    <!-- or -->
    <div class="image-border">
      <span class="image-box"><span class="image"><img src="…"></span></span>
    </div>

    <!-- TEXT -->
    <div class="info">
      <div class="flexcol">
        <span class="name">Shop</span>
        <div class="description">Browse all categories</div>   <!-- only if you filled description -->
      </div>
    </div>
  </div>
</li>
```

### Die Teile, die Sie ansprechen können

| Teil | Selektor | Notizen |
| ---- | -------- | ----- |
| Das Element selbst (die Zeile) | `&` | Das `li`. `&` ist eine Abkürzung für „dieses Element". |
| Inhalts-Wrapper | `.inner` | Umhüllt alles innerhalb des Elements |
| Symbol-Glyphe | `.icon i` | Remix Icon (`ri-…`) |
| Bild | `.image img` (Feld: `.image-border`, `.image-box`, `.image`) | Wird anstelle des Symbols angezeigt, wenn das Element ein Bild hat |
| Titel | `.name` | Das Label |
| Beschreibung | `.description` | Existiert nur, wenn Sie das Beschreibungsfeld gefüllt haben |
| Textspalte | `.info`, `.flexcol` | Enthält Name + Beschreibung |
| Pfeil | `.arrow` | Untermenü-Pfeil |
| Warenkorbabzeichen | `.cart_count` | Nur für Warenkorbgegenstände mit einer Anzahl |

***

## CSS für ein Element schreiben

Das Feld akzeptiert **drei Formen, die miteinander kombinierbar sind**. Sie geben nie `#SF-…` ein und fügen nie ein `<style>`-Tag hinzu — Navi+ definiert automatisch den Gültigkeitsbereich für dieses eine Element.

### 1. `&` — dieses Element (empfohlen)

`&` bedeutet die Zeile des Elements selbst (das `li`), genau wie `&` in Sass:

```css
& { border: 1px solid #eee; border-radius: 12px; }
&:hover { background: #f8fafc; }
```

### 2. Innere Selektoren — Teile innerhalb des Elements

Verwenden Sie die Klassennamen aus der obigen Tabelle:

```css
.name { font-weight: 700; }
.description { font-size: 12px; opacity: .8; }
.icon i { font-size: 22px; color: #2563eb; }
.image img { border-radius: 10px; }
```

Ein **Leerzeichen nach `&`** bedeutet auch „innerhalb des Elements", daher sind `& .name` und `.name` identisch. `&` geschrieben **ohne Leerzeichen** (`&:hover`, `&.active`) formatiert die Zeile selbst.

### 3. Bare Erklärungen — die ältere Abkürzung

Das Schreiben von Eigenschaften mit **keinem Selektor** wendet sie auf die Elementzeile an:

```css
color: red;
font-weight: 700;
```

Dies funktioniert weiterhin (ältere Menüs verlassen sich darauf), aber `&` ist klarer — und Bare-Erklärungen **können nicht** innerhalb von `@media` verwendet werden.

***

## Reaktiv mit `@media`

`@media` funktioniert hier. Innerhalb von `@media` müssen Sie einen Selektor verwenden (das ist Standard-CSS), verwenden Sie also `&` für das Element selbst:

```css
/* Smaller padding + hide the description on phones */
@media (max-width: 768px) {
  & { padding: 8px; }
  .description { display: none; }
  .name { font-size: 13px; }
}
```

> Um ein Element nach Gerät **anzuzeigen oder auszublenden**, bevorzugen Sie **Auf Mobilgeräten anzeigen / Auf Desktop anzeigen** im Editor — nicht CSS. Auf **Wix** entspricht `@media` möglicherweise nicht dem echten Bildschirm; verwenden Sie dort die Anzeigeeinstellungen.

***

## Beispiele

**Wandeln Sie ein Element in eine Pille / ein Badge um:**

```css
& { background: #111; color: #fff; border-radius: 999px; padding: 6px 14px; }
.name { color: #fff; }
```

**Beim Hover hervorheben:**

```css
&:hover { transform: translateY(-2px); transition: transform .15s; }
&:hover .name { color: #2563eb; }
```

**Größeres, farbiges Symbol:**

```css
.icon i { font-size: 24px; color: #e11d48; }
```

**Abgerundetes Bild mit subtilen Rahmen:**

```css
.image img { border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,.12); }
```

**Kompakt auf Mobilgeräten:**

```css
& { padding: 12px; }
@media (max-width: 768px) {
  & { padding: 6px; }
  .description { display: none; }
}
```

***

## Gut zu wissen

* **Kein `#SF-…`, kein `<style>`-Tag** — Navi+ definiert CSS für nur dieses eine Element; es beeinflusst nie andere Elemente.
* CSS **reist mit dem Element**, wenn Sie es duplizieren (es ist pro Element und wiederverwendbar).
* Wenn eine Eigenschaft sowohl **hier** als auch durch die visuellen Einstellungen des Elements (Medienfeld / Inneres Feldfeld Farbe, Rand, Schatten…) festgelegt ist, **gewinnt die visuelle Einstellung** — sie wird inline angewendet. Löschen Sie diese Einstellung, wenn Sie möchten, dass Ihr CSS übernimmt.
* Verwenden Sie das **Erweiterungssymbol** (oben rechts im Feld) für einen größeren Editor; drücken Sie **Esc** oder **Fertig**, um zu schließen.

***

Support documentation — **Navi+**
