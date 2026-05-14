---
description: Controlla su quali pagine e dispositivi appare il tuo menu Navi+ — utilizzando interruttori per dispositivi, regole di parole chiave URL e filtri per tipo di pagina Shopify.
lang: it
layout: default
permalink: /it/docs/setting/setting-display-rules/
title: Impostazione delle regole di visualizzazione — Visibilità condizionale
---
# Impostazione delle Regole di Visualizzazione — Visibilità Condizionale

Controlla dove e quando appare il tuo menu in base al tipo di dispositivo, URL o tipo di pagina Shopify.

---

## Visualizzazione per Dispositivo

Trovato nella scheda **Pubblica** del menu (non per elemento):

| Interruttore | Effetto |
|---|---|
| **Mobile** | Mostra/nascondi il menu sugli schermi mobili |
| **Desktop** | Mostra/nascondi il menu sugli schermi desktop |

Predefinito: solo Mobile è abilitato. Devi abilitare manualmente Desktop se vuoi che il menu appaia su schermi più grandi.

> Per mostrare/nascondere elementi individuali per dispositivo → vedi [Visibilità degli Elementi](/docs/menu-items/item-visibility/).

---

## Visualizzazione per Parole Chiave URL

Due campi in **Impostazione → Visualizzazione per Parole Chiave** ti permettono di controllare su quali URL appare il menu.

### Mostra solo quando l'URL contiene la parola chiave

**Campo:** `Pubblica — Contiene Parola Chiave`

```
collezioni, prodotti/sale
```

Il menu appare solo su pagine il cui URL contiene `collezioni` **o** `prodotti/sale`.

**Esempio:** Un menu "Navigazione Negozio" per le pagine prodotto → mostra solo su `collezioni/` e `prodotti/`.

---

### Nascondi quando l'URL contiene la parola chiave

**Campo:** `Pubblica — Non Contiene Parola Chiave`

```
checkout, account/login
```

Il menu è nascosto sulle pagine di checkout e login; visibile ovunque altro.

**Esempio:** Nascondi la Tabbar durante il checkout per evitare di distrarre il cliente.

---

## Visualizzazione per Tipo di Pagina Shopify

La scheda **Pubblica** include anche 6 gruppi di pagine Shopify (solo negozi Shopify):

| Gruppo | Pagine |
|---|---|
| **Home** | Pagina principale |
| **Dettaglio Prodotto** | Pagine di dettaglio prodotto |
| **Categorie Prodotto** | Pagine di collezione / categoria |
| **Pagine** | Pagine statiche (Chi siamo, Contatti, ecc.) |
| **Blog** | Elenco blog e pagine articolo |
| **Altri** | Pagine non nei 5 gruppi sopra |

Deseleziona un gruppo → il menu non apparirà su quel tipo di pagina.

---

## Come si Accumulano le Regole

Tutte le condizioni vengono valutate insieme in quest'ordine:

```
1. Il dispositivo è abilitato?              →  Se no: nascosto
2. Il tipo di pagina è selezionato?           →  Se no: nascosto
3. L'URL corrisponde a "Non mostrare"?    →  Se sì: nascosto
4. L'URL corrisponde a "Mostra solo"?     →  Se no: nascosto
5. Mostra menu
```
