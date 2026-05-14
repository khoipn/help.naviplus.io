---
description: Publiez un Navi+ FAB (Floating Action Button) sur WordPress avec le plugin Navi+ Menu Builder. Le FAB est un menu fixe — une fois publié dans l'éditeur, il apparaît automatiquement sur tout le site.
lang: fr
layout: default
permalink: /fr/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/
title: FAB — Publier sur WordPress
---
# FAB — Publier sur WordPress

A **FAB (Floating Action Button)** est un **menu fixe** — il flotte au-dessus de la page (typiquement dans un coin) et reste en place pendant que les visiteurs défilent. Sur WordPress, le plugin Navi+ Menu Builder le rend automatiquement disponible sur tout le site ; vous n'avez pas besoin de coller de code ou de shortcode.

> Other platforms (Wix, Squarespace, Webflow, custom sites): see [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress-woocommerce-wix-others/).

---

## Étapes

1. **Installez le plugin** — see [Install the Navi+ Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Construisez votre FAB** dans **Apparence → Naviplus Menu Builder**. See [FAB — How to use]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/) for design guidance (single action vs. expandable menu).
3. **Publiez le menu** dans l'éditeur (statut : Publié, pas Brouillon).

Le FAB apparaît sur chaque page de votre site WordPress immédiatement. Pas de shortcode, pas d'édition de thème.

---

## Restreindre le FAB à des pages ou des audiences spécifiques

Ne désactivez pas l'intégration site-wide du plugin (cela désactive complètement le runtime). Limitez le FAB dans l'éditeur :

- **Règles d'affichage → Modèle d'URL** — afficher uniquement sur `/contact*`, cacher sur `/checkout*`, etc.
- **Règles d'affichage → Appareil** — bureau, mobile, ou les deux.
- **Règles d'affichage → État du visiteur** — utilisateurs connectés uniquement, etc.

---

## Conseils pour mobile

- Choisissez un coin qui ne conflit pas avec l'interface utilisateur du navigateur sur mobile (le coin inférieur droit est un bon choix par défaut ; le centre inférieur peut entrer en conflit avec la barre d'URL sur iOS).
- Assurez-vous que le FAB ne chevauche pas une Tab Bar ou un widget de chat. See [Menu overlapping other elements]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).
- Si le FAB s'étend en un menu, gardez la liste des actions courte (3–6 éléments) — de longues listes sont gênantes au toucher.

---

## Vérifiez que le FAB est en ligne

Ajoutez `#navidebug-on` à n'importe quelle URL de page. La page passe en mode Debug Navi+ si le plugin est correctement configuré. See [Create your first menu — Verify the connection]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Liens connexes

- [WordPress / WooCommerce — aperçu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publiez vos menus sur WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [FAB — How to use]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/)
