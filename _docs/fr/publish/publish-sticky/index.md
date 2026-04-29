---
description: Publiez des menus Sticky (Tabbar, Mobile Header, FAB) dans Navi+ — en utilisant App Embeds pour Shopify ou l'injection de script pour les sites Global.
layout: default
permalink: /fr/docs/publish/publish-sticky/
title: Publish sticky — Tabbar & FAB
---
# Publish Sticky — Tabbar & FAB

S'applique à : **Tabbar**, **Mobile Header**, **FAB / Support bar**

Les menus Sticky sont flottants — ils apparaissent toujours à l'écran et ne sont pas attachés à une position DOM fixe. La méthode d'intégration est la plus simple : activation sur tout le site via un seul script.

---

## Shopify — 3 étapes

### Étape 1 : Activer App Embeds dans Theme Editor

Allez dans **Theme Editor → App Embeds** et activez le bouton Navi+.

- Cela **ne modifie pas la mise en page du thème** et peut être désactivé à tout moment sans affecter la boutique.
- Ne doit être fait qu'**une seule fois par boutique** — ignorez cette étape pour les menus suivants.

### Étape 2 : Activer "Publier ce menu en mode sticky"

Le bouton dans la carte **Étape 2** du modal Publish. Activé = menu en ligne, désactivé = masqué du site web.

### Étape 3 (optionnel) : Configurer la visibilité par appareil et par page

Voir [Publish Filter](/fr/docs/publish/publish-filter/) pour plus de détails.

---

## Global (WordPress, Wix, Webflow...) — 3 étapes

### Étape 1 : Coller le code d'intégration dans `<head>`

Le code est affiché dans le modal avec un bouton **Copier**. Collez-le dans le `<head>` de votre site web :

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` identifie votre boutique — chaque boutique a un token unique.
- `start.js` se charge de manière asynchrone et ne bloque pas le rendu de la page.

### Étape 2 : Activer "Publier ce menu en mode sticky"

Identique à Shopify — activez le bouton.

### Étape 3 (optionnel) : Configurer la visibilité par appareil et par page

Voir [Publish Filter](/fr/docs/publish/publish-filter/) pour plus de détails.

---

## Notes par type de menu

| Menu | Restriction |
|---|---|
| Mobile Header | Bouton desktop désactivé — mobile uniquement |
| FAB / Support bar | Pas de sélecteur de position (FAB a son propre positionnement dans l'onglet Setting) |
| Tabbar | Options complètes mobile + desktop disponibles |

---

## Dépannage

**Le menu n'apparaît pas après l'activation du bouton ?**
1. Vérifiez que App Embeds est activé (Shopify) ou que le code d'intégration est collé correctement (Global).
2. Vérifiez les paramètres d'appareil — **Afficher le menu sur mobile** ou **Afficher le menu sur desktop** doit être activé.
3. Vérifiez le filtre URL — il peut filtrer la page actuelle.
4. Rechargez le navigateur en forçant le rafraîchissement (Ctrl+Maj+R) pour vider le cache.
