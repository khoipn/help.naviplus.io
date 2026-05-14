---
description: Publier des menus de diaporama (contexte) dans Navi+ — activer le basculement puis configurer un déclencheur pour ouvrir le menu.
lang: fr
layout: default
permalink: /fr/docs/publish/publish-slide/
title: Publier un diaporama — Menu contextuel
---
# Publier un diaporama — Menu contextuel

S'applique à : **Menu contextuel**

Les menus contextuels sont **différents des Sticky** : après publication, le menu **n'apparaît pas automatiquement** sur la page. Il ne s'ouvre que lorsqu'il est déclenché par une action. C'est la distinction clé par rapport aux menus Sticky.

---

## Flux de publication

```
Étape 1 : Intégrer le code dans le site web
        ↓
Étape 2 : Activer le basculement "Publier ce menu"
        ↓
Étape 3 : Configurer le déclencheur (comment ouvrir le menu)
```

Après l'étape 2, le menu est chargé sur le site web mais **dans un état caché**. L'étape 3 décide de ce qui l'ouvre.

---

## Étape 1 : Intégrer le code

**Shopify :** Allez dans **Éditeur de thème → Intégrations d'applications** → activez Navi+. Faites cela une seule fois.

**Global :** Collez dans `<head>` :
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Étape 2 : Activer le basculement

Activez le **"Publier ce menu"** basculement dans la fenêtre de publication.

> Après cette étape, le menu **n'apparaîtra pas** encore sur le site web. C'est attendu — les menus contextuels nécessitent un déclencheur pour s'ouvrir.

---

## Étape 3 : Configurer le déclencheur

L'interface utilisateur du déclencheur est divisée en deux onglets : **Configuration mobile** et **Configuration de bureau**. Les méthodes peuvent être combinées librement. Une zone **Pour les développeurs** se trouve en dehors des onglets.

---

### Méthode 1 : Ouvrir à partir d'un élément de menu Navi+

Utilisez la syntaxe `open:NaviMenu(embed_id)` dans le champ **Lien** de tout élément de menu. L'embed_id est affiché dans la fenêtre modale et peut être cliqué pour copier :

```
open:NaviMenu(ABC123)
```

Nécessite **le plan Business ou supérieur** (besoin de 2+ menus).

**Mobile — cas d'utilisation courants :**
- Un Tabbar avec un premier élément comme "☰ Menu" qui ouvre le menu contextuel — **la configuration la plus courante**
- Un menu FAB & Support avec un seul élément qui ouvre le menu contextuel
- Un Mega menu mobile avec un élément "☰ Menu" sous l'en-tête

**Bureau — cas d'utilisation courants :**
- Un Mega menu de bureau avec un élément "☰ Menu" — maintient une expérience cohérente avec le mobile
- Un Mega menu de bureau avec un seul élément "☰" placé avant le logo — reflète le hamburger mobile sur le bureau (nécessite un peu de CSS ; [contactez-nous](mailto:support@naviplus.io) si vous avez besoin d'aide)
- Un menu FAB & Support avec un seul élément qui ouvre le menu contextuel
- Un Tabbar avec un élément "☰ Menu"

---

### Méthode 2 : Ouvrir en cliquant sur un élément (Sélecteur CSS)

Entrez un ou plusieurs sélecteurs CSS, séparés par des virgules (`,`).

**Syntaxe spécifique à l'appareil :**

| Suffixe | Appareil |
|---|---|
| `#element` | Mobile et bureau |
| `#element(M)` | Mobile uniquement |
| `#element(D)` | Bureau uniquement |

**Étape 1 — trouvez votre sélecteur :**

*Sur Shopify (Dawn, Craft, Spotlight...) :*
Essayez `#Details-menu-drawer-container` pour le menu hamburger mobile. Pour d'autres thèmes, utilisez **Navi+ Mode Débogage** : visitez `yoursite.com/#navidebug-on`, survolez l'élément, appuyez sur `Cmd/Ctrl+C` pour copier son sélecteur.

*Sur bureau :*
Il n'y a généralement pas d'icône hamburger — vous devez créer un déclencheur cliquable :
- Ajoutez un élément "☰ Menu" à votre méga menu existant
- Ou placez une icône ☰ avant le logo en utilisant HTML/CSS ([contactez-nous](mailto:support@naviplus.io) si vous avez besoin d'aide)

**Étape 2 — optimiser l'UX :**
Une fois configuré, ajoutez un indicateur de chargement à l'élément remplacé pour éviter le clignotement de la mise en page — voir [Optimiser la publication](/docs/publish/publish-optimize/).

---

### Avancé (Bureau) : Barre latérale fixe

Au lieu d'ouvrir/fermer, le menu contextuel peut s'afficher comme une barre latérale toujours visible sur le bureau.

**Comment activer :** Allez dans **Avancé** → **Direction d'apparition** → sélectionnez l'option Barre latérale fixe → activez "Afficher un menu fixe sur le bureau".

Aucun déclencheur nécessaire — le menu est toujours visible sur le bureau.

---

### Pour les développeurs : Fonction JavaScript

Appelez cette fonction depuis n'importe où dans le code de la page :

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Convient pour intégrer le menu contextuel dans une interface utilisateur personnalisée sans sélecteur fixe.

---

## Dépannage

**Basculement activé mais le menu n'apparaît pas ?**
→ Comportement correct. Les menus contextuels ont besoin d'un déclencheur (Étape 3). Vérifiez qu'au moins une méthode est configurée.

**Sélecteur CSS ne fonctionne pas ?**
1. Utilisez **Navi+ Mode Débogage** pour trouver le sélecteur exact pour l'élément.
2. Vérifiez que l'élément existe réellement sur la page (certains thèmes cachent/suppriment des éléments à certains points de rupture).
3. Essayez d'ajouter `(M)` ou `(D)` suffixe pour séparer par appareil.

**Vous voulez plusieurs menus contextuels sur la même page ?**
→ Créez des menus séparés, chacun avec un `embed_id` différent, en utilisant des déclencheurs différents.
