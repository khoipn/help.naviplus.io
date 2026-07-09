---
description: Resumen de los tipos de menú de Navi+ y sus métodos de implementación correspondientes — Menús Sticky, Slide y Section.
lang: es
layout: default
permalink: /es/docs/publish/publish-overview/
title: Publicar resumen — Tipos de menú y métodos de implementación
---
# Publicar Resumen — Tipos de Menú y Métodos de Implementación

Los menús de Navi+ se dividen en 3 grupos de implementación, determinados automáticamente por el tipo de menú (`menu_kind`):

| Grupo | Tipos de menú | Método |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) o `<head>` código (Global) → habilitar toggle |
| **Slide** | Context Slide | App Embeds / `<head>` → habilitar toggle → configurar trigger |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Insertar/Reemplazar (Selector CSS) y/o App Block (Shopify) |

---

## Dos mercados: Shopify vs. Global

| Paso | Shopify | Global (WordPress, Squarespace, Webflow...) |
|---|---|---|
| Código de inserción | Habilitar en **App Embeds** (Editor de Temas) — no se necesita pegar código | Pegar `<script>` en el sitio web `<head>` |
| Token | No necesario — Shopify OAuth lo maneja | Requerido — `token: "NAVI123456"` en script |
| App Block | Disponible (solo Shopify) — Método 2 para menús de sección | No disponible |

> **Wix:** Si instalaste la aplicación Navi+ desde el Wix App Market, la incrustación es automática — Navi+ inyecta `start.js` para ti a través del Wix Embedded Script, por lo que **no tienes que pegar ningún código**. La autenticación y la facturación se manejan a través de Wix. Solo las plataformas autodirigidas (WordPress, Squarespace, Webflow, Magento, sitios personalizados) necesitan la inserción manual de `<script>` descrita anteriormente.

---

## Flujo general

```
1. Diseñar menú (Design + Configuración)
        ↓
2. Abrir modal de Publicar
        ↓
3. Incrustar código en el sitio web (una sola vez)
   - Shopify: App Embeds en el Editor de Temas
   - Global: pegar `<script>` en `<head>`
        ↓
4. Habilitar toggle "Publicar este menú"
        ↓
5. (Opcional) Configurar dispositivo, visualización de página, filtro de URL
        ↓
6. Guardar → el menú está en vivo
```

> El paso 3 (inserción de código) solo necesita hacerse **una vez por sitio web**. Los menús posteriores solo necesitan los pasos 4 en adelante.
