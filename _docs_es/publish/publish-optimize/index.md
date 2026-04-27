---
description: Optimiza la velocidad y UX después de publicar menús Navi+ — previene el flash del contenido original al usar Insertar/Reemplazar o disparadores de CSS Selector.
layout: default
permalink: /docs/publish/publish-optimize/
title: Publish Optimize — Velocidad & UX
---
# Publish Optimize — Velocidad & UX

Al usar **Insertar/Reemplazar** (menú Section) o **disparador de CSS Selector** (menú Slide), el sitio web necesita un breve momento para cargar Navi+. Durante ese tiempo, el elemento original (el menú antiguo del tema) sigue siendo visible — causando un **flash** o desplazamiento del diseño.

---

## ¿Cuándo se necesita optimización?

| Método | ¿Necesita optimización? |
|---|---|
| Sticky / FAB (App Embeds / `<head>`) | No — el menú se agrega al DOM, nada se reemplaza |
| Menú Slide — Método 1 (abrir desde elemento Navi+) | No — el botón disparador es un elemento Navi+ |
| **Menú Slide — Método 2 (disparador CSS Selector)** | **Sí** — el elemento disparador original sigue visible hasta que Navi+ carga |
| **Section — Reemplazar** | **Sí** — el menú original se muestra primero, luego es reemplazado por Navi+ |
| Section — Insertar antes/después | No requerido — dos menús aparecen uno junto al otro |

---

## Técnica: Ocultar el elemento original mediante CSS

### Cómo funciona

1. Usar CSS para ocultar el elemento original inmediatamente (antes de que Navi+ cargue).
2. Opcionalmente mostrar un marcador de posición de carga para evitar el desplazamiento del diseño.
3. Navi+ elimina o reemplaza automáticamente el elemento cuando está listo — el diseño se estabiliza.

### Implementación

**Agregar CSS para ocultar el elemento original** (pegar en CSS personalizado del tema o `<head>`):

```css
/* Ocultar menú original mientras Navi+ carga */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* reservar espacio para evitar desplazamiento del diseño */
}
```

Una vez que Navi+ reemplaza el elemento, este CSS no tiene efecto — el elemento se elimina del DOM.

**Con marcador de posición de carga** (avanzado):
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

## Caso especial: Menú Slide con disparador de CSS Selector

Cuando un menú Slide usa un disparador de CSS Selector (Método 2), el elemento disparador original (por ejemplo, el botón hamburguesa del tema) sigue siendo visible y **sigue funcionando** (abre el panel deslizante del tema) hasta que Navi+ carga y anula el evento.

### Solución A: Ocultar el elemento original, usar elemento Navi+ como disparador en su lugar

```css
/* Ocultar botón hamburguesa del tema */
#Details-menu-drawer-container {
  display: none !important;
}
```

Luego usa el **Método 1** (abrir desde elemento Navi+) en lugar del Método 2 — más limpio, sin flash del que preocuparse.

### Solución B: Desvanecer el elemento original

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

Agrega JS: cuando Navi+ esté listo (evento `naviReady`), elimina el estilo de ocultamiento para restaurar la visibilidad del elemento original.

---

## Notas generales de velocidad

- `start.js` carga con `async` — no bloquea el renderizado de la página.
- La configuración JSON del menú está en caché en Cloudflare CDN — carga rápida desde el nodo edge más cercano.
- Sin renderizado del lado del servidor para los visitantes — todo el renderizado del menú es del lado del cliente desde JSON estático.

Para precargar el script para máxima velocidad:
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
