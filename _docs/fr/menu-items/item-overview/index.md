---
description: Ce qu'est un élément de menu dans Navi+, les types d'éléments disponibles et la structure complète des champs dans le panneau de modification.
layout: default
permalink: /fr/docs/menu-items/item-overview/
title: Aperçu des éléments
---
# Aperçu des éléments

## Qu'est-ce qu'un élément de menu ?

Chaque ligne dans une liste de menu est un **élément**. Un élément est la plus petite unité dans Navi+ — il peut être un lien de navigation, un en-tête de groupe, un espaceur vide ou un séparateur d'onglet.

Plusieurs éléments empilés forment un menu. Le menu est ensuite rendu pour les visiteurs sur votre site web.

---

## Types d'éléments

Quand vous ajoutez un nouvel élément, vous choisissez son **type**. Le type détermine comment l'élément apparaît et ce qu'il fait.

| Type | Description | Quand utiliser |
|---|---|---|
| **Icône / Texte** | Élément standard avec icône et étiquette | Liens de navigation réguliers |
| **Grande image / Texte** | Grande vignette avec image plein bord et texte superposé | Bannières de catégories, images de produits en vedette |
| **Titre de groupe** | En-tête de section — pas un lien | Grouper visuellement les éléments en dessous |
| **Espace vide** | Gap transparent | Espacement et alignement de la mise en page |
| **Marqueur d'onglet** | Marque le début d'un nouvel onglet | Diviser le menu en onglets horizontaux |
| **HTML personnalisé** | Intégrer du HTML arbitraire | Widgets personnalisés, bannières spéciales |

---

## Structure des champs

Cliquez sur un élément pour ouvrir le panneau de modification :

```
┌─────────────────────────────────────────┐
│  MÉDIAS                                 │
│    Icône  |  Image                      │
├─────────────────────────────────────────┤
│  INFORMATIONS DE BASE                   │
│    Texte · Lien vers · HTML             │
│    Description · Séparateur · Badge     │
├─────────────────────────────────────────┤
│  LAYOUT                                 │
│    Layout d'affichage · Largeur · Pos.  │
│    Hauteur fixe                         │
├─────────────────────────────────────────┤
│  INTERFACE (UI)                         │
│    Classes · Style texte                │
│    Style icône/image · Fond             │
│    Espacement · Alignement              │
├─────────────────────────────────────────┤
│  AVANCÉ                                 │
│    Animation · CSS · Attributs          │
├─────────────────────────────────────────┤
│  PUBLIER                                │
│    Est publié · Conditions login        │
└─────────────────────────────────────────┘
```

---

## Workflow de modification

1. Cliquez sur un élément dans l'arborescence → le panneau s'ouvre.
2. Modifiez les champs nécessaires.
3. Appuyez sur **Mettre à jour** pour appliquer les changements.
4. Appuyez sur **Enregistrer** (`Ctrl+S` / `Cmd+S`) pour sauvegarder et rafraîchir le simulateur.

> Maintenez Shift en appuyant sur Enregistrer pour sauvegarder et recharger immédiatement le simulateur.
