---
description: Controle em quais páginas e dispositivos seu menu Navi+ aparece — usando alternâncias de dispositivo, regras de palavras-chave de URL e filtros de tipo de página Shopify.
lang: pt-br
layout: default
permalink: /pt-br/docs/setting/setting-display-rules/
title: Definindo regras de exibição — Visibilidade condicional
---
# Definindo Regras de Exibição — Visibilidade Condicional

Controle onde e quando seu menu aparece com base no tipo de dispositivo, URL ou tipo de página Shopify.

---

## Exibição por Dispositivo

Encontrado na aba **Publicar** do menu (não por item):

| Alternância | Efeito |
|---|---|
| **Móvel** | Mostrar/ocultar menu em telas móveis |
| **Desktop** | Mostrar/ocultar menu em telas de desktop |

Padrão: apenas Móvel está habilitado. Você deve habilitar manualmente o Desktop se quiser que o menu apareça em telas maiores.

> Para mostrar/ocultar itens individuais por dispositivo → veja [Visibilidade de Itens](/docs/menu-items/item-visibility/).

---

## Exibição por Palavras-chave de URL

Dois campos em **Configuração → Exibição por Palavras-chave** permitem que você controle em quais URLs o menu aparece.

### Mostrar apenas quando a URL contém a palavra-chave

**Campo:** `Publicar — Contém Palavra-chave`

```
coleções, produtos/sale
```

O menu aparece apenas em páginas cuja URL contém `coleções` **ou** `produtos/sale`.

**Exemplo:** Um menu "Navegação da Loja" para páginas de produtos → mostrar apenas em `coleções/` e `produtos/`.

---

### Ocultar quando a URL contém a palavra-chave

**Campo:** `Publicar — Não Contém Palavra-chave`

```
checkout, account/login
```

O menu está oculto em páginas de checkout e login; visível em todos os outros lugares.

**Exemplo:** Oculte a Tabbar durante o checkout para evitar distrair o cliente.

---

## Exibição por Tipo de Página Shopify

A aba **Publicar** também inclui 6 grupos de páginas Shopify (apenas lojas Shopify):

| Grupo | Páginas |
|---|---|
| **Início** | Página inicial |
| **Detalhe do Produto** | Páginas de detalhe do produto |
| **Categorias de Produto** | Páginas de coleção / categoria |
| **Páginas** | Páginas estáticas (Sobre, Contato, etc.) |
| **Blogs** | Listagem de blogs e páginas de artigos |
| **Outros** | Páginas que não estão nos 5 grupos acima |

Desmarque um grupo → o menu não aparecerá nesse tipo de página.

---

## Como as Regras se Empilham

Todas as condições são avaliadas juntas nesta ordem:

```
1. O dispositivo está habilitado?              →  Se não: oculto
2. O tipo de página está marcado?           →  Se não: oculto
3. A URL corresponde a "Não mostrar"?    →  Se sim: oculto
4. A URL corresponde a "Mostrar apenas"?     →  Se não: oculto
5. Mostrar menu
```
