---
description: Em muitos casos, você precisará usar vários aplicativos incorporados em seu site. Isso pode causar um problema de usabilidade comum, pois os elementos da interface podem se sobrepor (s...
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/shopify/how-to-other-applications-work-with-naviplus/
title: Impedir que os menus do Navi+ se sobreponham a outros aplicativos
---
# Impedir que os menus do Navi+ se sobreponham a outros aplicativos

### Por que isso será um problema?

Em muitos casos, você precisará usar vários aplicativos incorporados em seu site. Isso pode causar um problema de usabilidade comum, pois os elementos da interface podem se sobrepor (veja a imagem abaixo). Um exemplo simples é quando você usa frequentemente um aplicativo de chat como [Shopify Inbox ](https://www.shopify.com/vn/inbox "Shopify Inbox ")ou WhatsApp. Normalmente, esses aplicativos de chat ocupam uma posição proeminente no canto inferior direito da tela do telefone. Quando você decide usar o Navi+ para melhorar significativamente a navegação em seu site, esse problema surge. Aqui estão algumas maneiras de resolver esse problema.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fdccbwi5aXf4XvOxYGIvU%2FFrame%201.png?alt=media&#x26;token=c953f4d5-442c-486d-9493-90490ffd309f" alt=""><figcaption></figcaption></figure>

### Solução 1: Ajustar a posição dos botões flutuantes (Demonstração com Shopify inbox)

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F13ShtYFy9yreGicTmiOm%2FFrame%202.png?alt=media&#x26;token=13a96b69-4907-4ad5-88b5-b41dcc95c35d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FmYVravYrInpp21SPJuKm%2FFrame%203.png?alt=media&#x26;token=9d4c2fa0-2806-4b19-8dce-c403fc582315" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Feuh272YZES4OjBSMok8s%2FFrame%204.png?alt=media&#x26;token=d6b6f9f8-aa4e-4539-a29c-6ae39cbcd344" alt=""><figcaption></figcaption></figure>

### Solução 2: Configurar o padding do menu do Navi+ para evitar sobreposição com aplicativos.

Padding e margin são ferramentas amplamente utilizadas e poderosas na tecnologia, especialmente em HTML5/CSS. Ao definir o padding de acordo com a posição daquela área, você pode evitar a sobreposição de aplicativos. Você também pode definir a distância do menu do Navi+ até as bordas ajustando a margin.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fo0hlCj8BSJLa9WBqrLo8%2FFrame%205.png?alt=media&#x26;token=dfe6c2d9-ea6c-4b97-bd55-8ec33ef7d729" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fkj87WVMtDYGKHxPBAK91%2FFrame%206.png?alt=media&#x26;token=ced78c24-1797-422a-9662-45094a5cee12" alt=""><figcaption></figcaption></figure>

### Solução 3: Substituir Barras Inferiores por Barras Superiores/Barras de Suporte ou Botões de Ação Flutuantes

Embora a Barra Inferior seja a ferramenta mais eficaz para guiar os usuários, usada por quase todos os aplicativos nativos móveis, ou web móvel (mais lento), às vezes você pode querer colocar seu menu do Navi+ em uma posição diferente, como no topo (Barra Superior), direita/esquerda (Barra de Suporte), flutuando acima da interface (botão de ação flutuante). Ou você pode combiná-los para a melhor eficiência de navegação. Confira as seguintes opções do Navi+ para entender como fazer isso, às vezes leva apenas 1s, e você resolverá seu problema.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FiCuFsYdJSucFduHw9zJO%2FFrame%207.png?alt=media&#x26;token=1be98c44-27c3-489d-9e6d-87e1a95fafb7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FbE4JHbm6ZYI6C3uF0X9j%2FFrame%208.png?alt=media&#x26;token=5c85d3bd-5023-4851-82aa-9288f9294d1c" alt=""><figcaption></figcaption></figure>

### Z-index - priorizando a ordem de exibição de "aplicativos flutuantes"

A propriedade z-index especifica a ordem de empilhamento de um elemento. Um elemento com uma ordem de empilhamento maior está sempre na frente de um elemento com uma ordem de empilhamento menor. Veja a imagem abaixo para entender mais.&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyMHcqutHWOUtEEYqMDn6%2Fz-index1.png?alt=media&#x26;token=fb6a0100-e337-4115-9212-a8c8d32888ef" alt=""><figcaption></figcaption></figure>

O z-index padrão para o menu do Navi+ é definido como 50 para todos, pois 'não nos consideramos mais importantes do que outros aplicativos', mas 50 também é o número suficiente para exibir bem em todos os temas do Shopify. Às vezes, você pode precisar ajustar o z-index do seu menu do Navi+ nos seguintes casos:&#x20;

1. Quando você usa vários menus do Navi+ em uma página e deseja que eles se sobreponham, mas um menu aparece acima dos outros.&#x20;
2. Quando há outros objetos/aplicativos sobrepondo seu menu do Navi+, nesse caso, o z-index resolverá tudo.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg93TvrzCEEKdFZvdmdbh%2Fz-index2.png?alt=media&#x26;token=1289e3a7-6ea1-44ec-a284-8964ac4b6f35" alt=""><figcaption></figcaption></figure>

Há uma pergunta desafiadora: qual z-index você deve configurar para o seu menu do Navi+ para evitar sobreposição conforme desejado? Se você tiver vários menus do Navi+, pode organizá-los de acordo com suas preferências sem se preocupar – é por isso que estamos construindo o Navi+ para ser o mais versátil possível para os atuais 'aplicativos flutuantes' no Shopify.&#x20;

Se você precisar configurar o z-index para o seu menu do Navi+ para lidar com conflitos com outros aplicativos, pode pesquisar seu z-index de um mínimo de 0 a um máximo de 2.147.483.647. Isso pode parecer um pouco difícil, mas é a maneira mais fácil e melhor porque o z-index não afetará a exibição da sua interface além do problema que você está enfrentando. Se você tem experiência com depuração de CSS e HTML – isso é fácil, basta ativar o modo de inspeção para ver qual z-index o aplicativo em conflito possui. Ou, a maneira mais fácil, basta clicar no ícone de chat do Crisp para conversar com um consultor do Navi+; ficaríamos felizes em ajudá-lo com esse problema.
