---
description: Contrôlez l'apparence de votre menu Navi+ — couleurs, polices, espacement, arrière-plans et icônes à travers un système de design hiérarchique.
lang: fr
layout: default
permalink: /fr/docs/design/
title: Design
---
# Design

La section **Design** contrôle l'ensemble de l'apparence de votre menu : couleurs, typographie, espacement, arrière-plans et icônes. Les paramètres ici s'appliquent à **l'ensemble du menu** en utilisant un système d'héritage à trois niveaux.

---

## Topics

| # | Topic | |
|---|---|---|
| 1 | Inheritance system and override mechanism (read first) | [Design Overview](/docs/design/design-overview/) |
| 2 | Level 1 — Appearance of main menu items | [Design Level 1](/docs/design/design-level1/) |
| 3 | Level 2-3 — Appearance of submenus | [Design Level 2-3](/docs/design/design-level2/) |
| 4 | Divider — Separator lines | [Design Divider](/docs/design/design-divider/) |

---

## Quick Reference

```
Global defaults (hardcoded)
    ↓
Level 1  — applies to all top-level menu items
    ↓  (Level 2-3 inherits if empty)
Level 2-3 — applies to submenus / dropdowns
    ↓  (overrides everything)
Per-item — individual settings in Edit Item
```

**Rule:** Empty = inherit from above. Set a value = override.
