---
description: Pubblica una Navi+ Tab Bar su WordPress con il plugin Navi+ Menu Builder — senza modifiche al codice. La Tab Bar è un menu fisso, quindi viene visualizzato automaticamente su tutto il sito una volta pubblicato nell'editor.
lang: it
layout: default
permalink: /it/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/
title: Tab Bar — Pubblica su WordPress
---
# Tab Bar — Pubblica su WordPress

La **Tab Bar** è un **menu fisso** — si ancorano alla finestra di visualizzazione (tipicamente vicino al fondo su mobile) e rimane in posizione mentre i visitatori scorrono. Su WordPress, il plugin Navi+ Menu Builder rende la Tab Bar visibile su tutto il sito automaticamente; non è necessario incollare alcun codice o shortcode.

> Altre piattaforme (Wix, Squarespace, Webflow, siti personalizzati): vedere [Pubblica su Wix / Squarespace / Altri]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/).

---

## Passi

1. **Installa il plugin** — vedere [Installa il plugin Navi+ Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Apri l'editor** — nell'amministrazione di WordPress, vai su **Aspetto → Naviplus Menu Builder**.
3. **Crea la tua Tab Bar** — scegli il layout della **Tab Bar**, aggiungi 3–5 destinazioni principali. Vedi [Tab Bar — Come usare]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/) per suggerimenti di design.
4. **Pubblica il menu** nell'editor (stato: Pubblicato, non Bozza).

Ecco fatto. La Tab Bar appare immediatamente sul front end del tuo sito WordPress — nessun shortcode, nessuna modifica al tema. L'inserimento del plugin su tutto il sito (attivato per impostazione predefinita) carica il runtime di Navi+ su ogni pagina, e il runtime recupera ogni menu fisso pubblicato per il tuo sito.

---

## Limitare la Tab Bar a pagine specifiche

Non disabilitare l'inserimento del plugin su tutto il sito — questo disattiva completamente il runtime. Invece, limita la Tab Bar nell'editor:

- **Regole di visualizzazione → Modello URL** — mostra la Tab Bar solo sugli URL che corrispondono a un glob (ad es. `/shop/*`).
- **Regole di visualizzazione → Dispositivo** — limita solo ai dispositivi mobili.
- **Regole di visualizzazione → Stato del visitatore** — limita agli utenti con accesso, ecc.

Le regole di visualizzazione vengono valutate dal runtime nel browser, quindi le modifiche si applicano al successivo caricamento della pagina.

---

## Suggerimenti per mobile per la Tab Bar

- Mantieni **3–5 schede** — più di così affolla la finestra di visualizzazione.
- Usa etichette brevi (una parola dove possibile) e icone chiare.
- Testa la dimensione del target di tocco su un dispositivo reale, non solo nell'anteprima dell'editor.
- Se la Tab Bar sovrappone un altro elemento fisso (ad es. un widget di chat), vedere [Menu che sovrappone altri elementi]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).

---

## Verifica che la Tab Bar sia attiva

Aggiungi `#navidebug-on` a qualsiasi URL di pagina (ad es. `https://your-site.com/#navidebug-on`). La pagina passa alla modalità Debug di Navi+ se il plugin è configurato. Aggiungi `#navidebug-off` per disattivarlo.

Per controlli più approfonditi, vedere [Crea il tuo primo menu — Verifica la connessione]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Correlati

- [WordPress / WooCommerce — panoramica]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Pubblica i tuoi menu su WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [FAQ Naviplus Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/)
