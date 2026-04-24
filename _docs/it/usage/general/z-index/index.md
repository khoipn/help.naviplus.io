---
description: Questo è un problema comune ma molto facile da gestire quando si utilizza Navi+. Il tuo sito web potrebbe avere molti elementi flottanti—guarda gli esempi qui sotto per riconoscerli.
lang: it
layout: default
permalink: /it/docs/usage/general/z-index/
title: Z-index
---
# Z-index

Questo è un problema comune ma molto facile da gestire quando si utilizza Navi+. Il tuo sito web potrebbe avere molti elementi flottanti—guarda gli esempi qui sotto per riconoscerli.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FL6naWQmaqD1bKTtzaALP%2FHelp.MenuTree.1.3.1b.png?alt=media&#x26;token=0e7dad3b-0395-4f66-9589-2562175e8800" alt=""><figcaption><p>Note: These are the current z-index setups on the Dawn theme (Shopify’s most popular free default theme) at this time.</p></figcaption></figure>

Questi elementi flottanti sono controllati dai propri **valori di z-index**. Maggiore è lo z-index, maggiore è la priorità che quell'elemento ha nel essere visualizzato sopra gli altri. La parte complicata è che non ci sono regole fisse per i valori di z-index. Puoi assegnare qualsiasi numero fino a 2.147.483.647. Ogni tema che utilizzi e ogni app in esecuzione sul tuo negozio Shopify possono assegnare il proprio z-index ai componenti flottanti—di solito basato sulla preferenza dello sviluppatore. Quando questi elementi interagiscono sul tuo sito web, potrebbero sovrapporsi in modi imprevisti.

{% comment %}hint style="info" {% endcomment %}
Divertiamoci un po' :joy:: Dai un'occhiata più da vicino allo screenshot qui sopra e vedrai—sì, è un pasticcio, e non ci sono assolutamente **regole**. Ci sono tre sviluppatori dietro il sito web che stai guardando.

Lo sviluppatore che ha creato il tema Dawn ha scelto uno z-index di 3 per il Menu Panel e 1000 per il Cart Panel—completamente non correlati, senza una logica chiara.

Poi c'è lo sviluppatore dell'app Rivo Loyalty Rewards—uno strumento di fidelizzazione popolare—che ha scelto uno z-index di 99999999999, probabilmente senza nemmeno contare quanti nove ha digitato. Il loro unico obiettivo: assicurarsi che il pulsante flottante “Rewards” rimanga sempre in cima, a prescindere da tutto, anche sopra il tuo Cart Panel.

Nel frattempo, lo sviluppatore di Navi+ ha umilmente scelto un numero più piccolo—solo 5—perché non volevamo essere troppo aggressivi o invadenti. Quindi, cosa dovresti fare?
{% comment %}endhint{% endcomment %}

**Passo 1:** Trova il corretto z-index del tuo menu Navi+

<details><summary><strong>Metodo 1: Chiedi supporto a Navi+ (</strong>Il più semplice)</summary>
<p>Questo è il modo migliore e più efficace. Possiamo fornirti informazioni sui valori di z-index degli elementi chiave dell'interfaccia come il Menu Panel, il Cart Panel e qualsiasi app di terze parti che stai utilizzando, quindi raccomandare la migliore impostazione di z-index per il tuo caso.</p>
<p>Non esitare a utilizzare la chat in basso a destra dello schermo per parlare con un sostenitore di Navi+. Navi+ sta crescendo e apprezziamo davvero il tuo feedback—i tuoi problemi ci aiutano a costruire un prodotto migliore.</p>
<p>Non siamo online 24 ore su 24, 7 giorni su 7—solo 14 ore al giorno, in base al fuso orario del Vietnam. Tuttavia, non appena vediamo il tuo messaggio, risponderemo subito.</p>
</details>

