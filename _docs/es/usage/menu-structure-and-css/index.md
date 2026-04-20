---
description: 'Guía corta para estilizar el menú con **CSS personalizado para este menú**, **Clases reutilizables (CSS)** y el HTML predeterminado. El menú tiene **tres niveles**: barra principal...'
lang: es
layout: default
permalink: /es/docs/usage/menu-structure-and-css/
title: Estructura del menú y CSS
---
# Estructura del menú y CSS

Guía corta para estilizar el menú con **CSS personalizado para este menú**, **Clases reutilizables (CSS)** y el HTML predeterminado. El menú tiene **tres niveles**: barra principal, submenú, submenú anidado.

> **Nota:** Esta demostración cubre un **menú Slide / Standard**. La estructura es la misma para la mayoría de los tipos de menú; TABBAR y Mega Menu pueden tener diferencias menores — usa DevTools en la página en vivo para confirmar.

***

### CSS personalizado — qué escribir

En **Avanzado → CSS personalizado para este menú**, Navi+ **agrega un prefijo** (incluyendo `#SF-…` y el alcance del menú). Escribe **selectores normales solamente** — no **escribas** `#SF-12345678` tú mismo.

```css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

Usa **`#SF-…` manualmente** solo cuando **no** estés usando esta caja (por ejemplo, CSS en el archivo del tema).

**Hoja de estilos global / CSS** es un campo **separado**: se aplica a **todo el sitio** y no está limitado a un menú — usa con cuidado.

**Clases reutilizables (CSS):** define `.yourClass { … }` en la tabla reutilizable y asigna la clase a los elementos — las reglas permanecen en el mismo paquete CSS interno; no necesitas agregar `#SF-…` en la caja. La clase aparece en el **`li`**.

No **envuelvas** el contenido en una `<style>` etiqueta en la caja — solo CSS plano.

***

### Demostración detallada: una rama de tres niveles (icono, imagen, nombre, descripción)

Etiquetas de ejemplo: **Shop** (nivel 1: **icono** + nombre + descripción) → **Clothing** (nivel 2: **imagen** + nombre) → **T-Shirts** (nivel 3: **icono** + nombre + descripción). Esto muestra **ambos tipos de medios** y **descripción**.

Todo el menú se encuentra en un bloque:

```html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` es el **id de inserción** del menú — visible en el panel de control de Navi+ (la insignia azul junto al título del menú) y en DevTools en la página en vivo.

#### Orden dentro de cada `div.inner` (tiempo de ejecución)

1. **`span.arrow`** — flecha (submenú / móvil, depende del tipo de menú).
2. *(Opcional)* **`span.cart_count`** — solo cuando el elemento usa la insignia del carrito con conteo.
3. **Medios — uno de:**
   * **Icono (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Imagen:** `div.image-border` → `span.image-box` → `span.image` → `img`\
     \&#xNAN;*Nota:* si el elemento **tiene una imagen**, la aplicación **muestra la imagen** y no renderiza el icono para esa fila.
4. **`div.info`** → **`div.flexcol`** → **`span.name`** (etiqueta) → **`div.description`** *(solo si llenas la descripción en el editor)*.
5. *(Opcional / SEO)* el icono o la imagen pueden estar envueltos en **`a[href]`** — puedes ver `<a>…</a>` alrededor de `span.icon` o el bloque de imagen en DevTools.

#### Clases `li` explicadas

| Clase                             | Significado                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | Profundidad de este elemento                                             |
| `is-parent-top`                   | Elemento de nivel 1 que tiene hijos                                 |
| `is-parent`                       | Elemento de nivel 2+ que tiene hijos                                |
| `data-name="…"`                   | Etiqueta del elemento (atributo, útil para selectores CSS `[data-name]`) |

#### Demostración HTML completa (clases ilustrativas / URLs)

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
            <div class="description">Explora todas las categorías</div>
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

#### Fragmentos de medios (para referencia)

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

#### Ejemplos de selectores para CSS personalizado (en la caja de Navi+ — no escribas `#SF-…`)

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

**Recuerda:** los submenús de nivel 2 / 3 se encuentran **dentro** del **`li`** padre, **después** del `div.inner` del padre — no como hijos directos de `ul.navigation`.

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
