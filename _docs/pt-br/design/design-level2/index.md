---
description: Configure a aparência dos itens do submenu no Navi+ — com herança automática do Nível 1 para todos os campos vazios.
lang: pt-br
layout: default
permalink: /pt-br/docs/design/design-level2/
title: Design nível 2-3 — Itens do Submenu
---
# Design Nível 2-3 — Itens do Submenu

Configurações em **Design → Nível 2-3** se aplicam aos itens do submenu (dropdowns que aparecem quando um item pai é aberto). Qualquer campo deixado vazio **herda automaticamente** o valor correspondente do Nível 1.

> **Regra:** Preencha os campos aqui apenas quando você quiser que o submenu pareça **diferente** do menu principal. Deixe vazio = igual ao Nível 1.

---

## Estilo do Texto

| Campo | Herda do Nível 1 quando vazio |
|---|---|
| **Cor do Texto** | `textColor` |
| **Tamanho da Fonte (px)** | `textSize` |
| **Peso da Fonte** | `fontWeight` |
| **Transformação do Texto** | `textTransform` |
| **Família da Fonte** | `fontFamily` |
| **Cor da Descrição** | `descriptionColor` |
| **Tamanho da Descrição (px)** | `descriptionTextSize` |

---

## Estilo do Ícone / Imagem

| Campo | Herda do Nível 1 quando vazio |
|---|---|
| **Cor do Ícone** | `iconColor` |
| **Tamanho do Ícone (px)** | `iconSize` |
| **Espaço Texto-Ícone (px)** | `spaceTextIcon` |
| **Raio da Imagem (px)** | `imageRadius` |

---

## Espaçamento

| Campo | Descrição |
|---|---|
| **Padding do Item (px)** | Espaçamento interno para itens do submenu. Não herda — usa o padrão do tema se vazio |
| **Margem do Item (px)** | Espaçamento externo para itens do submenu |
| **Altura Mínima (px)** | Altura mínima para itens do submenu |

---

## Fundo & Quadro

| Campo | Descrição |
|---|---|
| **Cor de Fundo** | Cor de fundo da área do submenu |
| **Raio da Borda (px)** | Arredondamento dos cantos do contêiner do submenu |
| **Ocultar Fundo** | Ocultar o fundo do submenu |
| **Sombra de Queda** | Sombra de queda para o contêiner do submenu |

---

## Exibição

| Campo | Herda do Nível 1 quando vazio |
|---|---|
| **Layout de Exibição** | `displayLayout` |
| **Alinhar** | `align` |

---

## Divisor

| Campo | Herda do Nível 1 quando vazio |
|---|---|
| **Cor do Divisor** | `dividerColor` (de Design → Divisor) |

---

## Exemplo

**Objetivo:** O menu principal tem fundo escuro e texto branco. O submenu deve ter fundo branco e texto escuro.

Preencha apenas esses dois campos no Nível 2-3:
- Cor de Fundo = `#FFFFFF`
- Cor do Texto = `#000000`

Todos os outros campos (tamanho da fonte, tamanho do ícone, espaçamento, etc.) herdam automaticamente do Nível 1.
