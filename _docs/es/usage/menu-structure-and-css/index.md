---
description: 'Breve guía para estilizar el menú con **CSS personalizado para este menú**, **Clases reutilizables (CSS)** y el HTML predeterminado. El menú tiene **tres niveles**: barra principal...'
lang: es
layout: default
permalink: /es/docs/usage/menu-structure-and-css/
title: Estructura del menú y CSS
---
# Estructura del menú y CSS

Breve guía para estilizar el menú con **CSS personalizado para este menú**, **Clases reutilizables (CSS)** y el HTML predeterminado. El menú tiene **tres niveles**: barra principal, submenú, submenú anidado.

> **Nota:** Esta demostración cubre un menú **Slide/Estándar**. La estructura es la misma para la mayoría de los tipos de menú; TABBAR y Mega Menu pueden tener pequeñas diferencias — usa DevTools en la página en vivo para confirmar.

***

### CSS personalizado — qué escribir

En **Avanzado → CSS personalizado para este menú**, Navi+ **añade un prefijo** (incluyendo `#SF-…` y ámbito de menú). Escribe **solo selectores normales** — **no** escribas `#SF-12345678` tú mismo.

```css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

**`&` = el menú en sí** (el contenedor `#SF-…`). Es opcional — pero es la forma clara de estilizar todo el menú, y la única forma de hacerlo dentro de `@media`:

```css
&              { background: #111; }        /* el contenedor del menú */
&:hover        { box-shadow: 0 4px 12px rgba(0,0,0,.15); }
& .inner-level1 { padding: 12px 16px; }     /* '& ' con espacio = dentro del menú, igual a .inner-level1 */

/* Responsivo — solo en pantallas pequeñas */
@media (max-width: 768px) {
  & { padding: 6px; }
  .name { font-size: 13px; }
}
```

**No tienes que** usar `&` — CSS sin él continúa funcionando exactamente como antes (`.inner-level1 { … }` no cambia). `&` es solo un atajo para "este menú".

Usa **`#SF-…` manualmente** solo cuando **no** estés usando esta caja (por ejemplo CSS en el archivo del tema).

**Hoja de estilo global/CSS** es un campo **separado**: se aplica a todo el **sitio** y no se limita a un menú — usa con cuidado.

**Clases reutilizables (CSS):** define `.tuClase { … }` en la tabla Reutilizable y asigna la clase a elementos — las reglas permanecen en el mismo paquete CSS interno; no necesitas añadir `#SF-…` en la caja. La clase aparece en el **`li`**.

No envuelvas el contenido en una etiqueta `<style>` en la caja — solo CSS simple.

***

### CSS por elemento (estiliza solo un elemento)

Cada elemento de menú tiene su **propio** cuadro CSS: **editar el elemento → Avanzado → Hoja de estilo interna/CSS**. Esto es separado de **CSS personalizado para este menú** (que es a nivel de menú). El CSS por elemento **viaja con el elemento** — si copias o duplicas el elemento, su estilo viene con él.

> **Guía completa:** para la estructura HTML de un elemento y cada sintaxis CSS, ve [Estructura del elemento de menú y CSS](/docs/usage/menu-item-structure-and-css/).

Escribe CSS simple. **`&` significa *este elemento*** (la fila propia del elemento/`li`) — como `&` en Sass:

```css
& { background: #fff5f5; border-radius: 10px; }
&:hover { background: #ffe4e6; }
```

Apunta a las **partes internas** del elemento con selectores de clase normales (los mismos nombres que el resto del menú: `.inner`, `.name`, `.description`, `.icon`, `.image`, `.arrow`):

```css
.name { color: #b91c1c; }
.icon i { font-size: 22px; }
& .description { opacity: 0.8; }
```

Un **espacio después de `&`** significa "una parte dentro del elemento", así que `& .name` y `.name` son lo mismo. `&` escrito **sin espacio** (`&:hover`, `&.active`) estiliza la fila propia del elemento.

**Responsivo (`@media`)** funciona — excelente para ajustes específicos para móvil. Dentro de `@media` debes usar un selector (es CSS estándar), así que usa `&` para el elemento en sí:

```css
@media (max-width: 768px) {
  & { padding: 8px; }
  .name { font-size: 13px; }
}
```

Notas:

* **Sin `#SF-…` necesario** y **sin etiqueta `<style>`** — Navi+ automáticamente limita todo a este elemento, por lo que nunca afecta a otros elementos. El CSS también viaja con el elemento si lo duplicas.
* Aún puedes escribir una **declaración simple** sin selector (`color: red;`) — se aplica a la fila de este elemento. Este estilo antiguo sigue funcionando, pero `&` es más claro y es la única forma de estilizar la fila dentro de `@media`.
* Si una propiedad se establece tanto aquí como en los ajustes visuales del elemento (Media box/Inner box shadow, etc.), el **ajuste visual gana**. Elimina/anula ese ajuste si quieres que el CSS tome precedencia.
* Para **mostrar/ocultar** un elemento por dispositivo, usa **Mostrar en móvil/Mostrar en escritorio** en el editor — no CSS. En **Wix**, `@media` basado en viewport podría no coincidir con la pantalla real; prefiere los ajustes Display allí.
* Usa el **icono expandir** (esquina superior derecha de la caja) para abrir un editor de código más grande; presiona **Esc** o **Hecho** para cerrar.

Usa **CSS por elemento** para un ajuste único en un elemento único; usa **CSS personalizado para este menú** (con `.inner-level1`, `[data-name="…"]`, etc.) cuando quieras estilizar muchos elementos o niveles enteros a la vez.

***

### Demostración detallada: una rama de tres niveles (icono, imagen, nombre, descripción)

