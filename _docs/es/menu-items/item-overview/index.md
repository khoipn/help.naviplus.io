---
description: Qué es un elemento de menú en Navi+, los tipos de elementos disponibles y la estructura completa de campos en el panel de edición.
layout: default
permalink: /es/docs/menu-items/item-overview/
title: Descripción general de elementos
---
# Descripción general de elementos

## ¿Qué es un elemento de menú?

Cada fila en una lista de menú es un **elemento**. Un elemento es la unidad más pequeña en Navi+ — puede ser un enlace de navegación, un encabezado de grupo, un espaciador en blanco o un divisor de pestañas.

Varios elementos apilados forman un menú. El menú se renderiza para los visitantes en tu sitio web.

---

## Tipos de elementos

Cuando agregas un nuevo elemento, eliges su **tipo**. El tipo determina cómo aparece el elemento y qué hace.

| Tipo | Descripción | Cuándo usar |
|---|---|---|
| **Icono / Texto** | Elemento estándar con icono y etiqueta | Enlaces de navegación regulares |
| **Imagen grande / Texto** | Mosaico grande con imagen de fondo completo y texto superpuesto | Banners de categorías, imágenes destacadas |
| **Título de grupo** | Encabezado de sección — no es un enlace | Agrupar visualmente los elementos debajo |
| **Espacio en blanco** | Hueco transparente | Espaciado y alineación del diseño |
| **Marcador de pestaña** | Marca el inicio de una nueva pestaña | Dividir el menú en pestañas horizontales |
| **HTML personalizado** | Insertar HTML arbitrario | Widgets personalizados, banners especiales |

---

## Estructura de campos

Haz clic en cualquier elemento para abrir el panel de edición:

```
┌─────────────────────────────────────────┐
│  MEDIOS                                 │
│    Icono  |  Imagen                     │
├─────────────────────────────────────────┤
│  INFORMACIÓN BÁSICA                     │
│    Texto · Enlace a · HTML              │
│    Descripción · Divisor · Badge        │
├─────────────────────────────────────────┤
│  LAYOUT                                 │
│    Layout de visualización · Ancho      │
│    Posición · Altura fija               │
├─────────────────────────────────────────┤
│  INTERFACE (UI)                         │
│    Clases · Estilo texto                │
│    Estilo icono/imagen · Fondo          │
│    Espaciado · Alineación               │
├─────────────────────────────────────────┤
│  AVANZADO                               │
│    Animación · CSS · Atributos          │
├─────────────────────────────────────────┤
│  PUBLICAR                               │
│    Publicado · Condiciones login        │
└─────────────────────────────────────────┘
```

---

## Flujo de edición

1. Haz clic en un elemento → se abre el panel.
2. Cambia los campos necesarios.
3. Presiona **Actualizar** para aplicar cambios.
4. Presiona **Guardar** (`Ctrl+S` / `Cmd+S`) para guardar y actualizar el simulador.

> Mantén Shift mientras presionas Guardar para guardar y recargar el simulador inmediatamente.
