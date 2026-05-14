---
description: Ce qu'est un élément de menu dans Navi+, les types d'éléments disponibles et la structure complète des champs dans le panneau Modifier l'élément.
lang: fr
layout: default
permalink: /fr/docs/menu-items/item-overview/
title: Aperçu de l'élément
---
# Aperçu de l'élément

## Qu'est-ce qu'un élément de menu ?

Chaque ligne dans une liste de menu est un **élément**. Un élément est la plus petite unité dans Navi+ — il peut s'agir d'un lien de navigation, d'un en-tête de groupe, d'un espace vide ou d'un séparateur d'onglet.

Plusieurs éléments empilés ensemble forment un menu. Le menu est ensuite rendu pour les visiteurs sur votre site web.

---

## Types d'éléments

Lorsque vous ajoutez un nouvel élément, vous choisissez son **type**. Le type détermine à quoi ressemble l'élément et ce qu'il fait.

| Type | Description | Quand l'utiliser |
|---|---|---|
| **Icône / Texte** | Élément standard avec une icône et une étiquette | Liens de navigation réguliers |
| **Grande image / Texte** | Tuile large avec une image pleine largeur et du texte superposé | Bannières de catégorie, images de produits en vedette |
| **Titre de groupe** | En-tête de section — pas un lien | Regrouper visuellement les éléments en dessous |
| **Espace vide** | Écart transparent | Espacement et alignement de la mise en page |
| **Marqueur d'onglet** | Marque le début d'un nouvel onglet | Diviser le menu en onglets horizontaux |
| **HTML personnalisé** | Intégrer du HTML arbitraire | Widgets personnalisés, bannières spéciales |

---

## Structure des champs

Cliquez sur n'importe quel élément pour ouvrir le panneau Modifier l'élément. Il est organisé en ces sections :

```
┌─────────────────────────────────────────┐
│  MÉDIA                                  │
│    Icône  |  Image                       │
├─────────────────────────────────────────┤
│  INFORMATIONS DE BASE                   │
│    Texte · Lien vers · HTML              │
│    Description · Séparateur · Badge      │
├─────────────────────────────────────────┤
│  MISE EN PAGE                           │
│    Mise en page d'affichage · Largeur · Position │
│    Fixation de la hauteur               │
├─────────────────────────────────────────┤
│  INTERFACE (UI)                         │
│    Noms de classe · Style de texte      │
│    Style d'icône/image · Arrière-plan   │
│    Espacement · Alignement               │
├─────────────────────────────────────────┤
│  AVANCÉ                                 │
│    Animation · CSS · Attributs           │
├─────────────────────────────────────────┤
│  PUBLICATION                             │
│    Est publié · Conditions de connexion   │
└─────────────────────────────────────────┘
```

---

## Flux de travail de modification

1. Cliquez sur un élément dans l'arbre de menu → le panneau Modifier l'élément s'ouvre.
2. Modifiez les champs dont vous avez besoin.
3. Appuyez sur **Mettre à jour** pour appliquer les modifications à cet élément.
4. Appuyez sur **Enregistrer** (`Ctrl+S` / `Cmd+S`) pour enregistrer l'ensemble du menu et actualiser le simulateur.

> Si vous avez appuyé sur Mettre à jour mais que vous n'avez pas encore enregistré, les modifications ne sont pas écrites dans votre menu en direct. Maintenez la touche Maj en appuyant sur Enregistrer pour enregistrer et recharger immédiatement le simulateur.
