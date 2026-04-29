---
description: Publiez des menus Slide (Context) dans Navi+ — activez le bouton puis configurez un déclencheur pour ouvrir le menu.
layout: default
permalink: /fr/docs/publish/publish-slide/
title: Publish slide — Menu context slide
---
# Publish Slide — Menu Context Slide

S'applique à : **Menu Context Slide**

Les menus Slide sont **différents des Sticky** : après publication, le menu **n'apparaît pas automatiquement** sur la page. Il ne s'ouvre que lorsqu'il est déclenché par une action. C'est la distinction clé avec les menus Sticky.

---

## Flux de publication

```
Étape 1 : Intégrer le code dans le site web
        ↓
Étape 2 : Activer le bouton "Publier ce menu"
        ↓
Étape 3 : Configurer le déclencheur (comment ouvrir le menu)
```

Après l'Étape 2, le menu est chargé sur le site web mais **en état masqué**. L'Étape 3 détermine ce qui l'ouvre.

---

## Étape 1 : Code d'intégration

**Shopify :** Allez dans **Theme Editor → App Embeds** → activez Navi+. Une seule fois.

**Global :** Collez dans `<head>` :
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Étape 2 : Activer le bouton

Activez le bouton **"Publier ce menu"** dans le modal Publish.

> Après cette étape, le menu **n'apparaîtra pas encore** sur le site web. C'est le comportement attendu — les menus Slide nécessitent un déclencheur pour s'ouvrir.

---

## Étape 3 : Configurer le déclencheur

Il y a 4 façons d'ouvrir un menu Slide :

---

### Méthode 1 : Ouvrir depuis un élément de menu Navi+

Utilisez la syntaxe `open:NaviMenu(embed_id)` dans le champ **Link** de n'importe quel élément de menu.

Exemple : Une Tabbar a un élément "Menu" → Link = `open:NaviMenu(ABC123)` → toucher cet élément ouvre le menu Slide.

L'**embed_id** est affiché dans le modal et peut être copié en cliquant :
```
open:NaviMenu(ABC123)
```

C'est l'approche la plus courante — combiner Tabbar + menu Slide pour étendre l'espace de navigation.

---

### Méthode 2 : Ouvrir en cliquant sur un élément de la page (CSS Selector)

Entrez un ou plusieurs sélecteurs CSS, séparés par des virgules. Navi+ écoute les événements de clic/tap sur les éléments correspondants et ouvre le menu Slide.

**Syntaxe spécifique par appareil :**

| Suffixe | Appareil |
|---|---|
| `#element` | Mobile et desktop |
| `#element(M)` | Mobile uniquement |
| `#element(D)` | Desktop uniquement |

**Exemples pour le thème Shopify Dawn :**

| Objectif | CSS Selector |
|---|---|
| Remplacer le menu hamburger mobile | `#Details-menu-drawer-container` |
| Sélecteurs différents par appareil | `#Details-menu-drawer-container(M), .desktop-menu-btn(D)` |

> Après avoir configuré un déclencheur CSS Selector, envisagez de masquer l'élément original pour éviter le flash — voir [Publish Optimize](/fr/docs/publish/publish-optimize/).

---

### Méthode 3 : Appeler une fonction JavaScript

Appelez cette fonction depuis n'importe où dans le code de la page :

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Adapté pour intégrer le menu Slide dans une interface utilisateur personnalisée sans sélecteur fixe.

---

### Méthode 4 : Barre latérale fixe sur desktop

Au lieu d'ouvrir/fermer, le menu Slide peut être épinglé comme barre latérale gauche permanente sur desktop.

**Comment activer :** Allez dans l'onglet **Advance** → sélectionnez la direction **"Fixer à gauche"**.

Pas de déclencheur nécessaire — le menu est toujours visible sur desktop.

---

## Dépannage

**Bouton activé mais le menu n'apparaît pas ?**
→ Comportement correct. Les menus Slide nécessitent un déclencheur (Étape 3). Vérifiez qu'au moins une méthode est configurée.

**CSS Selector ne fonctionne pas ?**
1. Utilisez le **Mode Debug Navi+** pour trouver le sélecteur exact de l'élément.
2. Vérifiez que l'élément existe bien sur la page (certains thèmes masquent/suppriment des éléments à certains breakpoints).
3. Essayez d'ajouter le suffixe `(M)` ou `(D)` pour séparer par appareil.

**Vous voulez plusieurs menus Slide sur la même page ?**
→ Créez des menus séparés, chacun avec un `embed_id` différent, utilisant des déclencheurs différents.
