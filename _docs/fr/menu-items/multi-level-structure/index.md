---
description: Comment créer un nesting parent-enfant et utiliser Tab Slide pour organiser les éléments du menu Navi+ en structures multi-niveaux.
lang: fr
layout: default
permalink: /fr/docs/menu-items/multi-level-structure/
title: Structure multi-niveaux
---
# Structure multi-niveaux

Navi+ prend en charge deux façons d'organiser le contenu du menu en profondeur : **nesting parent-enfant** (faites glisser à gauche/droite pour indenter) et **Tab Slide** (divisez le menu en zones de commutation horizontales). Vous pouvez utiliser l'une ou l'autre approche ou combiner les deux.

---

## Option 1 — Nesting parent-enfant (indentez par glisser)

Le nesting transforme une liste plate en une hiérarchie de niveaux. Un élément parent peut être développé pour révéler ses enfants.

```
Home                        ← Niveau 1 (parent)
  Collections               ← Niveau 2 (enfant)
    New Arrivals            ← Niveau 3 (petit-enfant)
    Sale
  Lookbook
Contact                     ← Niveau 1 (parent, sans enfants)
```

### Comment le faire

**Par glisser-déposer**

1. Survolez l'élément que vous souhaitez imbriquer.
2. Faites-le glisser **vers la droite** — il se fixe sous l'élément au-dessus en tant qu'enfant.
3. Faites-le glisser **vers la gauche** pour le ramener au niveau parent.

**Par raccourci clavier**

1. Cliquez sur l'élément pour le sélectionner.
2. Appuyez sur `→` (flèche droite) pour indenter — l'élément devient un enfant de l'élément au-dessus.
3. Appuyez sur `←` (flèche gauche) pour désindenter — l'élément remonte d'un niveau.

### Profondeur maximale de nesting par type de menu

La limite de profondeur dépend du **type de menu**, pas du plan.

| Type de menu | Niveaux max |
|---|:---:|
| Mobile Grid | 1 (pas de nesting) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> Si vous essayez d'indiquer au-delà de la limite, l'éditeur le bloquera et affichera un message.

---

## Option 2 — Tab Slide (zones horizontales)

Tab Slide divise les éléments en onglets horizontaux. Au lieu de se développer vers le bas comme des enfants, chaque onglet affiche un ensemble distinct d'éléments.

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← en-têtes d'onglets
├─────────────────────────────────┤
│  • Collections                  │
│  • New Arrivals                 │  ← contenu de l'onglet actif
│  • Sale                         │
└─────────────────────────────────┘
```

### Comment le faire

1. Ajoutez un nouvel élément de type **Tab Marker**.
2. Définissez l'étiquette du Tab Marker — cela devient le texte de l'en-tête de l'onglet (par exemple, "Shop").
3. Ajoutez des éléments sous le Tab Marker — ils appartiennent à la zone de contenu de cet onglet.
4. Répétez : ajoutez le prochain Tab Marker, puis ajoutez des éléments pour cet onglet.

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

## Quelle approche utiliser ?

| Objectif | Utiliser |
|---|---|
| Afficher des sous-catégories sous un élément parent | **Nesting parent-enfant (Option 1)** |
| Regrouper des sections non liées côte à côte | **Tab Slide (Option 2)** |
| Menu avec de nombreux éléments dans plusieurs catégories | **Tab Slide** |
| Navigation en profondeur (catégorie → sous-catégorie) | **Nesting parent-enfant** |
| Onglets externes avec des éléments imbriqués à l'intérieur de chaque onglet | **Les deux** |

---

## Limites à garder à l'esprit

- **Les Tab Markers ne peuvent pas être imbriqués à l'intérieur d'un autre élément.** Indenter un Tab Marker est bloqué.
- **Les éléments à l'intérieur d'un onglet peuvent toujours avoir des enfants** — sous réserve de la limite de profondeur du type de menu.
- **Mobile Grid ne prend pas en charge le nesting** — utilisez Tab Slide si vous avez besoin de regroupement.
- **Réorganisez les onglets** en faisant glisser un Tab Marker vers le haut ou vers le bas — les éléments en dessous le suivent.
