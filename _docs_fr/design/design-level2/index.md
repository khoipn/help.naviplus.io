---
description: Configurez l'apparence des sous-menus avec héritage automatique du Niveau 1 pour tous les champs vides.
layout: default
permalink: /docs/design/design-level2/
title: Conception Niveau 2-3 — Éléments de sous-menu
---
# Conception Niveau 2-3 — Éléments de sous-menu

Les paramètres dans **Conception → Niveau 2-3** s'appliquent aux sous-menus. Tout champ vide **hérite automatiquement** du Niveau 1.

> **Règle :** Ne remplissez les champs ici que lorsque vous voulez que le sous-menu ait un aspect **différent** du menu principal.

---

## Style du texte

| Champ | Hérite du Niveau 1 quand vide |
|---|---|
| **Couleur du texte** | `textColor` |
| **Taille de police (px)** | `textSize` |
| **Graisse de police** | `fontWeight` |
| **Transformation du texte** | `textTransform` |
| **Famille de police** | `fontFamily` |
| **Couleur de description** | `descriptionColor` |
| **Taille de description (px)** | `descriptionTextSize` |

---

## Style d'icône / image

| Champ | Hérite du Niveau 1 quand vide |
|---|---|
| **Couleur d'icône** | `iconColor` |
| **Taille d'icône (px)** | `iconSize` |
| **Espace texte-icône (px)** | `spaceTextIcon` |
| **Rayon d'image (px)** | `imageRadius` |

---

## Espacement

| Champ | Description |
|---|---|
| **Remplissage de l'élément (px)** | N'hérite pas — utilise la valeur par défaut du thème |
| **Marge de l'élément (px)** | Espacement extérieur |
| **Hauteur minimale (px)** | Hauteur minimale |

---

## Arrière-plan et cadre

| Champ | Description |
|---|---|
| **Couleur d'arrière-plan** | Arrière-plan du sous-menu |
| **Rayon de bordure (px)** | Arrondi des coins |
| **Masquer l'arrière-plan** | Masquer l'arrière-plan |
| **Ombre portée** | Ombre portée |

---

## Affichage

| Champ | Hérite du Niveau 1 quand vide |
|---|---|
| **Disposition d'affichage** | `displayLayout` |
| **Alignement** | `align` |

---

## Séparateur

| Champ | Hérite du Niveau 1 quand vide |
|---|---|
| **Couleur du séparateur** | `dividerColor` |

---

## Exemple

**Objectif :** Menu principal sombre avec texte blanc. Sous-menu blanc avec texte sombre.

Remplissez uniquement 2 champs au Niveau 2-3 :
- Couleur d'arrière-plan = `#FFFFFF`
- Couleur du texte = `#000000`
