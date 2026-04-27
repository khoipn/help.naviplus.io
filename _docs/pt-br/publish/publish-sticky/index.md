---
description: Publique menus Sticky (Tabbar, Mobile Header, FAB) no Navi+ — usando App Embeds para Shopify ou injeção de script para sites Global.
layout: default
permalink: /pt-br/docs/publish/publish-sticky/
title: Publish Sticky — Tabbar e FAB
---
# Publish Sticky — Tabbar e FAB

Aplica-se a: **Tabbar**, **Mobile Header**, **FAB / Support bar**

Menus Sticky são flutuantes — aparecem sempre na tela e não estão vinculados a uma posição fixa no DOM. O método de incorporação é o mais simples: ativar em todo o site via um único script.

---

## Shopify — 3 passos

### Passo 1: Ativar App Embeds no Theme Editor

Vá para **Theme Editor → App Embeds** e ative o toggle do Navi+.

- Isso **não altera o layout do tema** e pode ser desativado a qualquer momento sem afetar a loja.
- Só precisa ser feito **uma vez por loja** — pule este passo para menus subsequentes.

### Passo 2: Ativar "Publish this menu in sticky mode"

O toggle no cartão **Passo 2** do modal Publish. Ativado = menu ao vivo, desativado = oculto do site.

### Passo 3 (opcional): Configurar visibilidade por dispositivo e página

Veja [Publish Filter](/pt-br/docs/publish/publish-filter/) para detalhes.

---

## Global (WordPress, Wix, Webflow...) — 3 passos

### Passo 1: Colar código de incorporação no `<head>`

O código é exibido no modal com um botão **Copiar**. Cole no `<head>` do seu site:

```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

- `token` identifica sua loja — cada loja tem um token único.
- `start.js` carrega de forma assíncrona e não bloqueia a renderização da página.

### Passo 2: Ativar "Publish this menu in sticky mode"

Igual ao Shopify — ative o toggle.

### Passo 3 (opcional): Configurar visibilidade por dispositivo e página

Veja [Publish Filter](/pt-br/docs/publish/publish-filter/) para detalhes.

---

## Observações por tipo de menu

| Menu | Restrição |
|---|---|
| Mobile Header | Toggle de desktop desativado — apenas mobile |
| FAB / Support bar | Sem seletor de posição (FAB tem seu próprio posicionamento na aba Setting) |
| Tabbar | Opções completas de mobile + desktop disponíveis |

---

## Solução de problemas

**Menu não aparece após ativar o toggle?**
1. Verifique se o App Embeds está ativado (Shopify) ou se o código de incorporação foi colado corretamente (Global).
2. Verifique as configurações de dispositivo — **Show menu on mobile** ou **Show menu on desktop** deve estar ativado.
3. Verifique o filtro de URL — pode estar filtrando a página atual.
4. Faça atualização forçada do navegador (Ctrl+Shift+R) para limpar o cache.
