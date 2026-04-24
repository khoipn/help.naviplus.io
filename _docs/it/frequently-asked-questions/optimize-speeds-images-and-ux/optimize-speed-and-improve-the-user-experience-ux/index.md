---
description: Navi+ è molto veloce. È completamente distribuito su una CDN leader con latenza molto bassa (circa 100ms) e può servire milioni di clienti senza rallentare.
lang: it
layout: default
permalink: /it/docs/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-speed-and-improve-the-user-experience-ux/
title: Ottimizza la velocità e migliora l'esperienza utente (UX).
---
# Ottimizza la velocità e migliora l'esperienza utente (UX).

#### Perché hai bisogno di farlo? Navi+ non è già veloce?

Navi+ è molto veloce. È completamente distribuito su una CDN leader con latenza molto bassa (circa 100ms) e può servire milioni di clienti senza rallentare.

Tuttavia, Navi+ funziona ancora all'interno dell'ecosistema Shopify. Shopify ha le proprie regole di caricamento:

1. Shopify dà priorità al caricamento delle proprie risorse prima.
2. Poi Shopify carica il contenuto del tema.
3. Infine, Shopify carica il contenuto delle app, ma non in un ordine specifico.

Questo significa che se stai utilizzando più app, Navi+ potrebbe essere caricato a volte più tardi del previsto. Ecco perché può sembrare più lento in alcuni casi.

***

### Qual è la mia soluzione?

Attualmente, Navi+ ha alta priorità quando viene caricato sui siti web Shopify. Tuttavia, c'è ancora un certo ritardo. Affronteremo questi problemi uno per uno qui:

#### Slide Menu: Aggiungi un effetto di caricamento e blocca il selettore del trigger

Molto semplice: basta inserire il selettore CSS che usi per il Slide Menu nella sezione di incorporamento dell'app Navi+ (vedi immagine qui sotto).

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

#### Mega Menu (Modalità di sostituzione): Aggiungi un effetto di caricamento e blocca il selettore del trigger

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

Nota:

* Aggiungi il suffisso **(M)** se vuoi che si applichi solo su mobile.
* Aggiungi il suffisso **(D)** se vuoi che si applichi solo su desktop.
* Non lasciare alcun suffisso se vuoi che si applichi su entrambe le piattaforme.


---

# Istruzioni per l'agente: Consultare questa documentazione

Se hai bisogno di ulteriori informazioni che non sono direttamente disponibili in questa pagina, puoi consultare la documentazione dinamicamente ponendo una domanda.

Esegui una richiesta HTTP GET sull'URL della pagina corrente con il parametro di query `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-speed-and-improve-the-user-experience-ux-..md?ask=<question>
```

La domanda dovrebbe essere specifica, autonoma e scritta in linguaggio naturale.
La risposta conterrà una risposta diretta alla domanda e estratti e fonti pertinenti dalla documentazione.

Utilizza questo meccanismo quando la risposta non è esplicitamente presente nella pagina corrente, hai bisogno di chiarimenti o contesto aggiuntivo, o vuoi recuperare sezioni di documentazione correlate.
