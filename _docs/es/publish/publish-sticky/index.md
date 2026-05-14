---
description: Publicar menús fijos (Tabbar, Encabezado móvil, FAB) en Navi+ — utilizando App Embeds para Shopify o inyección de scripts para sitios globales.
lang: es
layout: default
permalink: /es/docs/publish/publish-sticky/
title: Publicar fijo — Tabbar & FAB
---
# Publicar Fijo — Tabbar & FAB

Aplica a: **Tabbar**, **Encabezado Móvil**, **FAB / Barra de Soporte**

Los menús fijos son flotantes — siempre aparecen en la pantalla y no están adjuntos a una posición fija en el DOM. El método de incrustación es el más simple: activa en todo el sitio a través de un solo script.

---

## Shopify — 3 pasos

### Paso 1: Habilitar App Embeds en el Editor de Temas

Ve a **Editor de Temas → App Embeds** y activa el interruptor de Navi+.

- Esto **no cambia el diseño del tema** y se puede desactivar en cualquier momento sin afectar la tienda.
- Solo necesita hacerse **una vez por tienda** — omite este paso para menús posteriores.

### Paso 2: Habilitar "Publicar este menú en modo fijo"

El interruptor en la tarjeta de **Paso 2** del modal de Publicar. Habilitar = menú está activo, deshabilitar = oculto del sitio web.

### Paso 3 (opcional): Configurar visibilidad de dispositivo y página

Consulta [Filtro de Publicación](/docs/publish/publish-filter/) para más detalles.

---

## Global (WordPress, Wix, Webflow...) — 3 pasos

### Paso 1: Pegar el código de incrustación en `<head>`

El código se muestra en el modal con un botón de **Copiar**. Pégalo en el `<head>` de tu sitio web:

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` identifica tu tienda — cada tienda tiene un token único.
- `start.js` se carga de forma asíncrona y no bloquea el renderizado de la página.

### Paso 2: Habilitar "Publicar este menú en modo fijo"

Igual que en Shopify — habilita el interruptor.

### Paso 3 (opcional): Configurar visibilidad de dispositivo y página

Consulta [Filtro de Publicación](/docs/publish/publish-filter/) para más detalles.

---

## Notas por tipo de menú

| Menú | Restricción |
|---|---|
| Encabezado Móvil | Interruptor de escritorio deshabilitado — solo móvil |
| FAB / Barra de Soporte | Sin selector de posición (FAB tiene su propia posición en la pestaña de Configuración) |
| Tabbar | Opciones completas para móvil + escritorio disponibles |

---

## Solución de problemas

**¿El menú no aparece después de habilitar el interruptor?**
1. Verifica que App Embeds esté habilitado (Shopify) o que el código de incrustación esté pegado correctamente (Global).
2. Verifica la configuración del dispositivo — **Mostrar menú en móvil** o **Mostrar menú en escritorio** deben estar activados.
3. Verifica el filtro de URL — puede estar filtrando la página actual.
4. Actualiza el navegador (Ctrl+Shift+R) para borrar la caché.
