---
description: '**Les Mega Menus Mobiles** ne sont pas aussi courants sur mobile que les Tabbar ou les Slide Menus, car la zone de tapotement d''un Mega Menu est souvent trop petite pour les doigts des utilisateurs. Cependant...'
lang: fr
layout: default
permalink: /fr/docs/usage/mega-menu-mobile/how-to-use/
title: Comment utiliser?
---
# Comment utiliser?

**Les Mega Menus Mobiles** ne sont pas aussi courants sur mobile que les Tabbar ou les Slide Menus, car la zone de tapotement d'un Mega Menu est souvent trop petite pour les doigts des utilisateurs. Cependant, parfois, vous voudrez peut-être maintenir une expérience cohérente entre le bureau et le mobile en utilisant un Mega Menu sur les deux plateformes.

Les Mega Menus Mobiles ont également des avantages : ils sont compacts, positionnés sous l'en-tête, et ne prennent pas d'espace à l'écran puisqu'ils flottent sur l'écran. En tant que menu de section, ils défilent avec la page.

**Avantages clés :**

* Fonctionne sans problème à la fois sur mobile et sur bureau pour une expérience cohérente
* Économise de l'espace et défile avec la page.
* Offre plusieurs styles de présentation avec **images**, **grilles**, et **dispositions multi-niveaux** pour une expérience riche et professionnelle

**FAQ :**

<details><summary><strong>1. Je n'ai pas décidé si je devrais utiliser la version gratuite ou payante. Puis-je essayer les modèles de menu professionnels ?</strong></summary>
<p>Absolument ! Les groupes de menus sont principalement là pour aider les débutants à éviter de se sentir submergés par des fonctionnalités avancées dans Navi+ 😄. La meilleure façon est d'essayer les menus professionnels pour explorer toutes les fonctionnalités et options de mise en page. Plus tard, vous pouvez simplement supprimer tout menu dont vous n'avez pas besoin ou que vous trouvez inapproprié.</p>
</details>

<details><summary><strong>2. Créer un menu ici le fait-il apparaître sur mon site Web immédiatement ?</strong></summary>
<p>Pas encore. Vous devrez <strong>publier</strong> le bon menu pour qu'il apparaisse sur votre site Web. Ne vous inquiétez pas — c'est facile !</p>
</details>

<details><summary><strong>3. Que faire si je choisis le mauvais modèle ou fais une erreur ?</strong></summary>
<p>Aucun problème. Vous pouvez le supprimer et en créer un nouveau à tout moment. Si vous testez un menu et souhaitez essayer un autre modèle, vous pouvez <strong>enregistrer</strong> celui en cours comme fichier de sauvegarde et le rouvrir plus tard. Vous pouvez même <strong>copier et coller</strong> des parties entre les menus (en ouvrant deux onglets de navigateur) pour conserver votre travail précédent. N'hésitez pas à expérimenter !</p>
</details>

<details><summary><strong>4. Dois-je créer un seul menu ou plusieurs ?</strong></summary>
<p>Vous devriez créer <strong>plusieurs menus</strong>. Seul le menu <strong>actif</strong> s'affichera sur votre site, mais vous pouvez préparer de nombreuses versions — en sélectionnant différents modèles ou en clonant des menus. Les menus peuvent être configurés pour s'afficher/cacher en fonction du type de page (accueil, produit, collection...), de l'appareil (mobile ou bureau), ou des mots-clés d'URL. Alors allez-y et construisez des menus qui s'adaptent à chaque situation !</p>
</details>

### Étape 1 : Modifier l'arbre de menu

#### 1.1. Comprendre l'arbre de menu

L'**arbre de menu** est la partie la plus importante de tout menu — il définit la structure.

Voici un exemple d'un arbre de menu de mega menu mobile :

```
Menu
Accueil  
Catalogue 
- Tout Montagne  
   - Cruise Flex  
   - Balance Ride
- Freestyle  
   - Park Board  
   - Jib Board  
- Freeride  
Blogs
Support  
Plus 
```

C'est un arbre de menu à 3 niveaux. Le niveau 1 comprend **Menu, Accueil**, **Catalogue**, **Support, Blogs** et **Plus**. **Tout-Montagne** est un élément de menu de niveau 2, avec quelques éléments enfants : **Cruise Flex** et **Balance Ride**.

