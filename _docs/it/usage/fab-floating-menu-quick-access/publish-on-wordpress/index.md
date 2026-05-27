---
description: 'Pubblica un Navi+ FAB (Floating Action Button) su WordPress con il plugin Navi+ AI Menu Builder. Il FAB è un menu appiccicoso: una volta pubblicato nell''editor, appare automaticamente su tutto il sito.'
lang: it
layout: default
permalink: /it/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/
title: FAB — Pubblica su WordPress
---
# FAB — Pubblica su WordPress

A **FAB (Floating Action Button)** è un **menu appiccicoso** — fluttua sopra la pagina (tipicamente in un angolo) e rimane fermo mentre i visitatori scorrono. Su WordPress, il plugin Navi+ AI Menu Builder lo rende automaticamente visibile su tutto il sito; non è necessario incollare alcun codice o shortcode.

> Altre piattaforme (Wix, Squarespace, Webflow, siti personalizzati): vedere [Pubblica su Wix / Squarespace / Altri]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress-woocommerce-wix-others/).

---

## Passi

1. **Installa il plugin** — vedere [Installa il plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Crea il tuo FAB** in **Aspetto → Naviplus Menu Builder**. Vedi [FAB — Come usare]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/) per indicazioni sul design (azione singola vs. menu espandibile).
3. **Pubblica il menu** nell'editor (stato: Pubblicato, non Bozza).

Il FAB appare immediatamente su ogni pagina del tuo sito WordPress. Nessun shortcode, nessuna modifica del tema.

---

## Limitare il FAB a pagine o pubblici specifici

Non disabilitare l'inserimento del plugin su tutto il sito (questo disattiva completamente il runtime). Definisci il FAB nell'editor:

- **Regole di visualizzazione → Modello URL** — mostra solo su `/contact*`, nascondi su `/checkout*`, ecc.
- **Regole di visualizzazione → Dispositivo** — desktop, mobile, o entrambi.
- **Regole di visualizzazione → Stato del visitatore** — solo utenti con accesso, ecc.

---

## Suggerimenti per mobile

- Scegli un angolo che non confligga con l'interfaccia del browser su mobile (il basso a destra è un predefinito sicuro; il basso al centro può scontrarsi con la barra degli URL su iOS).
- Assicurati che il FAB non sovrapponga una Tab Bar o un widget di chat. Vedi [Menu che sovrappongono altri elementi]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).
- Se il FAB si espande in un menu, mantieni l'elenco delle azioni breve (3–6 elementi) — elenchi lunghi sono scomodi al tocco.

---

## Verifica che il FAB sia attivo

Aggiungi `#navidebug-on` a qualsiasi URL di pagina. La pagina passa alla modalità Debug di Navi+ se il plugin è configurato. Vedi [Crea il tuo primo menu — Verifica la connessione]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Correlati

- [WordPress / WooCommerce — panoramica]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Pubblica i tuoi menu su WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [FAB — Come usare]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/)
