---
description: Come posso evitare che le mie immagini vengano compresse durante il caricamento con lo strumento Navi+?
lang: it
layout: default
permalink: /it/docs/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-images/
title: Ottimizza le immagini
---
# Ottimizza le immagini

Come posso evitare che le mie immagini vengano compresse durante il caricamento con lo strumento Navi+?

#### I. Perché dimensioni delle immagini più piccole sono migliori per SEO e esperienza utente?

Utilizzare dimensioni delle immagini più piccole aiuta il tuo sito web a caricarsi più velocemente. I motori di ricerca come Google considerano la velocità della pagina un fattore di ranking importante, quindi le immagini ottimizzate possono migliorare il tuo SEO.

Un caricamento più veloce rende anche il sito web più fluido e piacevole per i visitatori, specialmente su dispositivi mobili o connessioni più lente. Questo significa che gli utenti sono più propensi a rimanere sul tuo sito e continuare a esplorare i tuoi prodotti.

#### II. Come elabora Navi+ le tue immagini?

Navi+ prima carica la tua immagine nella sua dimensione originale. Poi comprime l'immagine con un algoritmo ottimizzato e riduce la dimensione di visualizzazione. Questa dimensione è scelta con cura da Navi+ per essere ideale sia per l'esperienza utente che per il SEO, poiché le immagini nei menu sono solitamente miniature o icone che devono essere piccole e caricarsi rapidamente.

**Nota:** Per immagini piccole come loghi o icone, Navi+ non le comprime per preservare la nitidezza.

Dopo di ciò, Navi+ memorizza la tua immagine su BunnyCDN — una potente rete di distribuzione dei contenuti (CDN) per immagini, JavaScript, CSS e altro. BunnyCDN fornisce velocità di caricamento estremamente rapide attraverso la sua rete di server globale. Questo assicura che il tuo sito web possa gestire milioni di visite senza rallentare o causare ritardi.

#### III. Cosa devo fare se voglio mantenere le mie immagini alla loro qualità originale?

In alcuni casi speciali, potresti voler che Navi+ non modifichi la qualità della tua immagine—altrimenti, la compressione potrebbe ridurre la qualità che ti aspetti, ad esempio, alcune immagini di prodotto importanti. In questo caso, devi caricare l'immagine direttamente su Shopify e fornire il link a Navi+ per mantenere la qualità originale.

**Passo 1: Prepara la tua immagine (processo manuale)**\
Prepara la tua immagine come desiderato e rinominala per l'ottimizzazione SEO. (Navi+ rinominerà solo le immagini per SEO se caricate tramite lo strumento Navi+.)\
Dovresti anche comprimere l'immagine a una dimensione ragionevole—idealmente qualche centinaio di KB. Puoi utilizzare qui il Riduttore di Immagini di Shopify: <https://www.shopify.com/tools/image-resizer>.

**Passo 2: Carica su Shopify**\
Fai clic con il tasto destro sul menu **Content**, seleziona **Apri link in nuova scheda**, poi vai su **Files**. Trascina e rilascia l'immagine preparata nel Passo 1. Una volta caricata, trova il tuo file nell'elenco e fai clic sull'icona del link per copiare il suo URL. Questo URL sarà utilizzato in Navi+ per caricare l'immagine.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F35kK3wzf4jQ6lgRuPIK6%2F1.2.png?alt=media&#x26;token=1b45a6ad-32fb-4988-bda2-9de4aaa7db53" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRKyGXqaCHjUzEEI12woQ%2F1.3.png?alt=media&#x26;token=dbdc467c-13b0-4eb7-9786-558c5d1704d2" alt=""><figcaption></figcaption></figure>

**Passo 3: Usa l'URL dell'immagine in Navi+**\
Incolla l'URL ottenuto dal Passo 2 in Navi+ utilizzando lo strumento **Upload Image**.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FPy9nqxsNKCo4RMjo1cTP%2F1.4.png?alt=media&#x26;token=a0a4897c-5e1c-47d8-951c-52028b705e1e" alt=""><figcaption></figcaption></figure>


---

# Istruzioni per l'agente: Consultare questa documentazione

Se hai bisogno di ulteriori informazioni che non sono direttamente disponibili in questa pagina, puoi consultare la documentazione dinamicamente ponendo una domanda.

Esegui una richiesta HTTP GET sull'URL della pagina corrente con il parametro di query `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-images.md?ask=<question>
```

La domanda dovrebbe essere specifica, autonoma e scritta in linguaggio naturale.
La risposta conterrà una risposta diretta alla domanda e estratti e fonti pertinenti dalla documentazione.

Utilizza questo meccanismo quando la risposta non è esplicitamente presente nella pagina corrente, hai bisogno di chiarimenti o contesto aggiuntivo, o vuoi recuperare sezioni di documentazione correlate.
