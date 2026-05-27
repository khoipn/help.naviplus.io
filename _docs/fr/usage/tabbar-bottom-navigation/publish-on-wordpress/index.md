---
description: Publiez une barre d'onglets Navi+ sur WordPress avec le plugin Navi+ AI Menu Builder — sans modifications de code. La barre d'onglets est un menu fixe, elle s'affiche automatiquement sur tout le site une fois publiée dans l'éditeur.
lang: fr
layout: default
permalink: /fr/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/
title: Barre d'onglets — Publier sur WordPress
---
# Barre d'onglets — Publier sur WordPress

La **Barre d'onglets** est un menu **fixe** — il s'ancre à la fenêtre d'affichage (généralement près du bas sur mobile) et reste en place pendant que les visiteurs font défiler. Sur WordPress, le plugin Navi+ AI Menu Builder rend la barre d'onglets automatiquement sur tout le site ; vous n'avez pas besoin de coller de code ou de shortcode.

> Autres plateformes (Wix, Squarespace, Webflow, sites personnalisés) : voir [Publier sur Wix / Squarespace / Autres]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/).

---

## Étapes

1. **Installez le plugin** — voir [Installer le plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Ouvrez l'éditeur** — dans l'administration WordPress, allez à **Apparence → Naviplus Menu Builder**.
3. **Construisez votre barre d'onglets** — choisissez la mise en page **Barre d'onglets**, ajoutez 3 à 5 destinations principales. Voir [Barre d'onglets — Comment utiliser]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/) pour des conseils de conception.
4. **Publiez le menu** dans l'éditeur (statut : Publié, pas Brouillon).

C'est tout. La barre d'onglets apparaît immédiatement sur le front end de votre site WordPress — pas de shortcode, pas de modification de thème. L'intégration du plugin sur tout le site (activée par défaut) charge le runtime Navi+ sur chaque page, et le runtime récupère chaque menu fixe publié pour votre site.

---

## Restreindre la barre d'onglets à des pages spécifiques

Ne désactivez pas l'intégration du plugin sur tout le site — cela désactive complètement le runtime. Au lieu de cela, limitez la barre d'onglets dans l'éditeur :

- **Règles d'affichage → Modèle d'URL** — afficher la barre d'onglets uniquement sur les URL qui correspondent à un glob (par exemple, `/shop/*`).
- **Règles d'affichage → Appareil** — restreindre aux mobiles uniquement.
- **Règles d'affichage → État du visiteur** — restreindre aux utilisateurs connectés, etc.

Les règles d'affichage sont évaluées par le runtime dans le navigateur, donc les changements s'appliquent lors du prochain chargement de page.

---

## Conseils mobiles pour la barre d'onglets

- Limitez-vous à **3 à 5 onglets** — plus que cela encombre la fenêtre d'affichage.
- Utilisez des étiquettes courtes (un mot si possible) et des icônes claires.
- Testez la taille de la cible tactile sur un vrai appareil, pas seulement dans l'aperçu de l'éditeur.
- Si la barre d'onglets chevauche un autre élément fixe (par exemple, un widget de chat), voir [Menu chevauchant d'autres éléments]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).

---

## Vérifiez que la barre d'onglets est en ligne

Ajoutez `#navidebug-on` à n'importe quelle URL de page (par exemple, `https://your-site.com/#navidebug-on`). La page passe en mode Débogage Navi+ si le plugin est correctement configuré. Ajoutez `#navidebug-off` pour l'éteindre.

Pour des vérifications plus approfondies, voir [Créez votre premier menu — Vérifiez la connexion]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Liens connexes

- [WordPress / WooCommerce — aperçu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publiez vos menus sur WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [FAQ du Naviplus Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/)
