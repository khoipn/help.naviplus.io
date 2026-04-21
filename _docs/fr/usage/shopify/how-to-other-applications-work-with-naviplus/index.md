---
description: Dans de nombreux cas, vous devrez utiliser plusieurs applications intégrées sur votre site Web. Cela peut poser un problème d'utilisabilité habituel, car les éléments de l'interface peuvent se chevaucher (s...
lang: fr
layout: default
permalink: /fr/docs/usage/shopify/how-to-other-applications-work-with-naviplus/
title: Prévenir les menus Navi+ de se chevaucher avec d'autres applications
---
# Prévenir les menus Navi+ de se chevaucher avec d'autres applications

### Pourquoi cela sera-t-il un problème ?

Dans de nombreux cas, vous devrez utiliser plusieurs applications intégrées sur votre site Web. Cela peut poser un problème d'utilisabilité habituel, car les éléments de l'interface peuvent se chevaucher (voir l'image ci-dessous). Un exemple simple est lorsque vous utilisez fréquemment une application de chat comme [Shopify Inbox ](https://www.shopify.com/vn/inbox "Shopify Inbox ") ou WhatsApp. En général, ces applications de chat occupent une position proéminente dans le coin inférieur droit de l'écran du téléphone. Lorsque vous décidez d'utiliser Navi+ pour améliorer considérablement la navigation sur votre site Web, ce problème se pose. Voici quelques façons de résoudre ce problème.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fdccbwi5aXf4XvOxYGIvU%2FFrame%201.png?alt=media&#x26;token=c953f4d5-442c-486d-9493-90490ffd309f" alt=""><figcaption></figcaption></figure>

### Solution 1 : Ajuster la position des boutons flottants (Démo avec Shopify inbox)

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F13ShtYFy9yreGicTmiOm%2FFrame%202.png?alt=media&#x26;token=13a96b69-4907-4ad5-88b5-b41dcc95c35d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FmYVravYrInpp21SPJuKm%2FFrame%203.png?alt=media&#x26;token=9d4c2fa0-2806-4b19-8dce-c403fc582315" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Feuh272YZES4OjBSMok8s%2FFrame%204.png?alt=media&#x26;token=d6b6f9f8-aa4e-4539-a29c-6ae39cbcd344" alt=""><figcaption></figcaption></figure>

### Solution 2 : Configurer le rembourrage du menu Navi+ pour éviter le chevauchement avec les applications.

Le rembourrage et la marge sont des outils largement utilisés et puissants dans la technologie, en particulier en HTML5/CSS. En définissant le rembourrage en fonction de la position de cette zone, vous pouvez éviter le chevauchement des applications. Vous pouvez également définir la distance entre le menu Navi+ et les bords en ajustant la marge.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fo0hlCj8BSJLa9WBqrLo8%2FFrame%205.png?alt=media&#x26;token=dfe6c2d9-ea6c-4b97-bd55-8ec33ef7d729" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fkj87WVMtDYGKHxPBAK91%2FFrame%206.png?alt=media&#x26;token=ced78c24-1797-422a-9662-45094a5cee12" alt=""><figcaption></figcaption></figure>

### Solution 3 : Remplacer les barres inférieures par des barres supérieures/barres de support ou des boutons d'action flottants

Bien que la barre inférieure soit l'outil le plus efficace pour guider les utilisateurs, utilisé par presque toutes les applications mobiles natives, ou le web mobile (plus lent), parfois vous voudrez peut-être placer votre menu Navi+ à un endroit différent, comme en haut (Barre supérieure), à droite/gauche (Barre de support), flottant au-dessus de l'interface (bouton d'action flottant). Ou vous pouvez les combiner pour la meilleure efficacité de navigation. Découvrez les options suivantes de Navi+ pour comprendre comment le faire, parfois cela ne prend que 1 seconde, et vous résoudrez votre problème.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FiCuFsYdJSucFduHw9zJO%2FFrame%207.png?alt=media&#x26;token=1be98c44-27c3-489d-9e6d-87e1a95fafb7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FbE4JHbm6ZYI6C3uF0X9j%2FFrame%208.png?alt=media&#x26;token=5c85d3bd-5023-4851-82aa-9288f9294d1c" alt=""><figcaption></figcaption></figure>

### Z-index - prioriser l'ordre d'affichage des "applications flottantes"

La propriété z-index spécifie l'ordre de pile d'un élément. Un élément avec un ordre de pile plus élevé est toujours devant un élément avec un ordre de pile plus bas. Voir l'image ci-dessous pour en savoir plus.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyMHcqutHWOUtEEYqMDn6%2Fz-index1.png?alt=media&#x26;token=fb6a0100-e337-4115-9212-a8c8d32888ef" alt=""><figcaption></figcaption></figure>

Le z-index par défaut pour le menu Navi+ est fixé à 50 pour tous, car nous 'ne nous considérons pas plus importants que d'autres applications', mais 50 est également le nombre suffisant pour bien s'afficher sur tous les thèmes Shopify. Parfois, vous devrez peut-être ajuster le z-index de votre menu Navi+ dans les cas suivants :

1. Lorsque vous utilisez plusieurs menus Navi+ sur une page et que vous souhaitez qu'ils se chevauchent, mais qu'un menu apparaît au-dessus des autres.
2. Lorsque d'autres objets/applications chevauchent votre menu Navi+, auquel cas, le z-index résoudra tout.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg93TvrzCEEKdFZvdmdbh%2Fz-index2.png?alt=media&#x26;token=1289e3a7-6ea1-44ec-a284-8964ac4b6f35" alt=""><figcaption></figcaption></figure>

Il y a une question difficile : quel z-index devez-vous configurer pour votre menu Navi+ afin d'éviter le chevauchement comme souhaité ? Si vous avez plusieurs menus Navi+, vous pouvez les organiser selon vos préférences sans vous inquiéter – c'est pourquoi nous construisons Navi+ pour être aussi polyvalent que possible pour les 'applications flottantes' actuelles sur Shopify.

Si vous devez configurer le z-index pour votre menu Navi+ afin de gérer les conflits avec d'autres applications, vous pouvez rechercher votre z-index d'un minimum de 0 à un maximum de 2 147 483 647. Cela peut sembler un peu difficile, mais c'est le moyen le plus simple et le meilleur, car le z-index n'affectera pas l'affichage de votre interface en dehors du problème auquel vous êtes confronté. Si vous êtes expérimenté avec le débogage CSS et HTML – c'est facile, il suffit d'activer le mode d'inspection pour voir quel z-index l'application en conflit a. Ou, le moyen le plus simple, cliquez simplement sur l'icône de chat Crisp pour discuter avec un conseiller Navi+ ; nous serions heureux de vous aider avec ce problème.