Etiquetas de ejemplo: **Shop** (nivel 1: **icono** + nombre + descripción) → **Clothing** (nivel 2: **imagen** + nombre) → **T-Shirts** (nivel 3: **icono** + nombre + descripción). Esto muestra **ambos tipos de media** y **descripción**.

El menú completo cabe en un bloque:

```html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` es el **ID de inserción** del menú — visible en el panel Navi+ (la insignia azul junto al título del menú) y en DevTools en la página en vivo.

#### Orden dentro de cada `div.inner` (runtime)

1. **`span.arrow`** — flecha (submenú/móvil, depende del tipo de menú).
2. *(Opcional)* **`span.cart_count`** — solo cuando el elemento usa insignia del carrito con conteo.
3. **Media — uno de:**
   * **Icono (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Imagen:** `div.image-border` → `span.image-box` → `span.image` → `img`\
     \&#xNAN;*Nota:* si el elemento **tiene una imagen**, la app **muestra la imagen** y no renderiza el icono para esa fila.
4. **`div.info`** → **`div.flexcol`** → **`span.name`** (etiqueta) → **`div.description`** *(solo si completas descripción en el editor)*.
5. *(Opcional/SEO)* el icono o imagen podría estar envuelto en **`a[href]`** — podrías ver `<a>…</a>` alrededor de `span.icon` o del bloque de imagen en DevTools.

#### Explicación de las clases `li`

| Clase                             | Significado                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | Profundidad de este elemento                                             |
| `is-parent-top`                   | Elemento de nivel 1 que tiene hijos                                 |
| `is-parent`                       | Elemento de nivel 2+ que tiene hijos                                |
| `data-name="…"`                   | Etiqueta de elemento (atributo, útil para selectores CSS `[data-name]`) |

#### Demostración HTML completa (clases/URLs ilustrativos)

```html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Shop">
      <!-- NIVEL 1: icono + nombre + descripción -->
      <div class="inner inner-level1">
        <span class="arrow"></span>
        <!-- <span class="cart_count">3</span>  ← insignia del carrito solo -->

        <!-- ICONO: Remix Icon (ri-…) -->
        <span class="icon">
          <i class="ri-store-2-line"></i>
        </span>

        <div class="info">
          <div class="flexcol">
            <span class="name">Shop</span>
            <div class="description">Examina todas las categorías</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Clothing">
          <!-- NIVEL 2: imagen + nombre (sin descripción) -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- IMAGEN: cuando se establece, el icono no se renderiza -->
            <div class="image-border">
              <span class="image-box">
                <span class="image">
                  <img
                    src="https://cdn.shopify.com/…/clothing.jpg"
                    alt="Clothing"
                    title="Clothing"
                    loading="lazy"
                    decoding="async">
                </span>
              </span>
            </div>

            <div class="info">
              <div class="flexcol">
                <span class="name">Clothing</span>
                <!-- no .description si la descripción está vacía en el editor -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="T-Shirts">
              <!-- NIVEL 3: icono + nombre + descripción -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">T-Shirts</span>
                    <div class="description">Nueva colección</div>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </li>

      </ul>
    </li>

  </ul>
</div>
```

#### Fragmentos de media (para referencia)

**Solo icono (sin imagen):**

```html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**Solo imagen (URL de imagen establecida en el elemento):**

```html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### Ejemplos de selector para CSS personalizado (en la caja de Navi+ — no escribas `#SF-…`)

```css
/* Flecha */
.inner-level1 .arrow { }

/* Icono (cualquier nivel) */
.inner-level2 .icon i { font-size: 20px; }

/* Imagen */
.inner-level2 .image img { border-radius: 8px; }

/* Título y descripción */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }

/* Objetivo por nombre de elemento */
[data-name="Shop"] .name { color: red; }
```

**Recuerda:** los submenús de nivel 2/3 se encuentran **dentro** del **`li`** padre, **después** del `div.inner` del padre — no como hijos directos de `ul.navigation`.

**Misma rama, diagrama de texto:**

```
Shop              ← nivel 1 (barra principal)
  └─ Clothing     ← nivel 2 (primer submenú)
        └─ T-Shirts ← nivel 3 (submenú anidado)
```

***

### Referencia rápida (clases sugeridas)

| Nivel | Fila (`li`) | Contenedor de contenido | Siguiente submenú                        |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1     | `level-1`  | `.inner-level1` | `ul.children[menulevel="2"]`        |
| 2     | `level-2`  | `.inner-level2` | `ul.children[menulevel="3"]` si hay |
| 3     | `level-3`  | `.inner-level3` | —                                   |

`menulevel="2"` / "3" es el índice de **ese** panel de submenú — no es lo mismo que `level-1` en un elemento de nivel superior.

***

### Consejos rápidos

* Apunta a **una profundidad** con `.inner-level1`, `.inner-level2`, `.inner-level3` en lugar de solo `.inner`.
* Estiliza un **panel completo** (fondo, radio): `ul.children[menulevel="2"]` o `[menulevel="3"]`.
* Texto: `.info` → `.flexcol` → `.name`, `.description`.
* Icono: `.icon` o `.icon i` — imagen: `.image-border`, `.image img` (ver demostración detallada arriba).
* Flecha: `.arrow` (generalmente primero dentro de `.inner`).
* Apunta a un elemento específico por nombre: `[data-name="Home"] .name { … }`.

***

### ¿Clases faltantes en la tienda?

Limpia la caché del tema, vuelve a publicar el menú o verifica la versión del script. Usa DevTools para confirmar los nombres de las clases en la página en vivo.

***

Documentación de soporte — **Navi+**
