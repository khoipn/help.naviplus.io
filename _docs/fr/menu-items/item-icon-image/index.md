---
description: Comment ajouter des icônes intégrées et des images personnalisées aux éléments de menu dans Navi+, et comment les styliser.
layout: default
permalink: /fr/docs/menu-items/item-icon-image/
title: Icônes & Images
---
# Icônes & Images

Chaque élément peut avoir un élément visuel — soit une **icône intégrée** soit une **image personnalisée**. Vous ne pouvez en utiliser qu'un à la fois, pas les deux.

---

## Icône intégrée

Les icônes sont des symboles vectoriels de la bibliothèque **Remixicon** intégrée. Elles sont nettes à n'importe quelle taille et ne nécessitent pas de téléchargement de fichier.

### Comment ajouter

1. Dans le panneau de modification, cliquez sur le bouton **Icône**.
2. La boîte de recherche d'icônes s'ouvre — tapez un mot-clé (ex. `home`, `cart`, `phone`, `search`).
3. Cliquez sur une icône pour la sélectionner — un aperçu apparaît immédiatement sur l'élément.
4. Cliquez sur **×** pour supprimer l'icône actuelle.

### Quand utiliser des icônes

- Éléments dans une **barre d'onglets** — les icônes sont la façon standard d'étiqueter les onglets.
- Quand vous voulez un aspect propre et cohérent.
- Quand vous n'avez pas d'images personnalisées prêtes.

---

## Image personnalisée

Utilisez votre propre photo, logo ou graphique au lieu d'une icône de bibliothèque.

> **Plan Starter :** Les images personnalisées ne sont pas supportées — utilisez des icônes intégrées à la place.

### Option A — Télécharger depuis la galerie *(Business / Elite)*

1. Cliquez sur le bouton **Image** dans le panneau de modification.
2. Cliquez sur **Galerie** → la boîte de dialogue de téléchargement s'ouvre.
3. Sélectionnez ou téléchargez une image (JPG, PNG, GIF).
4. Confirmez — l'URL de l'image est remplie automatiquement.

### Option B — Coller une URL d'image *(Elite)*

1. Cliquez sur le bouton **Image**.
2. Collez l'URL complète de l'image dans le champ URL.
3. Cliquez sur **Mettre à jour**.

### Conseils sur les images

- Utilisez des images **carrées (1:1)** pour les icônes de barre d'onglets.
- Utilisez des images **paysage** pour les éléments Grande image.
- **PNG avec fond transparent** fonctionne mieux pour les logos et symboles.
- Gardez la taille du fichier petite — les images lourdes ralentissent le menu sur mobile.
- Elite convertit automatiquement les images en WebP et normalise les dimensions.

---

## Disposition d'affichage

Après avoir ajouté une icône ou une image, choisissez comment l'icône/image et le texte sont disposés dans **Layout → Disposition d'affichage** :

| Option | Disposition |
|---|---|
| **Automatique** | Suit le type de menu par défaut |
| **Haut-Bas** | Icône/image en haut, texte en bas |
| **Gauche-Droite** | Icône/image à gauche, texte à droite |
| **Bas-Haut** | Texte en haut, icône/image en bas |
| **Droite-Gauche** | Texte à gauche, icône/image à droite |
| **Icône/Image uniquement** | Icône/image uniquement — texte masqué |
| **Texte uniquement** | Texte uniquement — icône/image masquée |

---

## Styliser l'icône ou l'image

Allez dans **Interface → Style icône / image** pour affiner l'apparence :

| Paramètre | Effet |
|---|---|
| **Couleur de l'icône** | Modifier la couleur vectorielle de l'icône (hex). Ne s'applique pas aux fichiers image. |
| **Taille (px)** | Taille d'affichage de l'icône ou de l'image |
| **Conteneur** | Couleur de fond de la boîte entourant l'icône |
| **Rembourrage (px)** | Espace entre l'icône et sa boîte conteneur |
| **Courbe (px)** | Rayon de coin du conteneur — mettez `50` pour un cercle |

**Exemple — icône blanche dans une boîte bleue ronde :**

```
Couleur icône:  #FFFFFF
Conteneur:      #0066CC
Rembourrage:    10
Courbe:         50
```
