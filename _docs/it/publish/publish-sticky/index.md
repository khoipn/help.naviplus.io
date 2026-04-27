---
description: Pubblica menu Sticky (Tabbar, Mobile Header, FAB) in Navi+ — usando App Embeds per Shopify o l'iniezione di script per siti Global.
layout: default
permalink: /it/docs/publish/publish-sticky/
title: Publish Sticky — Tabbar & FAB
---
# Publish Sticky — Tabbar & FAB

Si applica a: **Tabbar**, **Mobile Header**, **FAB / Support bar**

I menu Sticky sono fluttuanti — appaiono sempre sullo schermo e non sono collegati a una posizione DOM fissa. Il metodo di incorporamento è il più semplice: attivazione su tutto il sito tramite un singolo script.

---

## Shopify — 3 passaggi

### Passaggio 1: Attivare App Embeds nel Theme Editor

Vai su **Theme Editor → App Embeds** e attiva l'interruttore Navi+.

- Questo **non modifica il layout del tema** e può essere disattivato in qualsiasi momento senza influenzare il negozio.
- Deve essere fatto solo **una volta per negozio** — salta questo passaggio per i menu successivi.

### Passaggio 2: Attivare "Pubblica questo menu in modalità sticky"

L'interruttore nella scheda **Passaggio 2** del modal Publish. Attivato = menu live, disattivato = nascosto dal sito web.

### Passaggio 3 (opzionale): Configurare la visibilità per dispositivo e pagina

Vedi [Publish Filter](/it/docs/publish/publish-filter/) per i dettagli.

---

## Global (WordPress, Wix, Webflow...) — 3 passaggi

### Passaggio 1: Incollare il codice di incorporamento nel `<head>`

Il codice è mostrato nel modal con un pulsante **Copia**. Incollalo nel `<head>` del tuo sito web:

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` identifica il tuo negozio — ogni negozio ha un token univoco.
- `start.js` si carica in modo asincrono e non blocca il rendering della pagina.

### Passaggio 2: Attivare "Pubblica questo menu in modalità sticky"

Uguale a Shopify — attiva l'interruttore.

### Passaggio 3 (opzionale): Configurare la visibilità per dispositivo e pagina

Vedi [Publish Filter](/it/docs/publish/publish-filter/) per i dettagli.

---

## Note per tipo di menu

| Menu | Restrizione |
|---|---|
| Mobile Header | Interruttore desktop disabilitato — solo mobile |
| FAB / Support bar | Nessun selettore di posizione (FAB ha il proprio posizionamento nella scheda Setting) |
| Tabbar | Opzioni complete per mobile + desktop disponibili |

---

## Risoluzione dei problemi

**Il menu non appare dopo aver attivato l'interruttore?**
1. Verifica che App Embeds sia attivato (Shopify) o che il codice di incorporamento sia incollato correttamente (Global).
2. Verifica le impostazioni del dispositivo — **Mostra menu su mobile** o **Mostra menu su desktop** deve essere attivato.
3. Verifica il filtro URL — potrebbe stare filtrando la pagina corrente.
4. Aggiorna il browser forzando il ricaricamento (Ctrl+Maiusc+R) per svuotare la cache.
