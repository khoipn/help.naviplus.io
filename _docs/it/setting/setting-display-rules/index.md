---
description: Controlla quali pagine e dispositivi mostrano il menu Navi+ — interruttori dispositivo, regole di parole chiave URL, filtri per tipo di pagina Shopify.
layout: default
permalink: /it/docs/setting/setting-display-rules/
title: Setting display rules — Visibilità condizionale
---
# Setting Display Rules — Visibilità Condizionale

Controlla dove appare il menu in base al tipo di dispositivo, all'URL o al tipo di pagina Shopify.

---

## Visualizzazione per dispositivo

Nella scheda **Pubblica**:

| Interruttore | Effetto |
|---|---|
| **Mobile** | Mostra/nascondi su mobile |
| **Desktop** | Mostra/nascondi su desktop |

Predefinito: solo Mobile è abilitato. Desktop deve essere abilitato manualmente.

---

## Regole di parole chiave URL

### Mostra solo quando l'URL contiene la parola chiave

**Campo:** `Pubblica — Contiene parola chiave`

```
collections, products/sale
```

---

### Nascondi quando l'URL contiene la parola chiave

**Campo:** `Pubblica — Non contiene parola chiave`

```
checkout, account/login
```

---

## Tipi di pagina Shopify

| Gruppo | Pagine |
|---|---|
| **Home** | Pagina principale |
| **Dettaglio prodotto** | Pagine prodotto |
| **Categorie prodotto** | Pagine collezione |
| **Pagine** | Pagine statiche |
| **Blog** | Blog e articoli |
| **Altro** | Tutto il resto |

Deselezionare un gruppo → il menu non verrà mostrato su quel tipo di pagina.

---

## Ordine delle regole

```
1. Dispositivo abilitato?           →  Se no: nascosto
2. Tipo di pagina selezionato?      →  Se no: nascosto
3. URL corrisponde a non-mostrare?  →  Se sì: nascosto
4. URL corrisponde a mostra-solo?   →  Se no: nascosto
5. Mostra il menu
```
