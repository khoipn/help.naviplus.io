---
description: Entenda o sistema de herança de estilo de três camadas do Navi+ — como os estilos cascadeiam do Nível 1 para o Nível 2-3 e as substituições por item.
layout: default
permalink: /pt-br/docs/design/design-overview/
title: Visão geral do design — Herança e substituição
---
# Visão Geral do Design — Herança e Substituição

O Navi+ usa um sistema de estilo de três camadas.

## Três Camadas

```
┌─────────────────────────────────────────────────────┐
│  NÍVEL 1  (Design → Nível 1)                        │
│  Aplica-se a todos os itens do menu principal       │
└───────────────────┬─────────────────────────────────┘
                    │  Nível 2-3 herda se vazio
┌───────────────────▼─────────────────────────────────┐
│  NÍVEL 2-3  (Design → Nível 2-3)                    │
│  Aplica-se a submenus / dropdowns                   │
│  Vazio = igual ao Nível 1                           │
└───────────────────┬─────────────────────────────────┘
                    │  Por item substitui tudo
┌───────────────────▼─────────────────────────────────┐
│  POR ITEM  (Editar Item → Interface)                │
│  Substitui Nível 1 e Nível 2-3 completamente        │
└─────────────────────────────────────────────────────┘
```

## Regras de Herança

O Nível 2-3 herda do Nível 1 para todos os campos vazios:

| Campo Nível 2-3 | Herda do Nível 1 |
|---|---|
| Text Color | Text Color |
| Font Size | Font Size |
| Font Weight | Font Weight |
| Icon Color | Icon Color |
| Icon Size | Icon Size |
| Display Layout | Display Layout |
| Align | Align |
| Divider Color | Divider (global) |

## Substituição Por Item

As configurações em Editar Item → Interface substituem o Nível 1 e o Nível 2-3 apenas para aquele item. Limpe o campo para remover a substituição.

## Exemplo

Objetivo: Todos os 5 itens com texto branco, exceto "Promoção" = vermelho.
1. Design → Nível 1 → Text Color = #FFFFFF
2. Editar Item → "Promoção" → Interface → Text Color = #FF0000

## Sintaxe Mobile | Desktop

8 16 8 16 → igual em ambos os dispositivos
8 8 8 8 | 12 24 12 24 → esquerda: mobile, direita: desktop
