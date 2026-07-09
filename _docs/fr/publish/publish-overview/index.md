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

| Étape | Shopify | Global (WordPress, Squarespace, Webflow...) |
|---|---|---|
| Code d'intégration | Activer dans **App Embeds** (Éditeur de thème) — aucun code à coller nécessaire | Coller `<script>` dans le site web `<head>` |
| Jeton | Pas nécessaire — Shopify OAuth s'en occupe | Requis — `token: "NAVI123456"` dans le script |
| App Block | Disponible (Shopify uniquement) — Méthode 2 pour les menus Section | Non disponible |

> **Wix :** Si vous avez installé l'application Navi+ depuis le Wix App Market, l'intégration est automatique — Navi+ injecte `start.js` pour vous via le script intégré Wix, vous **ne collez aucun code**. L'authentification et la facturation sont gérées via Wix. Seules les plateformes auto-gérées (WordPress, Squarespace, Webflow, Magento, sites personnalisés) ont besoin du collage manuel de `<script>` ci-dessus.

---

## Flux général

\`\`\`
1. Concevoir le menu (Design + Paramètre)
        ↓
2. Ouvrir la modalité Publier
        ↓
3. Intégrer le code dans le site web (une seule fois)
   - Shopify : App Embeds dans l'Éditeur de thème
   - Global : coller <script> dans <head>
        ↓
4. Activer le toggle "Publier ce menu"
        ↓
5. (Optionnel) Configurer l'appareil, l'affichage de la page, le filtre d'URL
        ↓
6. Enregistrer → le menu est en direct
\`\`\`

> L'étape 3 (intégration du code) ne doit être effectuée qu'**une seule fois par site web**. Les menus suivants n'ont besoin que des étapes 4 et suivantes.
