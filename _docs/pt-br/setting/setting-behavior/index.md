---
description: Configure a velocidade da animação, estilo da animação, efeitos de expansão, feedback tátil e estilo da seta nos menus Navi+.
lang: pt-br
layout: default
permalink: /pt-br/docs/setting/setting-behavior/
title: Configuração de comportamento — Animação e interação
---
# Configuração de Comportamento — Animação e Interação

As configurações em **Configuração → Animação** e **Configuração → Efeito de Expansão** controlam a velocidade, estilo de movimento e feedback de interação para o seu menu.

---

## Velocidade da Animação

Aplica-se a todo movimento no menu (abrindo submenus, transições de itens, etc.).

| Opção | Duração |
|---|---|
| Nenhuma | Sem animação |
| Muito Lenta | ~500ms |
| Lenta | ~350ms |
| **Média** *(padrão)* | ~200ms |
| Rápida | ~120ms |
| Muito Rápida | ~60ms |

---

## Estilo da Animação

Controla como o menu aparece. Aplica-se apenas ao **Slide menu** e **Tabbar** — Mega Menu sempre usa Fade.

| Opção | Efeito |
|---|---|
| **Deslizar** *(padrão)* | Desliza a partir da borda da tela |
| **Desvanecer** | Desvanece gradualmente |

---

## Efeito de Expansão

Aplica-se apenas ao **Slide menu** — controla como os submenus se abrem.

| Opção | Efeito |
|---|---|
| **Expansão de cima para baixo** | Submenu se expande para baixo no lugar |
| **Deslizar da direita** | Submenu desliza da direita como um novo painel |

---

## Feedback Tátil *(Business / Elite)*

Cor de flash de fundo quando um usuário toca em um item no mobile.

| Campo | Descrição |
|---|---|
| **Cor de Fundo do Toque** | Cor de flash (hex) |
| **Opacidade do Fundo do Toque** | Opacidade do flash (0–100) |

Deixe vazio = sem efeito de toque.

---

## Estilo da Seta *(Elite)*

Personalize a seta de expansão mostrada em itens pai com filhos.

| Campo | Descrição | Padrão |
|---|---|---|
| **Cor** | Cor da seta (hex) | Herda a Cor do Texto |
| **Opacidade** | Opacidade da seta (0–100) | 30 |
| **Tamanho (px)** | Tamanho da seta | 20px |
| **Ícone** | Nome do Remixicon (por exemplo, `ri-arrow-right-s-line`) | Padrão do sistema |
