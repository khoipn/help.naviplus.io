---
description: Filtra la visibilidad del menú de Navi+ por dispositivo, comportamiento de desplazamiento, tipos de página de Shopify y palabras clave de URL.
lang: es
layout: default
permalink: /es/docs/publish/publish-filter/
title: Filtro de publicación — Reglas de dispositivo y URL
---
# Filtro de Publicación — Reglas de Dispositivo y URL

Después de habilitar el interruptor de publicación, puedes restringir cuándo aparece el menú utilizando dos capas de filtro: **dispositivo** (móvil/escritorio + comportamiento de desplazamiento) y **palabras clave de URL** (mostrar/ocultar según el contenido de la URL).

---

## Filtrar por Dispositivo

### Habilitar/deshabilitar por plataforma

Dos interruptores en la parte superior del modal de Publicación:

| Configuración | Predeterminado | Notas |
|---|---|---|
| **Mostrar menú en móvil** | Activado | Mostrar menú en dispositivos móviles |
| **Mostrar menú en escritorio** | Desactivado | Mostrar menú en dispositivos de escritorio |

Algunos tipos de menú desactivan uno de estos interruptores; por ejemplo, el Mega Menú de Escritorio desactiva el interruptor móvil.

---

### Comportamiento de desplazamiento (menús adhesivos solo)

Configurado por separado para móvil y escritorio.

#### Desplazamiento móvil

| Configuración | Comportamiento |
|---|---|
| **Ocultar automáticamente al desplazarse hacia abajo** | Ocultar menú cuando el usuario se desplaza **hacia abajo** |
| **Mostrar automáticamente después de desplazarse** | Solo mostrar menú después de que el usuario se haya desplazado hacia abajo (no se muestra al cargar la página) |

#### Desplazamiento de escritorio

| Configuración | Comportamiento |
|---|---|
| **Ocultar automáticamente al desplazarse hacia abajo** | Ocultar menú al desplazarse hacia abajo en escritorio |
| **Mostrar automáticamente después de desplazarse** | Solo mostrar después de desplazarse hacia abajo en escritorio |

> Ocultar automáticamente y mostrar automáticamente se pueden habilitar juntos: el menú se oculta al desplazarse hacia abajo, reaparece al desplazarse hacia arriba; un patrón común para las tabbars inferiores.

---

### Posición de la pantalla (Sticky / Tabbar solo)

Elige una posición de un selector de botones de radio con ilustraciones visuales.

**Móvil** — 6 posiciones preestablecidas (centro inferior, izquierda inferior, derecha inferior, variantes superiores...)

**Escritorio** — 12 posiciones preestablecidas (barra superior, barra inferior, barra lateral izquierda/derecha, posiciones de esquina...)

---

### Grupos de páginas (Shopify solo, menús adhesivos)

Selecciona en qué tipos de páginas de Shopify aparece el menú. Predeterminado: todos.

| Grupo | Patrón de URL |
|---|---|
| Inicio | `/` |
| Detalle del producto | `/products/*` |
| Categorías de productos | `/collections/*` |
| Páginas | `/pages/*` |
| Blogs | `/blogs/*` |
| Otros | Todas las páginas restantes |

> El mercado global (WordPress, Wix, etc.) no tiene esta función. Usa el filtro de palabras clave de URL en su lugar.

---

## Filtrar por Palabras Clave de URL

La tarjeta **"Mostrar el menú por palabras clave"** — se aplica a todos los tipos de menú excepto el Context Slide.

### Dos tipos de filtro

| Configuración | Comportamiento |
|---|---|
| **Contener Palabra Clave** | El menú **solo se muestra** cuando la URL **contiene** al menos una palabra clave |
| **No Contener Palabra Clave** | El menú **no se muestra** cuando la URL **contiene** alguna de las palabras clave |

Múltiples palabras clave separadas por comas `,`.

### Ejemplos

**Solo mostrar en páginas de productos de snowboard:**
```
Contener: snowboard
```
→ El menú solo se muestra en URLs como `yourdomain.com/products/the-collection-snowboard-hydrogen`

**Ocultar en páginas de múltiples ubicaciones:**
```
No contener: multi-location
```
→ El menú **no** se muestra en `yourdomain.com/products/the-multi-location-snowboard`

**Combinado:**
```
Contener: collections
No contener: sale, outlet
```
→ Solo se muestra en páginas de colección, pero se oculta en colecciones de "sale" y "outlet".

### Notas

- El filtro utiliza **coincidencias de cadena de URL completas**, no regex.
- Las palabras clave son **insensibles a mayúsculas y minúsculas**.
- Dejar vacío = sin filtro (el menú se muestra en todas las páginas).
- Ambos filtros se combinan con AND — ambas condiciones deben cumplirse.
