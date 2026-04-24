---
description: Navi+ est très rapide. Il est entièrement déployé sur un CDN de premier plan avec une latence très faible (environ 100 ms) et peut servir des millions de clients sans ralentir.
lang: fr
layout: default
permalink: /fr/docs/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-speed-and-improve-the-user-experience-ux/
title: Optimiser la vitesse et améliorer l'expérience utilisateur (UX).
---
# Optimiser la vitesse et améliorer l'expérience utilisateur (UX).

#### Pourquoi devez-vous faire cela ? Navi+ n'est-il pas déjà rapide ?

Navi+ est très rapide. Il est entièrement déployé sur un CDN de premier plan avec une latence très faible (environ 100 ms) et peut servir des millions de clients sans ralentir.

Cependant, Navi+ fonctionne toujours au sein de l'écosystème Shopify. Shopify a ses propres règles de chargement :

1. Shopify priorise le chargement de ses propres ressources en premier.
2. Ensuite, Shopify charge le contenu du thème.
3. Enfin, Shopify charge le contenu des applications, mais pas dans un ordre spécifique.

Cela signifie que si vous utilisez plusieurs applications, Navi+ peut parfois être chargé plus tard que prévu. C'est pourquoi il peut sembler plus lent dans certains cas.

***

### Quelle est ma solution ?

Actuellement, Navi+ a une haute priorité lors du chargement sur les sites Web Shopify. Cependant, il y a encore un certain délai. Nous allons aborder ces problèmes un par un ici :

#### Slide Menu : Ajouter un effet de chargement et verrouiller le sélecteur de déclenchement

Très simple : il suffit d'entrer le sélecteur CSS que vous utilisez pour le Slide Menu dans la section d'intégration de l'application Navi+ (voir l'image ci-dessous).

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

#### Mega Menu (mode de remplacement) : Ajouter un effet de chargement et verrouiller le sélecteur de déclenchement

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

Note :

* Ajoutez le suffixe **(M)** si vous souhaitez qu'il s'applique uniquement sur mobile.
* Ajoutez le suffixe **(D)** si vous souhaitez qu'il s'applique uniquement sur desktop.
* Ne laissez aucun suffixe si vous souhaitez qu'il s'applique sur les deux plateformes.
