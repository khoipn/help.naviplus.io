---
description: Publica un menú de cuadrícula de Navi+ en WordPress con el complemento Navi+ AI Menu Builder. Insértalo donde debería aparecer usando el [naviwp embed_id="..."] shortcode o bloque de Gutenberg.
lang: es
layout: default
permalink: /es/docs/usage/grid-menu/publish-on-wordpress/
title: Menú de cuadrícula — Publicar en WordPress
---
# Menú de cuadrícula — Publicar en WordPress

Un **menú de cuadrícula** es un menú de **sección** — se renderiza en el lugar de la página donde lo insertas. Es ideal para accesos directos de categorías, páginas de hub y paneles de "¿qué te gustaría hacer?". En WordPress, el complemento Navi+ AI Menu Builder lo coloca a través de shortcode o bloque de Gutenberg; nunca editas archivos de tema.

> Otras plataformas (Wix, Squarespace, Webflow, sitios personalizados): ver [Publicar en Wix / Squarespace / Otros]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Pasos

1. **Instala el complemento** — ver [Instalar el complemento Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Construye tu menú de cuadrícula** en **Apariencia → Naviplus Menu Builder**. Ver [Menú de cuadrícula — Cómo usar]({{ site.baseurl }}/docs/usage/grid-menu/how-to-use/) y [Menú de cuadrícula receptivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/).
3. **Copia el ID de inserción** (por ejemplo, `SF-123456789`).
4. **Insértalo** usando uno de los métodos a continuación.

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

En el editor de bloques, **+ → Naviplus Menu Builder**, luego pega el ID de inserción en la barra lateral del bloque. Un bloque de **Shortcode** simple con `[naviwp embed_id="SF-..."]` es equivalente.

### Opción 3 — Constructores de páginas (Elementor, Divi, Bricks, Oxygen)

Usa un widget de **Shortcode** con `[naviwp embed_id="SF-..."]`. Si un constructor no tiene un widget de Shortcode, un widget de **HTML** con el div de inserción funciona:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

### Opción 4 — Selector CSS (inserción automática desde la aplicación Navi+)

En lugar de colocar un shortcode manualmente, puedes dejar que Navi+ inserte o reemplace automáticamente un elemento usando un Selector CSS — configurado completamente desde la aplicación Navi+.

#### Entendiendo el Selector CSS

Un Selector CSS apunta a un elemento HTML específico en tu página. Navi+ lo usa para saber exactamente **dónde** colocar tu menú — insertar antes, insertar después o reemplazar un elemento existente.

Para encontrar el Selector CSS correcto, usa:
- [Modo de depuración](/docs/usage/debug-mode-find-css-selectors/) — pasa el cursor sobre cualquier elemento y copia instantáneamente su selector
- [DevTools del navegador](/docs/usage/general/find-css-selector/) — método manual a través del inspector del navegador

#### Tres opciones de publicación

En la aplicación Navi+: haz clic en **Publicar en el sitio web** → activa **"Publicar menú por método de inserción/reemplazo"** → ingresa tu Selector CSS y elige una opción:

<details><summary>Opción A: Insertar antes</summary>
<p>Inserta el menú de cuadrícula inmediatamente <strong>antes</strong> del elemento seleccionado, mostrado como una sección completa.</p>
<p><strong>Ejemplo:</strong> <code>main</code> → el menú de cuadrícula aparece encima del área de contenido principal.</p>
<p>Esta es la configuración más común para un menú de cuadrícula en WordPress.</p>
<p>Selectores comunes para temas de WordPress:</p>
<ul>
<li><code>main</code> — la mayoría de los temas</li>
<li><code>#main</code> — Twenty Twenty, Astra, OceanWP</li>
<li><code>.site-main</code> — muchos temas</li>
<li><code>#content</code> — Divi, algunos temas predeterminados</li>
</ul>
</details>

<details><summary>Opción B: Insertar después</summary>
<p>Inserta el menú de cuadrícula inmediatamente <strong>después</strong> del elemento seleccionado.</p>
<p><strong>Ejemplo:</strong> <code>header</code> → el menú de cuadrícula aparece justo debajo del encabezado.</p>
<p>Selectores comunes para temas de WordPress:</p>
<ul>
<li><code>header</code> — la mayoría de los temas</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One y temas predeterminados de WordPress</li>
</ul>
</details>

<details><summary>Opción C: Reemplazar</summary>
<p>La mayoría de los sitios de WordPress no tienen un elemento de menú de cuadrícula incorporado para reemplazar. Insertar antes <code>main</code> es el enfoque recomendado.</p>
<p>Si tu tema tiene un elemento de estilo cuadrícula que deseas reemplazar, usa <a href="/docs/usage/debug-mode-find-css-selectors/">Modo de depuración</a> o <a href="/docs/usage/general/find-css-selector/">DevTools del navegador</a> para encontrar su selector.</p>
</details>

#### Apuntando a dispositivos específicos

Agrega un sufijo para aplicar el selector solo en un dispositivo específico:

| Sufijo | Aplica a |
|--------|------------|
| `(M)` | Solo móvil |
| `(D)` | Solo escritorio |
| *(ninguno)* | Ambos |

Ejemplo: `main(D)` — inserta el menú de cuadrícula solo en escritorio.

---

## Consejos para móviles

- Usa **[Menú de cuadrícula receptivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** para cambiar el conteo de columnas por punto de interrupción — por ejemplo, 4 columnas en escritorio, 2 en móvil.
- Mantén el contenido de los mosaicos corto — un ícono, una etiqueta de una o dos palabras, opcionalmente una pequeña descripción. Las etiquetas largas se envuelven de manera impredecible.
- Apunta a objetivos de toque de al menos 44 × 44 px incluyendo el relleno.

---

## Actualizando el menú más tarde

Las ediciones en el editor se aplican en la próxima carga de página en el front-end — no se requiere vaciar la caché de WordPress.

---

## Relacionado

- [WordPress / WooCommerce — resumen]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publica tus menús en WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Menú de cuadrícula receptivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
