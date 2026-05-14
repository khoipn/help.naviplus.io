---
description: Controle a aparência do seu menu Navi+ — cores, fontes, espaçamento, fundos e ícones através de um sistema de design hierárquico.
lang: pt-br
layout: default
permalink: /pt-br/docs/design/
title: Design
---
# Design

A seção **Design** controla toda a aparência do seu menu: cores, tipografia, espaçamento, fundos e ícones. As configurações aqui se aplicam ao **menu inteiro** usando um sistema de herança de três níveis.

---

## Tópicos

| # | Tópico | |
|---|---|---|
| 1 | Sistema de herança e mecanismo de substituição (leia primeiro) | [Design Overview](/docs/design/design-overview/) |
| 2 | Nível 1 — Aparência dos itens do menu principal | [Design Level 1](/docs/design/design-level1/) |
| 3 | Nível 2-3 — Aparência dos submenus | [Design Level 2-3](/docs/design/design-level2/) |
| 4 | Divisor — Linhas separadoras | [Design Divider](/docs/design/design-divider/) |

---

## Referência Rápida

```
Global defaults (hardcoded)
    ↓
Level 1  — applies to all top-level menu items
    ↓  (Level 2-3 inherits if empty)
Level 2-3 — applies to submenus / dropdowns
    ↓  (overrides everything)
Per-item — individual settings in Edit Item
```

**Regra:** Vazio = herdar de cima. Definir um valor = substituir.
