---
description: Pubblica un Tab Bar Navi+ su Wix. Navi+ è un'app nativa di Wix App Market — installala, pubblica il Tab Bar e appare automaticamente su tutto il sito. Nessun codice, nessuno snippet di incorporamento.
lang: it
layout: default
permalink: /it/docs/usage/tabbar-bottom-navigation/publishing-on-wix/
title: Tab Bar — Pubblica su Wix
---
# Tab Bar — Pubblica su Wix

Navi+ funziona su Wix come un'**app nativa di Wix App Market**. La **Tab Bar** è un menu **fisso** — si ancora al viewport (tipicamente vicino al fondo su mobile) e rimane fermo mentre i visitatori scorrono. Su Wix, una volta installato Navi+ e pubblicata la Tab Bar, viene resa **automaticamente su tutto il sito** — non è necessario incollare codice e non è richiesto un passo Custom Code.

> Altre piattaforme: vedi [Pubblica su Shopify]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publishing-on-shopify/), [Pubblica su WordPress]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/), o [Squarespace / Webflow / altri]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/).

---

## Passaggi

1. **Installa Navi+ dal [Wix App Market](https://www.wix.com/app-market)** — si apre dentro il tuo dashboard Wix, già collegato al tuo sito. Wix gestisce l'autenticazione, quindi non sono necessarie chiavi API da configurare.
2. **Costruisci la tua Tab Bar** — scegli il layout **Tab Bar** e aggiungi 3–5 destinazioni principali. Vedi [Tab Bar — Come usare]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/) per consigli di progettazione.
3. **Pubblica il menu** (stato: Pubblicato, non Bozza).

Fatto. Navi+ incorpora se stesso nel tuo sito Wix live tramite Wix's Embedded Script, e la Tab Bar appare su ogni pagina immediatamente — nessuno snippet, nessuna modifica tema.

---

## Limitare la Tab Bar a pagine specifiche

Specifica la portata della Tab Bar dentro l'editor Navi+ — non cercare di rimuovere l'app:

- **Regole di visualizzazione → Pattern URL** — mostra la Tab Bar solo su URL che corrispondono a un glob (es. `/shop/*`).
- **Regole di visualizzazione → Dispositivo** — limita a solo mobile.
- **Regole di visualizzazione → Stato visitatore** — limita a utenti connessi, ecc.

Le regole vengono valutate nel browser, quindi i cambiamenti si applicano al prossimo caricamento di pagina.

---

## Fatturazione

Navi+ su Wix viene fatturato attraverso **Wix** — un livello gratuito più piani **Starter, Business e Elite**, addebitati insieme al tuo abbonamento Wix. Effettua l'upgrade dalla schermata dei prezzi dentro l'app.

---

## Correlati

- [Tab Bar — Come usare]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/)
- [Installa Navi+]({{ site.baseurl }}/docs/how-to-install-navi/)
