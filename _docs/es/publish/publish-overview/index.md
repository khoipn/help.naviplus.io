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

| Paso | Shopify | Global (WordPress, Wix...) |
|---|---|---|
| Código de inserción | Habilitar en **App Embeds** (Editor de Temas) — no se necesita pegar código | Pegar `<script>` en el sitio web `<head>` |
| Token | No necesario — Shopify OAuth lo maneja | Requerido — `token:
