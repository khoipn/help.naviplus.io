---
description: 'Étape 1 : Cliquez sur Boutique en ligne, puis cliquez sur Thèmes. Conseils : Faites un clic droit sur Boutique en ligne et sélectionnez « Ouvrir le lien dans un nouvel onglet » pour gagner du temps.&'
lang: fr
layout: default
permalink: /fr/docs/usage/slide-menu-hamburger-menu/publishing-on-shopify/
title: Publication sur Shopify
---
# Publication sur Shopify

### Étape 2 : (Shopify) Publiez le menu sur votre site web.

#### 2.1. Activez Navi+ sur les intégrations d'applications

Étape 1 : Cliquez sur Boutique en ligne, puis cliquez sur Thèmes. Conseils : Faites un clic droit sur Boutique en ligne et sélectionnez « Ouvrir le lien dans un nouvel onglet » pour gagner du temps.&#x20;

Étape 2 : Sélectionnez le thème où vous souhaitez publier le menu.  Cliquez : **Personnaliser**

* Si votre site web est nouveau et n'a pas encore d'utilisateurs, n'hésitez pas à publier le menu sans souci—vous pouvez facilement l'activer ou le désactiver à tout moment sans affecter les visiteurs.
* Si votre site web a déjà un trafic régulier, soyez plus prudent. La meilleure pratique consiste à créer un **Thème dupliqué** et à tester Navi+ sur cette version d'abord.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

Étape 3 : Allez dans les intégrations d'applications, trouvez « Navi+ sur toutes les pages », et activez-le.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

Étape 4 : N'oubliez pas de cliquer sur « Enregistrer » pour appliquer les modifications.

Après ces 4 étapes, Navi+ a été installé sur votre site web et est prêt à s'afficher. Cependant, le processus n'est pas encore complet. Retournez à l'onglet de l'application Navi+ pour réellement activer **Publier le menu**.

#### 2.2. Sélectionnez les paramètres d'affichage et publiez le menu.

Étape 1 : Cliquez sur le bouton **Publier sur le site web**.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

Étape 2 : Activez le commutateur "Publier le menu (visible uniquement lorsqu'il est ouvert par l'utilisateur)".&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FhSDziWrg4Jxr9bZ9jB4j%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=3c39339c-fe75-4653-86e7-411318cf506d" alt=""><figcaption></figcaption></figure>

Étape 3 : Sélectionnez la méthode d'affichage&#x20;

**Méthode 1 : Ouvrez ce menu à partir d'un autre élément de menu Navi+ en utilisant la syntaxe open:NaviMenu**

Cette méthode vous permet d'ouvrir un menu déroulant lorsque l'utilisateur clique ou touche un élément de menu d'un autre menu Navi+ (par exemple : sur une tabbar, un FAB dans le coin inférieur de l'écran, ou un mega menu). Les principaux objectifs de cette méthode :

<details><summary>Objectif 1 : Amélioration de la visibilité et de l'expérience utilisateur en montrant la carte du site complète dans le menu déroulant tout en restant facile d'accès.</summary>
<p>Le menu déroulant est idéal pour afficher votre carte du site complète grâce à son grand espace et sa mise en page flexible, ce qui le rend parfait pour montrer l'ensemble du catalogue de produits, des liens vers des pages clés, des blogs, des outils de support, etc. Cependant, le menu déroulant est souvent moins visible par défaut. Pour améliorer la découvrabilité, vous pouvez utiliser un autre menu Navi+ (comme une tabbar) pour présenter vos liens les plus importants et reconnaissables, et placer un élément de menu mis en avant qui déclenche le menu déroulant. Cela garantit une meilleure visibilité et un engagement utilisateur pour le menu déroulant.</p>
</details>

<details><summary>Objectif 2 : <strong>Profondeur de menu illimitée avec une structure de menu large et flexible (Uniquement Navi+)</strong></summary>
<p>Au lieu d'afficher une fenêtre contextuelle avec un espace limité lorsqu'un élément de menu est cliqué, vous pouvez ouvrir un autre menu déroulant avec trois niveaux et plusieurs façons de présenter l'information. Cela peut être répété pour d'autres éléments de menu—ou même pour le même menu déroulant—vous permettant de créer une profondeur pratiquement illimitée pour vos menus Navi+.</p>
</details>

**Méthode 2 : Lorsqu'un élément UI (défini par un sélecteur CSS tel que #id
_of
_element ou .class
_name) est cliqué ou touché, ce menu sera affiché.**

C'est sans doute la meilleure et la plus couramment utilisée méthode avec le Slide Menu.\
Dans ce guide, nous nous concentrerons sur le remplacement du menu hamburger par défaut du site web sur mobile.\
Vous pouvez également appliquer cette méthode de manière créative en trouvant et en utilisant d'autres sélecteurs CSS pour déclencher le menu.

