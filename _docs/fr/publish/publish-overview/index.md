---
description: Vue d'ensemble des types de menus Navi+ et leurs méthodes de déploiement correspondantes — menus Sticky, Slide et Section.
layout: default
permalink: /fr/docs/publish/publish-overview/
title: Publish overview — Types de menus & méthodes de déploiement
---
# Publish Overview — Types de Menus & Méthodes de Déploiement

Les menus Navi+ sont divisés en 3 groupes de déploiement, déterminés automatiquement par le type de menu (`menu_kind`) :

| Groupe | Types de menus | Méthode |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) ou code `<head>` (Global) → bouton d'activation |
| **Slide** | Context Slide | App Embeds / `<head>` → bouton d'activation → configurer déclencheur |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Insérer/Remplacer (CSS Selector) et/ou App Block (Shopify) |

---

## Deux marchés : Shopify vs. Global

| Étape | Shopify | Global (WordPress, Wix...) |
|---|---|---|
| Code d'intégration | Activer dans **App Embeds** (Theme Editor) — pas besoin de coller du code | Coller `<script>` dans le `<head>` du site |
| Token | Non requis — Shopify OAuth s'en charge | Requis — `token: "NAVI123456"` dans le script |
| App Block | Disponible (Shopify uniquement) — Méthode 2 pour les menus Section | Non disponible |

---

## Flux général

```
1. Concevoir le menu (Design + Setting)
        ↓
2. Ouvrir le modal Publish
        ↓
3. Intégrer le code dans le site web (une seule fois)
   - Shopify : App Embeds dans Theme Editor
   - Global : coller <script> dans <head>
        ↓
4. Activer le bouton "Publier ce menu"
        ↓
5. (Optionnel) Configurer appareil, affichage de page, filtre URL
        ↓
6. Enregistrer → menu en ligne
```

> L'étape 3 (intégration du code) ne doit être effectuée qu'**une seule fois par site web**. Les menus suivants n'ont besoin que des étapes 4 et suivantes.
