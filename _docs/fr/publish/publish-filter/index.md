---
description: Filtrer la visibilité du menu Navi+ par appareil, comportement de défilement, types de pages Shopify et mots-clés d'URL.
lang: fr
layout: default
permalink: /fr/docs/publish/publish-filter/
title: Filtre de publication — Règles de dispositif et d'URL
---
# Filtre de publication — Règles de dispositif et d'URL

Après avoir activé le commutateur de publication, vous pouvez restreindre l'apparition du menu en utilisant deux couches de filtre : **dispositif** (mobile/desktop + comportement de défilement) et **mots-clés d'URL** (afficher/masquer en fonction du contenu de l'URL).

---

## Filtrer par dispositif

### Activer/désactiver par plateforme

Deux commutateurs en haut de la modal de publication :

| Paramètre | Par défaut | Remarques |
|---|---|---|
| **Afficher le menu sur mobile** | Activé | Afficher le menu sur les appareils mobiles |
| **Afficher le menu sur desktop** | Désactivé | Afficher le menu sur les appareils desktop |

Certains types de menus désactivent l'un de ces commutateurs — par exemple, le Mega Menu Desktop désactive le commutateur mobile.

---

### Comportement de défilement (Menus collants uniquement)

Configuré séparément pour mobile et desktop.

#### Défilement mobile

| Paramètre | Comportement |
|---|---|
| **Masquer automatiquement lors du défilement vers le bas** | Masquer le menu lorsque l'utilisateur défile **vers le bas** |
| **Afficher automatiquement après le défilement** | Afficher le menu uniquement après que l'utilisateur a défilé vers le bas (non affiché au chargement de la page) |

#### Défilement desktop

| Paramètre | Comportement |
|---|---|
| **Masquer automatiquement lors du défilement vers le bas** | Masquer le menu lors du défilement vers le bas sur desktop |
| **Afficher automatiquement après le défilement** | Afficher uniquement après avoir défilé vers le bas sur desktop |

> Masquer automatiquement et afficher automatiquement peuvent être activés ensemble : le menu se cache lors du défilement vers le bas, réapparaît lors du défilement vers le haut — un modèle courant pour les tabbars inférieurs.

---

### Position de l'écran (Collant / Tabbar uniquement)

Choisissez une position à partir d'un sélecteur de boutons radio avec des illustrations visuelles.

**Mobile** — 6 positions prédéfinies (centre bas, gauche bas, droite bas, variantes supérieures...)

**Desktop** — 12 positions prédéfinies (barre supérieure, barre inférieure, barre latérale gauche/droite, positions d'angle...)

---

### Groupes de pages (Shopify uniquement, Menus collants)

Sélectionnez les types de pages Shopify sur lesquelles le menu apparaît. Par défaut : toutes.

| Groupe | Modèle d'URL |
|---|---|
| Accueil | `/` |
| Détails du produit | `/products/*` |
| Catégories de produits | `/collections/*` |
| Pages | `/pages/*` |
| Blogs | `/blogs/*` |
| Autres | Toutes les pages restantes |

> Le marché mondial (WordPress, Wix, etc.) n'a pas cette fonctionnalité. Utilisez plutôt le filtre de mots-clés d'URL.

---

## Filtrer par mots-clés d'URL

La carte **"Afficher le menu par mots-clés"** — s'applique à tous les types de menus sauf le Context Slide.

### Deux types de filtres

| Paramètre | Comportement |
|---|---|
| **Contenir le mot-clé** | Le menu **n'affiche** que lorsque l'URL **contient** au moins un mot-clé |
| **Ne pas contenir le mot-clé** | Le menu **n'affiche pas** lorsque l'URL **contient** l'un des mots-clés |

Plusieurs mots-clés séparés par des virgules `,`.

### Exemples

**Afficher uniquement sur les pages de produits de snowboard :**
```
Contenir : snowboard
```
→ Le menu n'affiche que sur des URL comme `yourdomain.com/products/the-collection-snowboard-hydrogen`

**Masquer sur les pages multi-locations :**
```
Ne pas contenir : multi-location
```
→ Le menu ne s'affiche **pas** sur `yourdomain.com/products/the-multi-location-snowboard`

**Combiné :**
```
Contenir : collections
Ne pas contenir : sale, outlet
```
→ N'affiche que sur les pages de collection, mais caché sur les collections "sale" et "outlet".

### Remarques

- Le filtre utilise **la correspondance de chaîne d'URL complète**, pas de regex.
- Les mots-clés sont **insensibles à la casse**.
- Laisser vide = pas de filtre (le menu s'affiche sur toutes les pages).
- Les deux filtres sont combinés avec un ET — les deux conditions doivent être satisfaites.
