---
description: Contrôlez quelles pages et appareils affichent le menu Navi+ — bascules d'appareils, règles de mots-clés d'URL, filtres de type de page Shopify.
layout: default
permalink: /docs/setting/setting-display-rules/
title: Règles d'affichage des paramètres — Visibilité conditionnelle
---
# Règles d'affichage des paramètres — Visibilité conditionnelle

Contrôlez où le menu apparaît en fonction du type d'appareil, de l'URL ou du type de page Shopify.

---

## Affichage par appareil

Dans l'onglet **Publier** :

| Bascule | Effet |
|---|---|
| **Mobile** | Afficher/masquer sur mobile |
| **Bureau** | Afficher/masquer sur bureau |

Par défaut : seul Mobile est activé. Bureau doit être activé manuellement.

---

## Règles de mots-clés d'URL

### Afficher uniquement quand l'URL contient le mot-clé

**Champ :** `Publier — Contient le mot-clé`

```
collections, products/sale
```

---

### Masquer quand l'URL contient le mot-clé

**Champ :** `Publier — Ne contient pas le mot-clé`

```
checkout, account/login
```

---

## Types de pages Shopify

| Groupe | Pages |
|---|---|
| **Accueil** | Page d'accueil |
| **Détail produit** | Pages de produit |
| **Catégories de produits** | Pages de collection |
| **Pages** | Pages statiques |
| **Blogs** | Blog et articles |
| **Autres** | Tout le reste |

Décocher un groupe → le menu ne s'affichera pas sur ce type de page.

---

## Ordre des règles

```
1. Appareil activé ?            →  Si non : masqué
2. Type de page coché ?         →  Si non : masqué
3. URL correspond à ne-pas-montrer ? →  Si oui : masqué
4. URL correspond à montrer-seulement ? →  Si non : masqué
5. Afficher le menu
```
