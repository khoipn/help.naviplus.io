---
description: Como controlar quando e para quem um item de menu é visível no Navi+ — estado de publicação, condições de login e ocultação por página.
layout: default
permalink: /pt-br/docs/menu-items/item-visibility/
title: Visibilidade e condições
---
# Visibilidade e condições

A seção **Publicar** no painel de edição permite controlar quem vê um item, quando e em quais páginas.

---

## Publicado

**Padrão: ativado (item visível para todos).**

Desative para ocultar o item do menu ao vivo sem excluí-lo.

**Usar quando:**
- Ocultar temporariamente um link de promoção sazonal.
- Preparar um item antes de ir ao ar.
- Manter um item de backup sem excluir.

---

## Ocultar quando conectado

Ativado: item **visível apenas para visitantes não conectados**.

**Usar para:** botão "Fazer login", link "Criar conta".

---

## Mostrar apenas quando conectado

Ativado: item **visível apenas para clientes conectados**.

**Usar para:** "Minha conta", pontos de fidelidade, histórico de pedidos.

---

## Ocultar em tipos de páginas específicos (hidepages)

Use `hidepages` em **Avançado → Atributos**.

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Valor | Oculto em |
|---|---|
| `index` | Página inicial |
| `products` | Páginas de produto |
| `collections` | Páginas de coleção |
| `pages` | Páginas estáticas |
| `blogs` | Blog |
| `others` | Outras páginas |

**Exemplo:** `hidepages=index|blogs`

---

## Ocultar por dispositivo

> Navi+ controla dispositivos no **nível do menu**. Crie dois menus separados ou use CSS.

```css
/* Apenas mobile */
@media (max-width: 767px) { display: none !important; }

/* Apenas desktop */
@media (min-width: 768px) { display: none !important; }
```

---

## Resumo

| Condição | Como configurar |
|---|---|
| Ocultar completamente | Publicado → desativado |
| Ocultar de logados | Ocultar quando conectado → ativado |
| Ocultar de visitantes | Mostrar apenas quando conectado → ativado |
| Ocultar na página inicial | `hidepages=index` |
| Ocultar no mobile | CSS `@media (max-width: 767px)` |
| Ocultar no desktop | CSS `@media (min-width: 768px)` |
