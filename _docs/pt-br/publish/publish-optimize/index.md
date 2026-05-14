---
description: Otimize a velocidade e a UX após publicar menus Navi+ — evite o flash do conteúdo original ao usar os gatilhos Insert/Replace ou CSS Selector.
lang: pt-br
layout: default
permalink: /pt-br/docs/publish/publish-optimize/
title: Publicar otimizar — Velocidade & UX
---
# Publicar Otimizar — Velocidade & UX

Quando usar **Insert/Replace** (menu de Seção) ou **CSS Selector trigger** (Slide menu), o site precisa de um breve momento para carregar o Navi+. Durante esse tempo, o elemento original (o menu antigo do tema) ainda está visível — causando um **flash** ou mudança de layout.

---

## Quando a otimização é necessária?

| Método | Precisa de otimização? |
|---|---|
| Sticky / FAB (App Embeds / `<head>`) | Não — menu é adicionado ao DOM, nada substituído |
| Slide menu — Método 1 (abrir a partir do item Navi+) | Não — botão de gatilho é um item Navi+ |
| **Slide menu — Método 2 (CSS Selector trigger)** | **Sim** — elemento de gatilho original permanece visível até o Navi+ carregar |
| **Seção — Substituir** | **Sim** — menu original aparece primeiro, depois é substituído pelo Navi+ |
| Seção — Inserir Antes/Depois | Não é necessário — dois menus aparecem lado a lado |

---

## Técnica: Ocultar elemento original via CSS

### Como funciona

1. Use CSS para ocultar o elemento original imediatamente (antes do Navi+ carregar).
2. Opcionalmente, mostre um espaço reservado de carregamento para evitar mudança de layout.
3. O Navi+ remove ou substitui automaticamente o elemento quando estiver pronto — o layout se estabiliza.

### Implementação

**Adicione CSS para ocultar o elemento original** (cole no CSS Personalizado do tema ou `<head>`):

```css
/* Ocultar menu original enquanto o Navi+ carrega */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* reserve espaço para evitar mudança de layout */
}
```

Uma vez que o Navi+ substitui o elemento, esse CSS não tem efeito — o elemento é removido do DOM.

**Com espaço reservado de carregamento** (avançado):
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

## Caso especial: Slide menu com CSS Selector trigger

Quando um Slide menu usa um CSS Selector trigger (Método 2), o elemento de gatilho original (por exemplo, o botão de hambúrguer do tema) ainda está visível e **ainda funciona** (abre o painel deslizante do tema) até o Navi+ carregar e substituir o evento.

### Solução A: Oculte o elemento original, use o item Navi+ como gatilho em vez disso

```css
/* Ocultar botão de hambúrguer do tema */
#Details-menu-drawer-container {
  display: none !important;
}
```

Então use **Método 1** (abrir a partir do item Navi+) em vez do Método 2 — mais limpo, sem flash para se preocupar.

### Solução B: Fade out do elemento original

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

Adicione JS: quando o Navi+ estiver pronto (`naviReady` evento), remova o estilo de ocultação para restaurar a visibilidade do elemento original.

---

## Notas gerais sobre velocidade

- `start.js` carrega com `async` — não bloqueia a renderização da página.
- A configuração JSON do menu é armazenada em cache no Cloudflare CDN — carregamento rápido do nó de borda mais próximo.
- Sem renderização do lado do servidor para visitantes — toda a renderização do menu é do lado do cliente a partir de JSON estático.

Para pré-carregar o script para máxima velocidade:
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
