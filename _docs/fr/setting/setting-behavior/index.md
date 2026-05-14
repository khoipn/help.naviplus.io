---
description: Configurez la vitesse d'animation, le style d'animation, les effets d'expansion, le retour tactile et le style de flèche dans les menus Navi+.
lang: fr
layout: default
permalink: /fr/docs/setting/setting-behavior/
title: Comportement de réglage — Animation et interaction
---
# Comportement de Réglage — Animation et Interaction

Les paramètres dans **Réglage → Animation** et **Réglage → Effet d'Expansion** contrôlent la vitesse, le style de mouvement et le retour d'interaction pour votre menu.

---

## Vitesse d'Animation

S'applique à tous les mouvements dans le menu (ouverture des sous-menus, transitions d'éléments, etc.).

| Option | Durée |
|---|---|
| Aucun | Pas d'animation |
| Très Lent | ~500ms |
| Lent | ~350ms |
| **Moyen** *(par défaut)* | ~200ms |
| Rapide | ~120ms |
| Très Rapide | ~60ms |

---

## Style d'Animation

Contrôle comment le menu apparaît. S'applique uniquement au **Slide menu** et à la **Tabbar** — le Mega Menu utilise toujours Fade.

| Option | Effet |
|---|---|
| **Glisser** *(par défaut)* | Glisse depuis le bord de l'écran |
| **Fondu** | S'estompe progressivement |

---

## Effet d'Expansion

S'applique uniquement au **Slide menu** — contrôle comment les sous-menus s'ouvrent.

| Option | Effet |
|---|---|
| **Expansion de haut en bas** | Le sous-menu s'agrandit vers le bas sur place |
| **Glisser depuis la droite** | Le sous-menu glisse depuis la droite comme un nouveau panneau |

---

## Retour Tactile *(Business / Elite)*

Couleur de flash d'arrière-plan lorsqu'un utilisateur touche un élément sur mobile.

| Champ | Description |
|---|---|
| **Couleur d'Arrière-plan Tactile** | Couleur de flash (hex) |
| **Opacité d'Arrière-plan Tactile** | Opacité de flash (0–100) |

Laissez vide = pas d'effet tactile.

---

## Style de Flèche *(Elite)*

Personnalisez la flèche d'expansion affichée sur les éléments parents avec des enfants.

| Champ | Description | Par défaut |
|---|---|---|
| **Couleur** | Couleur de la flèche (hex) | Hérite de la Couleur du Texte |
| **Opacité** | Opacité de la flèche (0–100) | 30 |
| **Taille (px)** | Taille de la flèche | 20px |
| **Icône** | Nom de Remixicon (par ex. `ri-arrow-right-s-line`) | Par défaut du système |
