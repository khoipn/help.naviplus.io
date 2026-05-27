---
description: Publiez un Navi+ Mega Menu (Desktop) sur WordPress avec le plugin Navi+ AI Menu Builder. Placez-le dans n'importe quel article, page, widget ou constructeur de page en utilisant le [naviwp embed_id="..."] shortcode ou le bloc Gutenberg.
lang: fr
layout: default
permalink: /fr/docs/usage/mega-menu-desktop/publish-on-wordpress/
title: Mega Menu (Desktop) — Publier sur WordPress
---
# Mega Menu (Desktop) — Publier sur WordPress

A **Mega Menu (Desktop)** est un **menu de section** — il ne s'ancre pas à la fenêtre d'affichage, il se rend au point exact de la page où vous l'intégrez (typiquement l'en-tête du site). Sur WordPress, le plugin Navi+ AI Menu Builder l'intègre via un shortcode ou un bloc Gutenberg — vous n'éditez jamais les fichiers de thème.

> Autres plateformes (Wix, Squarespace, Webflow, sites personnalisés) : voir [Publier sur Wix / Squarespace / Autres]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/).

---

## Étapes

1. **Installez le plugin** — voir [Installer le plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Construisez votre Mega Menu** dans **Apparence → Naviplus Menu Builder**. Voir [Mega Menu (Desktop) — Comment utiliser]({{ site.baseurl }}/docs/usage/mega-menu-desktop/how-to-use/) pour des conseils de conception.
3. **Copiez l'ID d'intégration** du menu (affiché sur le panneau de publication — ressemble à `SF-123456789`).
4. **Insérez le menu** où vous le souhaitez sur la page (section suivante).

---

## Insérer le menu — trois options

### Option 1 — Shortcode (fonctionne partout)

Collez ceci dans n'importe quel article, page ou widget compatible avec les shortcodes :

```text
[naviwp embed_id="SF-123456789"]
```

Pour un Mega Menu qui doit apparaître dans l'**en-tête du site** sur chaque page, l'endroit le plus propre est une zone de widget d'en-tête (si votre thème en fournit une). Sinon, utilisez un bloc d'en-tête global / une partie de modèle (thèmes d'édition complète du site), ou revenez à l'Option 3 ci-dessous.

### Option 2 — Bloc Gutenberg

1. Dans l'éditeur de blocs, cliquez sur **+ → Naviplus Menu Builder**.
2. Collez l'**ID d'intégration** dans la barre latérale du bloc.

Vous pouvez également déposer un bloc **Shortcode** générique avec `[naviwp embed_id="SF-..."]`.

### Option 3 — Constructeurs de pages (Elementor, Divi, Bricks, Oxygen)

Utilisez le widget **Shortcode** du constructeur et collez `[naviwp embed_id="SF-..."]`. Si vous préférez utiliser du HTML brut, déposez directement la div d'intégration :

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

Le plugin charge déjà le runtime Navi+, donc le menu se rend à l'intérieur de ce conteneur.

### Option 4 — Sélecteur CSS (placement automatique depuis l'application Navi+)

Au lieu de placer un shortcode manuellement, vous pouvez laisser Navi+ insérer ou remplacer automatiquement un élément en utilisant un Sélecteur CSS — configuré entièrement depuis l'application Navi+.

#### Comprendre le Sélecteur CSS

Un Sélecteur CSS cible un élément HTML spécifique sur votre page. Navi+ l'utilise pour savoir exactement **où** placer votre menu — insérer avant, insérer après ou remplacer un élément existant.

Pour trouver le bon Sélecteur CSS, utilisez :
- [Mode Débogage](/docs/usage/debug-mode-find-css-selectors/) — survolez n'importe quel élément et copiez instantanément son sélecteur
- [Outils de développement du navigateur](/docs/usage/general/find-css-selector/) — méthode manuelle via l'inspecteur de navigateur

#### Trois options de publication

Dans l'application Navi+ : cliquez sur **Publier sur le site web** → activez **"Publier le menu par méthode d'insertion/remplacement"** → entrez votre Sélecteur CSS et choisissez une option :

<details><summary>Option A : Insérer Avant</summary>
<p>Insère le menu immédiatement <strong>avant</strong> l'élément sélectionné.</p>
<p><strong>Exemple :</strong> <code>main</code> → le menu apparaît au-dessus de la zone de contenu principal.</p>
<p>Sélecteurs communs pour les thèmes WordPress :</p>
<ul>
<li><code>main</code> — la plupart des thèmes</li>
<li><code>#main</code> — Twenty Twenty, Astra, OceanWP</li>
<li><code>.site-main</code> — de nombreux thèmes</li>
</ul>
</details>

<details><summary>Option B : Insérer Après</summary>
<p>Insère le menu immédiatement <strong>après</strong> l'élément sélectionné.</p>
<p><strong>Exemple :</strong> <code>header</code> → le menu apparaît juste en dessous de l'en-tête.</p>
<p>C'est la configuration la plus courante pour un Mega Menu de bureau.</p>
<p>Sélecteurs communs pour les thèmes WordPress :</p>
<ul>
<li><code>header</code> — la plupart des thèmes</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One et thèmes WordPress par défaut</li>
<li><code>#header</code> — Divi</li>
</ul>
</details>

<details><summary>Option C : Remplacer</summary>
<p>Remplace entièrement l'élément sélectionné par le menu Navi+. L'élément original est masqué et Navi+ prend sa place.</p>
<p><strong>Exemple :</strong> <code>.main-navigation</code> → le menu de navigation par défaut du thème est masqué et remplacé par votre Mega Menu Navi+.</p>
<p>Sélecteurs communs pour les thèmes WordPress :</p>
<ul>
<li><code>.main-navigation</code> — Twenty Twenty-One et de nombreux thèmes WordPress par défaut</li>
<li><code>#site-navigation</code> — certains thèmes WordPress par défaut</li>
<li><code>.nav-primary</code> — divers thèmes</li>
</ul>
<p><strong>Remarque :</strong> Un bref flash du menu original peut apparaître pendant que Navi+ se charge. Utilisez l'option d'optimisation UX intégrée dans les paramètres de publication pour masquer immédiatement l'élément original.</p>
</details>

#### Ciblage spécifique aux appareils

Ajoutez un suffixe pour appliquer le sélecteur uniquement sur un appareil spécifique :

| Suffixe | S'applique à |
|--------|------------|
| `(M)` | Mobile uniquement |
| `(D)` | Bureau uniquement |
| *(aucun)* | Les deux |

Exemple : `header(D)` — insère uniquement sur bureau.

---

## Considérations mobiles

Un Mega Menu de bureau est, par définition, une mise en page orientée bureau. Sur les petits écrans, il ne devrait généralement pas se rendre du tout — associez-le à un [Mega Menu (Mobile)]({{ site.baseurl }}/docs/usage/mega-menu-mobile/) ou [Slide Menu]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/) et utilisez des règles d'affichage pour cacher chacun sur l'autre point de rupture.

Dans l'éditeur, ouvrez **Règles d'affichage → Appareil** et restreignez le Mega Menu (Desktop) à **bureau uniquement**.

---

## Mise à jour du menu plus tard

Modifiez le menu dans l'administration WordPress (ou dans l'application web Navi+). Les changements s'appliquent lors du prochain chargement de page en front-end — aucun vidage de cache WordPress requis, car les menus sont récupérés à l'exécution par le navigateur.

---

## Liens connexes

- [WordPress / WooCommerce — aperçu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publiez vos menus sur WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Mega Menu (Desktop) — FAQ]({{ site.baseurl }}/docs/usage/mega-menu-desktop/faq/)
