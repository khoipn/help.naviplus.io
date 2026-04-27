---
description: Controle a aparência do seu menu Navi+ — cores, fontes, espaçamento, fundos e ícones por meio de um sistema de design hierárquico.
layout: default
permalink: /pt-br/docs/design/
title: Design
---
# Design

A seção **Design** controla toda a aparência do seu menu: cores, tipografia, espaçamento, fundos e ícones. As configurações aqui se aplicam ao **menu inteiro** usando um sistema de herança de três níveis.

## Tópicos

| # | Tópico | |
|---|---|---|
| 1 | Sistema de herança e mecanismo de substituição (leia primeiro) | [Visão Geral do Design](/pt-br/docs/design/design-overview/) |
| 2 | Nível 1 — Aparência dos itens do menu principal | [Design Nível 1](/pt-br/docs/design/design-level1/) |
| 3 | Nível 2-3 — Aparência dos submenus | [Design Nível 2-3](/pt-br/docs/design/design-level2/) |
| 4 | Divisor — Linhas separadoras | [Design Divisor](/pt-br/docs/design/design-divider/) |

## Referência Rápida

```
Padrões globais (hardcoded)
    ↓
Nível 1  — aplica-se a todos os itens do menu principal
    ↓  (Nível 2-3 herda se vazio)
Nível 2-3 — aplica-se a submenus / dropdowns
    ↓  (substitui tudo)
Por item — configurações individuais em Editar Item
```

Regra: Vazio = herda de cima. Definir um valor = substitui.
