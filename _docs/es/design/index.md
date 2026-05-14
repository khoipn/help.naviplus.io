---
description: Controla la apariencia de tu menú Navi+ — colores, fuentes, espaciado, fondos e íconos a través de un sistema de diseño jerárquico.
lang: es
layout: default
permalink: /es/docs/design/
title: Diseño
---
# Diseño

La **sección Diseño** controla toda la apariencia de tu menú: colores, tipografía, espaciado, fondos e íconos. Las configuraciones aquí se aplican a **todo el menú** utilizando un sistema de herencia de tres niveles.

---

## Temas

| # | Tema | |
|---|---|---|
| 1 | Sistema de herencia y mecanismo de anulación (leer primero) | [Descripción General del Diseño](/docs/design/design-overview/) |
| 2 | Nivel 1 — Apariencia de los elementos del menú principal | [Diseño Nivel 1](/docs/design/design-level1/) |
| 3 | Nivel 2-3 — Apariencia de los submenús | [Diseño Nivel 2-3](/docs/design/design-level2/) |
| 4 | Divisor — Líneas separadoras | [Diseño Divisor](/docs/design/design-divider/) |

---

## Referencia Rápida

```
Global defaults (hardcoded)
    ↓
Level 1  — applies to all top-level menu items
    ↓  (Level 2-3 inherits if empty)
Level 2-3 — applies to submenus / dropdowns
    ↓  (overrides everything)
Per-item — individual settings in Edit Item
```

**Regla:** Vacío = heredar de arriba. Establecer un valor = anular.
