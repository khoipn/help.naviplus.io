---
description: Installez le plugin Navi+ Menu Builder sur votre site WordPress ou WooCommerce — depuis le répertoire WordPress.org, un téléchargement ZIP, FTP ou WP-CLI.
lang: fr
layout: default
permalink: /fr/docs/integrations/wordpress-woocommerce/install-plugin/
title: Installer le plugin Navi+ Menu Builder
---
# Installer le plugin Navi+ Menu Builder

> Le nom complet du plugin sur WordPress.org est **Naviplus Menu Builder**. Dans le reste de ces documents, il est référencé comme **Navi+ Menu Builder** (ou juste **Navi+**).

Le plugin est publié sur le répertoire officiel des plugins WordPress.org, donc il s'installe de la même manière que tout autre plugin WordPress — pas de ZIP d'un tiers, pas de clé de licence.

> Répertoire : <https://wordpress.org/plugins/naviplus-menu-builder/>

---

## Option A — Installer depuis l'administration WordPress (recommandé)

1. Connectez-vous à votre administration WordPress (`/wp-admin/`).
2. Allez à **Plugins → Ajouter Nouveau**.
3. Recherchez **Naviplus Menu Builder** (ou juste **Navi+**).
4. Cliquez sur **Installer Maintenant**, puis **Activer**.

Après activation, le plugin est disponible sous **Apparence → Naviplus Menu Builder** dans la barre latérale de l'administration.

---

## Option B — Télécharger un ZIP

Utilisez ceci si votre hébergeur bloque les installations depuis le répertoire.

1. Sur la [page du plugin WordPress.org](https://wordpress.org/plugins/naviplus-menu-builder/), cliquez sur **Télécharger** pour obtenir le fichier `.zip`.
2. Dans votre administration, allez à **Plugins → Ajouter Nouveau → Télécharger Plugin**.
3. Choisissez le ZIP, cliquez sur **Installer Maintenant**, puis **Activer le Plugin**.

---

## Option C — FTP / gestionnaire de fichiers

1. Extrayez le ZIP du plugin. Le dossier racine à l'intérieur de l'archive est `naviplus-menu-builder/`.
2. Téléchargez ce dossier dans `wp-content/plugins/` sur votre serveur.
3. Dans **Plugins → Plugins Installés**, cliquez sur **Activer** sur **Naviplus Menu Builder**.

---

## Option D — WP-CLI

```bash
wp plugin install naviplus-menu-builder --activate
```

---

## Exigences

- WordPress **5.8** ou plus récent — il est recommandé d'utiliser la dernière version stable de WordPress que votre hébergeur prend en charge.
- Capacité d'administrateur — nécessaire pour installer des plugins et modifier **Apparence**.

---

## Après activation

Le plugin est installé mais ne rend encore rien — cela se produit après que vous ayez créé votre premier menu dans l'éditeur, moment auquel le plugin connecte automatiquement votre site à Navi+.

Continuez avec **[Créez votre premier menu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.
