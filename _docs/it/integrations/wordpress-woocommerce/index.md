---
description: Navi+ AI Menu Builder è il plugin ufficiale di WordPress per Navi+. Installalo, crea menu all'interno di WordPress e pubblicali su tutto il sito o tramite lo shortcode [naviwp] — nessuna modifica al codice, nessun iniettore di intestazione.
lang: it
layout: default
permalink: /it/docs/integrations/wordpress-woocommerce/
title: WordPress / WooCommerce — Navi+ AI Menu Builder
---
# WordPress / WooCommerce — Navi+ AI Menu Builder

Se il tuo sito è basato su **WordPress** o **WooCommerce**, il modo consigliato per pubblicare i menu Navi+ è il plugin ufficiale **Navi+ AI Menu Builder** su WordPress.org. Il nome completo della lista su WordPress.org è **Naviplus Menu Builder**.

> Pagina del plugin: <https://wordpress.org/plugins/naviplus-menu-builder/>
> Forum di supporto: <https://wordpress.org/support/plugin/naviplus-menu-builder/>

Questa pagina è il punto di ingresso: installa il plugin, abilita i menu su tutto il sito o incorpora i menu per posizione, e scegli layout che funzionano bene su mobile (Tab Bar, Slide / hamburger, FAB).

---

## 1. Requisiti

- **WordPress 5.8** o versione successiva (si consiglia di utilizzare l'ultima versione di WordPress supportata dal tuo host).
- Accesso da amministratore — necessario per installare plugin e modificare **Aspetto**.
- Internet in uscita — i menu sono progettati sul servizio Navi+ e resi tramite uno script caricato da `https://live.naviplus.app/start.js`. Vedi la sezione [8. Servizi esterni & privacy](#8-external-services--privacy).

---

## 2. Installa il plugin

Tre metodi di installazione sono dettagliati nella pagina di installazione dedicata: **[Installa il plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/)** — ricerca admin (consigliato), caricamento ZIP, o FTP / file manager.

Dopo l'attivazione, il plugin appare sotto **Aspetto → Naviplus Menu Builder** nella barra laterale dell'amministratore.

---

## 3. Dopo l'attivazione

1. Vai su **Aspetto → Naviplus Menu Builder**.
2. Crea il tuo primo menu seguendo il flusso sullo schermo. Il plugin **si connette automaticamente** al tuo sito con Navi+ al primo salvataggio — non è necessario creare un account Navi+ in anticipo.
3. Progetta il layout nell'**editor visivo di Navi+ AI Menu Builder**, aperto dalla dashboard di WordPress.

La struttura e gli stili del menu vivono sul **servizio Navi+**; WordPress memorizza solo un **identificatore del sito** che consente a Navi+ di riconoscere la tua installazione — questo **non** è la tua password di WordPress e non è un token che devi gestire.

Guida completa: **[Crea il tuo primo menu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.

---

## 4. Scegliere un layout per i visitatori mobili

Navi+ supporta diversi tipi di menu. Per i siti mobile-first, questi di solito funzionano meglio:

| Layout | Quando usarlo |
| --- | --- |
| **Tab Bar** | Accesso rapido a 3–5 destinazioni principali, ancorato vicino al fondo della viewport (o ovunque tu lo posizioni nell'editor). |
| **Slide Menu (hamburger)** | Molti elementi o categorie profonde — risparmia spazio sugli schermi piccoli. |
| **Mega Menu** | Menu ricchi di contenuti — ottimi su desktop; su mobile, controlla i target di tocco e il comportamento di scorrimento nell'editor. |
| **Grid Menu** | Collegamenti rapidi alle categorie e pagine hub. |
| **FAB (floating button)** | Azioni rapide (supporto, contatto) che non dovrebbero occupare spazio nell'intestazione. |

Dopo aver regolato il layout, **testa sempre su un dispositivo reale** — o almeno nella modalità responsiva del browser.

Per istruzioni specifiche sui tipi di menu per WordPress:

- **[Tab Bar — Pubblica su WordPress]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/)**
- **[Mega Menu (Desktop) — Pubblica su WordPress]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/)**
- **[Mega Menu (Mobile) — Pubblica su WordPress]({{ site.baseurl }}/docs/usage/mega-menu-mobile/publish-on-wordpress/)**
- **[Slide Menu — Pubblica su WordPress]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/publish-on-wordpress/)**
- **[FAB — Pubblica su WordPress]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/)**
- **[Grid Menu — Pubblica su WordPress]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress/)**

Per un confronto completo, vedi **[Panoramica: Scegli il menu giusto]({{ site.baseurl }}/docs/usage/explore-common-menus/)**.

