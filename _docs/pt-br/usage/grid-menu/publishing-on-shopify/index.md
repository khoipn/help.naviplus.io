---
description: 'Passo 1: Clique em Loja Online, depois clique em Temas. Dica: Clique com o botão direito em Loja Online e selecione "Abrir Link em Nova Aba" para economizar tempo.'
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/grid-menu/publishing-on-shopify/
title: Publicando no Shopify
---
# Publicando no Shopify

### Passo 2: (Shopify) Publique o menu em seu site.

#### **I) MÉTODO 1: INSERIR (ANTES OU DEPOIS) DESTE MENU EM UM LOCAL ESPECÍFICO NO SEU SITE, OU SUBSTITUIR UM MENU EXISTENTE, USANDO UM SELETOR CSS. (**&#x52;ECOMMENDED)

#### I.1. Ative o Navi+ em Embeds de Aplicativos

Passo 1: Clique em Loja Online, depois clique em Temas. Dica: Clique com o botão direito em Loja Online e selecione "Abrir Link em Nova Aba" para economizar tempo.

Passo 2: Selecione o tema onde você deseja publicar o menu. Clique: **Personalizar**

* Se o seu site é novo e ainda não tem usuários, sinta-se à vontade para publicar o menu sem preocupações—você pode ativá-lo ou desativá-lo a qualquer momento sem afetar os visitantes.
* Se o seu site já tem tráfego regular, seja mais cauteloso. A melhor prática é criar um **Tema duplicado** e testar o Navi+ nessa versão primeiro.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

Passo 3: Vá para Embeds de Aplicativos, encontre "Navi+ em Todas as páginas", e ative-o.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

Passo 4: Não se esqueça de clicar em "Salvar" para aplicar as alterações.

Após esses 4 passos, o Navi+ foi instalado em seu site e está pronto para exibir. No entanto, o processo ainda não está completo. Volte para a aba do aplicativo Navi+ para realmente ativar **Publicar Menu**.

#### I.2. Entendendo o Seletor CSS

Um Seletor CSS é uma maneira de direcionar um elemento HTML específico em sua página da web. O Navi+ o utiliza para saber exatamente **onde** colocar seu menu — se deve inseri-lo antes ou depois de um elemento, ou substituir um existente completamente.

Para encontrar o Seletor CSS correto para o seu site, você pode usar:
- [Modo de Depuração](/docs/usage/debug-mode-find-css-selectors/) — ferramenta integrada do Navi+: passe o mouse sobre qualquer elemento e copie instantaneamente seu seletor
- [DevTools do Navegador](/docs/usage/general/find-css-selector/) — método manual usando o inspetor do seu navegador

<details><summary><strong>Como encontrar o seletor CSS usando o DevTools do Navegador</strong></summary>
<p>Você pode conversar com um apoiador do Navi+ para obter ajuda instantânea em vez de fazer isso sozinho. No entanto, se você quiser fazer isso por conta própria, siga as capturas de tela abaixo.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### I.3. Três opções de publicação

Passo 1: Clique no botão **Publicar no site**.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

Passo 2: Ative o toggle "Publicar menu pelo método Inserir/Substituir".

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMKj8nfrhd9jdA3bXSFio%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=dd78fff1-36fb-4ce9-93e5-24d3076c170d" alt=""><figcaption></figcaption></figure>

Passo 3: Insira seu Seletor CSS e escolha uma das três opções de publicação abaixo.

<details><summary>Opção 1: Inserir Antes (mais comum para Menu em Grade)</summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FFdsoRiQZP0I26RofqljL%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=51fec431-31e7-4bce-8c22-50a84664ee65" alt=""><figcaption></figcaption></figure>
<p>Insere o menu Navi+ imediatamente <strong>antes</strong> do elemento selecionado.</p>
<p><strong>Exemplo:</strong> Seletor CSS <code>main</code> → o Menu em Grade aparece acima da área de conteúdo principal da página.</p>
<p>Seletores CSS comuns para temas Shopify (Dawn, Sense, Savor, Horizon):</p>
<ul>
<li><code>main</code> — a maioria dos temas Shopify</li>
<li><code>#MainContent</code> — tema Shopify Dawn</li>
</ul>
<p>Não está nesta lista? Converse com um apoiador do Navi+, ou use <a href="/docs/usage/debug-mode-find-css-selectors/">Modo de Depuração</a> ou <a href="/docs/usage/general/find-css-selector/">DevTools do Navegador</a>.</p>
</details>

