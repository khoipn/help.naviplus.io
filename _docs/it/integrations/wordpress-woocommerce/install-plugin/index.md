---
description: Installa il plugin Navi+ Menu Builder sul tuo sito WordPress o WooCommerce — dal directory di WordPress.org, un upload ZIP, FTP o WP-CLI.
lang: it
layout: default
permalink: /it/docs/integrations/wordpress-woocommerce/install-plugin/
title: Installa il plugin Navi+ Menu Builder
---
# Installa il plugin Navi+ Menu Builder

> Il nome completo del plugin su WordPress.org è **Naviplus Menu Builder**. Nel resto di questi documenti è riferito come **Navi+ Menu Builder** (o semplicemente **Navi+**).

Il plugin è pubblicato nel directory ufficiale di WordPress.org, quindi si installa allo stesso modo di qualsiasi altro plugin WordPress — nessun ZIP da terze parti, nessun codice di licenza.

> Directory: <https://wordpress.org/plugins/naviplus-menu-builder/>

---

## Opzione A — Installa dall'amministratore di WordPress (consigliato)

1. Accedi al tuo amministratore di WordPress (`/wp-admin/`).
2. Vai a **Plugins → Aggiungi Nuovo**.
3. Cerca **Naviplus Menu Builder** (o semplicemente **Navi+**).
4. Clicca su **Installa Ora**, poi **Attiva**.

Dopo l'attivazione, il plugin è disponibile sotto **Aspetto → Naviplus Menu Builder** nella barra laterale dell'amministratore.

---

## Opzione B — Carica un ZIP

Usa questa opzione se il tuo host blocca le installazioni dal directory.

1. Sulla [pagina del plugin WordPress.org](https://wordpress.org/plugins/naviplus-menu-builder/), clicca su **Scarica** per ottenere il file `.zip`.
2. Nel tuo amministratore, vai a **Plugins → Aggiungi Nuovo → Carica Plugin**.
3. Scegli il ZIP, clicca su **Installa Ora**, poi **Attiva Plugin**.

---

## Opzione C — FTP / gestore file

1. Estrai il ZIP del plugin. La cartella radice all'interno dell'archivio è `naviplus-menu-builder/`.
2. Carica quella cartella in `wp-content/plugins/` sul tuo server.
3. In **Plugins → Plugins Installati**, clicca su **Attiva** su **Naviplus Menu Builder**.

---

## Opzione D — WP-CLI

```bash
wp plugin install naviplus-menu-builder --activate
```

---

## Requisiti

- WordPress **5.8** o più recente — si consiglia di utilizzare l'ultima versione stabile di WordPress supportata dal tuo host.
- Capacità di amministratore — necessaria per installare plugin e modificare **Aspetto**.

---

## Dopo l'attivazione

Il plugin è installato ma non sta ancora visualizzando nulla — ciò avviene dopo che crei il tuo primo menu nell'editor, momento in cui il plugin collega automaticamente il tuo sito a Navi+.

Continua con **[Crea il tuo primo menu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.
