---
description: Comment créer une imbrication parent–enfant et utiliser Tab Slide pour organiser les éléments de menu Navi+ en structures multi-niveaux.
layout: default
permalink: /fr/docs/menu-items/multi-level-structure/
title: Structure multi-niveaux
---
# Structure multi-niveaux

Navi+ propose deux façons d'organiser le contenu du menu en profondeur : **l'imbrication parent–enfant** (glisser à gauche/droite pour indenter) et le **Tab Slide** (diviser le menu en zones de commutation horizontales). Vous pouvez utiliser l'une ou l'autre approche, ou les combiner.

---

## Option 1 — Imbrication parent–enfant (indentation par glisser)

L'imbrication transforme une liste plate en hiérarchie à plusieurs niveaux. Un élément parent peut être développé pour révéler ses enfants.

```
Home                        ← Niveau 1 (parent)
  Collections               ← Niveau 2 (enfant)
    New Arrivals            ← Niveau 3 (petit-enfant)
    Sale
  Lookbook
Contact                     ← Niveau 1 (parent, sans enfants)
```

### Comment faire

**Par glisser-déposer**

1. Survolez l'élément que vous souhaitez imbriquer.
2. Faites-le glisser vers la **droite** — il se place sous l'élément au-dessus en tant qu'enfant.
3. Faites-le glisser vers la **gauche** pour le remonter au niveau parent.

**Par raccourci clavier**

1. Cliquez sur l'élément pour le sélectionner.
2. Appuyez sur `→` (flèche droite) pour indenter — l'élément devient l'enfant de l'élément au-dessus.
3. Appuyez sur `←` (flèche gauche) pour désindenter — l'élément remonte d'un niveau.

### Profondeur maximale d'imbrication par type de menu

La limite de profondeur dépend du **type de menu**, pas du forfait.

| Type de menu | Niveaux max. |
|---|:---:|
| Mobile Grid | 1 (pas d'imbrication) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> Si vous essayez d'indenter au-delà de la limite, l'éditeur le bloquera et affichera un message.

---

## Option 2 — Tab Slide (zones horizontales)

Tab Slide divise les éléments en onglets horizontaux. Au lieu de s'étendre vers le bas comme des enfants, chaque onglet affiche un ensemble distinct d'éléments.

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← en-têtes d'onglets
├─────────────────────────────────┤
│  • Collections                  │
│  • New Arrivals                 │  ← contenu de l'onglet actif
│  • Sale                         │
└─────────────────────────────────┘
```

### Comment faire

1. Ajoutez un nouvel élément avec le type **Tab Marker**.
2. Définissez le libellé du Tab Marker — c'est le texte de l'en-tête d'onglet (ex. "Shop").
3. Ajoutez des éléments sous le Tab Marker — ils appartiennent à la zone de contenu de cet onglet.
4. Répétez : ajoutez le Tab Marker suivant, puis ajoutez les éléments pour cet onglet.

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
| Afficher des sous-catégories sous un élément parent | **Imbrication parent–enfant (Option 1)** |
| Regrouper des sections non liées côte à côte | **Tab Slide (Option 2)** |
| Menu avec de nombreux éléments dans plusieurs catégories | **Tab Slide** |
| Navigation en profondeur (catégorie → sous-catégorie) | **Imbrication parent–enfant** |
| Onglets externes avec éléments imbriqués dans chaque onglet | **Les deux** |

---

## Limites à garder à l'esprit

- **Les Tab Markers ne peuvent pas être imbriqués dans un autre élément.** L'indentation d'un Tab Marker est bloquée.
- **Les éléments dans un onglet peuvent toujours avoir des enfants** — selon la limite de profondeur du type de menu.
- **Mobile Grid ne prend pas en charge l'imbrication** — utilisez Tab Slide si vous avez besoin de regroupements.
- **Réorganisez les onglets** en faisant glisser un Tab Marker vers le haut ou le bas — les éléments en dessous suivent.
