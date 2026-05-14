---
description: Publica un menú de cuadrícula Navi+ en WordPress con el plugin Navi+ Menu Builder. Insértalo donde debería aparecer usando el [naviwp embed_id="..."] shortcode o bloque de Gutenberg.
lang: es
layout: default
permalink: /es/docs/usage/grid-menu/publish-on-wordpress/
title: Menú de cuadrícula — Publicar en WordPress
---
# Menú de cuadrícula — Publicar en WordPress

Un **Menú de cuadrícula** es un menú de **sección** — se renderiza en el lugar de la página donde lo incrustas. Es ideal para accesos directos de categorías, páginas principales y paneles de "¿qué te gustaría hacer?". En WordPress, el plugin Navi+ Menu Builder lo coloca a través de shortcode o bloque de Gutenberg; nunca editas archivos de tema.

> Otras plataformas (Wix, Squarespace, Webflow, sitios personalizados): ver [Publicar en Wix / Squarespace / Otros]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Pasos

1. **Instala el plugin** — ver [Instalar el plugin Navi+ Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Construye tu Menú de cuadrícula** en **Apariencia → Naviplus Menu Builder**. Ver [Menú de cuadrícula — Cómo usar]({{ site.baseurl }}/docs/usage/grid-menu/how-to-use/) y [Menú de cuadrícula responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/).
3. **Copia el ID de incrustación** (por ejemplo, `SF-123456789`).
4. **Incrústalo** usando uno de los métodos a continuación.

---

## Insertar el menú

### Opción 1 — Shortcode (recomendado)

```text
[naviwp embed_id="SF-123456789"]
```

Coloca esto en cualquier publicación, página o widget compatible con shortcode.

Lugares típicos:

- Una sección de héroe en la página de inicio con mosaicos de categorías.
- Una página de destino por encima de la línea de pliegue.
- El estado vacío de un archivo de categoría.

### Opción 2 — Bloque de Gutenberg

En el editor de bloques, **+ → Naviplus Menu Builder**, luego pega el ID de incrustación en la barra lateral del bloque. Un bloque de **Shortcode** simple con `[naviwp embed_id="SF-..."]` es equivalente.

### Opción 3 — Constructores de páginas (Elementor, Divi, Bricks, Oxygen)

Usa un widget de **Shortcode** con `[naviwp embed_id="SF-..."]`. Si un constructor no tiene un widget de Shortcode, un widget de **HTML** con el div de incrustación funciona:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

---

## Consejos para móviles

- Usa **[Menú de cuadrícula responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** para cambiar el número de columnas por punto de interrupción — por ejemplo, 4 columnas en escritorio, 2 en móvil.
- Mantén el contenido de los mosaicos corto — un ícono, una etiqueta de una o dos palabras, opcionalmente una pequeña descripción. Las etiquetas largas se envuelven de manera impredecible.
- Apunta a objetivos de toque de al menos 44 × 44 px incluyendo el relleno.

---

## Actualizando el menú más tarde

Las ediciones en el editor se aplican en la próxima carga de página en el front-end — no se requiere vaciar la caché de WordPress.

---

## Relacionado

- [WordPress / WooCommerce — resumen]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publica tus menús en WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Menú de cuadrícula responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
