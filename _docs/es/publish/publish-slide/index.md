---
description: Publicar menús de diapositiva (Contexto) en Navi+ — habilitar el interruptor y luego configurar un disparador para abrir el menú.
lang: es
layout: default
permalink: /es/docs/publish/publish-slide/
title: Publicar diapositiva — Menú de diapositiva contextual
---
# Publicar Diapositiva — Menú de Diapositiva Contextual

Aplica a: **Menú de Diapositiva Contextual**

Los menús de diapositiva son **diferentes de Sticky**: después de publicar, el menú **no aparece automáticamente** en la página. Solo se abre cuando es activado por una acción. Esta es la distinción clave de los menús Sticky.

---

## Flujo de publicación

```
Paso 1: Insertar código en el sitio web
        ↓
Paso 2: Habilitar el interruptor "Publicar este menú"
        ↓
Paso 3: Configurar el disparador (cómo abrir el menú)
```

Después del Paso 2, el menú se carga en el sitio web pero **en un estado oculto**. El Paso 3 decide qué lo abre.

---

## Paso 1: Insertar código

**Shopify:** Ve a **Editor de temas → Integraciones de aplicaciones** → habilita Navi+. Haz esto solo una vez.

**Global:** Pega en `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Paso 2: Habilitar el interruptor

Habilita el **"Publicar este menú"** interruptor en el modal de Publicación.

> Después de este paso, el menú **no aparecerá** en el sitio web aún. Esto es esperado — los menús de diapositiva requieren un disparador para abrirse.

---

## Paso 3: Configurar el disparador

La interfaz del disparador se divide en dos pestañas: **Configuración móvil** y **Configuración de escritorio**. Los métodos se pueden combinar libremente. Una zona **Para desarrolladores** se encuentra fuera de las pestañas.

---

### Método 1: Abrir desde un elemento del menú Navi+

Usa la sintaxis `open:NaviMenu(embed_id)` en el campo **Enlace** de cualquier elemento del menú. El embed_id se muestra en el modal y se puede hacer clic para copiar:

```
open:NaviMenu(ABC123)
```

Requiere **plan Business o superior** (necesita 2+ menús).

**Móvil — casos de uso comunes:**
- Un Tabbar con un primer elemento como "☰ Menú" que abre el menú de diapositiva — **la configuración más común**
- Un menú FAB y de Soporte con un solo elemento que abre el menú de diapositiva
- Un Mega menú móvil con un elemento "☰ Menú" bajo el encabezado

**Escritorio — casos de uso comunes:**
- Un Mega menú de escritorio con un elemento "☰ Menú" — mantiene una experiencia consistente con móvil
- Un Mega menú de escritorio con un solo elemento "☰" colocado antes del logo — refleja el menú hamburguesa móvil en escritorio (requiere algo de CSS; [contáctanos](mailto:support@naviplus.io) si necesitas ayuda)
- Un menú FAB y de Soporte con un solo elemento que abre el menú de diapositiva
- Un Tabbar con un elemento "☰ Menú"

---

### Método 2: Abrir al hacer clic en un elemento (Selector CSS)

Ingresa uno o más Selectores CSS, separados por comas (`,`).

**Sintaxis específica del dispositivo:**

| Sufijo | Dispositivo |
|---|---|
| `#element` | Móvil y escritorio |
| `#element(M)` | Solo móvil |
| `#element(D)` | Solo escritorio |

**Paso 1 — encuentra tu selector:**

*En Shopify (Dawn, Craft, Spotlight...):*
Prueba `#Details-menu-drawer-container` para el menú hamburguesa móvil. Para otros temas, usa **Modo de depuración de Navi+**: visita `yoursite.com/#navidebug-on`, pasa el cursor sobre el elemento, presiona `Cmd/Ctrl+C` para copiar su selector.

*En escritorio:*
Generalmente no hay ícono de hamburguesa — necesitas crear un disparador clickeable:
- Agrega un elemento "☰ Menú" a tu mega menú existente
- O coloca un ícono ☰ antes del logo usando HTML/CSS ([contáctanos](mailto:support@naviplus.io) si necesitas ayuda)

**Paso 2 — optimizar UX:**
Una vez configurado, agrega un indicador de carga al elemento reemplazado para evitar parpadeos en el diseño — consulta [Publicar Optimizar](/docs/publish/publish-optimize/).

---

### Avanzado (Escritorio): Barra lateral fija

En lugar de abrir/cerrar, el menú de diapositiva puede mostrarse como una barra lateral siempre visible en escritorio.

**Cómo habilitar:** Ve a **Avanzado** → **Dirección de deslizamiento** → selecciona la opción Barra lateral fija → habilita "Mostrar un menú fijo en escritorio".

No se necesita un disparador — el menú siempre es visible en escritorio.

---

### Para desarrolladores: función JavaScript

Llama a esta función desde cualquier parte del código de la página:

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Adecuado para integrar el menú de diapositiva en una interfaz personalizada sin un selector fijo.

---

## Solución de problemas

**¿Interruptor habilitado pero el menú no aparece?**
→ Comportamiento correcto. Los menús de diapositiva necesitan un disparador (Paso 3). Verifica que al menos un método esté configurado.

**¿Selector CSS no funciona?**
1. Usa **Modo de depuración de Navi+** para encontrar el selector exacto para el elemento.
2. Verifica que el elemento realmente exista en la página (algunos temas ocultan/eliminan elementos en ciertos puntos de ruptura).
3. Prueba agregar el sufijo `(M)` o `(D)` para separar por dispositivo.

**¿Quieres múltiples menús de diapositiva en la misma página?**
→ Crea menús separados, cada uno con un `embed_id` diferente, usando diferentes disparadores.
