---
description: Publiez un Menu Grille Navi+ sur WordPress avec le plugin Navi+ AI Menu Builder. Insérez-le là où il doit apparaître en utilisant le shortcode [naviwp embed_id="..."] ou le bloc Gutenberg.
lang: fr
layout: default
permalink: /fr/docs/usage/grid-menu/publish-on-wordpress/
title: Menu Grille — Publier sur WordPress
---
# Menu Grille — Publier sur WordPress

Un **Menu Grille** est un menu de **section** — il s'affiche à l'endroit de la page où vous l'intégrez. C'est un excellent choix pour les raccourcis de catégorie, les pages centrales et les panneaux "que souhaitez-vous faire ?". Sur WordPress, le plugin Navi+ AI Menu Builder l'intègre via un shortcode ou un bloc Gutenberg ; vous n'éditez jamais les fichiers de thème.

> Autres plateformes (Wix, Squarespace, Webflow, sites personnalisés) : voir [Publier sur Wix / Squarespace / Autres]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Étapes

1. **Installez le plugin** — voir [Installer le plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
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
<p>Insère le Menu Grille immédiatement <strong>avant</strong> l'élément sélectionné, affiché comme une section complète.</p>
<p><strong>Exemple :</strong> <code>main</code> → le Menu Grille apparaît au-dessus de la zone de contenu principal.</p>
<p>C'est la configuration la plus courante pour un Menu Grille sur WordPress.</p>
<p>Sélecteurs courants pour les thèmes WordPress :</p>
<ul>
<li><code>main</code> — la plupart des thèmes</li>
<li><code>#main</code> — Twenty Twenty, Astra, OceanWP</li>
<li><code>.site-main</code> — de nombreux thèmes</li>
<li><code>#content</code> — Divi, certains thèmes par défaut</li>
</ul>
</details>

<details><summary>Option B : Insérer Après</summary>
<p>Insère le Menu Grille immédiatement <strong>après</strong> l'élément sélectionné.</p>
<p><strong>Exemple :</strong> <code>header</code> → le Menu Grille apparaît juste en dessous de l'en-tête.</p>
<p>Sélecteurs courants pour les thèmes WordPress :</p>
<ul>
<li><code>header</code> — la plupart des thèmes</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One et thèmes WordPress par défaut</li>
</ul>
</details>

<details><summary>Option C : Remplacer</summary>
<p>La plupart des sites WordPress n'ont pas d'élément Menu Grille intégré à remplacer. Insérer Avant <code>main</code> est l'approche recommandée.</p>
<p>Si votre thème a un élément de style grille que vous souhaitez remplacer, utilisez <a href="/docs/usage/debug-mode-find-css-selectors/">Mode Débogage</a> ou <a href="/docs/usage/general/find-css-selector/">Outils de développement du navigateur</a> pour trouver son sélecteur.</p>
</details>

#### Ciblage spécifique aux appareils

Ajoutez un suffixe pour appliquer le sélecteur uniquement sur un appareil spécifique :

| Suffixe | S'applique à |
|--------|------------|
| `(M)` | Mobile uniquement |
| `(D)` | Bureau uniquement |
| *(aucun)* | Les deux |

Exemple : `main(D)` — insère le Menu Grille uniquement sur bureau.

---

## Conseils pour mobile

- Utilisez **[Menu Grille Réactif]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** pour changer le nombre de colonnes par point de rupture — par exemple 4 colonnes sur bureau, 2 sur mobile.
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
