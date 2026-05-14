---
description: Configura el estilo predeterminado para todas las líneas divisorias en tu menú Navi+ — color, grosor, tipo y ancho.
lang: es
layout: default
permalink: /es/docs/design/design-divider/
title: Diseño del divisor — Líneas separadoras
---
# Diseño del Divisor — Líneas Separadoras

Los ajustes en **Diseño → Divisor** definen la apariencia predeterminada para todos los divisores en el menú.

Este es un estilo a **nivel de menú** — los elementos individuales pueden habilitar/deshabilitar su propio divisor y anular el estilo a través de Editar Elemento → Información Básica → Agregar Divisor.

---

## Campos

| Campo | Descripción | Predeterminado |
|---|---|---|
| **Color del Divisor** | Color de la línea (hex) | `#EEEEEE` |
| **Tamaño del Divisor (px)** | Grosor de la línea | 1px |
| **Tipo de Divisor** | Estilo de línea: Sólido / Discontinuo / Puntado / Doble | Sólido |
| **Ancho del Divisor** | Extensión de la línea: Completo / Sangrado / Bajo texto | Completo |

> **Tipo de Divisor** y **Ancho del Divisor** requieren el plan Business o Elite.

---

## Cómo Funciona

1. Los ajustes aquí son los **predeterminados** aplicados cuando un elemento tiene habilitado **Agregar Divisor**.
2. Si un elemento tiene su propio estilo de divisor (en Editar Elemento), ese estilo **anula** lo que se establece aquí.
3. El nivel 2-3 hereda `Color del Divisor` de esta sección cuando el campo `submenuDividerColor` está vacío.

---

## Opciones de Ancho del Divisor

| Valor | Visualización |
|---|---|
| **Completo** | La línea abarca todo el ancho del elemento |
| **Sangrado** | La línea está indentada en ambos lados |
| **Bajo texto** | La línea aparece solo debajo de la parte de texto del elemento |
