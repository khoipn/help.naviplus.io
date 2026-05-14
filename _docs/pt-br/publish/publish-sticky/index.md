---
description: Publique menus Sticky (Tabbar, Cabeçalho Móvel, FAB) no Navi+ — usando App Embeds para Shopify ou injeção de script para sites Globais.
lang: pt-br
layout: default
permalink: /pt-br/docs/publish/publish-sticky/
title: Publicar sticky — Tabbar & FAB
---
# Publicar Sticky — Tabbar & FAB

Aplica-se a: **Tabbar**, **Cabeçalho Móvel**, **FAB / Barra de Suporte**

Menus sticky são flutuantes — eles sempre aparecem na tela e não estão anexados a uma posição fixa no DOM. O método de incorporação é o mais simples: ative em todo o site através de um único script.

---

## Shopify — 3 etapas

### Etapa 1: Ativar App Embeds no Editor de Tema

Vá para **Editor de Tema → App Embeds** e ative o toggle do Navi+.

- Isso **não altera o layout do tema** e pode ser desativado a qualquer momento sem afetar a loja.
- Só precisa ser feito **uma vez por loja** — pule esta etapa para menus subsequentes.

### Etapa 2: Ativar "Publicar este menu em modo sticky"

O toggle no cartão **Etapa 2** do modal de Publicação. Ativar = menu está ao vivo, desativar = oculto do site.

### Etapa 3 (opcional): Configurar visibilidade de dispositivo e página

Veja [Filtro de Publicação](/docs/publish/publish-filter/) para detalhes.

---

## Global (WordPress, Wix, Webflow...) — 3 etapas

### Etapa 1: Cole o código de incorporação em `<head>`

O código é mostrado no modal com um botão **Copiar**. Cole-o no `<head>` do seu site:

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` identifica sua loja — cada loja tem um token único.
- `start.js` carrega de forma assíncrona e não bloqueia a renderização da página.

### Etapa 2: Ativar "Publicar este menu em modo sticky"

Igual ao Shopify — ative o toggle.

### Etapa 3 (opcional): Configurar visibilidade de dispositivo e página

Veja [Filtro de Publicação](/docs/publish/publish-filter/) para detalhes.

---

## Notas por tipo de menu

| Menu | Restrição |
|---|---|
| Cabeçalho Móvel | Toggle de desktop desativado — apenas móvel |
| FAB / Barra de Suporte | Sem seletor de posição (FAB tem sua própria posição na aba de Configurações) |
| Tabbar | Opções completas para móvel + desktop disponíveis |

---

## Solução de Problemas

**O menu não aparece após ativar o toggle?**
1. Verifique se o App Embeds está ativado (Shopify) ou se o código de incorporação está colado corretamente (Global).
2. Verifique as configurações do dispositivo — **Mostrar menu no móvel** ou **Mostrar menu no desktop** devem estar ativados.
3. Verifique o filtro de URL — pode estar filtrando a página atual.
4. Atualize o navegador (Ctrl+Shift+R) para limpar o cache.
