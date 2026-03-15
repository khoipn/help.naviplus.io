---
description: 'Navi+ prend entièrement en charge plusieurs langues en deux parties :'
lang: fr
layout: default
permalink: /fr/docs/usage/general/apply-multi-language/
title: Appliquer plusieurs langues
---
# Appliquer plusieurs langues

Navi+ prend entièrement en charge plusieurs langues en deux parties :

**1) Utilisez la syntaxe pour afficher automatiquement la langue correcte.**

Par exemple, imaginez que vous avez une Tabbar Navi+ affichée sur votre site Web avec 3 langues : anglais (par défaut), français et vietnamien. Le code court pour le français est `fr` et pour le vietnamien est `vi`.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F6k6V0wCgNOrg7o30S7PT%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=5eb3293f-9f55-4917-87e1-dacff684ca9e" alt=""><figcaption></figcaption></figure>

Pour afficher l'élément de menu **Home** dans la bonne langue, utilisez cette syntaxe :

```
Home <fr: Maison> <vi: Trang chủ>
```

Lorsque votre Tabbar est affichée, Navi+ vérifiera automatiquement la langue actuelle.

* Si le par défaut est l'anglais, il affiche **Home**.
* Si le français est sélectionné, il affiche **Maison**.
* Si le vietnamien est sélectionné, il affiche **Trang chủ**.

Cela fonctionne pour les champs **description** et **link-to**.

2\) Créer un menu de changement de langue dans Navi+

Navi+ prend en charge une syntaxe spéciale qui vous permet de changer de langue directement à partir de vos éléments de menu.

* **Étape 1 :** (Optionnel) Ajoutez des icônes de drapeau si vous le souhaitez. Vous pouvez télécharger des icônes de drapeau à partir de sites Web comme [Flaticon](https://www.flaticon.com "Flaticon") (Par exemple : <https://www.flaticon.com/authors/flags/rectangular?author_id=1&type=standard>). 
* **Étape 2 :** Utilisez la syntaxe suivante pour changer de langue :

```
open:ChangeLanguage(fr)
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FdTn5Nk2ETEUXO7unkIu9%2FHelp.MenuTree.1.1.2-1.png?alt=media&#x26;token=e1f13362-de09-4438-ad5a-a075a9750b7d" alt=""><figcaption></figcaption></figure>
