---
description: Configura la apariencia de submenús con herencia automática del Nivel 1 para todos los campos vacíos.
layout: default
permalink: /es/docs/design/design-level2/
title: Diseño Nivel 2-3 — Elementos de submenú
---
# Diseño Nivel 2-3 — Elementos de submenú

La configuración en **Diseño → Nivel 2-3** se aplica a los submenús. Cualquier campo vacío **hereda automáticamente** del Nivel 1.

> **Regla:** Solo rellena campos aquí cuando quieras que el submenú se vea **diferente** del menú principal.

---

## Estilo de texto

| Campo | Hereda del Nivel 1 cuando está vacío |
|---|---|
| **Color de texto** | `textColor` |
| **Tamaño de fuente (px)** | `textSize` |
| **Peso de fuente** | `fontWeight` |
| **Transformación de texto** | `textTransform` |
| **Familia de fuente** | `fontFamily` |
| **Color de descripción** | `descriptionColor` |
| **Tamaño de descripción (px)** | `descriptionTextSize` |

---

## Estilo de icono / imagen

| Campo | Hereda del Nivel 1 cuando está vacío |
|---|---|
| **Color de icono** | `iconColor` |
| **Tamaño de icono (px)** | `iconSize` |
| **Espacio texto-icono (px)** | `spaceTextIcon` |
| **Radio de imagen (px)** | `imageRadius` |

---

## Espaciado

| Campo | Descripción |
|---|---|
| **Relleno del elemento (px)** | No hereda — usa el valor predeterminado del tema |
| **Margen del elemento (px)** | Espaciado exterior |
| **Altura mínima (px)** | Altura mínima |

---

## Fondo y marco

| Campo | Descripción |
|---|---|
| **Color de fondo** | Fondo del submenú |
| **Radio de borde (px)** | Redondeo de esquinas |
| **Ocultar fondo** | Ocultar fondo |
| **Sombra paralela** | Sombra paralela |

---

## Visualización

| Campo | Hereda del Nivel 1 cuando está vacío |
|---|---|
| **Diseño de visualización** | `displayLayout` |
| **Alineación** | `align` |

---

## Divisor

| Campo | Hereda del Nivel 1 cuando está vacío |
|---|---|
| **Color de divisor** | `dividerColor` |

---

## Ejemplo

**Objetivo:** Menú principal oscuro con texto blanco. Submenú blanco con texto oscuro.

Solo rellena 2 campos en Nivel 2-3:
- Color de fondo = `#FFFFFF`
- Color de texto = `#000000`
