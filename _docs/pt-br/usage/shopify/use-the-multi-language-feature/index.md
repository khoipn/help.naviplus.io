---
description: Como usar o suporte a vários idiomas do Navi+ — sintaxe de tradução inline, seletor de idioma e referência completa de códigos de idioma.
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/shopify/use-the-multi-language-feature/
title: Vários idiomas (Shopify Markets)
---
# Vários idiomas (Shopify Markets)

O Navi+ suporta vários idiomas de duas formas: **sintaxe de tradução inline** e um **seletor de idioma** integrado diretamente ao seu menu.

## 1. Sintaxe de tradução inline

Adicione traduções diretamente no rótulo de um item de menu usando esta sintaxe:

```
Conteúdo-padrão <código-idioma-1: Conteúdo-1><código-idioma-2: Conteúdo-2>
```

**Exemplo** — uma Tab Bar exibida em inglês, francês e vietnamita:

```
Home <fr: Maison><vi: Trang chủ>
```

Quando o menu é renderizado, o Navi+ verifica o idioma da página atual e exibe a tradução correspondente. Se não encontrar correspondência, usa o padrão.

Esta sintaxe funciona nos campos de **rótulo**, **descrição** e **link**.

## 2. Seletor de idioma

Você pode criar um seletor de idioma dentro de qualquer menu Navi+. Use a ação `open:ChangeLanguage()` em um item de menu:

```
open:ChangeLanguage(fr)
```

Quando um visitante toca nesse item, o site muda para francês. Você pode adicionar ícones de bandeiras de um site como [Flaticon](https://www.flaticon.com) para tornar o seletor mais visual.

## Referência de códigos de idioma

O Navi+ suporta todos os códigos de idioma padrão ISO 639-1.

| Código | Idioma |
|---|---|
| ab | Abkhazian |
| aa | Afar |
| af | Afrikaans |
| ak | Akan |
| sq | Albanês |
| am | Amárico |
| ar | Árabe |
| an | Aragonês |
| hy | Armênio |
| as | Assamese |
| az | Azerbaijano |
| eu | Basco |
| be | Bielorrusso |
| bn | Bengali |
| bs | Bósnio |
| bg | Búlgaro |
| my | Birmanês |
| ca | Catalão |
| zh | Chinês |
| hr | Croata |
| cs | Tcheco |
| da | Dinamarquês |
| nl | Holandês |
| en | Inglês |
| eo | Esperanto |
| et | Estoniano |
| fi | Finlandês |
| fr | Francês |
| ka | Georgiano |
| de | Alemão |
| el | Grego |
| gu | Gujarati |
| he | Hebraico |
| hi | Hindi |
| hu | Húngaro |
| id | Indonésio |
| it | Italiano |
| ja | Japonês |
| kn | Canarês |
| km | Khmer |
| ko | Coreano |
| lo | Laosiano |
| lv | Letão |
| lt | Lituano |
| mk | Macedônio |
| ms | Malaio |
| ml | Malaiala |
| mr | Marathi |
| mn | Mongol |
| ne | Nepalês |
| nb | Norueguês (Bokmål) |
| fa | Persa |
| pl | Polonês |
| pt | Português |
| pa | Punjabi |
| ro | Romeno |
| ru | Russo |
| sr | Sérvio |
| si | Cingalês |
| sk | Eslovaco |
| sl | Esloveno |
| es | Espanhol |
| sw | Suaíli |
| sv | Sueco |
| ta | Tâmil |
| te | Télugo |
| th | Tailandês |
| tr | Turco |
| uk | Ucraniano |
| ur | Urdu |
| uz | Uzbeque |
| vi | Vietnamita |
| cy | Galês |
| yo | Iorubá |
| zu | Zulu |

<br>
