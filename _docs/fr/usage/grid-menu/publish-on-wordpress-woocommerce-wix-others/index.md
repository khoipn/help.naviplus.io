---
description: 'Si vous déployez votre site Web sur Shopify, veuillez installer l''application Shopify dédiée ici : <https://apps.shopify.com/pronavi-navigation-design> - Elle est optimisée ...'
lang: fr
layout: default
permalink: /fr/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/
title: Publier sur Wix / Squarespace / Autres
---
# Publier sur Wix / Squarespace / Autres

> **Sur WordPress ?** Utilisez le [plugin Naviplus Menu Builder]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress/) au lieu de l'intégration manuelle ci-dessous — pas d'éditions de thème, placez la grille via un shortcode ou un bloc Gutenberg.

> **Sur Shopify ?** Installez l'[application Shopify](https://apps.shopify.com/pronavi-navigation-design) dédiée — elle est optimisée pour la plateforme avec des options de publication intégrées.

Cette page couvre la méthode **d'intégration de script manuelle**, qui est le bon chemin pour [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), et des sites Web personnalisés construits avec PHP, Node.js, ou du HTML pur. Vous avez les méthodes d'implémentation suivantes :

### 1. Intégrer Navi+ sur Votre Site Web

Cette méthode d'implémentation convient à tous les types de menus que Navi+ prend actuellement en charge, y compris : Tabbar, Mega menu, Slide menu, FAB, et Grid menu. Ce code n'a besoin d'être utilisé qu'une seule fois pour tous les menus.

```html
<!-- Insérez ce code dans le <head> du site Web. (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Insérez ce code dans le <head> du site Web -->
```

### FAQ (Questions Fréquemment Posées)

<details><summary>Qu'est-ce que le token ?</summary>
<p>Chaque compte Navi+ se voit attribuer un token unique. Vous pouvez voir et copier ce token directement depuis l'en-tête de l'application. Le token est utilisé pour publier votre menu de manière sécurisée.</p>
</details>

<details><summary>Qu'est-ce que https://live.naviplus.app/start.js ?</summary>
<p>C'est l'URL fixe de Navi+ qui contient la logique d'initialisation de l'application. Le script est léger (environ 4 Ko), ce qui lui permet de se charger rapidement sur la plupart des appareils et des conditions réseau. Il est livré via Cloudflare et BunnyCDN pour fournir des performances globales stables et une compatibilité fiable avec les navigateurs modernes.</p>
<p>Utiliser la méthode de chargement asynchrone signifie également qu'elle n'affecte pas le processus de chargement du site Web.</p>
</details>

<details><summary>Ce code d'intégration ralentit-il mon site Web ?</summary>
<p>Le code ci-dessous est extrêmement léger et peut être inséré dans votre site Web sans affecter la vitesse (ne prenant que 100-200 ms pour le premier chargement et 0 ms pour les chargements suivants), l'expérience client, ou les scores SEO</p>
</details>

<details><summary>Quel est le meilleur endroit pour insérer ce snippet de code ?</summary>
<p>Dans la section head (ou aussi tôt que possible). Pourquoi ? Le site Web chargera séquentiellement les ressources pour rendre l'interface. Placer Navi+ le plus tôt possible dans le code HTML aidera votre menu à être prêt à s'afficher dès que possible en attendant que les conditions soient remplies, puis le menu apparaîtra immédiatement. Cela améliore l'expérience utilisateur.</p>
</details>

<details><summary>Comment puis-je savoir si ce code a été intégré avec succès sur mon site Web ?</summary>
<p>Il y a deux façons :</p>
<p><strong>Méthode 1 (pour tout le monde) :</strong></p>
<p>Ouvrez votre site Web avec le suffixe #navidebug-on, par exemple : <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>. Si le site Web passe en mode Debug, l'intégration fonctionne correctement. Le mode Debug vous aide à identifier facilement les sélecteurs CSS. Utilisez #navidebug-off pour l'éteindre.</p>
<p><strong>Méthode 2 (pour les développeurs) :</strong></p>
<p>Ouvrez les outils d'inspection de votre navigateur, allez à l'onglet Console, et cherchez un message vert : "Utilisation de Navi+..". Ce message indique que le code a été intégré avec succès.</p>
</details>

***

### 2. Publier le menu en utilisant le Sélecteur CSS (recommandé)

Après avoir intégré le script ci-dessus, allez dans l'application Navi+ pour configurer où et comment votre menu apparaît sur la page.

#### I.1. Comprendre le Sélecteur CSS

Un Sélecteur CSS est un moyen de cibler un élément HTML spécifique sur votre page Web. Navi+ l'utilise pour savoir exactement **où** placer votre menu — que ce soit pour l'insérer avant ou après un élément, ou pour remplacer complètement un existant.

Vous n'avez pas besoin d'être développeur pour l'utiliser. Navi+ fournit un champ de saisie simple où vous entrez le sélecteur, et il s'occupe du reste.

