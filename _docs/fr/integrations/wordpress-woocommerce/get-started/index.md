---
description: Après avoir activé le plugin Navi+ Menu Builder, ouvrez Apparence → Naviplus Menu Builder, créez votre premier menu dans l'éditeur visuel et laissez le plugin connecter automatiquement votre site WordPress à Navi+.
lang: fr
layout: default
permalink: /fr/docs/integrations/wordpress-woocommerce/get-started/
title: Créez votre premier menu
---
# Créez votre premier menu

Une fois le plugin activé, vous construisez des menus à l'intérieur de WordPress — pas d'inscription séparée, pas de jeton à coller.

---

## 1. Ouvrez le constructeur de menu

Dans l'administration WordPress, allez à :

> **Apparence → Naviplus Menu Builder**

Cela ouvre l'éditeur visuel Navi+ à l'intérieur de votre tableau de bord WordPress.

---

## 2. Créez votre premier menu

Suivez le flux à l'écran pour créer un menu. Lorsque vous enregistrez le premier menu, le plugin **connecte automatiquement** votre site à Navi+ :

- Il enregistre un **identifiant de site** qui permet au service Navi+ de reconnaître votre installation WordPress.
- Il sauvegarde cet identifiant dans WordPress afin que les modifications ultérieures du menu soient dirigées vers le bon site.

> L'identifiant de site **n'est pas** votre mot de passe WordPress et **n'est pas** un jeton Navi+ que vous devez gérer. C'est une valeur opaque que le plugin gère pour vous.

Vous **n'avez pas** besoin de créer un compte Navi+ avant d'installer le plugin — l'enregistrement du premier menu gère la connexion.

---

## 3. Concevez la mise en page

À l'intérieur de l'éditeur, choisissez un type de menu (Tab Bar, Slide / hamburger, Mega Menu, Grid, FAB), puis concevez la mise en page. Docs de l'éditeur :

- [Aperçu des types de menu]({{ site.baseurl }}/docs/usage/explore-common-menus/)
- [Éléments de menu — éléments, liens, icônes, badges]({{ site.baseurl }}/docs/menu-items/item-overview/)
- [Aperçu de la conception]({{ site.baseurl }}/docs/design/design-overview/)

La structure et les styles du menu sont stockés sur le service Navi+ ; WordPress ne stocke que l'identifiant de site.

---

## 4. Vérifiez la connexion

Ouvrez l'interface de votre site. Les menus collants (Tab Bar, FAB) que vous marquez comme **Publié** dans l'éditeur apparaissent automatiquement sur le site.

Pour confirmer que le runtime se charge, utilisez l'une des options suivantes :

- **Mode débogage (tout le monde) :** ajoutez `#navidebug-on` à n'importe quelle URL — par exemple `https://your-site.com/#navidebug-on`. La page passe en mode débogage Navi+ si le plugin est connecté. Utilisez `#navidebug-off` pour l'éteindre.
- **Console (développeurs) :** ouvrez DevTools → Console ; vous devriez voir un message vert `Using Navi+..`.

---

## Prochaine étape

Pour Mega Menu et Grid Menu — placés à des endroits spécifiques dans une page — consultez **[Publiez vos menus]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)** pour le `[naviwp]` shortcode et le bloc Gutenberg.
