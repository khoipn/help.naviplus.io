---
description: Configure o estilo padrão de linha divisória nos menus Navi+ — cor, espessura, tipo e largura.
layout: default
permalink: /pt-br/docs/design/design-divider/
title: Design Divisor — Linhas Separadoras
---
# Design Divisor — Linhas Separadoras

As configurações em Design → Divisor definem a aparência padrão de todos os divisores.

Estilo em nível de menu — itens individuais podem substituir via Editar Item → Informações Básicas → Add Divider.

## Campos

| Campo | Descrição | Padrão |
|---|---|---|
| Divider Color | Cor da linha (hex) | #EEEEEE |
| Divider Size (px) | Espessura da linha | 1px |
| Divider Type | Solid / Dashed / Dotted / Double | Solid |
| Divider Width | Full / Inset / Under text | Full |

Divider Type e Divider Width requerem plano Business ou Elite.

## Como Funciona

1. Padrão quando o item tem Add Divider habilitado.
2. O estilo por item substitui este.
3. O Nível 2-3 herda Divider Color se vazio.

## Divider Width

Full = largura total do item. Inset = recuado em ambos os lados. Under text = apenas sob o texto.