<details><summary>Comment remplacer le menu hamburger par défaut de votre site web par le Navi+ Slide Menu (<strong>Guide populaire) ?</strong></summary>
<p>Sur la plupart des sites Shopify, le menu hamburger par défaut est généré à partir de la version de bureau via un design réactif. En conséquence, il est généralement très simple, a une profondeur faible, et manque de support pour les icônes, les images, ou les mises en page avancées. Le remplacer par un Navi+ Slide Menu est un choix courant et pratique pour tirer parti des fonctionnalités avancées de Navi+.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIB9UqVXh9bL1z4AuHAQj%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=1bef8174-8a59-4765-b2ea-e669c1d12fd6" alt=""><figcaption></figcaption></figure>

<p>Pour ce faire, identifiez simplement le sélecteur CSS de l'icône du menu hamburger de votre site web et entrez-le dans la zone de texte. Nous avons déjà trouvé les sélecteurs CSS pour certains des thèmes les plus populaires pour vous, listés ci-dessous.</p>
<ol>
<li>Sélecteurs CSS pour certains thèmes gratuits populaires.. de Shopify comme Dawn, Sense, Savor, Horizon..</li>
</ol>
<pre class="codehilite"><code>#Details-menu-drawer-container 
</code></pre>

<ol>
<li>Pas dans cette liste, ne vous inquiétez pas</li>
</ol>
<pre class="codehilite"><code>- Vous pouvez discuter avec un supporter Navi+ pour obtenir de l'aide instantanée—cela ne prend que quelques minutes pour trouver le sélecteur CSS.

- Ou, vous pouvez suivre le guide d'auto-assistance dans les sujets suivants (juste après ce sujet).
</code></pre>
</details>

<details><summary><strong>Comment trouver le sélecteur CSS sur votre site web ?</strong></summary>
<p>Vous pouvez discuter avec un supporter Navi+ pour obtenir de l'aide instantanée au lieu de le faire vous-même.\
Cependant, (1) cela vous aidera à comprendre l'idée principale, et (2) si vous souhaitez le faire vous-même, suivez les instructions ci-dessous.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### 2.3. Important ! Optimisez la vitesse du menu déroulant, ajoutez un effet de chargement et empêchez les menus en double

Ce n'est pas quelque chose que vous devez corriger tout de suite, mais à long terme, c'est important pour l'expérience du menu déroulant créée par Navi+. Avant que Navi+ ne remplace complètement l'ancien menu déroulant, le menu original du thème est toujours actif. Pendant un bref moment—environ une demi-seconde—si un utilisateur charge le menu et appuie rapidement sur le bouton hamburger (un cas rare, mais toujours possible), l'ancien menu du thème peut apparaître et provoquer un glitch visuel.

<details><summary>Navi+ fournit une solution simple pour optimiser l'expérience utilisateur et la vitesse comme suit</summary>
<h4>Pourquoi devez-vous faire cela ? Navi+ n'est-il pas déjà rapide ?</h4>
<p>Navi+ est très rapide. Il est entièrement déployé sur un CDN de premier plan avec une latence très faible (environ 100 ms) et peut servir des millions de clients sans ralentir.</p>
<p>Cependant, Navi+ fonctionne toujours au sein de l'écosystème Shopify. Shopify a ses propres règles de chargement :</p>
<ol>
<li>Shopify priorise le chargement de ses propres ressources en premier.</li>
<li>Ensuite, Shopify charge le contenu du thème.</li>
<li>Enfin, Shopify charge le contenu de l'application, mais pas dans un ordre spécifique.</li>
</ol>
<p>Cela signifie que si vous utilisez plusieurs applications, Navi+ peut parfois être chargé plus tard que prévu. C'est pourquoi il peut sembler plus lent dans certains cas.</p>
<hr />
<h3>Quelle est ma solution ?</h3>
<p>Actuellement, Navi+ a une haute priorité lors du chargement sur les sites Shopify. Cependant, il y a encore un certain délai. Nous allons aborder ces problèmes un par un ici :</p>
<h4>Menu déroulant : Ajoutez un effet de chargement et verrouillez le sélecteur de déclenchement</h4>
<p>Très simple : il suffit d'entrer le sélecteur CSS que vous utilisez pour le menu déroulant dans la section d'intégration de l'application Navi+ (voir l'image ci-dessous).</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

<p>Note :</p>
<ul>
<li>Ajoutez le suffixe <strong>(M)</strong> si vous souhaitez qu'il s'applique uniquement sur mobile.</li>
<li>Ajoutez le suffixe <strong>(D)</strong> si vous souhaitez qu'il s'applique uniquement sur bureau.</li>
<li>Ne laissez aucun suffixe si vous souhaitez qu'il s'applique sur les deux plateformes.</li>
</ul>
</details>
