---
description: '**I Mega Menu Mobile** non sono così comuni sui dispositivi mobili come il Tabbar o i Slide Menus, perché l''area di tocco di un Mega Menu è spesso troppo piccola per le dita degli utenti. Tuttavia...'
lang: it
layout: default
permalink: /it/docs/usage/mega-menu-mobile/how-to-use/
title: Come usare?
---
# Come usare?

**I Mega Menu Mobile** non sono così comuni sui dispositivi mobili come il Tabbar o i Slide Menus, perché l'area di tocco di un Mega Menu è spesso troppo piccola per le dita degli utenti. Tuttavia, a volte potresti voler mantenere un'esperienza coerente tra desktop e mobile utilizzando un Mega Menu su entrambe le piattaforme.

I Mega Menu Mobile hanno anche vantaggi: sono compatti, posizionati sotto l'intestazione e non occupano spazio sullo schermo poiché fluttuano sullo schermo. Come menu di sezione, scorrono insieme alla pagina.

**Vantaggi principali:**

* Funziona senza problemi sia su mobile che su desktop per un'esperienza coerente
* Risparmia spazio e scorre con la pagina.
* Offre più stili di presentazione con **immagini**, **griglie** e layout **multi-livello** per un'esperienza ricca e professionale

**FAQ:**

<details><summary><strong>1. Non ho deciso se utilizzare la versione gratuita o quella a pagamento. Posso provare i modelli di menu professionali?</strong></summary>
<p>Assolutamente! I gruppi di menu servono principalmente ad aiutare i principianti a non sentirsi sopraffatti dalle funzionalità avanzate in Navi+ 😄. La cosa migliore è provare i menu professionali per esplorare tutte le funzionalità e le opzioni di layout. In seguito, puoi semplicemente eliminare qualsiasi menu di cui non hai bisogno o che trovi inadeguato.</p>
</details>

<details><summary><strong>2. Creare un menu qui lo fa apparire subito sul mio sito web?</strong></summary>
<p>Non ancora. Dovrai <strong>pubblicare</strong> il menu corretto affinché appaia sul tuo sito web. Non preoccuparti — è facile!</p>
</details>

<details><summary><strong>3. E se scelgo il modello sbagliato o commetto un errore?</strong></summary>
<p>Nessun problema. Puoi eliminarlo e crearne uno nuovo in qualsiasi momento. Se stai testando un menu e vuoi provare un altro modello, puoi <strong>salvare</strong> quello attuale come file di backup e riaprirlo in seguito. Puoi anche <strong>copiare e incollare</strong> parti tra i menu (aprendo due schede del browser) per mantenere il tuo lavoro precedente. Sentiti libero di sperimentare!</p>
</details>

<details><summary><strong>4. Dovrei creare solo un menu o più?</strong></summary>
<p>Dovresti creare <strong>più menu</strong>. Solo il menu <strong>attivo</strong> verrà visualizzato sul tuo sito, ma puoi preparare molte versioni — selezionando modelli diversi o clonando menu. I menu possono essere configurati per mostrare/nascondere in base al tipo di pagina (home, prodotto, collezione...), dispositivo (mobile o desktop) o parole chiave URL. Quindi vai avanti e costruisci menu che si adattino a ogni situazione!</p>
</details>

### Passo 1: Modifica l'albero del menu

#### 1.1. Comprendere l'albero del menu

L'**albero del menu** è la parte più importante di qualsiasi menu: definisce la struttura.

Ecco un esempio di un albero del menu di un mega menu mobile:

```
Menu
Home  
Catalogo 
- All Mountain  
   - Cruise Flex  
   - Balance Ride
- Freestyle  
   - Park Board  
   - Jib Board  
- Freeride  
Blog
Supporto  
Altro 
```

Questo è un albero del menu a 3 livelli. Il livello 1 include **Menu, Home**, **Catalogo**, **Supporto, Blog** e **Altro**. **All-Mountain** è un elemento del menu di livello 2, con alcuni elementi figli: **Cruise Flex** e **Balance Ride**.

