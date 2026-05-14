---
description: Cómo agregar íconos integrados e imágenes personalizadas a los elementos del menú en Navi+, y cómo estilizarles.
lang: es
layout: default
permalink: /es/docs/menu-items/item-icon-image/
title: Íconos e Imágenes
---
# Íconos e Imágenes

Cada elemento puede tener un elemento visual: ya sea un **ícono integrado** o una **imagen personalizada**. Solo puedes usar uno a la vez, no ambos.

---

## Ícono integrado

Los íconos son símbolos vectoriales de la biblioteca integrada **Remixicon**. Son nítidos en cualquier tamaño y no requieren carga de archivos.

### Cómo agregar

1. En el panel Editar Elemento, haz clic en el botón **Ícono**.
2. Se abre el cuadro de búsqueda de íconos: escribe una palabra clave (por ejemplo, `home`, `cart`, `phone`, `search`).
3. Haz clic en un ícono para seleccionarlo: una vista previa aparece en el elemento de inmediato.
4. Haz clic en **×** para eliminar el ícono actual.

### Cuándo usar íconos

- Elementos en una **Tab Bar**: los íconos son la forma estándar de etiquetar las pestañas.
- Cuando deseas un aspecto limpio y consistente.
- Cuando no tienes imágenes personalizadas listas.

---

## Imagen personalizada

Usa tu propia foto, logo o gráfico en lugar de un ícono de la biblioteca.

> **Plan Starter:** Las imágenes personalizadas no son compatibles: usa íconos integrados en su lugar.

### Opción A — Subir desde la galería *(Business / Elite)*

1. Haz clic en el botón **Imagen** en el panel Editar Elemento.
2. Haz clic en **Galería** → se abre el cuadro de diálogo de carga.
3. Selecciona o sube una imagen (JPG, PNG, GIF).
4. Confirma: la URL de la imagen se completa automáticamente.

### Opción B — Pegar una URL de imagen *(Elite)*

1. Haz clic en el botón **Imagen**.
2. Pega la URL completa de la imagen en el campo de URL.
3. Haz clic en **Actualizar**.

### Consejos para imágenes

- Usa imágenes **cuadradas (1:1)** para íconos de Tab Bar.
- Usa imágenes **en paisaje** para elementos de Imagen Grande.
- **PNG con fondo transparente** funciona mejor para logos y símbolos.
- Mantén el tamaño del archivo pequeño: las imágenes pesadas ralentizan el menú en móviles.
- Elite convierte automáticamente las imágenes a WebP y normaliza las dimensiones.

---

## Diseño de visualización

Después de agregar un ícono o imagen, elige cómo se organizan el ícono/imágen y el texto en **Diseño → Diseño de Visualización**:

| Opción | Diseño |
|---|---|
| **Automático** | Sigue el tipo de menú por defecto |
| **De Arriba a Abajo** | Ícono/imágen en la parte superior, texto abajo |
| **De Izquierda a Derecha** | Ícono/imágen a la izquierda, texto a la derecha |
| **De Abajo a Arriba** | Texto en la parte superior, ícono/imágen abajo |
| **De Derecha a Izquierda** | Texto a la izquierda, ícono/imágen a la derecha |
| **Solo Ícono/Imagen** | Solo ícono/imágen: texto oculto |
| **Solo Texto** | Solo texto: ícono/imágen oculto |

---

## Estilizar el ícono o imagen

Ve a **Interfaz → Estilo de Ícono / Imagen** para ajustar la apariencia:

| Configuración | Efecto |
|---|---|
| **Color del Ícono** | Cambia el color vectorial del ícono (hex). No se aplica a archivos de imagen. |
| **Tamaño (px)** | Tamaño de visualización del ícono o imagen |
| **Contenedor** | Color de fondo de la caja que rodea el ícono |
| **Relleno (px)** | Espacio entre el ícono y su caja contenedora |
| **Curva (px)** | Radio de esquina del contenedor: establece `50` para un círculo |

**Ejemplo — ícono blanco en una caja azul redonda:**

```
Color del Ícono:  #FFFFFF
Contenedor:   #0066CC
Relleno:     10
Curva:       50
```
