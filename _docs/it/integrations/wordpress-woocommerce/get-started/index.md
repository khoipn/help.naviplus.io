---
description: Dopo aver attivato il plugin Navi+ AI Menu Builder, apri Aspetto → Naviplus Menu Builder, crea il tuo primo menu nell'editor visivo e lascia che il plugin colleghi automaticamente il tuo sito WordPress a Navi+.
lang: it
layout: default
permalink: /it/docs/integrations/wordpress-woocommerce/get-started/
title: Crea il tuo primo menu
---
# Crea il tuo primo menu

Una volta attivato il plugin, puoi creare menu all'interno di WordPress — nessuna registrazione separata, nessun token da incollare.

---

## 1. Apri il costruttore di menu

Nell'amministrazione di WordPress, vai a:

> **Aspetto → Naviplus Menu Builder**

Questo apre l'editor visivo di Navi+ all'interno della tua dashboard di WordPress.

---

## 2. Crea il tuo primo menu

Segui il flusso sullo schermo per creare un menu. Quando salvi il primo menu, il plugin **collega automaticamente** il tuo sito a Navi+:

- Registra un **identificatore del sito** che consente al servizio Navi+ di riconoscere la tua installazione di WordPress.
- Salva quell'identificatore in WordPress in modo che le modifiche successive al menu vengano instradate al sito corretto.

> L'identificatore del sito **non** è la tua password di WordPress e **non** è un token Navi+ che devi gestire. È un valore opaco che il plugin gestisce per te.

Non è necessario creare un account Navi+ prima di installare il plugin — il salvataggio del primo menu gestisce la connessione.

---

## 3. Progetta il layout

All'interno dell'editor, scegli un tipo di menu (Tab Bar, Slide / hamburger, Mega Menu, Grid, FAB), quindi progetta il layout. Documentazione dell'editor:

- [Panoramica dei tipi di menu]({{ site.baseurl }}/docs/usage/explore-common-menus/)
- [Elementi del menu — elementi, link, icone, badge]({{ site.baseurl }}/docs/menu-items/item-overview/)
- [Panoramica del design]({{ site.baseurl }}/docs/design/design-overview/)

La struttura e gli stili del menu sono memorizzati sul servizio Navi+; WordPress memorizza solo l'identificatore del sito.

---

## 4. Verifica la connessione

Apri il front end del tuo sito. I menu fissi (Tab Bar, FAB) che contrassegni come **Pubblicati** nell'editor appaiono automaticamente su tutto il sito.

Per confermare che il runtime si sta caricando, utilizza uno dei seguenti metodi:

- **Modalità di debug (per tutti):** aggiungi `#navidebug-on` a qualsiasi URL — ad esempio `https://your-site.com/#navidebug-on`. La pagina passa alla modalità di debug di Navi+ se il plugin è configurato. Usa `#navidebug-off` per disattivarlo.
- **Console (per sviluppatori):** apri DevTools → Console; dovresti vedere un messaggio verde `Using Navi+..`.

---

## Prossimo passo

Per Mega Menu e Grid Menu — posizionati in punti specifici in una pagina — consulta **[Pubblica i tuoi menu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)** per il `[naviwp]` shortcode e il blocco Gutenberg.
