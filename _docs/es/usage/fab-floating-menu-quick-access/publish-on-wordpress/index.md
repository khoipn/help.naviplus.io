---
description: 'Publica un Navi+ FAB (Floating Action Button) en WordPress con el plugin Navi+ Menu Builder. El FAB es un menú fijo: una vez publicado en el editor, aparece automáticamente en todo el sitio.'
lang: es
layout: default
permalink: /es/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/
title: FAB — Publicar en WordPress
---
# FAB — Publicar en WordPress

A **FAB (Floating Action Button)** es un **menú fijo** — flota sobre la página (típicamente en una esquina) y se mantiene en su lugar mientras los visitantes desplazan. En WordPress, el plugin Navi+ Menu Builder lo renderiza automáticamente en todo el sitio; no necesitas pegar ningún código o shortcode.

> Otras plataformas (Wix, Squarespace, Webflow, sitios personalizados): ver [Publicar en Wix / Squarespace / Otros]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress-woocommerce-wix-others/).

---

## Pasos

1. **Instala el plugin** — ver [Instalar el plugin Navi+ Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Construye tu FAB** en **Apariencia → Naviplus Menu Builder**. Ver [FAB — Cómo usar]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/) para orientación de diseño (acción única vs. menú expandible).
3. **Publica el menú** en el editor (estado: Publicado, no Borrador).

El FAB aparece en cada página de tu sitio de WordPress de inmediato. Sin shortcode, sin edición de tema.

---

## Restringir el FAB a páginas o audiencias específicas

No desactives la incrustación en todo el sitio del plugin (eso apaga el runtime por completo). Define el alcance del FAB en el editor:

- **Reglas de visualización → Patrón de URL** — mostrar solo en `/contact*`, ocultar en `/checkout*`, etc.
- **Reglas de visualización → Dispositivo** — escritorio, móvil o ambos.
- **Reglas de visualización → Estado del visitante** — solo usuarios registrados, etc.

---

## Consejos para móviles

- Elige una esquina que no entre en conflicto con la interfaz de usuario del navegador en móvil (la esquina inferior derecha es un predeterminado seguro; el centro inferior puede chocar con la barra de URL en iOS).
- Asegúrate de que el FAB no se superponga a una Tab Bar o widget de chat. Ver [Menú superponiéndose a otros elementos]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).
- Si el FAB se expande en un menú, mantén la lista de acciones corta (3–6 elementos) — listas largas son incómodas al tacto.

---

## Verifica que el FAB esté activo

Agrega `#navidebug-on` a cualquier URL de página. La página cambia al modo de depuración de Navi+ si el plugin está conectado. Ver [Crea tu primer menú — Verifica la conexión]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Relacionado

- [WordPress / WooCommerce — resumen]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publica tus menús en WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [FAB — Cómo usar]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/)
