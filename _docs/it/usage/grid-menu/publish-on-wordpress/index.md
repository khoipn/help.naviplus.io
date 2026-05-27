---
description: Pubblica un Menu a Griglia Navi+ su WordPress con il plugin Navi+ AI Menu Builder. Inseriscilo dove dovrebbe apparire utilizzando il shortcode [naviwp embed_id="..."] o il blocco Gutenberg.
lang: it
layout: default
permalink: /it/docs/usage/grid-menu/publish-on-wordpress/
title: Menu a Griglia — Pubblica su WordPress
---
# Menu a Griglia — Pubblica su WordPress

Un **Menu a Griglia** è un menu di **sezione** — viene visualizzato nel punto della pagina in cui lo incorpori. È un'ottima soluzione per collegamenti rapidi alle categorie, pagine hub e pannelli "cosa ti piacerebbe fare?". Su WordPress, il plugin Navi+ AI Menu Builder lo posiziona tramite shortcode o blocco Gutenberg; non è necessario modificare i file del tema.

> Altre piattaforme (Wix, Squarespace, Webflow, siti personalizzati): vedi [Pubblica su Wix / Squarespace / Altri]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Passi

1. **Installa il plugin** — vedi [Installa il plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Crea il tuo Menu a Griglia** in **Aspetto → Naviplus Menu Builder**. Vedi [Menu a Griglia — Come usare]({{ site.baseurl }}/docs/usage/grid-menu/how-to-use/) e [Menu a Griglia Responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/).
3. **Copia l'ID di Incorporamento** (ad es. `SF-123456789`).
4. **Incorpora** utilizzando uno dei metodi qui sotto.

---

## Inserisci il menu

### Opzione 1 — Shortcode (raccomandato)

```text
[naviwp embed_id="SF-123456789"]
```

Inserisci questo in qualsiasi post, pagina o widget compatibile con shortcode.

Posizioni tipiche:

- Una sezione hero della homepage con riquadri di categoria.
- Una landing page sopra la piega.
- Lo stato vuoto di un archivio di categoria.

### Opzione 2 — Blocco Gutenberg

Nell'editor dei blocchi, **+ → Naviplus Menu Builder**, quindi incolla l'ID di Incorporamento nella barra laterale del blocco. Un semplice blocco **Shortcode** con `[naviwp embed_id="SF-..."]` è equivalente.

### Opzione 3 — Costruttori di pagine (Elementor, Divi, Bricks, Oxygen)

Usa un widget **Shortcode** con `[naviwp embed_id="SF-..."]`. Se un costruttore non ha un widget Shortcode, un widget **HTML** con il div di incorporamento funziona:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

### Opzione 4 — Selettore CSS (posizionamento automatico dall'app Navi+)

Invece di posizionare manualmente uno shortcode, puoi lasciare che Navi+ inserisca o sostituisca automaticamente un elemento utilizzando un Selettore CSS — configurato interamente dall'app Navi+.

#### Comprendere il Selettore CSS

Un Selettore CSS mira a un elemento HTML specifico sulla tua pagina. Navi+ lo utilizza per sapere esattamente **dove** posizionare il tuo menu — inserire prima, inserire dopo o sostituire un elemento esistente.

Per trovare il giusto Selettore CSS, usa:
- [Modalità Debug](/docs/usage/debug-mode-find-css-selectors/) — passa il mouse su qualsiasi elemento e copia istantaneamente il suo selettore
- [Strumenti per sviluppatori del browser](/docs/usage/general/find-css-selector/) — metodo manuale tramite l'ispezione del browser

#### Tre opzioni di pubblicazione

Nell'app Navi+: fai clic su **Pubblica sul sito web** → attiva **"Pubblica menu tramite metodo Inserisci/Sostituisci"** → inserisci il tuo Selettore CSS e scegli un'opzione:

<details><summary>Opzione A: Inserisci Prima</summary>
<p>Inserisce il Menu a Griglia immediatamente <strong>prima</strong> dell'elemento selezionato, visualizzato come un'intera sezione.</p>
<p><strong>Esempio:</strong> <code>main</code> → il Menu a Griglia appare sopra l'area principale dei contenuti.</p>
<p>Questa è la configurazione più comune per un Menu a Griglia su WordPress.</p>
<p>Selettori comuni per i temi di WordPress:</p>
<ul>
<li><code>main</code> — la maggior parte dei temi</li>
<li><code>#main</code> — Twenty Twenty, Astra, OceanWP</li>
<li><code>.site-main</code> — molti temi</li>
<li><code>#content</code> — Divi, alcuni temi predefiniti</li>
</ul>
</details>

<details><summary>Opzione B: Inserisci Dopo</summary>
<p>Inserisce il Menu a Griglia immediatamente <strong>dopo</strong> l'elemento selezionato.</p>
<p><strong>Esempio:</strong> <code>header</code> → il Menu a Griglia appare appena sotto l'intestazione.</p>
<p>Selettori comuni per i temi di WordPress:</p>
<ul>
<li><code>header</code> — la maggior parte dei temi</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One e temi predefiniti di WordPress</li>
</ul>
</details>

<details><summary>Opzione C: Sostituisci</summary>
<p>La maggior parte dei siti WordPress non ha un elemento Menu a Griglia integrato da sostituire. Inserire Prima <code>main</code> è l'approccio raccomandato.</p>
<p>Se il tuo tema ha un elemento in stile griglia che desideri sostituire, usa <a href="/docs/usage/debug-mode-find-css-selectors/">Modalità Debug</a> o <a href="/docs/usage/general/find-css-selector/">Strumenti per sviluppatori del browser</a> per trovare il suo selettore.</p>
</details>

#### Targeting specifico per dispositivo

Aggiungi un suffisso per applicare il selettore solo su un dispositivo specifico:

| Suffisso | Si applica a |
|----------|--------------|
| `(M)` | Solo mobile |
| `(D)` | Solo desktop |
| *(nessuno)* | Entrambi |

Esempio: `main(D)` — inserisce il Menu a Griglia solo su desktop.

---

## Suggerimenti per dispositivi mobili

- Usa **[Menu a Griglia Responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** per cambiare il numero di colonne per breakpoint — ad es. 4 colonne su desktop, 2 su mobile.
- Mantieni il contenuto dei riquadri breve — un'icona, un'etichetta di una o due parole, eventualmente una piccola descrizione. Etichette lunghe si avvolgono in modo imprevedibile.
- Punta a target di tocco di almeno 44 × 44 px incluso il padding.

---

## Aggiornare il menu in seguito

Le modifiche nell'editor si applicano al successivo caricamento della pagina front-end — non è necessario svuotare la cache di WordPress.

---

## Correlati

- [WordPress / WooCommerce — panoramica]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Pubblica i tuoi menu su WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Menu a Griglia Responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
