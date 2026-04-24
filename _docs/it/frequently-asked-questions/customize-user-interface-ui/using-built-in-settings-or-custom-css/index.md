---
description: Navi+ fornisce diverse opzioni di configurazione comuni per i menu, nella scheda **"Design"**, come sfondo, tipografia (famiglia di font, dimensione..), e icone/immagini...
lang: it
layout: default
permalink: /it/docs/frequently-asked-questions/customize-user-interface-ui/using-built-in-settings-or-custom-css/
title: Utilizzare le impostazioni integrate o CSS personalizzati?
---
# Utilizzare le impostazioni integrate o CSS personalizzati?

Navi+ fornisce diverse opzioni di configurazione comuni per i menu, nella scheda **"Design"**, come sfondo, tipografia (famiglia di font, dimensione..), e icone/immagini (dimensione, intervallo, curva...). Utilizzando queste impostazioni, il tuo menu può solitamente essere stilizzato per abbinarsi al design e al branding complessivo del tuo sito web.

I menu di Navi+ supportano fino a 3 livelli. Nella scheda **"Design"**, puoi configurare solo lo stile per 2 livelli, e non c'è un'opzione diretta per impostare la dimensione del font o la dimensione dell'icona/immagine per i menu di livello 2 e livello 3. Quindi come puoi farlo?

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEeUzjyXb0DDSzsPobpqC%2FCSS%201.0.png?alt=media&#x26;token=ab2b0265-e0cd-4777-964d-285e4d947c64" alt=""><figcaption></figcaption></figure>

#### Personalizzazione profonda del menu con lo strumento CSS & Coding

Tuttavia, se tu o il tuo sviluppatore web avete una comprensione di base del CSS (fogli di stile), potete personalizzare l'intero design del menu utilizzando lo strumento integrato "**CSS & Coding**" in Navi+ senza modificare direttamente i file del tema. Questo offre diversi vantaggi:

* Puoi separare le configurazioni CSS per i menu di Navi+ dal tuo tema. Questo significa che l'aggiornamento o la modifica del tuo tema non influenzerà i tuoi menu di Navi+.
* Navi+ utilizza un meccanismo di protezione intelligente aggiungendo automaticamente un prefisso (come `#SF-123456789`) all'inizio di ogni regola CSS. Questo mantiene il CSS per diversi menu di Navi+ isolato, riducendo al minimo il rischio di conflitti di stile.
* Se necessario, puoi comunque aggiungere CSS che influisce sull'intero sito web direttamente all'interno di Navi+, anche se questo dovrebbe essere usato con parsimonia e solo quando necessario.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwIMkFPG3bnaAfvN3fRy4%2FCSS.1.1.png?alt=media&#x26;token=91b34b8a-ae77-4d14-a52d-f30568f8b2c5" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRMPDJmuihVuXKunOmmAZ%2FCSS.1.2.png?alt=media&#x26;token=0ebcac44-dba7-4306-80aa-815323c027b3" alt=""><figcaption></figcaption></figure>

**Nota importante:** La **casella di testo Stile interno / CSS** aggiunge automaticamente un prefisso (ad es., `#SF-123456789`) prima di ogni regola CSS. Questo assicura che il tuo CSS si applichi solo al menu specifico che stai personalizzando e previene conflitti di stile.

#### Alcuni casi studio tipici di utilizzo del CSS

1) Per configurare l'aspetto dell'intero menu al livello più alto, puoi scrivere uno snippet che non è CSS standard ma molto semplice. Ad esempio, lo snippet qui sotto cambia lo sfondo del menu in rosso. Aggiungi il seguente codice alla casella di testo Stile interno / CSS:

```
{
    background: red;
}
```

2) Configura dimensione, tipografia e colori per ciascun livello di voce di menu. Aggiungi il seguente codice alla casella di testo Stile interno / CSS:

```
// Personalizza lo stile del testo delle voci di menu di livello 1
ul > li.item > .inner .name {
    font-size: 14px;
    color: red;
}

// Personalizza lo stile del testo delle voci di menu di livello 2
ul.children[menulevel="2"] > li.child > .inner .name{
     font-size: 16px; 
     color: blue;
}

// Personalizza lo stile del testo delle voci di menu di livello 3
ul.children[menulevel="3"] > li.child > .inner .name{
     font-size: 13px; 
     color: green;     
}
```

3) Cambia lo spessore del font usando `font-weight.` Aggiungi il seguente codice alla casella di testo Stile interno / CSS:

```
// Imposta lo spessore del font del nome
.name {
  font-weight: 700;
}

// Imposta lo spessore del font della descrizione
.description {
  font-weight: 700;
}
```

4) Regola la dimensione della freccia. Aggiungi il seguente codice alla casella di testo Stile interno / CSS:

```
ul > li.is-parent-top::after {
  font-size: 24px !important;
}
```
