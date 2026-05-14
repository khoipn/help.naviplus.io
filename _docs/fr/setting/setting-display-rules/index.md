---
description: Contrôlez sur quelles pages et appareils votre menu Navi+ apparaît — en utilisant des bascules de périphérique, des règles de mots-clés d'URL et des filtres de type de page Shopify.
lang: fr
layout: default
permalink: /fr/docs/setting/setting-display-rules/
title: Règles d'affichage — Visibilité conditionnelle
---
# Règles d'affichage — Visibilité conditionnelle

Contrôlez où et quand votre menu apparaît en fonction du type de périphérique, de l'URL ou du type de page Shopify.

---

## Affichage par appareil

Trouvé dans l'onglet **Publier** du menu (pas par élément) :

| Bascule | Effet |
|---|---|
| **Mobile** | Afficher/masquer le menu sur les écrans mobiles |
| **Desktop** | Afficher/masquer le menu sur les écrans de bureau |

Par défaut : seul Mobile est activé. Vous devez activer manuellement Desktop si vous souhaitez que le menu apparaisse sur des écrans plus grands.

> Pour afficher/masquer des éléments individuels par appareil → voir [Visibilité des éléments](/docs/menu-items/item-visibility/).

---

## Affichage par mots-clés d'URL

Deux champs dans **Paramètres → Affichage par mots-clés** vous permettent de contrôler sur quelles URL le menu apparaît.

### Afficher uniquement lorsque l'URL contient un mot-clé

**Champ :** `Publier — Contient le mot-clé`

```
collections, products/sale
```

Le menu apparaît uniquement sur les pages dont l'URL contient `collections` **ou** `products/sale`.

**Exemple :** Un "Menu de navigation de boutique" pour les pages de produits → afficher uniquement sur `collections/` et `products/`.

---

### Masquer lorsque l'URL contient un mot-clé

**Champ :** `Publier — Ne contient pas le mot-clé`

```
checkout, account/login
```

Le menu est masqué sur les pages de paiement et de connexion ; visible partout ailleurs.

**Exemple :** Masquer la Tabbar pendant le paiement pour éviter de distraire le client.

---

## Affichage par type de page Shopify

L'onglet **Publier** comprend également 6 groupes de pages Shopify (magasins Shopify uniquement) :

| Groupe | Pages |
|---|---|
| **Accueil** | Page d'accueil |
| **Détails du produit** | Pages de détails du produit |
| **Catégories de produits** | Pages de collection / catégorie |
| **Pages** | Pages statiques (À propos, Contact, etc.) |
| **Blogs** | Pages de liste de blogs et d'articles |
| **Autres** | Pages non incluses dans les 5 groupes ci-dessus |

Décochez un groupe → le menu n'apparaîtra pas sur ce type de page.

---

## Comment les règles s'empilent

Toutes les conditions sont évaluées ensemble dans cet ordre :

```
1. Le périphérique est-il activé ?              →  Si non : masqué
2. Le type de page est-il coché ?           →  Si non : masqué
3. L'URL correspond-elle à "Ne pas afficher" ?    →  Si oui : masqué
4. L'URL correspond-elle à "Afficher uniquement" ?     →  Si non : masqué
5. Afficher le menu
```
