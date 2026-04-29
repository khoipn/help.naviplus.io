---
description: Publica menús Sticky (Tabbar, Mobile Header, FAB) en Navi+ — usando App Embeds para Shopify o inyección de script para sitios Global.
layout: default
permalink: /es/docs/publish/publish-sticky/
title: Publish sticky — Tabbar & FAB
---
# Publish Sticky — Tabbar & FAB

Aplicable a: **Tabbar**, **Mobile Header**, **FAB / Support bar**

Los menús Sticky son flotantes — siempre aparecen en la pantalla y no están vinculados a una posición fija en el DOM. El método de inserción es el más sencillo: activación en todo el sitio mediante un único script.

---

## Shopify — 3 pasos

### Paso 1: Activar App Embeds en Theme Editor

Ve a **Theme Editor → App Embeds** y activa el interruptor de Navi+.

- Esto **no cambia el diseño del tema** y se puede desactivar en cualquier momento sin afectar la tienda.
- Solo necesita hacerse **una vez por tienda** — omite este paso para los menús siguientes.

### Paso 2: Activar "Publicar este menú en modo sticky"

El interruptor en la tarjeta **Paso 2** del modal Publish. Activado = menú en vivo, desactivado = oculto del sitio web.

### Paso 3 (opcional): Configurar visibilidad por dispositivo y página

Consulta [Publish Filter](/es/docs/publish/publish-filter/) para más detalles.

---

## Global (WordPress, Wix, Webflow...) — 3 pasos

### Paso 1: Pegar el código de inserción en `<head>`

El código se muestra en el modal con un botón **Copiar**. Pégalo en el `<head>` de tu sitio web:

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` identifica tu tienda — cada tienda tiene un token único.
- `start.js` carga de forma asíncrona y no bloquea el renderizado de la página.

### Paso 2: Activar "Publicar este menú en modo sticky"

Igual que Shopify — activa el interruptor.

### Paso 3 (opcional): Configurar visibilidad por dispositivo y página

Consulta [Publish Filter](/es/docs/publish/publish-filter/) para más detalles.

---

## Notas por tipo de menú

| Menú | Restricción |
|---|---|
| Mobile Header | Interruptor de escritorio desactivado — solo móvil |
| FAB / Support bar | Sin selector de posición (FAB tiene su propio posicionamiento en la pestaña Setting) |
| Tabbar | Opciones completas para móvil + escritorio disponibles |

---

## Solución de problemas

**¿El menú no aparece después de activar el interruptor?**
1. Verifica que App Embeds esté activado (Shopify) o que el código de inserción esté pegado correctamente (Global).
2. Verifica la configuración del dispositivo — **Mostrar menú en móvil** o **Mostrar menú en escritorio** debe estar activado.
3. Verifica el filtro de URL — puede estar filtrando la página actual.
4. Actualiza el navegador forzando la recarga (Ctrl+Mayús+R) para limpiar la caché.
