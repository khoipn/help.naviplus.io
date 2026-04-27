---
description: Configurez le style de ligne de séparation par défaut dans les menus Navi+ — couleur, épaisseur, type et largeur.
layout: default
permalink: /docs/design/design-divider/
title: Conception Séparateur — Lignes de séparation
---
# Conception Séparateur — Lignes de séparation

Les paramètres dans **Conception → Séparateur** définissent l'apparence par défaut de tous les séparateurs du menu.

Il s'agit d'un style de **niveau menu** — les éléments individuels peuvent le remplacer via Modifier l'élément → Informations de base → Ajouter séparateur.

---

## Champs

| Champ | Description | Par défaut |
|---|---|---|
| **Couleur du séparateur** | Couleur de la ligne (hex) | `#EEEEEE` |
| **Taille du séparateur (px)** | Épaisseur de la ligne | 1px |
| **Type de séparateur** | Solide / Pointillé / Pointé / Double | Solide |
| **Largeur du séparateur** | Complète / Inséré / Sous le texte | Complète |

> **Type de séparateur** et **Largeur du séparateur** nécessitent le plan Business ou Elite.

---

## Fonctionnement

1. Les paramètres ici = par défaut lorsqu'un élément a **Ajouter séparateur** activé.
2. Le style de séparateur par élément remplace ceci.
3. Le Niveau 2-3 hérite de la Couleur du séparateur si vide.

---

## Largeur du séparateur

| Valeur | Affichage |
|---|---|
| **Complète** | Largeur complète de l'élément |
| **Inséré** | Indenté des deux côtés |
| **Sous le texte** | Sous la partie texte uniquement |
