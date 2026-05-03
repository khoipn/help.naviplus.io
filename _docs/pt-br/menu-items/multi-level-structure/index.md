---
description: Como criar aninhamento pai–filho e usar Tab Slide para organizar itens de menu do Navi+ em estruturas de vários níveis.
layout: default
permalink: /pt-br/docs/menu-items/multi-level-structure/
title: Estrutura multinível
---
# Estrutura multinível

O Navi+ suporta duas formas de organizar o conteúdo do menu em profundidade: **aninhamento pai–filho** (arrastar para esquerda/direita para indentar) e **Tab Slide** (dividir o menu em zonas de alternância horizontal). Você pode usar qualquer uma das abordagens ou combinar as duas.

---

## Opção 1 — Aninhamento pai–filho (indentação por arraste)

O aninhamento transforma uma lista plana em uma hierarquia com níveis. Um item pai pode ser expandido para revelar seus filhos.

```
Home                        ← Nível 1 (pai)
  Collections               ← Nível 2 (filho)
    New Arrivals            ← Nível 3 (neto)
    Sale
  Lookbook
Contact                     ← Nível 1 (pai, sem filhos)
```

### Como fazer

**Por arrastar e soltar**

1. Passe o mouse sobre o item que deseja aninhar.
2. Arraste-o para a **direita** — ele se encaixa sob o item acima como filho.
3. Arraste-o para a **esquerda** para devolvê-lo ao nível pai.

**Por atalho de teclado**

1. Clique no item para selecioná-lo.
2. Pressione `→` (seta direita) para indentar — o item se torna filho do item acima.
3. Pressione `←` (seta esquerda) para desindentar — o item sobe um nível.

### Profundidade máxima de aninhamento por tipo de menu

O limite de profundidade depende do **tipo de menu**, não do plano.

| Tipo de menu | Níveis máx. |
|---|:---:|
| Mobile Grid | 1 (sem aninhamento) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> Se você tentar indentar além do limite, o editor bloqueará e exibirá uma mensagem.

---

## Opção 2 — Tab Slide (zonas horizontais)

O Tab Slide divide os itens em abas horizontais. Em vez de se expandir para baixo como filhos, cada aba exibe um conjunto separado de itens.

```
┌─────────────────────────────────┐
│  [Shop]  [Pages]  [More]        │  ← cabeçalhos de abas
├─────────────────────────────────┤
│  • Collections                  │
│  • New Arrivals                 │  ← conteúdo da aba ativa
│  • Sale                         │
└─────────────────────────────────┘
```

### Como fazer

1. Adicione um novo item com o tipo **Tab Marker**.
2. Defina o rótulo do Tab Marker — este se torna o texto do cabeçalho da aba (ex. "Shop").
3. Adicione itens abaixo do Tab Marker — eles pertencem à área de conteúdo dessa aba.
4. Repita: adicione o próximo Tab Marker e depois os itens para essa aba.

```
[Tab Marker]  "Shop"
  Collections
  New Arrivals
  Sale

[Tab Marker]  "Pages"
  About us
  Contact

[Tab Marker]  "More"
  Blog
  FAQ
```

---

## Qual abordagem usar?

| Objetivo | Usar |
|---|---|
| Mostrar subcategorias sob um item pai | **Aninhamento pai–filho (Opção 1)** |
| Agrupar seções não relacionadas lado a lado | **Tab Slide (Opção 2)** |
| Menu com muitos itens em várias categorias | **Tab Slide** |
| Navegação em profundidade (categoria → subcategoria) | **Aninhamento pai–filho** |
| Abas externas com itens aninhados em cada aba | **Ambos** |

---

## Limites a ter em mente

- **Tab Markers não podem ser aninhados dentro de outro item.** Indentar um Tab Marker é bloqueado.
- **Itens dentro de uma aba ainda podem ter filhos** — sujeitos ao limite de profundidade do tipo de menu.
- **Mobile Grid não suporta aninhamento** — use Tab Slide se precisar de agrupamento.
- **Reordene as abas** arrastando um Tab Marker para cima ou para baixo — os itens abaixo o acompanham.
