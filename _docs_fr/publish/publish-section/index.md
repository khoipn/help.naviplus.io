---
description: Publiez des menus Section (Mega Menu, Grid) dans Navi+ — Insérer/Remplacer avec CSS Selector ou App Block sur Shopify.
layout: default
permalink: /docs/publish/publish-section/
title: Publish Section — Mega Menu & Grid
---
# Publish Section — Mega Menu & Grid

S'applique à : **Mobile Mega Menu**, **Mobile Grid**, **Desktop Mega Menu**

Les menus Section **ne sont pas flottants** — ils sont insérés à une position spécifique dans la mise en page. Il existe deux méthodes de déploiement pouvant être utilisées ensemble :

| | Méthode 1 : Insérer/Remplacer | Méthode 2 : App Block |
|---|---|---|
| Plateforme | Shopify + Global | Shopify uniquement |
| Mécanisme | CSS Selector → insérer avant/après/remplacer l'élément | App Block "Navi+ on Section" dans Theme Editor |
| Flexibilité | Élevée — intégrer n'importe où | Moyenne — limité par le schéma de section Shopify |
| Configuration | Nécessite de connaître le CSS Selector | Entrer seulement l'Embed ID |

---

## Méthode 1 : Insérer/Remplacer avec CSS Selector

La méthode **Recommandée** — fonctionne pour Shopify et Global.

### Étape 1 : Code d'intégration

**Shopify :** **Theme Editor → App Embeds** → activer Navi+. Une seule fois.

**Global :** Coller dans `<head>` :
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### Étape 2 : Activer "Publier le menu par méthode Insérer/Remplacer"

Activez le bouton pour développer la section de configuration ci-dessous.

### Étape 3 : Entrer le CSS Selector

Entrez **un** CSS Selector. Le menu sera placé par rapport à l'élément correspondant.

**Syntaxe spécifique par appareil :**

| Suffixe | Appareil |
|---|---|
| `header` | Mobile et desktop |
| `header(M)` | Mobile uniquement |
| `header(D)` | Desktop uniquement |

**Conseils de CSS Selector pour les thèmes Shopify populaires :**

| Type de menu | Objectif | CSS Selector suggéré |
|---|---|---|
| Desktop Mega | Remplacer la navigation desktop | `nav.header__inline-menu ul.list-menu` |
| Desktop Mega | Insérer sous le header | `header` |
| Mobile Mega | Insérer sous le header mobile | `header` |

### Étape 4 : Choisir le placement (Insérer/Remplacer)

| Valeur | Comportement |
|---|---|
| **Remplacer** | Remplace complètement l'élément original par le menu Navi+ |
| **Insérer avant** | Insère le menu Navi+ avant l'élément |
| **Insérer après** | Insère le menu Navi+ après l'élément |

> Après avoir choisi **Remplacer**, envisagez d'ajouter du CSS pour masquer l'élément original pendant le chargement de Navi+ — voir [Publish Optimize](/docs/publish/publish-optimize/).

---

## Méthode 2 : App Block (Shopify uniquement)

### Comment configurer

1. Copiez l'**Embed ID** du menu (affiché dans le modal — cliquez pour copier).
2. Allez dans **Shopify Theme Editor** → trouvez l'App Block **"Navi+ on Section"**.
3. Collez l'Embed ID dans le champ correspondant.
4. Enregistrez le thème.

### "Fixé en haut lors du défilement"

Bouton pour épingler le menu Section en haut de la page lors du défilement.

**Quand utiliser :** Si le thème n'a pas de header sticky intégré, activez ceci pour que le Desktop Mega Menu reste visible lors du défilement vers le bas.

---

## Les deux méthodes peuvent-elles être utilisées ensemble ?

Oui. Les utilisateurs Shopify peuvent activer les deux :
- App Block pour la prévisualisation dans Theme Editor (plus stable, plus facile à prévisualiser).
- Insérer/Remplacer pour un placement plus précis sur le storefront.

En général, une seule méthode suffit.

---

## Notes par type de menu

| Menu | Appareil | Notes |
|---|---|---|
| Mobile Mega Menu | Bouton desktop désactivé | Mobile uniquement |
| Mobile Header | Bouton desktop désactivé | Mobile uniquement |
| Desktop Mega Menu | Bouton mobile désactivé | Desktop uniquement |
| Mobile Grid | Les deux | Aucune restriction |

---

## Dépannage

**Le menu n'apparaît pas après la configuration Insérer/Remplacer ?**
1. Vérifiez que le CSS Selector est correct — utilisez DevTools ou le Mode Debug Navi+.
2. Vérifiez que le bouton "Publier le menu par méthode Insérer/Remplacer" est activé.
3. Vérifiez que App Embeds / le code d'intégration est en place.

**Le menu apparaît deux fois (dupliqué) ?**
→ App Block et Insérer/Remplacer sont tous les deux actifs simultanément. Désactivez l'un d'eux.
