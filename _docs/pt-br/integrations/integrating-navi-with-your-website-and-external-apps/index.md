---
description: Aqui você encontrará guias sobre como conectar o Navi+ com outros aplicativos (como ferramentas de chat, fidelidade, etc.). Você pode adicioná-los como itens de menu, abrir aplicativos diretamente do Nav...
lang: pt-br
layout: default
permalink: /pt-br/docs/integrations/integrating-navi-with-your-website-and-external-apps/
title: Integrando Navi+ com seu site e aplicativos externos
---
# Integrando Navi+ com seu site e aplicativos externos

Aqui você encontrará guias sobre como conectar o Navi+ com outros aplicativos (como ferramentas de chat, fidelidade, etc.). Você pode adicioná-los como itens de menu, abrir aplicativos diretamente do Navi+, e garantir que tudo funcione junto de forma suave, sem sobreposições em seu site.

### 1. Integre outros aplicativos fixos em um único item de menu do Navi+

O Navi+ consolida vários aplicativos (Chat Box, Fidelidade, Prova Social, Barras de Promoção, etc.) em itens de menu, mantendo seu site limpo e prevenindo sobreposições—especialmente valioso em dispositivos móveis com espaço de tela limitado.

Para conseguir isso, siga estes 2 passos:

• Passo 1: Oculte os ícones dos aplicativos fixos usando CSS. Veja os detalhes aqui

• Passo 2: Use JavaScript para itens de menu para que clicar neles abra os painéis de aplicativos respectivos.

Veja o exemplo de integração do chat Tidi. Esta é uma configuração relativamente avançada, então entre em contato com o suporte do Navi+ para assistência.

### 2. Gatilhos JavaScript – interaja com aplicativos externos

O Navi+ permite executar funções JavaScript a partir de itens de menu quando clicados pelos usuários (javascript:Function). Veja o exemplo de integração do chat Tidi para entender como usar duas funções JavaScript para integrar o chat Tidio como um item de menu do Navi+:

1. Oculte o ícone do Tidio: Uma função global que espera o Tidio renderizar, então o oculta
2. openTidio(): Abre o painel de chat do Tidio quando os usuários clicam no item de menu "Chat with us"

O Navi+ também suporta que você defina as classes e atribuições de atributos (mesmo na forma de id="menu-item-1") para habilitar a interação com outros aplicativos ou código JavaScript. Você pode usar funções JavaScript para acessar diretamente os itens de menu via classe ou atributo, por exemplo: para criar um tutorial passo a passo.

### 3. Personalizando a Interface do Navi+ com CSS Externo

Cada menu do Navi+ é definido por um elemento div com id="SF-123456789" (id embutido). Veja a estrutura HTML/CSS de um menu do Navi+ aqui para escrever código CSS para personalizar a interface do menu.

Por exemplo, para mudar a cor de um item de menu de nível 2, você pode escrever o seguinte CSS:

`#SF-123456789 ul li ul.children li .name { color: red; }`

O Navi+ também suporta que você defina as classes e atribuições de atributos (mesmo na forma de id="menu-item-1") para habilitar a interação com outros aplicativos ou código JavaScript. Você pode estilizar cada item de menu usando nomes de classe ou atributos.

### 4. Comunicação Entre Menus do Navi+

A partir de um item de menu do Navi+, você pode chamar para abrir outro menu Slide do Navi+ usando a sintaxe: `open:NaviMenu.`

Com esta sintaxe, você pode expandir infinitamente os níveis de menu fazendo com que menus deslizantes chamem outros menus deslizantes.

### 5. Abra um Menu Slide de qualquer lugar em seu site

Com menus deslizantes, além de abri-los via itens de menu de outros menus do Navi+, você também pode acionar um menu deslizante do Navi+ chamando a função JavaScript: `naviman.openNaviMenu()`.

Por exemplo: Crie um botão flutuante usando HTML e CSS, então atribua sua ação de clique para abrir um menu Slide do Navi+ – você terá instantaneamente um menu com aparência profissional.

### 6. Simular ações do usuário (clique, foco, rolagem, etc.)

O Navi+ fornece várias funções (ativadas quando um item de menu é clicado):

* `open:clickTo` para simular um clique em um Seletor CSS HTML. Isso é extremamente útil para permitir que o menu do Navi+ acione menus de hambúrguer padrão, ferramentas de busca, painéis de carrinho, dropdowns de idioma... ou ative ferramentas de chat de outros aplicativos.
* `open:focusTo` para simular o foco em um Seletor CSS HTML. Isso é extremamente útil para simular cliques em ferramentas de busca ou campos de assinatura de e-mail
* `scroll:Top`, `scroll:Bottom`, `scroll:OnPage` para rolar a página da web para a área desejada. Isso é extremamente útil quando você quer rolar para uma seção alvo na página em vez de navegar para uma página diferente.

### 7. Para compartilhar e melhorar o engajamento do site

O Navi+ fornece várias funções (ativadas quando um item de menu é clicado):

* `open:ShareMe` para compartilhar o link do site
* `share:CopyUrl` para copiar a URL atual para a área de transferência do dispositivo
* `share:Facebook` para compartilhar a URL atual no Facebook
* `share:Tweet` para compartilhar a URL atual no Twitter (X)

### 8. Integração com outros aplicativos de dispositivos (como Telefone)

O Navi+ fornece várias funções (ativadas quando um item de menu é clicado):

* `tel:+[Código do país][Telefone]` para ligar para o número
* `sms:+[Código do país][Telefone]?body=[Texto]` para enviar uma mensagem SMS para o número com um conteúdo configurado (opcional)
* `mailto:[Endereço]` para enviar um e-mail
* `https://m.me/[SeuNome]` para conversar com seu Facebook Messenger
* `https://wa.me/[Telefone]` para conversar com seu WhatsApp
* `https://lin.ee/[código-line]` para conversar com seu Line
* `https://zalo.me/+[Código do país][Telefone]` para conversar com seu Zalo

### 9. Somente para Shopify

O Navi+ fornece várias funções (ativadas quando um item de menu é clicado):

* `open:ChangeLanguage` para mudar o idioma se o site usar Shopify
* Shopify Inbox: Oculte o ícone do Shopify Inbox e integre-o ao menu do Navi+ como um item de menu que abre o painel de chat ao clicar. Veja os detalhes aqui
* Abra o menu de hambúrguer ou carrinho, painel de busca: Veja os detalhes aqui

### Não vê na lista?

Sinta-se à vontade para me enviar seu pedido de integração. Estou feliz em ajudar, e isso também apoia o crescimento do Navi+.
