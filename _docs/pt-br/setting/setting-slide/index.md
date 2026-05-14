---
description: Configure a direção do menu slide, largura, botão de fechar e comportamento do submenu de desktop no Navi+.
lang: pt-br
layout: default
permalink: /pt-br/docs/setting/setting-slide/
title: Configuração de Slide — Opções do Menu Slide
---
# Configuração de Slide — Opções do Menu Slide

Essas configurações se aplicam **apenas aos Menus Slide** (Menu Contextual / Menu Hamburger).

---

## Direção do Slide

**Configuração → Direção do Slide** — de onde o menu desliza e como ele é fixado.

| Opção | Descrição |
|---|---|
| Da Esquerda | Desliza da borda esquerda (mais comum) |
| Da Direita | Desliza da borda direita |
| De Cima | Desliza para baixo a partir do topo |
| De Baixo | Desliza para cima a partir da base |
| Fixo à Esquerda (desktop) | Barra lateral sempre visível à esquerda — sem necessidade de gatilho |
| Fixo à Direita (desktop) | Barra lateral sempre visível à direita |

**Fixar no Móvel / Fixar no Desktop:**
- **Fixar no Móvel** → O menu permanece permanentemente visível no móvel sem precisar ser aberto.
- **Fixar no Desktop** → O menu permanece permanentemente visível no desktop (barra lateral persistente).

---

## Largura do Slide

| Campo | Descrição | Padrão |
|---|---|---|
| **Largura Móvel** | Largura no móvel (px ou %) | Automático |
| **Largura Máxima do Desktop (px)** | Largura máxima no desktop | Automático |
| **Largura do Submenu do Desktop (px)** | Largura do painel de submenu de Nível 2 no desktop | Automático |

**Exemplo:** Deslizar da esquerda, 80% da tela móvel, máximo 400px no desktop:
- Largura Móvel = `80%`
- Largura Máxima do Desktop = `400`

---

## Ícone de Fechar

| Campo | Descrição | Padrão |
|---|---|---|
| **Ocultar Ícone de Fechar** | Ocultar o botão de fechar × | Visível |
| **Alinhamento do Ícone de Fechar** | Posição do botão de fechar: Esquerda / Direita | Direita |
| **Topo do Ícone de Fechar (px)** | Distância do topo do menu até o botão de fechar | 12px |

> Se você ocultar o botão de fechar, os usuários devem tocar na área de sobreposição fora do menu para fechá-lo. Mantenha o botão de fechar visível quando o menu cobrir a maior parte da tela.

---

## Direção do Submenu do Desktop

**Configuração → Desktop → Direção do Submenu**

Quando o menu Slide é exibido como uma barra lateral fixa no desktop, os submenus podem abrir em 4 direções:

| Valor | Submenu abre em direção |
|---|---|
| 1 | Direita (padrão) |
| 2 | Esquerda |
| 3 | Para Baixo |
| 4 | Para Cima |
