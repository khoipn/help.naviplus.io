---
description: Comprende el sistema de herencia de estilos de tres capas de Navi+ — cómo los estilos se propagan del Nivel 1 al Nivel 2-3 y las anulaciones por elemento.
layout: default
permalink: /es/docs/design/design-overview/
title: Descripción general del diseño — Herencia y anulación
---
# Descripción general del diseño — Herencia y anulación

Navi+ usa un **sistema de estilos de tres capas**. Entender esto te permite dar estilo a tu menú de manera eficiente.

---

## Tres capas

```
┌─────────────────────────────────────────────────────┐
│  NIVEL 1  (Diseño → Nivel 1)                        │
│  Se aplica a todos los elementos del menú principal │
│  Este es el valor predeterminado global del menú    │
└───────────────────┬─────────────────────────────────┘
                    │  Nivel 2-3 hereda si está vacío
┌───────────────────▼─────────────────────────────────┐
│  NIVEL 2-3  (Diseño → Nivel 2-3)                    │
│  Se aplica a submenús / desplegables                │
│  Vacío = igual que Nivel 1                          │
└───────────────────┬─────────────────────────────────┘
                    │  Por elemento anula todo
┌───────────────────▼─────────────────────────────────┐
│  POR ELEMENTO  (Editar elemento → Interfaz)         │
│  Configuración por elemento para elementos individuales │
│  Anula el Nivel 1 y el Nivel 2-3 completamente      │
└─────────────────────────────────────────────────────┘
```

---

## Reglas de herencia

**El Nivel 2-3 hereda del Nivel 1** para todos los campos vacíos:

| Campo Nivel 2-3 | Hereda del Nivel 1 |
|---|---|
| Color de texto | Color de texto |
| Tamaño de fuente | Tamaño de fuente |
| Peso de fuente | Peso de fuente |
| Color de icono | Color de icono |
| Tamaño de icono | Tamaño de icono |
| Diseño de visualización | Diseño de visualización |
| Alineación | Alineación |
| Color de divisor | Divisor (global) |

Si solo configuras el Nivel 1, los submenús siguen automáticamente. Ve al Nivel 2-3 solo cuando quieras que los submenús se vean **diferentes**.

---

## Anulación por elemento

Los ajustes aplicados en **Editar elemento → Interfaz** anulan el Nivel 1 y el Nivel 2-3 solo para ese elemento.

Para eliminar una anulación: borra el campo en Editar elemento.

---

## Ejemplo

**Objetivo:** Los 5 elementos son texto blanco, excepto "Oferta" que es rojo.

1. Diseño → Nivel 1 → Color de texto = `#FFFFFF`
2. Editar elemento → "Oferta" → Interfaz → Color de texto = `#FF0000`

---

## Sintaxis Móvil | Escritorio

Algunos campos de espaciado admiten valores diferentes:

```
8 16 8 16              →  igual en ambos dispositivos
8 8 8 8 | 12 24 12 24  →  izquierda: móvil, derecha: escritorio
```
