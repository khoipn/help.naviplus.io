---
description: 'Passo 1: Clique em Loja Online, depois clique em Temas. Dicas: Clique com o botão direito em Loja Online e selecione “Abrir Link em Nova Aba” para economizar tempo.&'
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/slide-menu-hamburger-menu/publishing-on-shopify/
title: Publicando no Shopify
---
# Publicando no Shopify

### Passo 2: (Shopify) Publique o menu em seu site.

#### 2.1. Ative o Navi+ em Embeds de Aplicativos

Passo 1: Clique em Loja Online, depois clique em Temas. Dicas: Clique com o botão direito em Loja Online e selecione “Abrir Link em Nova Aba” para economizar tempo.&#x20;

Passo 2: Selecione o tema onde você deseja publicar o menu.  Clique: **Personalizar**

* Se o seu site é novo e ainda não tem usuários, sinta-se à vontade para publicar o menu sem preocupações—você pode facilmente ativá-lo ou desativá-lo a qualquer momento sem afetar os visitantes.
* Se o seu site já tem tráfego regular, seja mais cauteloso. A melhor prática é criar um **Tema duplicado** e testar o Navi+ nessa versão primeiro.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

Passo 3: Vá para Embeds de Aplicativos, encontre “Navi+ em Todas as páginas” e ative-o.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

Passo 4: Não se esqueça de clicar em “Salvar” para aplicar as alterações.

Após esses 4 passos, o Navi+ foi instalado em seu site e está pronto para exibir. No entanto, o processo ainda não está completo. Volte para a aba do aplicativo Navi+ para realmente ativar **Publicar Menu**.

#### 2.2. Selecione as configurações de exibição e publique o menu.

Passo 1: Clique no botão **Publicar no site**.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

Passo 2: Ative o toggle "Publicar menu (visível apenas quando aberto pelo usuário)".&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FhSDziWrg4Jxr9bZ9jB4j%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=3c39339c-fe75-4653-86e7-411318cf506d" alt=""><figcaption></figcaption></figure>

Passo 3: Selecione o método de exibição&#x20;

**Método 1: Abra este menu a partir de outro item de menu do Navi+ usando a sintaxe open:NaviMenu**

Este método permite que você abra um menu deslizante quando o usuário clica ou toca em um item de menu de outro menu do Navi+ (por exemplo: em uma tab bar, um FAB no canto inferior da tela, ou um mega menu). Os principais propósitos deste método:

<details><summary>Propósito 1: Melhor visibilidade e experiência do usuário ao mostrar o mapa do site completo no menu deslizante enquanto o mantém fácil de acessar.</summary>
<p>O menu deslizante é ideal para exibir o mapa completo do seu site graças ao seu grande espaço e layout flexível, tornando-o perfeito para mostrar todo o catálogo de produtos, links para páginas principais, blogs, ferramentas de suporte, etc. No entanto, o menu deslizante é frequentemente menos visível por padrão. Para melhorar a descobribilidade, você pode usar outro menu do Navi+ (como uma tab bar) para apresentar seus links mais importantes e reconhecíveis, e colocar um item de menu destacado que aciona o menu deslizante. Isso garante melhor visibilidade e engajamento do usuário para o menu deslizante.</p>
</details>

<details><summary>Propósito 2: <strong>Profundidade de menu ilimitada com uma estrutura de menu grande e flexível (Apenas Navi+)</strong></summary>
<p>Em vez de mostrar um popup com espaço limitado quando um item de menu é clicado, você pode abrir outro menu deslizante com três níveis e várias maneiras de apresentar informações. Isso pode ser repetido para outros itens de menu—ou até mesmo para o mesmo menu deslizante—permitindo que você crie uma profundidade virtualmente ilimitada para seus menus do Navi+.</p>
</details>

