---
description: Cómo agregar iconos integrados e imágenes personalizadas a los elementos de menú en Navi+, y cómo estilizarlos.
layout: default
permalink: /es/docs/menu-items/item-icon-image/
title: Iconos e imágenes
---
# Iconos e imágenes

Cada elemento puede tener un elemento visual — ya sea un **icono integrado** o una **imagen personalizada**. Solo puedes usar uno a la vez, no ambos.

---

## Icono integrado

Los iconos son símbolos vectoriales de la biblioteca **Remixicon** integrada. Son nítidos a cualquier tamaño y no requieren carga de archivos.

### Cómo agregar

1. En el panel de edición, haz clic en el botón **Icono**.
2. Se abre el cuadro de búsqueda de iconos — escribe una palabra clave (ej. `home`, `cart`, `phone`, `search`).
3. Haz clic en un icono para seleccionarlo — aparece una vista previa en el elemento inmediatamente.
4. Haz clic en **×** para eliminar el icono actual.

### Cuándo usar iconos

- Elementos en una **barra de pestañas** — los iconos son la forma estándar de etiquetar pestañas.
- Cuando quieres un aspecto limpio y consistente.
- Cuando no tienes imágenes personalizadas listas.

---

## Imagen personalizada

Usa tu propia foto, logo o gráfico en lugar de un icono de biblioteca.

> **Plan Starter:** Las imágenes personalizadas no están soportadas — usa iconos integrados en su lugar.

### Opción A — Subir desde galería *(Business / Elite)*

1. Haz clic en el botón **Imagen** en el panel de edición.
2. Haz clic en **Galería** → se abre el diálogo de carga.
3. Selecciona o sube una imagen (JPG, PNG, GIF).
4. Confirma — la URL de la imagen se completa automáticamente.

### Opción B — Pegar una URL de imagen *(Elite)*

1. Haz clic en el botón **Imagen**.
2. Pega la URL completa de la imagen en el campo URL.
3. Haz clic en **Actualizar**.

### Consejos sobre imágenes

- Usa imágenes **cuadradas (1:1)** para iconos de barra de pestañas.
- Usa imágenes **horizontales** para elementos de imagen grande.
- **PNG con fondo transparente** funciona mejor para logos y símbolos.
- Mantén el tamaño del archivo pequeño — las imágenes pesadas ralentizan el menú en móviles.
- Elite convierte automáticamente las imágenes a WebP y normaliza las dimensiones.

---

## Diseño de visualización

Después de agregar un icono o imagen, elige cómo se organizan el icono/imagen y el texto en **Layout → Diseño de visualización**:

| Opción | Diseño |
|---|---|
| **Automático** | Sigue el valor predeterminado del tipo de menú |
| **Arriba-Abajo** | Icono/imagen arriba, texto abajo |
| **Izquierda-Derecha** | Icono/imagen a la izquierda, texto a la derecha |
| **Abajo-Arriba** | Texto arriba, icono/imagen abajo |
| **Derecha-Izquierda** | Texto a la izquierda, icono/imagen a la derecha |
| **Solo Icono/Imagen** | Solo icono/imagen — texto oculto |
| **Solo Texto** | Solo texto — icono/imagen oculto |

---

## Estilizar el icono o imagen

Ve a **Interface → Estilo de icono / imagen** para ajustar la apariencia:

| Configuración | Efecto |
|---|---|
| **Color del icono** | Cambiar el color vectorial del icono (hex). No aplica a archivos de imagen. |
| **Tamaño (px)** | Tamaño de visualización del icono o imagen |
| **Contenedor** | Color de fondo del cuadro que rodea el icono |
| **Relleno (px)** | Espacio entre el icono y su cuadro contenedor |
| **Curva (px)** | Radio de esquina del contenedor — `50` para círculo |

**Ejemplo — icono blanco en cuadro azul redondo:**

```
Color icono:  #FFFFFF
Contenedor:   #0066CC
Relleno:      10
Curva:        50
```
