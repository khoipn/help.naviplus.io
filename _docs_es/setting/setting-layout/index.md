---
description: Configura la posición del menú, el relleno, el margen, el índice Z y el ancho del submenú en Navi+.
layout: default
permalink: /docs/setting/setting-layout/
title: Distribución de configuración — Posición y espaciado
---
# Distribución de configuración — Posición y espaciado

Controla la **posición** de todo el menú, el **orden de apilamiento** y el **ancho del submenú**.

---

## Relleno y margen del menú

Controla el espaciado exterior e interior del **contenedor del menú completo** — diferente del relleno a nivel de elemento en Diseño.

| Campo | Descripción |
|---|---|
| **Margen superior / derecho / inferior / izquierdo (px)** | Espacio desde el menú hasta el borde de la pantalla |
| **Relleno superior / derecho / inferior / izquierdo (px)** | Espacio dentro del contenedor del menú |

**Cuándo usar:**
- Subir Tabbar sobre la barra de navegación del navegador iOS: `Margen inferior = 34`
- Espacio encima del Mega Menú: `Margen superior = 8`

---

## Índice Z

| Campo | Descripción | Predeterminado |
|---|---|---|
| **Índice Z** | Mayor = encima | Auto |

- Menú cubierto por encabezado adhesivo → aumentar Índice Z.
- Menú que cubre el widget de chat → disminuir Índice Z.

Típico: encabezados del tema = `1000–9999`; widgets de chat = `9999–99999`.

---

## Ancho del submenú

| Campo | Descripción | Predeterminado |
|---|---|---|
| **Ancho del submenú (px)** | Ancho del panel de submenú de una columna | 360px |

---

## Escritorio

| Campo | Descripción |
|---|---|
| **Mostrar submenú al pasar** | Abrir submenús al pasar el ratón |
| **Ancho del submenú de expansión completa (px)** | Ancho del submenú de múltiples columnas |
| **Dirección del submenú** | Dirección en que se abren los submenús |

---

## Multi-Sitios *(Elite)*

| Campo | Descripción |
|---|---|
| **Multi-Sitios** | Lista de dominios separados por coma (p. ej. `brand.com,shop.brand.com`) |
