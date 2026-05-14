---
description: Publica un menú Mega Navi+ (Desktop) en WordPress con el plugin Navi+ Menu Builder. Colócalo en cualquier publicación, página, widget o constructor de páginas usando el shortcode [naviwp embed_id="..."] o el bloque de Gutenberg.
lang: es
layout: default
permalink: /es/docs/usage/mega-menu-desktop/publish-on-wordpress/
title: Mega Menu (Desktop) — Publicar en WordPress
---
# Mega Menu (Desktop) — Publicar en WordPress

Un **Mega Menu (Desktop)** es un **menú de sección** — no se ancla a la ventana gráfica, se renderiza en el lugar exacto de la página donde lo incrustas (típicamente en el encabezado del sitio). En WordPress, el plugin Navi+ Menu Builder lo incrusta a través de shortcode o bloque de Gutenberg — nunca editas archivos de tema.

> Otras plataformas (Wix, Squarespace, Webflow, sitios personalizados): ver [Publicar en Wix / Squarespace / Otros]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/).

---

## Pasos

1. **Instala el plugin** — ver [Instalar el plugin Navi+ Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Construye tu Mega Menu** en **Apariencia → Naviplus Menu Builder**. Ver [Mega Menu (Desktop) — Cómo usar]({{ site.baseurl }}/docs/usage/mega-menu-desktop/how-to-use/) para orientación de diseño.
3. **Copia el ID de Incrustación** del menú (mostrado en el panel de publicación — se ve como `SF-123456789`).
4. **Inserta el menú** donde lo desees en la página (siguiente sección).

---

## Inserta el menú — tres opciones

### Opción 1 — Shortcode (funciona en todas partes)

Pega esto en cualquier publicación, página o widget compatible con shortcode:

```text
[naviwp embed_id="SF-123456789"]
```

Para un Mega Menu que debería aparecer en el **encabezado del sitio** en cada página, el lugar más limpio es un área de widget de encabezado (si tu tema proporciona una). Si no, usa un bloque de encabezado global / parte de plantilla (temas de Edición Completa del Sitio), o recurre a la Opción 3 a continuación.

### Opción 2 — Bloque de Gutenberg

1. En el editor de bloques haz clic en **+ → Naviplus Menu Builder**.
2. Pega el **ID de Incrustación** en la barra lateral del bloque.

También puedes soltar un bloque de **Shortcode** genérico con `[naviwp embed_id="SF-..."]`.

### Opción 3 — Constructores de páginas (Elementor, Divi, Bricks, Oxygen)

Usa el widget de **Shortcode** del constructor y pega `[naviwp embed_id="SF-..."]`. Si prefieres usar HTML sin procesar, suelta el div de incrustación directamente:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

El plugin ya carga el tiempo de ejecución de Navi+, por lo que el menú se renderiza dentro de ese contenedor.

---

## Consideraciones móviles

Un Mega Menu de escritorio es, por definición, un diseño orientado a escritorio. En pantallas pequeñas, generalmente no debería renderizarse en absoluto — combínalo con un [Mega Menu (Móvil)]({{ site.baseurl }}/docs/usage/mega-menu-mobile/) o [Slide Menu]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/) y usa reglas de visualización para ocultar cada uno en el otro punto de interrupción.

En el editor abre **Reglas de visualización → Dispositivo** y restringe el Mega Menu (Desktop) a **solo escritorio**.

---

## Actualizando el menú más tarde

Edita el menú en el administrador de WordPress (o en la aplicación web de Navi+). Los cambios se aplican en la próxima carga de página en el front-end — no se requiere vaciar la caché de WordPress, porque los menús se obtienen en tiempo de ejecución por el navegador.

---

## Relacionado

- [WordPress / WooCommerce — resumen]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publica tus menús en WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Mega Menu (Desktop) — FAQ]({{ site.baseurl }}/docs/usage/mega-menu-desktop/faq/)