Trascorrerai la maggior parte del tuo tempo a costruire questo albero del menu per il tuo sito web, aiutando i clienti a trovare i contenuti che cercano.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FosZUYAtOckjPUD5T8F5q%2FHelp.MenuTree.1.1.0.png?alt=media&#x26;token=c1eec6d7-a0b6-45f5-aea5-6678540a884a" alt="Catalogo: Un elemento del menu di livello 1, visualizzato come una scheda sulla barra delle schede. All-Mountain: Elemento del menu di livello 2 che appare quando tocchi Catalogo."><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fh6AHpLQvuPq0AadY0TOH%2FHelp.MenuTree.1.1.1.png?alt=media&#x26;token=06a10cb0-ab20-44be-a734-a221597a4ea9" alt="Cruise Flex, Balance Ride: Elemento del menu di livello 3 che appare quando tocchi All-Mountain."><figcaption></figcaption></figure>

#### 1.2. Interazioni di base con l'albero del menu

Puoi trascinare e rilasciare gli elementi del menu su e giù o a sinistra e a destra per cambiare la loro posizione e le relazioni genitore-figlio nell'albero del menu.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMAz90izqLq6bJcZst2rw%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=27b190ca-50eb-4272-9ba9-30741e95d33a" alt=""><figcaption></figcaption></figure>

Quando passi il mouse su qualsiasi elemento del menu, vedrai opzioni aggiuntive: modifica i dettagli dell'elemento, eliminalo dall'albero del menu o copialo e incollalo altrove.

{% comment %}hint style="info" {% endcomment %}
**Suggerimento:** Puoi copiare un elemento del menu da un menu a un altro aprendo l'app Navi+ in due schede del browser.
{% comment %}endhint{% endcomment %}

#### 1.3. IMPORTANTE! Elimina gli elementi di menu di esempio e mantieni solo la struttura che desideri.

Questa è una situazione comune quando crei un menu con Navi+. Quando crei un nuovo menu, includiamo un esempio completo con elementi di menu popolari per mostrare idee di layout e permetterti di copiare/incollare secondo necessità. Tuttavia, se sei nuovo in Navi+ e utilizzi il piano Starter, vedrai molti avvisi rossi (i) per funzionalità non disponibili, come il caricamento di immagini o l'uso di interazioni avanzate.

Se ti piacciono queste funzionalità avanzate, considera di passare a un piano Business o Elite. Ma se vuoi continuare con il piano Starter, ti preghiamo di trovare ed eliminare gli elementi di menu con avvisi rossi (i).

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE7iIBanCUi5x1wUBoySS%2FHelp.MenuTree.1.1.3.png?alt=media&#x26;token=04573f08-79ed-494b-91a6-f744a5f4779c" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fpstdwu2GBy4wymYsInJe%2FHelp.MenuTree.1.1.3b.png?alt=media&#x26;token=8a2ebfc9-2cbc-4efb-a1b4-fec1fd621ec8" alt=""><figcaption></figcaption></figure>

{% comment %}hint style="info" {% endcomment %}
**Suggerimento importante:** Quando appare la conferma di eliminazione, attiva “Non chiedere di nuovo la prossima volta” per eliminare più velocemente.
{% comment %}endhint{% endcomment %}

#### 1.4. Aggiungi elementi di menu all'albero del menu

Per aggiungere un elemento di menu, hai due opzioni:

**Opzione 1&#x20;**<mark style="background-color:$warning;">**(Non raccomandato se sei nuovo in Navi+)**</mark>**:** Fai clic su “Aggiungi menu” per inserire un elemento di menu vuoto alla fine dell'albero del menu. Questo metodo richiede una buona comprensione delle impostazioni degli elementi del menu, che tratteremo di seguito. Potrebbe sembrare opprimente all'inizio, quindi puoi esplorare questo in seguito.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FP8GKAiPpBlFdnzEM0TiI%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=5b87d791-686b-4768-b7dd-d17ff95841c4" alt=""><figcaption></figcaption></figure>

**Opzione 2 (Raccomandata):** Abbiamo già preparato molti modelli di elementi di menu ben progettati per te. Basta copiarli e incollarli nel posto giusto. Dopo aver terminato il tuo albero del menu, elimina semplicemente i modelli non utilizzati.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FjBJUHMA8dTOONOJoOt8S%2FHelp.MenuTree.1.1.5.png?alt=media&#x26;token=e6316df1-e99a-4259-8370-5fc3afaf331a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FChui5Q4pxEpW1cDVoE3E%2FHelp.MenuTree.1.1.5b.png?alt=media&#x26;token=9e29309f-3177-4d89-ac38-d319bba7a541" alt=""><figcaption></figcaption></figure>
