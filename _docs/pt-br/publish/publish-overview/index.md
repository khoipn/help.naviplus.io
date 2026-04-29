---
description: Visão geral dos tipos de menu Navi+ e seus métodos de deploy correspondentes — menus Sticky, Slide e Section.
layout: default
permalink: /pt-br/docs/publish/publish-overview/
title: Publish overview — Tipos de menu e métodos de deploy
---
# Publish Overview — Tipos de Menu e Métodos de Deploy

Os menus Navi+ são divididos em 3 grupos de deploy, determinados automaticamente pelo tipo de menu (`menu_kind`):

| Grupo | Tipos de menu | Método |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) ou código `<head>` (Global) → toggle ativar |
| **Slide** | Context Slide | App Embeds / `<head>` → toggle ativar → configurar gatilho |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Insert/Replace (CSS Selector) e/ou App Block (Shopify) |

---

## Dois mercados: Shopify vs. Global

| Passo | Shopify | Global (WordPress, Wix...) |
|---|---|---|
| Código de incorporação | Ativar em **App Embeds** (Theme Editor) — sem necessidade de colar código | Colar `<script>` no `<head>` do site |
| Token | Não necessário — OAuth do Shopify cuida disso | Necessário — `token: "NAVI123456"` no script |
| App Block | Disponível (apenas Shopify) — Método 2 para menus Section | Não disponível |

---

## Fluxo geral

```
1. Design do menu (Design + Setting)
        ↓
2. Abrir modal Publish
        ↓
3. Incorporar código no site (apenas uma vez)
   - Shopify: App Embeds no Theme Editor
   - Global: colar <script> no <head>
        ↓
4. Ativar toggle "Publish this menu"
        ↓
5. (Opcional) Configurar dispositivo, exibição de página, filtro de URL
        ↓
6. Salvar → menu está ao vivo
```

> O Passo 3 (incorporação do código) só precisa ser feito **uma vez por site**. Os menus subsequentes só precisam dos passos 4 em diante.
