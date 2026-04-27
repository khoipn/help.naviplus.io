---
description: Controla la apariencia de tu menú Navi+ — colores, fuentes, espaciado, fondos e iconos mediante un sistema de diseño jerárquico.
layout: default
permalink: /docs/design/
title: Diseño
---
# Diseño

La sección **Diseño** controla toda la apariencia de tu menú: colores, tipografía, espaciado, fondos e iconos. La configuración aquí se aplica a **todo el menú** utilizando un sistema de herencia de tres niveles.

---

## Temas

| # | Tema | |
|---|---|---|
| 1 | Sistema de herencia y mecanismo de anulación (leer primero) | [Descripción general del diseño](/docs/design/design-overview/) |
| 2 | Nivel 1 — Apariencia de elementos del menú principal | [Diseño Nivel 1](/docs/design/design-level1/) |
| 3 | Nivel 2-3 — Apariencia de submenús | [Diseño Nivel 2-3](/docs/design/design-level2/) |
| 4 | Divisor — Líneas separadoras | [Diseño Divisor](/docs/design/design-divider/) |

---

## Referencia rápida

```
Valores por defecto globales (hardcoded)
    ↓
Nivel 1  — se aplica a todos los elementos del menú principal
    ↓  (Nivel 2-3 hereda si está vacío)
Nivel 2-3 — se aplica a submenús / desplegables
    ↓  (anula todo)
Por elemento — configuración individual en Editar elemento
```

**Regla:** Vacío = heredar de arriba. Establecer un valor = anular.
