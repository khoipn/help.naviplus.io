---
description: Come creare una nidificazione genitore–figlio e utilizzare Tab Slide per organizzare gli elementi del menu Navi+ in strutture multi-livello.
lang: it
layout: default
permalink: /it/docs/menu-items/multi-level-structure/
title: Struttura Multi-livello
---
# Struttura Multi-livello

Navi+ supporta due modi per organizzare i contenuti del menu in profondità: **nidificazione genitore–figlio** (trascina a sinistra/destra per indentare) e **Tab Slide** (dividi il menu in zone di commutazione orizzontali). Puoi utilizzare uno dei due approcci o combinarli entrambi.

---

## Opzione 1 — Nidificazione genitore–figlio (indentare trascinando)

La nidificazione trasforma un elenco piatto in una gerarchia a livelli. Un elemento genitore può essere espanso per rivelare i suoi figli.

```
Home                        ← Livello 1 (genitore)
  Collezioni               ← Livello 2 (figlio)
    Nuovi Arrivi            ← Livello 3 (nipote)
    Saldi
  Lookbook
Contatto                     ← Livello 1 (genitore, senza figli)
```

### Come farlo

**Trascinando e rilasciando**

1. Passa il mouse sopra l'elemento che desideri nidificare.
2. Trascinalo **a destra** — si posiziona sotto l'elemento sopra di esso come figlio.
3. Trascinalo **a sinistra** per riportarlo al livello genitore.

**Con la scorciatoia da tastiera**

1. Clicca sull'elemento per selezionarlo.
2. Premi `→` (freccia destra) per indentare — l'elemento diventa un figlio dell'elemento sopra.
3. Premi `←` (freccia sinistra) per disindentare — l'elemento torna su di un livello.

### Profondità massima di nidificazione per tipo di menu

Il limite di profondità dipende dal **tipo di menu**, non dal piano.

| Tipo di menu | Livelli max |
|---|:---:|
| Griglia Mobile | 1 (nessuna nidificazione) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> Se provi a indentare oltre il limite, l'editor lo bloccherà e mostrerà un messaggio.

---

## Opzione 2 — Tab Slide (zone orizzontali)

Tab Slide divide gli elementi in schede orizzontali. Invece di espandersi verso il basso come i figli, ogni scheda mostra un insieme separato di elementi.

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← intestazioni delle schede
├─────────────────────────────────┤
│  • Collezioni                  │
│  • Nuovi Arrivi                 │  ← contenuto della scheda attiva
│  • Saldi                         │
└─────────────────────────────────┘
```

### Come farlo

1. Aggiungi un nuovo elemento di tipo **Tab Marker**.
2. Imposta l'etichetta del Tab Marker — questo diventa il testo dell'intestazione della scheda (ad es. "Shop").
3. Aggiungi elementi sotto il Tab Marker — appartengono all'area di contenuto di quella scheda.
4. Ripeti: aggiungi il prossimo Tab Marker, poi aggiungi elementi per quella scheda.

```
[Tab Marker]  "Shop"
  Collezioni
  Nuovi Arrivi
  Saldi

[Tab Marker]  "Pages"
  Chi siamo
  Contatto

[Tab Marker]  "More"
  Blog
  FAQ
```

---

## Quale approccio utilizzare?

| Obiettivo | Utilizzare |
|---|---|
| Mostrare sottocategorie sotto un elemento genitore | **Nidificazione genitore–figlio (Opzione 1)** |
| Raggruppare sezioni non correlate affiancate | **Tab Slide (Opzione 2)** |
| Menu con molti elementi in più categorie | **Tab Slide** |
| Navigazione profonda (categoria → sottocategoria) | **Nidificazione genitore–figlio** |
| Schede esterne con elementi nidificati all'interno di ciascuna scheda | **Entrambi** |

---

## Limiti da tenere a mente

- **I Tab Marker non possono essere nidificati all'interno di un altro elemento.** L'indentazione di un Tab Marker è bloccata.
- **Gli elementi all'interno di una scheda possono comunque avere figli** — soggetti al limite di profondità del tipo di menu.
- **La Griglia Mobile non supporta la nidificazione** — utilizza Tab Slide se hai bisogno di raggruppamento.
- **Riordina le schede** trascinando un Tab Marker su o giù — gli elementi sotto di esso seguono.
