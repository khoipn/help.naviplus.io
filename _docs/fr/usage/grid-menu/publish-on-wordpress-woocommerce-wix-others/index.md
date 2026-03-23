---
description: 'Si vous déployez votre site Web sur Shopify, veuillez installer l''application Shopify dédiée ici : <https://apps.shopify.com/pronavi-navigation-design> - Elle est optimisée ...'
lang: fr
layout: default
permalink: /fr/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/
title: Publier sur WordPress / WooCommerce / Wix / Autres
---
# Publier sur WordPress / WooCommerce / Wix / Autres

Si vous déployez votre site Web sur Shopify, veuillez installer l'application dédiée [Shopify](https://www.shopify.com/ "Shopify") ici : <https://apps.shopify.com/pronavi-navigation-design> - Elle est optimisée pour cette plateforme, permettant un déploiement stable avec de nombreuses options intégrées utiles.

Si vous déployez votre site Web sur d'autres plateformes (telles que [WordPress](https://wordpress.org/ "WordPress"), [WooCommerce](https://woocommerce.com/ "WooCommerce"), [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), et des sites Web personnalisés construits avec PHP, Node.js, ou du HTML pur..), vous avez les méthodes d'implémentation suivantes :

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
<p>Chaque compte Navi+ se voit attribuer un token unique. Vous pouvez visualiser et copier ce token directement depuis l'en-tête de l'application. Le token est utilisé pour publier votre menu de manière sécurisée.</p>
</details>

<details><summary>Qu'est-ce que https://live.naviplus.app/start.js ?</summary>
<p>C'est l'URL fixe de Navi+ qui contient la logique d'initialisation de l'application. Le script est léger (environ 4 Ko), ce qui lui permet de se charger rapidement sur la plupart des appareils et des conditions réseau. Il est livré via Cloudflare et BunnyCDN pour offrir des performances globales stables et une compatibilité fiable avec les navigateurs modernes.</p>
<p>Utiliser la méthode de chargement asynchrone signifie également qu'elle n'affecte pas le processus de chargement du site Web.</p>
</details>

<details><summary>Ce code d'intégration ralentit-il mon site Web ?</summary>
<p>Le code ci-dessous est extrêmement léger et peut être inséré dans votre site Web sans affecter la vitesse (ne prenant que 100 à 200 ms pour le premier chargement et 0 ms pour les chargements suivants), l'expérience client ou les scores SEO</p>
</details>

<details><summary>Quel est le meilleur endroit pour insérer ce snippet de code ?</summary>
<p>Dans la section head (ou aussi tôt que possible). Pourquoi ? Le site Web chargera séquentiellement les ressources pour rendre l'interface. Placer Navi+ le plus tôt possible dans le code HTML aidera votre menu à être prêt à s'afficher dès que possible en attendant que les conditions soient remplies, puis le menu apparaîtra immédiatement. Cela améliore l'expérience utilisateur.</p>
</details>

<details><summary>Comment puis-je savoir si ce code a été intégré avec succès sur mon site Web ?</summary>
<p>Il y a deux façons :</p>
<p><strong>Méthode 1 (pour tout le monde) :</strong></p>
<p>Ouvrez votre site Web avec le suffixe #navidebug-on, par exemple : <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>. Si le site Web passe en mode Debug, l'intégration fonctionne correctement. Le mode Debug vous aide à identifier facilement les sélecteurs CSS. Utilisez #navidebug-off pour l'éteindre.</p>
<p><strong>Méthode 2 (pour les développeurs) :</strong></p>
<p>Ouvrez les outils d'inspection de votre navigateur, allez dans l'onglet Console, et recherchez un message vert : "Utilisation de Navi+..". Ce message indique que le code a été intégré avec succès.</p>
</details>

***

### 2. Insérer un Menu Navi+ à Tout Moment sur Votre Site Web

Le code ci-dessous peut être utilisé plusieurs fois sur un site Web avec différentes informations d'insertion (en particulier l'**ID Embarqué**, tel que SF-123456789). Lorsque le site Web est rendu, le menu sera déployé et affiché à l'endroit où le code est inséré lorsque les conditions sont remplies. Ce type de menu convient à : Mega menu, Grid, etc.

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
