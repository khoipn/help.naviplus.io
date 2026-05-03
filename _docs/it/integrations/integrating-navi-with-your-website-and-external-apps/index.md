---
description: Guide su come connettere Navi+ con altre app (come strumenti di chat, Loyalty, ecc.). Puoi aggiungerle come voci di menu, aprire le app direttamente da Navi+ e assicurarti che tutto funzioni senza sovrapposizioni.
lang: it
layout: default
permalink: /it/docs/integrations/integrating-navi-with-your-website-and-external-apps/
title: Integrare Navi+ con il tuo sito e app esterne
---
# Integrare Navi+ con il tuo sito e app esterne

Qui troverai guide su come connettere Navi+ con altre app (come strumenti di chat, Loyalty, ecc.). Puoi aggiungerle come voci di menu, aprire le app direttamente da Navi+ e assicurarti che tutto funzioni insieme senza sovrapposizioni sul tuo sito.

### 1. Integrare altre app sticky in una singola voce del menu Navi+

Navi+ consolida più app (Chat Box, Loyalty, Social Proof, barre promozionali, ecc.) nelle voci di menu, mantenendo il sito pulito e prevenendo sovrapposizioni — particolarmente utile sui dispositivi mobili con spazio limitato.\
Per fare questo, segui questi 2 passaggi:

• Passo 1: Nascondi le icone delle app sticky usando CSS.\
• Passo 2: Usa JavaScript per le voci di menu in modo che cliccandole si aprano i rispettivi pannelli delle app.

Guarda l'esempio dell'integrazione di Tidio chat. Questa è una configurazione relativamente avanzata, quindi contatta il supporto Navi+ per assistenza.

### 2. Trigger JavaScript – interagire con app esterne

Navi+ permette di eseguire funzioni JavaScript dalle voci di menu quando vengono cliccate dagli utenti (javascript:Funzione). Guarda l'esempio dell'integrazione di Tidio chat per capire come usare due funzioni JavaScript per integrare la chat Tidio come voce del menu Navi+:

1. Nascondere l'icona Tidio: Una funzione globale che attende il rendering di Tidio, poi la nasconde
2. openTidio(): Apre il pannello chat di Tidio quando gli utenti cliccano sulla voce di menu "Chatta con noi"

Navi+ supporta anche la definizione di assegnazioni di classi e attributi (anche nella forma id="menu-item-1") per abilitare l'interazione con altre applicazioni o codice JavaScript.

### 3. Personalizzare l'interfaccia Navi+ con CSS esterno

Ogni menu Navi+ è definito da un elemento div con id="SF-123456789" (id incorporato). Visualizza il framework strutturale HTML/CSS di un menu Navi+ per scrivere codice CSS per personalizzare l'interfaccia del menu.\
Ad esempio, per cambiare il colore di una voce di menu di livello 2:

`#SF-123456789 ul li ul.children li .name { color: red; }`

### 4. Comunicazione tra menu Navi+

Da una voce del menu Navi+, puoi chiamare per aprire un altro Slide menu Navi+ usando la sintassi: `open:NaviMenu.`\
Con questa sintassi, puoi espandere infinitamente i livelli del menu facendo chiamare tra loro slide menu.

### 5. Aprire uno Slide Menu da qualsiasi punto del sito

Con gli slide menu, oltre ad aprirli tramite voci di menu da altri menu Navi+, puoi anche attivare uno slide menu Navi+ chiamando la funzione JavaScript: `naviman.openNaviMenu()`.

### 6. Simulare azioni utente (click, focus, scroll, ecc.)

Navi+ fornisce diverse funzioni (attivate quando si clicca su una voce di menu):

* `open:clickTo` per simulare un click su un selettore CSS HTML — utile per attivare menu hamburger, ricerca, pannelli carrello, menu a tendina per la lingua...
* `open:focusTo` per simulare il focus su un selettore CSS HTML — utile per simulare click su strumenti di ricerca
* `scroll:Top`, `scroll:Bottom`, `scroll:OnPage` per scorrere la pagina web all'area desiderata

### 7. Per condivisione e coinvolgimento del sito

Navi+ fornisce diverse funzioni (attivate quando si clicca su una voce di menu):

* `open:ShareMe` per condividere il link del sito
* `share:CopyUrl` per copiare l'URL corrente negli appunti
* `share:Facebook` per condividere l'URL corrente su Facebook
* `share:Tweet` per condividere l'URL corrente su Twitter (X)

### 8. Integrazione con altre app del dispositivo (come il telefono)

Navi+ fornisce diverse funzioni (attivate quando si clicca su una voce di menu):

* `tel:+[Prefisso][Telefono]` per chiamare un numero
* `sms:+[Prefisso][Telefono]?body=[Testo]` per inviare un SMS
* `mailto:[Indirizzo]` per inviare un'email
* `https://m.me/[TuoNome]` per chattare su Facebook Messenger
* `https://wa.me/[Telefono]` per chattare su WhatsApp
* `https://lin.ee/[codice-line]` per chattare su Line
* `https://zalo.me/+[Prefisso][Telefono]` per chattare su Zalo

### 9. Solo per Shopify

Navi+ fornisce diverse funzioni (attivate quando si clicca su una voce di menu):

* `open:ChangeLanguage` per cambiare la lingua se il sito usa Shopify
* Shopify Inbox: Nascondi l'icona di Shopify Inbox e integrala nel menu Navi+ come voce che apre il pannello chat al click
* Aprire il menu hamburger o il pannello carrello/ricerca: Vedi i dettagli qui

### Non lo trovi nella lista?

Inviami pure la tua richiesta di integrazione. Sono felice di aiutare, e supporta anche la crescita di Navi+.
