---
description: 'Breve guida per stilizzare il menu con **CSS personalizzato per questo menu**, **Classi riutilizzabili (CSS)** e l''HTML predefinito. Il menu ha **tre livelli**: barra principale...'
lang: it
layout: default
permalink: /it/docs/usage/menu-structure-and-css/
title: Struttura del menu e CSS
---
# Struttura del menu e CSS

Breve guida per stilizzare il menu con **CSS personalizzato per questo menu**, **Classi riutilizzabili (CSS)** e l'HTML predefinito. Il menu ha **tre livelli**: barra principale, sottomenu, sottomenu annidati.

> **Nota:** Questa demo copre un menu **Slide/Standard**. La struttura è la stessa per la maggior parte dei tipi di menu; TABBAR e Mega Menu potrebbero avere piccole differenze — usa DevTools sulla pagina live per confermare.

***

### CSS personalizzato — cosa digitare

In **Avanzate → CSS personalizzato per questo menu**, Navi+ **aggiunge un prefisso** (incluso `#SF-…` e ambito menu). Scrivi **selettori normali solo** — **non** digitare `#SF-12345678` tu stesso.

```css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

**`&` = il menu stesso** (il contenitore `#SF-…`). È facoltativo — ma è il modo pulito per stilizzare l'intero menu, e l'unico modo per farlo dentro `@media`:

```css
&              { background: #111; }        /* il contenitore del menu */
&:hover        { box-shadow: 0 4px 12px rgba(0,0,0,.15); }
& .inner-level1 { padding: 12px 16px; }     /* '& ' con spazio = dentro il menu, uguale a .inner-level1 */

/* Responsive — solo su schermi piccoli */
@media (max-width: 768px) {
  & { padding: 6px; }
  .name { font-size: 13px; }
}
```

**Non devi** usare `&` — CSS senza di esso continua a funzionare esattamente come prima (`.inner-level1 { … }` è invariato). `&` è solo un atalho per "questo menu".

Usa **`#SF-…` manualmente** solo quando **non** usi questa caja (ad esempio CSS nel file del tema).

**Foglio di stile globale/CSS** è un campo **separato**: si applica all'**intero sito** e non è limitato a un menu — usa con cautela.

**Classi riutilizzabili (CSS):** definisci `.tuaClasse { … }` nella tabella Riutilizzabile e assegna la classe agli elementi — le regole rimangono nello stesso bundle CSS interno; non hai bisogno di aggiungere `#SF-…` nella caja. La classe appare su **`li`**.

Non racchiudere il contenuto in un tag `<style>` nella caja — solo CSS semplice.

***

### CSS per elemento (stilizza solo un elemento)

Ogni elemento di menu ha il suo **proprio** cuadro CSS: **modifica l'elemento → Avanzate → Foglio di stile interno/CSS**. Questo è separato da **CSS personalizzato per questo menu** (che è a livello di menu). Il CSS per elemento **si muove con l'elemento** — se copi o duplici l'elemento, il suo stile viene con esso.

