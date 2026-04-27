---
description: Publica tu menú Navi+ en tu sitio web — activar/desactivar, elegir método de inserción, configurar visibilidad por dispositivo y filtrar por URL.
layout: default
permalink: /es/docs/publish/
title: Publicar
---
# Publicar

La sección **Publicar** controla cómo aparece tu menú en tu sitio web en vivo: activar/desactivar el menú, elegir el método de inserción, configurar la visibilidad por dispositivo y filtrar por URL. Este es el paso final después del diseño — sin guardar la configuración de Publish, el menú no aparecerá.

---

## Temas

| # | Tema | |
|---|---|---|
| 1 | Descripción general de tipos de menú y métodos de implementación | [Publish Overview](/es/docs/publish/publish-overview/) |
| 2 | Sticky / FAB — App Embeds (Shopify) o `<head>` (Global) | [Publish Sticky](/es/docs/publish/publish-sticky/) |
| 3 | Menú Slide — activación basada en disparador | [Publish Slide](/es/docs/publish/publish-slide/) |
| 4 | Section / Mega / Grid — Insertar/Reemplazar y App Block | [Publish Section](/es/docs/publish/publish-section/) |
| 5 | Filtrar por dispositivo y palabra clave de URL | [Publish Filter](/es/docs/publish/publish-filter/) |
| 6 | Optimizar velocidad y UX tras la publicación | [Publish Optimize](/es/docs/publish/publish-optimize/) |

---

## Referencia rápida

```
Tipo de menú         Método principal
────────────────────────────────────────────────────
Sticky / TABBAR      App Embeds (Shopify) / <head> (Global) + interruptor de activación
Sticky / FAB         App Embeds (Shopify) / <head> (Global) + interruptor de activación
Slide (CONTEXT)      App Embeds / <head> + interruptor de activación + configurar disparador
Section (Mega/Grid)  Insertar/Reemplazar (CSS Selector) o App Block (Shopify)
```

**Regla:** Interruptor activado = menú en vivo. Interruptor desactivado = completamente oculto del sitio web, no es necesario eliminar el código de inserción.
