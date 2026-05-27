---
description: Navi+ AI Menu Builder est le plugin WordPress officiel pour Navi+. Installez-le, créez des menus dans WordPress et publiez-les sur l'ensemble du site ou via le shortcode [naviwp] — pas d'éditions de code, pas d'injecteurs d'en-tête.
lang: fr
layout: default
permalink: /fr/docs/integrations/wordpress-woocommerce/
title: WordPress / WooCommerce — Navi+ AI Menu Builder
---
# WordPress / WooCommerce — Navi+ AI Menu Builder

Si votre site fonctionne sur **WordPress** ou **WooCommerce**, la manière recommandée de publier des menus Navi+ est le plugin officiel **Navi+ AI Menu Builder** sur WordPress.org. Le nom complet de la liste WordPress.org est **Naviplus Menu Builder**.

> Page du plugin : <https://wordpress.org/plugins/naviplus-menu-builder/>
> Forum de support : <https://wordpress.org/support/plugin/naviplus-menu-builder/>

Cette page est le point d'entrée : installez le plugin, activez les menus sur l'ensemble du site ou intégrez des menus par position, et choisissez des mises en page qui fonctionnent bien sur mobile (Tab Bar, Slide / hamburger, FAB).

---

## 1. Exigences

- **WordPress 5.8** ou plus récent (il est recommandé d'utiliser la dernière version de WordPress que votre hébergeur prend en charge).
- Accès administrateur — nécessaire pour installer des plugins et modifier **Apparence**.
- Internet sortant — les menus sont conçus sur le service Navi+ et rendus via un script chargé depuis `https://live.naviplus.app/start.js`. Voir la section [8. Services externes & confidentialité](#8-external-services--privacy).

---

## 2. Installer le plugin

Trois méthodes d'installation sont détaillées sur la page d'installation dédiée : **[Installer le plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/)** — recherche admin (recommandée), téléchargement ZIP, ou FTP / gestionnaire de fichiers.

Après activation, le plugin apparaît sous **Apparence → Naviplus Menu Builder** dans la barre latérale admin.

---

## 3. Après activation

1. Allez à **Apparence → Naviplus Menu Builder**.
2. Créez votre premier menu en suivant le flux à l'écran. Le plugin **se connecte automatiquement** à votre site avec Navi+ lors de la première sauvegarde — vous n'avez **pas** besoin de créer un compte Navi+ au préalable.
3. Concevez la mise en page dans l'**éditeur visuel Navi+ AI Menu Builder**, ouvert depuis le tableau de bord WordPress.

La structure et les styles du menu vivent sur le **service Navi+** ; WordPress ne stocke qu'un **identifiant de site** qui permet à Navi+ de reconnaître votre installation — ce n'est **pas** votre mot de passe WordPress et ce n'est pas un jeton que vous devez gérer.

Guide complet : **[Créez votre premier menu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.

---

## 4. Choisir une mise en page pour les visiteurs mobiles

Navi+ prend en charge plusieurs types de menus. Pour les sites orientés mobile, ceux-ci fonctionnent généralement le mieux :

| Mise en page | Quand l'utiliser |
| --- | --- |
| **Tab Bar** | Accès rapide à 3–5 destinations principales, ancré près du bas de la fenêtre d'affichage (ou où que vous le placiez dans l'éditeur). |
| **Slide Menu (hamburger)** | De nombreux éléments ou catégories profondes — économise de l'espace sur les petits écrans. |
| **Mega Menu** | Menus riches en contenu — excellent sur desktop ; sur mobile, vérifiez les cibles de tap et le comportement de défilement dans l'éditeur. |
| **Grid Menu** | Raccourcis de catégorie et pages hub. |
| **FAB (floating button)** | Actions rapides (support, contact) qui ne devraient pas prendre de place dans l'en-tête. |

Après avoir ajusté la mise en page, **testez toujours sur un appareil réel** — ou au moins en mode réactif du navigateur.

Pour des instructions WordPress spécifiques au type de menu :

- **[Tab Bar — Publier sur WordPress]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/)**
- **[Mega Menu (Desktop) — Publier sur WordPress]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/)**
- **[Mega Menu (Mobile) — Publier sur WordPress]({{ site.baseurl }}/docs/usage/mega-menu-mobile/publish-on-wordpress/)**
- **[Slide Menu — Publier sur WordPress]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/publish-on-wordpress/)**
- **[FAB — Publier sur WordPress]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/)**
- **[Grid Menu — Publier sur WordPress]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress/)**

Pour une comparaison complète, voir **[Aperçu : Choisissez le bon menu]({{ site.baseurl }}/docs/usage/explore-common-menus/)**.

