---
description: Comprendere il sistema di eredità del design a tre livelli in Navi+ — come gli stili si propagano dal Livello 1 al Livello 2-3 alle sovrascritture per singolo elemento.
lang: it
layout: default
permalink: /it/docs/design/design-overview/
title: Panoramica del design — Eredità e sovrascrittura
---
# Panoramica del Design — Eredità e Sovrascrittura

Navi+ utilizza un **sistema di stili a tre livelli**. Comprendere questo ti consente di stilizzare il tuo menu in modo efficiente senza ripetere le impostazioni.

---

## Tre Livelli

```
┌─────────────────────────────────────────────────────┐
│  LIVELLO 1  (Design → Livello 1)                     │
│  Si applica a tutti gli elementi di menu di primo livello │
│  Questo è il valore predefinito globale per l'intero menu │
└───────────────────┬─────────────────────────────────┘
                    │  Livello 2-3 eredita se vuoto
┌───────────────────▼─────────────────────────────────┐
│  LIVELLO 2-3  (Design → Livello 2-3)                 │
│  Si applica a sottomenu / menu a discesa           │
│  Vuoto = stesso di Livello 1                         │
└───────────────────┬─────────────────────────────────┘
                    │  Sovrascrive tutto per singolo elemento
┌───────────────────▼─────────────────────────────────┐
│  PER-ELEMENTO  (Modifica Elemento → Interfaccia)     │
│  Impostazioni per singolo elemento                   │
│  Sovrascrive completamente Livello 1 e Livello 2-3   │
└─────────────────────────────────────────────────────┘
```

---

## Regole di Eredità

**Livello 2-3 eredita da Livello 1** per tutti i campi vuoti:

| Campo Livello 2-3 | Eredita da Livello 1 |
|---|---|
| Colore del Testo | Colore del Testo |
| Dimensione del Font | Dimensione del Font |
| Peso del Font | Peso del Font |
| Colore dell'Icona | Colore dell'Icona |
| Dimensione dell'Icona | Dimensione dell'Icona |
| Layout di Visualizzazione | Layout di Visualizzazione |
| Allineamento | Allineamento |
| Colore del Divider | Divider (globale) |

Se configuri solo il Livello 1, i sottomenu seguono automaticamente. Vai al Livello 2-3 solo quando vuoi che i sottomenu appaiano **diversi** dal menu principale.

---

## Sovrascrittura per Singolo Elemento

Le impostazioni applicate a un elemento specifico in **Modifica Elemento → Interfaccia** (colore del testo, dimensione dell'icona, sfondo, ecc.) sovrascrivono Livello 1 e Livello 2-3 solo per quell'elemento. Altri elementi non sono influenzati.

Per rimuovere una sovrascrittura: cancella il campo in Modifica Elemento — l'elemento torna a Livello 1/2-3.

---

## Esempio

**Obiettivo:** Tutti e 5 gli elementi hanno testo bianco, tranne "Sale" che è rosso.

1. Design → Livello 1 → Colore del Testo = `#FFFFFF`
2. Modifica Elemento → "Sale" → Interfaccia → Colore del Testo = `#FF0000`

Risultato: 4 elementi rimangono bianchi, "Sale" diventa rosso. Non è necessario modificare ogni elemento singolarmente.

---

## Sintassi Mobile | Desktop

Alcuni campi di spaziatura supportano valori diversi per mobile e desktop:

```
8 16 8 16             →  stesso valore su entrambi i dispositivi
8 8 8 8 | 12 24 12 24  →  sinistra: mobile, destra: desktop
```

La parte prima di `|` si applica su mobile; la parte dopo si applica su desktop (≥768px).
