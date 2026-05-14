---
description: Controlla l'aspetto del tuo menu Navi+ — colori, caratteri, spaziatura, sfondi e icone attraverso un sistema di design gerarchico.
lang: it
layout: default
permalink: /it/docs/design/
title: Design
---
# Design

La **sezione Design** controlla l'intero aspetto del tuo menu: colori, tipografia, spaziatura, sfondi e icone. Le impostazioni qui si applicano all'**intero menu** utilizzando un sistema di eredità a tre livelli.

---

## Argomenti

| # | Argomento | |
|---|---|---|
| 1 | Sistema di eredità e meccanismo di override (leggi per primo) | [Panoramica del Design](/docs/design/design-overview/) |
| 2 | Livello 1 — Aspetto degli elementi del menu principale | [Design Livello 1](/docs/design/design-level1/) |
| 3 | Livello 2-3 — Aspetto dei sottomenu | [Design Livello 2-3](/docs/design/design-level2/) |
| 4 | Divider — Linee separatrici | [Design Divider](/docs/design/design-divider/) |

---

## Riferimento Veloce

```
Global defaults (hardcoded)
    ↓
Level 1  — applies to all top-level menu items
    ↓  (Level 2-3 inherits if empty)
Level 2-3 — applies to submenus / dropdowns
    ↓  (overrides everything)
Per-item — individual settings in Edit Item
```

**Regola:** Vuoto = eredita da sopra. Imposta un valore = sovrascrivi.
