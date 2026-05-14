---
description: Como controlar quando e para quem um item de menu é visível no Navi+ — estado publicado, condições de login e ocultação baseada em páginas.
lang: pt-br
layout: default
permalink: /pt-br/docs/menu-items/item-visibility/
title: Visibilidade & Condições
---
# Visibilidade & Condições

A seção **Publicar** no painel Editar Item permite que você controle quem vê um item, quando e em quais páginas.

---

## Está Publicado

**Padrão: ativado (item visível para todos).**

Desative isso para ocultar o item do menu ao vivo sem excluí-lo. O item permanece no editor — você pode reativá-lo a qualquer momento.

**Use quando:**
- Ocultar temporariamente um link de venda sazonal.
- Preparar um item antes que ele fique ao vivo.
- Manter um item de backup sem excluí-lo.

---

## Ocultar quando logado

Quando ativado, o item é **visível apenas para visitantes que não estão logados**.

**Use para:**
- Um "Log in" botão — clientes que já estão logados não precisam dele.
- Um "Create account" link.

---

## Mostrar apenas quando logado

Quando ativado, o item é **visível apenas para clientes logados**.

**Use para:**
- "My account" link.
- Pontos de fidelidade, histórico de pedidos.
- Recursos reservados para membros.

---

## Ocultar em tipos de página específicos (hidepages)

Use o atributo `hidepages` em **Avançado → Atributos** para ocultar um item em certos tipos de página.

**Sintaxe:**

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Valor | Páginas ocultas em |
|---|---|
| `index` | Página inicial |
| `products` | Páginas de detalhes do produto |
| `collections` | Páginas de coleção / categoria |
| `pages` | Páginas estáticas (Sobre, Contato…) |
| `blogs` | Listagem de blog e páginas de postagens |
| `others` | Qualquer página que não esteja nas categorias acima |

Separe múltiplos valores com `|`, sem espaços.

**Exemplo:** Oculte um "Buy now" botão na página inicial e nas páginas do blog:

```
hidepages=index|blogs
```

---

## Ocultar por dispositivo (Móvel / Desktop)

> **Importante:** O Navi+ não possui um alternador móvel/desktop por item. O direcionamento de dispositivos é controlado no **nível do menu**, não no nível do item.

**A abordagem correta:**

- Vá para a aba **Publicar** do menu → ative **Móvel** e **Desktop** para todo o menu.
- Crie dois menus separados — um para móvel, um para desktop — e defina o alternador de dispositivo em cada um.

**Solução alternativa por item (se realmente necessário):**  
Use **Avançado → CSS** com uma consulta de mídia:

```css
/* Oculte este item apenas no móvel */
@media (max-width: 767px) { display: none !important; }

/* Oculte este item apenas no desktop */
@media (min-width: 768px) { display: none !important; }
```

---

## Resumo

| Condição | Como definir |
|---|---|
| Ocultar completamente | Está Publicado → desativado |
| Ocultar de usuários logados | Ocultar quando logado → ativado |
| Ocultar de convidados | Mostrar apenas quando logado → ativado |
| Ocultar na página inicial | Atributos: `hidepages=index` |
| Ocultar no móvel | CSS: `@media (max-width: 767px) { display: none !important; }` |
| Ocultar no desktop | CSS: `@media (min-width: 768px) { display: none !important; }` |
