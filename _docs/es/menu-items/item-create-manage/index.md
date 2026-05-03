---
description: Cómo agregar, reordenar, duplicar, eliminar y deshacer cambios en los elementos de menú en Navi+.
layout: default
permalink: /es/docs/menu-items/item-create-manage/
title: Crear y gestionar elementos
---
# Crear y gestionar elementos

## Agregar un nuevo elemento

1. En el árbol del menú, haz clic en **+ Agregar elemento** (o el botón de más al final de la lista).
2. Elige el tipo de elemento que deseas (Icono/Texto, Imagen grande, Título de grupo, Espacio en blanco, Marcador de pestaña…).
3. El nuevo elemento aparece al final de la lista con contenido predeterminado.
4. Haz clic en el elemento para abrir el panel de edición y completa los detalles.
5. Presiona **Actualizar** → **Guardar**.

> Los nuevos elementos siempre se agregan al final. Arrástralos hacia arriba hasta la posición deseada.

---

## Reordenar elementos

### Por arrastrar y soltar

- Pasa el cursor sobre el controlador de arrastre (≡) a la izquierda de un elemento.
- Arrastra **hacia arriba / abajo** para cambiar el orden dentro del mismo nivel.
- Arrastra **hacia la derecha** para indentar — el elemento se convierte en hijo del elemento anterior.
- Arrastra **hacia la izquierda** para desindentar — el elemento sube un nivel.

### Por atajo de teclado (cuando un elemento está seleccionado)

| Tecla | Acción |
|---|---|
| `↑` | Mover arriba (Mac: `Cmd+↑` / Win: `Alt+↑`) |
| `↓` | Mover abajo (Mac: `Cmd+↓` / Win: `Alt+↓`) |
| `→` | Indentar — el elemento se convierte en hijo del elemento de arriba |
| `←` | Desindentar — el elemento vuelve al nivel padre |

> Los atajos solo funcionan cuando el cursor está sobre el árbol del menú y el elemento está seleccionado (contorno azul).

---

## Editar un elemento

1. Haz clic en el elemento → se abre el panel de edición.
2. Cambia los campos necesarios.
3. Presiona **Actualizar** para guardar los cambios de ese elemento.

> Presiona **Cancelar** para cerrar el panel sin guardar.

---

## Duplicar un elemento

1. Pasa el cursor sobre el elemento → aparece el menú de acción rápida.
2. Haz clic en **Copiar** (o presiona `C`).
3. Una copia aparece inmediatamente debajo del original, con todo el contenido y configuraciones preservados.
4. Edita la copia según sea necesario.

---

## Eliminar un elemento

1. Pasa el cursor sobre el elemento → aparece el menú de acción rápida.
2. Haz clic en **Eliminar** (o presiona `Del` / `Backspace` en Mac).
3. Aparece un diálogo de confirmación — haz clic en **Confirmar** para eliminar permanentemente.

> **Nota:** Eliminar un elemento padre también elimina todos sus elementos hijos. Esto no se puede deshacer después de la confirmación.

---

## Deshacer / Rehacer

| Atajo | Acción |
|---|---|
| `Ctrl+Z` / `Cmd+Z` | Deshacer la última acción |
| `Ctrl+Y` / `Cmd+Shift+Z` | Rehacer |

El historial de deshacer solo existe para la sesión actual — recargar la página lo borra.

---

## Guardar el menú

Después de agregar, reordenar o eliminar elementos:

- Haz clic en **Guardar** en la barra de herramientas, o presiona `Ctrl+S` / `Cmd+S`.
- Mantén `Shift` mientras presionas Guardar para guardar y recargar el simulador inmediatamente.

Los cambios no son visibles para tus clientes hasta que guardes.
