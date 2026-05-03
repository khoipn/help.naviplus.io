---
description: Comment contrôler quand et pour qui un élément de menu est visible dans Navi+ — état de publication, conditions de connexion et masquage par page.
layout: default
permalink: /fr/docs/menu-items/item-visibility/
title: Visibilité & conditions
---
# Visibilité & conditions

La section **Publier** dans le panneau de modification vous permet de contrôler qui voit un élément, quand et sur quelles pages.

---

## Est publié

**Par défaut : activé (élément visible par tous).**

Désactivez pour masquer l'élément du menu live sans le supprimer.

**Utiliser quand :**
- Masquer temporairement un lien de vente saisonnière.
- Préparer un élément avant sa mise en ligne.
- Garder un élément de sauvegarde sans le supprimer.

---

## Masquer quand connecté

Quand activé, l'élément est **visible uniquement pour les visiteurs non connectés**.

**Utiliser pour :** bouton "Se connecter", lien "Créer un compte".

---

## Afficher uniquement quand connecté

Quand activé, l'élément est **visible uniquement pour les clients connectés**.

**Utiliser pour :** "Mon compte", points de fidélité, historique des commandes.

---

## Masquer sur des types de pages spécifiques (hidepages)

Utilisez l'attribut `hidepages` dans **Avancé → Attributs**.

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Valeur | Pages masquées sur |
|---|---|
| `index` | Page d'accueil |
| `products` | Pages produit |
| `collections` | Pages de collection |
| `pages` | Pages statiques |
| `blogs` | Blog |
| `others` | Autres pages |

**Exemple :** `hidepages=index|blogs`

---

## Masquer par appareil (Mobile / Desktop)

> Navi+ contrôle les appareils au **niveau du menu**, pas par élément. Créez deux menus séparés ou utilisez CSS.

```css
/* Mobile uniquement */
@media (max-width: 767px) { display: none !important; }

/* Desktop uniquement */
@media (min-width: 768px) { display: none !important; }
```

---

## Résumé

| Condition | Configuration |
|---|---|
| Masquer complètement | Est publié → désactivé |
| Masquer aux connectés | Masquer quand connecté → activé |
| Masquer aux visiteurs | Afficher uniquement quand connecté → activé |
| Masquer page accueil | `hidepages=index` |
| Masquer mobile | CSS `@media (max-width: 767px)` |
| Masquer desktop | CSS `@media (min-width: 768px)` |
