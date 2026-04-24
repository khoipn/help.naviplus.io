---
description: Au lieu d'afficher tous les éléments du menu en même temps, **Tab Slide** vous permet d'organiser votre menu en groupes et de placer chaque groupe sous un onglet séparé. Les visiteurs n'ont qu'à t...
lang: fr
layout: default
permalink: /fr/docs/usage/general/tab-slide-group-menu-items-into-tabs/
title: Tab Slide — Regrouper les éléments du menu en onglets
---
# Tab Slide — Regrouper les éléments du menu en onglets

### Qu'est-ce que Tab Slide ?

Au lieu d'afficher tous les éléments du menu en même temps, **Tab Slide** vous permet d'organiser votre menu en groupes et de placer chaque groupe sous un onglet séparé. Les visiteurs n'ont qu'à toucher un onglet pour passer d'un groupe à l'autre — rendant les longs menus propres, compacts et faciles à naviguer.

**À quoi cela ressemble :**

```
┌──────────────────────────────────┐
│  [Shop]  [Blog]  [Deals]         │  ← onglets
│ ──────                           │
│  • T-Shirts                      │
│  • Pants                         │  ← contenu de l'onglet "Shop"
│  • Accessories                   │
└──────────────────────────────────┘
```

Lorsque un visiteur touche "Blog", le contenu change instantanément pour afficher les articles de blog — aucun rechargement de page nécessaire.

***

### Comment configurer Tab Slide

#### Étape 1 — Ajouter un marqueur d'onglet

1. Dans l'arbre du menu, cliquez sur **"Ajouter un élément"**
2. Sélectionnez le type d'élément **Tab Slide** (l'icône d'onglet bleue)
3. Entrez un **nom d'onglet** (par exemple "Shop", "Blog", "Deals")
4. Cliquez sur **Ajouter**

> Le marqueur d'onglet apparaîtra dans l'arbre du menu avec un badge bleu **\[Tab\]**.

#### Étape 2 — Ajouter du contenu à l'onglet

Tous les éléments du menu placés **directement en dessous** d'un marqueur d'onglet appartiennent à cet onglet.

```
[Tab] Shop           ← Marqueur d'onglet (créé à l'étape 1)
  T-Shirts           ← appartient à l'onglet "Shop"
  Pants              ← appartient à l'onglet "Shop"
  Accessories        ← appartient à l'onglet "Shop"
[Tab] Blog           ← prochain marqueur d'onglet
  Latest News        ← appartient à l'onglet "Blog"
  Style Guides       ← appartient à l'onglet "Blog"
```

#### Étape 3 — Ajouter plus d'onglets (optionnel)

Répétez les étapes 1–2 pour chaque onglet que vous souhaitez. Il n'y a pas de limite au nombre d'onglets.

***

### Terminer le groupe d'onglets

Parfois, vous souhaitez que certains éléments soient **toujours visibles** — en dehors de tout onglet — par exemple un lien "Contact" ou "Search" en bas.

Pour ce faire :

1. Ajoutez un nouvel élément **Tab Slide**
2. Dans le panneau d'édition, cochez **"Fin du groupe d'onglets"**
3. Tous les éléments en dessous de ce marqueur s'afficheront comme des éléments de menu réguliers

```
[Tab] Shop
  T-Shirts, Pants...
[Tab] Blog
  News, Guides...
[End of Tab group]   ← marque la fin des onglets
  Contact Us         ← toujours visible, pas à l'intérieur d'un onglet
  About              ← toujours visible
```

***

### Personnaliser chaque onglet

Chaque marqueur d'onglet peut être stylisé indépendamment :

| Option         | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| **Nom de l'onglet**   | Le texte affiché sur le bouton d'onglet                                 |
| **Icône**       | Une petite icône à côté du nom (de la bibliothèque d'icônes)            |
| **Image**      | Une image au lieu d'une icône                                      |
| **Mise en page**     | Icône au-dessus/en dessous/à gauche/à droite du nom, icône seulement, ou texte seulement |
| **Couleur du texte** | Couleur personnalisée pour chaque étiquette d'onglet                                  |
| **Taille du texte**  | Taille de police personnalisée pour chaque étiquette d'onglet                              |

**Astuce :** Laisser la mise en page sur "Automatique" fonctionne très bien pour la plupart des menus — l'onglet s'adaptera pour avoir le meilleur aspect.

***

### Quels types de menus prennent en charge Tab Slide ?

Tab Slide fonctionne avec **tous les types de menus Navi+** :

* ✅ Tab Bar
* ✅ Slide Menu
* ✅ Mega Menu
* ✅ FAB Menu
* ✅ Grid menu

Il fonctionne également à **n'importe quel niveau de menu** — pas seulement le menu principal, mais aussi à l'intérieur des sous-menus (niveau 2, niveau 3).

***

### Questions Fréquemment Posées

**Le marqueur d'onglet apparaîtra-t-il comme un élément de menu ?** Non. Les marqueurs d'onglet sont invisibles pour les visiteurs — ils ne créent que le bouton d'onglet. Vos éléments de menu réels sont ceux qui apparaissent à l'intérieur de chaque onglet.

**Puis-je ajouter une icône à un onglet ?** Oui. Modifiez le marqueur d'onglet comme n'importe quel autre élément et choisissez une icône dans la bibliothèque, ou téléchargez une image personnalisée.

**Quel onglet est affiché en premier ?** Le premier onglet est toujours sélectionné par défaut lorsque le menu s'ouvre.

**Y a-t-il une limite au nombre d'onglets que je peux avoir ?** Il n'y a pas de limite stricte, mais nous recommandons de le limiter à 3–6 onglets pour la meilleure expérience sur les écrans mobiles.

**Puis-je utiliser Tab Slide à l'intérieur d'un sous-menu ?** Oui. Placez des marqueurs d'onglet à l'intérieur de n'importe quel sous-menu et le comportement des onglets fonctionnera à ce niveau.

---

# Instructions pour l'agent : Interroger cette documentation

Si vous avez besoin d'informations supplémentaires qui ne sont pas directement disponibles sur cette page, vous pouvez interroger la documentation dynamiquement en posant une question.

Effectuez une requête HTTP GET sur l'URL de la page actuelle avec le paramètre de requête `ask` :

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/usage/general/tab-slide-group-menu-items-into-tabs.md?ask=<question>
```

La question doit être spécifique, autonome et rédigée en langage naturel.
La réponse contiendra une réponse directe à la question et des extraits et sources pertinents de la documentation.

Utilisez ce mécanisme lorsque la réponse n'est pas explicitement présente dans la page actuelle, que vous avez besoin de clarification ou de contexte supplémentaire, ou que vous souhaitez récupérer des sections de documentation connexes.
