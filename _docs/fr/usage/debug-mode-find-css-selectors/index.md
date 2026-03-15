---
description: Le mode débogage est un ensemble d'outils léger intégré à la bibliothèque Navi+ qui vous aide à travailler plus efficacement avec les menus Navi+.
lang: fr
layout: default
permalink: /fr/docs/usage/debug-mode-find-css-selectors/
title: Mode débogage - Trouver des sélecteurs CSS
---
# Mode débogage - Trouver des sélecteurs CSS

Le mode débogage est un ensemble d'outils léger intégré à la bibliothèque Navi+ qui vous aide à travailler plus efficacement avec les menus Navi+.

### 1. Trouver des sélecteurs CSS

Pour activer le mode débogage, utilisez le format d'URL suivant :\
`yourdomain.com#navidebug-on`

Votre site web passera en mode débogage Navi+. Survolez différentes zones du site web pour voir leurs sélecteurs CSS correspondants. Déplacez votre curseur pour localiser précisément la zone cible souhaitée.

Veuillez prêter attention aux raccourcis clavier ci-dessous pour travailler plus efficacement.

**Raccourci 1.** Copier un sélecteur CSS

* Appuyez sur **⌘+C** sur MacOS ou **Ctrl+C** sur Windows pour copier le sélecteur CSS sélectionné.

Vous pouvez ensuite le coller dans les paramètres du **Publish Menu** pour :

* Mega Menu / Grid Menu : pour insérer le menu avant, après ou remplacer le sélecteur CSS cible
* Slide Menu : pour déclencher le slide menu lorsque le sélecteur CSS cible est cliqué ou tapé

**Raccourci 2.** Naviguer entre les niveaux de sélecteurs

* Appuyez sur [↑/←], ou Backspace pour passer à un sélecteur de niveau parent
* Appuyez sur [↓/→] pour passer à un sélecteur de niveau enfant

**Conseils importants :** Dans la plupart des cas, vous ne trouverez pas immédiatement le sélecteur CSS parfait. D'après l'expérience, il est souvent plus facile de :

1. Commencer par sélectionner un sélecteur de niveau enfant
2. Puis remonter de 1 à 2 niveaux parents (un surlignage visuel apparaîtra sur votre site web)
3. Copier le sélecteur en utilisant ⌘+C (Ctrl+C)
4. Le coller dans la configuration du menu et tester

Parfois, vous devrez peut-être répéter ce processus plusieurs fois lors de l'insertion, du remplacement ou de la liaison d'événements de menu aux sélecteurs CSS afin d'obtenir l'expérience utilisateur souhaitée.

#### 1.1. Trouver le sélecteur CSS sur Desktop

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FlstMiQTp0fQqvJ89jXhD%2FFrame%20210.webp?alt=media&#x26;token=95d6a152-b58b-4894-9cdc-150200fae5e1" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fuc7fc7CicJcQ3XNvwDVA%2FFrame%20211.webp?alt=media&#x26;token=84a5c3ad-04bf-4b4e-9c8c-bc334f7f4646" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FuE3IlMcHedAfwQR98YhM%2FFrame%20212.webp?alt=media&#x26;token=e02c2aa2-0792-4811-8005-46a5b7b0b9fe" alt=""><figcaption></figcaption></figure>

#### 1.2. Trouver le sélecteur CSS sur Mobile

Pour trouver un sélecteur CSS sur mobile, activez le mode Mobile (Responsive) dans votre navigateur.\
Ensuite, faites un clic droit n'importe où sur la page et sélectionnez :

* Chrome : Inspecter
* Safari : Inspecter l'élément
* Firefox : Inspecter
* Edge : Inspecter / Inspecter l'élément

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FK7F58NVYCerBTqG9EWjB%2FFrame%20213.webp?alt=media&#x26;token=2f2c059a-1346-446d-a19f-e2998050791a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FsNvXhBMniymbZ1tD9c4p%2FFrame%20214.webp?alt=media&#x26;token=257f082d-ff6b-4ce0-8eaa-6160a697a67e" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FJAZm1dPEZrfeqtpNXA8O%2FFrame%20215.webp?alt=media&#x26;token=2847a4ef-e298-4986-9367-36a6abf914d8" alt=""><figcaption></figcaption></figure>
