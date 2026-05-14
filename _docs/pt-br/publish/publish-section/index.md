---
description: Menus da Seção de Publicação (Mega Menu, Grid) no Navi+ — Inserir/Substituir com Seletor CSS ou Bloco de App no Shopify.
lang: pt-br
layout: default
permalink: /pt-br/docs/publish/publish-section/
title: Publicar seção — Mega menu & grid
---
# Publicar Seção — Mega Menu & Grid

Aplica-se a: **Mobile Mega Menu**, **Mobile Grid**, **Desktop Mega Menu**

Os menus de seção **não são flutuantes** — eles são inseridos em uma posição específica no layout da página. Existem dois métodos de implantação, que podem ser usados juntos:

| | Método 1: Inserir/Substituir | Método 2: Bloco de App |
|---|---|---|
| Plataforma | Shopify + Global | Apenas Shopify |
| Mecanismo | Seletor CSS → inserir antes/depois/substituir elemento | Bloco de App "Navi+ on Section" no Editor de Tema |
| Flexibilidade | Alta — embutir em qualquer lugar | Média — limitada pelo esquema de seção do Shopify |
| Configuração | Requer conhecimento de Seletor CSS | Apenas precisa inserir o ID de Embed |

---

## Método 1: Inserir/Substituir com Seletor CSS

O método **Recomendado** — funciona tanto para Shopify quanto para Global.

### Passo 1: Código de embed

**Shopify:** **Editor de Tema → Embeds de App** → habilitar Navi+. Uma vez apenas.

**Global:** Cole no `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### Passo 2: Habilitar "Publicar menu pelo método Inserir/Substituir"

Habilite o toggle para expandir a seção de configuração abaixo.

### Passo 3: Inserir Seletor CSS

Insira **um** Seletor CSS. O menu será colocado em relação ao elemento correspondente.

**Sintaxe específica do dispositivo:**

| Sufixo | Dispositivo |
|---|---|
| `header` | Tanto mobile quanto desktop |
| `header(M)` | Apenas mobile |
| `header(D)` | Apenas desktop |

**Dicas de Seletor CSS para temas populares do Shopify:**

| Tipo de menu | Propósito | Seletor CSS sugerido |
|---|---|---|
| Desktop Mega | Substituir navegação desktop | `nav.header__inline-menu ul.list-menu` |
| Desktop Mega | Inserir abaixo do cabeçalho | `header` |
| Mobile Mega | Inserir abaixo do cabeçalho mobile | `header` |

### Passo 4: Escolher colocação (Inserir/Substituir)

| Valor | Comportamento |
|---|---|
| **Substituir** | Substituir completamente o elemento original pelo menu Navi+ |
| **Inserir Antes** | Inserir o menu Navi+ antes do elemento |
| **Inserir Depois** | Inserir o menu Navi+ depois do elemento |

> Após escolher **Substituir**, considere adicionar CSS para ocultar o elemento original enquanto o Navi+ carrega — veja [Publicar Otimizar](/docs/publish/publish-optimize/).

---

## Método 2: Bloco de App (apenas Shopify)

### Como configurar

1. Copie o **ID de Embed** do menu (mostrado no modal — clique para copiar).
2. Vá para **Editor de Tema do Shopify** → encontre o **"Navi+ on Section"** Bloco de App.
3. Cole o ID de Embed no campo correspondente.
4. Salve o tema.

### "Fixo no topo enquanto rola"

Ative o toggle para fixar o menu da Seção no topo da página enquanto rola.

**Quando usar:** Se o tema não tiver um cabeçalho fixo embutido, habilite isso para que o menu Desktop Mega permaneça visível enquanto os usuários rolam para baixo.

---

## Ambos os métodos podem ser usados juntos?

Sim. Usuários do Shopify podem habilitar ambos:
- Bloco de App para visualização do Editor de Tema (mais estável, mais fácil de visualizar).
- Inserir/Substituir para colocação mais precisa na vitrine.

Normalmente, apenas um método é necessário.

---

## Notas por tipo de menu

| Menu | Dispositivo | Notas |
|---|---|---|
| Mobile Mega Menu | Toggle desktop desativado | Apenas mobile |
| Mobile Header | Toggle desktop desativado | Apenas mobile |
| Desktop Mega Menu | Toggle mobile desativado | Apenas desktop |
| Mobile Grid | Ambos | Sem restrições |

---

## Solução de problemas

**Menu não aparece após configurar Inserir/Substituir?**
1. Verifique se o Seletor CSS está correto — use DevTools ou Modo de Depuração do Navi+.
2. Verifique se o toggle "Publicar menu pelo método Inserir/Substituir" está habilitado.
3. Verifique se os Embeds de App / código de embed estão no lugar.

**Menu aparece duas vezes (duplicado)?**
→ Tanto o Bloco de App quanto o Inserir/Substituir estão ativos simultaneamente. Desative um deles.
