---
description: Publique um Menu em Grade Navi+ no WordPress com o plugin Navi+ AI Menu Builder. Insira-o onde deve aparecer usando o shortcode [naviwp embed_id="..."] ou bloco Gutenberg.
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/grid-menu/publish-on-wordpress/
title: Menu em Grade — Publicar no WordPress
---
# Menu em Grade — Publicar no WordPress

A **Menu em Grade** é um menu de **seção** — ele é renderizado no local da página onde você o incorpora. É uma ótima opção para atalhos de categoria, páginas centrais e painéis "o que você gostaria de fazer?". No WordPress, o plugin Navi+ AI Menu Builder o coloca via shortcode ou bloco Gutenberg; você nunca edita arquivos de tema.

> Outras plataformas (Wix, Squarespace, Webflow, sites personalizados): veja [Publicar no Wix / Squarespace / Outros]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Passos

1. **Instale o plugin** — veja [Instalar o plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
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

### Opção 4 — Seletor CSS (auto-colocação do aplicativo Navi+)

Em vez de colocar um shortcode manualmente, você pode deixar o Navi+ inserir ou substituir automaticamente um elemento usando um Seletor CSS — configurado inteiramente a partir do aplicativo Navi+.

#### Entendendo o Seletor CSS

Um Seletor CSS direciona um elemento HTML específico na sua página. O Navi+ o usa para saber exatamente **onde** colocar seu menu — inserir antes, inserir depois ou substituir um elemento existente.

Para encontrar o Seletor CSS correto, use:
- [Modo de Depuração](/docs/usage/debug-mode-find-css-selectors/) — passe o mouse sobre qualquer elemento e copie instantaneamente seu seletor
- [DevTools do Navegador](/docs/usage/general/find-css-selector/) — método manual via inspetor do navegador

#### Três opções de publicação

No aplicativo Navi+: clique em **Publicar no site** → ative **"Publicar menu pelo método Inserir/Substituir"** → insira seu Seletor CSS e escolha uma opção:

<details><summary>Opção A: Inserir Antes</summary>
<p>Insere o Menu em Grade imediatamente <strong>antes</strong> do elemento selecionado, exibido como uma seção completa.</p>
<p><strong>Exemplo:</strong> <code>main</code> → o Menu em Grade aparece acima da área de conteúdo principal.</p>
<p>Esta é a configuração mais comum para um Menu em Grade no WordPress.</p>
<p>Seletores comuns para temas WordPress:</p>
<ul>
<li><code>main</code> — a maioria dos temas</li>
<li><code>#main</code> — Twenty Twenty, Astra, OceanWP</li>
<li><code>.site-main</code> — muitos temas</li>
<li><code>#content</code> — Divi, alguns temas padrão</li>
</ul>
</details>

<details><summary>Opção B: Inserir Depois</summary>
<p>Insere o Menu em Grade imediatamente <strong>depois</strong> do elemento selecionado.</p>
<p><strong>Exemplo:</strong> <code>header</code> → o Menu em Grade aparece logo abaixo do cabeçalho.</p>
<p>Seletores comuns para temas WordPress:</p>
<ul>
<li><code>header</code> — a maioria dos temas</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One e temas padrão do WordPress</li>
</ul>
</details>

<details><summary>Opção C: Substituir</summary>
<p>A maioria dos sites WordPress não tem um elemento de Menu em Grade embutido para substituir. Inserir Antes <code>main</code> é a abordagem recomendada.</p>
<p>Se seu tema tiver um elemento de estilo grade que você deseja substituir, use <a href="/docs/usage/debug-mode-find-css-selectors/">Modo de Depuração</a> ou <a href="/docs/usage/general/find-css-selector/">DevTools do Navegador</a> para encontrar seu seletor.</p>
</details>

#### Direcionamento específico para dispositivos

Adicione um sufixo para aplicar o seletor apenas em um dispositivo específico:

| Sufixo | Aplica-se a |
|--------|------------|
| `(M)` | Somente móvel |
| `(D)` | Somente desktop |
| *(nenhum)* | Ambos |

Exemplo: `main(D)` — insere o Menu em Grade apenas no desktop.

---

## Dicas para dispositivos móveis

- Use **[Menu em Grade Responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)** para alternar a contagem de colunas por ponto de interrupção — por exemplo, 4 colunas no desktop, 2 no móvel.
- Mantenha o conteúdo dos blocos curto — um ícone, um rótulo de uma ou duas palavras, opcionalmente uma pequena descrição. Rótulos longos envolvem de forma imprevisível.
- Busque alvos de toque de pelo menos 44 × 44 px, incluindo preenchimento.

---

## Atualizando o menu depois

Edições no editor se aplicam na próxima carga de página no front-end — nenhum flush de cache do WordPress é necessário.

---

## Relacionados

- [WordPress / WooCommerce — visão geral]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publique seus menus no WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Menu em Grade Responsivo]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
