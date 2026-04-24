---
description: Em vez de mostrar todos os itens do menu de uma vez, **Tab Slide** permite que você organize seu menu em grupos e coloque cada grupo sob uma aba separada. Os visitantes simplesmente tocam em uma aba para alternar entre os grupos — tornando menus longos limpos, compactos e fáceis de navegar.
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/general/tab-slide-group-menu-items-into-tabs/
title: Tab Slide — Agrupar Itens do Menu em Abas
---
# Tab Slide — Agrupar Itens do Menu em Abas

### O que é o Tab Slide?

Em vez de mostrar todos os itens do menu de uma vez, **Tab Slide** permite que você organize seu menu em grupos e coloque cada grupo sob uma aba separada. Os visitantes simplesmente tocam em uma aba para alternar entre os grupos — tornando menus longos limpos, compactos e fáceis de navegar.

**Como fica:**

```
┌──────────────────────────────────┐
│  [Shop]  [Blog]  [Deals]         │  ← abas
│ ──────                           │
│  • T-Shirts                      │
│  • Pants                         │  ← conteúdo da aba "Shop"
│  • Accessories                   │
└──────────────────────────────────┘
```

Quando um visitante toca em "Blog", o conteúdo muda instantaneamente para os artigos do blog — sem necessidade de recarregar a página.

***

### Como Configurar o Tab Slide

#### Passo 1 — Adicionar um marcador de Aba

1. Na árvore do menu, clique em **"Adicionar item"**
2. Selecione o tipo de item **Tab Slide** (o ícone de aba azul)
3. Insira um **nome da aba** (por exemplo, "Shop", "Blog", "Deals")
4. Clique em **Adicionar**

> O marcador de Aba aparecerá na árvore do menu com um distintivo azul **[Tab]**.

#### Passo 2 — Adicionar conteúdo à aba

Todos os itens do menu colocados **diretamente abaixo** de um marcador de Aba pertencem a essa aba.

```
[Tab] Shop           ← Marcador de Aba (criado no Passo 1)
  T-Shirts           ← pertence à aba "Shop"
  Pants              ← pertence à aba "Shop"
  Accessories        ← pertence à aba "Shop"
[Tab] Blog           ← próximo Marcador de Aba
  Latest News        ← pertence à aba "Blog"
  Style Guides       ← pertence à aba "Blog"
```

#### Passo 3 — Adicionar mais abas (opcional)

Repita os passos 1–2 para cada aba que você deseja. Não há limite no número de abas.

***

### Encerrando o Grupo de Abas

Às vezes, você quer que certos itens **sempre sejam visíveis** — fora de qualquer aba — por exemplo, um link "Contact" ou "Search" na parte inferior.

Para fazer isso:

1. Adicione um novo item **Tab Slide**
2. No painel de edição, marque **"Fim do grupo de abas"**
3. Todos os itens abaixo deste marcador serão exibidos como itens de menu regulares

```
[Tab] Shop
  T-Shirts, Pants...
[Tab] Blog
  News, Guides...
[Fim do grupo de abas]   ← marca o fim das abas
  Contact Us         ← sempre visível, não dentro de nenhuma aba
  About              ← sempre visível
```

***

### Personalizando Cada Aba

Cada marcador de Aba pode ser estilizado de forma independente:

| Opção         | Descrição                                                      |
| -------------- | ---------------------------------------------------------------- |
| **Nome da Aba**   | O texto mostrado no botão da aba                                 |
| **Ícone**       | Um pequeno ícone ao lado do nome (da biblioteca de ícones)            |
| **Imagem**      | Uma imagem em vez de um ícone                                      |
| **Layout**     | Ícone acima/abaixo/esquerda/direita do nome, apenas ícone ou apenas texto |
| **Cor do texto** | Cor personalizada para cada rótulo de aba                                  |
| **Tamanho do texto**  | Tamanho de fonte personalizado para cada rótulo de aba                              |

**Dica:** Deixar o layout como "Automático" funciona muito bem para a maioria dos menus — a aba se adaptará para parecer a melhor.

***

### Quais Tipos de Menu Suportam o Tab Slide?

Tab Slide funciona com **todos os tipos de menu Navi+**:

* ✅ Tab Bar
* ✅ Slide Menu
* ✅ Mega Menu
* ✅ FAB Menu
* ✅ Grid menu

Ele também funciona em **qualquer nível de menu** — não apenas no menu principal, mas dentro de submenus também (nível 2, nível 3).

***

### Perguntas Frequentes

**O marcador de Aba aparecerá como um item de menu?** Não. Os marcadores de Aba são invisíveis para os visitantes — eles apenas criam o botão da aba. Seus itens de menu reais são o que aparece dentro de cada aba.

**Posso adicionar um ícone a uma aba?** Sim. Edite o marcador de Aba como qualquer outro item e escolha um ícone da biblioteca ou faça upload de uma imagem personalizada.

**Qual aba é mostrada primeiro?** A primeira aba é sempre selecionada por padrão quando o menu é aberto.

**Há um limite para quantas abas posso ter?** Não há um limite rígido, mas recomendamos manter entre 3–6 abas para a melhor experiência em telas móveis.

**Posso usar o Tab Slide dentro de um submenu?** Sim. Coloque marcadores de Aba dentro de qualquer submenu e o comportamento da aba funcionará nesse nível.

---

# Instruções para o Agente: Consultando Esta Documentação

Se você precisar de informações adicionais que não estão diretamente disponíveis nesta página, pode consultar a documentação dinamicamente fazendo uma pergunta.

Realize uma solicitação HTTP GET na URL da página atual com o parâmetro de consulta `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/usage/general/tab-slide-group-menu-items-into-tabs.md?ask=<question>
```

A pergunta deve ser específica, autossuficiente e escrita em linguagem natural.
A resposta conterá uma resposta direta à pergunta e trechos relevantes e fontes da documentação.

Use esse mecanismo quando a resposta não estiver explicitamente presente na página atual, você precisar de esclarecimentos ou contexto adicional, ou quiser recuperar seções de documentação relacionadas.
