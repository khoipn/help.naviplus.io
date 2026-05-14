---
description: Después de activar el plugin Navi+ Menu Builder, abre Apariencia → Naviplus Menu Builder, crea tu primer menú en el editor visual y deja que el plugin conecte automáticamente tu sitio de WordPress a Navi+.
lang: es
layout: default
permalink: /es/docs/integrations/wordpress-woocommerce/get-started/
title: Crea tu primer menú
---
# Crea tu primer menú

Una vez que el plugin está activado, puedes crear menús dentro de WordPress — sin registro separado, sin token que pegar.

---

## 1. Abre el generador de menús

En el administrador de WordPress, ve a:

> **Apariencia → Naviplus Menu Builder**

Esto abre el editor visual de Navi+ dentro de tu panel de WordPress.

---

## 2. Crea tu primer menú

Sigue el flujo en pantalla para crear un menú. Cuando guardes el primer menú, el plugin **conecta automáticamente** tu sitio a Navi+:

- Registra un **identificador de sitio** que permite al servicio Navi+ reconocer tu instalación de WordPress.
- Guarda ese identificador en WordPress para que los cambios posteriores en el menú se dirijan al sitio correcto.

> El identificador de sitio **no** es tu contraseña de WordPress y **no** es un token de Navi+ que necesitas gestionar. Es un valor opaco que el plugin maneja por ti.

No necesitas crear una cuenta de Navi+ antes de instalar el plugin — el guardado del primer menú maneja la conexión.

---

## 3. Diseña el diseño

Dentro del editor, elige un tipo de menú (Tab Bar, Slide / hamburguesa, Mega Menu, Grid, FAB), luego diseña el diseño. Documentación del editor:

- [Descripción general de tipos de menú]({{ site.baseurl }}/docs/usage/explore-common-menus/)
- [Elementos del menú — elementos, enlaces, íconos, insignias]({{ site.baseurl }}/docs/menu-items/item-overview/)
- [Descripción general del diseño]({{ site.baseurl }}/docs/design/design-overview/)

La estructura y los estilos del menú se almacenan en el servicio Navi+; WordPress solo almacena el identificador del sitio.

---

## 4. Verifica la conexión

Abre el front end de tu sitio. Los menús fijos (Tab Bar, FAB) que marques como **Publicado** en el editor aparecerán automáticamente en todo el sitio.

Para confirmar que el runtime se está cargando, usa cualquiera de:

- **Modo de depuración (todos):** añade `#navidebug-on` a cualquier URL — por ejemplo, `https://your-site.com/#navidebug-on`. La página cambia al modo de depuración de Navi+ si el plugin está conectado. Usa `#navidebug-off` para apagarlo.
- **Consola (desarrolladores):** abre DevTools → Consola; deberías ver un mensaje verde `Usando Navi+..`.

---

## Siguiente paso

Para Mega Menu y Grid Menu — colocados en lugares específicos de una página — consulta **[Publica tus menús]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)** para el `[naviwp]` shortcode y el bloque de Gutenberg.
