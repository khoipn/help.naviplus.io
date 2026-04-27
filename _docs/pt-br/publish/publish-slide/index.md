---
description: Publique menus Slide (Context) no Navi+ — ative o toggle e configure um gatilho para abrir o menu.
layout: default
permalink: /pt-br/docs/publish/publish-slide/
title: Publish Slide — Menu Context Slide
---
# Publish Slide — Menu Context Slide

Aplica-se a: **Menu Context Slide**

Menus Slide são **diferentes dos Sticky**: após publicar, o menu **não aparece automaticamente** na página. Ele só abre quando acionado por uma ação. Esta é a distinção principal em relação aos menus Sticky.

---

## Fluxo de publicação

```
Passo 1: Incorporar código no site
        ↓
Passo 2: Ativar toggle "Publish this menu"
        ↓
Passo 3: Configurar gatilho (como abrir o menu)
```

Após o Passo 2, o menu é carregado no site mas **em estado oculto**. O Passo 3 decide o que o abre.

---

## Passo 1: Código de incorporação

**Shopify:** Vá para **Theme Editor → App Embeds** → ative o Navi+. Faça isso apenas uma vez.

**Global:** Cole no `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Passo 2: Ativar toggle

Ative o toggle **"Publish this menu"** no modal Publish.

> Após este passo, o menu **não aparecerá** no site ainda. Isso é esperado — menus Slide precisam de um gatilho para abrir.

---

## Passo 3: Configurar gatilho

Há 4 formas de abrir um menu Slide:

---

### Método 1: Abrir a partir de um item de menu Navi+

Use a sintaxe `open:NaviMenu(embed_id)` no campo **Link** de qualquer item de menu.

Exemplo: Um Tabbar tem um item "Menu" → Link = `open:NaviMenu(ABC123)` → tocar nesse item abre o menu Slide.

O **embed_id** é exibido no modal e pode ser copiado com um clique:
```
open:NaviMenu(ABC123)
```

Esta é a abordagem mais comum — combinando Tabbar + menu Slide para expandir o espaço de navegação.

---

### Método 2: Abrir ao clicar em um elemento da página (CSS Selector)

Insira um ou mais CSS Selectors, separados por vírgulas. O Navi+ monitora eventos de clique/toque nos elementos correspondentes e abre o menu Slide.

**Sintaxe por dispositivo:**

| Sufixo | Dispositivo |
|---|---|
| `#element` | Mobile e desktop |
| `#element(M)` | Apenas mobile |
| `#element(D)` | Apenas desktop |

**Exemplos para o tema Shopify Dawn:**

| Propósito | CSS Selector |
|---|---|
| Substituir menu hambúrguer mobile | `#Details-menu-drawer-container` |
| Seletores diferentes por dispositivo | `#Details-menu-drawer-container(M), .desktop-menu-btn(D)` |

> Após configurar um gatilho CSS Selector, considere ocultar o elemento original para evitar flash — veja [Publish Optimize](/pt-br/docs/publish/publish-optimize/).

---

### Método 3: Chamar uma função JavaScript

Chame esta função de qualquer lugar no código da página:

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Adequado para integrar o menu Slide em uma UI personalizada sem um seletor fixo.

---

### Método 4: Barra lateral fixa no desktop

Em vez de abrir/fechar, o menu Slide pode ser fixado como uma barra lateral esquerda permanente no desktop.

**Como ativar:** Vá para a aba **Advance** → selecione a direção **"Fix on left"**.

Nenhum gatilho necessário — o menu fica sempre visível no desktop.

---

## Solução de problemas

**Toggle ativado mas o menu não aparece?**
→ Comportamento correto. Menus Slide precisam de um gatilho (Passo 3). Verifique se pelo menos um método está configurado.

**CSS Selector não funciona?**
1. Use o **Navi+ Debug Mode** para encontrar o seletor exato do elemento.
2. Verifique se o elemento realmente existe na página (alguns temas ocultam/removem elementos em certos breakpoints).
3. Tente adicionar o sufixo `(M)` ou `(D)` para separar por dispositivo.

**Quer múltiplos menus Slide na mesma página?**
→ Crie menus separados, cada um com um `embed_id` diferente, usando gatilhos diferentes.
