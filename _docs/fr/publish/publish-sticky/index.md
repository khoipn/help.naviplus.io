---
description: Publier des menus collants (Tabbar, En-tête mobile, FAB) dans Navi+ — en utilisant des App Embeds pour Shopify ou l'injection de script pour les sites globaux.
lang: fr
layout: default
permalink: /fr/docs/publish/publish-sticky/
title: Publier collant — Tabbar & FAB
---
# Publier collant — Tabbar & FAB

S'applique à : **Tabbar**, **En-tête mobile**, **FAB / Barre de support**

Les menus collants sont flottants — ils apparaissent toujours à l'écran et ne sont pas attachés à une position DOM fixe. La méthode d'intégration est la plus simple : activez-la sur tout le site via un seul script.

---

## Shopify — 3 étapes

### Étape 1 : Activer les App Embeds dans l'éditeur de thème

Allez à **Éditeur de thème → App Embeds** et activez le commutateur Navi+.

- Cela **ne change pas la mise en page du thème** et peut être désactivé à tout moment sans affecter la boutique.
- Doit être fait **une seule fois par boutique** — sautez cette étape pour les menus suivants.

### Étape 2 : Activer "Publier ce menu en mode collant"

Le commutateur dans la carte **Étape 2** de la modalité de publication. Activer = le menu est en direct, désactiver = caché du site web.

### Étape 3 (optionnel) : Configurer la visibilité des appareils et des pages

Voir [Filtre de publication](/docs/publish/publish-filter/) pour plus de détails.

---

## Global (WordPress, Wix, Webflow...) — 3 étapes

### Étape 1 : Coller le code d'intégration dans `<head>`

Le code est affiché dans la modalité avec un bouton **Copier**. Collez-le dans le `<head>` de votre site web :

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` identifie votre boutique — chaque boutique a un token unique.
- `start.js` se charge de manière asynchrone et ne bloque pas le rendu de la page.

### Étape 2 : Activer "Publier ce menu en mode collant"

Identique à Shopify — activez le commutateur.

### Étape 3 (optionnel) : Configurer la visibilité des appareils et des pages

Voir [Filtre de publication](/docs/publish/publish-filter/) pour plus de détails.

---

## Remarques par type de menu

| Menu | Restriction |
|---|---|
| En-tête mobile | Commutateur de bureau désactivé — mobile uniquement |
| FAB / Barre de support | Pas de sélecteur de position (FAB a son propre positionnement dans l'onglet Paramètres) |
| Tabbar | Options complètes pour mobile + bureau disponibles |

---

## Dépannage

**Le menu n'apparaît pas après avoir activé le commutateur ?**
1. Vérifiez que les App Embeds sont activés (Shopify) ou que le code d'intégration est collé correctement (Global).
2. Vérifiez les paramètres de l'appareil — **Afficher le menu sur mobile** ou **Afficher le menu sur bureau** doit être activé.
3. Vérifiez le filtre d'URL — il peut filtrer la page actuelle.
4. Actualisez le navigateur (Ctrl+Shift+R) pour vider le cache.
