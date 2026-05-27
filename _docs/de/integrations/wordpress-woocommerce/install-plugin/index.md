---
description: Installieren Sie das Navi+ AI Menu Builder-Plugin auf Ihrer WordPress- oder WooCommerce-Website – aus dem WordPress.org-Verzeichnis, einem ZIP-Upload, FTP oder WP-CLI.
lang: de
layout: default
permalink: /de/docs/integrations/wordpress-woocommerce/install-plugin/
title: Installieren Sie das Navi+ AI Menu Builder-Plugin
---
# Installieren Sie das Navi+ AI Menu Builder-Plugin

> Der vollständige Name des Plugins auf WordPress.org ist **Naviplus Menu Builder**. In den restlichen Dokumenten wird es als **Navi+ AI Menu Builder** (oder einfach **Navi+**) bezeichnet.

Das Plugin ist im offiziellen WordPress.org-Pluginverzeichnis veröffentlicht, sodass es auf die gleiche Weise installiert wird wie jedes andere WordPress-Plugin – kein ZIP von einem Drittanbieter, kein Lizenzschlüssel.

> Verzeichnis: <https://wordpress.org/plugins/naviplus-menu-builder/>

---

## Option A — Installation über das WordPress-Admin (empfohlen)

1. Melden Sie sich in Ihrem WordPress-Admin an (`/wp-admin/`).
2. Gehen Sie zu **Plugins → Neu hinzufügen**.
3. Suchen Sie nach **Naviplus Menu Builder** (oder einfach **Navi+**).
4. Klicken Sie auf **Jetzt installieren**, dann auf **Aktivieren**.

Nach der Aktivierung ist das Plugin unter **Design → Naviplus Menu Builder** in der Admin-Seitenleiste verfügbar.

---

## Option B — ZIP hochladen

Verwenden Sie dies, wenn Ihr Host Installationen aus dem Verzeichnis blockiert.

1. Gehen Sie auf die [WordPress.org-Plugin-Seite](https://wordpress.org/plugins/naviplus-menu-builder/), klicken Sie auf **Download**, um die `.zip`-Datei zu erhalten.
2. Gehen Sie in Ihrem Admin zu **Plugins → Neu hinzufügen → Plugin hochladen**.
3. Wählen Sie die ZIP-Datei aus, klicken Sie auf **Jetzt installieren**, dann auf **Plugin aktivieren**.

---

## Option C — FTP / Dateimanager

1. Entpacken Sie die Plugin-ZIP. Der Stammordner im Archiv ist `naviplus-menu-builder/`.
2. Laden Sie diesen Ordner in `wp-content/plugins/` auf Ihrem Server hoch.
3. Klicken Sie in **Plugins → Installierte Plugins** auf **Aktivieren** bei **Naviplus Menu Builder**.

---

## Option D — WP-CLI

```bash
wp plugin install naviplus-menu-builder --activate
```

---

## Anforderungen

- WordPress **5.8** oder neuer – es wird empfohlen, die neueste stabile WordPress-Version zu verwenden, die Ihr Host unterstützt.
- Administratorrechte – erforderlich, um Plugins zu installieren und **Design** zu bearbeiten.

---

## Nach der Aktivierung

Das Plugin ist installiert, rendert jedoch noch nichts – das geschieht, nachdem Sie Ihr erstes Menü im Editor erstellt haben, zu diesem Zeitpunkt verbindet das Plugin Ihre Website automatisch mit Navi+.

Fahren Sie fort mit **[Erstellen Sie Ihr erstes Menü]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.
