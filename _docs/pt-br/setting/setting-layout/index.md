---
description: Configure a posição do menu, preenchimento, margem, z-index e largura do submenu no Navi+.
lang: pt-br
layout: default
permalink: /pt-br/docs/setting/setting-layout/
title: Configuração de layout — Posição e espaçamento
---
# Configuração de Layout — Posição e Espaçamento

Essas configurações controlam a **posição** de todo o menu na página, sua **ordem de empilhamento** em relação a outros elementos e a **largura** dos submenus.

---

## Preenchimento e Margem do Menu

Controla o espaçamento externo e interno do **container de menu inteiro** — diferente do preenchimento em nível de item no Design.

| Campo | Descrição |
|---|---|
| **Margem Superior / Direita / Inferior / Esquerda (px)** | Espaço entre o menu e a borda da tela ou elementos ao redor |
| **Preenchimento Superior / Direita / Inferior / Esquerda (px)** | Espaço dentro do container do menu, antes que os itens sejam exibidos |

**Quando usar:**
- Empurre um Tabbar acima da barra de navegação do navegador no iOS: `Margem Inferior = 34`
- Adicione espaço entre um Mega Menu e o cabeçalho: `Margem Superior = 8`

---

## Z-Index

Ordem de empilhamento do menu em relação a outros elementos da página (cabeçalho, widget de chat, pop-ups, etc.).

| Campo | Descrição | Padrão |
|---|---|---|
| **Z-Index** | Valor inteiro — maior = em cima | Automático |

**Quando ajustar:**
- O menu está coberto por um cabeçalho fixo → aumente o Z-Index acima do valor do cabeçalho.
- O menu está cobrindo um widget de chat → diminua o Z-Index abaixo do widget.

Valores de referência comuns: cabeçalhos de tema geralmente são `1000–9999`; widgets de chat geralmente são `9999–99999`.

---

## Largura do Submenu

Aplica-se a submenus suspensos (Tabbar, Mega Menu de coluna única).

| Campo | Descrição | Padrão |
|---|---|---|
| **Largura do Submenu (px)** | Largura dos painéis de submenu de coluna única | 360px |

---

## Desktop — Comportamento e Largura do Submenu

Aplica-se quando o menu é exibido no desktop.

| Campo | Descrição |
|---|---|
| **Mostrar submenu ao passar o mouse** | Abrir submenus ao passar o mouse sem clicar |
| **Largura total do submenu expandido (px)** | Largura de submenus de várias colunas (Desktop Mega Menu) |
| **Direção do submenu** | Direção em que os submenus se abrem: direita / esquerda / cima / baixo |

---

## Multi-Sites *(Elite)*

Incorpore o menu em vários domínios fora da loja principal do Shopify.

| Campo | Descrição |
|---|---|
| **Multi-Sites** | Lista de domínios separados por vírgula (por exemplo, `brand.com,shop.brand.com`) |
