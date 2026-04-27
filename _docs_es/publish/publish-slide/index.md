---
description: Publica menús Slide (Context) en Navi+ — activa el interruptor y luego configura un disparador para abrir el menú.
layout: default
permalink: /docs/publish/publish-slide/
title: Publish Slide — Menú Context Slide
---
# Publish Slide — Menú Context Slide

Aplicable a: **Menú Context Slide**

Los menús Slide son **diferentes de los Sticky**: después de publicar, el menú **no aparece automáticamente** en la página. Solo se abre cuando se activa por una acción. Esta es la distinción clave respecto a los menús Sticky.

---

## Flujo de publicación

```
Paso 1: Insertar código en el sitio web
        ↓
Paso 2: Activar interruptor "Publicar este menú"
        ↓
Paso 3: Configurar disparador (cómo abrir el menú)
```

Después del Paso 2, el menú se carga en el sitio web pero **en estado oculto**. El Paso 3 decide qué lo abre.

---

## Paso 1: Código de inserción

**Shopify:** Ve a **Theme Editor → App Embeds** → activa Navi+. Solo una vez.

**Global:** Pega en `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Paso 2: Activar el interruptor

Activa el interruptor **"Publicar este menú"** en el modal Publish.

> Después de este paso, el menú **no aparecerá** en el sitio web todavía. Esto es esperado — los menús Slide requieren un disparador para abrirse.

---

## Paso 3: Configurar el disparador

Hay 4 formas de abrir un menú Slide:

---

### Método 1: Abrir desde un elemento de menú Navi+

Usa la sintaxis `open:NaviMenu(embed_id)` en el campo **Link** de cualquier elemento de menú.

Ejemplo: Una Tabbar tiene un elemento "Menú" → Link = `open:NaviMenu(ABC123)` → tocar ese elemento abre el menú Slide.

El **embed_id** se muestra en el modal y se puede copiar haciendo clic:
```
open:NaviMenu(ABC123)
```

Este es el enfoque más común — combinar Tabbar + menú Slide para ampliar el espacio de navegación.

---

### Método 2: Abrir al hacer clic en un elemento de la página (CSS Selector)

Introduce uno o más selectores CSS, separados por comas. Navi+ escucha eventos de clic/toque en los elementos coincidentes y abre el menú Slide.

**Sintaxis específica por dispositivo:**

| Sufijo | Dispositivo |
|---|---|
| `#element` | Móvil y escritorio |
| `#element(M)` | Solo móvil |
| `#element(D)` | Solo escritorio |

**Ejemplos para el tema Shopify Dawn:**

| Propósito | CSS Selector |
|---|---|
| Reemplazar menú hamburguesa móvil | `#Details-menu-drawer-container` |
| Selectores diferentes por dispositivo | `#Details-menu-drawer-container(M), .desktop-menu-btn(D)` |

> Después de configurar un disparador de CSS Selector, considera ocultar el elemento original para evitar el flash — ver [Publish Optimize](/docs/publish/publish-optimize/).

---

### Método 3: Llamar a una función JavaScript

Llama a esta función desde cualquier lugar del código de la página:

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Adecuado para integrar el menú Slide en una interfaz de usuario personalizada sin un selector fijo.

---

### Método 4: Barra lateral fija en escritorio

En lugar de abrir/cerrar, el menú Slide puede fijarse como una barra lateral izquierda permanente en escritorio.

**Cómo activar:** Ve a la pestaña **Advance** → selecciona la dirección **"Fijar a la izquierda"**.

No se necesita disparador — el menú siempre es visible en escritorio.

---

## Solución de problemas

**¿Interruptor activado pero el menú no aparece?**
→ Comportamiento correcto. Los menús Slide necesitan un disparador (Paso 3). Verifica que al menos un método esté configurado.

**¿CSS Selector no funciona?**
1. Usa el **Modo Debug de Navi+** para encontrar el selector exacto del elemento.
2. Verifica que el elemento realmente exista en la página (algunos temas ocultan/eliminan elementos en ciertos breakpoints).
3. Intenta agregar el sufijo `(M)` o `(D)` para separar por dispositivo.

**¿Quieres múltiples menús Slide en la misma página?**
→ Crea menús separados, cada uno con un `embed_id` diferente, usando diferentes disparadores.
