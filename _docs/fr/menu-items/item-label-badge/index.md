---
description: Comment définir les étiquettes de texte, les descriptions, les séparateurs et les badges (y compris les badges de comptage du panier) dans Navi+.
layout: default
permalink: /fr/docs/menu-items/item-label-badge/
title: Étiquettes, descriptions & badges
---
# Étiquettes, descriptions & badges

## Texte (étiquette principale)

Le texte principal affiché sur l'élément — ce que les visiteurs lisent.

**Conseils :**
- Restez court : 1–3 mots est idéal pour les menus mobiles.
- Laissez vide si vous voulez un élément avec seulement une icône (combinez avec Layout → Icône/Image uniquement).
- Supporte plusieurs langues — cliquez sur **Multi** à côté de l'étiquette pour ajouter des traductions par langue.

**Exemples :** `Accueil`, `Boutique`, `Contact`

---

## Description (sous-étiquette)

Une ligne de texte plus petite sous le texte principal — utilisez-la pour une courte note ou une étiquette secondaire.

**Exemple :** `Tél : +33 1 23 45 67 89 | 8h–21h`

**Notes :**
- Visible seulement quand le layout d'affichage supporte deux lignes (Haut-Bas, Gauche-Droite, etc.).
- Masqué quand le layout est Icône/Image uniquement ou Texte uniquement.
- Supporte plusieurs langues.

---

## Icône uniquement (masquer l'étiquette, afficher l'icône)

Pour masquer l'étiquette et afficher uniquement l'icône ou l'image, allez dans **Layout → Layout d'affichage → Icône/Image uniquement**.

Le champ Texte existe toujours dans les données (pour le SEO et l'accessibilité) mais n'est pas rendu visuellement.

---

## Ajouter un séparateur

Activez **Ajouter un séparateur** pour ajouter une ligne horizontale sous l'élément, le séparant de l'élément suivant.

Quand activé, trois options supplémentaires apparaissent :

| Option | Description | Plan |
|---|---|---|
| **Taille (px)** | Épaisseur de la ligne (1px par défaut) | Tous |
| **Type** | Style de ligne : Plein, Pointillé, Dotted, Double | Business / Elite |
| **Couleur** | Couleur de la ligne (hex) | Tous |
| **Largeur** | Étendue : Pleine, Retrait, Sous le texte | Business / Elite |

> Type et Largeur apparaissent grisés (verrouillés) sur le plan Starter.

---

## Ajouter un badge

Activez **Ajouter un badge** pour afficher un petit point de badge sur le coin de l'élément — utile pour les étiquettes "Nouveau", les notifications ou le nombre d'articles dans le panier.

### Badge panier *(Business / Elite)*

Activez **"Afficher le badge (+n) quand des articles sont dans le panier"** pour afficher automatiquement le nombre de produits dans le panier.

Parfait pour un élément Panier dans la barre d'onglets :
- Panier vide → badge masqué.
- 3 articles dans le panier → badge affiche **3**.
