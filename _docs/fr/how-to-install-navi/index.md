---
description: Installez Navi+ sur Shopify ou tout autre site web, et comprenez les trois façons dont Navi+ déploie des menus — flottants, positionnés et déclenchés.
lang: fr
layout: default
permalink: /fr/docs/how-to-install-navi/
title: Installer Navi+
---
# Installer Navi+

## Étape 1 — Installer

**Shopify :** Installez depuis le [Shopify App Store](https://apps.shopify.com/pronavi-navigation-design). L'application s'ouvre automatiquement après l'installation.

**Autres plateformes** (WordPress, WooCommerce, Wix, Webflow, Squarespace, ou tout site web) :
1. Créez un compte gratuit sur [dash.naviplus.app](https://dash.naviplus.app)
2. Ajoutez le domaine de votre site web
3. Copiez votre extrait d'intégration — vous l'utiliserez à l'étape 2

---

## Étape 2 — Comprendre comment votre menu sera déployé

Navi+ utilise **trois méthodes de déploiement différentes** selon le type de menu. Comprendre cela à l'avance permet de gagner du temps lors de la configuration.

### 1. Menus flottants — Tab Bar & FAB

Tab Bar et FAB sont des **menus collants** qui flottent au-dessus de votre page à une position fixe. Ils ne défilent jamais.

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">📍</div>
    <strong>Position</strong><br>Haut, bas, gauche ou droite de l'écran
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔼</div>
    <strong>Masquer automatiquement lors du défilement</strong><br>Se cache lors du défilement vers le bas, réapparaît lors du défilement vers le haut
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">👇</div>
    <strong>Afficher lors du défilement vers le bas</strong><br>Caché par défaut, apparaît uniquement lorsque l'utilisateur fait défiler vers le bas — économise de l'espace à l'écran
  </div>
</div>

**Un cas d'utilisation courant :** consolider d'autres éléments flottants — WhatsApp, Crisp, Messenger, widgets de chat en direct — dans des éléments de menu Navi+. Cela libère de l'espace à l'écran et élimine le désordre de plusieurs icônes flottantes empilées les unes sur les autres.

### 2. Menus positionnés — Mega Menu & Grid Menu

Mega Menu et Grid Menu doivent être **placés à un emplacement spécifique** sur votre page. Il existe plusieurs façons de le faire :

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🎯</div>
    <strong>Sélecteur CSS</strong><br>Pointez Navi+ vers n'importe quel élément de votre page. Insérez avant, après ou remplacez-le entièrement — c'est ainsi que Mega Menu peut remplacer complètement la navigation existante de votre thème.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🧩</div>
    <strong>Section Shopify</strong><br>Utilisez un bloc d'application dans le personnaliseur de thème pour déposer le menu dans n'importe quelle section de votre mise en page — aucun code nécessaire.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🖥️</div>
    <strong>Code d'intégration</strong><br>Collez un court extrait directement dans le HTML de votre page à l'endroit exact où le menu doit apparaître.
  </div>
</div>

> **Sélecteur CSS** est un moyen d'identifier n'importe quel point sur une page web — c'est ainsi que les navigateurs ciblent des éléments spécifiques. Navi+ l'utilise pour savoir exactement où injecter votre menu. Vous n'avez pas besoin d'écrire de CSS vous-même ; Navi+ dispose d'un sélecteur visuel qui trouve le sélecteur pour vous.

### 3. Menus déclenchés — Slide Menu

Slide Menu **n'apparaît pas de lui-même**. Il reste caché jusqu'à ce que quelque chose le déclenche :

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">☰</div>
    <strong>Élément existant</strong><br>Un utilisateur clique sur quelque chose déjà sur votre page — comme l'icône hamburger de votre thème
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">⚡</div>
    <strong>Déclencheur personnalisé</strong><br>N'importe quel élément de votre page — désigné par son sélecteur CSS
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔗</div>
    <strong>Un autre menu Navi+</strong><br>Un élément de Tab Bar ou FAB qui ouvre le Slide Menu lorsqu'il est cliqué
  </div>
</div>

Cela rend le Slide Menu flexible — il peut remplacer votre navigation existante sans ajouter visuellement quoi que ce soit de nouveau à la page.

---

## Étape 3 — Créez votre premier menu

Une fois installé, rendez-vous sur le tableau de bord et créez votre premier menu. → [Votre premier menu (démarrage rapide de 5 minutes)](/docs/getting-started/your-first-menu/)