---

## 5. Afficher les menus sur l'ensemble du site

- Dans l'admin du plugin, vous pouvez **activer l'intégration sur l'ensemble du site** (intégration globale). Lorsqu'elle est activée, le runtime est injecté dans chaque page et les menus collants (Tab Bar, FAB, Slide) se rendent automatiquement sur l'ensemble du site.
- Si vous ne souhaitez que des menus sur quelques pages (par exemple, des pages d'atterrissage uniquement mobiles), **désactivez l'intégration sur l'ensemble du site** et utilisez le shortcode (section 6).

L'étiquette exacte et la position du basculement peuvent varier selon la version du plugin — regardez sur l'écran des paramètres du plugin sous **Apparence → Naviplus Menu Builder**.

---

## 6. Intégrer un menu dans un article, une page ou un widget (shortcode)

Utilisez le shortcode :

```text
[naviwp embed_id="YOUR-EMBED-ID"]
```

Remplacez `YOUR-EMBED-ID` par l'**ID d'intégration** de votre menu (affiché dans l'éditeur sur le panneau de publication du menu — ressemble à `SF-123456789`).

**Gutenberg (éditeur de blocs) :**

- Insérez un bloc **Naviplus Menu Builder** et collez votre **ID d'intégration** dans la barre latérale du bloc, **ou**
- Déposez un bloc **Shortcode** générique avec `[naviwp embed_id="..."]`, **ou**
- Collez `[naviwp embed_id="..."]` directement à l'intérieur d'un bloc **Paragraphe** — le plugin le reconnaît.

**Elementor / Divi / Bricks / autres constructeurs :**

- Utilisez le widget **Shortcode** du constructeur et collez `[naviwp embed_id="..."]`.

Plus de détails et les trois méthodes Gutenberg : **[Publiez vos menus]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)**.

---

## 7. Désactiver ou masquer temporairement des menus

- **Désactivez le plugin** → le runtime cesse de se charger ; aucun menu Navi+ ne s'affiche nulle part sur votre site.
- **Désactivez l'intégration sur l'ensemble du site** dans l'admin du plugin → les menus ne s'affichent que sur les pages qui incluent un shortcode ou un bloc `[naviwp]`.
- **Changez un menu en Brouillon** dans l'éditeur → ce menu spécifique n'est plus publié, même si le runtime est chargé.
- **Supprimez un shortcode** d'une page ou d'un widget → le menu disparaît à cet endroit seulement.

Vos menus sur le service Navi+ sont préservés à travers tout cela. La réinstallation ou la réactivation du plugin et la réutilisation des mêmes IDs d'intégration les ramènent sans aucune reconstruction.

---

## 8. Services externes & confidentialité

Le plugin se connecte au service Navi+ AI Menu Builder pour créer et **rendre** vos menus. Les données échangées peuvent inclure (sans limitation) : votre **domaine de site**, votre **configuration de menu**, et des données d'utilisation minimales nécessaires pour le rendu.

- Politique de confidentialité : <https://naviplus.io/privacy>
- Chargeur de script : `https://live.naviplus.app/start.js`

Si vous opérez sous un cadre de confidentialité qui exige la divulgation de services tiers (par exemple, GDPR), listez **Navi+** et l'URL du chargeur de script dans l'avis de confidentialité de votre site.

---

## 9. Liens utiles

| Ressource | URL |
| --- | --- |
| Page du plugin WordPress.org | <https://wordpress.org/plugins/naviplus-menu-builder/> |
| Forum de support WordPress.org | <https://wordpress.org/support/plugin/naviplus-menu-builder/> |
| Accueil Naviplus | <https://naviplus.io> |
| Politique de confidentialité | <https://naviplus.io/privacy> |
| FAQ du plugin (ce site) | [Navi+ AI Menu Builder FAQ]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/) |

---

## 10. Récapitulatif rapide

1. **Installez & activez** depuis WordPress.org ou un téléchargement ZIP.
2. Ouvrez **Apparence → Naviplus Menu Builder** → créez votre menu et concevez-le dans l'éditeur Navi+.
3. Choisissez une mise en page adaptée aux mobiles : **Tab Bar** / **hamburger** / **FAB**.
4. Choisissez l'affichage **sur l'ensemble du site** ou `[naviwp embed_id="..."]` pour des pages spécifiques.
5. **Testez sur un appareil réel** avant de mettre en ligne.

*Cette page peut être mise à jour à mesure que de nouvelles versions du plugin sont publiées ; la version canonique et le journal des modifications se trouvent sur la [page du plugin WordPress.org](https://wordpress.org/plugins/naviplus-menu-builder/).*
