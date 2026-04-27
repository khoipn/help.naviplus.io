---
description: Contrôlez l'apparence de votre menu Navi+ — couleurs, polices, espacements, arrière-plans et icônes grâce à un système de conception hiérarchique.
layout: default
permalink: /docs/design/
title: Conception
---
# Conception

La section **Conception** contrôle toute l'apparence de votre menu : couleurs, typographie, espacements, arrière-plans et icônes. Les paramètres ici s'appliquent à **l'ensemble du menu** en utilisant un système d'héritage à trois niveaux.

---

## Sujets

| # | Sujet | |
|---|---|---|
| 1 | Système d'héritage et mécanisme de remplacement (à lire en premier) | [Aperçu de la conception](/docs/design/design-overview/) |
| 2 | Niveau 1 — Apparence des éléments de menu principal | [Conception Niveau 1](/docs/design/design-level1/) |
| 3 | Niveau 2-3 — Apparence des sous-menus | [Conception Niveau 2-3](/docs/design/design-level2/) |
| 4 | Séparateur — Lignes de séparation | [Conception Séparateur](/docs/design/design-divider/) |

---

## Référence rapide

```
Valeurs par défaut globales (hardcodées)
    ↓
Niveau 1  — s'applique à tous les éléments de menu principal
    ↓  (Niveau 2-3 hérite si vide)
Niveau 2-3 — s'applique aux sous-menus / listes déroulantes
    ↓  (remplace tout)
Par élément — paramètres individuels dans Modifier l'élément
```

**Règle :** Vide = hériter de ci-dessus. Définir une valeur = remplacer.
