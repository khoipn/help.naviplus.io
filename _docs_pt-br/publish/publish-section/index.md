---
description: Publique menus Section (Mega Menu, Grid) no Navi+ — Insert/Replace com CSS Selector ou App Block no Shopify.
layout: default
permalink: /docs/publish/publish-section/
title: Publish Section — Mega Menu e Grid
---
# Publish Section — Mega Menu e Grid

Aplica-se a: **Mobile Mega Menu**, **Mobile Grid**, **Desktop Mega Menu**

Menus Section **não são flutuantes** — eles são inseridos em uma posição específica no layout da página. Há dois métodos de deploy, que podem ser usados juntos:

| | Método 1: Insert/Replace | Método 2: App Block |
|---|---|---|
| Plataforma | Shopify + Global | Apenas Shopify |
| Mecanismo | CSS Selector → inserir antes/depois/substituir elemento | App Block "Navi+ on Section" no Theme Editor |
| Flexibilidade | Alta — incorporar em qualquer lugar | Média — limitado pelo schema de seção do Shopify |
| Configuração | Requer conhecer o CSS Selector | Apenas inserir o Embed ID |

---

## Método 1: Insert/Replace com CSS Selector

O método **Recomendado** — funciona tanto para Shopify quanto para Global.

### Passo 1: Código de incorporação

**Shopify:** **Theme Editor → App Embeds** → ative o Navi+. Apenas uma vez.

**Global:** Cole no `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### Passo 2: Ativar "Publish menu by Insert/Replace method"

Ative o toggle para expandir a seção de configuração abaixo.

### Passo 3: Inserir CSS Selector

Insira **um** CSS Selector. O menu será posicionado em relação ao elemento correspondente.

**Sintaxe por dispositivo:**

| Sufixo | Dispositivo |
|---|---|
| `header` | Mobile e desktop |
| `header(M)` | Apenas mobile |
| `header(D)` | Apenas desktop |

**Dicas de CSS Selector para temas Shopify populares:**

| Tipo de menu | Propósito | CSS Selector sugerido |
|---|---|---|
| Desktop Mega | Substituir navegação desktop | `nav.header__inline-menu ul.list-menu` |
| Desktop Mega | Inserir abaixo do header | `header` |
| Mobile Mega | Inserir abaixo do header mobile | `header` |

### Passo 4: Escolher posicionamento (Insert/Replace)

| Valor | Comportamento |
|---|---|
| **Replace** | Substituir completamente o elemento original pelo menu Navi+ |
| **Insert Before** | Inserir menu Navi+ antes do elemento |
| **Insert After** | Inserir menu Navi+ após o elemento |

> Após escolher **Replace**, considere adicionar CSS para ocultar o elemento original enquanto o Navi+ carrega — veja [Publish Optimize](/docs/publish/publish-optimize/).

---

## Método 2: App Block (apenas Shopify)

### Como configurar

1. Copie o **Embed ID** do menu (exibido no modal — clique para copiar).
2. Vá para **Shopify Theme Editor** → encontre o App Block **"Navi+ on Section"**.
3. Cole o Embed ID no campo correspondente.
4. Salve o tema.

### "Fixo no topo durante a rolagem"

Toggle para fixar o menu Section no topo da página durante a rolagem.

**Quando usar:** Se o tema não tem um header sticky integrado, ative isso para que o Desktop Mega Menu permaneça visível enquanto os usuários rolam a página para baixo.

---

## Pode-se usar ambos os métodos juntos?

Sim. Usuários do Shopify podem ativar ambos:
- App Block para preview no Theme Editor (mais estável, mais fácil de visualizar).
- Insert/Replace para posicionamento mais preciso na vitrine.

Normalmente apenas um método é necessário.

---

## Observações por tipo de menu

| Menu | Dispositivo | Observações |
|---|---|---|
| Mobile Mega Menu | Toggle de desktop desativado | Apenas mobile |
| Mobile Header | Toggle de desktop desativado | Apenas mobile |
| Desktop Mega Menu | Toggle de mobile desativado | Apenas desktop |
| Mobile Grid | Ambos | Sem restrições |

---

## Solução de problemas

**Menu não aparece após configurar Insert/Replace?**
1. Verifique se o CSS Selector está correto — use DevTools ou Navi+ Debug Mode.
2. Verifique se o toggle "Publish menu by Insert/Replace method" está ativado.
3. Verifique se o App Embeds / código de incorporação está no lugar.

**Menu aparece duas vezes (duplicado)?**
→ Tanto o App Block quanto o Insert/Replace estão ativos simultaneamente. Desative um deles.
