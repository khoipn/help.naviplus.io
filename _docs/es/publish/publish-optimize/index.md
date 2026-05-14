---
description: Optimizar la velocidad y la UX después de publicar menús de Navi+ — prevenir el parpadeo del contenido original al usar Insertar/Reemplazar o activadores de Selector CSS.
lang: es
layout: default
permalink: /es/docs/publish/publish-optimize/
title: Publicar optimizar — Velocidad y UX
---
# Publicar Optimizar — Velocidad y UX

Cuando se utiliza **Insertar/Reemplazar** (menú de sección) o **activador de Selector CSS** (menú deslizante), el sitio web necesita un breve momento para cargar Navi+. Durante ese tiempo, el elemento original (el antiguo menú del tema) sigue siendo visible — causando un **parpadeo** o cambio de diseño.

---

## ¿Cuándo se necesita optimización?

| Método | ¿Necesita optimización? |
|---|---|
| Sticky / FAB (Incrustaciones de App / `<head>`) | No — el menú se agrega al DOM, nada se reemplaza |
| Menú deslizante — Método 1 (abrir desde el elemento de Navi+) | No — el botón de activación es un elemento de Navi+ |
| **Menú deslizante — Método 2 (activador de Selector CSS)** | **Sí** — el elemento de activación original permanece visible hasta que se carga Navi+ |
| **Sección — Reemplazar** | **Sí** — el menú original se muestra primero, luego es reemplazado por Navi+ |
| Sección — Insertar Antes/Después | No requerido — dos menús aparecen uno al lado del otro |

---

## Técnica: Ocultar el elemento original a través de CSS

### Cómo funciona

1. Usa CSS para ocultar el elemento original inmediatamente (antes de que se cargue Navi+).
2. Opcionalmente muestra un marcador de carga para prevenir el cambio de diseño.
3. Navi+ elimina o reemplaza automáticamente el elemento cuando está listo — el diseño se estabiliza.

### Implementación

**Agregar CSS para ocultar el elemento original** (pegar en el CSS personalizado del tema o `<head>`):

```css
/* Ocultar menú original mientras se carga Navi+ */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* reservar espacio para prevenir cambio de diseño */
}
```

Una vez que Navi+ reemplaza el elemento, este CSS no tiene efecto — el elemento se elimina del DOM.

**Con marcador de carga** (avanzado):
```css
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  position: relative;
}
nav.header__inline-menu ul.list-menu::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f5f5f5;
  border-radius: 4px;
}
```

---

## Caso especial: Menú deslizante con activador de Selector CSS

Cuando un menú deslizante utiliza un activador de Selector CSS (Método 2), el elemento de activación original (por ejemplo, el botón de hamburguesa del tema) sigue siendo visible y **sigue funcionando** (abre el panel deslizante del tema) hasta que se carga Navi+ y anula el evento.

### Solución A: Ocultar el elemento original, usar el elemento de Navi+ como activador en su lugar

```css
/* Ocultar botón de hamburguesa del tema */
#Details-menu-drawer-container {
  display: none !important;
}
```

Luego usa **Método 1** (abrir desde el elemento de Navi+) en lugar del Método 2 — más limpio, sin parpadeo de qué preocuparse.

### Solución B: Desvanecer el elemento original

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

Agregar JS: cuando Navi+ esté listo (`naviReady` evento), eliminar el estilo de ocultación para restaurar la visibilidad del elemento original.

---

## Notas generales sobre velocidad

- `start.js` se carga con `async` — no bloquea el renderizado de la página.
- La configuración JSON del menú se almacena en caché en Cloudflare CDN — carga rápida desde el nodo de borde más cercano.
- No hay renderizado del lado del servidor para los visitantes — todo el renderizado del menú es del lado del cliente a partir de JSON estático.

Para precargar el script para máxima velocidad:
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
