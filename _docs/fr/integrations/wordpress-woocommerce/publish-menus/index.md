---
description: Publiez des menus Navi+ sur WordPress en utilisant le plugin Navi+ Menu Builder — les menus collants s'affichent automatiquement sur tout le site, tandis que les menus de section sont placés via le shortcode [naviwp] ou le bloc Gutenberg.
lang: fr
layout: default
permalink: /fr/docs/integrations/wordpress-woocommerce/publish-menus/
title: Publiez vos menus sur WordPress
---
# Publiez vos menus sur WordPress

Navi+ a deux modes de publication — **collant** et **section** — et le plugin WordPress prend en charge les deux. Le mode qui s'applique dépend du type de menu.

| Type de menu | Mode | Où il apparaît |
| --- | --- | --- |
| Tab Bar | Collant | Ancré à la fenêtre d'affichage, sur tout le site |
| FAB | Collant | Bouton flottant, sur tout le site |
| Slide Menu | Collant / contextuel | Déclenché en appuyant sur n'importe quel élément |
| Mega Menu (Desktop) | Section | À la position où vous l'intégrez |
| Mega Menu (Mobile) | Section | À la position où vous l'intégrez |
| Grid Menu | Section | À la position où vous l'intégrez |

Voir [Aperçu de la publication]({{ site.baseurl }}/docs/publish/publish-overview/) pour la comparaison complète entre collant et section.

---

## Menus collants — Tab Bar, FAB, Slide

Avec le plugin installé et votre premier menu enregistré, les menus collants marqués **Publié** dans l'éditeur s'affichent automatiquement sur chaque page de votre site.

Vous n'avez rien besoin d'insérer. Les règles d'affichage (appareil, modèle d'URL, état de connexion) sont évaluées par le runtime de Navi+ dans le navigateur.

### Activation de l'intégration sur tout le site

L'administration du plugin comprend un interrupteur pour l'intégration sur tout le site :

- **Activé (par défaut) :** le runtime est injecté dans `<head>` de chaque page ; les menus collants s'affichent sur l'ensemble du site.
- **Désactivé :** le runtime ne se charge que sur les pages qui incluent un `[naviwp]` shortcode ou bloc. Utilisez cela si vous souhaitez que les menus apparaissent sur un petit ensemble de pages (par exemple, des pages d'atterrissage uniquement mobiles).

Si un menu collant n'apparaît pas, vérifiez :

- Le menu est **Publié** dans l'éditeur (pas en brouillon).
- Les règles d'affichage correspondent à la page que vous testez.
- Le runtime est chargé — voir la [section de vérification]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Menus de section — Mega Menu, Grid

Les menus de section doivent être placés à un endroit spécifique dans une page. Le plugin offre trois méthodes.

### Méthode 1 — Shortcode (recommandé)

Dans n'importe quel article, page ou widget compatible avec les shortcodes :

```text
[naviwp embed_id="SF-123456789"]
```

Remplacez `SF-123456789` par l'**ID d'intégration** de votre menu (affiché dans l'éditeur sur le panneau de publication du menu).

### Méthode 2 — Bloc Gutenberg

Dans l'éditeur de blocs :

1. Cliquez sur **+** pour insérer un nouveau bloc.
2. Recherchez **Naviplus Menu Builder**.
3. Insérez le bloc et collez l'**ID d'intégration** de votre menu dans la barre latérale du bloc.

Le bloc affiche un espace réservé vide dans l'éditeur et est remplacé par le menu en direct sur le front-end. Vous pouvez également insérer un bloc **Shortcode** et coller `[naviwp embed_id="..."]` — cela fonctionne de manière identique.

### Méthode 3 — À l'intérieur d'un bloc de paragraphe

Le plugin reconnaît les shortcodes `[naviwp ...]` collés directement dans un bloc de paragraphe ; vous n'avez pas besoin de passer d'abord à un bloc de shortcode.

### Méthode 4 — Constructeurs de pages (Elementor, Divi, Bricks, Oxygen)

Utilisez le widget **Shortcode** du constructeur et collez `[naviwp embed_id="..."]`. Si un constructeur n'a pas de widget Shortcode, un widget **HTML** avec le div d'intégration fonctionne aussi :

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

Le plugin charge déjà le runtime de Navi+, donc le menu s'affiche à l'intérieur de ce conteneur.

---

## Un jeton, plusieurs menus

Le plugin charge le runtime une fois par page et récupère chaque menu — collant ou section — depuis le même service Navi+. Pour arrêter la publication d'un menu, passez-le en **Brouillon** dans l'éditeur ; aucun changement WordPress n'est requis.

---

## Plugins de mise en cache (WP Rocket, W3 Total Cache, LiteSpeed Cache)

Le runtime de Navi+ est servi depuis un CDN et est compatible avec la mise en cache. Vous **n'avez pas** besoin de l'exclure de la mise en cache des pages. Après avoir mis à jour les menus dans l'éditeur, les changements apparaissent lors du prochain chargement de la page — aucun vidage de cache WordPress requis, car les menus sont récupérés à l'exécution par le navigateur, et non intégrés dans le HTML.

Si vous voyez une sortie obsolète, c'est généralement le cache du navigateur. Un rechargement complet (Cmd/Ctrl + Shift + R) le vide.
