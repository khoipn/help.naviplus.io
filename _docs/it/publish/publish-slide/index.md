---
description: Pubblica menu Slide (Context) in Navi+ — attiva l'interruttore e poi configura un trigger per aprire il menu.
layout: default
permalink: /it/docs/publish/publish-slide/
title: Publish slide — Menu context slide
---
# Publish Slide — Menu Context Slide

Si applica a: **Menu Context Slide**

I menu Slide sono **diversi dagli Sticky**: dopo la pubblicazione, il menu **non appare automaticamente** sulla pagina. Si apre solo quando viene attivato da un'azione. Questa è la distinzione chiave rispetto ai menu Sticky.

---

## Flusso di pubblicazione

```
Passaggio 1: Incorporare il codice nel sito web
        ↓
Passaggio 2: Attivare l'interruttore "Pubblica questo menu"
        ↓
Passaggio 3: Configurare il trigger (come aprire il menu)
```

Dopo il Passaggio 2, il menu viene caricato sul sito web ma **in stato nascosto**. Il Passaggio 3 decide cosa lo apre.

---

## Passaggio 1: Codice di incorporamento

**Shopify:** Vai su **Theme Editor → App Embeds** → attiva Navi+. Solo una volta.

**Global:** Incolla nel `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Passaggio 2: Attivare l'interruttore

Attiva l'interruttore **"Pubblica questo menu"** nel modal Publish.

> Dopo questo passaggio, il menu **non apparirà ancora** sul sito web. Questo è il comportamento previsto — i menu Slide richiedono un trigger per aprirsi.

---

## Passaggio 3: Configurare il trigger

Ci sono 4 modi per aprire un menu Slide:

---

### Metodo 1: Aprire da un elemento di menu Navi+

Usa la sintassi `open:NaviMenu(embed_id)` nel campo **Link** di qualsiasi elemento di menu.

Esempio: Una Tabbar ha un elemento "Menu" → Link = `open:NaviMenu(ABC123)` → toccando quell'elemento si apre il menu Slide.

L'**embed_id** è mostrato nel modal e può essere copiato cliccandoci:
```
open:NaviMenu(ABC123)
```

Questo è l'approccio più comune — combinare Tabbar + menu Slide per estendere lo spazio di navigazione.

---

### Metodo 2: Aprire cliccando su un elemento della pagina (CSS Selector)

Inserisci uno o più selettori CSS, separati da virgole. Navi+ ascolta gli eventi di clic/tap sugli elementi corrispondenti e apre il menu Slide.

**Sintassi specifica per dispositivo:**

| Suffisso | Dispositivo |
|---|---|
| `#element` | Mobile e desktop |
| `#element(M)` | Solo mobile |
| `#element(D)` | Solo desktop |

**Esempi per il tema Shopify Dawn:**

| Scopo | CSS Selector |
|---|---|
| Sostituire il menu hamburger mobile | `#Details-menu-drawer-container` |
| Selettori diversi per dispositivo | `#Details-menu-drawer-container(M), .desktop-menu-btn(D)` |

> Dopo aver configurato un trigger CSS Selector, considera di nascondere l'elemento originale per evitare il flash — vedi [Publish Optimize](/it/docs/publish/publish-optimize/).

---

### Metodo 3: Chiamare una funzione JavaScript

Chiama questa funzione da qualsiasi punto nel codice della pagina:

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Adatto per integrare il menu Slide in un'interfaccia utente personalizzata senza un selettore fisso.

---

### Metodo 4: Barra laterale fissa su desktop

Invece di aprire/chiudere, il menu Slide può essere fissato come barra laterale sinistra permanente su desktop.

**Come attivare:** Vai alla scheda **Advance** → seleziona la direzione **"Fissa a sinistra"**.

Nessun trigger necessario — il menu è sempre visibile su desktop.

---

## Risoluzione dei problemi

**Interruttore attivato ma il menu non appare?**
→ Comportamento corretto. I menu Slide necessitano di un trigger (Passaggio 3). Verifica che almeno un metodo sia configurato.

**CSS Selector non funziona?**
1. Usa la **Modalità Debug Navi+** per trovare il selettore esatto dell'elemento.
2. Verifica che l'elemento esista effettivamente sulla pagina (alcuni temi nascondono/rimuovono elementi a certi breakpoint).
3. Prova ad aggiungere il suffisso `(M)` o `(D)` per separare per dispositivo.

**Vuoi più menu Slide sulla stessa pagina?**
→ Crea menu separati, ognuno con un `embed_id` diverso, usando trigger diversi.