<details><summary><strong>Metodo 2: Usa la modalità Ispeziona del tuo browser</strong> (dettagliato, ma richiede alcune conoscenze tecniche)</summary>
<p>Finora, non c'è modo migliore per controllare questo da solo a meno che tu non utilizzi la modalità Ispeziona. Questo strumento per sviluppatori è disponibile in tutti i browser moderni come Chrome, Firefox, Safari o Edge. Fai clic destro in qualsiasi punto del tuo sito web e seleziona <strong>Ispeziona</strong> per aprire la modalità Ispeziona.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FswowawWsXN01MlvSqqjX%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=470cd65f-0ce8-416a-8749-b9a210f6f08f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOabxqNlZUroNKJQfTKsI%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=2b872306-63e3-4dcf-b89a-f16f162727b4" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FSbR8KCnlOK4nFHhxntTJ%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=64ec8298-196e-4999-99a7-f301e052b5dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FDkVp8u1XnJPTiSKksWAQ%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=641c59d0-9ecf-4ac2-9626-6a1a90cc151f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOgAwr2zm2dapUz9OSGJO%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=493df1eb-fa89-4bf6-806e-bec230ec8e82" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FZN3XAcWn9J8Ifn6AQSjW%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=8de191fd-4b39-4e4d-946b-07bedf55ee52" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcwtXWdRp5QaafcNjLGD5%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=beff473b-cd52-4a72-9657-b54687d99363" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FG7lIvYAGwNMcV4NRQUKI%2FHelp.MenuTree.1.4.10.png?alt=media&#x26;token=2a9db521-805c-4374-bc3b-303e97e8b990" alt=""><figcaption></figcaption></figure>
</details>

<details><summary><strong>Metodo 3:</strong> Prova e testa in base ai nostri suggerimenti (Esperienza personale)</summary>
<p>Nella maggior parte dei casi, i problemi di z-index sono rari se non stai utilizzando troppe app. Il problema principale di solito deriva dalle sovrapposizioni tra il tuo menu e altri elementi dell'interfaccia come il Menu Panel o il Cart Panel.</p>
<ul>
<li>Per i menu appiccicosi di Navi+ come Tabbar o FAB: Ti consigliamo di mantenere lo z-index basso, intorno a 2 o 3. Questi menu occupano spazio sullo schermo e sarebbe scomodo o fastidioso se coprissero pannelli funzionali come il carrello.</li>
<li>Per i menu di sezione di Navi+ come i Mega menu: Se posizionati in alto (nell'intestazione), puoi impostare in sicurezza uno z-index molto alto (ad es. 2000000000) per assicurarti che il sottomenu a discesa non sia nascosto dietro altri componenti.</li>
<li>Per i menu Grid di Navi+: lo z-index non ha effetto, poiché il menu è piatto e non ha profondità stratificata.</li>
<li>Per i menu Slide di Navi+: lo z-index dovrebbe essere impostato molto alto (ad es. 2000000000) per evitare di essere nascosto dietro altri elementi.</li>
</ul>
</details>

**Passo 2:** Aggiorna lo z-index del tuo menu Navi+

<details><summary>Come aggiornare lo z-index del menu Navi+?</summary>
<p>Seleziona il menu Avanzato e scorri verso il basso per trovare la scheda Z-index, quindi aggiorna lo z-index e non dimenticare di fare clic su SALVA per applicare le modifiche.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fh2SfwqpjqjNzZwmbs2yL%2Fz-index%201.1.png?alt=media&#x26;token=47b5f318-d0b3-4f2a-9668-f9e3ed7dab09" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F7np7UDMk5KFGnSvMr8HK%2Fz-index%201.2.png?alt=media&#x26;token=ae4aa403-fbd6-41c9-a16d-861e8cd032bc" alt=""><figcaption></figcaption></figure>
</details>


---

# Istruzioni per l'agente: Consultazione di questa documentazione

Se hai bisogno di ulteriori informazioni che non sono direttamente disponibili in questa pagina, puoi consultare la documentazione dinamicamente ponendo una domanda.

Esegui una richiesta HTTP GET sull'URL della pagina corrente con il parametro di query `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/usage/general/z-index.md?ask=<question>
```

La domanda dovrebbe essere specifica, autonoma e scritta in linguaggio naturale.
La risposta conterrà una risposta diretta alla domanda e estratti e fonti pertinenti dalla documentazione.

Utilizza questo meccanismo quando la risposta non è esplicitamente presente nella pagina corrente, hai bisogno di chiarimenti o contesto aggiuntivo, o vuoi recuperare sezioni di documentazione correlate.
