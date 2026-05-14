---
description: Pubblica i menu Slide (Contestuale) in Navi+ — abilita l'interruttore e poi configura un attivatore per aprire il menu.
lang: it
layout: default
permalink: /it/docs/publish/publish-slide/
title: Pubblica slide — Menu contestuale
---
# Pubblica Slide — Menu Contestuale

Si applica a: **Menu Slide contestuale**

I menu slide sono **diversi dai Sticky**: dopo la pubblicazione, il menu **non appare automaticamente** sulla pagina. Si apre solo quando attivato da un'azione. Questa è la distinzione chiave dai menu Sticky.

---

## Flusso di pubblicazione

```
Step 1: Incorpora il codice nel sito web
        ↓
Step 2: Abilita l'interruttore "Pubblica questo menu"
        ↓
Step 3: Configura l'attivatore (come aprire il menu)
```

Dopo il Passo 2, il menu è caricato sul sito web ma **in uno stato nascosto**. Il Passo 3 decide cosa lo apre.

---

## Passo 1: Incorpora il codice

**Shopify:** Vai su **Editor del tema → App Embeds** → abilita Navi+. Fai questo solo una volta.

**Globale:** Incolla in `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Passo 2: Abilita l'interruttore

Abilita l'**"Pubblica questo menu"** interruttore nel modulo di pubblicazione.

> Dopo questo passaggio, il menu **non apparirà** ancora sul sito web. Questo è previsto: i menu slide richiedono un attivatore per aprirsi.

---

## Passo 3: Configura l'attivatore

L'interfaccia dell'attivatore è divisa in due schede: **Impostazione mobile** e **Impostazione desktop**. I metodi possono essere combinati liberamente. Una zona **Per sviluppatori** si trova al di fuori delle schede.

---

### Metodo 1: Apri da un elemento del menu Navi+

Usa la sintassi `open:NaviMenu(embed_id)` nel campo **Link** di qualsiasi elemento del menu. L'embed_id è mostrato nel modulo e può essere cliccato per copiare:

```
open:NaviMenu(ABC123)
```

Richiede **piano Business o superiore** (richiede 2+ menu).

**Mobile — casi d'uso comuni:**
- Un Tabbar con un primo elemento come "☰ Menu" che apre il menu Slide — **la configurazione più comune**
- Un menu FAB & Supporto con un singolo elemento che apre il menu Slide
- Un Mega menu Mobile con un elemento "☰ Menu" sotto l'intestazione

**Desktop — casi d'uso comuni:**
- Un Mega menu Desktop con un elemento "☰ Menu" — mantiene un'esperienza coerente con il mobile
- Un Mega menu Desktop con un singolo elemento "☰" posizionato prima del logo — rispecchia l'hamburger mobile sul desktop (richiede un po' di CSS; [contattaci](mailto:support@naviplus.io) se hai bisogno di aiuto)
- Un menu FAB & Supporto con un singolo elemento che apre il menu Slide
- Un Tabbar con un elemento "☰ Menu"

---

### Metodo 2: Apri quando si clicca su un elemento (Selettore CSS)

Inserisci uno o più Selettori CSS, separati da virgole (`,`).

**Sintassi specifica per dispositivo:**

| Suffisso | Dispositivo |
|---|---|
| `#element` | Sia mobile che desktop |
| `#element(M)` | Solo mobile |
| `#element(D)` | Solo desktop |

**Passo 1 — trova il tuo selettore:**

*Su Shopify (Dawn, Craft, Spotlight...):*
Prova `#Details-menu-drawer-container` per il menu hamburger mobile. Per altri temi, usa **Navi+ Debug Mode**: visita `yoursite.com/#navidebug-on`, passa sopra l'elemento, premi `Cmd/Ctrl+C` per copiare il suo selettore.

*Su desktop:*
Di solito non c'è un'icona hamburger — devi creare un attivatore cliccabile:
- Aggiungi un elemento "☰ Menu" al tuo mega menu esistente
- Oppure posiziona un'icona ☰ prima del logo usando HTML/CSS ([contattaci](mailto:support@naviplus.io) se hai bisogno di aiuto)

**Passo 2 — ottimizza l'UX:**
Una volta impostato, aggiungi un indicatore di caricamento all'elemento sostituito per evitare il lampeggiamento del layout — vedi [Ottimizza Pubblicazione](/docs/publish/publish-optimize/).

---

### Avanzato (Desktop): Sidebar Fissa

Invece di aprire/chiudere, il menu Slide può essere visualizzato come una sidebar sempre visibile su desktop.

**Come abilitare:** Vai su **Avanzato** → **Direzione di slide-in** → seleziona l'opzione Sidebar Fissa → abilita "Visualizza un menu fisso su desktop".

Nessun attivatore necessario — il menu è sempre visibile su desktop.

---

### Per sviluppatori: Funzione JavaScript

Chiama questa funzione da qualsiasi parte nel codice della pagina:

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Adatta per integrare il menu Slide in un'interfaccia personalizzata senza un selettore fisso.

---

## Risoluzione dei problemi

**Interruttore abilitato ma il menu non appare?**
→ Comportamento corretto. I menu slide necessitano di un attivatore (Passo 3). Controlla che almeno un metodo sia configurato.

**Selettore CSS non funzionante?**
1. Usa **Navi+ Debug Mode** per trovare il selettore esatto per l'elemento.
2. Controlla che l'elemento esista effettivamente sulla pagina (alcuni temi nascondono/rimuovono elementi a determinati breakpoint).
3. Prova ad aggiungere `(M)` o `(D)` suffisso per separare per dispositivo.

**Vuoi più menu Slide sulla stessa pagina?**
→ Crea menu separati, ciascuno con un diverso `embed_id`, utilizzando attivatori diversi.
