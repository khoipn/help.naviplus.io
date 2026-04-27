---
description: Comprendi il sistema di ereditarietà degli stili a tre livelli di Navi+ — come gli stili si propagano dal Livello 1 al Livello 2-3 e gli override per elemento.
layout: default
permalink: /it/docs/design/design-overview/
title: Panoramica Design — Ereditarietà e Override
---
# Panoramica Design — Ereditarietà e Override

Navi+ utilizza un **sistema di stili a tre livelli**. Capirlo ti permette di stilizzare il menu in modo efficiente.

---

## Tre livelli

```
┌─────────────────────────────────────────────────────┐
│  LIVELLO 1  (Design → Livello 1)                    │
│  Si applica a tutti gli elementi di menu principale │
│  Questo è il valore predefinito globale del menu    │
└───────────────────┬─────────────────────────────────┘
                    │  Livello 2-3 eredita se vuoto
┌───────────────────▼─────────────────────────────────┐
│  LIVELLO 2-3  (Design → Livello 2-3)                │
│  Si applica ai sottomenu / menu a tendina           │
│  Vuoto = uguale al Livello 1                        │
└───────────────────┬─────────────────────────────────┘
                    │  Per elemento sovrascrive tutto
┌───────────────────▼─────────────────────────────────┐
│  PER ELEMENTO  (Modifica Elemento → Interfaccia)    │
│  Impostazioni per elemento per i singoli elementi   │
│  Sovrascrive il Livello 1 e il Livello 2-3 completamente │
└─────────────────────────────────────────────────────┘
```

---

## Regole di ereditarietà

**Il Livello 2-3 eredita dal Livello 1** per tutti i campi vuoti:

| Campo Livello 2-3 | Eredita dal Livello 1 |
|---|---|
| Colore testo | Colore testo |
| Dimensione font | Dimensione font |
| Spessore font | Spessore font |
| Colore icona | Colore icona |
| Dimensione icona | Dimensione icona |
| Layout di visualizzazione | Layout di visualizzazione |
| Allineamento | Allineamento |
| Colore divisore | Divisore (globale) |

Se configuri solo il Livello 1, i sottomenu seguono automaticamente. Vai al Livello 2-3 solo quando vuoi che i sottomenu abbiano un aspetto **diverso**.

---

## Override per elemento

Le impostazioni applicate in **Modifica Elemento → Interfaccia** sovrascrivono il Livello 1 e il Livello 2-3 solo per quell'elemento.

Per rimuovere un override: svuota il campo in Modifica Elemento.

---

## Esempio

**Obiettivo:** Tutti i 5 elementi hanno testo bianco, tranne "Saldi" che è rosso.

1. Design → Livello 1 → Colore testo = `#FFFFFF`
2. Modifica Elemento → "Saldi" → Interfaccia → Colore testo = `#FF0000`

---

## Sintassi Mobile | Desktop

Alcuni campi di spaziatura supportano valori diversi:

```
8 16 8 16              →  uguale su entrambi i dispositivi
8 8 8 8 | 12 24 12 24  →  sinistra: mobile, destra: desktop
```
