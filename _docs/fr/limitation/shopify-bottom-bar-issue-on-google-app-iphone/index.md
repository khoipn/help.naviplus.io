---
description: Il s'agit du problème de rembourrage en bas sous la barre inférieure lorsqu'un site Web Shopify utilisant Navi+ est ouvert dans l'application Google sur iPhone.
lang: fr
layout: default
permalink: /fr/docs/limitation/shopify-bottom-bar-issue-on-google-app-iphone/
title: Problème de la barre inférieure Shopify sur l'application Google (iPhone)
---
# Problème de la barre inférieure Shopify sur l'application Google (iPhone)

Il s'agit du problème de rembourrage en bas sous la barre inférieure lorsqu'un site Web Shopify utilisant **Navi+** est ouvert dans l'application Google sur iPhone.

Lorsque vous accédez à un site Web Shopify qui utilise **Navi+** (ou toute application avec un menu inférieur fixe, des boutons flottants, etc.), les utilisateurs ouvrant le site Web **dans l'application Google sur iPhone** peuvent parfois voir un espace blanc inhabituel apparaître en bas de l'écran.

Ce problème ne se produit que dans l'application Google et **n'est pas causé par Navi+**. Voici une explication claire et simple.

***

### 1. Où le problème se produit-il ?

Le problème ne se produit que lorsque :

* Le site Web fonctionne sur **Shopify**
* Il y a une **Barre Inférieure** (Navi+ ou toute autre application), ou un **Bouton d'Action Flottant (FAB)** tel que des widgets de chat, des boutons de fidélité, etc.
* L'utilisateur ouvre le site Web **via l'application Google sur iPhone** (généralement en recherchant et en tapant sur le site Web)

Le problème ne se produit **pas** lors de l'ouverture du site Web en utilisant :

* Safari (le navigateur par défaut de l'iPhone)
* Chrome
* Navigateur Facebook
* Navigateur TikTok
* …

Cela confirme que le problème provient de l'application Google sur iOS.

***

### 2. Pourquoi les sites Web Shopify utilisant Navi+ sont-ils plus susceptibles de rencontrer ce problème ?

L'application Google utilise une méthode spéciale de rendu des sites Web (WebView d'Apple). Ce moteur de rendu a un problème de longue date lors du calcul de la véritable hauteur de l'écran dans les sites Web qui ont :

* Une barre inférieure fixe
* HTML ou UI générés dynamiquement par JavaScript
* Des mises en page complexes comme Shopify (plusieurs couches de conteneurs et sections en constante évolution)

Lorsque ces conditions se produisent, l'application Google peut mal calculer la hauteur réelle de la fenêtre d'affichage et créer un **faux rembourrage en bas**.

➡️ C'est pourquoi le problème apparaît plus fréquemment sur les sites Web Shopify utilisant Navi+ ou d'autres applications de barre inférieure/FAB.

***

### 3. Est-ce un problème de Navi+ ?

Non.
C'est un bug inhérent de l'**application Google sur iPhone**, et il existe depuis de nombreuses années.

Même si Navi+ est désactivé, d'autres applications Shopify qui affichent des barres inférieures ou des FAB rencontrent toujours le même problème dans l'application Google.

***

### 4. Preuves que ce problème ne peut pas être entièrement corrigé

* De nombreuses applications Shopify qui incluent une barre inférieure ou un FAB rencontrent exactement le même problème.
* Même certaines fonctionnalités intégrées de Shopify montrent un comportement similaire dans l'application Google.
* C'est un problème bien connu dans la communauté des développeurs, mais l'application Google ne l'a pas abordé.
* Le problème disparaît dès que l'utilisateur **touche n'importe où sur l'écran** → l'application Google force un nouveau rendu et recalcule la hauteur correcte.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIJeUOw7iYKzsFXSLVQK3%2FEx-1.1.2.png?alt=media&#x26;token=c2c351d9-10fd-47ed-bbef-1e436ab3ac4f" alt=""><figcaption></figcaption></figure>

***

### 5. Solution actuelle de Navi+

Navi+ a recherché et testé plusieurs approches, mais comme le problème provient de l'application Google elle-même, il ne peut pas être complètement résolu.

Cependant, Navi+ a mis en œuvre la **meilleure atténuation possible** :

#### ✔️ Le problème n'apparaît que la première fois

Il se produit généralement lorsque l'utilisateur :

* ouvre le site Web dans l'application Google
* et navigue ou touche n'importe où sur la page

Lorsque cela se produit, Navi+ déclenche un mécanisme de correction unique. Dès que l'utilisateur :

* touche légèrement l'écran
* fait défiler un peu
* ou interagit de quelque manière que ce soit

#### ✔️ Le problème disparaît automatiquement

L'application Google va re-rendre l'ensemble de la mise en page, et à partir de ce moment :

* La barre inférieure s'affiche à la bonne position
* Le problème ne réapparaîtra pas tant que l'application Google n'est pas fermée et rouverte

#### ✔️ Cette atténuation réduit également les erreurs similaires d'autres applications positionnées en bas lorsqu'elles sont utilisées avec Navi+

***

### 6. Explication rapide pour les utilisateurs finaux

Ce message est conçu pour les utilisateurs non techniques :

> "L'application Google sur iPhone a un bug d'affichage lors de l'ouverture de sites Web Shopify qui utilisent une barre inférieure comme Navi+. Ce problème provient de l'application Google et affecte de nombreuses applications, pas seulement Navi+. Cela ne se produit qu'une fois et disparaîtra après tout tap ou défilement sur l'écran. Si vous utilisez Safari ou Chrome à la place, le problème ne se produira pas."

***

### 7. Conclusion

❌ Pas un problème de Navi+  
❌ Pas un problème de Shopify  

✔️ Un bug d'affichage dans l'application Google sur iPhone  
✔️ Navi+ minimise le problème pour qu'il n'apparaisse qu'une fois et disparaisse ensuite  
✔️ Safari/Chrome ne sont pas du tout affectés
