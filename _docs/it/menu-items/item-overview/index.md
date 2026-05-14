---
description: Cosa è un elemento di menu in Navi+, i tipi di elementi disponibili e la struttura completa dei campi nel pannello Modifica Elemento.
lang: it
layout: default
permalink: /it/docs/menu-items/item-overview/
title: Panoramica dell'Elemento
---
# Panoramica dell'Elemento

## Cosa è un elemento di menu?

Ogni riga in un elenco di menu è un **elemento**. Un elemento è l'unità più piccola in Navi+ — può essere un link di navigazione, un'intestazione di gruppo, uno spazio vuoto o un divisore di schede.

Più elementi impilati insieme formano un menu. Il menu viene quindi visualizzato per i visitatori sul tuo sito web.

---

## Tipi di Elementi

Quando aggiungi un nuovo elemento scegli il suo **tipo**. Il tipo determina come appare l'elemento e cosa fa.

| Tipo | Descrizione | Quando usarlo |
|---|---|---|
| **Icona / Testo** | Elemento standard con un'icona e un'etichetta | Link di navigazione regolari |
| **Immagine Grande / Testo** | Grande riquadro con un'immagine a tutta larghezza e testo sovrapposto | Banner di categoria, immagini di prodotti in evidenza |
| **Titolo di Gruppo** | Intestazione di sezione — non un link | Raggruppa visivamente gli elementi sottostanti |
| **Spazio Vuoto** | Gap trasparente | Spaziatura e allineamento del layout |
| **Indicatore di Scheda** | Segna l'inizio di una nuova scheda | Dividi il menu in schede orizzontali |
| **HTML Personalizzato** | Incorpora HTML arbitrario | Widget personalizzati, banner speciali |

---

## Struttura dei Campi

Clicca su qualsiasi elemento per aprire il pannello Modifica Elemento. È organizzato in queste sezioni:

```
┌─────────────────────────────────────────┐
│  MEDIA                                  │
│    Icona  |  Immagine                  │
├─────────────────────────────────────────┤
│  INFORMAZIONI DI BASE                   │
│    Testo · Link A · HTML                │
│    Descrizione · Divisore · Badge       │
├─────────────────────────────────────────┤
│  LAYOUT                                 │
│    Layout di Visualizzazione · Larghezza · Posizione │
│    Altezza Fissa                        │
├─────────────────────────────────────────┤
│  INTERFACCIA (UI)                      │
│    Nomi delle Classi · Stile del Testo  │
│    Stile Icona/Immagine · Sfondo       │
│    Spaziatura · Allineamento            │
├─────────────────────────────────────────┤
│  AVANZATO                               │
│    Animazione · CSS · Attributi        │
├─────────────────────────────────────────┤
│  PUBBLICA                                │
│    È Pubblicato · Condizioni di Accesso │
└─────────────────────────────────────────┘
```

---

## Flusso di Modifica

1. Clicca su un elemento nell'albero del menu → si apre il pannello Modifica Elemento.
2. Cambia i campi di cui hai bisogno.
3. Premi **Aggiorna** per applicare le modifiche a quell'elemento.
4. Premi **Salva** (`Ctrl+S` / `Cmd+S`) per salvare l'intero menu e aggiornare il simulatore.

> Se hai premuto Aggiorna ma non hai ancora Salvato, le modifiche non sono scritte nel tuo menu live. Tieni premuto Shift mentre premi Salva per salvare e ricaricare immediatamente il simulatore.
