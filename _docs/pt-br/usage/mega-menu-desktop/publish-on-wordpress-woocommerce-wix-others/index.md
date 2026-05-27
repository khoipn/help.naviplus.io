---
description: 'Se você implantar seu site no Shopify, instale o aplicativo dedicado do Shopify aqui: <https://apps.shopify.com/pronavi-navigation-design> - Ele é otimizado ...'
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/
title: Publicar no Wix / Squarespace / Outros
---
# Publicar no Wix / Squarespace / Outros

> **No WordPress?** Use o plugin dedicado [Naviplus Menu Builder]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/) em vez da incorporação manual abaixo — sem edições de tema, coloque o Mega Menu via shortcode ou bloco Gutenberg.

> **No Shopify?** Instale o [aplicativo Shopify](https://apps.shopify.com/pronavi-navigation-design) dedicado — ele é otimizado para a plataforma com opções de publicação integradas.

Esta página cobre o **método de incorporação de script manual**, que é o caminho certo para [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), e sites personalizados construídos com PHP, Node.js, ou HTML puro. Você tem os seguintes métodos de implementação:

### 1. Incorporar Navi+ no Seu Site

Este método de implementação é adequado para todos os tipos de menu que o Navi+ atualmente suporta, incluindo: Tabbar, Mega menu, Slide menu, FAB, e Grid menu. Este código só precisa ser usado uma vez para todos os menus.

```html
<!-- Insira este código no <head> do site. (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Insira este código no <head> do site -->
```

### FAQ (Perguntas Frequentes)

<details><summary>O que é token?</summary>
<p>Cada conta Navi+ é atribuída um token único. Você pode visualizar e copiar este token diretamente do cabeçalho do aplicativo. O token é usado para publicar seu menu de forma segura.</p>
</details>

<details><summary>O que é https://live.naviplus.app/start.js?</summary>
<p>Este é o URL fixo do Navi+ que contém a lógica de inicialização do aplicativo. O script é leve (cerca de 4KB), permitindo que ele carregue rapidamente na maioria dos dispositivos e condições de rede. Ele é entregue via Cloudflare e BunnyCDN para fornecer desempenho global estável e compatibilidade confiável com navegadores modernos.</p>
<p>Usar o método de carregamento assíncrono também significa que não afeta o processo de carregamento do site.</p>
</details>

<details><summary>Este código de incorporação desacelera meu site?</summary>
<p>O código abaixo é extremamente leve e pode ser inserido no seu site sem afetar a velocidade (levando apenas cerca de 100-200ms para o primeiro carregamento e 0ms para carregamentos subsequentes), a experiência do cliente ou as pontuações de SEO</p>
</details>

<details><summary>Qual é o melhor lugar para inserir este trecho de código?</summary>
<p>Na seção head (ou o mais cedo possível). Por quê? O site carregará sequencialmente os recursos para renderizar a interface. Colocar o Navi+ o mais cedo possível no código HTML ajudará seu menu a estar pronto para exibir assim que as condições forem atendidas, então o menu aparecerá imediatamente. Isso melhora a experiência do usuário.</p>
</details>

<details><summary>Como posso saber se este código foi incorporado com sucesso no meu site?</summary>
<p>Existem duas maneiras:</p>
<p><strong>Método 1 (para todos):</strong></p>
<p>Abra seu site com o sufixo #navidebug-on, por exemplo: <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>. Se o site mudar para o modo Debug, a incorporação está funcionando corretamente. O modo Debug ajuda você a identificar facilmente os seletores CSS. Use #navidebug-off para desligá-lo.</p>
<p><strong>Método 2 (para desenvolvedores):</strong></p>
<p>Abra as ferramentas de inspeção do seu navegador, vá para a aba Console e procure uma mensagem verde: “Usando Navi+..”. Esta mensagem indica que o código foi incorporado com sucesso.</p>
</details>

***

### 2. Publicar o menu usando Seletor CSS (recomendado)

Após incorporar o script acima, vá para o aplicativo Navi+ para configurar onde e como seu menu aparece na página.

#### I.1. Entendendo Seletor CSS

Um Seletor CSS é uma maneira de direcionar um elemento HTML específico na sua página da web. O Navi+ o usa para saber exatamente **onde** colocar seu menu — se deve inseri-lo antes ou depois de um elemento, ou substituir um existente completamente.

Você não precisa ser um desenvolvedor para usar isso. O Navi+ fornece um campo de entrada simples onde você insere o seletor, e ele cuida do resto.

Para encontrar o Seletor CSS correto para o seu site, você pode usar:
- [Modo Debug](/docs/usage/debug-mode-find-css-selectors/) — ferramenta integrada do Navi+: passe o mouse sobre qualquer elemento na sua página e copie instantaneamente seu seletor
- [Browser DevTools](/docs/usage/general/find-css-selector/) — um método manual usando o inspetor integrado do seu navegador

#### I.2. Três opções de publicação

Passo 1: Clique no botão **Publicar no site** no aplicativo Navi+.

Passo 2: Ative o toggle "Publicar menu pelo método Inserir/Substituir".

Passo 3: Insira seu Seletor CSS e escolha uma das três opções de publicação abaixo.

<details><summary>Opção 1: Inserir Antes</summary>
<p>Insere o menu Navi+ imediatamente <strong>antes</strong> do elemento selecionado.</p>
<p><strong>Exemplo:</strong> Seletor CSS <code>main</code> → o menu aparece acima da área de conteúdo principal da página.</p>
<p>Seletores CSS comuns para esta opção:</p>
<ul>
<li><code>main</code> — funciona na maioria das plataformas (Webflow, Magento, sites personalizados)</li>
<li><code>#main</code> — algumas plataformas e temas personalizados</li>
<li><code>.main-content</code> — várias plataformas</li>
</ul>
<p>Não está nesta lista? Você pode conversar com um suporte do Navi+ para ajuda instantânea, ou usar <a href= "/docs/usage/debug-mode-find-css-selectors/">Modo Debug</a> ou <a href= "/docs/usage/general/find-css-selector/">Browser DevTools</a> para encontrá-lo você mesmo.</p>
</details>

<details><summary>Opção 2: Inserir Depois</summary>
<p>Insere o menu Navi+ imediatamente <strong>depois</strong> do elemento selecionado.</p>
<p><strong>Exemplo:</strong> Seletor CSS <code>header</code> → o menu aparece logo abaixo do cabeçalho.</p>
<p>Esta é a configuração mais comum para um Mega Menu de desktop.</p>
<p>Seletores CSS comuns para esta opção:</p>
<ul>
<li><code>header</code> — funciona na maioria das plataformas</li>
<li><code>.header-wrapper</code> — algumas plataformas</li>
<li><code>.site-header</code> — várias plataformas</li>
</ul>
<p>Não está nesta lista? Você pode conversar com um suporte do Navi+ para ajuda instantânea, ou usar <a href= "/docs/usage/debug-mode-find-css-selectors/">Modo Debug</a> ou <a href= "/docs/usage/general/find-css-selector/">Browser DevTools</a> para encontrá-lo você mesmo.</p>
</details>

<details><summary>Opção 3: Substituir</summary>
<p>Substitui o elemento selecionado completamente pelo menu Navi+. O elemento original é oculto e o Navi+ ocupa seu lugar.</p>
<p><strong>Exemplo:</strong> Seletor CSS <code>.main-nav</code> → a navegação padrão do site é oculta e substituída pelo seu Mega Menu Navi+.</p>
<p>Seletores CSS comuns para esta opção:</p>
<ul>
<li><code>nav</code> — elemento de navegação genérico</li>
<li><code>.main-nav</code> — várias plataformas</li>
<li><code>.site-navigation</code> — várias plataformas</li>
</ul>
<p><strong>Nota:</strong> Ao usar o modo Substituir, um breve flash do menu original pode aparecer enquanto o Navi+ carrega. Veja I.4 abaixo para evitar isso.</p>
<p>Não está nesta lista? Você pode conversar com um suporte do Navi+ para ajuda instantânea, ou usar <a href= "/docs/usage/debug-mode-find-css-selectors/">Modo Debug</a> ou <a href= "/docs/usage/general/find-css-selector/">Browser DevTools</a> para encontrá-lo você mesmo.</p>
</details>

#### I.3. Direcionamento específico para dispositivos

Você pode controlar se o Seletor CSS se aplica em dispositivos móveis, desktop, ou ambos, adicionando um sufixo ao seu seletor:

| Sufixo | Aplica-se a |
|--------|------------|
| `(M)` | Somente móvel |
| `(D)` | Somente desktop |
| *(nenhum)* | Tanto móvel quanto desktop |

**Exemplos:**
- `header(D)` — insere ou substitui somente no desktop
- `header(M)` — insere ou substitui somente no móvel
- `header` — insere ou substitui em ambas as plataformas

**I.4. Importante! Otimize a velocidade do Mega Menu e a experiência do usuário (modo Substituir)**

Quando você substitui um menu por outro, o Navi+ espera até que o menu antigo seja exibido e então o troca instantaneamente pelo novo. Embora isso aconteça quase imediatamente, ainda há um breve momento em que o menu antigo aparece, o que pode confundir os usuários.

Com este passo, você pode ocultar completamente o menu antigo e mostrar um efeito de carregamento em vez disso. Isso faz com que o site pareça mais rápido e melhora a experiência do usuário. O Navi+ fornece uma opção simples integrada para isso nas configurações de publicação — ative-a e configure o Seletor CSS do elemento a ser ocultado, com um sufixo opcional `(M)` ou `(D)` para controle específico do dispositivo.

***

### 3. Inserir um Menu Navi+ em Qualquer Ponto do Seu Site

O código abaixo pode ser usado várias vezes em um site com diferentes informações de inserção (especialmente o **ID Embutido**, como SF-123456789). Quando o site é renderizado, o menu será implantado e exibido na posição onde o código é inserido quando as condições forem atendidas. Este tipo de menu é adequado para: Mega menu, Grid, etc.

```html
<!-- Insira o código onde o menu SF-123456789 aparece. (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Insira o código onde o menu SF-123456789 aparece -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">Importante</mark>**:** O código acima usa o código de incorporação de exemplo <mark style="color:orange;">SF-123456789</mark>. Certifique-se de substituí-lo pelo seu código de incorporação de menu real.
{% comment %}endhint{% endcomment %}
