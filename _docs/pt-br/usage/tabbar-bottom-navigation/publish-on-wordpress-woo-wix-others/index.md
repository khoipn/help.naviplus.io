---
description: 'Se você implantar seu site no Shopify, instale o aplicativo dedicado do Shopify aqui: <https://apps.shopify.com/pronavi-navigation-design> - Ele é otimizado ...'
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/
title: Publicar no Wix / Squarespace / Outros
---
# Publicar no Wix / Squarespace / Outros

> **No WordPress?** Use o [plugin Naviplus Menu Builder]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/) em vez da incorporação manual abaixo — sem edições de tema, sem shortcode para a Tab Bar.

> **No Shopify?** Instale o [aplicativo Shopify](https://apps.shopify.com/pronavi-navigation-design) dedicado — ele é otimizado para a plataforma com opções de publicação integradas.

> **No Wix?** Se você instalou o aplicativo Navi+ pelo Wix App Market, o Navi+ é incorporado automaticamente ao seu site — você pode **pular as etapas abaixo**. Se não instalou o aplicativo da Wix, ainda pode usar o Navi+ no Wix pela incorporação manual abaixo.

Esta página cobre o **método de incorporação de script manual**, que é o caminho certo para [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), e sites personalizados construídos com PHP, Node.js, ou HTML puro. Você tem os seguintes métodos de implementação:

### 1. Incorpore o Navi+ no Seu Site

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
<p>Na seção head (ou o mais cedo possível). Por quê? O site carregará recursos sequencialmente para renderizar a interface. Colocar o Navi+ o mais cedo possível no código HTML ajudará seu menu a estar pronto para exibir assim que as condições forem atendidas, então o menu aparecerá imediatamente. Isso melhora a experiência do usuário.</p>
</details>

<details><summary>Como posso saber se este código foi incorporado com sucesso no meu site?</summary>
<p>Existem duas maneiras:</p>
<p><strong>Método 1 (para todos):</strong></p>
<p>Abra seu site com o sufixo #navidebug-on, por exemplo: <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>. Se o site mudar para o modo Debug, a incorporação está funcionando corretamente. O modo Debug ajuda você a identificar facilmente os seletores CSS. Use #navidebug-off para desligá-lo.</p>
<p><strong>Método 2 (para desenvolvedores):</strong></p>
<p>Abra as ferramentas de inspeção do seu navegador, vá para a aba Console e procure uma mensagem verde: “Usando Navi+..”. Esta mensagem indica que o código foi incorporado com sucesso.</p>
</details>

***

### 2. Insira um Menu Navi+ em Qualquer Ponto do Seu Site

O código abaixo pode ser usado várias vezes em um site com diferentes informações de inserção (especialmente o **ID Embeded**, como SF-123456789). Quando o site é renderizado, o menu será implantado e exibido na posição onde o código é inserido quando as condições forem atendidas. Este tipo de menu é adequado para: Mega menu, Grid, etc.

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
