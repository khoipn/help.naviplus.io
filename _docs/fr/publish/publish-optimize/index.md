---
description: Optimisez la vitesse et l'UX après la publication des menus Navi+ — évitez le flash du contenu original lors de l'utilisation des déclencheurs Insérer/Remplacer ou Sélecteur CSS.
lang: fr
layout: default
permalink: /fr/docs/publish/publish-optimize/
title: Publier optimiser — Vitesse & UX
---
# Publier Optimiser — Vitesse & UX

Lorsque vous utilisez **Insérer/Remplacer** (menu Section) ou **déclencheur Sélecteur CSS** (menu Slide), le site Web a besoin d'un bref moment pour charger Navi+. Pendant ce temps, l'élément original (l'ancien menu du thème) est toujours visible — provoquant un **flash** ou un décalage de mise en page.

---

## Quand l'optimisation est-elle nécessaire ?

| Méthode | Besoin d'optimisation ? |
|---|---|
| Sticky / FAB (App Embeds / `<head>`) | Non — le menu est ajouté au DOM, rien n'est remplacé |
| Menu Slide — Méthode 1 (ouvrir depuis un élément Navi+) | Non — le bouton de déclenchement est un élément Navi+ |
| **Menu Slide — Méthode 2 (déclencheur Sélecteur CSS)** | **Oui** — l'élément de déclenchement original reste visible jusqu'à ce que Navi+ se charge |
| **Section — Remplacer** | **Oui** — le menu original s'affiche d'abord, puis est remplacé par Navi+ |
| Section — Insérer Avant/Après | Non requis — deux menus apparaissent côte à côte |

---

## Technique : Masquer l'élément original via CSS

### Comment ça fonctionne

1. Utilisez CSS pour masquer l'élément original immédiatement (avant que Navi+ ne se charge).
2. Optionnellement, montrez un espace réservé de chargement pour éviter le décalage de mise en page.
3. Navi+ supprime ou remplace automatiquement l'élément lorsque prêt — la mise en page se stabilise.

### Mise en œuvre

**Ajoutez CSS pour masquer l'élément original** (collez dans le CSS personnalisé du thème ou `<head>`) :

```css
/* Masquer le menu original pendant le chargement de Navi+ */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* réserver de l'espace pour éviter le décalage de mise en page */
}
```

Une fois que Navi+ remplace l'élément, ce CSS n'a aucun effet — l'élément est supprimé du DOM.

**Avec espace réservé de chargement** (avancé) :
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

## Cas particulier : Menu Slide avec déclencheur Sélecteur CSS

Lorsqu'un menu Slide utilise un déclencheur Sélecteur CSS (Méthode 2), l'élément de déclenchement original (par exemple, le bouton hamburger du thème) est toujours visible et **fonctionne toujours** (ouvre le panneau latéral du thème) jusqu'à ce que Navi+ se charge et remplace l'événement.

### Solution A : Masquer l'élément original, utiliser un élément Navi+ comme déclencheur à la place

```css
/* Masquer le bouton hamburger du thème */
#Details-menu-drawer-container {
  display: none !important;
}
```

Ensuite, utilisez **Méthode 1** (ouvrir depuis un élément Navi+) au lieu de la Méthode 2 — plus propre, pas de flash à craindre.

### Solution B : Faire disparaître l'élément original

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

Ajoutez JS : lorsque Navi+ est prêt (`naviReady` événement), supprimez le style de masquage pour restaurer la visibilité de l'élément original.

---

## Notes générales sur la vitesse

- `start.js` se charge avec `async` — ne bloque pas le rendu de la page.
- La configuration JSON du menu est mise en cache sur Cloudflare CDN — chargement rapide depuis le nœud de bord le plus proche.
- Pas de rendu côté serveur pour les visiteurs — tout le rendu du menu se fait côté client à partir de JSON statique.

Pour précharger le script pour une vitesse maximale :
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
