---
description: Publica una barra de pestañas de Navi+ en WordPress con el plugin Navi+ AI Menu Builder — sin ediciones de código. La barra de pestañas es un menú fijo, por lo que se muestra en todo el sitio automáticamente una vez publicada en el editor.
lang: es
layout: default
permalink: /es/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/
title: Barra de pestañas — Publicar en WordPress
---
# Barra de pestañas — Publicar en WordPress

La **Barra de pestañas** es un menú **fijo** — se ancla a la ventana de visualización (típicamente cerca de la parte inferior en móviles) y se mantiene en su lugar a medida que los visitantes se desplazan. En WordPress, el plugin Navi+ AI Menu Builder renderiza la barra de pestañas en todo el sitio automáticamente; no necesitas pegar ningún código o shortcode.

> Otras plataformas (Wix, Squarespace, Webflow, sitios personalizados): ver [Publicar en Wix / Squarespace / Otros]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/).

---

## Pasos

1. **Instala el plugin** — ver [Instalar el plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Abre el editor** — en el admin de WordPress, ve a **Apariencia → Naviplus Menu Builder**.
3. **Construye tu Barra de pestañas** — elige el diseño de **Barra de pestañas**, añade de 3 a 5 destinos principales. Ver [Barra de pestañas — Cómo usar]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/) para consejos de diseño.
4. **Publica el menú** en el editor (estado: Publicado, no Borrador).

Eso es todo. La barra de pestañas aparece en el front end de tu sitio de WordPress de inmediato — sin shortcode, sin edición de tema. La incrustación en todo el sitio del plugin (activada por defecto) carga el runtime de Navi+ en cada página, y el runtime obtiene cada menú fijo publicado para tu sitio.

---

## Restringir la Barra de pestañas a páginas específicas

No desactives la incrustación en todo el sitio del plugin — eso apaga el runtime por completo. En su lugar, delimita la Barra de pestañas en el editor:

- **Reglas de visualización → Patrón de URL** — muestra la Barra de pestañas solo en URLs que coincidan con un glob (por ejemplo, `/shop/*`).
- **Reglas de visualización → Dispositivo** — restringir solo a móviles.
- **Reglas de visualización → Estado del visitante** — restringir a usuarios registrados, etc.

Las reglas de visualización son evaluadas por el runtime en el navegador, por lo que los cambios se aplican en la siguiente carga de página.

---

## Consejos móviles para la Barra de pestañas

- Mantén de **3 a 5 pestañas** — más que eso abarrotaría la ventana de visualización.
- Usa etiquetas cortas (una palabra cuando sea posible) y iconos claros.
- Prueba el tamaño del objetivo de toque en un dispositivo real, no solo en la vista previa del editor.
- Si la Barra de pestañas se superpone a otro elemento fijo (por ejemplo, un widget de chat), ver [Menú superponiéndose a otros elementos]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).

---

## Verifica que la Barra de pestañas esté activa

Agrega `#navidebug-on` a cualquier URL de página (por ejemplo, `https://your-site.com/#navidebug-on`). La página cambia al modo de depuración de Navi+ si el plugin está conectado. Agrega `#navidebug-off` para apagarlo.

Para verificaciones más profundas, ver [Crea tu primer menú — Verifica la conexión]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Relacionado

- [WordPress / WooCommerce — resumen]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publica tus menús en WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Preguntas frecuentes sobre Naviplus Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/)
