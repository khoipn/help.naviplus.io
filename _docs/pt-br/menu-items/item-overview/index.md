---
description: O que é um item de menu no Navi+, os tipos de itens disponíveis e a estrutura completa de campos no painel de edição.
layout: default
permalink: /pt-br/docs/menu-items/item-overview/
title: Visão geral dos itens
---
# Visão geral dos itens

## O que é um item de menu?

Cada linha em uma lista de menu é um **item**. Um item é a menor unidade no Navi+ — pode ser um link de navegação, um cabeçalho de grupo, um espaçador vazio ou um divisor de aba.

Vários itens empilhados formam um menu. O menu é então renderizado para os visitantes no seu site.

---

## Tipos de itens

Quando você adiciona um novo item, escolhe seu **tipo**. O tipo determina como o item aparece e o que ele faz.

| Tipo | Descrição | Quando usar |
|---|---|---|
| **Ícone / Texto** | Item padrão com ícone e etiqueta | Links de navegação regulares |
| **Imagem grande / Texto** | Bloco grande com imagem de fundo completo e texto sobreposto | Banners de categoria, imagens de produtos em destaque |
| **Título de grupo** | Cabeçalho de seção — não é um link | Agrupar visualmente os itens abaixo |
| **Espaço em branco** | Lacuna transparente | Espaçamento e alinhamento do layout |
| **Marcador de aba** | Marca o início de uma nova aba | Dividir o menu em abas horizontais |
| **HTML personalizado** | Incorporar HTML arbitrário | Widgets personalizados, banners especiais |

---

## Estrutura de campos

Clique em qualquer item para abrir o painel de edição:

```
┌─────────────────────────────────────────┐
│  MÍDIA                                  │
│    Ícone  |  Imagem                     │
├─────────────────────────────────────────┤
│  INFORMAÇÕES BÁSICAS                    │
│    Texto · Link para · HTML             │
│    Descrição · Divisor · Badge          │
├─────────────────────────────────────────┤
│  LAYOUT                                 │
│    Layout de exibição · Largura · Pos.  │
│    Altura fixa                          │
├─────────────────────────────────────────┤
│  INTERFACE (UI)                         │
│    Classes · Estilo texto               │
│    Estilo ícone/imagem · Fundo          │
│    Espaçamento · Alinhamento            │
├─────────────────────────────────────────┤
│  AVANÇADO                               │
│    Animação · CSS · Atributos           │
├─────────────────────────────────────────┤
│  PUBLICAR                               │
│    Publicado · Condições de login       │
└─────────────────────────────────────────┘
```

---

## Fluxo de edição

1. Clique em um item na árvore do menu → o painel abre.
2. Altere os campos necessários.
3. Pressione **Atualizar** para aplicar mudanças a esse item.
4. Pressione **Salvar** (`Ctrl+S` / `Cmd+S`) para salvar o menu inteiro e atualizar o simulador.

> Segure Shift enquanto pressiona Salvar para salvar e recarregar o simulador imediatamente.
