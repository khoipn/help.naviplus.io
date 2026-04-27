---
description: Publica menús Section (Mega Menu, Grid) en Navi+ — Insertar/Reemplazar con CSS Selector o App Block en Shopify.
layout: default
permalink: /es/docs/publish/publish-section/
title: Publish Section — Mega Menu & Grid
---
# Publish Section — Mega Menu & Grid

Aplicable a: **Mobile Mega Menu**, **Mobile Grid**, **Desktop Mega Menu**

Los menús Section **no son flotantes** — se insertan en una posición específica del diseño de la página. Hay dos métodos de implementación que pueden usarse juntos:

| | Método 1: Insertar/Reemplazar | Método 2: App Block |
|---|---|---|
| Plataforma | Shopify + Global | Solo Shopify |
| Mecanismo | CSS Selector → insertar antes/después/reemplazar elemento | App Block "Navi+ on Section" en Theme Editor |
| Flexibilidad | Alta — incrustar en cualquier lugar | Media — limitado por el esquema de sección de Shopify |
| Configuración | Requiere conocer el CSS Selector | Solo ingresar el Embed ID |

---

## Método 1: Insertar/Reemplazar con CSS Selector

El método **Recomendado** — funciona para Shopify y Global.

### Paso 1: Código de inserción

**Shopify:** **Theme Editor → App Embeds** → activa Navi+. Solo una vez.

**Global:** Pega en `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### Paso 2: Activar "Publicar menú por método Insertar/Reemplazar"

Activa el interruptor para expandir la sección de configuración de abajo.

### Paso 3: Ingresar CSS Selector

Ingresa **un** CSS Selector. El menú se colocará en relación al elemento coincidente.

**Sintaxis específica por dispositivo:**

| Sufijo | Dispositivo |
|---|---|
| `header` | Móvil y escritorio |
| `header(M)` | Solo móvil |
| `header(D)` | Solo escritorio |

**Consejos de CSS Selector para temas populares de Shopify:**

| Tipo de menú | Propósito | CSS Selector sugerido |
|---|---|---|
| Desktop Mega | Reemplazar navegación de escritorio | `nav.header__inline-menu ul.list-menu` |
| Desktop Mega | Insertar debajo del encabezado | `header` |
| Mobile Mega | Insertar debajo del encabezado móvil | `header` |

### Paso 4: Elegir ubicación (Insertar/Reemplazar)

| Valor | Comportamiento |
|---|---|
| **Reemplazar** | Reemplaza completamente el elemento original con el menú Navi+ |
| **Insertar antes** | Inserta el menú Navi+ antes del elemento |
| **Insertar después** | Inserta el menú Navi+ después del elemento |

> Después de elegir **Reemplazar**, considera agregar CSS para ocultar el elemento original mientras Navi+ carga — ver [Publish Optimize](/es/docs/publish/publish-optimize/).

---

## Método 2: App Block (solo Shopify)

### Cómo configurar

1. Copia el **Embed ID** del menú (mostrado en el modal — clic para copiar).
2. Ve al **Shopify Theme Editor** → encuentra el App Block **"Navi+ on Section"**.
3. Pega el Embed ID en el campo correspondiente.
4. Guarda el tema.

### "Fijo en la parte superior al desplazarse"

Interruptor para fijar el menú Section en la parte superior de la página al desplazarse.

**Cuándo usar:** Si el tema no tiene un encabezado sticky integrado, actívalo para que el Desktop Mega Menu permanezca visible al desplazarse hacia abajo.

---

## ¿Se pueden usar ambos métodos juntos?

Sí. Los usuarios de Shopify pueden activar ambos:
- App Block para la vista previa del Theme Editor (más estable, más fácil de previsualizar).
- Insertar/Reemplazar para una ubicación más precisa en el storefront.

Normalmente solo se necesita un método.

---

## Notas por tipo de menú

| Menú | Dispositivo | Notas |
|---|---|---|
| Mobile Mega Menu | Interruptor de escritorio desactivado | Solo móvil |
| Mobile Header | Interruptor de escritorio desactivado | Solo móvil |
| Desktop Mega Menu | Interruptor móvil desactivado | Solo escritorio |
| Mobile Grid | Ambos | Sin restricciones |

---

## Solución de problemas

**¿El menú no aparece después de configurar Insertar/Reemplazar?**
1. Verifica que el CSS Selector sea correcto — usa DevTools o el Modo Debug de Navi+.
2. Verifica que el interruptor "Publicar menú por método Insertar/Reemplazar" esté activado.
3. Verifica que App Embeds / el código de inserción esté en su lugar.

**¿El menú aparece dos veces (duplicado)?**
→ Tanto App Block como Insertar/Reemplazar están activos simultáneamente. Desactiva uno de ellos.
