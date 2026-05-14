---
description: Pubblica un Navi+ Mega Menu (Mobile) su WordPress con il plugin Navi+ Menu Builder. Inseriscilo dove dovrebbe apparire tramite il shortcode [naviwp embed_id="..."] o blocco Gutenberg.
lang: it
layout: default
permalink: /it/docs/usage/mega-menu-mobile/publish-on-wordpress/
title: Mega Menu (Mobile) — Pubblica su WordPress
---
# Mega Menu (Mobile) — Pubblica su WordPress

A **Mega Menu (Mobile)** è un **menu** di sezione — viene visualizzato nel punto della pagina in cui lo incorpori. Su WordPress, il plugin Navi+ Menu Builder lo posiziona tramite shortcode o blocco Gutenberg; non modifichi mai i file del tema.

> Altre piattaforme (Wix, Squarespace, Webflow, siti personalizzati): vedi [Pubblica su Wix / Squarespace / Altri]({{ site.baseurl }}/docs/usage/mega-menu-mobile/publish-on-wordpress-woocommerce-wix-others/).

---

## Passi

1. **Installa il plugin** — vedi [Installa il plugin Navi+ Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Crea il tuo Mega Menu (Mobile)** in **Aspetto → Naviplus Menu Builder**. Vedi [Mega Menu (Mobile) — Come usare]({{ site.baseurl }}/docs/usage/mega-menu-mobile/how-to-use/).
3. **Copia l'ID di incorporamento** (ad es. `SF-123456789`).
4. **Incorpora** utilizzando uno dei metodi qui sotto.

---

## Inserisci il menu

### Opzione 1 — Shortcode (raccomandato)

```text
[naviwp embed_id="SF-123456789"]
```

Incolla questo in qualsiasi post, pagina o widget compatibile con shortcode.

Se desideri che il mega menu mobile si trovi nell'intestazione del tuo sito, il posto più pulito è l'area **intestazione mobile** nel tuo tema — o una parte del modello di Full Site Editing limitata al mobile.

### Opzione 2 — Blocco Gutenberg

Nell'editor a blocchi, **+ → Naviplus Menu Builder**, incolla l'ID di incorporamento nella barra laterale del blocco. Un semplice blocco **Shortcode** con `[naviwp embed_id="SF-..."]` funziona allo stesso modo.

### Opzione 3 — Page builders

Usa un widget **Shortcode** con `[naviwp embed_id="SF-..."]`, o un widget **HTML**:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

---

## Suggerimenti mobile-first

- Rendi i target di tocco almeno 44 × 44 px — usa i controlli di spaziatura e padding dell'editor; visualizza su un dispositivo reale.
- Evita più di 2 livelli di nidificazione — i sottomenu profondi sono frustranti sugli schermi touch. Per alberi più profondi considera un [Slide Menu]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/) invece.
- Abbina questo a un [Mega Menu (Desktop)]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/) e usa **Regole di visualizzazione → Dispositivo** per visualizzare ogni menu solo sul suo breakpoint target.
- Fai attenzione alla sovrapposizione con elementi fissi (Tab Bar, FAB, widget di chat). Vedi [Menu che sovrappone altri elementi]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).

---

## Aggiornare il menu in seguito

Le modifiche nell'editor si applicano al successivo caricamento della pagina front-end — non è necessario svuotare la cache di WordPress.

---

## Correlati

- [WordPress / WooCommerce — panoramica]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Pubblica i tuoi menu su WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Mega Menu (Mobile) — Come usare]({{ site.baseurl }}/docs/usage/mega-menu-mobile/how-to-use/)
