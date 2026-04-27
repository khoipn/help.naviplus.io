---
description: Controla qué páginas y dispositivos muestran el menú Navi+ — interruptores de dispositivo, reglas de palabras clave de URL, filtros de tipo de página de Shopify.
layout: default
permalink: /es/docs/setting/setting-display-rules/
title: Reglas de visualización de configuración — Visibilidad condicional
---
# Reglas de visualización de configuración — Visibilidad condicional

Controla dónde aparece el menú según el tipo de dispositivo, URL o tipo de página de Shopify.

---

## Visualización por dispositivo

En la pestaña **Publicar**:

| Interruptor | Efecto |
|---|---|
| **Móvil** | Mostrar/ocultar en móvil |
| **Escritorio** | Mostrar/ocultar en escritorio |

Predeterminado: solo Móvil está activado. Escritorio debe activarse manualmente.

---

## Reglas de palabras clave de URL

### Mostrar solo cuando la URL contiene la palabra clave

**Campo:** `Publicar — Contiene palabra clave`

```
collections, products/sale
```

---

### Ocultar cuando la URL contiene la palabra clave

**Campo:** `Publicar — No contiene palabra clave`

```
checkout, account/login
```

---

## Tipos de página de Shopify

| Grupo | Páginas |
|---|---|
| **Inicio** | Página de inicio |
| **Detalle de producto** | Páginas de producto |
| **Categorías de producto** | Páginas de colección |
| **Páginas** | Páginas estáticas |
| **Blogs** | Blog y artículos |
| **Otros** | Todo lo demás |

Desmarcar un grupo → el menú no se mostrará en ese tipo de página.

---

## Orden de reglas

```
1. ¿Dispositivo habilitado?          →  Si no: oculto
2. ¿Tipo de página marcado?          →  Si no: oculto
3. ¿URL coincide con no-mostrar?     →  Si sí: oculto
4. ¿URL coincide con solo-mostrar?   →  Si no: oculto
5. Mostrar menú
```