> **Guida completa:** per la struttura HTML di un elemento e ogni sintassi CSS, vedi [Struttura dell'elemento di menu e CSS](/docs/usage/menu-item-structure-and-css/).

Scrivi CSS semplice. **`&` significa *questo elemento*** (la riga propria dell'elemento/`li`) — come `&` in Sass:

```css
& { background: #fff5f5; border-radius: 10px; }
&:hover { background: #ffe4e6; }
```

Targetizza le **parti interne** dell'elemento con selettori di classe normali (gli stessi nomi del resto del menu: `.inner`, `.name`, `.description`, `.icon`, `.image`, `.arrow`):

```css
.name { color: #b91c1c; }
.icon i { font-size: 22px; }
& .description { opacity: 0.8; }
```

Uno **spazio dopo `&`** significa "una parte dentro l'elemento", quindi `& .name` e `.name` sono uguali. `&` scritto **senza spazio** (`&:hover`, `&.active`) stilizza la riga propria dell'elemento.

**Responsive (`@media`)** funziona — ottimo per i ritocchi specifici per mobile. Dentro `@media` devi usare un selettore (è CSS standard), quindi usa `&` per l'elemento stesso:

```css
@media (max-width: 768px) {
  & { padding: 8px; }
  .name { font-size: 13px; }
}
```

Note:

* **Nessun `#SF-…` necessario** e **nessun tag `<style>`** — Navi+ automaticamente limita tutto a questo elemento, quindi non influisce mai su altri elementi. Il CSS si muove anche con l'elemento se lo duplici.
* Puoi ancora scrivere una **dichiarazione bare** senza selettore (`color: red;`) — si applica alla riga di questo elemento. Questo stile precedente continua a funzionare, ma `&` è più chiaro ed è l'unico modo per stilizzare la riga dentro `@media`.
* Se una proprietà è impostata sia qui che nelle impostazioni visive dell'elemento (Media box/Inner box shadow, ecc.), l'**impostazione visiva prevale**. Rimuovi/sovrascrivi quell'impostazione se vuoi che il CSS prevalga.
* Per **mostrare/nascondere** un elemento per dispositivo, usa **Mostra su mobile/Mostra su desktop** nell'editor — non CSS. Su **Wix**, `@media` basato su viewport potrebbe non corrispondere allo schermo reale; preferisci le impostazioni Display lì.
* Usa l'**icona di espansione** (in alto a destra della caja) per aprire un editor di codice più grande; premi **Esc** o **Fatto** per chiudere.

Usa **CSS per elemento** per un ritocco una tantum a un singolo elemento; usa **CSS personalizzato per questo menu** (con `.inner-level1`, `[data-name="…"]`, ecc.) quando vuoi stilizzare molti elementi o interi livelli alla volta.

***

### Demo dettagliata: un ramo di tre livelli (icona, immagine, nome, descrizione)

Etichette di esempio: **Shop** (livello 1: **icona** + nome + descrizione) → **Clothing** (livello 2: **immagine** + nome) → **T-Shirts** (livello 3: **icona** + nome + descrizione). Questo mostra **entrambi i tipi di media** e **descrizione**.

L'intero menu si trova in un blocco:

```html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` è l'**ID di embed** del menu — visibile nel dashboard Navi+ (il badge blu accanto al titolo del menu) e in DevTools sulla pagina live.

#### Ordine dentro ogni `div.inner` (runtime)

1. **`span.arrow`** — freccia (sottomenu/mobile, dipende dal tipo di menu).
2. *(Facoltativo)* **`span.cart_count`** — solo quando l'elemento usa il badge del carrello con conteggio.
3. **Media — uno di:**
   * **Icona (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Immagine:** `div.image-border` → `span.image-box` → `span.image` → `img`\
     \&#xNAN;*Nota:* se l'elemento **ha un'immagine**, l'app **mostra l'immagine** e non renderizza l'icona per quella riga.
4. **`div.info`** → **`div.flexcol`** → **`span.name`** (etichetta) → **`div.description`** *(solo se compili descrizione nell'editor)*.
5. *(Facoltativo/SEO)* l'icona o l'immagine potrebbe essere avvolta in **`a[href]`** — potresti vedere `<a>…</a>` attorno a `span.icon` o al blocco immagine in DevTools.

#### Spiegazione delle classi `li`

| Classe                             | Significato                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | Profondità di questo elemento                                             |
| `is-parent-top`                   | Elemento di livello 1 che ha figli                                 |
| `is-parent`                       | Elemento di livello 2+ che ha figli                                |
| `data-name="…"`                   | Etichetta elemento (attributo, utile per selettori CSS `[data-name]`) |

#### Demo HTML completa (classi/URL illustrativi)

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
            <span class="name">Shop</span>
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
                <!-- nessun .description se descrizione è vuota nell'editor -->
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

#### Snippet media (per riferimento)

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

#### Esempi di selettore per CSS personalizzato (nella caja Navi+ — non digitare `#SF-…`)

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

/* Targetizza per nome elemento */
[data-name="Shop"] .name { color: red; }
```

**Ricorda:** i sottomenu di livello 2/3 si trovano **all'interno** del **`li`** genitore, **dopo** il `div.inner` genitore — non come figli diretti di `ul.navigation`.

**Stesso ramo, diagramma di testo:**

```
Shop              ← livello 1 (barra principale)
  └─ Clothing     ← livello 2 (primo sottomenu)
        └─ T-Shirts ← livello 3 (sottomenu annidato)
```

***

### Riferimento rapido (classi suggerite)

| Livello | Riga (`li`) | Wrapper contenuto | Prossimo sottomenu                        |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1     | `level-1`  | `.inner-level1` | `ul.children[menulevel="2"]`        |
| 2     | `level-2`  | `.inner-level2` | `ul.children[menulevel="3"]` se presente |
| 3     | `level-3`  | `.inner-level3` | —                                   |

`menulevel="2"` / `"3"` è l'indice di **quel** pannello di sottomenu — non uguale a `level-1` su un elemento di livello superiore.

***

### Suggerimenti rapidi

* Targetizza **una profondità** con `.inner-level1`, `.inner-level2`, `.inner-level3` invece di solo `.inner`.
* Stilizza un **intero pannello** (sfondo, raggio): `ul.children[menulevel="2"]` o `[menulevel="3"]`.
* Testo: `.info` → `.flexcol` → `.name`, `.description`.
* Icona: `.icon` o `.icon i` — immagine: `.image-border`, `.image img` (vedi demo dettagliata sopra).
* Freccia: `.arrow` (di solito primo dentro `.inner`).
* Targetizza un elemento specifico per nome: `[data-name="Home"] .name { … }`.

***

### Classi mancanti nel negozio?

Cancella la cache del tema, ripubblica il menu o controlla la versione dello script. Usa DevTools per confermare i nomi delle classi sulla pagina live.

***

Documentazione di supporto — **Navi+**
