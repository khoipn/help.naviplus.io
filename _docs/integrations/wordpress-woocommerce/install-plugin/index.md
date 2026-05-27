---
description: Install the Navi+ AI Menu Builder plugin on your WordPress or WooCommerce site — from the WordPress.org directory, a ZIP upload, FTP, or WP-CLI.
layout: default
permalink: /docs/integrations/wordpress-woocommerce/install-plugin/
title: Install the Navi+ AI Menu Builder plugin
---
# Install the Navi+ AI Menu Builder plugin

> The plugin's full name on WordPress.org is **Naviplus Menu Builder**. In the rest of these docs it's referred to as **Navi+ AI Menu Builder** (or just **Navi+**).

The plugin is published on the official WordPress.org plugin directory, so it installs the same way as any other WordPress plugin — no ZIP from a third party, no license key.

> Directory: <https://wordpress.org/plugins/naviplus-menu-builder/>

---

## Option A — Install from the WordPress admin (recommended)

1. Log in to your WordPress admin (`/wp-admin/`).
2. Go to **Plugins → Add New**.
3. Search for **Naviplus Menu Builder** (or just **Navi+**).
4. Click **Install Now**, then **Activate**.

After activation the plugin is available under **Appearance → Naviplus Menu Builder** in the admin sidebar.

---

## Option B — Upload a ZIP

Use this if your host blocks installs from the directory.

1. On the [WordPress.org plugin page](https://wordpress.org/plugins/naviplus-menu-builder/), click **Download** to get the `.zip` file.
2. In your admin, go to **Plugins → Add New → Upload Plugin**.
3. Pick the ZIP, click **Install Now**, then **Activate Plugin**.

---

## Option C — FTP / file manager

1. Extract the plugin ZIP. The root folder inside the archive is `naviplus-menu-builder/`.
2. Upload that folder into `wp-content/plugins/` on your server.
3. In **Plugins → Installed Plugins**, click **Activate** on **Naviplus Menu Builder**.

---

## Option D — WP-CLI

```bash
wp plugin install naviplus-menu-builder --activate
```

---

## Requirements

- WordPress **5.8** or newer — using the latest stable WordPress your host supports is recommended.
- Administrator capability — needed to install plugins and edit **Appearance**.

---

## After activation

The plugin is installed but not yet rendering anything — that happens after you create your first menu in the editor, at which point the plugin auto-connects your site to Navi+.

Continue with **[Create your first menu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.
