---
description: 'Inmersión profunda en un único elemento de menú — su estructura HTML (icono, imagen, nombre, descripción, flecha, insignia) y cómo estilizar solo ese elemento con la caja CSS por elemento, incluyendo & (este elemento), selectores internos, hover y @media.'
lang: es
layout: default
permalink: /es/docs/usage/menu-item-structure-and-css/
title: Estructura del elemento de menú y CSS
---
# Estructura del elemento de menú y CSS

Esta página profundiza en **un único elemento de menú** — el HTML que renderiza y cómo estilizar **solo ese elemento** usando la caja CSS del elemento (**editar el elemento → Avanzado → Hoja de estilo interna/CSS**).

> Esta caja estiliza **solo el elemento que estás editando**, y el CSS **viaja con el elemento** cuando lo duplicas. Para CSS en todo el menú, usa **CSS personalizado para este menú** — ve [Estructura del menú y CSS](/docs/usage/menu-structure-and-css/).

***

## La estructura de un elemento

Cada elemento es un único `li` que contiene un `div.inner`. Dentro de `.inner`, en orden:

```html
<li class="item level-1 …" data-name="Shop">
  <div class="inner inner-level1">
    <span class="arrow"></span>            <!-- flecha del submenú (si la hay) -->
    <!-- <span class="cart_count">3</span> --> <!-- insignia del carrito con conteo (opcional) -->

    <!-- MEDIA — icono O imagen (si el elemento tiene una imagen, el icono no se renderiza) -->
    <span class="icon"><i class="ri-store-2-line"></i></span>
    <!-- o -->
    <div class="image-border">
      <span class="image-box"><span class="image"><img src="…"></span></span>
    </div>

    <!-- TEXTO -->
    <div class="info">
      <div class="flexcol">
        <span class="name">Shop</span>
        <div class="description">Examina todas las categorías</div>   <!-- solo si completaste la descripción -->
      </div>
    </div>
  </div>
</li>
```

### Las partes que puedes apuntar

| Parte | Selector | Notas |
| ---- | -------- | ----- |
| El elemento en sí (la fila) | `&` | El `li`. `&` es un atajo para "este elemento". |
| Envoltorio de contenido | `.inner` | Envuelve todo dentro del elemento |
| Glifo de icono | `.icon i` | Remix Icon (`ri-…`) |
| Imagen | `.image img` (caja: `.image-border`, `.image-box`, `.image`) | Se muestra en lugar del icono cuando el elemento tiene una imagen |
| Título | `.name` | La etiqueta |
| Descripción | `.description` | Solo existe si completaste el campo de descripción |
| Columna de texto | `.info`, `.flexcol` | Contiene nombre + descripción |
| Flecha | `.arrow` | Flecha del submenú |
| Insignia del carrito | `.cart_count` | Solo para elementos del carrito con un conteo |

***

## Escribiendo CSS para un elemento

La caja acepta **tres formas, combinables juntas**. Nunca escribes `#SF-…` y nunca añades una etiqueta `<style>` — Navi+ automáticamente limita todo a este elemento.

### 1. `&` — este elemento (recomendado)

`&` significa la fila del elemento (el `li`), justo como `&` en Sass:

```css
& { border: 1px solid #eee; border-radius: 12px; }
&:hover { background: #f8fafc; }
```

### 2. Selectores internos — partes dentro del elemento

Usa los nombres de clase de la tabla anterior:

```css
.name { font-weight: 700; }
.description { font-size: 12px; opacity: .8; }
.icon i { font-size: 22px; color: #2563eb; }
.image img { border-radius: 10px; }
```

Un **espacio después de `&`** también significa "dentro del elemento", así que `& .name` y `.name` son lo mismo. `&` escrito **sin espacio** (`&:hover`, `&.active`) estiliza la fila en sí.

### 3. Declaraciones simples — el atajo anterior

Escribir propiedades **sin un selector** las aplica a la fila del elemento:

```css
color: red;
font-weight: 700;
```

Esto sigue funcionando (los menús antiguos dependen de esto), pero `&` es más claro — y las declaraciones simples **no pueden** usarse dentro de `@media`.

***

## Responsivo con `@media`

`@media` funciona aquí. Dentro de `@media` debes usar un selector (es CSS estándar), así que usa `&` para el elemento en sí:

```css
/* Relleno más pequeño y oculta la descripción en teléfonos */
@media (max-width: 768px) {
  & { padding: 8px; }
  .description { display: none; }
  .name { font-size: 13px; }
}
```

> Para **mostrar u ocultar** un elemento por dispositivo, prefiere **Mostrar en móvil/Mostrar en escritorio** en el editor — no CSS. En **Wix**, `@media` basado en viewport podría no coincidir con la pantalla real; usa los ajustes Display allí.

***

## Ejemplos

**Convertir un elemento en una píldora/insignia:**

```css
& { background: #111; color: #fff; border-radius: 999px; padding: 6px 14px; }
.name { color: #fff; }
```

**Resalta en hover:**

```css
&:hover { transform: translateY(-2px); transition: transform .15s; }
&:hover .name { color: #2563eb; }
```

**Icono más grande y coloreado:**

```css
.icon i { font-size: 24px; color: #e11d48; }
```

**Imagen redondeada con marco sutil:**

```css
.image img { border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,.12); }
```

**Compacto en móvil:**

```css
& { padding: 12px; }
@media (max-width: 768px) {
  & { padding: 6px; }
  .description { display: none; }
}
```

***

## Cosas buenas de saber

* **Sin `#SF-…`, sin etiqueta `<style>`** — Navi+ limita el CSS solo a este elemento; nunca afecta a otros elementos.
* El CSS **viaja con el elemento** cuando lo duplicas (es por elemento, reutilizable).
* Si una propiedad se establece tanto aquí **como** en los ajustes visuales del elemento (Media box/Inner box color, border, shadow…), el **ajuste visual gana** — se aplica en línea. Limpia ese ajuste si quieres que tu CSS tome precedencia.
* Usa el **icono expandir** (esquina superior derecha de la caja) para un editor más grande; presiona **Esc** o **Hecho** para cerrar.

***

Documentación de soporte — **Navi+**
