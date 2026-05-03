---
description: Cómo configurar etiquetas de texto, descripciones, divisores y badges (incluyendo badges de conteo de carrito) en Navi+.
layout: default
permalink: /es/docs/menu-items/item-label-badge/
title: Etiquetas, descripciones y badges
---
# Etiquetas, descripciones y badges

## Texto (etiqueta principal)

El texto principal que se muestra en el elemento — lo que leen los visitantes.

**Consejos:**
- Mantenlo corto: 1–3 palabras es ideal para menús móviles.
- Déjalo vacío si quieres un elemento solo con icono (combina con Layout → Solo Icono/Imagen).
- Soporta múltiples idiomas — haz clic en **Multi** junto a la etiqueta para agregar traducciones por idioma.

**Ejemplos:** `Inicio`, `Tienda`, `Contacto`

---

## Descripción (sub-etiqueta)

Una línea de texto más pequeña debajo del texto principal — úsala para una nota corta o etiqueta secundaria.

**Ejemplo:** `Tel: +34 91 234 5678 | 8AM–9PM`

**Notas:**
- Solo visible cuando el layout de visualización soporta dos líneas (Arriba-Abajo, Izquierda-Derecha, etc.).
- Oculto cuando el layout es Solo Icono/Imagen o Solo Texto.
- Soporta múltiples idiomas.

---

## Solo icono (ocultar etiqueta, mostrar icono)

Para ocultar la etiqueta de texto y mostrar solo el icono o imagen, ve a **Layout → Layout de visualización → Solo Icono/Imagen**.

El campo Texto aún existe en los datos (para SEO y accesibilidad) pero no se renderiza visualmente.

---

## Agregar divisor

Activa **Agregar divisor** para agregar una línea horizontal debajo del elemento, separándolo del siguiente.

Cuando está activado, aparecen tres opciones adicionales:

| Opción | Descripción | Plan |
|---|---|---|
| **Tamaño (px)** | Grosor de la línea (1px por defecto) | Todos |
| **Tipo** | Estilo de línea: Sólido, Discontinuo, Punteado, Doble | Business / Elite |
| **Color** | Color de la línea (hex) | Todos |
| **Anchura** | Extensión: Completo, Sangría, Bajo el texto | Business / Elite |

> Tipo y Anchura aparecen en gris (bloqueados) en el plan Starter.

---

## Agregar badge

Activa **Agregar badge** para mostrar un pequeño punto de badge en la esquina del elemento — útil para etiquetas "Nuevo", notificaciones o conteo del carrito.

### Badge de carrito *(Business / Elite)*

Activa **"Mostrar badge (+n) cuando hay artículos en el carrito"** para mostrar automáticamente el número de productos en el carrito.

Perfecto para un elemento Carrito en la barra de pestañas:
- Carrito vacío → badge oculto.
- 3 artículos en carrito → badge muestra **3**.
