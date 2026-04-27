---
description: Descripción general de los tipos de menú Navi+ y sus métodos de implementación correspondientes — menús Sticky, Slide y Section.
layout: default
permalink: /es/docs/publish/publish-overview/
title: Publish Overview — Tipos de Menú y Métodos de Implementación
---
# Publish Overview — Tipos de Menú y Métodos de Implementación

Los menús Navi+ se dividen en 3 grupos de implementación, determinados automáticamente por el tipo de menú (`menu_kind`):

| Grupo | Tipos de menú | Método |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) o código `<head>` (Global) → interruptor de activación |
| **Slide** | Context Slide | App Embeds / `<head>` → interruptor de activación → configurar disparador |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Insertar/Reemplazar (CSS Selector) y/o App Block (Shopify) |

---

## Dos mercados: Shopify vs. Global

| Paso | Shopify | Global (WordPress, Wix...) |
|---|---|---|
| Código de inserción | Activar en **App Embeds** (Theme Editor) — no se necesita pegar código | Pegar `<script>` en el `<head>` del sitio web |
| Token | No necesario — Shopify OAuth lo gestiona | Requerido — `token: "NAVI123456"` en el script |
| App Block | Disponible (solo Shopify) — Método 2 para menús Section | No disponible |

---

## Flujo general

```
1. Diseñar menú (Design + Setting)
        ↓
2. Abrir modal Publish
        ↓
3. Insertar código en el sitio web (solo una vez)
   - Shopify: App Embeds en Theme Editor
   - Global: pegar <script> en <head>
        ↓
4. Activar interruptor "Publicar este menú"
        ↓
5. (Opcional) Configurar dispositivo, visualización de página, filtro de URL
        ↓
6. Guardar → menú en vivo
```

> El paso 3 (insertar código) solo necesita realizarse **una vez por sitio web**. Los menús siguientes solo necesitan los pasos 4 en adelante.
