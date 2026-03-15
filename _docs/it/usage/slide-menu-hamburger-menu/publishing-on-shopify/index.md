---
description: 'Passo 1: Fai clic su Negozio online, quindi fai clic su Temi. Suggerimenti: Fai clic con il tasto destro su Negozio online e seleziona “Apri link in una nuova scheda” per risparmiare tempo.&'
lang: it
layout: default
permalink: /it/docs/usage/slide-menu-hamburger-menu/publishing-on-shopify/
title: Pubblicazione su Shopify
---
# Pubblicazione su Shopify

### Passo 2: (Shopify) Pubblica il menu sul tuo sito web.

#### 2.1. Attiva Navi+ su App Embeds

Passo 1: Fai clic su Negozio online, quindi fai clic su Temi. Suggerimenti: Fai clic con il tasto destro su Negozio online e seleziona “Apri link in una nuova scheda” per risparmiare tempo.&#x20;

Passo 2: Seleziona il tema in cui desideri pubblicare il menu.  Fai clic: **Personalizza**

* Se il tuo sito web è nuovo e non ha ancora utenti, sentiti libero di pubblicare il menu senza preoccupazioni: puoi facilmente attivarlo o disattivarlo in qualsiasi momento senza influenzare i visitatori.
* Se il tuo sito web ha già un traffico regolare, fai più attenzione. La prassi migliore è creare un **Tema duplicato** e testare Navi+ su quella versione prima.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

Passo 3: Vai su App embeds, trova “Navi+ su tutte le pagine” e attivalo.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

Passo 4: Non dimenticare di fare clic su “Salva” per applicare le modifiche.

Dopo questi 4 passaggi, Navi+ è stato installato sul tuo sito web ed è pronto per essere visualizzato. Tuttavia, il processo non è ancora completo. Torna alla scheda dell'app Navi+ per attivare effettivamente **Pubblica menu**.

#### 2.2. Seleziona le impostazioni di visualizzazione e pubblica il menu.

Passo 1: Fai clic sul pulsante **Pubblica sul sito web**.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

Passo 2: Attiva l'interruttore "Pubblica menu (visibile solo quando aperto dall'utente)".&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FhSDziWrg4Jxr9bZ9jB4j%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=3c39339c-fe75-4653-86e7-411318cf506d" alt=""><figcaption></figcaption></figure>

Passo 3: Seleziona il metodo di visualizzazione&#x20;

**Metodo 1: Apri questo menu da un altro elemento del menu Navi+ utilizzando la sintassi open:NaviMenu**

Questo metodo consente di aprire un menu a scorrimento quando l'utente fa clic o tocca un elemento del menu di un altro menu Navi+ (ad esempio: su una tab bar, un FAB nell'angolo in basso dello schermo o un mega menu). Scopi principali di questo metodo:

<details><summary>Scopo 1: Maggiore visibilità e esperienza utente mostrando la mappa del sito completa nel menu a scorrimento mantenendola facile da accedere.</summary>
<p>Il menu a scorrimento è ideale per visualizzare la mappa completa del tuo sito grazie al suo ampio spazio e layout flessibile, rendendolo perfetto per mostrare l'intero catalogo prodotti, collegamenti a pagine chiave, blog, strumenti di supporto, ecc. Tuttavia, il menu a scorrimento è spesso meno visibile per impostazione predefinita. Per migliorare la scoperta, puoi utilizzare un altro menu Navi+ (come una tab bar) per presentare i tuoi collegamenti più importanti e riconoscibili, e posizionare un elemento di menu evidenziato che attiva il menu a scorrimento. Questo garantisce una migliore visibilità e coinvolgimento degli utenti per il menu a scorrimento.</p>
</details>

<details><summary>Scopo 2: <strong>Profondità illimitata del menu con una grande struttura di menu flessibile (Solo Navi+)</strong></summary>
<p>Invece di mostrare un popup con spazio limitato quando viene cliccato un elemento del menu, puoi aprire un altro menu a scorrimento con tre livelli e più modi per presentare informazioni. Questo può essere ripetuto per altri elementi del menu—o anche per lo stesso menu a scorrimento—consentendoti di creare una profondità virtualmente illimitata per i tuoi menu Navi+.</p>
</details>

