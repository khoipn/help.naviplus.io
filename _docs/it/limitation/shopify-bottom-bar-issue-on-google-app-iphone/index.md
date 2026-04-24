---
description: Questo riguarda il problema del padding inferiore sotto la Bottom Bar quando un sito web Shopify che utilizza Navi+ viene aperto all'interno dell'App Google su iPhone.
lang: it
layout: default
permalink: /it/docs/limitation/shopify-bottom-bar-issue-on-google-app-iphone/
title: Problema della Bottom Bar di Shopify nell'App Google (iPhone)
---
# Problema della Bottom Bar di Shopify nell'App Google (iPhone)

Questo riguarda il problema del padding inferiore sotto la Bottom Bar quando un sito web Shopify che utilizza **Navi+** viene aperto all'interno dell'App Google su iPhone.

Quando si accede a un sito web Shopify che utilizza **Navi+** (o qualsiasi applicazione con un menu inferiore fisso, pulsanti flottanti, ecc.), gli utenti che aprono il sito web **all'interno dell'App Google su iPhone** possono a volte vedere uno spazio bianco insolito apparire nella parte inferiore dello schermo.

Questo problema si verifica solo nell'App Google ed **non è causato da Navi+**. Di seguito è riportata una spiegazione chiara e semplice.

***

### 1. Dove si verifica il problema?

Il problema si verifica solo quando:

* Il sito web è in esecuzione su **Shopify**
* C'è una **Bottom Bar** (Navi+ o qualsiasi altra app), o un **Floating Action Button (FAB)** come widget di chat, pulsanti di fedeltà, ecc.
* L'utente apre il sito web **tramite l'App Google su iPhone** (di solito cercando e toccando il sito web)

Il problema **non** si verifica quando si apre il sito web utilizzando:

* Safari (browser predefinito di iPhone)
* Chrome
* Facebook Browser
* TikTok Browser
* …

Questo conferma che il problema proviene dall'App Google su iOS.

***

### 2. Perché i siti web Shopify che utilizzano Navi+ sono più propensi a sperimentare questo problema?

L'App Google utilizza un modo speciale di rendere i siti web (WebView di Apple). Questo motore di rendering ha un problema di lunga data quando calcola l'altezza reale dello schermo in siti web che hanno:

* Una Bottom Bar fissa
* HTML o UI generati dinamicamente da JavaScript
* Layout complessi come Shopify (più livelli di contenitore e sezioni in continua evoluzione)

Quando si verificano queste condizioni, l'App Google può calcolare erroneamente l'altezza effettiva della viewport e creare un **finto padding inferiore**.

➡️ Questo è il motivo per cui il problema appare più frequentemente sui siti web Shopify che utilizzano Navi+ o altre app con bottom bar/FAB.

***

### 3. È un problema di Navi+?

No.\
Questo è un bug intrinseco dell'**App Google su iPhone**, e esiste da molti anni.

Anche se Navi+ è disabilitato, altre app Shopify che visualizzano barre inferiori o FABs sperimentano ancora lo stesso problema all'interno dell'App Google.

***

### 4. Prove che questo problema non può essere completamente risolto

* Molte app Shopify che includono una barra inferiore o FAB sperimentano esattamente lo stesso problema.
* Anche alcune funzionalità integrate di Shopify mostrano un comportamento simile all'interno dell'App Google.
* Questo è un problema ben noto nella comunità degli sviluppatori, ma l'App Google non lo ha affrontato.
* Il problema scompare non appena l'utente **tocca qualsiasi parte dello schermo** → l'App Google forza un nuovo rendering e ricalcola l'altezza corretta.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIJeUOw7iYKzsFXSLVQK3%2FEx-1.1.2.png?alt=media&#x26;token=c2c351d9-10fd-47ed-bbef-1e436ab3ac4f" alt=""><figcaption></figcaption></figure>

***

### 5. Soluzione attuale di Navi+

Navi+ ha ricercato e testato più approcci, ma poiché il problema origina dall'App Google stessa, non può essere completamente risolto.

Tuttavia, Navi+ ha implementato la **migliore mitigazione possibile**:

#### ✔️ Il problema appare solo la prima volta

Di solito si verifica quando l'utente:

* apre il sito web all'interno dell'App Google
* e naviga o tocca qualsiasi parte della pagina

Quando ciò accade, Navi+ attiva un meccanismo di correzione una tantum. Non appena l'utente:

* tocca leggermente lo schermo
* scorre un po'
* o interagisce in qualsiasi modo

#### ✔️ Il problema scompare automaticamente

L'App Google ri-renderizzerà l'intero layout, e da quel momento:

* La Bottom Bar viene visualizzata nella posizione corretta
* Il problema non apparirà di nuovo fino a quando l'App Google non verrà chiusa e riaperta

#### ✔️ Questa mitigazione riduce anche errori simili da altre app posizionate in basso quando utilizzate insieme a Navi+

***

### 6. Spiegazione rapida per gli utenti finali

Questo messaggio è progettato per utenti non tecnici:

> “L'App Google su iPhone ha un bug di visualizzazione quando si aprono siti web Shopify che utilizzano una Bottom Bar come Navi+. Questo problema proviene dall'App Google e colpisce molte app, non solo Navi+. Si verifica solo una volta e scomparirà dopo qualsiasi tocco o scorrimento sullo schermo. Se utilizzi Safari o Chrome invece, il problema non si verificherà.”

***

### 7. Conclusione

❌ Non è un problema di Navi+\
❌ Non è un problema di Shopify

✔️ Un bug di visualizzazione nell'App Google su iPhone\
✔️ Navi+ minimizza il problema in modo che appaia solo una volta e poi scompaia\
✔️ Safari/Chrome sono completamente non influenzati
