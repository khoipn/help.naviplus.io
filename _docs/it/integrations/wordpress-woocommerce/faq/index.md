---
description: Domande frequenti sul plugin WordPress Navi+ Menu Builder — prezzi, prestazioni, WooCommerce, multisite, page builders, caching, privacy e disinstallazione.
lang: it
layout: default
permalink: /it/docs/integrations/wordpress-woocommerce/faq/
title: Navi+ Menu Builder FAQ
---
# Navi+ Menu Builder FAQ

<details>
<summary>Il plugin è gratuito?</summary>
<p>Sì. Il plugin stesso è gratuito su WordPress.org. Il tuo abbonamento Navi+ (Starter / Business / Elite) è ciò che determina quali tipi di menu e quote sono disponibili. Vedi <a href="{{ site.baseurl }}/docs/frequently-asked-questions/navi-plans-starter-business-and-elite/">Piani &amp; Prezzi</a>.</p>
</details>

<details>
<summary>Ho bisogno di un account Navi+ prima di installare?</summary>
<p>No. Quando salvi il tuo primo menu in <strong>Aspetto → Naviplus Menu Builder</strong>, il plugin collega automaticamente il tuo sito al servizio Navi+ — nessuna registrazione separata, nessun token da incollare.</p>
</details>

<details>
<summary>Il plugin rallenta il mio sito?</summary>
<p>Nessun impatto misurabile. Il plugin aggiunge solo un singolo <code>&lt;script async&gt;</code> tag in <code>&lt;head&gt;</code> che carica il runtime di Navi+ (~4&nbsp;KB) da Cloudflare/BunnyCDN. Il runtime è completamente asincrono e non blocca il rendering della pagina. L'overhead tipico al primo caricamento è di 100–200&nbsp;ms; i caricamenti successivi sono di 0&nbsp;ms grazie alla cache HTTP.</p>
</details>

<details>
<summary>Funziona con WooCommerce?</summary>
<p>Sì. Le pagine di WooCommerce sono pagine standard di WordPress, quindi i menu vengono visualizzati su pagine di negozio, prodotto, carrello e checkout senza configurazione aggiuntiva. Usa le regole di visualizzazione nell'editor (l'URL contiene <code>/cart</code>, <code>/checkout</code>, ecc.) per controllare dove appaiono i menu.</p>
</details>

<details>
<summary>Funziona su WordPress Multisite?</summary>
<p>Sì. Attiva il plugin per sito (è supportata anche l'attivazione di rete) e configura i menu di ciascun sito dal proprio <strong>Aspetto → Naviplus Menu Builder</strong>. Ogni sito si collega automaticamente a Navi+ in modo indipendente quando il suo primo menu viene salvato.</p>
</details>

<details>
<summary>Ci saranno conflitti con il mio tema o page builder (Elementor, Divi, Bricks, Oxygen)?</summary>
<p>Nessun conflitto noto. I menu vengono visualizzati nei propri contenitori e utilizzano stili isolati. Per inserire un menu di sezione all'interno di un page builder, usa un widget <strong>Shortcode</strong> con <code>[naviwp embed_id="SF-..."]</code> — o un widget <strong>HTML</strong> con il div di incorporamento.</p>
</details>

<details>
<summary>Posso usare il plugin e l'incorporamento dello script generico contemporaneamente?</summary>
<p>No — scegli uno. Il plugin inietta già il runtime di Navi+, quindi un tag script manuale lo caricherebbe due volte. Se hai precedentemente incorporato lo script nel tuo tema o tramite un iniettore di intestazione, rimuovi quel frammento prima di attivare il plugin.</p>
</details>

<details>
<summary>Ho aggiornato un menu ma non vedo il cambiamento sul mio sito.</summary>
<p>I menu vengono recuperati a runtime, quindi non è necessaria una pulizia della cache di WordPress. Se il cambiamento non appare ancora, esegui un hard reload (Cmd/Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;R) per bypassare la cache del browser. Per i menu fissi, conferma anche che il menu sia impostato su <strong>Pubblicato</strong> (non bozza) e che le sue regole di visualizzazione corrispondano alla pagina.</p>
</details>

<details>
<summary>Come posso nascondere temporaneamente tutti i menu di Navi+?</summary>
<p>Due opzioni:</p>
<ul>
<li><strong>Globale:</strong> disattiva l'interruttore "Inject site-wide" nell'amministrazione del plugin — il runtime smette di caricarsi tranne che su pagine con un <code>[naviwp]</code> shortcode/blocco.</li>
<li><strong>Per menu:</strong> cambia il menu in <strong>Bozza</strong> nell'editor.</li>
</ul>
</details>

<details>
<summary>Come disinstallo il plugin?</summary>
<p>Disattivalo e cancellalo da <strong>Plugin → Plugin installati</strong>. Il plugin memorizza solo l'identificatore del sito e alcune opzioni in <code>wp_options</code>; la disinstallazione li rimuove automaticamente. I tuoi menu sul servizio Navi+ sono preservati — se reinstalli in seguito puoi continuare a utilizzare gli stessi ID di incorporamento.</p>
</details>

<h2 id="privacy">Privacy &amp; servizi esterni</h2>

<p>Il plugin si connette al servizio Navi+ Menu Builder per creare e visualizzare i menu. I dati scambiati possono includere (ma non sono limitati a): il tuo <strong>dominio del sito</strong>, la tua <strong>configurazione del menu</strong> e dati minimi di utilizzo necessari per visualizzare i menu.</p>

<ul>
<li>Informativa sulla privacy: <a href="https://naviplus.io/privacy">https://naviplus.io/privacy</a></li>
<li>Loader dello script: <code>https://live.naviplus.app/start.js</code></li>
</ul>

<details>
<summary>Dove posso segnalare un bug o richiedere una funzionalità?</summary>
<p>Usa il forum di supporto ufficiale: <a href="https://wordpress.org/support/plugin/naviplus-menu-builder/">https://wordpress.org/support/plugin/naviplus-menu-builder/</a>. Per domande su account o fatturazione, invia un'email a <a href="mailto:support@naviplus.io">support@naviplus.io</a>.</p>
</details>
