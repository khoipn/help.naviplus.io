---
description: 'Publica menús Navi+ en WordPress utilizando el plugin Navi+ AI Menu Builder: los menús fijos se renderizan automáticamente en todo el sitio, mientras que los menús de sección se colocan a través del shortcode [naviwp] o bloque de Gutenberg.'
lang: es
layout: default
permalink: /es/docs/integrations/wordpress-woocommerce/publish-menus/
title: Publica tus menús en WordPress
---
# Publica tus menús en WordPress

Navi+ tiene dos modos de publicación — **sticky** y **section** — y el plugin de WordPress soporta ambos. El modo que se aplica depende del tipo de menú.

| Tipo de menú | Modo | Dónde aparece |
| --- | --- | --- |
| Tab Bar | Sticky | Anclado a la ventana de visualización, en todo el sitio |
| FAB | Sticky | Botón flotante, en todo el sitio |
| Slide Menu | Sticky / contextual | Activado al tocar cualquier elemento |
| Mega Menu (Desktop) | Section | En la posición donde lo incrustes |
| Mega Menu (Mobile) | Section | En la posición donde lo incrustes |
| Grid Menu | Section | En la posición donde lo incrustes |

Consulta [Publish overview]({{ site.baseurl }}/docs/publish/publish-overview/) para la comparación completa de sticky vs section.

---

## Menús fijos — Tab Bar, FAB, Slide

Con el plugin instalado y tu primer menú guardado, los menús fijos marcados como **Published** en el editor se renderizan automáticamente en cada página de tu sitio.

No necesitas insertar nada. Las reglas de visualización (dispositivo, patrón de URL, estado de inicio de sesión) son evaluadas por el runtime de Navi+ en el navegador.

### Alternando la incrustación en todo el sitio

El administrador del plugin incluye un interruptor para la incrustación en todo el sitio:

- **On (predeterminado):** el runtime se inyecta en `<head>` de cada página; los menús fijos se renderizan en todo el sitio.
- **Off:** el runtime solo se carga en páginas que incluyen un `[naviwp]` shortcode o bloque. Usa esto si deseas que los menús aparezcan en un pequeño conjunto de páginas (por ejemplo, páginas de destino solo para móviles).

Si un menú fijo no aparece, verifica:

- El menú está **Published** en el editor (no en borrador).
- Las reglas de visualización coinciden con la página que estás probando.
- El runtime está cargado — consulta la [verify section]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Menús de sección — Mega Menu, Grid

Los menús de sección deben colocarse en un lugar específico de una página. El plugin ofrece tres maneras.

### Método 1 — Shortcode (recomendado)

En cualquier publicación, página o widget compatible con shortcode:

```text
[naviwp embed_id="SF-123456789"]
```

Reemplaza `SF-123456789` con el **Embed ID** de tu menú (mostrado en el editor en el panel de publicación del menú).

### Método 2 — Bloque de Gutenberg

En el editor de bloques:

1. Haz clic en **+** para insertar un nuevo bloque.
2. Busca **Naviplus Menu Builder**.
3. Inserta el bloque y pega el **Embed ID** de tu menú en la barra lateral del bloque.

El bloque renderiza un marcador de posición vacío en el editor y es reemplazado por el menú en vivo en el front end. También puedes soltar un bloque de **Shortcode** y pegar `[naviwp embed_id="..."]` — eso funciona de manera idéntica.

### Método 3 — Dentro de un bloque de Párrafo

El plugin reconoce `[naviwp ...]` shortcodes pegados directamente en un bloque de Párrafo; no tienes que cambiar primero a un bloque de Shortcode.

### Método 4 — Constructores de páginas (Elementor, Divi, Bricks, Oxygen)

Usa el widget de **Shortcode** del constructor y pega `[naviwp embed_id="..."]`. Si un constructor no tiene widget de Shortcode, un widget de **HTML** con el div de incrustación también funciona:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

El plugin ya carga el runtime de Navi+, por lo que el menú se renderiza dentro de ese contenedor.

---

## Un token, muchos menús

El plugin carga el runtime una vez por página y obtiene cada menú — fijo o de sección — del mismo servicio de Navi+. Para dejar de publicar un menú, cámbialo a **Draft** en el editor; no se requiere ningún cambio en WordPress.

---

## Plugins de caché (WP Rocket, W3 Total Cache, LiteSpeed Cache)

El runtime de Navi+ se sirve desde un CDN y es amigable con la caché. No necesitas excluirlo de la caché de página. Después de actualizar menús en el editor, los cambios aparecen en la siguiente carga de página — no se requiere vaciar la caché de WordPress, porque los menús se obtienen en tiempo de ejecución por el navegador, no se hornean en el HTML.

Si ves salida obsoleta, generalmente es la caché del navegador. Una recarga forzada (Cmd/Ctrl + Shift + R) la borra.
