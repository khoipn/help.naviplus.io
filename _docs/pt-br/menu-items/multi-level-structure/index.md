---
description: Como criar aninhamento pai-filho e usar o Tab Slide para organizar os itens do menu Navi+ em estruturas de múltiplos níveis.
lang: pt-br
layout: default
permalink: /pt-br/docs/menu-items/multi-level-structure/
title: Estrutura de Múltiplos Níveis
---
# Estrutura de Múltiplos Níveis

Navi+ suporta duas maneiras de organizar o conteúdo do menu em profundidade: **aninhamento pai-filho** (arraste para a esquerda/direita para indentar) e **Tab Slide** (divida o menu em zonas de troca horizontal). Você pode usar qualquer uma das abordagens ou combinar ambas.

---

## Opção 1 — Aninhamento pai-filho (indentar arrastando)

O aninhamento transforma uma lista plana em uma hierarquia nivelada. Um item pai pode ser expandido para revelar seus filhos.

```
Home                        ← Nível 1 (pai)
  Coleções                 ← Nível 2 (filho)
    Novidades              ← Nível 3 (neto)
    Promoção
  Lookbook
Contato                     ← Nível 1 (pai, sem filhos)
```

### Como fazer

**Por arrastar e soltar**

1. Passe o mouse sobre o item que você deseja aninhar.
2. Arraste para a **direita** — ele se encaixa sob o item acima como um filho.
3. Arraste para a **esquerda** para movê-lo de volta ao nível pai.

**Por atalho de teclado**

1. Clique no item para selecioná-lo.
2. Pressione `→` (seta para a direita) para indentar — o item se torna um filho do item acima.
3. Pressione `←` (seta para a esquerda) para desindentar — o item volta um nível.

### Profundidade máxima de aninhamento por tipo de menu

O limite de profundidade depende do **tipo de menu**, não do plano.

| Tipo de menu | Níveis máximos |
|---|:---:|
| Grade Móvel | 1 (sem aninhamento) |
| FAB | 2 |
| Tab Bar, Mega Menu, Slide Menu, Desktop Mega Menu | 3 |

> Se você tentar indentar além do limite, o editor bloqueará e mostrará uma mensagem.

---

## Opção 2 — Tab Slide (zonas horizontais)

O Tab Slide divide os itens em abas horizontais. Em vez de expandir para baixo como filhos, cada aba mostra um conjunto separado de itens.

```
┌─────────────────────────────────┐
│  [Loja]  [Páginas]  [Mais]      │  ← cabeçalhos das abas
├─────────────────────────────────┤
│  • Coleções                    │
│  • Novidades                   │  ← conteúdo da aba ativa
│  • Promoção                    │
└─────────────────────────────────┘
```

### Como fazer

1. Adicione um novo item com o tipo **Marcador de Aba**.
2. Defina o rótulo do Marcador de Aba — isso se torna o texto do cabeçalho da aba (por exemplo, "Loja").
3. Adicione itens abaixo do Marcador de Aba — eles pertencem à área de conteúdo dessa aba.
4. Repita: adicione o próximo Marcador de Aba, depois adicione itens para essa aba.

```
[Marcador de Aba]  "Loja"
  Coleções
  Novidades
  Promoção

[Marcador de Aba]  "Páginas"
  Sobre nós
  Contato

[Marcador de Aba]  "Mais"
  Blog
  FAQ
```

---

## Qual abordagem usar?

| Objetivo | Usar |
|---|---|
| Mostrar subcategorias sob um item pai | **Aninhamento pai-filho (Opção 1)** |
| Agrupar seções não relacionadas lado a lado | **Tab Slide (Opção 2)** |
| Menu com muitos itens em várias categorias | **Tab Slide** |
| Navegação profunda (categoria → subcategoria) | **Aninhamento pai-filho** |
| Abas externas com itens aninhados dentro de cada aba | **Ambas** |

---

## Limites a ter em mente

- **Marcadores de Aba não podem ser aninhados dentro de outro item.** Indentar um Marcador de Aba é bloqueado.
- **Itens dentro de uma aba ainda podem ter filhos** — sujeitos ao limite de profundidade do tipo de menu.
- **Grade Móvel não suporta aninhamento** — use Tab Slide se precisar de agrupamento.
- **Reordene abas** arrastando um Marcador de Aba para cima ou para baixo — os itens abaixo dele seguem junto.
