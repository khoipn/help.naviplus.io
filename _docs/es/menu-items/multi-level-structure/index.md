---
description: Cómo crear anidamiento padre–hijo y usar Tab Slide para organizar los elementos de menú de Navi+ en estructuras de varios niveles.
layout: default
permalink: /es/docs/menu-items/multi-level-structure/
title: Estructura multinivel
---
# Estructura multinivel

Navi+ admite dos formas de organizar el contenido del menú en profundidad: **anidamiento padre–hijo** (arrastrar izquierda/derecha para sangrar) y **Tab Slide** (dividir el menú en zonas de cambio horizontal). Puedes usar cualquiera de los dos enfoques o combinarlos.

---

## Opción 1 — Anidamiento padre–hijo (sangría por arrastre)

El anidamiento convierte una lista plana en una jerarquía con niveles. Un elemento padre puede expandirse para revelar sus hijos.

```
Home                        ← Nivel 1 (padre)
  Collections               ← Nivel 2 (hijo)
    New Arrivals            ← Nivel 3 (nieto)
    Sale
  Lookbook
Contact                     ← Nivel 1 (padre, sin hijos)
```

### Cómo hacerlo

**Por arrastrar y soltar**

1. Pasa el cursor sobre el elemento que quieres anidar.
2. Arrástralo hacia la **derecha** — se encaja bajo el elemento de arriba como hijo.
3. Arrástralo hacia la **izquierda** para devolverlo al nivel padre.

**Por atajo de teclado**

1. Haz clic en el elemento para seleccionarlo.
2. Pulsa `→` (flecha derecha) para sangrar — el elemento se convierte en hijo del elemento de arriba.
3. Pulsa `←` (flecha izquierda) para eliminar la sangría — el elemento sube un nivel.

### Profundidad máxima de anidamiento por tipo de menú

El límite de profundidad depende del **tipo de menú**, no del plan.

| Tipo de menú | Niveles máx. |
|---|:---:|
| Mobile Grid | 1 (sin anidamiento) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> Si intentas sangrar más allá del límite, el editor lo bloqueará y mostrará un mensaje.

---

## Opción 2 — Tab Slide (zonas horizontales)

Tab Slide divide los elementos en pestañas horizontales. En lugar de expandirse hacia abajo como hijos, cada pestaña muestra un conjunto separado de elementos.

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← encabezados de pestañas
├─────────────────────────────────┤
│  • Collections                  │
│  • New Arrivals                 │  ← contenido de la pestaña activa
│  • Sale                         │
└─────────────────────────────────┘
```

### Cómo hacerlo

1. Añade un nuevo elemento con el tipo **Tab Marker**.
2. Establece la etiqueta del Tab Marker — esto se convierte en el texto del encabezado de pestaña (ej. "Shop").
3. Añade elementos debajo del Tab Marker — pertenecen al área de contenido de esa pestaña.
4. Repite: añade el siguiente Tab Marker y luego los elementos para esa pestaña.

```
[Tab Marker]  "Shop"
  Collections
  New Arrivals
  Sale

[Tab Marker]  "Pages"
  About us
  Contact

[Tab Marker]  "More"
  Blog
  FAQ
```

---

## ¿Qué enfoque usar?

| Objetivo | Usar |
|---|---|
| Mostrar subcategorías bajo un elemento padre | **Anidamiento padre–hijo (Opción 1)** |
| Agrupar secciones no relacionadas una al lado de la otra | **Tab Slide (Opción 2)** |
| Menú con muchos elementos en múltiples categorías | **Tab Slide** |
| Navegación en profundidad (categoría → subcategoría) | **Anidamiento padre–hijo** |
| Pestañas externas con elementos anidados en cada pestaña | **Ambos** |

---

## Límites a tener en cuenta

- **Los Tab Markers no pueden anidarse dentro de otro elemento.** Sangrar un Tab Marker está bloqueado.
- **Los elementos dentro de una pestaña pueden tener hijos** — sujeto al límite de profundidad del tipo de menú.
- **Mobile Grid no admite anidamiento** — usa Tab Slide si necesitas agrupación.
- **Reordena las pestañas** arrastrando un Tab Marker hacia arriba o abajo — los elementos debajo lo siguen.
