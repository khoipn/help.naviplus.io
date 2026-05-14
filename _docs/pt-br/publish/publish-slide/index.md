---
description: Menus de Slide (Contexto) em Navi+ — habilite o toggle e configure um gatilho para abrir o menu.
lang: pt-br
layout: default
permalink: /pt-br/docs/publish/publish-slide/
title: Publicar slide — Menu de slide de contexto
---
# Publicar Slide — Menu de Slide de Contexto

Aplica-se a: **Menu de Slide de Contexto**

Menus de slide são **diferentes de Sticky**: após a publicação, o menu **não aparece automaticamente** na página. Ele só se abre quando acionado por uma ação. Esta é a principal distinção em relação aos menus Sticky.

---

## Fluxo de publicação

```
Passo 1: Incorporar código no site
        ↓
Passo 2: Habilitar o toggle "Publicar este menu"
        ↓
Passo 3: Configurar gatilho (como abrir o menu)
```

Após o Passo 2, o menu é carregado no site, mas **em um estado oculto**. O Passo 3 decide o que o abre.

---

## Passo 1: Incorporar código

**Shopify:** Vá para **Editor de Tema → Embeds de App** → habilite o Navi+. Faça isso apenas uma vez.

**Global:** Cole em `<head>`:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Passo 2: Habilitar toggle

Habilite o **"Publicar este menu"** toggle no modal de Publicação.

> Após este passo, o menu **não aparecerá** no site ainda. Isso é esperado — Menus de Slide requerem um gatilho para abrir.

---

## Passo 3: Configurar gatilho

A interface do gatilho é dividida em duas abas: **Configuração Móvel** e **Configuração Desktop**. Os métodos podem ser combinados livremente. Uma zona **Para desenvolvedores** fica fora das abas.

---

### Método 1: Abrir a partir de um item de menu do Navi+

Use a sintaxe `open:NaviMenu(embed_id)` no campo **Link** de qualquer item de menu. O embed_id é mostrado no modal e pode ser clicado para copiar:

```
open:NaviMenu(ABC123)
```

Requer **plano Business ou superior** (necessita de 2+ menus).

**Móvel — casos de uso comuns:**
- Um Tabbar com um primeiro item como "☰ Menu" que abre o menu de Slide — **a configuração mais comum**
- Um menu FAB & Suporte com um único item que abre o menu de Slide
- Um Mega menu Móvel com um item "☰ Menu" sob o cabeçalho

**Desktop — casos de uso comuns:**
- Um Mega menu Desktop com um item "☰ Menu" — mantém uma experiência consistente com o móvel
- Um Mega menu Desktop com um único item "☰" colocado antes do logo — espelha o hambúrguer móvel no desktop (requer algum CSS; [entre em contato conosco](mailto:support@naviplus.io) se precisar de ajuda)
- Um menu FAB & Suporte com um único item que abre o menu de Slide
- Um Tabbar com um item "☰ Menu"

---

### Método 2: Abrir ao clicar em um elemento (Seletor CSS)

Insira um ou mais Seletores CSS, separados por vírgulas (`,`).

**Sintaxe específica do dispositivo:**

| Sufixo | Dispositivo |
|---|---|
| `#element` | Tanto móvel quanto desktop |
| `#element(M)` | Apenas móvel |
| `#element(D)` | Apenas desktop |

**Passo 1 — encontre seu seletor:**

*No Shopify (Dawn, Craft, Spotlight...):*
Tente `#Details-menu-drawer-container` para o menu hambúrguer móvel. Para outros temas, use **Modo de Depuração do Navi+**: visite `yoursite.com/#navidebug-on`, passe o mouse sobre o elemento, pressione `Cmd/Ctrl+C` para copiar seu seletor.

*No desktop:*
Geralmente não há ícone de hambúrguer — você precisa criar um gatilho clicável:
- Adicione um item "☰ Menu" ao seu mega menu existente
- Ou coloque um ícone ☰ antes do logo usando HTML/CSS ([entre em contato conosco](mailto:support@naviplus.io) se precisar de ajuda)

**Passo 2 — otimize a UX:**
Uma vez configurado, adicione um indicador de carregamento ao elemento substituído para evitar flash de layout — veja [Publicar Otimizar](/docs/publish/publish-optimize/).

---

### Avançado (Desktop): Sidebar Fixo

Em vez de abrir/fechar, o menu de Slide pode ser exibido como uma barra lateral sempre visível no desktop.

**Como habilitar:** Vá para **Avançado** → **Direção de Slide-in** → selecione a opção Sidebar Fixa → habilite "Exibir um menu fixo no desktop".

Nenhum gatilho necessário — o menu está sempre visível no desktop.

---

### Para desenvolvedores: Função JavaScript

Chame esta função de qualquer lugar no código da página:

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Adequado para integrar o menu de Slide em UI personalizada sem um seletor fixo.

---

## Solução de problemas

**Toggle habilitado, mas o menu não aparece?**
→ Comportamento correto. Menus de Slide precisam de um gatilho (Passo 3). Verifique se pelo menos um método está configurado.

**Seletor CSS não funcionando?**
1. Use **Modo de Depuração do Navi+** para encontrar o seletor exato para o elemento.
2. Verifique se o elemento realmente existe na página (alguns temas ocultam/removem elementos em certos breakpoints).
3. Tente adicionar `(M)` ou `(D)` como sufixo para separar por dispositivo.

**Quer vários menus de Slide na mesma página?**
→ Crie menus separados, cada um com um `embed_id` diferente, usando gatilhos diferentes.