**Metodo 2: Quando un elemento UI (definito da un selettore CSS come #id_of_element o .class_name) viene cliccato o toccato, questo menu verrà visualizzato.**

Questo è senza dubbio il metodo migliore e più comunemente usato con il Menu a scorrimento.\
In questa guida, ci concentreremo sul sostituire il menu hamburger predefinito del sito web su mobile.\
Puoi anche applicare questo metodo in modo creativo trovando e utilizzando altri selettori CSS per attivare il menu.

<details><summary>Come sostituire il menu hamburger predefinito del tuo sito web con il Menu a scorrimento Navi+ (<strong>Guida popolare)?</strong></summary>
<p>Su la maggior parte dei siti web Shopify, il menu hamburger predefinito è generato dalla versione desktop tramite design reattivo. Di conseguenza, è solitamente molto semplice, ha una profondità superficiale e manca di supporto per icone, immagini o layout avanzati. Sostituirlo con un Menu a scorrimento Navi+ è una scelta comune e pratica per sfruttare le funzionalità avanzate di Navi+.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIB9UqVXh9bL1z4AuHAQj%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=1bef8174-8a59-4765-b2ea-e669c1d12fd6" alt=""><figcaption></figcaption></figure>

<p>Per fare ciò, identifica semplicemente il selettore CSS dell'icona del menu hamburger del tuo sito web e inseriscilo nella casella di testo. Abbiamo già trovato i selettori CSS per alcuni dei temi più popolari per te, elencati di seguito.</p>
<ol>
<li>Selettori CSS per alcuni temi gratuiti e popolari.. da Shopify come Dawn, Sense, Savor, Horizon..</li>
</ol>
<pre class="codehilite"><code>#Details-menu-drawer-container 
</code></pre>

<ol>
<li>Non in questo elenco, non preoccuparti</li>
</ol>
<pre class="codehilite"><code>- Puoi chattare con un sostenitore di Navi+ per assistenza immediata: ci vogliono solo pochi minuti per trovare il selettore CSS.

- Oppure, puoi seguire la guida di auto-aiuto nei prossimi argomenti (Subito dopo questo argomento).
</code></pre>
</details>

<details><summary><strong>Come trovare il selettore CSS sul tuo sito web?</strong></summary>
<p>Puoi chattare con un sostenitore di Navi+ per ricevere assistenza immediata invece di farlo da solo.\
Tuttavia, (1) questo ti aiuterà a comprendere l'idea principale, e (2) se vuoi farlo da solo, segui le istruzioni qui sotto.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### 2.3. Importante! Ottimizza la velocità del menu a scorrimento, aggiungi un effetto di caricamento e previeni menu duplicati

Non è qualcosa che devi risolvere subito, ma a lungo termine è importante per l'esperienza del menu a scorrimento creata da Navi+. Prima che Navi+ sostituisca completamente il vecchio menu a scorrimento, il menu originale del tema è ancora attivo. Per un breve momento—circa mezzo secondo—se un utente carica il menu e tocca rapidamente il pulsante hamburger (un caso raro, ma comunque possibile), il vecchio menu del tema potrebbe apparire e causare un glitch visivo.

<details><summary>Navi+ fornisce una soluzione semplice per ottimizzare l'esperienza utente e la velocità come segue</summary>
<h4>Perché devi farlo? Navi+ non è già veloce?</h4>
<p>Navi+ è molto veloce. È completamente distribuito su una CDN leader con latenza molto bassa (circa 100ms) e può servire milioni di clienti senza rallentare.</p>
<p>Tuttavia, Navi+ funziona ancora all'interno dell'ecosistema Shopify. Shopify ha le proprie regole di caricamento:</p>
<ol>
<li>Shopify dà priorità al caricamento delle proprie risorse prima.</li>
<li>Quindi Shopify carica il contenuto del tema.</li>
<li>Infine, Shopify carica il contenuto delle app, ma non in un ordine specifico.</li>
</ol>
<p>Questo significa che se stai utilizzando più app, Navi+ potrebbe a volte essere caricato più tardi del previsto. Ecco perché può sembrare più lento in alcuni casi.</p>
<hr />
<h3>Qual è la mia soluzione?</h3>
<p>Attualmente, Navi+ ha alta priorità quando viene caricato sui siti web Shopify. Tuttavia, c'è ancora un certo ritardo. Affronteremo questi problemi uno per uno qui:</p>
<h4>Menu a scorrimento: Aggiungi un effetto di caricamento e blocca il selettore di attivazione</h4>
<p>Molto semplice: inserisci semplicemente il selettore CSS che usi per il Menu a scorrimento nella sezione di incorporamento dell'app Navi+ (vedi immagine qui sotto).</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

<p>Nota:</p>
<ul>
<li>Aggiungi il suffisso <strong>(M)</strong> se vuoi che si applichi solo su mobile.</li>
<li>Aggiungi il suffisso <strong>(D)</strong> se vuoi che si applichi solo su desktop.</li>
<li>Non lasciare suffisso se vuoi che si applichi su entrambe le piattaforme.</li>
</ul>
</details>
