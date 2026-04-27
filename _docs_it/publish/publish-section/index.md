---
description: Pubblica menu Section (Mega Menu, Grid) in Navi+ — Inserisci/Sostituisci con CSS Selector o App Block su Shopify.
layout: default
permalink: /docs/publish/publish-section/
title: Publish Section — Mega Menu & Grid
---
# Publish Section — Mega Menu & Grid

Si applica a: **Mobile Mega Menu**, **Mobile Grid**, **Desktop Mega Menu**

I menu Section **non sono fluttuanti** — vengono inseriti in una posizione specifica nel layout della pagina. Esistono due metodi di distribuzione che possono essere usati insieme:

| | Metodo 1: Inserisci/Sostituisci | Metodo 2: App Block |
|---|---|---|
| Piattaforma | Shopify + Global | Solo Shopify |
| Meccanismo | CSS Selector → inserisci prima/dopo/sostituisci elemento | App Block "Navi+ on Section" nel Theme Editor |
| Flessibilità | Alta — incorpora ovunque | Media — limitato dallo schema di sezione Shopify |
| Configurazione | Richiede di conoscere il CSS Selector | Basta inserire l'Embed ID |

---

## Metodo 1: Inserisci/Sostituisci con CSS Selector

Il metodo **Consigliato** — funziona sia per Shopify che per Global.

### Passaggio 1: Codice di incorporamento

**Shopify:** **Theme Editor → App Embeds** → attiva Navi+. Solo una volta.

**Global:** Incolla nel `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### Passaggio 2: Attivare "Pubblica menu con metodo Inserisci/Sostituisci"

Attiva l'interruttore per espandere la sezione di configurazione sottostante.

### Passaggio 3: Inserire il CSS Selector

Inserisci **un** CSS Selector. Il menu verrà posizionato in relazione all'elemento corrispondente.

**Sintassi specifica per dispositivo:**

| Suffisso | Dispositivo |
|---|---|
| `header` | Mobile e desktop |
| `header(M)` | Solo mobile |
| `header(D)` | Solo desktop |

**Suggerimenti CSS Selector per i temi Shopify popolari:**

| Tipo di menu | Scopo | CSS Selector suggerito |
|---|---|---|
| Desktop Mega | Sostituire la navigazione desktop | `nav.header__inline-menu ul.list-menu` |
| Desktop Mega | Inserire sotto l'header | `header` |
| Mobile Mega | Inserire sotto l'header mobile | `header` |

### Passaggio 4: Scegliere il posizionamento (Inserisci/Sostituisci)

| Valore | Comportamento |
|---|---|
| **Sostituisci** | Sostituisce completamente l'elemento originale con il menu Navi+ |
| **Inserisci prima** | Inserisce il menu Navi+ prima dell'elemento |
| **Inserisci dopo** | Inserisce il menu Navi+ dopo l'elemento |

> Dopo aver scelto **Sostituisci**, considera di aggiungere CSS per nascondere l'elemento originale mentre Navi+ si carica — vedi [Publish Optimize](/docs/publish/publish-optimize/).

---

## Metodo 2: App Block (solo Shopify)

### Come configurare

1. Copia l'**Embed ID** del menu (mostrato nel modal — clicca per copiare).
2. Vai al **Shopify Theme Editor** → trova l'App Block **"Navi+ on Section"**.
3. Incolla l'Embed ID nel campo corrispondente.
4. Salva il tema.

### "Fisso in cima durante lo scorrimento"

Interruttore per fissare il menu Section in cima alla pagina durante lo scorrimento.

**Quando usare:** Se il tema non ha un header sticky integrato, attivalo in modo che il Desktop Mega Menu rimanga visibile mentre gli utenti scorrono verso il basso.

---

## Possono essere usati entrambi i metodi insieme?

Sì. Gli utenti Shopify possono attivare entrambi:
- App Block per l'anteprima nel Theme Editor (più stabile, più facile da visualizzare in anteprima).
- Inserisci/Sostituisci per un posizionamento più preciso nello storefront.

Di solito è necessario un solo metodo.

---

## Note per tipo di menu

| Menu | Dispositivo | Note |
|---|---|---|
| Mobile Mega Menu | Interruttore desktop disabilitato | Solo mobile |
| Mobile Header | Interruttore desktop disabilitato | Solo mobile |
| Desktop Mega Menu | Interruttore mobile disabilitato | Solo desktop |
| Mobile Grid | Entrambi | Nessuna restrizione |

---

## Risoluzione dei problemi

**Il menu non appare dopo aver configurato Inserisci/Sostituisci?**
1. Verifica che il CSS Selector sia corretto — usa DevTools o la Modalità Debug Navi+.
2. Verifica che l'interruttore "Pubblica menu con metodo Inserisci/Sostituisci" sia attivato.
3. Verifica che App Embeds / il codice di incorporamento sia al suo posto.

**Il menu appare due volte (duplicato)?**
→ Sia App Block che Inserisci/Sostituisci sono attivi contemporaneamente. Disattiva uno di essi.
