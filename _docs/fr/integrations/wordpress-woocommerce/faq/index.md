---
description: Frequently asked questions about the Navi+ Menu Builder WordPress plugin — pricing, performance, WooCommerce, multisite, page builders, caching, privacy, and uninstall.
lang: fr
layout: default
permalink: /fr/docs/integrations/wordpress-woocommerce/faq/
title: Navi+ Menu Builder FAQ
---
# Navi+ Menu Builder FAQ

<details>
<summary>Le plugin est-il gratuit ?</summary>
<p>Oui. Le plugin lui-même est gratuit sur WordPress.org. Votre abonnement Navi+ (Starter / Business / Elite) détermine quels types de menus et quotas sont disponibles. Voir <a href="{{ site.baseurl }}/docs/frequently-asked-questions/navi-plans-starter-business-and-elite/">Plans &amp; Pricing</a>.</p>
</details>

<details>
<summary>Ai-je besoin d'un compte Navi+ avant d'installer ?</summary>
<p>Non. Lorsque vous enregistrez votre premier menu dans <strong>Apparence → Naviplus Menu Builder</strong>, le plugin connecte automatiquement votre site au service Navi+ — pas d'inscription séparée, pas de jeton à coller.</p>
</details>

<details>
<summary>Le plugin ralentit-il mon site ?</summary>
<p>Aucun impact mesurable. Le plugin n'ajoute qu'une seule <code>&lt;script async&gt;</code> dans <code>&lt;head&gt;</code> qui charge le runtime Navi+ (~4&nbsp;Ko) depuis Cloudflare/BunnyCDN. Le runtime est entièrement asynchrone et ne bloque pas le rendu de la page. Le surcoût typique au premier chargement est de 100 à 200&nbsp;ms ; les chargements suivants sont de 0&nbsp;ms grâce à la mise en cache HTTP.</p>
</details>

<details>
<summary>Est-ce que ça fonctionne avec WooCommerce ?</summary>
<p>Oui. Les pages WooCommerce sont des pages WordPress standard, donc les menus s'affichent sur les pages de boutique, de produit, de panier et de paiement sans configuration supplémentaire. Utilisez des règles d'affichage dans l'éditeur (l'URL contient <code>/cart</code>, <code>/checkout</code>, etc.) pour contrôler où les menus apparaissent.</p>
</details>

<details>
<summary>Est-ce que ça fonctionne sur WordPress Multisite ?</summary>
<p>Oui. Activez le plugin par site (l'activation réseau est également prise en charge) et configurez les menus de chaque site depuis son propre <strong>Apparence → Naviplus Menu Builder</strong>. Chaque site se connecte automatiquement à Navi+ indépendamment lorsque son premier menu est enregistré.</p>
</details>

<details>
<summary>Y aura-t-il un conflit avec mon thème ou mon constructeur de page (Elementor, Divi, Bricks, Oxygen) ?</summary>
<p>Aucun conflit connu. Les menus s'affichent dans leurs propres conteneurs et utilisent des styles isolés. Pour insérer un menu de section dans un constructeur de page, utilisez un widget <strong>Shortcode</strong> avec <code>[naviwp embed_id="SF-..."]</code> — ou un widget <strong>HTML</strong> avec le div d'intégration.</p>
</details>

<details>
<summary>Puis-je utiliser le plugin et l'intégration de script générique en même temps ?</summary>
<p>Non — choisissez-en un. Le plugin injecte déjà le runtime Navi+, donc une balise de script manuelle le chargerait deux fois. Si vous avez précédemment intégré le script dans votre thème ou via un injecteur d'en-tête, retirez ce snippet avant d'activer le plugin.</p>
</details>

<details>
<summary>J'ai mis à jour un menu mais je ne vois pas le changement sur mon site.</summary>
<p>Les menus sont récupérés au moment de l'exécution, donc un vidage du cache WordPress n'est pas nécessaire. Si le changement n'apparaît toujours pas, effectuez un rechargement complet (Cmd/Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;R) pour contourner le cache du navigateur. Pour les menus collants, confirmez également que le menu est défini sur <strong>Publié</strong> (pas brouillon) et que ses règles d'affichage correspondent à la page.</p>
</details>

<details>
<summary>Comment puis-je masquer temporairement tous les menus Navi+ ?</summary>
<p>Deux options :</p>
<ul>
<li><strong>Pour tout le site :</strong> désactivez le "Inject site-wide" dans l'administration du plugin — le runtime cesse de se charger sauf sur les pages avec un <code>[naviwp]</code> shortcode/block.</li>
<li><strong>Par menu :</strong> passez le menu en <strong>Brouillon</strong> dans l'éditeur.</li>
</ul>
</details>

<details>
<summary>Comment désinstaller le plugin ?</summary>
<p>Désactivez et supprimez-le depuis <strong>Plugins → Plugins installés</strong>. Le plugin ne stocke que l'identifiant du site et quelques options dans <code>wp_options</code> ; la désinstallation les supprime automatiquement. Vos menus sur le service Navi+ sont préservés — si vous réinstallez plus tard, vous pouvez continuer à utiliser les mêmes identifiants d'intégration.</p>
</details>

<h2 id="privacy">Confidentialité &amp; services externes</h2>

<p>Le plugin se connecte au service Navi+ Menu Builder pour créer et afficher des menus. Les données échangées peuvent inclure (mais ne sont pas limitées à) : votre <strong>nom de domaine</strong>, votre <strong>configuration de menu</strong>, et des données d'utilisation minimales nécessaires pour afficher les menus.</p>

<ul>
<li>Politique de confidentialité : <a href="https://naviplus.io/privacy">https://naviplus.io/privacy</a></li>
<li>Chargeur de script : <code>https://live.naviplus.app/start.js</code></li>
</ul>

<details>
<summary>Où puis-je signaler un bug ou demander une fonctionnalité ?</summary>
<p>Utilisez le forum de support officiel : <a href="https://wordpress.org/support/plugin/naviplus-menu-builder/">https://wordpress.org/support/plugin/naviplus-menu-builder/</a>. Pour des questions concernant le compte ou la facturation, envoyez un e-mail à <a href="mailto:support@naviplus.io">support@naviplus.io</a>.</p>
</details>
