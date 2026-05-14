---
description: Cómo controlar cuándo y para quién un elemento del menú es visible en Navi+ — estado publicado, condiciones de inicio de sesión y ocultación basada en páginas.
lang: es
layout: default
permalink: /es/docs/menu-items/item-visibility/
title: Visibilidad y Condiciones
---
# Visibilidad y Condiciones

La **sección Publicar** en el panel Editar elemento te permite controlar quién ve un elemento, cuándo y en qué páginas.

---

## Está Publicado

**Predeterminado: activado (el elemento es visible para todos).**

Desactiva esto para ocultar el elemento del menú en vivo sin eliminarlo. El elemento permanece en el editor — puedes volver a habilitarlo en cualquier momento.

**Usa cuando:**
- Ocultar temporalmente un enlace de venta estacional.
- Preparar un elemento antes de que se publique.
- Mantener un elemento de respaldo sin eliminarlo.

---

## Ocultar cuando se inicia sesión

Cuando está habilitado, el elemento es **solo visible para los visitantes que no han iniciado sesión**.

**Usa para:**
- Un "Iniciar sesión" botón — los clientes que ya han iniciado sesión no lo necesitan.
- Un "Crear cuenta" enlace.

---

## Solo mostrar cuando se inicia sesión

Cuando está habilitado, el elemento es **solo visible para los clientes que han iniciado sesión**.

**Usa para:**
- "Mi cuenta" enlace.
- Puntos de lealtad, historial de pedidos.
- Funciones reservadas para miembros.

---

## Ocultar en tipos de página específicos (hidepages)

Usa el `hidepages` atributo en **Avanzado → Atributos** para ocultar un elemento en ciertos tipos de páginas.

**Sintaxis:**

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Valor | Páginas ocultas en |
|---|---|
| `index` | Página de inicio |
| `products` | Páginas de detalle de productos |
| `collections` | Páginas de colección / categoría |
| `pages` | Páginas estáticas (Acerca de, Contacto…) |
| `blogs` | Páginas de listado y publicación de blogs |
| `others` | Cualquier página que no esté en las categorías anteriores |

Separa múltiples valores con `|`, sin espacios.

**Ejemplo:** Ocultar un "Comprar ahora" botón en la página de inicio y páginas de blog:

```
hidepages=index|blogs
```

---

## Ocultar por dispositivo (Móvil / Escritorio)

> **Importante:** Navi+ no tiene un interruptor móvil/escritorio por elemento. La segmentación por dispositivo se controla a nivel de **menú**, no a nivel de elemento.

**El enfoque correcto:**

- Ve a la pestaña **Publicar** del menú → activa **Móvil** y **Escritorio** para todo el menú.
- Crea dos menús separados — uno para móvil, uno para escritorio — y establece el interruptor de dispositivo en cada uno.

**Solución alternativa por elemento (si es realmente necesario):**  
Usa **Avanzado → CSS** con una consulta de medios:

```css
/* Ocultar este elemento solo en móvil */
@media (max-width: 767px) { display: none !important; }

/* Ocultar este elemento solo en escritorio */
@media (min-width: 768px) { display: none !important; }
```

---

## Resumen

| Condición | Cómo establecer |
|---|---|
| Ocultar completamente | Está Publicado → apagado |
| Ocultar a usuarios registrados | Ocultar cuando se inicia sesión → activado |
| Ocultar a invitados | Solo mostrar cuando se inicia sesión → activado |
| Ocultar en la página de inicio | Atributos: `hidepages=index` |
| Ocultar en móvil | CSS: `@media (max-width: 767px) { display: none !important; }` |
| Ocultar en escritorio | CSS: `@media (min-width: 768px) { display: none !important; }` |