---

## 5. Visualizza i menu su tutto il sito

- Nell'amministrazione del plugin, puoi **abilitare l'incorporamento su tutto il sito** (incorporamento globale). Quando attivato, il runtime viene iniettato in ogni pagina e i menu fissi (Tab Bar, FAB, Slide) vengono resi automaticamente su tutto il sito.
- Se desideri solo menu su alcune pagine (ad es. pagine di atterraggio solo per mobile), **disattiva l'incorporamento su tutto il sito** e utilizza lo shortcode (sezione 6).

L'etichetta esatta e la posizione dell'interruttore possono variare a seconda della versione del plugin — cerca nella schermata delle impostazioni del plugin sotto **Aspetto → Naviplus Menu Builder**.

---

## 6. Incorpora un menu in un post, pagina o widget (shortcode)

Usa lo shortcode:

```text
[naviwp embed_id="YOUR-EMBED-ID"]
```

Sostituisci `YOUR-EMBED-ID` con l'**ID di incorporamento** del tuo menu (mostrato nell'editor nel pannello di pubblicazione del menu — appare come `SF-123456789`).

**Gutenberg (editor a blocchi):**

- Inserisci un blocco **Naviplus Menu Builder** e incolla il tuo **ID di incorporamento** nella barra laterale del blocco, **oppure**
- Inserisci un blocco **Shortcode** generico con `[naviwp embed_id="..."]`, **oppure**
- Incolla `[naviwp embed_id="..."]` direttamente all'interno di un blocco **Paragrafo** — il plugin lo riconosce.

**Elementor / Divi / Bricks / altri builder:**

- Usa il widget **Shortcode** del builder e incolla `[naviwp embed_id="..."]`.

Maggiori dettagli e tutti e tre i metodi di Gutenberg: **[Pubblica i tuoi menu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)**.

---

## 7. Disabilita o nascondi temporaneamente i menu

- **Disattiva il plugin** → il runtime smette di caricarsi; nessun menu Navi+ viene visualizzato ovunque sul tuo sito.
- **Disattiva l'incorporamento su tutto il sito** nell'amministrazione del plugin → i menu vengono visualizzati solo sulle pagine che includono uno shortcode `[naviwp]` o un blocco.
- **Passa un menu a Bozza** nell'editor → quel menu specifico non è più pubblicato, anche se il runtime è caricato.
- **Rimuovi uno shortcode** da una pagina o widget → il menu scompare solo in quel punto.

I tuoi menu sul servizio Navi+ sono preservati in tutti questi casi. Reinstallare o riattivare il plugin e riutilizzare gli stessi ID di incorporamento li riporta indietro senza alcuna ricostruzione.

---

## 8. Servizi esterni & privacy

Il plugin si connette al servizio Navi+ AI Menu Builder per creare e **rendere** i tuoi menu. I dati scambiati possono includere (senza limitazioni): il tuo **dominio del sito**, la tua **configurazione del menu**, e dati minimi di utilizzo necessari per il rendering.

- Politica sulla privacy: <https://naviplus.io/privacy>
- Loader dello script: `https://live.naviplus.app/start.js`

Se operi sotto un framework di privacy che richiede la divulgazione di servizi di terze parti (ad es. GDPR), elenca **Navi+** e l'URL del loader dello script nel tuo avviso sulla privacy del sito.

---

## 9. Link utili

| Risorsa | URL |
| --- | --- |
| Pagina del plugin WordPress.org | <https://wordpress.org/plugins/naviplus-menu-builder/> |
| Forum di supporto WordPress.org | <https://wordpress.org/support/plugin/naviplus-menu-builder/> |
| Home di Naviplus | <https://naviplus.io> |
| Politica sulla privacy | <https://naviplus.io/privacy> |
| FAQ del plugin (questo sito) | [Navi+ AI Menu Builder FAQ]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/) |

---

## 10. Riepilogo rapido

1. **Installa & attiva** da WordPress.org o un caricamento ZIP.
2. Apri **Aspetto → Naviplus Menu Builder** → crea il tuo menu e progettalo nell'editor di Navi+.
3. Scegli un layout adatto ai dispositivi mobili: **Tab Bar** / **hamburger** / **FAB**.
4. Scegli la visualizzazione **su tutto il sito** o `[naviwp embed_id="..."]` per pagine specifiche.
5. **Testa su un dispositivo reale** prima di andare in diretta.

*Questa pagina potrebbe essere aggiornata man mano che nuove versioni del plugin vengono rilasciate; la versione canonica e il changelog si trovano sulla [pagina del plugin WordPress.org](https://wordpress.org/plugins/naviplus-menu-builder/).
