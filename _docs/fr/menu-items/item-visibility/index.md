---
description: Comment contrôler quand et pour qui un élément de menu est visible dans Navi+ — état publié, conditions de connexion et masquage basé sur les pages.
lang: fr
layout: default
permalink: /fr/docs/menu-items/item-visibility/
title: Visibilité & Conditions
---
# Visibilité & Conditions

La section **Publier** dans le panneau Modifier l'élément vous permet de contrôler qui voit un élément, quand et sur quelles pages.

---

## Est publié

**Par défaut : activé (l'élément est visible par tous).**

Désactivez ceci pour masquer l'élément du menu en direct sans le supprimer. L'élément reste dans l'éditeur — vous pouvez le réactiver à tout moment.

**Utilisez lorsque :**
- Masquer temporairement un lien de vente saisonnière.
- Préparer un élément avant qu'il ne soit mis en ligne.
- Garder un élément de sauvegarde sans le supprimer.

---

## Masquer lorsque connecté

Lorsqu'il est activé, l'élément est **uniquement visible pour les visiteurs qui ne sont pas connectés**.

**Utilisez pour :**
- Un "Se connecter" bouton — les clients déjà connectés n'en ont pas besoin.
- Un "Créer un compte" lien.

---

## Afficher uniquement lorsque connecté

Lorsqu'il est activé, l'élément est **uniquement visible pour les clients connectés**.

**Utilisez pour :**
- "Mon compte" lien.
- Points de fidélité, historique des commandes.
- Fonctionnalités réservées aux membres.

---

## Masquer sur des types de pages spécifiques (hidepages)

Utilisez l'attribut `hidepages` dans **Avancé → Attributs** pour masquer un élément sur certains types de pages.

**Syntaxe :**

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Valeur | Pages masquées sur |
|---|---|
| `index` | Page d'accueil |
| `products` | Pages de détails des produits |
| `collections` | Pages de collection / catégorie |
| `pages` | Pages statiques (À propos, Contact…) |
| `blogs` | Pages de liste de blog et de publication |
| `others` | Toute page ne figurant pas dans les catégories ci-dessus |

Séparez plusieurs valeurs avec `|`, sans espaces.

**Exemple :** Masquer un "Acheter maintenant" bouton sur la page d'accueil et les pages de blog :

```
hidepages=index|blogs
```

---

## Masquer par appareil (Mobile / Bureau)

> **Important :** Navi+ n'a pas de bascule mobile/bureau par élément. Le ciblage des appareils est contrôlé au **niveau du menu**, pas au niveau de l'élément.

**L'approche correcte :**

- Allez à l'onglet **Publier** du menu → basculez **Mobile** et **Bureau** pour l'ensemble du menu.
- Créez deux menus séparés — un pour mobile, un pour bureau — et définissez la bascule de l'appareil sur chacun.

**Solution de contournement par élément (si vraiment nécessaire) :**  
Utilisez **Avancé → CSS** avec une requête média :

```css
/* Masquer cet élément uniquement sur mobile */
@media (max-width: 767px) { display: none !important; }

/* Masquer cet élément uniquement sur bureau */
@media (min-width: 768px) { display: none !important; }
```

---

## Résumé

| Condition | Comment définir |
|---|---|
| Masquer complètement | Est publié → désactivé |
| Masquer des utilisateurs connectés | Masquer lorsque connecté → activé |
| Masquer des invités | Afficher uniquement lorsque connecté → activé |
| Masquer sur la page d'accueil | Attributs : `hidepages=index` |
| Masquer sur mobile | CSS : `@media (max-width: 767px) { display: none !important; }` |
| Masquer sur bureau | CSS : `@media (min-width: 768px) { display: none !important; }` |
