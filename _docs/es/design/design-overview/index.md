---
description: Comprender el sistema de herencia de diseño de tres niveles en Navi+ — cómo los estilos se aplican desde el Nivel 1 hasta los Niveles 2-3 y las anulaciones por elemento.
lang: es
layout: default
permalink: /es/docs/design/design-overview/
title: Descripción general del diseño — Herencia y anulación
---
# Descripción general del diseño — Herencia y anulación

Navi+ utiliza un **sistema de estilos de tres niveles**. Comprender esto te permite estilizar tu menú de manera eficiente sin repetir configuraciones.

---

## Tres capas

```
┌─────────────────────────────────────────────────────┐
│  NIVEL 1  (Diseño → Nivel 1)                        │
│  Se aplica a todos los elementos de menú de nivel superior                │
│  Este es el valor predeterminado global para todo el menú     │
└───────────────────┬─────────────────────────────────┘
                    │  Nivel 2-3 hereda si está vacío
┌───────────────────▼─────────────────────────────────┐
│  NIVEL 2-3  (Diseño → Nivel 2-3)                    │
│  Se aplica a submenús / menús desplegables                    │
│  Vacío = igual que Nivel 1                            │
└───────────────────┬─────────────────────────────────┘
                    │  Anulación por elemento sobreescribe todo
┌───────────────────▼─────────────────────────────────┐
│  POR ELEMENTO  (Editar elemento → Interfaz)                  │
│  Configuraciones por elemento para elementos individuales             │
│  Anula completamente Nivel 1 y Nivel 2-3         │
└─────────────────────────────────────────────────────┘
```

---

## Reglas de herencia

**Nivel 2-3 hereda del Nivel 1** para todos los campos vacíos:

| Campo Nivel 2-3 | Hereda del Nivel 1 |
|---|---|
| Color de texto | Color de texto |
| Tamaño de fuente | Tamaño de fuente |
| Peso de fuente | Peso de fuente |
| Color de ícono | Color de ícono |
| Tamaño de ícono | Tamaño de ícono |
| Diseño de visualización | Diseño de visualización |
| Alinear | Alinear |
| Color del divisor | Divisor (global) |

Si solo configuras el Nivel 1, los submenús siguen automáticamente. Solo ve al Nivel 2-3 cuando quieras que los submenús se vean **diferentes** del menú principal.

---

## Anulación por elemento

Las configuraciones aplicadas a un elemento específico en **Editar elemento → Interfaz** (color de texto, tamaño de ícono, fondo, etc.) anulan el Nivel 1 y el Nivel 2-3 solo para ese elemento. Otros elementos no se ven afectados.

Para eliminar una anulación: borra el campo en Editar elemento — el elemento vuelve a Nivel 1/2-3.

---

## Ejemplo

**Objetivo:** Todos los 5 elementos son texto blanco, excepto "Sale" que es rojo.

1. Diseño → Nivel 1 → Color de texto = `#FFFFFF`
2. Editar elemento → "Sale" → Interfaz → Color de texto = `#FF0000`

Resultado: 4 elementos permanecen blancos, "Sale" se vuelve rojo. No es necesario editar cada elemento individualmente.

---

## Sintaxis móvil | de escritorio

Algunos campos de espaciado admiten diferentes valores para móvil y de escritorio:

```
8 16 8 16             →  mismo valor en ambos dispositivos
8 8 8 8 | 12 24 12 24  →  izquierda: móvil, derecha: escritorio
```

La parte antes de `|` se aplica en móvil; la parte después se aplica en escritorio (≥768px).
