---
description: Comment ajouter des icônes intégrées et des images personnalisées aux éléments de menu dans Navi+, et comment les styliser.
lang: fr
layout: default
permalink: /fr/docs/menu-items/item-icon-image/
title: Icônes & Images
---
# Icônes & Images

Chaque élément peut avoir un élément visuel — soit une **icône intégrée** soit une **image personnalisée**. Vous ne pouvez en utiliser qu'un à la fois, pas les deux.

---

## Icône intégrée

Les icônes sont des symboles vectoriels de la bibliothèque **Remixicon** intégrée. Elles sont nettes à n'importe quelle taille et ne nécessitent aucun téléchargement de fichier.

### Comment ajouter

1. Dans le panneau Modifier l'élément, cliquez sur le bouton **Icône**.
2. La boîte de recherche d'icônes s'ouvre — tapez un mot-clé (par exemple `home`, `cart`, `phone`, `search`).
3. Cliquez sur une icône pour la sélectionner — un aperçu apparaît immédiatement sur l'élément.
4. Cliquez sur **×** pour supprimer l'icône actuelle.

### Quand utiliser des icônes

- Éléments dans une **Tab Bar** — les icônes sont le moyen standard d'étiqueter les onglets.
- Lorsque vous souhaitez un look propre et cohérent.
- Lorsque vous n'avez pas d'images personnalisées prêtes.

---

## Image personnalisée

Utilisez votre propre photo, logo ou graphique au lieu d'une icône de bibliothèque.

> **Gói Starter :** Les images personnalisées ne sont pas prises en charge — utilisez plutôt des icônes intégrées.

### Option A — Télécharger depuis la galerie *(Business / Elite)*

1. Cliquez sur le bouton **Image** dans le panneau Modifier l'élément.
2. Cliquez sur **Galerie** → la boîte de dialogue de téléchargement s'ouvre.
3. Sélectionnez ou téléchargez une image (JPG, PNG, GIF).
4. Confirmez — l'URL de l'image est remplie automatiquement.

### Option B — Coller une URL d'image *(Elite)*

1. Cliquez sur le bouton **Image**.
2. Collez l'URL complète de l'image dans le champ URL.
3. Cliquez sur **Mettre à jour**.

### Conseils sur les images

- Utilisez des images **carrées (1:1)** pour les icônes de la Tab Bar.
- Utilisez des images **paysage** pour les éléments Big Image.
- **PNG avec fond transparent** fonctionne le mieux pour les logos et les symboles.
- Gardez la taille du fichier petite — les images lourdes ralentissent le menu sur mobile.
- Elite convertit automatiquement les images en WebP et normalise les dimensions.

---

## Disposition de l'affichage

Après avoir ajouté une icône ou une image, choisissez comment l'icône/l'image et le texte sont disposés dans **Disposition → Disposition de l'affichage** :

| Option | Disposition |
|---|---|
| **Automatique** | Suit le type de menu par défaut |
| **De haut en bas** | Icône/image en haut, texte en dessous |
| **Gauche-Droite** | Icône/image à gauche, texte à droite |
| **Bas-Haut** | Texte en haut, icône/image en dessous |
| **Droite-Gauche** | Texte à gauche, icône/image à droite |
| **Icône/Image uniquement** | Icône/image uniquement — texte caché |
| **Texte uniquement** | Texte uniquement — icône/image cachée |

---

## Styliser l'icône ou l'image

Allez à **Interface → Style d'icône / d'image** pour affiner l'apparence :

| Paramètre | Effet |
|---|---|
| **Couleur de l'icône** | Change la couleur vectorielle de l'icône (hex). Ne s'applique pas aux fichiers image. |
| **Taille (px)** | Taille d'affichage de l'icône ou de l'image |
| **Conteneur** | Couleur de fond de la boîte entourant l'icône |
| **Marge (px)** | Espace entre l'icône et sa boîte de conteneur |
| **Courbe (px)** | Rayon de coin du conteneur — définissez `50` pour un cercle |

**Exemple — icône blanche dans une boîte bleue ronde :**

```
Couleur de l'icône :  #FFFFFF
Conteneur :   #0066CC
Marge :     10
Courbe :       50
```
