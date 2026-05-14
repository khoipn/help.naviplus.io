---
description: Menu della Sezione Pubblica (Mega Menu, Grid) in Navi+ — Inserisci/Sostituisci con Selettore CSS o Blocco App su Shopify.
lang: it
layout: default
permalink: /it/docs/publish/publish-section/
title: Pubblica sezione — Mega menu & grid
---
# Pubblica Sezione — Mega Menu & Grid

Si applica a: **Mobile Mega Menu**, **Mobile Grid**, **Desktop Mega Menu**

I menu delle sezioni **non sono fluttuanti** — vengono inseriti in una posizione specifica nel layout della pagina. Ci sono due metodi di distribuzione, che possono essere utilizzati insieme:

| | Metodo 1: Inserisci/Sostituisci | Metodo 2: Blocco App |
|---|---|---|
| Piattaforma | Shopify + Globale | Solo Shopify |
| Meccanismo | Selettore CSS → inserisci prima/dopo/sostituisci elemento | Blocco App "Navi+ on Section" nell'Editor del Tema |
| Flessibilità | Alta — incorporare ovunque | Media — limitata dallo schema della sezione Shopify |
| Configurazione | Richiede conoscenza del Selettore CSS | È necessario solo inserire l'ID di Incorporamento |

---

## Metodo 1: Inserisci/Sostituisci con Selettore CSS

Il metodo **Consigliato** — funziona sia per Shopify che per Globale.

### Passo 1: Codice di incorporamento

**Shopify:** **Editor del Tema → App Embeds** → abilita Navi+. Solo una volta.

**Globale:** Incolla in `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### Passo 2: Abilita "Pubblica menu con metodo Inserisci/Sostituisci"

Abilita l'interruttore per espandere la sezione di configurazione qui sotto.

### Passo 3: Inserisci Selettore CSS

Inserisci **un** Selettore CSS. Il menu sarà posizionato rispetto all'elemento corrispondente.

**Sintassi specifica per dispositivo:**

| Suffisso | Dispositivo |
|---|---|
| `header` | Sia mobile che desktop |
| `header(M)` | Solo mobile |
| `header(D)` | Solo desktop |

**Suggerimenti per il Selettore CSS per temi Shopify popolari:**

| Tipo di menu | Scopo | Selettore CSS suggerito |
|---|---|---|
| Mega Desktop | Sostituisci la navigazione desktop | `nav.header__inline-menu ul.list-menu` |
| Mega Desktop | Inserisci sotto l'intestazione | `header` |
| Mega Mobile | Inserisci sotto l'intestazione mobile | `header` |

### Passo 4: Scegli posizionamento (Inserisci/Sostituisci)

| Valore | Comportamento |
|---|---|
| **Sostituisci** | Sostituisci completamente l'elemento originale con il menu Navi+ |
| **Inserisci Prima** | Inserisci il menu Navi+ prima dell'elemento |
| **Inserisci Dopo** | Inserisci il menu Navi+ dopo l'elemento |

> Dopo aver scelto **Sostituisci**, considera di aggiungere CSS per nascondere l'elemento originale mentre Navi+ si carica — vedi [Pubblica Ottimizza](/docs/publish/publish-optimize/).

---

## Metodo 2: Blocco App (solo Shopify)

### Come configurare

1. Copia l'**ID di Incorporamento** del menu (mostrato nel modulo — clicca per copiare).
2. Vai a **Editor del Tema Shopify** → trova il **"Navi+ on Section"** Blocco App.
3. Incolla l'ID di Incorporamento nel campo corrispondente.
4. Salva il tema.

### "Fisso in alto durante lo scorrimento"

Attiva l'interruttore per fissare il menu della Sezione in cima alla pagina mentre scorri.

**Quando usarlo:** Se il tema non ha un'intestazione appiccicosa integrata, abilita questo in modo che il menu Mega Desktop rimanga visibile mentre gli utenti scorrono verso il basso.

---

## Possono essere utilizzati entrambi i metodi insieme?

Sì. Gli utenti Shopify possono abilitare entrambi:
- Blocco App per l'anteprima dell'Editor del Tema (più stabile, più facile da visualizzare).
- Inserisci/Sostituisci per un posizionamento più preciso sulla vetrina.

Tipicamente è necessario solo un metodo.

---

## Note per tipo di menu

| Menu | Dispositivo | Note |
|---|---|---|
| Mobile Mega Menu | Interruttore desktop disabilitato | Solo mobile |
| Intestazione Mobile | Interruttore desktop disabilitato | Solo mobile |
| Desktop Mega Menu | Interruttore mobile disabilitato | Solo desktop |
| Mobile Grid | Entrambi | Nessuna restrizione |

---

## Risoluzione dei problemi

**Il menu non appare dopo aver configurato Inserisci/Sostituisci?**
1. Controlla che il Selettore CSS sia corretto — usa DevTools o la Modalità Debug di Navi+.
2. Controlla che l'interruttore "Pubblica menu con metodo Inserisci/Sostituisci" sia abilitato.
3. Controlla che gli Embeds App / codice di incorporamento siano a posto.

**Il menu appare due volte (duplicato)?**
→ Sia il Blocco App che Inserisci/Sostituisci sono attivi contemporaneamente. Disabilita uno di essi.