**Método 2: Quando um elemento de UI (definido por um seletor CSS como #idofelement ou .classname) é clicado ou tocado, este menu será exibido.**

Este é, sem dúvida, o melhor e mais comumente usado método com o Slide Menu.\
Neste guia, vamos nos concentrar em substituir o menu hamburger padrão do site em dispositivos móveis.\
Você também pode aplicar este método de forma criativa, encontrando e usando outros seletores CSS para acionar o menu.

<details><summary>Como substituir o menu hamburger padrão do seu site pelo Navi+ Slide Menu (<strong>Guia Popular)?</strong></summary>
<p>Na maioria dos sites Shopify, o menu hamburger padrão é gerado a partir da versão desktop via design responsivo. Como resultado, geralmente é muito simples, tem profundidade rasa e não suporta ícones, imagens ou layouts avançados. Substituí-lo por um Navi+ Slide Menu é uma escolha comum e prática para aproveitar os recursos avançados do Navi+.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIB9UqVXh9bL1z4AuHAQj%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=1bef8174-8a59-4765-b2ea-e669c1d12fd6" alt=""><figcaption></figcaption></figure>

<p>Para fazer isso, basta identificar o seletor CSS do ícone do menu hamburger do seu site e inseri-lo na caixa de texto. Já encontramos os seletores CSS para alguns dos temas mais populares para você, listados abaixo.</p>
<ol>
<li>Seletores CSS para alguns temas populares e gratuitos.. do Shopify como Dawn, Sense, Savor, Horizon..</li>
</ol>
<pre class="codehilite"><code>#Details-menu-drawer-container 
</code></pre>

<ol>
<li>Não está nesta lista, não se preocupe</li>
</ol>
<pre class="codehilite"><code>- Você pode conversar com um apoiador do Navi+ para ajuda instantânea—isso leva apenas alguns minutos para encontrar o seletor CSS.

- Ou, você pode seguir o guia de autoajuda nos próximos tópicos (Logo após este tópico).
</code></pre>
</details>

<details><summary><strong>Como encontrar o seletor CSS no seu site?</strong></summary>
<p>Você pode conversar com um apoiador do Navi+ para obter ajuda instantânea em vez de fazer isso sozinho.\
No entanto, (1) isso ajudará você a entender a ideia central, e (2) se você quiser fazer isso por conta própria, siga as instruções abaixo.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### 2.3. Importante! Otimize a velocidade do menu deslizante, adicione um efeito de carregamento e previna menus duplicados

Não é algo que você precisa corrigir imediatamente, mas a longo prazo é importante para a experiência do menu deslizante criada pelo Navi+. Antes que o Navi+ substitua completamente o antigo menu deslizante, o menu original do tema ainda está ativo. Por um breve momento—cerca de meio segundo—se um usuário carrega o menu e rapidamente toca no botão hamburger (um caso raro, mas ainda possível), o menu antigo do tema pode aparecer e causar um erro visual.

<details><summary>O Navi+ fornece uma solução simples para otimizar a experiência do usuário e a velocidade conforme os seguintes passos</summary>
<h4>Por que você precisa fazer isso? O Navi+ não é rápido?</h4>
<p>O Navi+ é muito rápido. Ele está totalmente implantado em uma CDN líder com latência muito baixa (cerca de 100ms) e pode atender milhões de clientes sem desacelerar.</p>
<p>No entanto, o Navi+ ainda opera dentro do ecossistema Shopify. O Shopify tem suas próprias regras de carregamento:</p>
<ol>
<li>O Shopify prioriza o carregamento de seus próprios recursos primeiro.</li>
<li>Depois, o Shopify carrega o conteúdo do tema.</li>
<li>Finalmente, o Shopify carrega o conteúdo do aplicativo, mas não em nenhuma ordem específica.</li>
</ol>
<p>Isso significa que se você estiver usando vários aplicativos, o Navi+ pode às vezes ser carregado mais tarde do que o esperado. É por isso que pode parecer mais lento em certos casos.</p>
<hr />
<h3>Qual é a minha solução?</h3>
<p>Atualmente, o Navi+ tem alta prioridade ao carregar em sites Shopify. No entanto, ainda há um certo atraso. Vamos abordar esses problemas um por um aqui:</p>
<h4>Menu Deslizante: Adicione um efeito de carregamento e bloqueie o seletor de acionamento</h4>
<p>Muito simples: basta inserir o seletor CSS que você usa para o Menu Deslizante na seção de embed do aplicativo Navi+ (veja a imagem abaixo).</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

<p>Nota:</p>
<ul>
<li>Adicione o sufixo <strong>(M)</strong> se você quiser que se aplique apenas em dispositivos móveis.</li>
<li>Adicione o sufixo <strong>(D)</strong> se você quiser que se aplique apenas em desktop.</li>
<li>Não deixe sufixo se você quiser que se aplique em ambas as plataformas.</li>
</ul>
</details>
