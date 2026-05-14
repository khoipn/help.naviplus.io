---
description: Aperçu des types de menu Navi+ et de leurs méthodes de déploiement correspondantes — Sticky, Slide et Section.
lang: fr
layout: default
permalink: /fr/docs/publish/publish-overview/
title: Aperçu de la publication — Types de menu & méthodes de déploiement
---
# Aperçu de la publication — Types de menu & méthodes de déploiement

Navi+ menus sont divisés en 3 groupes de déploiement, déterminés automatiquement par le type de menu (`menu_kind`) :

| Groupe | Types de menu | Méthode |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) ou `<head>` code (Global) → activer le toggle |
| **Slide** | Context Slide | App Embeds / `<head>` → activer le toggle → configurer le déclencheur |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Insérer/Remplacer (CSS Selector) et/ou App Block (Shopify) |

---

## Deux marchés : Shopify vs. Global

| Étape | Shopify | Global (WordPress, Wix...) |
|---|---|---|
| Code d'intégration | Activer dans **App Embeds** (Éditeur de thème) — aucun code à coller nécessaire | Coller `<script>` dans le site web `<head>` |
| Jeton | Pas nécessaire — Shopify OAuth s'en occupe | Requis — `token:
