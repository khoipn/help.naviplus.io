---
description: 在您的 WordPress 或 WooCommerce 网站上安装 Navi+ 菜单构建器插件 — 从 WordPress.org 目录、ZIP 上传、FTP 或 WP-CLI。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/integrations/wordpress-woocommerce/install-plugin/
title: 安装 Navi+ 菜单构建器插件
---
# 安装 Navi+ 菜单构建器插件

> 插件在 WordPress.org 上的全名是 **Naviplus Menu Builder**。在其余文档中称为 **Navi+ Menu Builder**（或仅 **Navi+**）。

该插件发布在官方 WordPress.org 插件目录中，因此安装方式与其他 WordPress 插件相同 — 不需要来自第三方的 ZIP，也不需要许可证密钥。

> 目录: <https://wordpress.org/plugins/naviplus-menu-builder/>

---

## 选项 A — 从 WordPress 管理员安装（推荐）

1. 登录到您的 WordPress 管理员 (`/wp-admin/`)。
2. 转到 **插件 → 添加新**。
3. 搜索 **Naviplus Menu Builder**（或仅 **Navi+**）。
4. 点击 **立即安装**，然后 **激活**。

激活后，该插件在管理员侧边栏的 **外观 → Naviplus Menu Builder** 下可用。

---

## 选项 B — 上传 ZIP

如果您的主机阻止从目录安装，请使用此选项。

1. 在 [WordPress.org 插件页面](https://wordpress.org/plugins/naviplus-menu-builder/)，点击 **下载** 获取 `.zip` 文件。
2. 在您的管理员中，转到 **插件 → 添加新 → 上传插件**。
3. 选择 ZIP，点击 **立即安装**，然后 **激活插件**。

---

## 选项 C — FTP / 文件管理器

1. 解压插件 ZIP。归档中的根文件夹是 `naviplus-menu-builder/`。
2. 将该文件夹上传到 `wp-content/plugins/` 在您的服务器上。
3. 在 **插件 → 已安装插件** 中，点击 **激活** 在 **Naviplus Menu Builder** 上。

---

## 选项 D — WP-CLI

```bash
wp plugin install naviplus-menu-builder --activate
```

---

## 要求

- WordPress **5.8** 或更新版本 — 建议使用您的主机支持的最新稳定 WordPress。
- 管理员权限 — 安装插件和编辑 **外观** 所需。

---

## 激活后

插件已安装但尚未渲染任何内容 — 这发生在您在编辑器中创建第一个菜单之后，此时插件会自动将您的网站连接到 Navi+。

继续 **[创建您的第一个菜单]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**。
