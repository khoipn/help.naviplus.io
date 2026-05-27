---
description: 'Se distribuisci il tuo sito web su Shopify, installa l''app dedicata di Shopify qui: <https://apps.shopify.com/pronavi-navigation-design> - È ottimizzata ...'
lang: it
layout: default
permalink: /it/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/
title: Pubblica su Wix / Squarespace / Altri
---
# Pubblica su Wix / Squarespace / Altri

> **Su WordPress?** Usa il plugin dedicato [Naviplus Menu Builder]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/) invece dell'embed manuale qui sotto — nessuna modifica al tema, posiziona il Mega Menu tramite shortcode o blocco Gutenberg.

> **Su Shopify?** Installa l'app dedicata [Shopify app](https://apps.shopify.com/pronavi-navigation-design) — è ottimizzata per la piattaforma con opzioni di pubblicazione integrate.

Questa pagina tratta il metodo di **embed manuale dello script**, che è il percorso giusto per [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), e siti web personalizzati costruiti con PHP, Node.js, o puro HTML. Hai i seguenti metodi di implementazione:

### 1. Inserisci Navi+ nel tuo sito web

Questo metodo di implementazione è adatto per tutti i tipi di menu che Navi+ supporta attualmente, inclusi: Tabbar, Mega menu, Slide menu, FAB, e Grid menu. Questo codice deve essere utilizzato solo una volta per tutti i menu.

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
<p>Questo è l'URL fisso di Navi+ che contiene la logica di inizializzazione dell'applicazione. Lo script è leggero (circa 4KB), permettendo di caricarsi rapidamente su la maggior parte dei dispositivi e condizioni di rete. Viene fornito tramite Cloudflare e BunnyCDN per garantire prestazioni globali stabili e compatibilità affidabile con i browser moderni.</p>
<p>Utilizzare il metodo di caricamento async significa anche che non influisce sul processo di caricamento del sito web.</p>
</details>

<details><summary>Questo codice di embed rallenta il mio sito web?</summary>
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
<p>Apri gli strumenti di ispezione del tuo browser, vai alla scheda Console e cerca un messaggio verde: "Utilizzando Navi+..". Questo messaggio indica che il codice è stato incorporato con successo.</p>
</details>

***

### 2. Pubblica il menu utilizzando il Selettore CSS (raccomandato)

Dopo aver incorporato lo script sopra, vai all'app Navi+ per configurare dove e come appare il tuo menu sulla pagina.

#### I.1. Comprendere il Selettore CSS

Un Selettore CSS è un modo per mirare a un elemento HTML specifico sulla tua pagina web. Navi+ lo utilizza per sapere esattamente **dove** posizionare il tuo menu — se inserirlo prima o dopo un elemento, o sostituire completamente uno esistente.

Non è necessario essere uno sviluppatore per usarlo. Navi+ fornisce un semplice campo di input dove inserisci il selettore, e gestisce il resto.

Per trovare il corretto Selettore CSS per il tuo sito web, puoi utilizzare:
- [Modalità Debug](/docs/usage/debug-mode-find-css-selectors/) — lo strumento integrato di Navi+: passa il mouse su qualsiasi elemento sulla tua pagina e copia istantaneamente il suo selettore
- [Browser DevTools](/docs/usage/general/find-css-selector/) — un metodo manuale utilizzando l'ispettore integrato del tuo browser

#### I.2. Tre opzioni di pubblicazione

Passo 1: Clicca sul pulsante **Pubblica sul sito web** nell'app Navi+.

Passo 2: Attiva l'interruttore "Pubblica menu tramite metodo Inserisci/Sostituisci".

Passo 3: Inserisci il tuo Selettore CSS e scegli una delle tre opzioni di pubblicazione qui sotto.

<details><summary>Opzione 1: Inserisci Prima</summary>
<p>Inserisce il menu Navi+ immediatamente <strong>prima</strong> dell'elemento selezionato.</p>
<p><strong>Esempio:</strong> Selettore CSS <code>main</code> → il menu appare sopra l'area principale di contenuto della pagina.</p>
<p>Selettori CSS comuni per questa opzione:</p>
<ul>
<li><code>main</code> — funziona sulla maggior parte delle piattaforme (Webflow, Magento, siti personalizzati)</li>
<li><code>#main</code> — alcune piattaforme e temi personalizzati</li>
<li><code>.main-content</code> — varie piattaforme</li>
</ul>
<p>Non è in questa lista? Puoi chattare con un supporto Navi+ per assistenza immediata, o utilizzare <a href= "/docs/usage/debug-mode-find-css-selectors/">Modalità Debug</a> o <a href= "/docs/usage/general/find-css-selector/">Browser DevTools</a> per trovarlo tu stesso.</p>
</details>

