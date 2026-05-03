---
description: Tous les types de liens supportés par Navi+ — pages internes, URLs externes, ancres, ouvrir des panneaux, téléphone/email, apps de chat, partage et JavaScript.
layout: default
permalink: /fr/docs/menu-items/item-link-types/
title: Types de liens
---
# Types de liens

Le champ **Lien vers** dans les informations de base contrôle ce qui se passe quand un visiteur tape ou clique sur un élément. Navi+ supporte de nombreux types de liens au-delà d'une simple URL.

Quand vous cliquez sur le champ Lien vers, un popup d'aide s'ouvre automatiquement avec des exemples complets. Vous pouvez aussi taper directement dans le champ.

---

## 1. Pages internes de la boutique

Utilisez des chemins courts (sans domaine) pour les pages de votre boutique Shopify.

| Destination | Entrer |
|---|---|
| Page d'accueil | *(laisser vide)* |
| Tous les produits | `collections/all` |
| Une collection | `collections/collection-handle` |
| Une page produit | `products/product-handle` |
| Une page statique (À propos, FAQ…) | `pages/page-handle` |
| Liste du blog | `blogs/news` |
| Un article de blog | `blogs/news/post-handle` |
| Panier | `cart` |
| Recherche | `search` |
| Contact | `pages/contact` |

**Astuce Auto Clean :** Collez une URL complète → activez la bascule **Auto clean** → le système supprime le domaine et garde seulement le chemin.

---

## 2. URL complète (lien externe)

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. Ouvrir dans un nouvel onglet

Ajoutez `@new` à n'importe quel lien.

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. Pas de navigation (élément parent)

```
#
```

---

## 5. Défilement (Ancre)

| Action | Syntaxe |
|---|---|
| Vers le haut | `scroll:Top` |
| Vers le haut avec décalage 100px | `scroll:Top(100)` |
| Vers le bas | `scroll:Bottom` |
| Vers une section CSS | `scroll:OnPage(#section-id)` *(Business / Elite)* |

---

## 6. Ouvrir un panneau / popup *(Business / Elite)*

| Action | Syntaxe |
|---|---|
| Ouvrir un menu Slide Navi+ | `open:NaviMenu(SF-XXXXXXXXXX)` |
| Cliquer un élément CSS | `open:clickTo(#cart-button)` |
| Mettre le focus sur un champ | `open:focusTo(.search-input)` |
| Ouvrir recherche / tiroir panier | Popup d'aide → *Ouvrir panneaux* |
| Ouvrir Shopify Inbox | Popup d'aide → *Ouvrir autres applications* |

---

## 7. Téléphone, SMS, E-mail

| Action | Syntaxe |
|---|---|
| Appel | `tel:+33123456789` |
| SMS | `sms:+33123456789?body=Bonjour` |
| E-mail | `mailto:bonjour@votredomaine.fr` |

---

## 8. Apps de chat

| App | Syntaxe |
|---|---|
| WhatsApp | `https://wa.me/33123456789` |
| Messenger | `https://m.me/VotreNomDePage` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/votre-code-line` |

---

## 9. Partager

| Action | Syntaxe |
|---|---|
| Partager la page (natif) | `open:ShareMe` |
| Copier l'URL | `share:CopyUrl` |
| Facebook | `share:Facebook` |
| Twitter / X | `share:Tweet` |

---

## 10. JavaScript

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. Changer de langue

```
open:ChangeLanguage(fr)
open:ChangeLanguage(en)
open:ChangeLanguage()
```
