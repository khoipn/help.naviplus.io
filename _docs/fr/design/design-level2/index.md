---
description: Configurez l'apparence des éléments de sous-menu dans Navi+ — avec héritage automatique du Niveau 1 pour tous les champs vides.
lang: fr
layout: default
permalink: /fr/docs/design/design-level2/
title: Niveau de conception 2-3 — Éléments de sous-menu
---
# Niveau de Conception 2-3 — Éléments de Sous-menu

Les paramètres à **Design → Niveau 2-3** s'appliquent aux éléments de sous-menu (menus déroulants qui apparaissent lorsqu'un élément parent est ouvert). Tout champ laissé vide **hérite automatiquement** de la valeur correspondante du Niveau 1.

> **Règle :** Ne remplissez les champs ici que si vous souhaitez que le sous-menu ait l'air **différent** du menu principal. Laissez vide = même que le Niveau 1.

---

## Style de Texte

| Champ | Hérite du Niveau 1 lorsqu'il est vide |
|---|---|
| **Couleur du Texte** | `textColor` |
| **Taille de Police (px)** | `textSize` |
| **Poids de la Police** | `fontWeight` |
| **Transformation du Texte** | `textTransform` |
| **Famille de Police** | `fontFamily` |
| **Couleur de la Description** | `descriptionColor` |
| **Taille de la Description (px)** | `descriptionTextSize` |

---

## Style d'Icône / Image

| Champ | Hérite du Niveau 1 lorsqu'il est vide |
|---|---|
| **Couleur de l'Icône** | `iconColor` |
| **Taille de l'Icône (px)** | `iconSize` |
| **Espace Texte-Icône (px)** | `spaceTextIcon` |
| **Rayon de l'Image (px)** | `imageRadius` |

---

## Espacement

| Champ | Description |
|---|---|
| **Marge Intérieure (px)** | Espacement intérieur pour les éléments de sous-menu. N'hérite pas — utilise la valeur par défaut du thème si vide |
| **Marge Extérieure (px)** | Espacement extérieur pour les éléments de sous-menu |
| **Hauteur Min (px)** | Hauteur minimale pour les éléments de sous-menu |

---

## Arrière-plan & Cadre

| Champ | Description |
|---|---|
| **Couleur de Fond** | Couleur de fond de la zone de sous-menu |
| **Rayon de Bordure (px)** | Arrondi des coins du conteneur de sous-menu |
| **Cacher l'Arrière-plan** | Cacher l'arrière-plan du sous-menu |
| **Ombre Portée** | Ombre portée pour le conteneur de sous-menu |

---

## Affichage

| Champ | Hérite du Niveau 1 lorsqu'il est vide |
|---|---|
| **Disposition d'Affichage** | `displayLayout` |
| **Aligner** | `align` |

---

## Séparateur

| Champ | Hérite du Niveau 1 lorsqu'il est vide |
|---|---|
| **Couleur du Séparateur** | `dividerColor` (de Design → Séparateur) |

---

## Exemple

**Objectif :** Le menu principal a un fond sombre et un texte blanc. Le sous-menu doit avoir un fond blanc et un texte sombre.

Remplissez uniquement ces deux champs au Niveau 2-3 :
- Couleur de Fond = `#FFFFFF`
- Couleur du Texte = `#000000`

Tous les autres champs (taille de police, taille d'icône, espacement, etc.) héritent automatiquement du Niveau 1.
