---
description: Certains méga menus peuvent être très hauts. Dans ce cas, l'expansion d'un menu de niveau 3 peut ne pas laisser suffisamment d'espace. Lorsque cela se produit, vous devez épingler le menu de niveau 3 en haut à la place.
lang: fr
layout: default
permalink: /fr/docs/frequently-asked-questions/customize-user-interface-ui/align-level-3-submenu-in-mega-menu/
title: Aligner le sous-menu de niveau 3 dans le méga menu ?
---
# Aligner le sous-menu de niveau 3 dans le méga menu ?

Certains méga menus peuvent être très hauts. Dans ce cas, l'expansion d'un menu de niveau 3 peut ne pas laisser suffisamment d'espace. Lorsque cela se produit, vous devez épingler le menu de niveau 3 en haut à la place.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fro68elhDmY0dYZVM33lW%2F1.1.png?alt=media&#x26;token=f8dc87a7-e10d-4ac7-a398-a4b5220ce72c" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FX4M1o8bgaNDF6VYTtini%2F1.2.png?alt=media&#x26;token=e2d65a92-418c-4c4a-bff7-51a5b9044d41" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F2tyR71IfHrMmPmZN0Ewi%2F1.3.png?alt=media&#x26;token=cdd6854c-2782-40ec-a959-a74d576eb177" alt=""><figcaption></figcaption></figure>

Collez-le dans la boîte de Styles internes / CSS :

```
ul.children[menulevel="2"] li.child.is-parent.menu-expand {
  position: initial;
}

ul.children[menulevel="2"] li.child.is-parent.menu-expand ul.children[menulevel="3"]{
  top: 0px;
}
```
