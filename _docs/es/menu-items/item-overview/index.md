---
description: Qué es un ítem de menú en Navi+, los tipos de ítems disponibles y la estructura completa de campos en el panel Editar ítem.
lang: es
layout: default
permalink: /es/docs/menu-items/item-overview/
title: Descripción del ítem
---
# Descripción del ítem

## ¿Qué es un ítem de menú?

Cada fila en una lista de menú es un **ítem**. Un ítem es la unidad más pequeña en Navi+ — puede ser un enlace de navegación, un encabezado de grupo, un espacio en blanco o un divisor de pestañas.

Varios ítems apilados juntos forman un menú. El menú se renderiza para los visitantes en tu sitio web.

---

## Tipos de ítem

Cuando agregas un nuevo ítem, eliges su **tipo**. El tipo determina cómo se ve el ítem y qué hace.

| Tipo | Descripción | Cuándo usar |
|---|---|---|
| **Icono / Texto** | Ítem estándar con un icono y etiqueta | Enlaces de navegación regulares |
| **Imagen grande / Texto** | Azulejo grande con una imagen a todo color y texto superpuesto | Banners de categoría, imágenes de productos destacados |
| **Título de grupo** | Encabezado de sección — no es un enlace | Agrupar visualmente los ítems debajo de él |
| **Espacio en blanco** | Hueco transparente | Espaciado y alineación de diseño |
| **Marcador de pestaña** | Marca el inicio de una nueva pestaña | Divide el menú en pestañas horizontales |
| **HTML personalizado** | Incrustar HTML arbitrario | Widgets personalizados, banners especiales |

---

## Estructura de campos

Haz clic en cualquier ítem para abrir el panel Editar ítem. Está organizado en estas secciones:

```
┌─────────────────────────────────────────┐
│  MEDIOS                                 │
│    Icono  |  Imagen                    │
├─────────────────────────────────────────┤
│  INFORMACIÓN BÁSICA                    │
│    Texto · Enlace a · HTML              │
│    Descripción · Divisor · Insignia     │
├─────────────────────────────────────────┤
│  DISEÑO                                 │
│    Diseño de visualización · Ancho · Posición │
│    Altura fija                          │
├─────────────────────────────────────────┤
│  INTERFAZ (UI)                         │
│    Nombres de clase · Estilo de texto  │
│    Estilo de icono/imágen · Fondo      │
│    Espaciado · Alinear                 │
├─────────────────────────────────────────┤
│  AVANZADO                               │
│    Animación · CSS · Atributos         │
├─────────────────────────────────────────┤
│  PUBLICAR                               │
│    Está publicado · Condiciones de inicio de sesión │
└─────────────────────────────────────────┘
```

---

## Flujo de edición

1. Haz clic en un ítem en el árbol de menú → se abre el panel Editar ítem.
2. Cambia los campos que necesites.
3. Presiona **Actualizar** para aplicar los cambios a ese ítem.
4. Presiona **Guardar** (`Ctrl+S` / `Cmd+S`) para guardar todo el menú y refrescar el simulador.

> Si presionaste Actualizar pero aún no has Guardado, los cambios no se escriben en tu menú en vivo. Mantén presionada la tecla Shift mientras presionas Guardar para guardar y recargar inmediatamente el simulador.
