---
description: Publiez une Tab Bar Navi+ sur Wix. Navi+ est une application native du Wix App Market — installez-la, publiez la Tab Bar, et elle apparaît automatiquement sur tout le site. Aucun code, aucun extrait d'intégration.
lang: fr
layout: default
permalink: /fr/docs/usage/tabbar-bottom-navigation/publishing-on-wix/
title: Publier sur Wix
---
# Publier sur Wix

> 💡 Nouveau sur Navi+ pour Wix ? Voir la [présentation de Navi+ sur Wix](https://naviplus.io/fr/blogs/compare/topic/naviplus-on-wix/) sur naviplus.io.

Navi+ fonctionne sur Wix en tant qu'**application native du Wix App Market**. La **Tab Bar** est un menu **collant** — elle s'ancre à la fenêtre d'affichage (généralement près du bas sur mobile) et reste en place lors du défilement des visiteurs. Sur Wix, une fois que vous installez Navi+ et publiez la Tab Bar, elle s'affiche **automatiquement sur tout le site** — il n'y a pas de code à coller et aucune étape de code personnalisé.

> Autres plateformes : voir [Publier sur Shopify]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publishing-on-shopify/), [Publier sur WordPress]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/), ou [Squarespace / Webflow / autres]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/).

---

## Étapes

1. **Installez Navi+ depuis le [Wix App Market](https://www.wix.com/app-market)** — il s'ouvre à l'intérieur de votre tableau de bord Wix, déjà connecté à votre site. Wix gère l'authentification, il n'y a donc pas de clés API à configurer.
2. **Créez votre Tab Bar** — choisissez la disposition **Tab Bar** et ajoutez 3 à 5 destinations principales. Consultez [Tab Bar — Comment l'utiliser]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/) pour des conseils de conception.
3. **Publiez le menu** (statut : Publié, pas Brouillon).

C'est tout. Navi+ s'intègre automatiquement sur votre site Wix en direct via le Script intégré de Wix, et la Tab Bar apparaît sur chaque page immédiatement — pas d'extrait, pas de modification de thème.

---

## Restriction de la Tab Bar à des pages spécifiques

Définissez la portée de la Tab Bar dans l'éditeur Navi+ — ne tentez pas de supprimer l'application :

- **Règles d'affichage → Modèle d'URL** — afficher la Tab Bar uniquement sur les URL correspondant à un glob (par ex. `/shop/*`).
- **Règles d'affichage → Appareil** — restreindre à mobile uniquement.
- **Règles d'affichage → État du visiteur** — restreindre aux utilisateurs connectés, etc.

Les règles sont évaluées dans le navigateur, les modifications s'appliquent donc au chargement de la page suivante.

---

## Facturation

Navi+ sur Wix est facturé par le biais de **Wix** — un niveau gratuit plus les plans **Starter, Business et Elite**, facturés avec votre abonnement Wix. Passez à une version supérieure depuis l'écran des tarifs à l'intérieur de l'application.

---

## Connexes

- [Tab Bar — Comment l'utiliser]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/)
- [Installer Navi+]({{ site.baseurl }}/docs/how-to-install-navi/)