Vous passerez la plupart de votre temps à construire cet arbre de menu pour votre site Web, aidant les clients à trouver le contenu qu'ils recherchent.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FosZUYAtOckjPUD5T8F5q%2FHelp.MenuTree.1.1.0.png?alt=media&#x26;token=c1eec6d7-a0b6-45f5-aea5-6678540a884a" alt="Catalogue : Un élément de menu de niveau 1, affiché comme un onglet sur la barre d'onglets. Tout-Montagne : Élément de menu de niveau 2 qui apparaît lorsque vous appuyez sur Catalogue."><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fh6AHpLQvuPq0AadY0TOH%2FHelp.MenuTree.1.1.1.png?alt=media&#x26;token=06a10cb0-ab20-44be-a734-a221597a4ea9" alt="Cruise Flex, Balance Ride : Élément de menu de niveau 3 qui apparaît lorsque vous appuyez sur Tout-Montagne."><figcaption></figcaption></figure>

#### 1.2. Interactions de base avec l'arbre de menu

Vous pouvez faire glisser et déposer des éléments de menu vers le haut et vers le bas ou à gauche et à droite pour changer leur position et leurs relations parent-enfant dans l'arbre de menu.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMAz90izqLq6bJcZst2rw%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=27b190ca-50eb-4272-9ba9-30741e95d33a" alt="
"><figcaption></figcaption></figure>

Lorsque vous survolez n'importe quel élément de menu, vous verrez des options supplémentaires : modifier les détails de l'élément, le supprimer de l'arbre de menu, ou le copier et le coller ailleurs.

{% comment %}hint style="info" {% endcomment %}
**Astuce :** Vous pouvez copier un élément de menu d'un menu à un autre en ouvrant l'application Navi+ dans deux onglets de navigateur.
{% comment %}endhint{% endcomment %}

#### 1.3. IMPORTANT ! Supprimez les éléments de menu d'exemple et gardez uniquement la structure que vous souhaitez.

C'est une situation courante lors de la création d'un menu avec Navi+. Lorsque vous créez un nouveau menu, nous incluons un exemple complet avec des éléments de menu populaires pour montrer des idées de mise en page et vous permettre de copier/coller au besoin. Cependant, si vous êtes nouveau dans Navi+ et utilisez le plan Starter, vous verrez de nombreux avertissements rouges (i) pour des fonctionnalités qui ne sont pas disponibles, comme le téléchargement d'images ou l'utilisation d'interactions avancées.

Si vous aimez ces fonctionnalités avancées, envisagez de passer à un plan Business ou Elite. Mais si vous souhaitez continuer avec le plan Starter, veuillez trouver et supprimer les éléments de menu avec des avertissements rouges (i).

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE7iIBanCUi5x1wUBoySS%2FHelp.MenuTree.1.1.3.png?alt=media&#x26;token=04573f08-79ed-494b-91a6-f744a5f4779c" alt="
"><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fpstdwu2GBy4wymYsInJe%2FHelp.MenuTree.1.1.3b.png?alt=media&#x26;token=8a2ebfc9-2cbc-4efb-a1b4-fec1fd621ec8" alt="
"><figcaption></figcaption></figure>

{% comment %}hint style="info" {% endcomment %}
**Astuce importante :** Lorsque la confirmation de suppression apparaît, activez « Ne demandez plus la prochaine fois » pour supprimer plus rapidement.
{% comment %}endhint{% endcomment %}

#### 1.4. Ajouter des éléments de menu à l'arbre de menu

Pour ajouter un élément de menu, vous avez deux options :

**Option 1&#x20;**<mark style="background-color:$warning;">**(Non recommandé si vous êtes nouveau dans Navi+)**</mark>** :** Cliquez sur « Ajouter un menu » pour insérer un élément de menu vide à la fin de l'arbre de menu. Cette méthode nécessite une bonne compréhension des paramètres des éléments de menu, que nous aborderons ci-dessous. Cela peut sembler écrasant au début, donc vous pouvez explorer cela plus tard.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FP8GKAiPpBlFdnzEM0TiI%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=5b87d791-686b-4768-b7dd-d17ff95841c4" alt="
"><figcaption></figcaption></figure>

**Option 2 (Recommandée) :** Nous avons déjà préparé de nombreux modèles d'éléments de menu bien conçus pour vous. Il vous suffit de les copier et de les coller au bon endroit. Après avoir terminé votre arbre de menu, il vous suffit de supprimer les modèles inutilisés.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FjBJUHMA8dTOONOJoOt8S%2FHelp.MenuTree.1.1.5.png?alt=media&#x26;token=e6316df1-e99a-4259-8370-5fc3afaf331a" alt="
"><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FChui5Q4pxEpW1cDVoE3E%2FHelp.MenuTree.1.1.5b.png?alt=media&#x26;token=9e29309f-3177-4d89-ac38-d319bba7a541" alt="
"><figcaption></figcaption></figure>