Pour trouver le Sélecteur CSS correct pour votre site Web, vous pouvez utiliser :
- [Mode Debug](/docs/usage/debug-mode-find-css-selectors/) — l'outil intégré de Navi+ : survolez n'importe quel élément de votre page et copiez instantanément son sélecteur
- [Browser DevTools](/docs/usage/general/find-css-selector/) — une méthode manuelle utilisant l'inspecteur intégré de votre navigateur

#### I.2. Trois options de publication

Étape 1 : Cliquez sur le bouton **Publier sur le site Web** dans l'application Navi+.

Étape 2 : Activez le toggle "Publier le menu par méthode d'Insertion/Remplacement".

Étape 3 : Entrez votre Sélecteur CSS et choisissez l'une des trois options de publication ci-dessous.

<details><summary>Option 1 : Insérer Avant</summary>
<p>Insère le menu Navi+ immédiatement <strong>avant</strong> l'élément sélectionné.</p>
<p><strong>Exemple :</strong> Sélecteur CSS <code>main</code> → le Menu Grid apparaît au-dessus de la zone de contenu principal de la page, affiché comme une section complète.</p>
<p>C'est la configuration la plus courante pour un Menu Grid sur des plateformes non-Shopify.</p>
<p>Sélecteurs CSS courants pour cette option :</p>
<ul>
<li><code>main</code> — fonctionne sur la plupart des plateformes (Webflow, Magento, sites personnalisés)</li>
<li><code>#main</code> — certaines plateformes et thèmes personnalisés</li>
<li><code>.main-content</code> — diverses plateformes</li>
</ul>
<p>Pas dans cette liste ? Vous pouvez discuter avec un supporter de Navi+ pour une aide instantanée, ou utiliser <a href= "/docs/usage/debug-mode-find-css-selectors/">Mode Debug</a> ou <a href= "/docs/usage/general/find-css-selector/">Browser DevTools</a> pour le trouver vous-même.</p>
</details>

<details><summary>Option 2 : Insérer Après</summary>
<p>Insère le menu Navi+ immédiatement <strong>après</strong> l'élément sélectionné.</p>
<p><strong>Exemple :</strong> Sélecteur CSS <code>header</code> → le Menu Grid apparaît juste en dessous de l'en-tête.</p>
<p>Sélecteurs CSS courants pour cette option :</p>
<ul>
<li><code>header</code> — fonctionne sur la plupart des plateformes</li>
<li><code>.header-wrapper</code> — certaines plateformes</li>
<li><code>.site-header</code> — diverses plateformes</li>
</ul>
<p>Pas dans cette liste ? Vous pouvez discuter avec un supporter de Navi+ pour une aide instantanée, ou utiliser <a href= "/docs/usage/debug-mode-find-css-selectors/">Mode Debug</a> ou <a href= "/docs/usage/general/find-css-selector/">Browser DevTools</a> pour le trouver vous-même.</p>
</details>

<details><summary>Option 3 : Remplacer</summary>
<p>Remplace complètement l'élément sélectionné par le menu Navi+. L'élément original est caché et Navi+ prend sa place.</p>
<p>La plupart des plateformes n'ont pas de Menu Grid intégré, donc le mode Remplacer est rarement applicable pour ce type de menu. Insérer Avant <code>main</code> est l'approche recommandée.</p>
<p>Si votre plateforme a un élément de navigation de style grille que vous souhaitez remplacer, utilisez <a href= "/docs/usage/debug-mode-find-css-selectors/">Mode Debug</a> ou <a href= "/docs/usage/general/find-css-selector/">Browser DevTools</a> pour trouver son Sélecteur CSS.</p>
</details>

#### I.3. Ciblage spécifique aux appareils

Vous pouvez contrôler si le Sélecteur CSS s'applique sur mobile, bureau, ou les deux en ajoutant un suffixe à votre sélecteur :

| Suffixe | S'applique à |
|--------|------------|
| `(M)` | Mobile uniquement |
| `(D)` | Bureau uniquement |
| *(aucun)* | Mobile et bureau |

**Exemples :**
- `main(D)` — insère uniquement sur bureau
- `main(M)` — insère uniquement sur mobile
- `main` — insère sur les deux plateformes

Ceci est utile lorsque vous souhaitez que le Menu Grid n'apparaisse que sur certains appareils, ou lorsque vous avez besoin d'un placement différent sur mobile par rapport au bureau.

***

### 3. Insérer un Menu Navi+ à Tout Moment sur Votre Site Web

Le code ci-dessous peut être utilisé plusieurs fois sur un site Web avec différentes informations d'insertion (en particulier l'**ID Embarqué**, tel que SF-123456789). Lorsque le site Web est rendu, le menu sera déployé et affiché à la position où le code est inséré lorsque les conditions sont remplies. Ce type de menu convient à : Mega menu, Grid, etc.

```html
<!-- Insérez le code où le menu SF-123456789 apparaît. (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Insérez le code où le menu SF-123456789 apparaît -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">Important</mark>**:** Le code ci-dessus utilise le code d'intégration d'exemple <mark style="color:orange;">SF-123456789</mark>. Assurez-vous de le remplacer par votre code d'intégration de menu réel.
{% comment %}endhint{% endcomment %}
