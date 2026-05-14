---
description: Pubblica menu Sticky (Tabbar, Mobile Header, FAB) in Navi+ — utilizzando App Embeds per Shopify o iniezione di script per siti Globali.
lang: it
layout: default
permalink: /it/docs/publish/publish-sticky/
title: Pubblica sticky — Tabbar & FAB
---
# Pubblica Sticky — Tabbar & FAB

Si applica a: **Tabbar**, **Mobile Header**, **FAB / Support bar**

I menu sticky sono fluttuanti — appaiono sempre sullo schermo e non sono attaccati a una posizione DOM fissa. Il metodo di incorporamento è il più semplice: attiva a livello di sito tramite un singolo script.

---

## Shopify — 3 passaggi

### Passaggio 1: Abilita App Embeds nell'Editor del Tema

Vai a **Editor del Tema → App Embeds** e abilita l'interruttore di Navi+.

- Questo **non cambia il layout del tema** e può essere disattivato in qualsiasi momento senza influenzare il negozio.
- Deve essere fatto **una sola volta per negozio** — salta questo passaggio per i menu successivi.

### Passaggio 2: Abilita "Pubblica questo menu in modalità sticky"

L'interruttore nella scheda **Passaggio 2** del modulo di Pubblicazione. Abilitato = menu è attivo, disabilitato = nascosto dal sito web.

### Passaggio 3 (opzionale): Configura visibilità del dispositivo e della pagina

Vedi [Filtro di Pubblicazione](/docs/publish/publish-filter/) per dettagli.

---

## Globale (WordPress, Wix, Webflow...) — 3 passaggi

### Passaggio 1: Incolla il codice di incorporamento in `<head>`

Il codice è mostrato nel modulo con un pulsante **Copia**. Incollalo nel `<head>` del tuo sito web:

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` identifica il tuo negozio — ogni negozio ha un token unico.
- `start.js` si carica in modo asincrono e non blocca il rendering della pagina.

### Passaggio 2: Abilita "Pubblica questo menu in modalità sticky"

Stesso procedimento di Shopify — abilita l'interruttore.

### Passaggio 3 (opzionale): Configura visibilità del dispositivo e della pagina

Vedi [Filtro di Pubblicazione](/docs/publish/publish-filter/) per dettagli.

---

## Note per tipo di menu

| Menu | Restrizione |
|---|---|
| Mobile Header | Interruttore desktop disabilitato — solo mobile |
| FAB / Support bar | Nessun selettore di posizione (FAB ha il proprio posizionamento nella scheda Impostazioni) |
| Tabbar | Opzioni complete per mobile + desktop disponibili |

---

## Risoluzione dei problemi

**Il menu non appare dopo aver abilitato l'interruttore?**
1. Controlla che App Embeds sia abilitato (Shopify) o che il codice di incorporamento sia incollato correttamente (Globale).
2. Controlla le impostazioni del dispositivo — **Mostra menu su mobile** o **Mostra menu su desktop** devono essere attivi.
3. Controlla il filtro URL — potrebbe filtrare la pagina corrente.
4. Aggiorna forzatamente il browser (Ctrl+Shift+R) per cancellare la cache.
