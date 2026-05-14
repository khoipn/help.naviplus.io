---
description: Configura la velocidad de animación, el estilo de animación, los efectos de expansión, la retroalimentación táctil y el estilo de flecha en los menús de Navi+.
lang: es
layout: default
permalink: /es/docs/setting/setting-behavior/
title: Configuración de comportamiento — Animación e interacción
---
# Configuración de Comportamiento — Animación e Interacción

Las configuraciones en **Configuración → Animación** y **Configuración → Efecto de Expansión** controlan la velocidad, el estilo de movimiento y la retroalimentación de interacción para tu menú.

---

## Velocidad de Animación

Se aplica a todo el movimiento en el menú (abrir submenús, transiciones de elementos, etc.).

| Opción | Duración |
|---|---|
| Ninguna | Sin animación |
| Muy Lenta | ~500ms |
| Lenta | ~350ms |
| **Media** *(predeterminado)* | ~200ms |
| Rápida | ~120ms |
| Muy Rápida | ~60ms |

---

## Estilo de Animación

Controla cómo aparece el menú. Se aplica solo a **Slide menu** y **Tabbar** — Mega Menu siempre usa Fade.

| Opción | Efecto |
|---|---|
| **Deslizar** *(predeterminado)* | Se desliza desde el borde de la pantalla |
| **Desvanecer** | Se desvanece gradualmente |

---

## Efecto de Expansión

Se aplica solo a **Slide menu** — controla cómo se abren los submenús.

| Opción | Efecto |
|---|---|
| **Expandir de arriba hacia abajo** | El submenú se expande hacia abajo en su lugar |
| **Deslizar desde la derecha** | El submenú se desliza desde la derecha como un nuevo panel |

---

## Retroalimentación Táctil *(Business / Elite)*

Color de destello de fondo cuando un usuario toca un elemento en móvil.

| Campo | Descripción |
|---|---|
| **Color de Fondo Táctil** | Color de destello (hex) |
| **Opacidad de Fondo Táctil** | Opacidad de destello (0–100) |

Dejar vacío = sin efecto táctil.

---

## Estilo de Flecha *(Elite)*

Personaliza la flecha de expansión mostrada en los elementos principales con hijos.

| Campo | Descripción | Predeterminado |
|---|---|---|
| **Color** | Color de la flecha (hex) | Hereda el Color del Texto |
| **Opacidad** | Opacidad de la flecha (0–100) | 30 |
| **Tamaño (px)** | Tamaño de la flecha | 20px |
| **Ícono** | Nombre de Remixicon (por ejemplo, `ri-arrow-right-s-line`) | Predeterminado del sistema |
