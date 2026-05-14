---
description: Cómo crear anidaciones de padre-hijo y usar Tab Slide para organizar los elementos del menú de Navi+ en estructuras de múltiples niveles.
lang: es
layout: default
permalink: /es/docs/menu-items/multi-level-structure/
title: Estructura de múltiples niveles
---
# Estructura de múltiples niveles

Navi+ soporta dos formas de organizar el contenido del menú en profundidad: **anidación de padre-hijo** (arrastrar izquierda/derecha para sangrar) y **Tab Slide** (dividir el menú en zonas de cambio horizontal). Puedes usar cualquiera de los enfoques o combinar ambos.

---

## Opción 1 — Anidación de padre-hijo (sangrar arrastrando)

La anidación convierte una lista plana en una jerarquía nivelada. Un elemento padre puede expandirse para revelar sus hijos.

```
Inicio                        ← Nivel 1 (padre)
  Colecciones               ← Nivel 2 (hijo)
    Nuevas llegadas            ← Nivel 3 (nieto)
    Venta
  Lookbook
Contacto                     ← Nivel 1 (padre, sin hijos)
```

### Cómo hacerlo

**Arrastrando y soltando**

1. Pasa el cursor sobre el elemento que deseas anidar.
2. Arrástralo **hacia la derecha** — se coloca debajo del elemento anterior como un hijo.
3. Arrástralo **hacia la izquierda** para moverlo de nuevo al nivel padre.

**Con atajo de teclado**

1. Haz clic en el elemento para seleccionarlo.
2. Presiona `→` (flecha derecha) para sangrar — el elemento se convierte en un hijo del elemento anterior.
3. Presiona `←` (flecha izquierda) para desangrar — el elemento se mueve de nuevo un nivel hacia arriba.

### Profundidad máxima de anidación por tipo de menú

El límite de profundidad depende del **tipo de menú**, no del plan.

| Tipo de menú | Niveles máximos |
|---|:---:|
| Cuadrícula móvil | 1 (sin anidación) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> Si intentas sangrar más allá del límite, el editor lo bloqueará y mostrará un mensaje.

---

## Opción 2 — Tab Slide (zonas horizontales)

Tab Slide divide los elementos en pestañas horizontales. En lugar de expandirse hacia abajo como los hijos, cada pestaña muestra un conjunto separado de elementos.

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← encabezados de pestañas
├─────────────────────────────────┤
│  • Colecciones                  │
│  • Nuevas llegadas                 │  ← contenido de la pestaña activa
│  • Venta                         │
└─────────────────────────────────┘
```

### Cómo hacerlo

1. Agrega un nuevo elemento con tipo **Tab Marker**.
2. Establece la etiqueta del Tab Marker — este se convierte en el texto del encabezado de la pestaña (por ejemplo, "Shop").
3. Agrega elementos debajo del Tab Marker — pertenecen al área de contenido de esa pestaña.
4. Repite: agrega el siguiente Tab Marker, luego agrega elementos para esa pestaña.

```
[Tab Marker]  "Shop"
  Colecciones
  Nuevas llegadas
  Venta

[Tab Marker]  "Pages"
  Acerca de nosotros
  Contacto

[Tab Marker]  "More"
  Blog
  FAQ
```

---

## ¿Qué enfoque usar?

| Objetivo | Usar |
|---|---|
| Mostrar subcategorías bajo un elemento padre | **Anidación de padre-hijo (Opción 1)** |
| Agrupar secciones no relacionadas una al lado de la otra | **Tab Slide (Opción 2)** |
| Menú con muchos elementos en múltiples categorías | **Tab Slide** |
| Navegación de profundización (categoría → subcategoría) | **Anidación de padre-hijo** |
| Pestañas externas con elementos anidados dentro de cada pestaña | **Ambos** |

---

## Límites a tener en cuenta

- **Los Tab Markers no pueden estar anidados dentro de otro elemento.** Sangrar un Tab Marker está bloqueado.
- **Los elementos dentro de una pestaña aún pueden tener hijos** — sujeto al límite de profundidad del tipo de menú.
- **La cuadrícula móvil no soporta anidación** — usa Tab Slide si necesitas agrupación.
- **Reordena las pestañas** arrastrando un Tab Marker hacia arriba o hacia abajo — los elementos debajo de él lo seguirán.
