---
description: 'Se distribuisci il tuo sito web su Shopify, installa l''app dedicata di Shopify qui: <https://apps.shopify.com/pronavi-navigation-design> - È ottimizzata ...'
lang: it
layout: default
permalink: /it/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/
title: Pubblica su Wix / Squarespace / Altri
---
# Pubblica su Wix / Squarespace / Altri

> **Sei su WordPress?** Usa il plugin dedicato [Naviplus Menu Builder]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress/) invece dell'embed manuale qui sotto — nessuna modifica al tema, posiziona il Grid tramite shortcode o blocco Gutenberg.

> **Sei su Shopify?** Installa l'app dedicata [Shopify app](https://apps.shopify.com/pronavi-navigation-design) — è ottimizzata per la piattaforma con opzioni di pubblicazione integrate.

Questa pagina tratta il metodo **embed manuale dello script**, che è il percorso giusto per [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), e siti web personalizzati costruiti con PHP, Node.js, o puro HTML. Hai i seguenti metodi di implementazione:

### 1. Inserisci Navi+ nel Tuo Sito Web

Questo metodo di implementazione è adatto per tutti i tipi di menu che Navi+ attualmente supporta, inclusi: Tabbar, Mega menu, Slide menu, FAB, e Grid menu. Questo codice deve essere utilizzato solo una volta per tutti i menu.

```html
<!-- Inserisci questo codice nell'<head> del sito web. (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Inserisci questo codice nell'<head> del sito web -->
```

### FAQ (Domande Frequenti)

<details><summary>Che cos'è il token?</summary>
<p>Ogni account Navi+ è assegnato a un token unico. Puoi visualizzare e copiare questo token direttamente dall'intestazione dell'applicazione. Il token viene utilizzato per pubblicare il tuo menu in modo sicuro.</p>
</details>

<details><summary>Che cos'è https://live.naviplus.app/start.js?</summary>
<p>Questo è l'URL fisso di Navi+ che contiene la logica di inizializzazione dell'applicazione. Lo script è leggero (circa 4KB), permettendo un caricamento rapido su la maggior parte dei dispositivi e delle condizioni di rete. Viene fornito tramite Cloudflare e BunnyCDN per garantire prestazioni globali stabili e compatibilità affidabile con i browser moderni.</p>
<p>Utilizzare il metodo di caricamento asincrono significa anche che non influisce sul processo di caricamento del sito web.</p>
</details>

<details><summary>Questo codice embed rallenta il mio sito web?</summary>
<p>Il codice qui sotto è estremamente leggero e può essere inserito nel tuo sito web senza influire sulla velocità (richiedendo solo circa 100-200ms per il primo caricamento e 0ms per i caricamenti successivi), sull'esperienza del cliente o sui punteggi SEO</p>
</details>

<details><summary>Qual è il posto migliore per inserire questo frammento di codice?</summary>
<p>Nella sezione head (o il prima possibile). Perché? Il sito web caricherà sequenzialmente le risorse per rendere l'interfaccia. Posizionare Navi+ per primo nel codice HTML aiuterà il tuo menu a essere pronto per essere visualizzato il prima possibile, aspettando che le condizioni siano soddisfatte, quindi il menu apparirà immediatamente. Questo migliora l'esperienza dell'utente.</p>
</details>

<details><summary>Come posso sapere se questo codice è stato incorporato con successo nel mio sito web?</summary>
<p>Ci sono due modi:</p>
<p><strong>Metodo 1 (per tutti):</strong></p>
<p>Apri il tuo sito web con il suffisso #navidebug-on, ad esempio: <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>. Se il sito web passa alla modalità Debug, l'embed funziona correttamente. La modalità Debug ti aiuta a identificare facilmente i selettori CSS. Usa #navidebug-off per disattivarlo.</p>
<p><strong>Metodo 2 (per sviluppatori):</strong></p>
<p>Apri gli strumenti di ispezione del tuo browser, vai alla scheda Console e cerca un messaggio verde: “Using Navi+..”. Questo messaggio indica che il codice è stato incorporato con successo.</p>
</details>

***

### 2. Inserisci un Menu Navi+ in Qualsiasi Punto del Tuo Sito Web

Il codice qui sotto può essere utilizzato più volte su un sito web con diverse informazioni di inserimento (soprattutto l'**ID Embed**, come SF-123456789). Quando il sito web viene reso, il menu verrà distribuito e visualizzato nella posizione in cui il codice è inserito quando le condizioni sono soddisfatte. Questo tipo di menu è adatto per: Mega menu, Grid, ecc.

```html
<!-- Inserisci il codice dove appare il menu SF-123456789. (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Inserisci il codice dove appare il menu SF-123456789 -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">Importante</mark>**:** Il codice sopra utilizza il codice embed di esempio <mark style="color:orange;">SF-123456789</mark>. Assicurati di sostituirlo con il tuo codice embed menu reale.
{% comment %}endhint{% endcomment %}
