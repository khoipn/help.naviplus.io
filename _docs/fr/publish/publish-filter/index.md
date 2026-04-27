---
description: Filtrez la visibilité du menu Navi+ par appareil, comportement de défilement, types de pages Shopify et mots-clés d'URL.
layout: default
permalink: /fr/docs/publish/publish-filter/
title: Publish Filter — Règles Appareil & URL
---
# Publish Filter — Règles Appareil & URL

Après avoir activé le bouton de publication, vous pouvez restreindre l'apparition du menu en utilisant deux couches de filtre : **appareil** (mobile/desktop + comportement de défilement) et **mots-clés d'URL** (afficher/masquer selon le contenu de l'URL).

---

## Filtrer par appareil

### Activer/désactiver par plateforme

Deux boutons en haut du modal Publish :

| Paramètre | Par défaut | Notes |
|---|---|---|
| **Afficher le menu sur mobile** | Activé | Afficher le menu sur les appareils mobiles |
| **Afficher le menu sur desktop** | Désactivé | Afficher le menu sur les appareils desktop |

Certains types de menus désactivent l'un de ces boutons — par exemple, Desktop Mega Menu désactive le bouton mobile.

---

### Comportement de défilement (menus Sticky uniquement)

Configuré séparément pour mobile et desktop.

#### Défilement mobile

| Paramètre | Comportement |
|---|---|
| **Masquer automatiquement au défilement vers le bas** | Masquer le menu quand l'utilisateur fait défiler vers le **bas** |
| **Afficher automatiquement après défilement** | Afficher le menu seulement après que l'utilisateur a fait défiler vers le bas (non affiché au chargement de la page) |

#### Défilement desktop

| Paramètre | Comportement |
|---|---|
| **Masquer automatiquement au défilement vers le bas** | Masquer le menu lors du défilement vers le bas sur desktop |
| **Afficher automatiquement après défilement** | Afficher seulement après défilement vers le bas sur desktop |

> Masquer automatiquement et Afficher automatiquement peuvent être activés ensemble : le menu se masque lors du défilement vers le bas, réapparaît lors du défilement vers le haut — un schéma courant pour les tabbars en bas.

---

### Position à l'écran (Sticky / Tabbar uniquement)

Choisissez une position depuis un sélecteur de boutons radio avec des illustrations visuelles.

**Mobile** — 6 positions prédéfinies (bas centre, bas gauche, bas droite, variantes haut...)

**Desktop** — 12 positions prédéfinies (barre supérieure, barre inférieure, barre latérale gauche/droite, positions de coin...)

---

### Groupes de pages (Shopify uniquement, menus Sticky)

Sélectionnez sur quels types de pages Shopify le menu apparaît. Par défaut : tous.

| Groupe | Modèle d'URL |
|---|---|
| Accueil | `/` |
| Détail produit | `/products/*` |
| Catégories de produits | `/collections/*` |
| Pages | `/pages/*` |
| Blogs | `/blogs/*` |
| Autres | Toutes les pages restantes |

> Le marché Global (WordPress, Wix, etc.) n'a pas cette fonctionnalité. Utilisez plutôt le filtre par mots-clés d'URL.

---

## Filtrer par mots-clés d'URL

La carte **"Afficher le menu par mots-clés"** — s'applique à tous les types de menus sauf Context Slide.

### Deux types de filtres

| Paramètre | Comportement |
|---|---|
| **Contient le mot-clé** | Le menu **s'affiche uniquement** quand l'URL **contient** au moins un mot-clé |
| **Ne contient pas le mot-clé** | Le menu **ne s'affiche pas** quand l'URL **contient** l'un des mots-clés |

Plusieurs mots-clés séparés par des virgules `,`.

### Exemples

**Afficher uniquement sur les pages de produits snowboard :**
```
Contient : snowboard
```
→ Le menu s'affiche uniquement sur les URLs comme `yourdomain.com/products/the-collection-snowboard-hydrogen`

**Masquer sur les pages multi-sites :**
```
Ne contient pas : multi-location
```
→ Le menu **ne s'affiche pas** sur `yourdomain.com/products/the-multi-location-snowboard`

**Combiné :**
```
Contient : collections
Ne contient pas : sale, outlet
```
→ S'affiche uniquement sur les pages de collections, mais masqué sur les collections "sale" et "outlet".

### Notes

- Le filtre utilise la **correspondance complète de chaîne d'URL**, pas de regex.
- Les mots-clés sont **insensibles à la casse**.
- Laisser vide = pas de filtre (le menu s'affiche sur toutes les pages).
- Les deux filtres sont liés par ET — les deux conditions doivent être satisfaites.
