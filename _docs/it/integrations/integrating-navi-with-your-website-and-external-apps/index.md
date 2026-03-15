---
description: Qui troverai guide su come connettere Navi+ con altre app (come strumenti di chat, fedeltà, ecc.). Puoi aggiungerle come elementi di menu, aprire app direttamente da Nav...
lang: it
layout: default
permalink: /it/docs/integrations/integrating-navi-with-your-website-and-external-apps/
title: Integrando Navi+ con il tuo sito web e app esterne
---
# Integrando Navi+ con il tuo sito web e app esterne

Qui troverai guide su come connettere Navi+ con altre app (come strumenti di chat, fedeltà, ecc.). Puoi aggiungerle come elementi di menu, aprire app direttamente da Navi+, e assicurarti che tutto funzioni insieme senza sovrapposizioni sul tuo sito.

### 1. Integrare altre app sticky in un singolo elemento di menu Navi+

Navi+ consolida più app (Chat Box, Fedeltà, Prova sociale, Barre promozionali, ecc.) in elementi di menu, mantenendo il tuo sito web pulito e prevenendo sovrapposizioni—particolarmente prezioso sui dispositivi mobili con spazio limitato sullo schermo.\Per ottenere questo, segui questi 2 passaggi:

• Passo 1: Nascondi le icone delle app sticky usando CSS. Vedi i dettagli qui\• Passo 2: Usa JavaScript per gli elementi di menu in modo che cliccando su di essi si aprano i rispettivi pannelli delle app.

Vedi l'esempio di integrazione della chat Tidi. Questa è una configurazione relativamente avanzata, quindi contatta il supporto di Navi+ per assistenza.

### 2. Trigger JavaScript – interagire con app esterne

Navi+ consente di eseguire funzioni JavaScript dagli elementi di menu quando cliccati dagli utenti (javascript:Function). Vedi l'esempio di integrazione della chat Tidi per capire come utilizzare due funzioni JavaScript per integrare la chat Tidio come elemento di menu Navi+:

1. Nascondi l'icona Tidio: Una funzione globale che aspetta che Tidio venga renderizzato, poi lo nasconde
2. openTidio(): Apre il pannello di chat di Tidio quando gli utenti cliccano sull'elemento di menu "Chat with us"

Navi+ supporta anche la definizione delle assegnazioni di classi e attributi (anche sotto forma di id="menu-item-1") per abilitare l'interazione con altre applicazioni o codice JavaScript. Puoi usare funzioni JavaScript per accedere direttamente agli elementi di menu tramite classi o attributi, ad esempio: per creare un tutorial passo-passo.

### 3. Personalizzare l'interfaccia di Navi+ con CSS esterno

Ogni menu di Navi+ è definito da un elemento div con id="SF-123456789" (id incorporato). Visualizza la struttura HTML/CSS di un menu Navi+ qui per scrivere codice CSS per personalizzare l'interfaccia del menu.\Ad esempio, per cambiare il colore di un elemento di menu di livello 2, puoi scrivere il seguente CSS:

`#SF-123456789 ul li ul.children li .name { color: red; }`

Navi+ supporta anche la definizione delle assegnazioni di classi e attributi (anche sotto forma di id="menu-item-1") per abilitare l'interazione con altre applicazioni o codice JavaScript. Puoi stilizzare ogni elemento di menu usando nomi di classi o attributi.

### 4. Comunicazione tra i menu di Navi+

Da un elemento di menu Navi+, puoi chiamare per aprire un altro menu Slide di Navi+ usando la sintassi: `open:NaviMenu.`\Con questa sintassi, puoi espandere infinitamente i livelli di menu facendo chiamare altri menu slide.

### 5. Aprire un menu Slide da qualsiasi parte del tuo sito web

Con i menu slide, oltre ad aprirli tramite elementi di menu di altri menu Navi+, puoi anche attivare un menu slide di Navi+ chiamando la funzione JavaScript: `naviman.openNaviMenu()`.\Ad esempio: Crea un pulsante flottante usando HTML e CSS, poi assegna la sua azione di clic per aprire un menu Slide di Navi+ – avrai immediatamente un menu dall'aspetto professionale.

### 6. Simulare azioni degli utenti (clic, focus, scroll, ecc.)

Navi+ fornisce diverse funzioni (attivate quando un elemento di menu viene cliccato):

* `open:clickTo` per simulare un clic su un selettore CSS HTML. Questo è estremamente utile per abilitare il menu di Navi+ a attivare menu hamburger predefiniti, strumenti di ricerca, pannelli del carrello, menu a discesa delle lingue... o attivare strumenti di chat da altre app.
* `open:focusTo` per simulare il focus su un selettore CSS HTML. Questo è estremamente utile per simulare clic su strumenti di ricerca o campi di iscrizione via email
* `scroll:Top`, `scroll:Bottom`, `scroll:OnPage` per scorrere la pagina web nell'area desiderata. Questo è estremamente utile quando vuoi scorrere a una sezione target sulla pagina invece di navigare a un'altra pagina.

### 7. Per condividere e migliorare l'engagement del sito

Navi+ fornisce diverse funzioni (attivate quando un elemento di menu viene cliccato):

* `open:ShareMe` per condividere il link del sito web
* `share:CopyUrl` per copiare l'URL attuale negli appunti del dispositivo
* `share:Facebook` per condividere l'URL attuale su Facebook
* `share:Tweet` per condividere l'URL attuale su Twitter (X)

### 8. Integrazione con altre app per dispositivi (come il telefono)

Navi+ fornisce diverse funzioni (attivate quando un elemento di menu viene cliccato):

* `tel:+[Country code][Phone]` per chiamare il numero
* `sms:+[Country code][Phone]?body=[Text]` per inviare un messaggio SMS al numero con un contenuto preimpostato (opzionale)
* `mailto:[Address]` per inviare un'email
* `https://m.me/[YourName]` per chattare con il tuo Messenger di Facebook
* `https://wa.me/[Phone]` per chattare con il tuo WhatsApp
* `https://lin.ee/[line-code]` per chattare con il tuo Line
* `https://zalo.me/+[Country code][Phone]` per chattare con il tuo Zalo

### 9. Solo per Shopify

Navi+ fornisce diverse funzioni (attivate quando un elemento di menu viene cliccato):

* `open:ChangeLanguage` per cambiare lingua se il sito web utilizza Shopify
* Shopify Inbox: Nascondi l'icona di Shopify Inbox e integrala nel menu di Navi+ come un elemento di menu che apre il pannello di chat al clic. Vedi i dettagli qui
* Apri il menu hamburger o il carrello, pannello di ricerca: Vedi i dettagli qui

### Non lo vedi nella lista?

Sentiti libero di inviarmi la tua richiesta di integrazione. Sono felice di aiutarti, e supporta anche la crescita di Navi+.
