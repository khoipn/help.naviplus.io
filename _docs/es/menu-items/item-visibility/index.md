---
description: Cómo controlar cuándo y para quién es visible un elemento de menú en Navi+ — estado de publicación, condiciones de inicio de sesión y ocultación por página.
layout: default
permalink: /es/docs/menu-items/item-visibility/
title: Visibilidad y condiciones
---
# Visibilidad y condiciones

La sección **Publicar** en el panel de edición te permite controlar quién ve un elemento, cuándo y en qué páginas.

---

## Publicado

**Por defecto: activado (elemento visible para todos).**

Desactívalo para ocultar el elemento del menú en vivo sin eliminarlo.

**Usar cuando:**
- Ocultar temporalmente un enlace de venta estacional.
- Preparar un elemento antes de que esté en vivo.
- Guardar un elemento de respaldo sin eliminarlo.

---

## Ocultar cuando está conectado

Visible **solo para visitantes no conectados**. Usar para: botón "Iniciar sesión", enlace "Crear cuenta".

---

## Mostrar solo cuando está conectado

Visible **solo para clientes conectados**. Usar para: "Mi cuenta", puntos de fidelidad, historial de pedidos.

---

## Ocultar en tipos de páginas específicos (hidepages)

Usa `hidepages` en **Avanzado → Atributos**.

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Valor | Se oculta en |
|---|---|
| `index` | Página de inicio |
| `products` | Páginas de producto |
| `collections` | Páginas de colección |
| `pages` | Páginas estáticas |
| `blogs` | Blog |
| `others` | Otras páginas |

**Ejemplo:** `hidepages=index|blogs`

---

## Ocultar por dispositivo

> Navi+ controla dispositivos a nivel de **menú**, no por elemento. Crea dos menús separados o usa CSS.

```css
/* Solo móvil */
@media (max-width: 767px) { display: none !important; }

/* Solo desktop */
@media (min-width: 768px) { display: none !important; }
```

---

## Resumen

| Condición | Configuración |
|---|---|
| Ocultar completamente | Publicado → desactivado |
| Ocultar a conectados | Ocultar cuando conectado → activado |
| Ocultar a visitantes | Mostrar solo cuando conectado → activado |
| Ocultar en inicio | `hidepages=index` |
| Ocultar en móvil | CSS `@media (max-width: 767px)` |
| Ocultar en desktop | CSS `@media (min-width: 768px)` |
