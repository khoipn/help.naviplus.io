---
description: Entenda o sistema de herança de design em três níveis no Navi+ — como os estilos se acumulam do Nível 1 para os Níveis 2-3 até as substituições por item.
lang: pt-br
layout: default
permalink: /pt-br/docs/design/design-overview/
title: Visão geral do design — Herança e substituição
---
# Visão Geral do Design — Herança e Substituição

Navi+ usa um **sistema de estilo em três níveis**. Entender isso permite que você estilize seu menu de forma eficiente sem repetir configurações.

---

## Três Camadas

```
┌─────────────────────────────────────────────────────┐
│  NÍVEL 1  (Design → Nível 1)                        │
│  Aplica-se a todos os itens de menu de nível superior │
│  Este é o padrão global para todo o menu           │
└───────────────────┬─────────────────────────────────┘
                    │  Nível 2-3 herda se vazio
┌───────────────────▼─────────────────────────────────┐
│  NÍVEL 2-3  (Design → Nível 2-3)                    │
│  Aplica-se a submenus / dropdowns                    │
│  Vazio = igual ao Nível 1                            │
└───────────────────┬─────────────────────────────────┘
                    │  Substituições por item sobrepõem tudo
┌───────────────────▼─────────────────────────────────┐
│  POR ITEM  (Editar Item → Interface)                │
│  Configurações por item para itens individuais       │
│  Substitui completamente o Nível 1 e o Nível 2-3    │
└─────────────────────────────────────────────────────┘
```

---

## Regras de Herança

**Nível 2-3 herda do Nível 1** para todos os campos vazios:

| Campo Nível 2-3 | Herda do Nível 1 |
|---|---|
| Cor do Texto | Cor do Texto |
| Tamanho da Fonte | Tamanho da Fonte |
| Peso da Fonte | Peso da Fonte |
| Cor do Ícone | Cor do Ícone |
| Tamanho do Ícone | Tamanho do Ícone |
| Layout de Exibição | Layout de Exibição |
| Alinhamento | Alinhamento |
| Cor do Divisor | Divisor (global) |

Se você configurar apenas o Nível 1, os submenus seguem automaticamente. Vá para o Nível 2-3 apenas quando quiser que os submenus pareçam **diferentes** do menu principal.

---

## Substituição por Item

Configurações aplicadas a um item específico em **Editar Item → Interface** (cor do texto, tamanho do ícone, fundo, etc.) substituem o Nível 1 e o Nível 2-3 apenas para aquele item. Outros itens não são afetados.

Para remover uma substituição: limpe o campo em Editar Item — o item reverte para o Nível 1/2-3.

---

## Exemplo

**Objetivo:** Todos os 5 itens têm texto branco, exceto "Sale" que é vermelho.

1. Design → Nível 1 → Cor do Texto = `#FFFFFF`
2. Editar Item → "Sale" → Interface → Cor do Texto = `#FF0000`

Resultado: 4 itens permanecem brancos, "Sale" fica vermelho. Não há necessidade de editar cada item individualmente.

---

## Sintaxe Móvel | Desktop

Alguns campos de espaçamento suportam valores diferentes para móvel e desktop:

```
8 16 8 16             →  mesmo valor em ambos os dispositivos
8 8 8 8 | 12 24 12 24  →  esquerda: móvel, direita: desktop
```

A parte antes de `|` se aplica no móvel; a parte depois se aplica no desktop (≥768px).
