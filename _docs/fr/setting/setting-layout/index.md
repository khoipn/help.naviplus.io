---
description: Configurez la position du menu, le rembourrage, la marge, l'index z et la largeur des sous-menus dans Navi+.
lang: fr
layout: default
permalink: /fr/docs/setting/setting-layout/
title: Configuration de la mise en page — Position et espacement
---
# Configuration de la mise en page — Position et espacement

Ces paramètres contrôlent la **position** de l'ensemble du menu sur la page, son **ordre de superposition** par rapport à d'autres éléments, et la **largeur** des sous-menus.

---

## Rembourrage et marge du menu

Contrôle l'espacement extérieur et intérieur de **l'ensemble du conteneur de menu** — différent du rembourrage au niveau des éléments dans le Design.

| Champ | Description |
|---|---|
| **Marge Haut / Droit / Bas / Gauche (px)** | Espace entre le menu et le bord de l'écran ou les éléments environnants |
| **Rembourrage Haut / Droit / Bas / Gauche (px)** | Espace à l'intérieur du conteneur de menu, avant que les éléments ne soient affichés |

**Quand utiliser :**
- Pousser un Tabbar au-dessus de la barre de navigation du navigateur sur iOS : `Marge Bas = 34`
- Ajouter de l'espace entre un Mega Menu et l'en-tête : `Marge Haut = 8`

---

## Index Z

Ordre de superposition du menu par rapport à d'autres éléments de la page (en-tête, widget de chat, popups, etc.).

| Champ | Description | Par défaut |
|---|---|---|
| **Index Z** | Valeur entière — plus élevé = au-dessus | Auto |

**Quand ajuster :**
- Le menu est couvert par un en-tête fixe → augmentez l'Index Z au-dessus de la valeur de l'en-tête.
- Le menu couvre un widget de chat → diminuez l'Index Z en dessous du widget.

Valeurs de référence courantes : les en-têtes de thème sont généralement `1000–9999` ; les widgets de chat sont généralement `9999–99999`.

---

## Largeur du sous-menu

S'applique aux sous-menus déroulants (Tabbar, Mega Menu à une colonne).

| Champ | Description | Par défaut |
|---|---|---|
| **Largeur du sous-menu (px)** | Largeur des panneaux de sous-menu à une colonne | 360px |

---

## Bureau — Comportement et largeur du sous-menu

S'applique lorsque le menu est affiché sur un bureau.

| Champ | Description |
|---|---|
| **Afficher le sous-menu au survol** | Ouvrir les sous-menus au survol de la souris sans cliquer |
| **Largeur du sous-menu entièrement étendue (px)** | Largeur des sous-menus à plusieurs colonnes (Desktop Mega Menu) |
| **Direction du sous-menu** | Direction dans laquelle les sous-menus s'ouvrent : droite / gauche / haut / bas |

---

## Multi-Sites *(Elite)*

Intégrez le menu sur plusieurs domaines en dehors de la boutique principale Shopify.

| Champ | Description |
|---|---|
| **Multi-Sites** | Liste de domaines séparés par des virgules (par exemple `brand.com,shop.brand.com`) |
