---
description: Controlla l'aspetto del tuo menu Navi+ — colori, font, spaziatura, sfondi e icone tramite un sistema di design gerarchico.
layout: default
permalink: /docs/design/
title: Design
---
# Design

La sezione **Design** controlla l'intero aspetto del tuo menu: colori, tipografia, spaziatura, sfondi e icone. Le impostazioni qui si applicano all'**intero menu** utilizzando un sistema di ereditarietà a tre livelli.

---

## Argomenti

| # | Argomento | |
|---|---|---|
| 1 | Sistema di ereditarietà e meccanismo di override (leggere prima) | [Panoramica Design](/docs/design/design-overview/) |
| 2 | Livello 1 — Aspetto degli elementi di menu principale | [Design Livello 1](/docs/design/design-level1/) |
| 3 | Livello 2-3 — Aspetto dei sottomenu | [Design Livello 2-3](/docs/design/design-level2/) |
| 4 | Divider — Linee di separazione | [Design Divider](/docs/design/design-divider/) |

---

## Riferimento Rapido

```
Impostazioni globali predefinite (hardcoded)
    ↓
Livello 1  — si applica a tutti gli elementi di menu principale
    ↓  (Livello 2-3 eredita se vuoto)
Livello 2-3 — si applica ai sottomenu / menu a tendina
    ↓  (sovrascrive tutto)
Per elemento — impostazioni individuali nel Modifica Elemento
```

**Regola:** Vuoto = eredita da sopra. Imposta un valore = sovrascrive.
