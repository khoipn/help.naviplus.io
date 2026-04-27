---
description: Configura el estilo predeterminado de líneas divisoras en menús Navi+ — color, grosor, tipo y ancho.
layout: default
permalink: /es/docs/design/design-divider/
title: Diseño Divisor — Líneas separadoras
---
# Diseño Divisor — Líneas separadoras

La configuración en **Diseño → Divisor** define la apariencia predeterminada de todos los divisores del menú.

Este es un estilo de **nivel de menú** — los elementos individuales pueden anularlo mediante Editar elemento → Información básica → Agregar divisor.

---

## Campos

| Campo | Descripción | Predeterminado |
|---|---|---|
| **Color de divisor** | Color de la línea (hex) | `#EEEEEE` |
| **Tamaño del divisor (px)** | Grosor de la línea | 1px |
| **Tipo de divisor** | Sólido / Guionado / Punteado / Doble | Sólido |
| **Ancho del divisor** | Completo / Insertado / Bajo el texto | Completo |

> **Tipo de divisor** y **Ancho del divisor** requieren el plan Business o Elite.

---

## Cómo funciona

1. La configuración aquí = predeterminado cuando un elemento tiene **Agregar divisor** activado.
2. El estilo de divisor por elemento anula esto.
3. El Nivel 2-3 hereda el Color de divisor si está vacío.

---

## Ancho del divisor

| Valor | Visualización |
|---|---|
| **Completo** | Ancho completo del elemento |
| **Insertado** | Sangrado en ambos lados |
| **Bajo el texto** | Solo bajo la parte de texto |
