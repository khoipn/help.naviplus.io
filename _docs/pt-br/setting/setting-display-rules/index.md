---
description: Controle quais páginas e dispositivos exibem o menu Navi+ — alternadores de dispositivo, palavras-chave URL, tipos de página Shopify.
layout: default
permalink: /pt-br/docs/setting/setting-display-rules/
title: Setting display rules — Visibilidade condicional
---
# Setting Display Rules — Visibilidade Condicional

## Exibição por Dispositivo (aba Publish)

Alternador mobile + Alternador desktop. Padrão: apenas mobile ligado. Habilite desktop manualmente.

## Regras de Palavra-chave URL

Contain Keyword: menu aparece apenas quando a URL contém a palavra-chave. ex: "collections, products/sale"
Don't Contain Keyword: menu oculta quando a URL contém a palavra-chave. ex: "checkout, account/login"

## Tipos de Página Shopify

Home, Product Detail, Product Categories, Pages, Blogs, Others. Desmarque para ocultar naquele tipo.

## Ordem das Regras

1. Dispositivo habilitado? Se não: oculto.
2. Tipo de página marcado? Se não: oculto.
3. URL corresponde a não-mostrar? Se sim: oculto.
4. URL corresponde a apenas-mostrar? Se não: oculto.
5. Exibir menu.
