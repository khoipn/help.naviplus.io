---
description: Pubblica un Navi+ Mega Menu (Desktop) su WordPress con il plugin Navi+ Menu Builder. Posizionalo in qualsiasi post, pagina, widget o page builder utilizzando il [naviwp embed_id="..."] shortcode o il blocco Gutenberg.
lang: it
layout: default
permalink: /it/docs/usage/mega-menu-desktop/publish-on-wordpress/
title: Mega Menu (Desktop) — Pubblica su WordPress
---
# Mega Menu (Desktop) — Pubblica su WordPress

A **Mega Menu (Desktop)** è un **menu di sezione** — non si ancorano alla viewport, si rendono esattamente nel punto della pagina in cui lo incorpori (tipicamente l'intestazione del sito). Su WordPress, il plugin Navi+ Menu Builder lo incorpora tramite shortcode o blocco Gutenberg — non modifichi mai i file del tema.

> Altre piattaforme (Wix, Squarespace, Webflow, siti personalizzati): vedi [Pubblica su Wix / Squarespace / Altri]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/).

---

## Passi

1. **Installa il plugin** — vedi [Installa il plugin Navi+ Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Crea il tuo Mega Menu** in **Aspetto → Naviplus Menu Builder**. Vedi [Mega Menu (Desktop) — Come usare]({{ site.baseurl }}/docs/usage/mega-menu-desktop/how-to-use/) per indicazioni sul design.
3. **Copia l'ID di incorporamento** del menu (mostrato nel pannello di pubblicazione — sembra `SF-123456789`).
4. **Inserisci il menu** dove vuoi nella pagina (sezione successiva).

---

## Inserisci il menu — tre opzioni

### Opzione 1 — Shortcode (funziona ovunque)

Incolla questo in qualsiasi post, pagina o widget compatibile con shortcode:

```text
[naviwp embed_id="SF-123456789"]
```

Per un Mega Menu che dovrebbe apparire nell'**intestazione del sito** su ogni pagina, il posto più pulito è un'area widget dell'intestazione (se il tuo tema ne fornisce una). Se no, usa un blocco / parte del template dell'intestazione globale (temi di Full Site Editing), o torna all'Opzione 3 qui sotto.

### Opzione 2 — Blocco Gutenberg

1. Nell'editor dei blocchi clicca **+ → Naviplus Menu Builder**.
2. Incolla l'**ID di incorporamento** nella barra laterale del blocco.

Puoi anche inserire un blocco **Shortcode** generico con `[naviwp embed_id="SF-..."]`.

### Opzione 3 — Page builders (Elementor, Divi, Bricks, Oxygen)

Usa il widget **Shortcode** del builder e incolla `[naviwp embed_id="SF-..."]`. Se preferisci usare HTML grezzo, inserisci direttamente il div di incorporamento:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

Il plugin carica già il runtime di Navi+, quindi il menu si rende all'interno di quel contenitore.

---

## Considerazioni per dispositivi mobili

Un Mega Menu desktop è, per definizione, un layout desktop-first. Su schermi piccoli di solito non dovrebbe rendersi affatto — abbinalo a un [Mega Menu (Mobile)]({{ site.baseurl }}/docs/usage/mega-menu-mobile/) o [Slide Menu]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/) e usa regole di visualizzazione per nascondere ciascuno sull'altro breakpoint.

Nell'editor apri **Regole di visualizzazione → Dispositivo** e limita il Mega Menu (Desktop) a **solo desktop**.

---

## Aggiornare il menu in seguito

Modifica il menu nell'amministrazione di WordPress (o nell'app web di Navi+). Le modifiche si applicano al successivo caricamento della pagina front-end — non è necessario svuotare la cache di WordPress, perché i menu vengono recuperati in tempo reale dal browser.

---

## Correlati

- [WordPress / WooCommerce — panoramica]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Pubblica i tuoi menu su WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Mega Menu (Desktop) — FAQ]({{ site.baseurl }}/docs/usage/mega-menu-desktop/faq/)
