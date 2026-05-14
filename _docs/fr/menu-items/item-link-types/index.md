---
description: Tous les types de lien pris en charge par Navi+ — pages internes, URL externes, ancres, panneaux ouverts, téléphone/email, applications de chat, partage et JavaScript.
lang: fr
layout: default
permalink: /fr/docs/menu-items/item-link-types/
title: Types de lien
---
# Types de lien

Le **Lien vers** le champ dans les informations de base contrôle ce qui se passe lorsqu'un visiteur touche ou clique sur un élément. Navi+ prend en charge de nombreux types de lien au-delà d'une simple URL.

Lorsque vous cliquez sur le champ Lien vers, une fenêtre d'aide s'ouvre automatiquement avec des exemples complets. Vous pouvez également taper directement dans le champ.

---

## 1. Pages internes du magasin

Utilisez des chemins courts (pas de domaine) pour lier des pages au sein de votre boutique Shopify.

| Destination | Entrer |
|---|---|
| Page d'accueil | *(laisser vide)* |
| Tous les produits | `collections/all` |
| Une collection | `collections/collection-handle` |
| Une page produit | `products/product-handle` |
| Une page statique (À propos, FAQ…) | `pages/page-handle` |
| Liste de blog | `blogs/news` |
| Un article de blog | `blogs/news/post-handle` |
| Panier | `cart` |
| Recherche | `search` |
| Contact | `pages/contact` |

**Astuce Auto Clean :** Collez une URL complète (par ex. `https://mystore.com/collections/sale`) → activez le toggle **Auto clean** → le système supprime le domaine et conserve uniquement `collections/sale`.

---

## 2. URL complète (lien externe)

Liez à n'importe quel site Web en utilisant une URL complète.

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. Ouvrir dans un nouvel onglet

Ajoutez `@new` à tout lien pour l'ouvrir dans un nouvel onglet.

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. Pas de navigation (élément parent)

Utilisez `#` lorsqu'un élément est un parent qui contient des éléments enfants — le toucher développe les enfants sans naviguer nulle part.

```
#
```

---

## 5. Défilement (Ancre)

| Action | Syntaxe |
|---|---|
| Défilement vers le haut | `scroll:Top` |
| Défilement vers le haut avec un décalage de 100px | `scroll:Top(100)` |
| Défilement vers le bas | `scroll:Bottom` |
| Défilement vers une section par sélecteur CSS | `scroll:OnPage(#section-id)` *(Business / Elite)* |

**Exemple :** Un bouton "Retour en haut" → Lien vers est `scroll:Top`.

---

## 6. Ouvrir un panneau / popup *(Business / Elite)*

Ouvrez des composants UI de thème sans quitter la page.

| Action | Syntaxe |
|---|---|
| Ouvrir un menu Slide Navi+ | `open:NaviMenu(SF-XXXXXXXXXX)` |
| Cliquer sur un élément CSS | `open:clickTo(#cart-button)` |
| Focaliser un champ de saisie | `open:focusTo(.search-input)` |
| Ouvrir la recherche de thème / tiroir de panier | Utilisez la fenêtre d'aide → *Ouvrir des panneaux* |
| Ouvrir le chat Shopify Inbox | Utilisez la fenêtre d'aide → *Ouvrir d'autres applications* |

`open:clickTo` et `open:focusTo` acceptent `Down` ou `Up` pour défiler avant d'agir :  
`open:clickTo(.footer-element, Down)`

---

## 7. Téléphone, SMS, Email

| Action | Syntaxe |
|---|---|
| Appel téléphonique | `tel:+12125550100` |
| SMS | `sms:+12125550100?body=Hello` |
| Email | `mailto:hello@yourdomain.com` |

---

## 8. Applications de chat

| Application | Syntaxe |
|---|---|
| WhatsApp | `https://wa.me/12125550100` *(sans préfixe +)* |
| Messenger | `https://m.me/YourPageName` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/your-line-code` |

---

## 9. Partager

| Action | Syntaxe |
|---|---|
| Partager la page actuelle (dialogue de partage natif) | `open:ShareMe` |
| Copier l'URL dans le presse-papiers | `share:CopyUrl` |
| Partager sur Facebook | `share:Facebook` |
| Partager sur Twitter / X | `share:Tweet` |

---

## 10. Appeler JavaScript

Appelez n'importe quelle fonction JavaScript définie sur la page.

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. Changer de langue

```
open:ChangeLanguage(fr)    ← passer au français
open:ChangeLanguage(vi)    ← passer au vietnamien
open:ChangeLanguage()      ← réinitialiser à la langue par défaut
```