<details><summary>Opzione 2: Inserisci Dopo</summary>
<p>Inserisce il menu Navi+ immediatamente <strong>dopo</strong> l'elemento selezionato.</p>
<p><strong>Esempio:</strong> Selettore CSS <code>header</code> → il menu appare appena sotto l'intestazione.</p>
<p>Questa è la configurazione più comune per un Mega Menu desktop.</p>
<p>Selettori CSS comuni per questa opzione:</p>
<ul>
<li><code>header</code> — funziona sulla maggior parte delle piattaforme</li>
<li><code>.header-wrapper</code> — alcune piattaforme</li>
<li><code>.site-header</code> — varie piattaforme</li>
</ul>
<p>Non è in questa lista? Puoi chattare con un supporto Navi+ per assistenza immediata, o utilizzare <a href= "/docs/usage/debug-mode-find-css-selectors/">Modalità Debug</a> o <a href= "/docs/usage/general/find-css-selector/">Browser DevTools</a> per trovarlo tu stesso.</p>
</details>

<details><summary>Opzione 3: Sostituisci</summary>
<p>Sostituisce completamente l'elemento selezionato con il menu Navi+. L'elemento originale è nascosto e Navi+ prende il suo posto.</p>
<p><strong>Esempio:</strong> Selettore CSS <code>.main-nav</code> → la navigazione predefinita del sito è nascosta e sostituita dal tuo Mega Menu Navi+.</p>
<p>Selettori CSS comuni per questa opzione:</p>
<ul>
<li><code>nav</code> — elemento di navigazione generico</li>
<li><code>.main-nav</code> — varie piattaforme</li>
<li><code>.site-navigation</code> — varie piattaforme</li>
</ul>
<p><strong>Nota:</strong> Quando si utilizza la modalità Sostituisci, potrebbe apparire un breve flash del menu originale mentre Navi+ si carica. Vedi I.4 qui sotto per prevenire questo.</p>
<p>Non è in questa lista? Puoi chattare con un supporto Navi+ per assistenza immediata, o utilizzare <a href= "/docs/usage/debug-mode-find-css-selectors/">Modalità Debug</a> o <a href= "/docs/usage/general/find-css-selector/">Browser DevTools</a> per trovarlo tu stesso.</p>
</details>

#### I.3. Targeting specifico per dispositivo

Puoi controllare se il Selettore CSS si applica su mobile, desktop, o entrambi aggiungendo un suffisso al tuo selettore:

| Suffisso | Si applica a |
|----------|--------------|
| `(M)` | Solo mobile |
| `(D)` | Solo desktop |
| *(nessuno)* | Sia mobile che desktop |

**Esempi:**
- `header(D)` — inserisce o sostituisce solo su desktop
- `header(M)` — inserisce o sostituisce solo su mobile
- `header` — inserisce o sostituisce su entrambe le piattaforme

**I.4. Importante! Ottimizza la velocità del Mega Menu e l'esperienza utente (modalità Sostituisci)**

Quando sostituisci un menu con un altro, Navi+ aspetta che il vecchio menu venga visualizzato e poi lo scambia istantaneamente con il nuovo. Anche se questo avviene quasi immediatamente, c'è ancora un breve momento in cui appare il vecchio menu, il che potrebbe confondere gli utenti.

Con questo passaggio, puoi nascondere completamente il vecchio menu e mostrare invece un effetto di caricamento. Questo fa sembrare il sito web più veloce e migliora l'esperienza dell'utente. Navi+ fornisce un'opzione semplice integrata per questo nelle impostazioni di pubblicazione — abilitala e configura il Selettore CSS dell'elemento da nascondere, con un suffisso `(M)` o `(D)` opzionale per il controllo specifico del dispositivo.

***

### 3. Inserisci un Menu Navi+ in Qualsiasi Punto del Tuo Sito Web

Il codice qui sotto può essere utilizzato più volte su un sito web con diverse informazioni di inserimento (soprattutto l'**ID Embeded**, come SF-123456789). Quando il sito web viene renderizzato, il menu verrà distribuito e visualizzato nella posizione in cui il codice è inserito quando le condizioni sono soddisfatte. Questo tipo di menu è adatto per: Mega menu, Grid, ecc.

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

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">Importante</mark>**:** Il codice sopra utilizza il codice di embed di esempio <mark style="color:orange;">SF-123456789</mark>. Assicurati di sostituirlo con il tuo codice di embed del menu reale.
{% comment %}endhint{% endcomment %}
