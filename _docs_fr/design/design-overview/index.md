---
description: Comprenez le système d'héritage de styles à trois couches de Navi+ — comment les styles se propagent du Niveau 1 au Niveau 2-3 et les remplacements par élément.
layout: default
permalink: /docs/design/design-overview/
title: Aperçu de la conception — Héritage et remplacement
---
# Aperçu de la conception — Héritage et remplacement

Navi+ utilise un **système de styles à trois couches**. Le comprendre vous permet de styliser votre menu efficacement.

---

## Trois couches

```
┌─────────────────────────────────────────────────────┐
│  NIVEAU 1  (Conception → Niveau 1)                  │
│  S'applique à tous les éléments de menu principal   │
│  C'est la valeur par défaut globale du menu entier  │
└───────────────────┬─────────────────────────────────┘
                    │  Niveau 2-3 hérite si vide
┌───────────────────▼─────────────────────────────────┐
│  NIVEAU 2-3  (Conception → Niveau 2-3)              │
│  S'applique aux sous-menus / listes déroulantes     │
│  Vide = identique au Niveau 1                       │
└───────────────────┬─────────────────────────────────┘
                    │  Par élément remplace tout
┌───────────────────▼─────────────────────────────────┐
│  PAR ÉLÉMENT  (Modifier l'élément → Interface)      │
│  Paramètres par élément pour les éléments individuels │
│  Remplace le Niveau 1 et le Niveau 2-3 complètement │
└─────────────────────────────────────────────────────┘
```

---

## Règles d'héritage

**Le Niveau 2-3 hérite du Niveau 1** pour tous les champs vides :

| Champ Niveau 2-3 | Hérite du Niveau 1 |
|---|---|
| Couleur du texte | Couleur du texte |
| Taille de police | Taille de police |
| Graisse de police | Graisse de police |
| Couleur d'icône | Couleur d'icône |
| Taille d'icône | Taille d'icône |
| Disposition d'affichage | Disposition d'affichage |
| Alignement | Alignement |
| Couleur du séparateur | Séparateur (global) |

Si vous configurez uniquement le Niveau 1, les sous-menus suivent automatiquement. N'allez au Niveau 2-3 que lorsque vous voulez que les sous-menus aient un aspect **différent**.

---

## Remplacement par élément

Les paramètres appliqués dans **Modifier l'élément → Interface** remplacent le Niveau 1 et le Niveau 2-3 pour cet élément uniquement.

Pour supprimer un remplacement : effacez le champ dans Modifier l'élément.

---

## Exemple

**Objectif :** Les 5 éléments ont un texte blanc, sauf « Soldes » qui est rouge.

1. Conception → Niveau 1 → Couleur du texte = `#FFFFFF`
2. Modifier l'élément → « Soldes » → Interface → Couleur du texte = `#FF0000`

---

## Syntaxe Mobile | Bureau

Certains champs d'espacement prennent en charge des valeurs différentes :

```
8 16 8 16              →  identique sur les deux appareils
8 8 8 8 | 12 24 12 24  →  gauche : mobile, droite : bureau
```
