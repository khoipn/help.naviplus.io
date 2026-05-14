---
description: Configura la posición del menú, el relleno, el margen, el z-index y el ancho del submenú en Navi+.
lang: es
layout: default
permalink: /es/docs/setting/setting-layout/
title: Configuración de diseño — Posición y espaciado
---
# Configuración de Diseño — Posición y Espaciado

Estos ajustes controlan la **posición** de todo el menú en la página, su **orden de apilamiento** en relación con otros elementos, y el **ancho** de los submenús.

---

## Relleno y Margen del Menú

Controla el espaciado exterior e interior de **todo el contenedor del menú** — diferente del relleno a nivel de ítem en Diseño.

| Campo | Descripción |
|---|---|
| **Margen Superior / Derecho / Inferior / Izquierdo (px)** | Espacio entre el menú y el borde de la pantalla o elementos circundantes |
| **Relleno Superior / Derecho / Inferior / Izquierdo (px)** | Espacio dentro del contenedor del menú, antes de que se muestren los ítems |

**Cuándo usar:**
- Empujar un Tabbar por encima de la barra de navegación del navegador en iOS: `Margen Inferior = 34`
- Agregar espacio entre un Mega Menu y el encabezado: `Margen Superior = 8`

---

## Z-Index

Orden de apilamiento del menú en relación con otros elementos de la página (encabezado, widget de chat, ventanas emergentes, etc.).

| Campo | Descripción | Predeterminado |
|---|---|---|
| **Z-Index** | Valor entero — mayor = encima | Automático |

**Cuándo ajustar:**
- El menú está cubierto por un encabezado fijo → aumentar Z-Index por encima del valor del encabezado.
- El menú está cubriendo un widget de chat → disminuir Z-Index por debajo del widget.

Valores de referencia comunes: los encabezados de tema suelen ser `1000–9999`; los widgets de chat suelen ser `9999–99999`.

---

## Ancho del Submenú

Se aplica a los submenús desplegables (Tabbar, Mega Menu de una sola columna).

| Campo | Descripción | Predeterminado |
|---|---|---|
| **Ancho del Submenú (px)** | Ancho de los paneles de submenú de una sola columna | 360px |

---

## Escritorio — Comportamiento y Ancho del Submenú

Se aplica cuando el menú se muestra en escritorio.

| Campo | Descripción |
|---|---|
| **Mostrar submenú al pasar el mouse** | Abrir submenús al pasar el mouse sin hacer clic |
| **Ancho del submenú completamente expandido (px)** | Ancho de submenús de varias columnas (Desktop Mega Menu) |
| **Dirección del submenú** | Dirección en la que se abren los submenús: derecha / izquierda / arriba / abajo |

---

## Múltiples Sitios *(Elite)*

Incrusta el menú en múltiples dominios fuera de la tienda principal de Shopify.

| Campo | Descripción |
|---|---|
| **Múltiples Sitios** | Lista de dominios separados por comas (por ejemplo, `brand.com,shop.brand.com`) |