<details><summary>Opção 2: Inserir Depois</summary>
<p>Insere o menu Navi+ imediatamente <strong>depois</strong> do elemento selecionado.</p>
<p><strong>Exemplo:</strong> Seletor CSS <code>header</code> → o Menu em Grade aparece logo abaixo do cabeçalho.</p>
<p>Seletores CSS comuns para temas Shopify (Dawn, Sense, Savor, Horizon):</p>
<ul>
<li><code>header</code> — a maioria dos temas Shopify</li>
<li><code>.header-wrapper</code> — alguns temas</li>
</ul>
<p>Não está nesta lista? Converse com um apoiador do Navi+, ou use <a href="/docs/usage/debug-mode-find-css-selectors/">Modo de Depuração</a> ou <a href="/docs/usage/general/find-css-selector/">DevTools do Navegador</a>.</p>
</details>

<details><summary>Opção 3: Substituir</summary>
<p>Na maioria das lojas Shopify, não há um elemento de Menu em Grade embutido para substituir. Inserir Antes <code>main</code> é a abordagem recomendada.</p>
<p>Se o seu tema tiver um elemento de estilo grade que você deseja substituir, use <a href="/docs/usage/debug-mode-find-css-selectors/">Modo de Depuração</a> ou <a href="/docs/usage/general/find-css-selector/">DevTools do Navegador</a> para encontrar seu seletor.</p>
</details>

#### I.4. Direcionamento específico para dispositivos

Você pode controlar se o Seletor CSS se aplica em dispositivos móveis, desktops ou ambos, adicionando um sufixo:

| Sufixo | Aplica-se a |
|--------|------------|
| `(M)` | Somente móvel |
| `(D)` | Somente desktop |
| *(nenhum)* | Ambos, móvel e desktop |

**Exemplos:** `main(D)` — somente desktop · `main(M)` — somente móvel · `main` — ambas as plataformas.


#### **II) MÉTODO 2: ADICIONAR ESTE MENU COMO UMA SEÇÃO/BLOCO NO TEMA DO SHOPIFY**

Este método insere o menu adicionando um Bloco/Seção no seu tema Shopify. É uma abordagem tradicional, então não a descreverei em detalhes. Com este método, você não precisa nem mesmo **"Ativar o Navi+ em Embeds de Aplicativos"** como exigido no Passo 1 do Método 1.

Copie o ID de Embed deste menu, depois insira no bloco chamado "Navi+ na Seção" nas Seções do Tema. Você pode adicionar um título, configurar a largura total e ajustar a margem para esta seção após adicioná-la.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FO2uavUwCekKwBVqvtJrt%2FMargin-padding%201.1.png?alt=media&#x26;token=35261670-ad9b-445f-9730-b10be40e406e" alt=""><figcaption></figcaption></figure>

<details><summary>Guia para adicionar este menu como uma seção/bloco no tema do Shopify</summary>
<p>Abaixo está um guia detalhado sobre como inserir um menu Navi+ como uma seção/bloco no seu tema Shopify. Este método permite que você adicione o menu de uma maneira padrão, suportada pelo Shopify, embora não seja tão flexível quanto os outros métodos fornecidos pelo Navi+.</p>
<p>Este método se aplica a <strong>Menus Mega</strong> e <strong>Menus em Grade</strong>. Ele <strong>NÃO SE APLICA</strong> a <strong>Tabbar</strong>, <strong>FAB</strong> ou <strong>Menus de Slide</strong>.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcdnKqInMqe14B9NBOTqr%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=dcac5183-9433-4a11-bf2e-6508101ab089" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FF5RAjnmtKv4kXRhIMxaV%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=8eb3748c-16c6-4508-aebe-781d00c2a8d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F1ss5KONiPDSu0AphvToH%2FHelp.MenuTree.1.1.9.png.png?alt=media&#x26;token=395e460a-f275-4642-9a86-41f996ea87f5" alt=""><figcaption></figcaption></figure>
</details>
