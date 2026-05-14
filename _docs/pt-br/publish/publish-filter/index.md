---
description: Filtrar a visibilidade do menu Navi+ por dispositivo, comportamento de rolagem, tipos de página Shopify e palavras-chave de URL.
lang: pt-br
layout: default
permalink: /pt-br/docs/publish/publish-filter/
title: Publicar filtro — Regras de dispositivo e URL
---
# Publicar Filtro — Regras de Dispositivo e URL

Após ativar o toggle de publicação, você pode restringir quando o menu aparece usando duas camadas de filtro: **dispositivo** (móvel/escritorio + comportamento de rolagem) e **palavras-chave de URL** (mostrar/ocultar com base no conteúdo da URL).

---

## Filtrar por Dispositivo

### Ativar/desativar por plataforma

Dois toggles no topo do modal de Publicação:

| Configuração | Padrão | Notas |
|---|---|---|
| **Mostrar menu no móvel** | Ativado | Mostrar menu em dispositivos móveis |
| **Mostrar menu no desktop** | Desativado | Mostrar menu em dispositivos desktop |

Alguns tipos de menu desativam um desses toggles — por exemplo, o Mega Menu de Desktop desativa o toggle móvel.

---

### Comportamento de rolagem (Menus fixos apenas)

Configurado separadamente para móvel e desktop.

#### Rolagem móvel

| Configuração | Comportamento |
|---|---|
| **Ocultar automaticamente ao rolar para baixo** | Ocultar menu quando o usuário rola **para baixo** |
| **Mostrar automaticamente após rolar** | Mostrar menu apenas após o usuário ter rolado para baixo (não mostrado ao carregar a página) |

#### Rolagem desktop

| Configuração | Comportamento |
|---|---|
| **Ocultar automaticamente ao rolar para baixo** | Ocultar menu ao rolar para baixo no desktop |
| **Mostrar automaticamente após rolar** | Mostrar apenas após rolar para baixo no desktop |

> Ocultar automaticamente e Mostrar automaticamente podem ser ativados juntos: o menu se oculta ao rolar para baixo, reaparece ao rolar para cima — um padrão comum para tabbars inferiores.

---

### Posição da tela (Fixo / Tabbar apenas)

Escolha uma posição a partir de um seletor de botão de rádio com ilustrações visuais.

**Móvel** — 6 posições predefinidas (centro inferior, esquerda inferior, direita inferior, variantes superiores...)

**Desktop** — 12 posições predefinidas (barra superior, barra inferior, barra lateral esquerda/direita, posições de canto...)

---

### Grupos de página (Shopify apenas, Menus fixos)

Selecione em quais tipos de página Shopify o menu aparece. Padrão: todos.

| Grupo | Padrão de URL |
|---|---|
| Início | `/` |
| Detalhe do Produto | `/products/*` |
| Categorias de Produto | `/collections/*` |
| Páginas | `/pages/*` |
| Blogs | `/blogs/*` |
| Outros | Todas as páginas restantes |

> O mercado global (WordPress, Wix, etc.) não possui esse recurso. Use o filtro de palavras-chave de URL em vez disso.

---

## Filtrar por Palavras-chave de URL

O cartão **"Exibir o menu por palavras-chave"** — aplica-se a todos os tipos de menu, exceto Context Slide.

### Dois tipos de filtro

| Configuração | Comportamento |
|---|---|
| **Contém Palavra-chave** | O menu **apenas aparece** quando a URL **contém** pelo menos uma palavra-chave |
| **Não Contém Palavra-chave** | O menu **não aparece** quando a URL **contém** qualquer uma das palavras-chave |

Múltiplas palavras-chave separadas por vírgulas `,`.

### Exemplos

**Mostrar apenas em páginas de produtos de snowboard:**
```
Contém: snowboard
```
→ O menu aparece apenas em URLs como `yourdomain.com/products/the-collection-snowboard-hydrogen`

**Ocultar em páginas de múltiplas localizações:**
```
Não contém: multi-location
```
→ O menu **não** aparece em `yourdomain.com/products/the-multi-location-snowboard`

**Combinado:**
```
Contém: collections
Não contém: sale, outlet
```
→ Aparece apenas em páginas de coleção, mas oculto em coleções de "sale" e "outlet".

### Notas

- O filtro usa **correspondência de string de URL completa**, não regex.
- As palavras-chave são **insensíveis a maiúsculas e minúsculas**.
- Deixar vazio = sem filtro (o menu aparece em todas as páginas).
- Ambos os filtros são combinados com AND — ambas as condições devem ser satisfeitas.
