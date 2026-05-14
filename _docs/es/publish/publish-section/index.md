---
description: Menús de la Sección Publicar (Mega Menú, Cuadrícula) en Navi+ — Insertar/Reemplazar con Selector CSS o Bloque de Aplicación en Shopify.
lang: es
layout: default
permalink: /es/docs/publish/publish-section/
title: Publicar sección — Mega menú y cuadrícula
---
# Publicar Sección — Mega Menú y Cuadrícula

Aplica a: **Mega Menú Móvil**, **Cuadrícula Móvil**, **Mega Menú de Escritorio**

Los menús de sección **no son flotantes** — se insertan en una posición específica en el diseño de la página. Hay dos métodos de implementación, que se pueden usar juntos:

| | Método 1: Insertar/Reemplazar | Método 2: Bloque de Aplicación |
|---|---|---|
| Plataforma | Shopify + Global | Solo Shopify |
| Mecanismo | Selector CSS → insertar antes/después/reemplazar elemento | Bloque de Aplicación "Navi+ on Section" en el Editor de Temas |
| Flexibilidad | Alta — incrustar en cualquier lugar | Media — limitada por el esquema de sección de Shopify |
| Configuración | Requiere conocer el Selector CSS | Solo necesita ingresar el ID de Incrustación |

---

## Método 1: Insertar/Reemplazar con Selector CSS

El método **Recomendado** — funciona tanto para Shopify como para Global.

### Paso 1: Código de incrustación

**Shopify:** **Editor de Temas → Incrustaciones de Aplicaciones** → habilitar Navi+. Una vez solamente.

**Global:** Pegar en `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### Paso 2: Habilitar "Publicar menú por método Insertar/Reemplazar"

Habilitar el interruptor para expandir la sección de configuración a continuación.

### Paso 3: Ingresar Selector CSS

Ingresar **un** Selector CSS. El menú se colocará en relación con el elemento coincidente.

**Sintaxis específica del dispositivo:**

| Sufijo | Dispositivo |
|---|---|
| `header` | Móvil y escritorio |
| `header(M)` | Solo móvil |
| `header(D)` | Solo escritorio |

**Consejos de Selector CSS para temas populares de Shopify:**

| Tipo de menú | Propósito | Selector CSS Sugerido |
|---|---|---|
| Mega de Escritorio | Reemplazar navegación de escritorio | `nav.header__inline-menu ul.list-menu` |
| Mega de Escritorio | Insertar debajo del encabezado | `header` |
| Mega Móvil | Insertar debajo del encabezado móvil | `header` |

### Paso 4: Elegir ubicación (Insertar/Reemplazar)

| Valor | Comportamiento |
|---|---|
| **Reemplazar** | Reemplazar completamente el elemento original con el menú de Navi+ |
| **Insertar Antes** | Insertar el menú de Navi+ antes del elemento |
| **Insertar Después** | Insertar el menú de Navi+ después del elemento |

> Después de elegir **Reemplazar**, considere agregar CSS para ocultar el elemento original mientras se carga Navi+ — vea [Publicar Optimizar](/docs/publish/publish-optimize/).

---

## Método 2: Bloque de Aplicación (solo Shopify)

### Cómo configurar

1. Copie el **ID de Incrustación** del menú (mostrado en el modal — haga clic para copiar).
2. Vaya a **Editor de Temas de Shopify** → encuentre el Bloque de Aplicación **"Navi+ on Section"**.
3. Pegue el ID de Incrustación en el campo correspondiente.
4. Guardar tema.

### "Fijo en la parte superior mientras se desplaza"

Active el interruptor para fijar el menú de sección en la parte superior de la página mientras se desplaza.

**Cuándo usar:** Si el tema no tiene un encabezado pegajoso incorporado, habilite esto para que el menú Mega de Escritorio permanezca visible a medida que los usuarios se desplazan hacia abajo.

---

## ¿Se pueden usar ambos métodos juntos?

Sí. Los usuarios de Shopify pueden habilitar ambos:
- Bloque de Aplicación para vista previa del Editor de Temas (más estable, más fácil de previsualizar).
- Insertar/Reemplazar para una colocación más precisa en la tienda.

Típicamente solo se necesita un método.

---

## Notas por tipo de menú

| Menú | Dispositivo | Notas |
|---|---|---|
| Menú Mega Móvil | Interruptor de escritorio deshabilitado | Solo móvil |
| Encabezado Móvil | Interruptor de escritorio deshabilitado | Solo móvil |
| Menú Mega de Escritorio | Interruptor móvil deshabilitado | Solo escritorio |
| Cuadrícula Móvil | Ambos | Sin restricciones |

---

## Solución de problemas

**¿El menú no aparece después de configurar Insertar/Reemplazar?**
1. Verifique que el Selector CSS sea correcto — use DevTools o Modo de Depuración de Navi+.
2. Verifique que el interruptor "Publicar menú por método Insertar/Reemplazar" esté habilitado.
3. Verifique que las Incrustaciones de Aplicaciones / código de incrustación estén en su lugar.

**¿El menú aparece dos veces (duplicado)?**
→ Tanto el Bloque de Aplicación como Insertar/Reemplazar están activos simultáneamente. Desactive uno de ellos.
