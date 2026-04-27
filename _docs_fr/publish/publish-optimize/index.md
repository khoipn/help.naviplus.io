---
description: Optimisez la vitesse et l'UX après la publication des menus Navi+ — prévenez le flash du contenu original lors de l'utilisation d'Insérer/Remplacer ou de déclencheurs CSS Selector.
layout: default
permalink: /docs/publish/publish-optimize/
title: Publish Optimize — Vitesse & UX
---
# Publish Optimize — Vitesse & UX

Lors de l'utilisation d'**Insérer/Remplacer** (menu Section) ou d'un **déclencheur CSS Selector** (menu Slide), le site web a besoin d'un bref moment pour charger Navi+. Pendant ce temps, l'élément original (l'ancien menu du thème) est encore visible — causant un **flash** ou un décalage de mise en page.

---

## Quand l'optimisation est-elle nécessaire ?

| Méthode | Optimisation nécessaire ? |
|---|---|
| Sticky / FAB (App Embeds / `<head>`) | Non — le menu est ajouté au DOM, rien n'est remplacé |
| Menu Slide — Méthode 1 (ouvrir depuis un élément Navi+) | Non — le bouton déclencheur est un élément Navi+ |
| **Menu Slide — Méthode 2 (déclencheur CSS Selector)** | **Oui** — l'élément déclencheur original reste visible jusqu'au chargement de Navi+ |
| **Section — Remplacer** | **Oui** — le menu original s'affiche d'abord, puis est remplacé par Navi+ |
| Section — Insérer avant/après | Non requis — deux menus apparaissent côte à côte |

---

## Technique : Masquer l'élément original via CSS

### Comment ça fonctionne

1. Utiliser CSS pour masquer l'élément original immédiatement (avant le chargement de Navi+).
2. Optionnellement afficher un placeholder de chargement pour éviter le décalage de mise en page.
3. Navi+ supprime ou remplace automatiquement l'élément quand il est prêt — la mise en page se stabilise.

### Implémentation

**Ajouter du CSS pour masquer l'élément original** (coller dans le CSS personnalisé du thème ou `<head>`) :

```css
/* Masquer le menu original pendant le chargement de Navi+ */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* réserver de l'espace pour éviter le décalage de mise en page */
}
```

Une fois que Navi+ remplace l'élément, ce CSS n'a plus d'effet — l'élément est supprimé du DOM.

**Avec placeholder de chargement** (avancé) :
```css
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  position: relative;
}
nav.header__inline-menu ul.list-menu::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f5f5f5;
  border-radius: 4px;
}
```

---

## Cas particulier : Menu Slide avec déclencheur CSS Selector

Quand un menu Slide utilise un déclencheur CSS Selector (Méthode 2), l'élément déclencheur original (par exemple le bouton hamburger du thème) reste visible et **fonctionne encore** (ouvre le panneau slide du thème) jusqu'à ce que Navi+ se charge et prenne le contrôle de l'événement.

### Solution A : Masquer l'élément original, utiliser un élément Navi+ comme déclencheur

```css
/* Masquer le bouton hamburger du thème */
#Details-menu-drawer-container {
  display: none !important;
}
```

Puis utilisez la **Méthode 1** (ouvrir depuis un élément Navi+) au lieu de la Méthode 2 — plus propre, pas de flash à gérer.

### Solution B : Estomper l'élément original

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

Ajoutez du JS : quand Navi+ est prêt (événement `naviReady`), supprimez le style de masquage pour restaurer la visibilité de l'élément original.

---

## Notes générales sur la vitesse

- `start.js` se charge avec `async` — ne bloque pas le rendu de la page.
- La configuration JSON du menu est mise en cache sur Cloudflare CDN — chargement rapide depuis le nœud edge le plus proche.
- Pas de rendu côté serveur pour les visiteurs — tout le rendu du menu est côté client depuis du JSON statique.

Pour précharger le script pour une vitesse maximale :
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
