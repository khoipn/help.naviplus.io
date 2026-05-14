---
description: Instala el plugin Navi+ Menu Builder en tu sitio de WordPress o WooCommerce — desde el directorio de WordPress.org, una carga ZIP, FTP o WP-CLI.
lang: es
layout: default
permalink: /es/docs/integrations/wordpress-woocommerce/install-plugin/
title: Instala el plugin Navi+ Menu Builder
---
# Instala el plugin Navi+ Menu Builder

> El nombre completo del plugin en WordPress.org es **Naviplus Menu Builder**. En el resto de estos documentos se le denomina **Navi+ Menu Builder** (o simplemente **Navi+**).

El plugin está publicado en el directorio oficial de plugins de WordPress.org, por lo que se instala de la misma manera que cualquier otro plugin de WordPress — sin ZIP de un tercero, sin clave de licencia.

> Directorio: <https://wordpress.org/plugins/naviplus-menu-builder/>

---

## Opción A — Instalar desde el administrador de WordPress (recomendado)

1. Inicia sesión en tu administrador de WordPress (`/wp-admin/`).
2. Ve a **Plugins → Añadir nuevo**.
3. Busca **Naviplus Menu Builder** (o simplemente **Navi+**).
4. Haz clic en **Instalar ahora**, luego en **Activar**.

Después de la activación, el plugin está disponible en **Apariencia → Naviplus Menu Builder** en la barra lateral del administrador.

---

## Opción B — Subir un ZIP

Usa esto si tu proveedor de hosting bloquea instalaciones desde el directorio.

1. En la [página del plugin de WordPress.org](https://wordpress.org/plugins/naviplus-menu-builder/), haz clic en **Descargar** para obtener el `.zip` archivo.
2. En tu administrador, ve a **Plugins → Añadir nuevo → Subir plugin**.
3. Selecciona el ZIP, haz clic en **Instalar ahora**, luego en **Activar plugin**.

---

## Opción C — FTP / administrador de archivos

1. Extrae el ZIP del plugin. La carpeta raíz dentro del archivo es `naviplus-menu-builder/`.
2. Sube esa carpeta a `wp-content/plugins/` en tu servidor.
3. En **Plugins → Plugins instalados**, haz clic en **Activar** en **Naviplus Menu Builder**.

---

## Opción D — WP-CLI

```bash
wp plugin install naviplus-menu-builder --activate
```

---

## Requisitos

- WordPress **5.8** o más reciente — se recomienda usar la última versión estable de WordPress que tu proveedor de hosting soporte.
- Capacidad de administrador — necesaria para instalar plugins y editar **Apariencia**.

---

## Después de la activación

El plugin está instalado pero aún no está renderizando nada — eso sucede después de que creas tu primer menú en el editor, momento en el cual el plugin conecta automáticamente tu sitio a Navi+.

Continúa con **[Crea tu primer menú]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.
