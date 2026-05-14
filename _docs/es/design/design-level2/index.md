---
description: Configura la apariencia de los elementos del submenú en Navi+ — con herencia automática del Nivel 1 para todos los campos vacíos.
lang: es
layout: default
permalink: /es/docs/design/design-level2/
title: Nivel de diseño 2-3 — Elementos del submenú
---
# Diseño Nivel 2-3 — Elementos del Submenú

Los ajustes en **Diseño → Nivel 2-3** se aplican a los elementos del submenú (desplegables que aparecen cuando se abre un elemento padre). Cualquier campo dejado vacío **hereda automáticamente** el valor correspondiente del Nivel 1.

> **Regla:** Solo completa los campos aquí cuando quieras que el submenú se vea **diferente** del menú principal. Dejar vacío = igual que el Nivel 1.

---

## Estilo de Texto

| Campo | Hereda del Nivel 1 cuando está vacío |
|---|---|
| **Color de Texto** | `textColor` |
| **Tamaño de Fuente (px)** | `textSize` |
| **Peso de Fuente** | `fontWeight` |
| **Transformación de Texto** | `textTransform` |
| **Familia de Fuente** | `fontFamily` |
| **Color de Descripción** | `descriptionColor` |
| **Tamaño de Descripción (px)** | `descriptionTextSize` |

---

## Estilo de Icono / Imagen

| Campo | Hereda del Nivel 1 cuando está vacío |
|---|---|
| **Color de Icono** | `iconColor` |
| **Tamaño de Icono (px)** | `iconSize` |
| **Espacio Texto-Icono (px)** | `spaceTextIcon` |
| **Radio de Imagen (px)** | `imageRadius` |

---

## Espaciado

| Campo | Descripción |
|---|---|
| **Relleno de Elemento (px)** | Espaciado interno para elementos del submenú. No hereda — usa el valor predeterminado del tema si está vacío |
| **Margen de Elemento (px)** | Espaciado externo para elementos del submenú |
| **Altura Mínima (px)** | Altura mínima para elementos del submenú |

---

## Fondo y Marco

| Campo | Descripción |
|---|---|
| **Color de Fondo** | Color de fondo del área del submenú |
| **Radio de Borde (px)** | Redondeo de las esquinas del contenedor del submenú |
| **Ocultar Fondo** | Ocultar el fondo del submenú |
| **Sombra de Caída** | Sombra de caída para el contenedor del submenú |

---

## Visualización

| Campo | Hereda del Nivel 1 cuando está vacío |
|---|---|
| **Diseño de Visualización** | `displayLayout` |
| **Alinear** | `align` |

---

## Divisor

| Campo | Hereda del Nivel 1 cuando está vacío |
|---|---|
| **Color del Divisor** | `dividerColor` (de Diseño → Divisor) |

---

## Ejemplo

**Objetivo:** El menú principal tiene un fondo oscuro y texto blanco. El submenú debe tener un fondo blanco y texto oscuro.

Completa solo estos dos campos en el Nivel 2-3:
- Color de Fondo = `#FFFFFF`
- Color de Texto = `#000000`

Todos los demás campos (tamaño de fuente, tamaño de icono, espaciado, etc.) heredan automáticamente del Nivel 1.
