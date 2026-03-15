---
description: Ici, vous trouverez des guides sur la façon de connecter Navi+ avec d'autres applications (comme les outils de chat, la fidélité, etc.). Vous pouvez les ajouter en tant qu'éléments de menu, ouvrir des applications directement depuis Nav...
lang: fr
layout: default
permalink: /fr/docs/integrations/integrating-navi-with-your-website-and-external-apps/
title: Intégration de Navi+ avec votre site web et des applications externes
---
# Intégration de Navi+ avec votre site web et des applications externes

Ici, vous trouverez des guides sur la façon de connecter Navi+ avec d'autres applications (comme les outils de chat, la fidélité, etc.). Vous pouvez les ajouter en tant qu'éléments de menu, ouvrir des applications directement depuis Navi+, et vous assurer que tout fonctionne ensemble sans chevauchement sur votre site.

### 1. Intégrer d'autres applications collantes dans un seul élément de menu Navi+

Navi+ consolide plusieurs applications (Chat Box, Loyalty, Social Proof, Promo bars, etc.) en éléments de menu, gardant votre site web propre et évitant les chevauchements—particulièrement précieux sur les appareils mobiles avec un espace d'écran limité.\Pour y parvenir, suivez ces 2 étapes :

• Étape 1 : Masquer les icônes des applications collantes à l'aide de CSS. Voir les détails ici\• Étape 2 : Utilisez JavaScript pour les éléments de menu afin que cliquer dessus ouvre les panneaux d'application respectifs.

Voir l'exemple d'intégration de chat Tidi. C'est une configuration relativement avancée, alors veuillez contacter le support de Navi+ pour obtenir de l'aide.

### 2. Déclencheurs JavaScript – interagir avec des applications externes

Navi+ permet d'exécuter des fonctions JavaScript à partir d'éléments de menu lorsque les utilisateurs cliquent dessus (javascript:Function). Voir l'exemple d'intégration de chat Tidi pour comprendre comment utiliser deux fonctions JavaScript pour intégrer le chat Tidio en tant qu'élément de menu Navi+ :

1. Masquer l'icône Tidio : Une fonction globale qui attend que Tidio soit rendu, puis la masque
2. openTidio() : Ouvre le panneau de chat de Tidio lorsque les utilisateurs cliquent sur l'élément de menu "Chat with us"

Navi+ vous permet également de définir les classes et les attributions d'attributs (même sous la forme id="menu-item-1") pour permettre l'interaction avec d'autres applications ou du code JavaScript. Vous pouvez utiliser des fonctions JavaScript pour accéder directement aux éléments de menu via des classes ou des attributs, par exemple : pour créer un tutoriel guidé.

### 3. Personnaliser l'interface Navi+ avec du CSS externe

Chaque menu Navi+ est défini par un élément div avec id="SF-123456789" (id intégré). Consultez la structure HTML/CSS d'un menu Navi+ ici pour écrire du code CSS pour personnaliser l'interface du menu.\Par exemple, pour changer la couleur d'un élément de menu de niveau 2, vous pouvez écrire le code CSS suivant :

`#SF-123456789 ul li ul.children li .name { color: red; }`

Navi+ vous permet également de définir les classes et les attributions d'attributs (même sous la forme id="menu-item-1") pour permettre l'interaction avec d'autres applications ou du code JavaScript. Vous pouvez styliser chaque élément de menu en utilisant des noms de classes ou des attributs.

### 4. Communication entre les menus Navi+

À partir d'un élément de menu Navi+, vous pouvez appeler pour ouvrir un autre menu Slide Navi+ en utilisant la syntaxe : `open:NaviMenu.`\Avec cette syntaxe, vous pouvez étendre indéfiniment les niveaux de menu en faisant appel à d'autres menus slide.

### 5. Ouvrir un menu Slide de n'importe où sur votre site web

Avec les menus slide, en plus de les ouvrir via des éléments de menu d'autres menus Navi+, vous pouvez également déclencher un menu slide Navi+ en appelant la fonction JavaScript : `naviman.openNaviMenu()`.\Par exemple : Créez un bouton flottant en utilisant HTML et CSS, puis assignez son action de clic pour ouvrir un menu Slide Navi+ – vous aurez instantanément un menu au look professionnel.

### 6. Simuler des actions utilisateur (clic, focus, défilement, etc.)

Navi+ fournit plusieurs fonctions (déclenchées lorsqu'un élément de menu est cliqué) :

* `open:clickTo` pour simuler un clic sur un sélecteur CSS HTML. Cela est extrêmement utile pour permettre au menu Navi+ de déclencher des menus hamburger par défaut, des outils de recherche, des panneaux de panier, des menus déroulants de langue... ou d'activer des outils de chat d'autres applications.
* `open:focusTo` pour simuler le focus sur un sélecteur CSS HTML. Cela est extrêmement utile pour simuler des clics sur des outils de recherche ou des champs d'abonnement par e-mail
* `scroll:Top`, `scroll:Bottom`, `scroll:OnPage` pour faire défiler la page web vers la zone souhaitée. Cela est extrêmement utile lorsque vous souhaitez faire défiler vers une section cible sur la page au lieu de naviguer vers une autre page.

### 7. Pour partager et améliorer l'engagement sur le site

Navi+ fournit plusieurs fonctions (déclenchées lorsqu'un élément de menu est cliqué) :

* `open:ShareMe` pour partager le lien du site web
* `share:CopyUrl` pour copier l'URL actuelle dans le presse-papiers de l'appareil
* `share:Facebook` pour partager l'URL actuelle sur Facebook
* `share:Tweet` pour partager l'URL actuelle sur Twitter (X)

### 8. Intégration avec d'autres applications de périphériques (comme le téléphone)

Navi+ fournit plusieurs fonctions (déclenchées lorsqu'un élément de menu est cliqué) :

* `tel:+[Country code][Phone]` pour appeler le numéro
* `sms:+[Country code][Phone]?body=[Text]` pour envoyer un message SMS au numéro avec un contenu configuré (optionnel)
* `mailto:[Address]` pour envoyer un e-mail
* `https://m.me/[YourName]` pour discuter avec votre Messenger Facebook
* `https://wa.me/[Phone]` pour discuter avec votre WhatsApp
* `https://lin.ee/[line-code]` pour discuter avec votre Line
* `https://zalo.me/+[Country code][Phone]` pour discuter avec votre Zalo

### 9. Pour Shopify uniquement

Navi+ fournit plusieurs fonctions (déclenchées lorsqu'un élément de menu est cliqué) :

* `open:ChangeLanguage` pour changer de langue si le site web utilise Shopify
* Shopify Inbox : Masquer l'icône Shopify Inbox et l'intégrer dans le menu Navi+ en tant qu'élément de menu qui ouvre le panneau de chat au clic. Voir les détails ici
* Ouvrir le menu hamburger ou le panier, le panneau de recherche : Voir les détails ici

### Vous ne le voyez pas dans la liste ?

N'hésitez pas à m'envoyer votre demande d'intégration. Je suis heureux d'aider, et cela soutient également la croissance de Navi+.
