---
description: Filtra la visibilidad del menú Navi+ por dispositivo, comportamiento de desplazamiento, tipos de página de Shopify y palabras clave de URL.
layout: default
permalink: /docs/publish/publish-filter/
title: Publish Filter — Reglas de Dispositivo y URL
---
# Publish Filter — Reglas de Dispositivo y URL

Después de activar el interruptor de publicación, puedes restringir cuándo aparece el menú usando dos capas de filtro: **dispositivo** (móvil/escritorio + comportamiento de desplazamiento) y **palabras clave de URL** (mostrar/ocultar según el contenido de la URL).

---

## Filtrar por dispositivo

### Activar/desactivar por plataforma

Dos interruptores en la parte superior del modal Publish:

| Configuración | Predeterminado | Notas |
|---|---|---|
| **Mostrar menú en móvil** | Activado | Mostrar menú en dispositivos móviles |
| **Mostrar menú en escritorio** | Desactivado | Mostrar menú en dispositivos de escritorio |

Algunos tipos de menú desactivan uno de estos interruptores — por ejemplo, Desktop Mega Menu desactiva el interruptor de móvil.

---

### Comportamiento de desplazamiento (solo menús Sticky)

Configurado por separado para móvil y escritorio.

#### Desplazamiento en móvil

| Configuración | Comportamiento |
|---|---|
| **Ocultar automáticamente al desplazarse hacia abajo** | Ocultar menú cuando el usuario se desplaza hacia **abajo** |
| **Mostrar automáticamente después de desplazarse** | Mostrar menú solo después de que el usuario se haya desplazado hacia abajo (no mostrado al cargar la página) |

#### Desplazamiento en escritorio

| Configuración | Comportamiento |
|---|---|
| **Ocultar automáticamente al desplazarse hacia abajo** | Ocultar menú al desplazarse hacia abajo en escritorio |
| **Mostrar automáticamente después de desplazarse** | Mostrar solo después de desplazarse hacia abajo en escritorio |

> Ocultar automáticamente y Mostrar automáticamente pueden activarse juntos: el menú se oculta al desplazarse hacia abajo, reaparece al desplazarse hacia arriba — un patrón común para tabbars inferiores.

---

### Posición en pantalla (solo Sticky / Tabbar)

Elige una posición desde un selector de botones de opción con ilustraciones visuales.

**Móvil** — 6 posiciones preestablecidas (inferior central, inferior izquierda, inferior derecha, variantes superiores...)

**Escritorio** — 12 posiciones preestablecidas (barra superior, barra inferior, barra lateral izquierda/derecha, posiciones de esquina...)

---

### Grupos de páginas (solo Shopify, menús Sticky)

Selecciona en qué tipos de página de Shopify aparece el menú. Predeterminado: todos.

| Grupo | Patrón de URL |
|---|---|
| Inicio | `/` |
| Detalle de producto | `/products/*` |
| Categorías de productos | `/collections/*` |
| Páginas | `/pages/*` |
| Blogs | `/blogs/*` |
| Otros | Todas las páginas restantes |

> El mercado Global (WordPress, Wix, etc.) no tiene esta función. Usa el filtro de palabras clave de URL en su lugar.

---

## Filtrar por palabras clave de URL

La tarjeta **"Mostrar el menú por palabras clave"** — se aplica a todos los tipos de menú excepto Context Slide.

### Dos tipos de filtro

| Configuración | Comportamiento |
|---|---|
| **Contiene palabra clave** | El menú **solo se muestra** cuando la URL **contiene** al menos una palabra clave |
| **No contiene palabra clave** | El menú **no se muestra** cuando la URL **contiene** cualquiera de las palabras clave |

Varias palabras clave separadas por comas `,`.

### Ejemplos

**Mostrar solo en páginas de productos de snowboard:**
```
Contiene: snowboard
```
→ El menú solo se muestra en URLs como `yourdomain.com/products/the-collection-snowboard-hydrogen`

**Ocultar en páginas de múltiples ubicaciones:**
```
No contiene: multi-location
```
→ El menú **no** se muestra en `yourdomain.com/products/the-multi-location-snowboard`

**Combinado:**
```
Contiene: collections
No contiene: sale, outlet
```
→ Solo se muestra en páginas de colecciones, pero oculto en colecciones de "sale" y "outlet".

### Notas

- El filtro usa **coincidencia completa de cadena de URL**, no regex.
- Las palabras clave **no distinguen mayúsculas de minúsculas**.
- Dejar vacío = sin filtro (el menú se muestra en todas las páginas).
- Ambos filtros están enlazados con AND — ambas condiciones deben cumplirse.
