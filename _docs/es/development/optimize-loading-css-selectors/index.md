---
description: "Sintaxis de selector CSS para disparadores de menú esqueleto e integración de tema — optimización del tiempo de carga del menú y UX con formatos de selector específicos del dispositivo y etiquetados."
layout: default
permalink: /es/docs/development/optimize-loading-css-selectors/
title: Optimización de velocidad y UX — sintaxis de selector CSS
---
# Optimización de velocidad y UX — sintaxis de selector CSS

En **Theme Editor → App embeds → Store Connector**, bajo el grupo **Speed & UX optimization**, encontrará 2 campos de selector CSS que ayudan a que su menú se cargue sin problemas — sin necesidad de escribir CSS/JS personalizado como antes. Esta guía explica la sintaxis de ambos campos.

---

## 2 campos, 2 propósitos diferentes

| Campo | Usado para | Mecanismo |
|---|---|---|
| **Mobile Menu CSS Selector** | Botón disparador de menú (menú de hamburguesa) cuando se utiliza vinculación de eventos de selector CSS | Haga clic en el botón ANTES de que Navi+ se cargue → muestra un menú esqueleto inmediatamente (retroalimentación instantánea) en lugar de una espera silenciosa. A medida que Navi+ se carga, el esqueleto cede el paso al menú real cuando llega el contenido. |
| **CSS Selector for Mega Menu Replacement** | Área de menú del tema original, cuando Navi+ se ejecuta en modo Replacement | Cubre esa área con un efecto de carga shimmer mientras espera a que Navi+ se cargue, evitando que el contenido original parpadee cuando se reemplaza. |

Ambos campos son **opcionales** — déjelos en blanco y nada cambia del comportamiento predeterminado.

---

## Sintaxis común — múltiples selectores separados por coma

```
selector-1, selector-2, selector-3
```

Separe múltiples selectores en un solo campo usando comas `,` o puntos y comas `;`. Las comas/puntos y comas dentro de paréntesis `(...)`, corchetes `[...]` o cadenas entrecomilladas `"..."` / `'...'` (como en selectores de atributo `[data-value="a,b"]`) se reconocen en contexto y no se confundirán con delimitadores de selectores.

---

## Sintaxis Legacy — sufijos `(M)` / `(D)`

Funciona en **ambos campos**. Añada un sufijo inmediatamente después del selector para limitar por dispositivo:

```
.hamburger-mobile (M)
.hamburger-desktop (D)
.trigger-all-devices
```

| Sufijo | Se aplica a |
|---|---|
| `(M)` | Solo Mobile |
| `(D)` | Solo Desktop |
| *(sin sufijo)* | Todos los dispositivos |

---

## Sintaxis Labeled — solo campo "Mobile Menu CSS Selector"

El campo **Mobile Menu CSS Selector** admite una sintaxis avanzada para personalizar la apariencia del menú esqueleto — el campo **Mega Menu (Replacement mode)** NO admite esto, aceptando solo `(M)` / `(D)`.

```
.hamburger (Device:M | Color:#1a1a1a | Direction:left | Width:85%)
```

Identificado por dos puntos `:` dentro de `(...)` — si hay dos puntos, es formato Labeled; si no, es Legacy (`(M)` / `(D)`). Los parámetros se separan por tuberías `|`:

| Parámetro | Valores válidos | Predeterminado cuando se omite/es inválido |
|---|---|---|
| `Device` | `M` o `D` (listar ambos `M,D` = sin restricción de dispositivo, igual que omitir) | Todos los dispositivos |
| `Color` | Código CSS hexadecimal: `#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa` | `#fff` |
| `Direction` | `left` o `right` — dirección del deslizamiento del esqueleto | `left` |
| `Width` | Porcentaje `NN%` o píxeles `NNpx` (entero o decimal) | `85%` |

**Ejemplo:**
```
.hamburger (Device:M | Color:#1a1a1a | Width:320px)
```
→ Se aplica solo en Mobile, fondo del esqueleto `#1a1a1a`, ancho fijo `320px`.

### Tolerancia de fallas por parámetro

- El espacio en blanco y las mayúsculas/minúsculas en claves y valores se normalizan antes de la comparación (`Color: #1A1A1A` y `color:#1a1a1a` son idénticas).
- Un formato de parámetro inválido (p. ej., `Color:red` — no hexadecimal) o clave desconocida (error tipográfico, nombre inexistente) se **omite silenciosamente solo para ese parámetro**, utilizando el valor predeterminado — no romperá otros parámetros u otros selectores en el mismo campo.

---

## Selectores inválidos (errores de sintaxis CSS)

Si un selector en el campo **Mobile Menu CSS Selector** tiene un error de sintaxis CSS real (diferente de parámetros Labeled inválidos — este es un selector que no se puede analizar), Navi+ registra una advertencia en la consola del navegador (F12 → Console), señalando directamente al campo:

```
[Navi+] INVALID TRIGGER CSS SELECTOR — this one was skipped
selector      : <selector inválido>
browser error : <mensaje de error del navegador>
Fix it in Theme Editor → App embeds → Store Connector →
Mobile Menu CSS Selector.
```

El selector inválido se omite solo; otros selectores válidos en el campo continúan funcionando normalmente.

---

## Ejemplos del mundo real

### 1. Proteger el hamburger predeterminado, sin personalización

```
#Details-menu-drawer-container
```
Los clics tempranos aún reciben retroalimentación instantánea (esqueleto predeterminado), sin necesidad de declarar Device/Color/Direction/Width.

### 2. Solo hamburger en Mobile, deslizar desde la derecha, color de marca

```
.hamburger-mobile (Device:M | Color:#0f172a | Direction:right | Width:90%)
```

### 3. Reemplazar el área de menú del tema original en ambos dispositivos

```
nav.header__inline-menu
```
(en el campo **CSS Selector for Mega Menu Replacement**, sin sufijo = se aplica a todos los dispositivos)

### 4. Combinar múltiples selectores, límites específicos del dispositivo

```
.mega-menu (D), .mobile-nav-wrapper (M)
```
