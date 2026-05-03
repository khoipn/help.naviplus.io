---
description: Cos'è un elemento di menu in Navi+, i tipi di elementi disponibili e la struttura completa dei campi nel pannello di modifica.
layout: default
permalink: /it/docs/menu-items/item-overview/
title: Panoramica degli elementi
---
# Panoramica degli elementi

## Cos'è un elemento di menu?

Ogni riga in una lista di menu è un **elemento**. Un elemento è la più piccola unità in Navi+ — può essere un link di navigazione, un'intestazione di gruppo, uno spaziatore vuoto o un divisore di scheda.

Più elementi impilati formano un menu. Il menu viene poi renderizzato per i visitatori sul tuo sito web.

---

## Tipi di elementi

Quando aggiungi un nuovo elemento, scegli il suo **tipo**. Il tipo determina come appare l'elemento e cosa fa.

| Tipo | Descrizione | Quando usare |
|---|---|---|
| **Icona / Testo** | Elemento standard con icona ed etichetta | Link di navigazione regolari |
| **Immagine grande / Testo** | Riquadro grande con immagine a tutta pagina e testo sovrapposto | Banner di categoria, immagini di prodotti in evidenza |
| **Titolo di gruppo** | Intestazione di sezione — non è un link | Raggruppare visivamente gli elementi sotto |
| **Spazio vuoto** | Spazio trasparente | Spaziatura e allineamento del layout |
| **Marcatore tab** | Segna l'inizio di una nuova scheda | Dividere il menu in schede orizzontali |
| **HTML personalizzato** | Incorporare HTML arbitrario | Widget personalizzati, banner speciali |

---

## Struttura dei campi

Clicca su qualsiasi elemento per aprire il pannello di modifica:

```
┌─────────────────────────────────────────┐
│  MEDIA                                  │
│    Icona  |  Immagine                   │
├─────────────────────────────────────────┤
│  INFORMAZIONI DI BASE                   │
│    Testo · Collegamento a · HTML        │
│    Descrizione · Separatore · Badge     │
├─────────────────────────────────────────┤
│  LAYOUT                                 │
│    Layout visualizzazione · Largh. · Pos│
│    Altezza fissa                        │
├─────────────────────────────────────────┤
│  INTERFACE (UI)                         │
│    Classi · Stile testo                 │
│    Stile icona/immagine · Sfondo        │
│    Spaziatura · Allineamento            │
├─────────────────────────────────────────┤
│  AVANZATO                               │
│    Animazione · CSS · Attributi         │
├─────────────────────────────────────────┤
│  PUBBLICA                               │
│    Pubblicato · Condizioni login        │
└─────────────────────────────────────────┘
```

---

## Flusso di modifica

1. Clicca su un elemento nell'albero → il pannello si apre.
2. Cambia i campi necessari.
3. Premi **Aggiorna** per applicare le modifiche a quell'elemento.
4. Premi **Salva** (`Ctrl+S` / `Cmd+S`) per salvare il menu intero e aggiornare il simulatore.

> Tieni premuto Shift mentre premi Salva per salvare e ricaricare immediatamente il simulatore.
