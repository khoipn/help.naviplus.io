---
description: 'Guida breve per stilizzare il menu con **CSS personalizzato per questo menu**, **Classi riutilizzabili (CSS)** e l''HTML predefinito. Il menu ha **tre livelli**: barra principale...'
lang: it
layout: default
permalink: /it/docs/development/menu-structure-and-css/
title: Struttura del menu e CSS
---
# Struttura del menu e CSS

Guida breve per stilizzare il menu con **CSS personalizzato per questo menu**, **Classi riutilizzabili (CSS)** e l'HTML predefinito. Il menu ha **tre livelli**: barra principale, sottomenu, sottomenu annidato.

***

### CSS personalizzato — cosa digitare

In **Avanzato → CSS personalizzato per questo menu**, Navi+ **aggiunge un prefisso** (incluso `#SF-…` e ambito del menu). Scrivi **solo selettori normali** — non digitare **`#SF-12345678`** da solo.

```css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

Usa **`#SF-…` manualmente** solo quando **non** stai usando questa casella (ad esempio CSS nel file del tema).

**Foglio di stile globale / CSS** è un campo **separato**: si applica all'**intero sito** e non è limitato a un menu — usa con cautela.

**Classi riutilizzabili (CSS):** definisci `.yourClass { … }` nella tabella riutilizzabile e assegna la classe agli elementi — le regole rimangono nello stesso pacchetto CSS interno; non è necessario aggiungere `#SF-…` nella casella. La classe appare sul **`li`**.

Non **avvolgere** il contenuto in un tag `<style>` nella casella — solo CSS semplice.

***

### Wrapper esterno

L'intero menu si trova in un blocco:

```html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` è l'ID di incorporamento del menu (vedi DevTools sulla pagina live).

***

### Demo dettagliata: un ramo a tre livelli (icona, immagine, nome, descrizione)

Esempi di etichette: **Negozio** (livello 1: **icona** + nome + descrizione) → **Abbigliamento** (livello 2: **immagine** + nome) → **T-Shirt** (livello 3: **icona** + nome + descrizione). Questo mostra **entrambi i tipi di media** e **descrizione**.

#### Ordine all'interno di ciascun `div.inner` (runtime)

1. **`span.arrow`** — freccia (sottomenu / mobile, dipende dal tipo di menu).
2. *(Opzionale)* **`span.cart_count`** — solo quando l'elemento utilizza il badge del carrello con conteggio.
3. **Media — uno dei:**
   * **Icona (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Immagine:** `div.image-border` → `span.image-box` → `span.image` → `img`
     
     *Nota:* se l'elemento **ha un'immagine**, l'app **mostra l'immagine** e non rende l'icona per quella riga.
4. **`div.info`** → **`div.flexcol`** → **`span.name`** (etichetta) → **`div.description`** *(solo se compili la descrizione nell'editor)*.
5. *(Opzionale / SEO)* icona o immagine possono essere avvolti in **`a[href]`** — puoi vedere `<a>…</a>` attorno a `span.icon` o al blocco immagine in DevTools.

#### Demo HTML completa (classi illustrative / URL)

```html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Shop">
      <!-- LIVELLO 1: icona + nome + descrizione -->
      <div class="inner inner-level1">
        <span class="arrow"></span>
        <!-- <span class="cart_count">3</span>  ← badge del carrello solo -->

        <!-- ICONA: Remix Icon (ri-…) -->
        <span class="icon">
          <i class="ri-store-2-line"></i>
        </span>

        <div class="info">
          <div class="flexcol">
            <span class="name">Negozio</span>
            <div class="description">Sfoglia tutte le categorie</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Clothing">
          <!-- LIVELLO 2: immagine + nome (nessuna descrizione) -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- IMMAGINE: quando impostata, l'icona non viene renderizzata -->
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
                <!-- nessuna .description se la descrizione è vuota nell'editor -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="T-Shirts">
              <!-- LIVELLO 3: icona + nome + descrizione -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">T-Shirts</span>
                    <div class="description">Nuova collezione</div>
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

#### Frammenti multimediali (per riferimento)

**Solo icona (nessuna immagine):**

```html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**Solo immagine (URL immagine impostato sull'elemento):**

```html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### Esempi di selettori per CSS personalizzato (nella casella Navi+ — non digitare `#SF-…`)

```css
/* Freccia */
.inner-level1 .arrow { }

/* Icona (qualsiasi livello) */
.inner-level2 .icon i { font-size: 20px; }

/* Immagine */
.inner-level2 .image img { border-radius: 8px; }

/* Titolo e descrizione */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }
```

**Ricorda:** i sottomenu di livello 2 / 3 si trovano **all'interno** del **`li`** genitore, **dopo** il `div.inner` del genitore — non come figli diretti di `ul.navigation`.

**Stessa branca, diagramma testuale:**

```
Negozio              ← livello 1 (barra principale)
  └─ Abbigliamento     ← livello 2 (primo sottomenu)
        └─ T-Shirt ← livello 3 (sottomenu annidato)
```

***

### Riferimento rapido (classi suggerite)

| Livello | Riga (`li`) | Wrapper contenuto | Prossimo sottomenu                        |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1     | `level-1`  | `.inner-level1` | `ul.children[menulevel="2"]`        |
| 2     | `level-2`  | `.inner-level2` | `ul.children[menulevel="3"]` se presente |
| 3     | `level-3`  | `.inner-level3` | —                                   |

`menulevel="2"` / `"3"` è l'indice di **quella** pannello sottomenu — non lo stesso di `level-1` su un elemento di livello superiore.

***

### Suggerimenti rapidi

* Target **una profondità** con `.inner-level1`, `.inner-level2`, `.inner-level3` invece di solo `.inner`.
* Stile un **intero pannello** (sfondo, raggio): `ul.children[menulevel="2"]` o `[menulevel="3"]`.
* Testo: `.info` → `.flexcol` → `.name`, `.description`.
* Icona: `.icon` o `.icon i` — immagine: `.image-border`, `.image img` (vedi demo dettagliata sopra).
* Freccia: `.arrow` (di solito prima all'interno di `.inner`).

***

### Classi mancanti nel negozio?

Svuota la cache del tema, ripubblica il menu o controlla la versione dello script. Usa DevTools per confermare i nomi delle classi sulla pagina live.
