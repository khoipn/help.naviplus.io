---
description: Publiez un menu Grille Navi+ sur WordPress avec le plugin Navi+ Menu Builder. Insérez-le là où il doit apparaître en utilisant le shortcode [naviwp embed_id="..."] ou le bloc Gutenberg.
lang: fr
layout: default
permalink: /fr/docs/usage/grid-menu/publish-on-wordpress/
title: Menu Grille — Publier sur WordPress
---
# Menu Grille — Publier sur WordPress

Un **Menu Grille** est un menu de **section** — il s'affiche à l'endroit de la page où vous l'intégrez. C'est un excellent choix pour les raccourcis de catégorie, les pages centrales et les panneaux "que souhaitez-vous faire ?". Sur WordPress, le plugin Navi+ Menu Builder le place via un shortcode ou un bloc Gutenberg ; vous n'éditez jamais les fichiers de thème.

> Autres plateformes (Wix, Squarespace, Webflow, sites personnalisés) : voir [Publier sur Wix / Squarespace / Autres]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Étapes

1. **Installez le plugin** — voir [Installer le plugin Navi+ Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Construisez votre Menu Grille** dans **Apparence → Naviplus Menu Builder**. Voir [Menu Grille — Comment utiliser]({{ site.baseurl }}/docs/usage/grid-menu/how-to-use/) et [Menu Grille Réactif]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/).
3. **Copiez l'ID d'intégration** (par exemple `SF-123456789`).
4. **Intégrez-le** en utilisant l'une des méthodes ci-dessous.

---

## Insérer le menu

### Option 1 — Shortcode (recommandé)

```text
[naviwp embed_id="SF-123456789"]
```

Déposez ceci dans n'importe quel article, page ou widget compatible avec les shortcodes.

Lieux typiques :

- Une section héro de la page d'accueil avec des tuiles de catégorie.
- Une page de destination au-dessus de la ligne de flottaison.
- L'état vide d'une archive de catégorie.

### Option 2 — Bloc Gutenberg

Dans l'éditeur de blocs, **+ → Naviplus Menu Builder**, puis collez l'ID d'intégration dans la barre latérale du bloc. Un bloc **Shortcode** simple avec `[naviwp embed_id="SF-..."]` est équivalent.

### Option 3 — Constructeurs de pages (Elementor, Divi, Bricks, Oxygen)

Utilisez un widget **Shortcode** avec `[naviwp embed_id="SF-..."]`. Si un constructeur n'a pas de widget Shortcode, un widget **HTML** avec le div d'intégration fonctionne :

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

---

## Conseils pour mobile

- Utilisez **[Menu Grille Réactif]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** pour changer le nombre de colonnes par point de rupture — par exemple 4 colonnes sur desktop, 2 sur mobile.
- Gardez le contenu des tuiles court — une icône, un label d'un ou deux mots, éventuellement une petite description. Les longs labels se replient de manière imprévisible.
- Visez des cibles de tapotement d'au moins 44 × 44 px y compris le rembourrage.

---

## Mise à jour du menu plus tard

Les modifications dans l'éditeur s'appliquent lors du prochain chargement de la page frontale — aucun vidage de cache WordPress requis.

---

## Liés

- [WordPress / WooCommerce — aperçu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publiez vos menus sur WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Menu Grille Réactif]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
