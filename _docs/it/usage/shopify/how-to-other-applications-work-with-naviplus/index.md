---
description: In molti casi, sarà necessario utilizzare più applicazioni incorporate nel tuo sito web. Questo può creare un problema di usabilità abituale poiché gli elementi dell'interfaccia possono sovrapporsi (s...
lang: it
layout: default
permalink: /it/docs/usage/shopify/how-to-other-applications-work-with-naviplus/
title: Impedire che i menu Navi+ si sovrappongano ad altre app
---
# Impedire che i menu Navi+ si sovrappongano ad altre app

### Perché questo sarà un problema?

In molti casi, sarà necessario utilizzare più applicazioni incorporate nel tuo sito web. Questo può creare un problema di usabilità abituale poiché gli elementi dell'interfaccia possono sovrapporsi (vedi l'immagine qui sotto). Un semplice esempio è quando utilizzi frequentemente un'app di chat come [Shopify Inbox ](https://www.shopify.com/vn/inbox "Shopify Inbox ")o WhatsApp. Tipicamente, queste app di chat occupano una posizione prominente nell'angolo in basso a destra dello schermo del telefono. Quando decidi di utilizzare Navi+ per migliorare significativamente la navigazione sul tuo sito web, si presenta questo problema. Ecco alcuni modi per affrontare questo problema.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fdccbwi5aXf4XvOxYGIvU%2FFrame%201.png?alt=media&#x26;token=c953f4d5-442c-486d-9493-90490ffd309f" alt=""><figcaption></figcaption></figure>

### Soluzione 1: Regolare la posizione dei pulsanti flottanti (Demo con Shopify inbox)

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F13ShtYFy9yreGicTmiOm%2FFrame%202.png?alt=media&#x26;token=13a96b69-4907-4ad5-88b5-b41dcc95c35d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FmYVravYrInpp21SPJuKm%2FFrame%203.png?alt=media&#x26;token=9d4c2fa0-2806-4b19-8dce-c403fc582315" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Feuh272YZES4OjBSMok8s%2FFrame%204.png?alt=media&#x26;token=d6b6f9f8-aa4e-4539-a29c-6ae39cbcd344" alt=""><figcaption></figcaption></figure>

### Soluzione 2: Impostare il padding del menu Navi+ per evitare sovrapposizioni con le applicazioni.

Il padding e il margine sono strumenti ampiamente utilizzati e potenti nella tecnologia, specialmente in HTML5/CSS. Impostando il padding in base alla posizione di quell'area, puoi evitare sovrapposizioni delle applicazioni. Puoi anche impostare la distanza dal menu Navi+ ai bordi regolando il margine.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fo0hlCj8BSJLa9WBqrLo8%2FFrame%205.png?alt=media&#x26;token=dfe6c2d9-ea6c-4b97-bd55-8ec33ef7d729" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fkj87WVMtDYGKHxPBAK91%2FFrame%206.png?alt=media&#x26;token=ced78c24-1797-422a-9662-45094a5cee12" alt=""><figcaption></figcaption></figure>

### Soluzione 3: Sostituire le barre inferiori con barre superiori/barre di supporto o pulsanti di azione flottanti

Sebbene la Barra Inferiore sia lo strumento più efficace per guidare gli utenti, utilizzato da quasi tutte le app native mobili, o web mobile (più lento), a volte potresti voler posizionare il tuo menu Navi+ in una posizione diversa come in alto (Barra Superiore), a destra/sinistra (Barra di Supporto), fluttuante sopra l'interfaccia (pulsante di azione flottante). Oppure puoi combinarli per la migliore efficienza di navigazione. Dai un'occhiata alle seguenti opzioni di Navi+ per capire come farlo, a volte ci vuole solo 1 secondo e risolverai il tuo problema.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FiCuFsYdJSucFduHw9zJO%2FFrame%207.png?alt=media&#x26;token=1be98c44-27c3-489d-9e6d-87e1a95fafb7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FbE4JHbm6ZYI6C3uF0X9j%2FFrame%208.png?alt=media&#x26;token=5c85d3bd-5023-4851-82aa-9288f9294d1c" alt=""><figcaption></figcaption></figure>

### Z-index - dare priorità all'ordine di visualizzazione delle "applicazioni flottanti"

La proprietà z-index specifica l'ordine di sovrapposizione di un elemento. Un elemento con un ordine di sovrapposizione maggiore è sempre davanti a un elemento con un ordine di sovrapposizione inferiore. Vedi l'immagine qui sotto per capire meglio.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyMHcqutHWOUtEEYqMDn6%2Fz-index1.png?alt=media&#x26;token=fb6a0100-e337-4115-9212-a8c8d32888ef" alt=""><figcaption></figcaption></figure>

Il valore predefinito dello z-index per il menu Navi+ è impostato su 50 per tutti, poiché 'non ci consideriamo più importanti di altre app', ma 50 è anche il numero sufficiente per visualizzarsi bene su tutti i temi Shopify. A volte potresti dover regolare lo z-index del tuo menu Navi+ nei seguenti casi:

1. Quando utilizzi più menu Navi+ su una pagina e desideri che si sovrappongano, ma un menu appare sopra gli altri.
2. Quando ci sono altri oggetti/app che sovrappongono il tuo menu Navi+, in tal caso, lo z-index risolverà tutto.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg93TvrzCEEKdFZvdmdbh%2Fz-index2.png?alt=media&#x26;token=1289e3a7-6ea1-44ec-a284-8964ac4b6f35" alt=""><figcaption></figcaption></figure>

C'è una domanda difficile: quale z-index dovresti impostare per il tuo menu Navi+ per evitare sovrapposizioni come desiderato? Se hai più menu Navi+, puoi disporli secondo le tue preferenze senza preoccuparti – ecco perché stiamo costruendo Navi+ per essere il più versatile possibile per le attuali 'applicazioni flottanti' su Shopify.

Se hai bisogno di impostare lo z-index per il tuo menu Navi+ per gestire conflitti con altre app, puoi cercare il tuo z-index da un minimo di 0 a un massimo di 2.147.483.647. Questo potrebbe sembrare un po' difficile, ma è il modo più semplice e migliore perché lo z-index non influenzerà la visualizzazione della tua interfaccia al di fuori del problema che stai affrontando. Se hai esperienza con il debug di CSS e HTML – questo è facile, basta attivare la modalità di ispezione per vedere quale z-index ha l'app in conflitto. Oppure, il modo più semplice, clicca semplicemente sull'icona della chat di Crisp per chattare con un consulente Navi+; saremo felici di assisterti con questo problema.
