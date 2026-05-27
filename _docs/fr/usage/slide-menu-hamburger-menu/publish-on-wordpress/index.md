---
description: Publiez un Menu Glissant Navi+ (hamburger) sur WordPress avec le plugin Navi+ AI Menu Builder. Le plugin charge le menu sur tout le site et le déclencheur est configuré dans l'éditeur Navi+ — pas d'éditions de thème, pas de shortcode pour la configuration typique.
lang: fr
layout: default
permalink: /fr/docs/usage/slide-menu-hamburger-menu/publish-on-wordpress/
title: Menu Glissant — Publier sur WordPress
---
# Menu Glissant — Publier sur WordPress

A **Menu Glissant** (a.k.a. hamburger menu) glisse depuis le côté et est le cheval de bataille de la navigation pour les arbres de menu profonds sur mobile. Sur WordPress, le plugin Navi+ AI Menu Builder le charge sur tout le site et l'éditeur Navi+ s'occupe du déclencheur d'ouverture — pas d'éditions de thème, pas de shortcode pour la configuration typique.

> Other platforms (Wix, Squarespace, Webflow, custom sites): see [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Étapes

1. **Installez le plugin** — see [Install the Navi+ AI Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Construisez votre Menu Glissant** dans **Apparence → Naviplus Menu Builder**. See [Slide Menu — How to use]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/how-to-use/).
3. **Configurez le déclencheur d'ouverture dans l'éditeur** — Navi+ gère le câblage du déclencheur sur le front end, donc vous n'avez pas besoin d'ajouter un bouton à votre thème ou d'écrire du JS. Le panneau de publication de l'éditeur vous permet de cibler un élément existant sur votre site (par exemple le bouton hamburger de votre thème).
4. **Publiez le menu** (statut : Publié, pas Brouillon).

That's it. The plugin's site-wide embed loads the Navi+ runtime, the runtime fetches your published Slide Menu, and the menu opens when the configured trigger is tapped.

---

## Intégration d'un Menu Glissant à un endroit fixe (rare)

If you want the menu inline in a page (not triggered by a button), use the same shortcode as section menus:

```text
[naviwp embed_id="SF-123456789"]
```

This drops the menu's content into the page where the shortcode lives.

---

## Conseils pour mobile

- Le Menu Glissant est le bon choix pour des arbres de menu **profonds ou larges** — sous-menus multi-niveaux, panneaux méga.
- Gardez l'animation d'ouverture en dessous de 300 ms ; plus long semble lent.
- If your theme's existing hamburger has its own click handler that conflicts with the Slide Menu, see [How Navi+ injects]({{ site.baseurl }}/docs/integrations/how-navi-injects/) and the troubleshooting note in [Search / Cart / Menu panel not working]({{ site.baseurl }}/docs/frequently-asked-questions/why-arent-menu-search-cart-panels-working/).

---

## Liés

- [WordPress / WooCommerce — aperçu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Exemples de publication]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/publishing-examples/)
- [Slide Menu — How to use]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/how-to-use/)
