---
description: Configurez la position du menu, le remplissage, la marge, l'index Z et la largeur du sous-menu dans Navi+.
layout: default
permalink: /fr/docs/setting/setting-layout/
title: Disposition des paramètres — Position et espacement
---
# Disposition des paramètres — Position et espacement

Contrôle la **position** de l'ensemble du menu, l'**ordre de superposition** et la **largeur du sous-menu**.

---

## Remplissage et marge du menu

Contrôle l'espacement extérieur et intérieur du **conteneur du menu entier** — différent du remplissage au niveau de l'élément dans Conception.

| Champ | Description |
|---|---|
| **Marge supérieure / droite / inférieure / gauche (px)** | Espace entre le menu et le bord de l'écran |
| **Remplissage supérieur / droit / inférieur / gauche (px)** | Espace à l'intérieur du conteneur du menu |

**Quand utiliser :**
- Pousser la Tabbar au-dessus de la barre de navigation du navigateur iOS : `Marge inférieure = 34`
- Espace au-dessus du Mega Menu : `Marge supérieure = 8`

---

## Index Z

| Champ | Description | Par défaut |
|---|---|---|
| **Index Z** | Plus haut = au-dessus | Auto |

- Menu recouvert par un en-tête collant → augmenter l'Index Z.
- Menu recouvrant le widget de chat → diminuer l'Index Z.

Typique : en-têtes de thème = `1000–9999` ; widgets de chat = `9999–99999`.

---

## Largeur du sous-menu

| Champ | Description | Par défaut |
|---|---|---|
| **Largeur du sous-menu (px)** | Largeur du panneau de sous-menu à une colonne | 360px |

---

## Bureau

| Champ | Description |
|---|---|
| **Afficher le sous-menu au survol** | Ouvrir les sous-menus au survol de la souris |
| **Largeur du sous-menu à expansion complète (px)** | Largeur du sous-menu multi-colonnes |
| **Direction du sous-menu** | Direction dans laquelle les sous-menus s'ouvrent |

---

## Multi-Sites *(Elite)*

| Champ | Description |
|---|---|
| **Multi-Sites** | Liste de domaines séparés par des virgules (ex. `brand.com,shop.brand.com`) |
