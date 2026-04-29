---
description: Configura lo stile predefinito delle linee di divisione nei menu Navi+ — colore, spessore, tipo e larghezza.
layout: default
permalink: /it/docs/design/design-divider/
title: Design divider — Linee di separazione
---
# Design Divider — Linee di Separazione

Le impostazioni in **Design → Divider** definiscono l'aspetto predefinito di tutti i divisori del menu.

Questo è uno stile a **livello di menu** — gli elementi individuali possono sovrascriverlo tramite Modifica Elemento → Informazioni Base → Aggiungi Divider.

---

## Campi

| Campo | Descrizione | Predefinito |
|---|---|---|
| **Colore divisore** | Colore della linea (hex) | `#EEEEEE` |
| **Dimensione divisore (px)** | Spessore della linea | 1px |
| **Tipo divisore** | Solido / Tratteggiato / Punteggiato / Doppio | Solido |
| **Larghezza divisore** | Intera / Rientrata / Sotto il testo | Intera |

> **Tipo divisore** e **Larghezza divisore** richiedono il piano Business o Elite.

---

## Come funziona

1. Le impostazioni qui = predefinito quando un elemento ha **Aggiungi Divider** abilitato.
2. Lo stile divisore per elemento sovrascrive questo.
3. Il Livello 2-3 eredita il Colore divisore se vuoto.

---

## Larghezza divisore

| Valore | Visualizzazione |
|---|---|
| **Intera** | Larghezza intera dell'elemento |
| **Rientrata** | Rientrata su entrambi i lati |
| **Sotto il testo** | Solo sotto la parte di testo |
