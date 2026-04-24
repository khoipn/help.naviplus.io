---
description: 'CSS è la chiave per ogni problema quando hai bisogno di personalizzare profondamente per Navi+. Quasi tutte le cose dell''interfaccia su Navi+ possono essere risolte con codice CSS. In Navi+, ci sono 2 livelli di CSS:'
lang: it
layout: default
permalink: /it/docs/development/how-to-write-a-correct-css-code-in-navi/
title: Come scrivere un codice CSS corretto in Navi+
---
# Come scrivere un codice CSS corretto in Navi+

CSS è la chiave per ogni problema quando hai bisogno di personalizzare profondamente per Navi+. Quasi tutte le cose dell'interfaccia su Navi+ possono essere risolte con codice CSS. In Navi+, ci sono 2 livelli di CSS:

### Livello 1: Foglio di stile interno / CSS (#SF-123456789)

Questo è il livello raccomandato da utilizzare nella maggior parte dei casi. Quando scrivi codice in questa casella, il sistema aggiunge automaticamente un prefisso che è #SF-123456789 (questo è il tuo ID menu) all'inizio dei tag CSS. Questo garantirà che non ci sia conflitto con tutti gli altri componenti dell'interfaccia.

Guarda l'esempio prima e dopo la compilazione del CSS in questa casella qui sotto

```css
// Il tuo codice CSS
{
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   {
      margin-bottom: 164px;
   }
}
```

```css
// Il codice CSS dopo essere stato compilato

#SF-123456789 {
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   #SF-123456789 {
      margin-bottom: 164px;
   }
}

```

### Livello 2: Foglio di stile globale / CSS

A meno che tu non abbia esperienza con CSS, evita di abusare di questa casella perché tutto sarà spinto direttamente nella forma in cui scrivi il codice CSS senza alcun strato di protezione contro i conflitti.
