---
description: En lugar de mostrar todos los elementos del menú a la vez, **Tab Slide** te permite organizar tu menú en grupos y colocar cada grupo bajo una pestaña separada. Los visitantes simplemente tocan una pestaña para cambiar entre grupos, lo que hace que los menús largos sean limpios, compactos y fáciles de navegar.
lang: es
layout: default
permalink: /es/docs/usage/general/tab-slide-group-menu-items-into-tabs/
title: Tab Slide — Agrupar elementos del menú en pestañas
---
# Tab Slide — Agrupar elementos del menú en pestañas

### ¿Qué es Tab Slide?

En lugar de mostrar todos los elementos del menú a la vez, **Tab Slide** te permite organizar tu menú en grupos y colocar cada grupo bajo una pestaña separada. Los visitantes simplemente tocan una pestaña para cambiar entre grupos, lo que hace que los menús largos sean limpios, compactos y fáciles de navegar.

**Así es como se ve:**

```
┌──────────────────────────────────┐
│  [Shop]  [Blog]  [Deals]         │  ← pestañas
│ ──────                           │
│  • T-Shirts                      │
│  • Pants                         │  ← contenido de la pestaña "Shop"
│  • Accessories                   │
└──────────────────────────────────┘
```

Cuando un visitante toca "Blog", el contenido cambia instantáneamente a los artículos del blog — no se necesita recargar la página.

***

### Cómo configurar Tab Slide

#### Paso 1 — Agregar un marcador de pestaña

1. En el árbol del menú, haz clic en **"Agregar elemento"**
2. Selecciona el tipo de elemento **Tab Slide** (el ícono de pestaña azul)
3. Ingresa un **nombre de pestaña** (por ejemplo, "Shop", "Blog", "Deals")
4. Haz clic en **Agregar**

> El marcador de pestaña aparecerá en el árbol del menú con una insignia azul **\[Tab]**.

#### Paso 2 — Agregar contenido a la pestaña

Todos los elementos del menú colocados **directamente debajo** de un marcador de pestaña pertenecen a esa pestaña.

```
[Tab] Shop           ← Marcador de pestaña (creado en el Paso 1)
  T-Shirts           ← pertenece a la pestaña "Shop"
  Pants              ← pertenece a la pestaña "Shop"
  Accessories        ← pertenece a la pestaña "Shop"
[Tab] Blog           ← siguiente marcador de pestaña
  Latest News        ← pertenece a la pestaña "Blog"
  Style Guides       ← pertenece a la pestaña "Blog"
```

#### Paso 3 — Agregar más pestañas (opcional)

Repite los pasos 1–2 para cada pestaña que desees. No hay límite en el número de pestañas.

***

### Finalizando el grupo de pestañas

A veces quieres que ciertos elementos sean **siempre visibles** — fuera de cualquier pestaña — por ejemplo, un "Contact" o "Search" enlace en la parte inferior.

Para hacer esto:

1. Agrega un nuevo elemento **Tab Slide**
2. En el panel de edición, marca **"Fin del grupo de pestañas"**
3. Todos los elementos debajo de este marcador se mostrarán como elementos de menú regulares

```
[Tab] Shop
  T-Shirts, Pants...
[Tab] Blog
  News, Guides...
[End of Tab group]   ← marca el final de las pestañas
  Contact Us         ← siempre visible, no dentro de ninguna pestaña
  About              ← siempre visible
```

***

### Personalizando cada pestaña

Cada marcador de pestaña se puede estilizar de forma independiente:

| Opción         | Descripción                                                      |
| -------------- | ---------------------------------------------------------------- |
| **Nombre de pestaña**   | El texto mostrado en el botón de la pestaña                                 |
| **Ícono**       | Un pequeño ícono junto al nombre (de la biblioteca de íconos)            |
| **Imagen**      | Una imagen en lugar de un ícono                                      |
| **Diseño**     | Ícono arriba/abajo/izquierda/derecha del nombre, solo ícono, o solo texto |
| **Color del texto** | Color personalizado para cada etiqueta de pestaña                                  |
| **Tamaño del texto**  | Tamaño de fuente personalizado para cada etiqueta de pestaña                              |

**Consejo:** Dejar el diseño como "Automático" funciona muy bien para la mayoría de los menús — la pestaña se adaptará para verse mejor.

***

### ¿Qué tipos de menú son compatibles con Tab Slide?

Tab Slide funciona con **todos los tipos de menú de Navi+**:

* ✅ Tab Bar
* ✅ Slide Menu
* ✅ Mega Menu
* ✅ FAB Menu
* ✅ Grid menu

También funciona en **cualquier nivel de menú** — no solo en el menú principal, sino también dentro de submenús (nivel 2, nivel 3).

***

### Preguntas frecuentes

**¿Aparecerá el marcador de pestaña como un elemento del menú?** No. Los marcadores de pestaña son invisibles para los visitantes — solo crean el botón de la pestaña. Tus elementos de menú reales son los que aparecen dentro de cada pestaña.

**¿Puedo agregar un ícono a una pestaña?** Sí. Edita el marcador de pestaña como cualquier otro elemento y elige un ícono de la biblioteca, o sube una imagen personalizada.

**¿Qué pestaña se muestra primero?** La primera pestaña siempre está seleccionada por defecto cuando se abre el menú.

**¿Hay un límite en cuántas pestañas puedo tener?** No hay un límite estricto, pero recomendamos mantenerlo entre 3 y 6 pestañas para la mejor experiencia en pantallas móviles.

**¿Puedo usar Tab Slide dentro de un submenú?** Sí. Coloca marcadores de pestaña dentro de cualquier submenú y el comportamiento de la pestaña funcionará a ese nivel.
