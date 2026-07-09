---
description: Visão geral dos tipos de menu do Navi+ e seus correspondentes métodos de implantação — Sticky, Slide e Section menus.
lang: pt-br
layout: default
permalink: /pt-br/docs/publish/publish-overview/
title: Publicar visão geral — Tipos de menu e métodos de implantação
---
# Publicar Visão Geral — Tipos de Menu & Métodos de Implantação

Os menus Navi+ são divididos em 3 grupos de implantação, determinados automaticamente pelo tipo de menu (`menu_kind`):

| Grupo | Tipos de menu | Método |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) ou código `<head>` (Global) → habilitar toggle |
| **Slide** | Context Slide | App Embeds / `<head>` → habilitar toggle → configurar gatilho |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Inserir/Substituir (Seletor CSS) e/ou App Block (Shopify) |

---

## Dois mercados: Shopify vs. Global

| Passo | Shopify | Global (WordPress, Squarespace, Webflow...) |
|---|---|---|
| Código de incorporação | Habilitar em **App Embeds** (Theme Editor) — nenhum código a ser colado | Colar `<script>` no `<head>` do website |
| Token | Não necessário — o Shopify OAuth cuida disso | Necessário — `token: "NAVI123456"` no script |
| App Block | Disponível (apenas Shopify) — Método 2 para Section menus | Não disponível |

> **Wix:** Se você instalou o aplicativo Navi+ do Wix App Market, a incorporação é automática — o Navi+ injeta o `start.js` para você através do Wix Embedded Script, então você **não cola nenhum código**. A autenticação e a cobrança são feitas através do Wix. Apenas plataformas autogerenciadas (WordPress, Squarespace, Webflow, Magento, sites personalizados) precisam colar manualmente o `<script>` acima.

---

## Fluxo geral

```
1. Projetar menu (Design + Configuração)
        ↓
2. Abrir modal de Publicação
        ↓
3. Incorporar código no website (apenas uma vez)
   - Shopify: App Embeds no Theme Editor
   - Global: colar <script> no <head>
        ↓
4. Habilitar toggle "Publicar este menu"
        ↓
5. (Opcional) Configurar dispositivo, exibição de página, filtro de URL
        ↓
6. Salvar → menu está ao vivo
```

> O Passo 3 (incorporação de código) só precisa ser feito **uma vez por website**. Menus subsequentes só precisam dos passos 4 em diante.
