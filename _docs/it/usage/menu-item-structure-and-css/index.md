---
description: 'Approfondimento di un singolo elemento di menu — la sua struttura HTML (icona, immagine, nome, descrizione, freccia, badge) e come stilizzare solo quell''elemento con il riquadro CSS per elemento, inclusi & (questo elemento), selettori interni, hover e @media.'
lang: it
layout: default
permalink: /it/docs/usage/menu-item-structure-and-css/
title: Struttura dell'elemento di menu e CSS
---
# Struttura dell'elemento di menu e CSS

Questa pagina approfondisce **un singolo elemento di menu** — l'HTML che renderizza e come stilizzare **solo quell'elemento** usando il riquadro CSS dell'elemento (**modifica l'elemento → Avanzate → Foglio di stile interno/CSS**).

> Questo riquadro stilizza **solo l'elemento che stai modificando** e il CSS **si muove con l'elemento** quando lo duplichi. Per i CSS su tutto il menu, usa invece **CSS personalizzato per questo menu** — vedi [Struttura del menu e CSS](/docs/usage/menu-structure-and-css/).

***

## La struttura di un elemento

Ogni elemento è un singolo `li` contenente un `div.inner`. All'interno di `.inner`, in ordine:

```html
<li class="item level-1 …" data-name="Shop">
  <div class="inner inner-level1">
    <span class="arrow"></span>            <!-- freccia del sottomenu (se presente) -->
    <!-- <span class="cart_count">3</span> --> <!-- badge del carrello con conteggio (facoltativo) -->

    <!-- MEDIA — icona O immagine (se l'elemento ha un'immagine, l'icona non viene renderizzata) -->
    <span class="icon"><i class="ri-store-2-line"></i></span>
    <!-- oppure -->
    <div class="image-border">
      <span class="image-box"><span class="image"><img src="…"></span></span>
    </div>

    <!-- TESTO -->
    <div class="info">
      <div class="flexcol">
        <span class="name">Shop</span>
        <div class="description">Sfoglia tutte le categorie</div>   <!-- solo se hai compilato la descrizione -->
      </div>
    </div>
  </div>
</li>
```

### Le parti che puoi targetizzare

| Parte | Selettore | Note |
| ---- | -------- | ----- |
| L'elemento stesso (la riga) | `&` | L'`li`. `&` è una scorciatoia per "questo elemento". |
| Wrapper contenuto | `.inner` | Racchiude tutto all'interno dell'elemento |
| Glifo icona | `.icon i` | Remix Icon (`ri-…`) |
| Immagine | `.image img` (riquadro: `.image-border`, `.image-box`, `.image`) | Mostrata al posto dell'icona quando l'elemento ha un'immagine |
| Titolo | `.name` | L'etichetta |
| Descrizione | `.description` | Esiste solo se hai compilato il campo descrizione |
| Colonna testo | `.info`, `.flexcol` | Contiene nome + descrizione |
| Freccia | `.arrow` | Freccia del sottomenu |
| Badge carrello | `.cart_count` | Solo per elementi carrello con conteggio |

***

## Scrivere CSS per un elemento

Il riquadro accetta **tre forme, combinabili insieme**. Non digiti mai `#SF-…` e non aggiungi mai un tag `<style>` — Navi+ scopa automaticamente tutto a questo solo elemento.

### 1. `&` — questo elemento (consigliato)

`&` significa la riga dell'elemento (l'`li`), proprio come `&` in Sass:

```css
& { border: 1px solid #eee; border-radius: 12px; }
&:hover { background: #f8fafc; }
```

### 2. Selettori interni — parti all'interno dell'elemento

Usa i nomi di classe dalla tabella sopra:

```css
.name { font-weight: 700; }
.description { font-size: 12px; opacity: .8; }
.icon i { font-size: 22px; color: #2563eb; }
.image img { border-radius: 10px; }
```

Uno **spazio dopo `&`** significa anche "all'interno dell'elemento", quindi `& .name` e `.name` sono uguali. `&` scritto **senza spazio** (`&:hover`, `&.active`) stilizza la riga stessa.

### 3. Dichiarazioni bare — la scorciatoia precedente

Scrivere proprietà **senza selettore** le applica alla riga dell'elemento:

```css
color: red;
font-weight: 700;
```

Questo continua a funzionare (i menu precedenti si affidano a questo), ma `&` è più chiaro — e le dichiarazioni bare **non possono** essere usate dentro `@media`.

***

## Responsive con `@media`

`@media` funziona qui. Dentro `@media` devi usare un selettore (è CSS standard), quindi usa `&` per l'elemento stesso:

```css
/* Padding più piccolo e nascondi la descrizione sui telefoni */
@media (max-width: 768px) {
  & { padding: 8px; }
  .description { display: none; }
  .name { font-size: 13px; }
}
```

> Per **mostrare o nascondere** un elemento per dispositivo, preferisci **Mostra su mobile/Mostra su desktop** nell'editor — non CSS. Su **Wix**, `@media` basato su viewport potrebbe non corrispondere allo schermo reale; usa le impostazioni Display lì.

***

## Esempi

**Trasformare un elemento in una pillola/badge:**

```css
& { background: #111; color: #fff; border-radius: 999px; padding: 6px 14px; }
.name { color: #fff; }
```

**Evidenzia all'hover:**

```css
&:hover { transform: translateY(-2px); transition: transform .15s; }
&:hover .name { color: #2563eb; }
```

**Icona più grande e colorata:**

```css
.icon i { font-size: 24px; color: #e11d48; }
```

**Immagine arrotondata con una cornice sottile:**

```css
.image img { border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,.12); }
```

**Compatto su mobile:**

```css
& { padding: 12px; }
@media (max-width: 768px) {
  & { padding: 6px; }
  .description { display: none; }
}
```

***

## Cose buone da sapere

* **Nessun `#SF-…`, nessun tag `<style>`** — Navi+ scopa il CSS a questo solo elemento; non influisce mai su altri elementi.
* Il CSS **si muove con l'elemento** quando lo duplichi (è per elemento, riutilizzabile).
* Se una proprietà è impostata sia qui **che** nelle impostazioni visive dell'elemento (Media box/Inner box color, border, shadow…), l'**impostazione visiva prevale** — è applicata inline. Cancella quella impostazione se vuoi che il tuo CSS prevalga.
* Usa l'**icona di espansione** (in alto a destra del riquadro) per un editor più grande; premi **Esc** o **Fatto** per chiudere.

***

Documentazione di supporto — **Navi+**
