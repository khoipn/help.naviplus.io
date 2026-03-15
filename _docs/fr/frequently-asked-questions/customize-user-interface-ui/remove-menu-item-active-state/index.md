---
description: Par défaut, Navi+ vérifie l'URL de la page actuelle pour afficher l'état actif sur le menu (en utilisant un fond gris). Cela aide vos clients à naviguer plus facilement.
lang: fr
layout: default
permalink: /fr/docs/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state/
title: Supprimer l'état actif de l'élément de menu ?
---
# Supprimer l'état actif de l'élément de menu ?

Par défaut, Navi+ vérifie l'URL de la page actuelle pour afficher l'état actif sur le menu (en utilisant un fond gris). Cela aide vos clients à naviguer plus facilement.

Cependant, l'état actif n'est pas toujours nécessaire, surtout sur les grands écrans de bureau où il existe d'autres moyens d'indiquer "où vous êtes," comme les fils d'Ariane. Parfois, vous pouvez vouloir supprimer l'état actif pour rendre le menu plus propre.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FAQCfjosVopNC9mXDDbII%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=1167aaa9-c22e-4102-9eb9-6e5ee10dc14a" alt=""><figcaption></figcaption></figure>

Voici comment faire :

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyaI6k6GmW3A5CGipYz1p%2FCSS.1.1.png?alt=media&#x26;token=1ddf87db-9f58-4109-9886-441efd8e8f24" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FXRcp2647QfYG9b0JyS1t%2FCSS.1.2.png?alt=media&#x26;token=742f4ac0-50c1-48ec-bf8f-ccc7d89818cc" alt=""><figcaption></figcaption></figure>

Méthode 1 : Si vous souhaitez l'appliquer uniquement à ce menu, le code CSS est le suivant (collez-le dans la boîte de feuille de style interne / CSS) :

```
ul li.navi-active {
  background: initial;
}
```

Explication : Cela ajoute une règle CSS comme `#SF-123456789 ul li.navi-active { background: initial; }` à la page, s'appliquant uniquement à ce menu (avec embedID `SF-123456789`) et n'affectant pas les autres menus.

Méthode 2 : Si vous souhaitez supprimer tous les effets actifs sur tous les menus Navi+, utilisez le code suivant (collez-le dans la boîte de feuille de style globale / CSS) :

```
.naviItem ul li.navi-active {
  background: initial;
}
```
