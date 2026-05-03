---
description: Come creare la nidificazione padre–figlio e usare Tab Slide per organizzare gli elementi di menu di Navi+ in strutture a più livelli.
layout: default
permalink: /it/docs/menu-items/multi-level-structure/
title: Struttura multilivello
---
# Struttura multilivello

Navi+ supporta due modi per organizzare il contenuto del menu in profondità: **nidificazione padre–figlio** (trascinare a sinistra/destra per indentare) e **Tab Slide** (dividere il menu in zone di commutazione orizzontale). Puoi usare entrambi gli approcci singolarmente o combinarli.

---

## Opzione 1 — Nidificazione padre–figlio (indentazione tramite trascinamento)

La nidificazione trasforma un elenco piatto in una gerarchia a livelli. Un elemento padre può essere espanso per rivelare i suoi figli.

```
Home                        ← Livello 1 (padre)
  Collections               ← Livello 2 (figlio)
    New Arrivals            ← Livello 3 (nipote)
    Sale
  Lookbook
Contact                     ← Livello 1 (padre, senza figli)
```

### Come fare

**Tramite trascinamento**

1. Passa il cursore sull'elemento che vuoi nidificare.
2. Trascinalo verso **destra** — si aggancia sotto l'elemento sopra come figlio.
3. Trascinalo verso **sinistra** per riportarlo al livello padre.

**Tramite scorciatoia da tastiera**

1. Fai clic sull'elemento per selezionarlo.
2. Premi `→` (freccia destra) per indentare — l'elemento diventa figlio dell'elemento sopra.
3. Premi `←` (freccia sinistra) per togliere l'indentazione — l'elemento sale di un livello.

### Profondità massima di nidificazione per tipo di menu

Il limite di profondità dipende dal **tipo di menu**, non dal piano.

| Tipo di menu | Livelli max. |
|---|:---:|
| Mobile Grid | 1 (nessuna nidificazione) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> Se provi a indentare oltre il limite, l'editor lo bloccherà e mostrerà un messaggio.

---

## Opzione 2 — Tab Slide (zone orizzontali)

Tab Slide divide gli elementi in schede orizzontali. Invece di espandersi verso il basso come figli, ogni scheda mostra un insieme separato di elementi.

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← intestazioni schede
├─────────────────────────────────┤
│  • Collections                  │
│  • New Arrivals                 │  ← contenuto della scheda attiva
│  • Sale                         │
└─────────────────────────────────┘
```

### Come fare

1. Aggiungi un nuovo elemento con il tipo **Tab Marker**.
2. Imposta l'etichetta del Tab Marker — diventa il testo dell'intestazione della scheda (es. "Shop").
3. Aggiungi elementi sotto il Tab Marker — appartengono all'area di contenuto di quella scheda.
4. Ripeti: aggiungi il Tab Marker successivo, poi gli elementi per quella scheda.

```
[Tab Marker]  "Shop"
  Collections
  New Arrivals
  Sale

[Tab Marker]  "Pages"
  About us
  Contact

[Tab Marker]  "More"
  Blog
  FAQ
```

---

## Quale approccio usare?

| Obiettivo | Usare |
|---|---|
| Mostrare sottocategorie sotto un elemento padre | **Nidificazione padre–figlio (Opzione 1)** |
| Raggruppare sezioni non correlate affiancate | **Tab Slide (Opzione 2)** |
| Menu con molti elementi in più categorie | **Tab Slide** |
| Navigazione a drill-down profondo (categoria → sottocategoria) | **Nidificazione padre–figlio** |
| Schede esterne con elementi nidificati in ogni scheda | **Entrambi** |

---

## Limiti da tenere a mente

- **I Tab Marker non possono essere nidificati all'interno di un altro elemento.** Indentare un Tab Marker è bloccato.
- **Gli elementi all'interno di una scheda possono ancora avere figli** — soggetti al limite di profondità del tipo di menu.
- **Mobile Grid non supporta la nidificazione** — usa Tab Slide se hai bisogno di raggruppamenti.
- **Riordina le schede** trascinando un Tab Marker verso l'alto o il basso — gli elementi sotto lo seguono.
