---
description: Otimize velocidade e UX após publicar menus Navi+ — evite flash do conteúdo original ao usar Insert/Replace ou gatilhos CSS Selector.
layout: default
permalink: /pt-br/docs/publish/publish-optimize/
title: Publish optimize — Velocidade e UX
---
# Publish Optimize — Velocidade e UX

Ao usar **Insert/Replace** (menu Section) ou **gatilho CSS Selector** (menu Slide), o site precisa de um breve momento para carregar o Navi+. Durante esse tempo, o elemento original (o menu antigo do tema) ainda está visível — causando um **flash** ou deslocamento de layout.

---

## Quando a otimização é necessária?

| Método | Precisa de otimização? |
|---|---|
| Sticky / FAB (App Embeds / `<head>`) | Não — o menu é adicionado ao DOM, nada é substituído |
| Menu Slide — Método 1 (abrir a partir de item Navi+) | Não — o botão de gatilho é um item Navi+ |
| **Menu Slide — Método 2 (gatilho CSS Selector)** | **Sim** — o elemento de gatilho original permanece visível até o Navi+ carregar |
| **Section — Replace** | **Sim** — o menu original aparece primeiro, depois é substituído pelo Navi+ |
| Section — Insert Before/After | Não necessário — dois menus aparecem lado a lado |

---

## Técnica: Ocultar elemento original via CSS

### Como funciona

1. Use CSS para ocultar o elemento original imediatamente (antes do Navi+ carregar).
2. Opcionalmente mostrar um placeholder de carregamento para evitar deslocamento de layout.
3. O Navi+ automaticamente remove ou substitui o elemento quando pronto — o layout se estabiliza.

### Implementação

**Adicione CSS para ocultar o elemento original** (cole no CSS personalizado do tema ou no `<head>`):

```css
/* Ocultar menu original enquanto o Navi+ carrega */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* reservar espaço para evitar deslocamento de layout */
}
```

Assim que o Navi+ substitui o elemento, este CSS não tem efeito — o elemento é removido do DOM.

**Com placeholder de carregamento** (avançado):
```css
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  position: relative;
}
nav.header__inline-menu ul.list-menu::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f5f5f5;
  border-radius: 4px;
}
```

---

## Caso especial: Menu Slide com gatilho CSS Selector

Quando um menu Slide usa um gatilho CSS Selector (Método 2), o elemento de gatilho original (ex.: o botão hambúrguer do tema) ainda está visível e **ainda funciona** (abre o painel slide do tema) até o Navi+ carregar e sobrescrever o evento.

### Solução A: Ocultar elemento original, usar item Navi+ como gatilho em vez disso

```css
/* Ocultar botão hambúrguer do tema */
#Details-menu-drawer-container {
  display: none !important;
}
```

Então use o **Método 1** (abrir a partir de item Navi+) em vez do Método 2 — mais limpo, sem preocupação com flash.

### Solução B: Desvanecer o elemento original

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

Adicione JS: quando o Navi+ estiver pronto (evento `naviReady`), remova o estilo de ocultação para restaurar a visibilidade do elemento original.

---

## Notas gerais de velocidade

- `start.js` carrega com `async` — não bloqueia a renderização da página.
- O JSON de configuração do menu é armazenado em cache no Cloudflare CDN — carregamento rápido do nó de borda mais próximo.
- Sem renderização do lado do servidor para visitantes — toda a renderização de menu é do lado do cliente a partir de JSON estático.

Para pré-carregar o script para máxima velocidade:
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
