---
description: C'est un problème courant mais très facile à gérer lorsque vous utilisez Navi+. Votre site Web peut avoir de nombreux éléments flottants—voir les exemples ci-dessous pour les reconnaître.&
lang: fr
layout: default
permalink: /fr/docs/usage/general/z-index/
title: Z-index
---
# Z-index

C'est un problème courant mais très facile à gérer lorsque vous utilisez Navi+. Votre site Web peut avoir de nombreux éléments flottants—voir les exemples ci-dessous pour les reconnaître.&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FL6naWQmaqD1bKTtzaALP%2FHelp.MenuTree.1.3.1b.png?alt=media&#x26;token=0e7dad3b-0395-4f66-9589-2562175e8800" alt=""><figcaption><p>Note : Ce sont les configurations de z-index actuelles sur le thème Dawn (le thème par défaut gratuit le plus populaire de Shopify) à ce moment.</p></figcaption></figure>

Ces éléments flottants sont contrôlés par leurs propres **valeurs de z-index**. Plus le z-index est élevé, plus cet élément a de priorité pour être affiché au-dessus des autres. La partie délicate est qu'il n'y a pas de règles fixes pour les valeurs de z-index. Vous pouvez attribuer n'importe quel nombre jusqu'à 2 147 483 647. Chaque thème que vous utilisez et chaque application fonctionnant sur votre boutique Shopify peuvent attribuer leur propre z-index aux composants flottants—généralement basé sur la préférence du développeur. Lorsque ces éléments interagissent sur votre site Web, ils peuvent se chevaucher de manière inattendue.

{% comment %}hint style="info" {% endcomment %}
Amusons-nous un peu :joy:: Regardez de plus près la capture d'écran ci-dessus et vous verrez—oui, c'est un désordre, et il n'y a absolument **aucune règle**. Il y a trois développeurs derrière le site Web que vous regardez.&#x20;

Le développeur qui a construit le thème Dawn a choisi un z-index de 3 pour le Panneau de Menu et 1000 pour le Panneau de Panier—complètement sans rapport, sans logique claire.&#x20;

Puis il y a le développeur de l'application Rivo Loyalty Rewards—un outil de fidélité populaire—qui a choisi un z-index de 99999999999, probablement sans même compter combien de neufs ils ont tapés. Leur seul objectif : s'assurer que le bouton flottant « Récompenses » reste toujours au-dessus, peu importe quoi, même au-dessus de votre Panneau de Panier.&#x20;

Pendant ce temps, le développeur de Navi+ a humblement choisi un nombre plus petit—juste 5—parce que nous ne voulions pas être trop agressifs ou intrusifs. Alors, que devriez-vous faire ?
{% comment %}endhint{% endcomment %}

**Étape 1 :** Trouvez le z-index correct de votre menu Navi+

<details><summary><strong>Méthode 1 : Demandez au support de Navi+ (</strong>la plus simple)</summary>
<p>C'est le meilleur et le plus efficace. Nous pouvons vous fournir des informations sur les valeurs de z-index des éléments clés de l'interface tels que le Panneau de Menu, le Panneau de Panier, et toutes les applications tierces que vous utilisez, puis recommander le meilleur réglage de z-index pour votre cas.</p>
<p>N'hésitez pas à utiliser la boîte de chat dans le coin inférieur droit de l'écran pour parler à un supporter de Navi+. Navi+ est en pleine croissance, et nous apprécions vraiment vos retours—vos problèmes nous aident à construire un meilleur produit.</p>
<p>Nous ne sommes pas en ligne 24/7—seulement 14 heures par jour, selon le fuseau horaire du Vietnam. Cependant, dès que nous voyons votre message, nous répondrons immédiatement.</p>
</details>

<details><summary><strong>Méthode 2 : Utilisez le mode Inspect de votre navigateur</strong> (détaillé, mais nécessite quelques connaissances techniques)</summary>
<p>Jusqu'à présent, il n'y a pas de meilleure méthode pour vérifier cela vous-même à moins que vous n'utilisiez le mode Inspect. Cet outil de développement est disponible dans tous les navigateurs modernes comme Chrome, Firefox, Safari ou Edge. Cliquez avec le bouton droit sur n'importe où sur votre site Web et sélectionnez <strong>Inspecter</strong> pour ouvrir le mode Inspect.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FswowawWsXN01MlvSqqjX%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=470cd65f-0ce8-416a-8749-b9a210f6f08f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOabxqNlZUroNKJQfTKsI%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=2b872306-63e3-4dcf-b89a-f16f162727b4" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FSbR8KCnlOK4nFHhxntTJ%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=64ec8298-196e-4999-99a7-f301e052b5dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FDkVp8u1XnJPTiSKksWAQ%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=641c59d0-9ecf-4ac2-9626-6a1a90cc151f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOgAwr2zm2dapUz9OSGJO%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=493df1eb-fa89-4bf6-806e-bec230ec8e82" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FZN3XAcWn9J8Ifn6AQSjW%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=8de191fd-4b39-4e4d-946b-07bedf55ee52" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcwtXWdRp5QaafcNjLGD5%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=beff473b-cd52-4a72-9657-b54687d99363" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FG7lIvYAGwNMcV4NRQUKI%2FHelp.MenuTree.1.4.10.png?alt=media&#x26;token=2a9db521-805c-4374-bc3b-303e97e8b990" alt=""><figcaption></figcaption></figure>
</details>

<details><summary><strong>Méthode 3 :</strong> Essayez et testez en fonction de nos suggestions (Expérience personnelle)</summary>
<p>Dans la plupart des cas, les problèmes de z-index sont rares si vous n'utilisez pas trop d'applications. Le principal problème provient généralement des chevauchements entre votre menu et d'autres éléments d'interface comme le Panneau de Menu ou le Panneau de Panier.</p>
<ul>
<li>Pour les menus collants Navi+ comme Tabbar ou FAB : Nous recommandons de garder le z-index bas, autour de 2 ou 3. Ces menus prennent de l'espace à l'écran, et cela semblerait cassé ou ennuyeux s'ils couvraient des panneaux fonctionnels comme le panier.</li>
<li>Pour les menus de section Navi+ comme les Mega menus : S'ils sont placés en haut (dans l'en-tête), vous pouvez définir en toute sécurité un z-index très élevé (par exemple 2000000000) pour vous assurer que le sous-menu déroulant n'est pas caché derrière d'autres composants.</li>
<li>Pour les menus Grid Navi+ : le z-index n'a aucun effet, car le menu est plat et n'a pas de profondeur en couches.</li>
<li>Pour les menus Slide Navi+ : le z-index doit être défini très haut (par exemple 2000000000) pour éviter d'être caché derrière d'autres éléments.</li>
</ul>
</details>

**Étape 2 :** Mettez à jour le z-index de votre menu Navi+

<details><summary>Comment mettre à jour le z-index du menu Navi+ ?</summary>
<p>Sélectionnez le menu Avancé et faites défiler vers le bas pour trouver la carte Z-index puis mettez à jour le z-index et n'oubliez pas de cliquer sur ENREGISTRER pour appliquer les modifications.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fh2SfwqpjqjNzZwmbs2yL%2Fz-index%201.1.png?alt=media&#x26;token=47b5f318-d0b3-4f2a-9668-f9e3ed7dab09" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F7np7UDMk5KFGnSvMr8HK%2Fz-index%201.2.png?alt=media&#x26;token=ae4aa403-fbd6-41c9-a16d-861e8cd032bc" alt=""><figcaption></figcaption></figure>
</details>
