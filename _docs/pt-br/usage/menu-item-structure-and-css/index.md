---
description: 'Análise profunda de um único item de menu — sua estrutura HTML (ícone, imagem, nome, descrição, seta, crachá) e como estilizar apenas esse item com a caixa CSS por item, incluindo & (este item), seletores internos, hover e @media.'
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/menu-item-structure-and-css/
title: Estrutura do item de menu e CSS
---
# Estrutura do item de menu e CSS

Esta página analisa em profundidade **um único item de menu** — o HTML que renderiza e como estilizar **apenas esse item** usando a caixa CSS do item (**editar o item → Avançado → Folha de estilo interna/CSS**).

> Esta caixa estiliza **apenas o item que você está editando**, e o CSS **viaja com o item** quando você o duplica. Para CSS em todo o menu, use **CSS personalizado para este menu** — veja [Estrutura do menu e CSS](/docs/usage/menu-structure-and-css/).

***

## A estrutura de um item

Cada item é um único `li` contendo um `div.inner`. Dentro de `.inner`, em ordem:

```html
<li class="item level-1 …" data-name="Shop">
  <div class="inner inner-level1">
    <span class="arrow"></span>            <!-- seta do submenu (se houver) -->
    <!-- <span class="cart_count">3</span> --> <!-- crachá do carrinho com contagem (opcional) -->

    <!-- MÍDIA — ícone OU imagem (se o item tiver uma imagem, o ícone não é renderizado) -->
    <span class="icon"><i class="ri-store-2-line"></i></span>
    <!-- ou -->
    <div class="image-border">
      <span class="image-box"><span class="image"><img src="…"></span></span>
    </div>

    <!-- TEXTO -->
    <div class="info">
      <div class="flexcol">
        <span class="name">Shop</span>
        <div class="description">Procure todas as categorias</div>   <!-- apenas se você preencheu a descrição -->
      </div>
    </div>
  </div>
</li>
```

### As partes que você pode alvejar

| Parte | Seletor | Notas |
| ---- | -------- | ----- |
| O item em si (a linha) | `&` | O `li`. `&` é um atalho para "este item". |
| Wrapper de conteúdo | `.inner` | Envolve tudo dentro do item |
| Glifo de ícone | `.icon i` | Remix Icon (`ri-…`) |
| Imagem | `.image img` (caixa: `.image-border`, `.image-box`, `.image`) | Mostrada em vez do ícone quando o item tem uma imagem |
| Título | `.name` | O rótulo |
| Descrição | `.description` | Existe apenas se você preencheu o campo de descrição |
| Coluna de texto | `.info`, `.flexcol` | Contém nome + descrição |
| Seta | `.arrow` | Seta do submenu |
| Crachá do carrinho | `.cart_count` | Apenas para itens de carrinho com uma contagem |

***

## Escrevendo CSS para um item

A caixa aceita **três formas, combináveis juntas**. Você nunca digita `#SF-…` e nunca adiciona uma tag `<style>` — Navi+ automaticamente limita tudo a este item.

### 1. `&` — este item (recomendado)

`&` significa a linha do próprio item (o `li`), exatamente como `&` em Sass:

```css
& { border: 1px solid #eee; border-radius: 12px; }
&:hover { background: #f8fafc; }
```

### 2. Seletores internos — partes dentro do item

Use os nomes de classe da tabela acima:

```css
.name { font-weight: 700; }
.description { font-size: 12px; opacity: .8; }
.icon i { font-size: 22px; color: #2563eb; }
.image img { border-radius: 10px; }
```

Um **espaço após `&`** também significa "dentro do item", então `& .name` e `.name` são a mesma coisa. `&` escrito **sem espaço** (`&:hover`, `&.active`) estiliza a própria linha.

### 3. Declarações nuas — o atalho anterior

Escrever propriedades **sem um seletor** as aplica à linha do item:

```css
color: red;
font-weight: 700;
```

Isso continua funcionando (menus antigos dependem disso), mas `&` é mais claro — e declarações nuas **não podem** ser usadas dentro de `@media`.

***

## Responsivo com `@media`

`@media` funciona aqui. Dentro de `@media` você deve usar um seletor (é CSS padrão), então use `&` para o próprio item:

```css
/* Padding menor + oculte a descrição em telefones */
@media (max-width: 768px) {
  & { padding: 8px; }
  .description { display: none; }
  .name { font-size: 13px; }
}
```

> Para **mostrar ou ocultar** um item por dispositivo, prefira **Mostrar em celular/Mostrar em desktop** no editor — não CSS. No **Wix**, `@media` baseado em viewport pode não corresponder à tela real; use as configurações Display lá.

***

## Exemplos

**Transformar um item em uma pílula/crachá:**

```css
& { background: #111; color: #fff; border-radius: 999px; padding: 6px 14px; }
.name { color: #fff; }
```

**Destaque ao passar:**

```css
&:hover { transform: translateY(-2px); transition: transform .15s; }
&:hover .name { color: #2563eb; }
```

**Ícone maior e colorido:**

```css
.icon i { font-size: 24px; color: #e11d48; }
```

**Imagem arredondada com moldura sutil:**

```css
.image img { border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,.12); }
```

**Compacto em celular:**

```css
& { padding: 12px; }
@media (max-width: 768px) {
  & { padding: 6px; }
  .description { display: none; }
}
```

***

## Coisas boas de se saber

* **Nenhum `#SF-…`, nenhuma tag `<style>`** — Navi+ limita o CSS apenas a este item; nunca afeta outros itens.
* O CSS **viaja com o item** quando você o duplica (é por item, reutilizável).
* Se uma propriedade for definida aqui **e** nas configurações visuais do item (Media box/Inner box color, border, shadow…), a **configuração visual vence** — é aplicada inline. Limpe essa configuração se quiser que seu CSS tenha precedência.
* Use o **ícone de expandir** (canto superior direito da caixa) para um editor maior; pressione **Esc** ou **Concluído** para fechar.

***

Documentação de suporte — **Navi+**
