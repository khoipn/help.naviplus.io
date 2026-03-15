---
description: Navi+ fournit plusieurs options de configuration courantes pour les menus, dans l'onglet **"Design"**, telles que l'arrière-plan, la typographie (famille de police, taille..), et les icônes/images...
lang: fr
layout: default
permalink: /fr/docs/frequently-asked-questions/customize-user-interface-ui/using-built-in-settings-or-custom-css/
title: Utiliser les paramètres intégrés ou CSS personnalisé ?
---
# Utiliser les paramètres intégrés ou CSS personnalisé ?

Navi+ fournit plusieurs options de configuration courantes pour les menus, dans l'onglet **"Design"**, telles que l'arrière-plan, la typographie (famille de police, taille..), et les icônes/images (taille, espacement, courbe...). En utilisant ces paramètres, votre menu peut généralement être stylisé pour correspondre au design global et à la marque de votre site web.

Navi+ prend en charge jusqu'à 3 niveaux. Dans l'onglet **"Design"**, vous ne pouvez configurer le style que pour 2 niveaux, et il n'y a pas d'option directe pour définir la taille de la police ou la taille de l'icône/image pour les menus de niveau 2 et 3. Alors, comment pouvez-vous faire cela ?

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEeUzjyXb0DDSzsPobpqC%2FCSS%201.0.png?alt=media&#x26;token=ab2b0265-e0cd-4777-964d-285e4d947c64" alt=""><figcaption></figcaption></figure>

#### Personnalisation approfondie du menu avec l'outil CSS & Coding

Cependant, si vous ou votre développeur de site web avez une compréhension de base du CSS (feuilles de style), vous pouvez personnaliser l'ensemble du design du menu en utilisant l'outil intégré "**CSS & Coding**" dans Navi+ sans modifier directement vos fichiers de thème. Cela offre plusieurs avantages :

* Vous pouvez séparer les configurations CSS pour les menus Navi+ de votre thème. Cela signifie que la mise à niveau ou le changement de votre thème n'affectera pas vos menus Navi+.
* Navi+ utilise un mécanisme de protection intelligent en ajoutant automatiquement un préfixe (comme `#SF-123456789`) au début de chaque règle CSS. Cela maintient le CSS pour différents menus Navi+ isolé, minimisant le risque de conflits de style.
* Si nécessaire, vous pouvez toujours ajouter du CSS qui affecte l'ensemble du site web directement dans Navi+, bien que cela doive être utilisé avec parcimonie et uniquement lorsque cela est nécessaire.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwIMkFPG3bnaAfvN3fRy4%2FCSS.1.1.png?alt=media&#x26;token=91b34b8a-ae77-4d14-a52d-f30568f8b2c5" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRMPDJmuihVuXKunOmmAZ%2FCSS.1.2.png?alt=media&#x26;token=0ebcac44-dba7-4306-80aa-815323c027b3" alt=""><figcaption></figcaption></figure>

**Remarque importante :** La **zone de texte Stylesheet interne / CSS** ajoute automatiquement un préfixe (par exemple, `#SF-123456789`) avant chaque règle CSS. Cela garantit que votre CSS ne s'applique qu'au menu spécifique en cours de personnalisation et empêche les conflits de style.

#### Quelques études de cas typiques d'utilisation du CSS

1) Pour configurer l'apparence de l'ensemble du menu au niveau le plus élevé, vous pouvez écrire un extrait qui n'est pas du CSS standard mais très simple. Par exemple, l'extrait ci-dessous change l'arrière-plan du menu en rouge. Ajoutez le code suivant à la zone de texte Stylesheet interne / CSS :

```
{
    background: red;
}
```

2) Configurez la taille, la typographie et les couleurs pour chaque niveau d'élément de menu. Ajoutez le code suivant à la zone de texte Stylesheet interne / CSS :

```
// Personnaliser le style de texte des éléments de menu de niveau 1
ul > li.item > .inner .name {
    font-size: 14px;
    color: red;
}

// Personnaliser le style de texte des éléments de menu de niveau 2
ul.children[menulevel="2"] > li.child > .inner .name{
     font-size: 16px; 
     color: blue;
}

// Personnaliser le style de texte des éléments de menu de niveau 3
ul.children[menulevel="3"] > li.child > .inner .name{
     font-size: 13px; 
     color: green;     
}
```

3) Changez l'épaisseur de la police en utilisant `font-weight.` Ajoutez le code suivant à la zone de texte Stylesheet interne / CSS :

```
// Définir l'épaisseur de la police du nom
.name {
  font-weight: 700;
}

// Définir l'épaisseur de la police de la description
.description {
  font-weight: 700;
}
```

4) Ajustez la taille de la flèche. Ajoutez le code suivant à la zone de texte Stylesheet interne / CSS :

```
ul > li.is-parent-top::after {
  font-size: 24px !important;
}
```
