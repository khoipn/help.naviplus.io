---
description: Controla en qué páginas y dispositivos aparece tu menú Navi+ — utilizando interruptores de dispositivo, reglas de palabras clave de URL y filtros de tipo de página de Shopify.
lang: es
layout: default
permalink: /es/docs/setting/setting-display-rules/
title: Estableciendo reglas de visualización — Visibilidad condicional
---
# Estableciendo Reglas de Visualización — Visibilidad Condicional

Controla dónde y cuándo aparece tu menú según el tipo de dispositivo, URL o tipo de página de Shopify.

---

## Visualización por Dispositivo

Encontrado en la **Publicar** pestaña del menú (no por artículo):

| Interruptor | Efecto |
|---|---|
| **Móvil** | Mostrar/ocultar menú en pantallas móviles |
| **Escritorio** | Mostrar/ocultar menú en pantallas de escritorio |

Por defecto: solo Móvil está habilitado. Debes habilitar manualmente Escritorio si deseas que el menú aparezca en pantallas más grandes.

> Para mostrar/ocultar elementos individuales por dispositivo → ver [Visibilidad de Elementos](/docs/menu-items/item-visibility/).

---

## Visualización por Palabras Clave de URL

Dos campos en **Configuración → Visualización por Palabras Clave** te permiten controlar en qué URLs aparece el menú.

### Mostrar solo cuando la URL contiene la palabra clave

**Campo:** `Publicar — Contener Palabra Clave`

```
colecciones, productos/venta
```

El menú aparece solo en páginas cuya URL contiene `colecciones` **o** `productos/venta`.

**Ejemplo:** Un menú "Navegación de Tienda" para páginas de productos → solo mostrar en `colecciones/` y `productos/`.

---

### Ocultar cuando la URL contiene la palabra clave

**Campo:** `Publicar — No Contener Palabra Clave`

```
checkout, cuenta/iniciar-sesión
```

El menú está oculto en páginas de checkout e inicio de sesión; visible en todas partes.

**Ejemplo:** Ocultar la Tabbar durante el checkout para evitar distraer al cliente.

---

## Visualización por Tipo de Página de Shopify

La pestaña **Publicar** también incluye 6 grupos de páginas de Shopify (solo tiendas Shopify):

| Grupo | Páginas |
|---|---|
| **Inicio** | Página de inicio |
| **Detalle del Producto** | Páginas de detalle del producto |
| **Categorías de Productos** | Páginas de colección / categoría |
| **Páginas** | Páginas estáticas (Acerca de, Contacto, etc.) |
| **Blogs** | Listado de blogs y páginas de artículos |
| **Otros** | Páginas que no están en los 5 grupos anteriores |

Desmarcar un grupo → el menú no aparecerá en ese tipo de página.

---

## Cómo se Apilan las Reglas

Todas las condiciones se evalúan juntas en este orden:

```
1. ¿Está habilitado el dispositivo?              →  Si no: oculto
2. ¿Está marcada el tipo de página?           →  Si no: oculto
3. ¿Coincide la URL con "No mostrar"?    →  Si sí: oculto
4. ¿Coincide la URL con "Solo mostrar"?     →  Si no: oculto
5. Mostrar menú
```
