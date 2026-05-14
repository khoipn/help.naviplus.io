---
description: Publique um Menu em Grade Navi+ no WordPress com o plugin Navi+ Menu Builder. Insira-o onde deve aparecer usando o shortcode [naviwp embed_id="..."] ou bloco Gutenberg.
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/grid-menu/publish-on-wordpress/
title: Menu em Grade — Publicar no WordPress
---
# Menu em Grade — Publicar no WordPress

A **Menu em Grade** é um menu de **seção** — ele é renderizado no local da página onde você o incorpora. É uma ótima opção para atalhos de categoria, páginas centrais e painéis "o que você gostaria de fazer?". No WordPress, o plugin Navi+ Menu Builder o coloca via shortcode ou bloco Gutenberg; você nunca edita arquivos de tema.

> Outras plataformas (Wix, Squarespace, Webflow, sites personalizados): veja [Publicar no Wix / Squarespace / Outros]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Passos

1. **Instale o plugin** — veja [Instalar o plugin Navi+ Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Construa seu Menu em Grade** em **Aparência → Naviplus Menu Builder**. Veja [Menu em Grade — Como usar]({{ site.baseurl }}/docs/usage/grid-menu/how-to-use/) e [Menu em Grade Responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/).
3. **Copie o ID de Incorporação** (por exemplo, `SF-123456789`).
4. **Incorpore-o** usando um dos métodos abaixo.

---

## Inserir o menu

### Opção 1 — Shortcode (recomendado)

```text
[naviwp embed_id="SF-123456789"]
```

Coloque isso em qualquer post, página ou widget que reconheça shortcode.

Locais típicos:

- Uma seção de destaque na página inicial com blocos de categoria.
- Uma página de destino acima da dobra.
- O estado vazio de um arquivo de categoria.

### Opção 2 — Bloco Gutenberg

No editor de blocos, **+ → Naviplus Menu Builder**, em seguida, cole o ID de Incorporação na barra lateral do bloco. Um bloco **Shortcode** simples com `[naviwp embed_id="SF-..."]` é equivalente.

### Opção 3 — Construtores de página (Elementor, Divi, Bricks, Oxygen)

Use um widget **Shortcode** com `[naviwp embed_id="SF-..."]`. Se um construtor não tiver um widget Shortcode, um widget **HTML** com o div de incorporação funciona:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

---

## Dicas para dispositivos móveis

- Use **[Menu em Grade Responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** para alternar a contagem de colunas por ponto de interrupção — por exemplo, 4 colunas no desktop, 2 no mobile.
- Mantenha o conteúdo dos blocos curto — um ícone, um rótulo de uma ou duas palavras, opcionalmente uma pequena descrição. Rótulos longos envolvem de forma imprevisível.
- Busque alvos de toque de pelo menos 44 × 44 px, incluindo preenchimento.

---

## Atualizando o menu depois

Edições no editor se aplicam na próxima carga da página no front-end — nenhum flush de cache do WordPress é necessário.

---

## Relacionados

- [WordPress / WooCommerce — visão geral]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publique seus menus no WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Menu em Grade Responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
