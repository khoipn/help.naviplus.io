---
description: Publiez votre menu Navi+ sur votre site web — activer/désactiver, choisir la méthode d'intégration, configurer la visibilité par appareil et filtrer par URL.
layout: default
permalink: /docs/publish/
title: Publier
---
# Publier

La section **Publier** contrôle l'affichage de votre menu sur votre site web en production : activation/désactivation du menu, choix de la méthode d'intégration, configuration de la visibilité par appareil et filtrage par URL. C'est la dernière étape après la conception — sans enregistrer les paramètres de publication, le menu n'apparaîtra pas.

---

## Sujets

| # | Sujet | |
|---|---|---|
| 1 | Vue d'ensemble des types de menus et méthodes de déploiement | [Publish Overview](/docs/publish/publish-overview/) |
| 2 | Sticky / FAB — App Embeds (Shopify) ou `<head>` (Global) | [Publish Sticky](/docs/publish/publish-sticky/) |
| 3 | Menu Slide — activation par déclencheur | [Publish Slide](/docs/publish/publish-slide/) |
| 4 | Section / Mega / Grid — Insérer/Remplacer et App Block | [Publish Section](/docs/publish/publish-section/) |
| 5 | Filtrer par appareil et mot-clé d'URL | [Publish Filter](/docs/publish/publish-filter/) |
| 6 | Optimiser la vitesse et l'UX après publication | [Publish Optimize](/docs/publish/publish-optimize/) |

---

## Référence rapide

```
Type de menu         Méthode principale
────────────────────────────────────────────────────
Sticky / TABBAR      App Embeds (Shopify) / <head> (Global) + bouton d'activation
Sticky / FAB         App Embeds (Shopify) / <head> (Global) + bouton d'activation
Slide (CONTEXT)      App Embeds / <head> + bouton d'activation + configurer déclencheur
Section (Mega/Grid)  Insérer/Remplacer (CSS Selector) ou App Block (Shopify)
```

**Règle :** Bouton activé = menu en ligne. Bouton désactivé = complètement masqué du site web, pas besoin de supprimer le code d'intégration.
