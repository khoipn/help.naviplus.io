---
description: Configura la dirección del menú deslizante, el ancho, el botón de cerrar y el comportamiento del submenú de escritorio en Navi+.
lang: es
layout: default
permalink: /es/docs/setting/setting-slide/
title: Configuración de deslizamiento — Opciones del menú deslizante
---
# Configuración de Deslizamiento — Opciones del Menú Deslizante

Estos ajustes se aplican **solo a los menús deslizantes** (Menú Contextual / Menú Hamburguesa).

---

## Dirección del Deslizamiento

**Configuración → Dirección del Deslizamiento** — de dónde se desliza el menú y cómo está fijado.

| Opción | Descripción |
|---|---|
| Desde la Izquierda | Se desliza desde el borde izquierdo (más común) |
| Desde la Derecha | Se desliza desde el borde derecho |
| Desde Arriba | Se desliza hacia abajo desde la parte superior |
| Desde Abajo | Se desliza hacia arriba desde la parte inferior |
| Fijo Izquierda (escritorio) | Barra lateral siempre visible a la izquierda — no se necesita un disparador |
| Fijo Derecha (escritorio) | Barra lateral siempre visible a la derecha |

**Fijar en Móvil / Fijar en Escritorio:**
- **Fijar en Móvil** → El menú permanece visible permanentemente en móvil sin necesidad de ser abierto.
- **Fijar en Escritorio** → El menú permanece visible permanentemente en escritorio (barra lateral persistente).

---

## Ancho del Deslizamiento

| Campo | Descripción | Predeterminado |
|---|---|---|
| **Ancho Móvil** | Ancho en móvil (px o %) | Automático |
| **Ancho Máximo de Escritorio (px)** | Ancho máximo en escritorio | Automático |
| **Ancho de Submenú de Escritorio (px)** | Ancho del panel de submenú de Nivel 2 en escritorio | Automático |

**Ejemplo:** Deslizar desde la izquierda, 80% de la pantalla móvil, máximo 400px en escritorio:
- Ancho Móvil = `80%`
- Ancho Máximo de Escritorio = `400`

---

## Icono de Cierre

| Campo | Descripción | Predeterminado |
|---|---|---|
| **Ocultar Icono de Cierre** | Ocultar el botón de cerrar × | Visible |
| **Alineación del Icono de Cierre** | Posición del botón de cerrar: Izquierda / Derecha | Derecha |
| **Cierre Icono Arriba (px)** | Distancia desde la parte superior del menú hasta el botón de cerrar | 12px |

> Si ocultas el botón de cerrar, los usuarios deben tocar el área de superposición fuera del menú para cerrarlo. Mantén el botón de cerrar visible cuando el menú cubre la mayor parte de la pantalla.

---

## Dirección del Submenú de Escritorio

**Configuración → Escritorio → Dirección del Submenú**

Cuando el menú deslizante se muestra como una barra lateral fija en el escritorio, los submenús pueden abrirse en 4 direcciones:

| Valor | El submenú se abre hacia |
|---|---|
| 1 | Derecha (predeterminado) |
| 2 | Izquierda |
| 3 | Abajo |
| 4 | Arriba |
