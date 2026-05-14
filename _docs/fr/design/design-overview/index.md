---
description: Comprendre le système d'héritage de design à trois niveaux dans Navi+ — comment les styles se propagent du Niveau 1 au Niveau 2-3 aux remplacements par élément.
lang: fr
layout: default
permalink: /fr/docs/design/design-overview/
title: Aperçu du design — Héritage & remplacement
---
# Aperçu du Design — Héritage & Remplacement

Navi+ utilise un **système de style à trois niveaux**. Comprendre cela vous permet de styliser votre menu efficacement sans répéter les paramètres.

---

## Trois Couches

```
┌─────────────────────────────────────────────────────┐
│  NIVEAU 1  (Design → Niveau 1)                      │
│  S'applique à tous les éléments de menu de premier niveau │
│  C'est le défaut global pour l'ensemble du menu     │
└───────────────────┬─────────────────────────────────┘
                    │  Niveau 2-3 hérite si vide
┌───────────────────▼─────────────────────────────────┐
│  NIVEAU 2-3  (Design → Niveau 2-3)                  │
│  S'applique aux sous-menus / menus déroulants       │
│  Vide = même que le Niveau 1                        │
└───────────────────┬─────────────────────────────────┘
                    │  Remplacements par élément tout
┌───────────────────▼─────────────────────────────────┐
│  PAR ÉLÉMENT  (Modifier l'élément → Interface)      │
│  Paramètres par élément pour des éléments individuels │
│  Remplace complètement le Niveau 1 et le Niveau 2-3 │
└─────────────────────────────────────────────────────┘
```

---

## Règles d'Héritage

**Le Niveau 2-3 hérite du Niveau 1** pour tous les champs vides :

| Champ Niveau 2-3 | Hérite du Niveau 1 |
|---|---|
| Couleur du texte | Couleur du texte |
| Taille de la police | Taille de la police |
| Poids de la police | Poids de la police |
| Couleur de l'icône | Couleur de l'icône |
| Taille de l'icône | Taille de l'icône |
| Mise en page d'affichage | Mise en page d'affichage |
| Alignement | Alignement |
| Couleur du séparateur | Séparateur (global) |

Si vous configurez uniquement le Niveau 1, les sous-menus suivent automatiquement. Ne passez au Niveau 2-3 que lorsque vous souhaitez que les sous-menus aient l'air **différents** du menu principal.

---

## Remplacement par Éléments

Les paramètres appliqués à un élément spécifique dans **Modifier l'élément → Interface** (couleur du texte, taille de l'icône, arrière-plan, etc.) remplacent le Niveau 1 et le Niveau 2-3 uniquement pour cet élément. Les autres éléments ne sont pas affectés.

Pour supprimer un remplacement : effacez le champ dans Modifier l'élément — l'élément revient au Niveau 1/2-3.

---

## Exemple

**Objectif :** Tous les 5 éléments sont en texte blanc, sauf "Sale" qui est rouge.

1. Design → Niveau 1 → Couleur du texte = `#FFFFFF`
2. Modifier l'élément → "Sale" → Interface → Couleur du texte = `#FF0000`

Résultat : 4 éléments restent blancs, "Sale" devient rouge. Pas besoin de modifier chaque élément individuellement.

---

## Mobile | Syntaxe de Bureau

Certains champs d'espacement prennent en charge des valeurs différentes pour mobile et bureau :

```
8 16 8 16             →  même valeur sur les deux appareils
8 8 8 8 | 12 24 12 24  →  gauche : mobile, droite : bureau
```

La partie avant `|` s'applique sur mobile ; la partie après s'applique sur bureau (≥768px).
