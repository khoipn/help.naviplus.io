---
description: Pubblica un Menu a Griglia Navi+ su WordPress con il plugin Navi+ Menu Builder. Inseriscilo dove dovrebbe apparire utilizzando il shortcode [naviwp embed_id="..."].
lang: it
layout: default
permalink: /it/docs/usage/grid-menu/publish-on-wordpress/
title: Menu a Griglia — Pubblica su WordPress
---
# Menu a Griglia — Pubblica su WordPress

Un **Menu a Griglia** è un menu di **sezione** — viene visualizzato nel punto della pagina in cui lo incorpori. È un'ottima soluzione per collegamenti rapidi alle categorie, pagine hub e pannelli "cosa ti piacerebbe fare?". Su WordPress, il plugin Navi+ Menu Builder lo posiziona tramite shortcode o blocco Gutenberg; non è necessario modificare i file del tema.

> Altre piattaforme (Wix, Squarespace, Webflow, siti personalizzati): vedi [Pubblica su Wix / Squarespace / Altri]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Passi

1. **Installa il plugin** — vedi [Installa il plugin Navi+ Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
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

Posti tipici:

- Una sezione hero della homepage con riquadri di categoria.
- Una pagina di atterraggio sopra la piega.
- Lo stato vuoto di un archivio di categoria.

### Opzione 2 — Blocco Gutenberg

Nell'editor dei blocchi, **+ → Naviplus Menu Builder**, quindi incolla l'ID di Incorporamento nella barra laterale del blocco. Un semplice blocco **Shortcode** con `[naviwp embed_id="SF-..."]` è equivalente.

### Opzione 3 — Page builders (Elementor, Divi, Bricks, Oxygen)

Usa un widget **Shortcode** con `[naviwp embed_id="SF-..."]`. Se un builder non ha un widget Shortcode, un widget **HTML** con il div di incorporamento funziona:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

---

## Suggerimenti per dispositivi mobili

- Usa **[Menu a Griglia Responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** per cambiare il numero di colonne per breakpoint — ad es. 4 colonne su desktop, 2 su mobile.
- Mantieni il contenuto dei riquadri breve — un'icona, un'etichetta di una o due parole, eventualmente una piccola descrizione. Etichette lunghe si avvolgono in modo imprevedibile.
- Punta a obiettivi di tocco di almeno 44 × 44 px, inclusi i margini.

---

## Aggiornare il menu in seguito

Le modifiche nell'editor si applicano al successivo caricamento della pagina front-end — non è necessario svuotare la cache di WordPress.

---

## Correlati

- [WordPress / WooCommerce — panoramica]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Pubblica i tuoi menu su WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Menu a Griglia Responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
