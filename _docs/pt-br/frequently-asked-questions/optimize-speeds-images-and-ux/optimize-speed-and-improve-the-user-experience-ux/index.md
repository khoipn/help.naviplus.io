---
description: Navi+ é muito rápido. Está totalmente implantado em uma CDN líder com latência muito baixa (cerca de 100ms) e pode atender milhões de clientes sem desacelerar.
lang: pt-br
layout: default
permalink: /pt-br/docs/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-speed-and-improve-the-user-experience-ux/
title: Otimize a velocidade e melhore a experiência do usuário (UX).
---
# Otimize a velocidade e melhore a experiência do usuário (UX).

#### Por que você precisa fazer isso? O Navi+ já não é rápido?

Navi+ é muito rápido. Está totalmente implantado em uma CDN líder com latência muito baixa (cerca de 100ms) e pode atender milhões de clientes sem desacelerar.

No entanto, o Navi+ ainda opera dentro do ecossistema Shopify. O Shopify tem suas próprias regras de carregamento:

1. O Shopify prioriza o carregamento de seus próprios recursos primeiro.
2. Em seguida, o Shopify carrega o conteúdo do tema.
3. Finalmente, o Shopify carrega o conteúdo do aplicativo, mas não em nenhuma ordem específica.

Isso significa que, se você estiver usando vários aplicativos, o Navi+ pode às vezes ser carregado mais tarde do que o esperado. É por isso que pode parecer mais lento em certos casos.

***

### Qual é a minha solução?

Atualmente, o Navi+ tem alta prioridade ao carregar em sites Shopify. No entanto, ainda há um certo atraso. Vamos abordar esses problemas um por um aqui:

#### Slide Menu: Adicione um efeito de carregamento e bloqueie o seletor do gatilho

Muito simples: basta inserir o seletor CSS que você usa para o Slide Menu na seção de incorporação do aplicativo Navi+ (veja a imagem abaixo).

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

#### Mega Menu (Modo de Substituição): Adicione um efeito de carregamento e bloqueie o seletor do gatilho

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

Nota:

* Adicione o sufixo **(M)** se você quiser que se aplique apenas em dispositivos móveis.
* Adicione o sufixo **(D)** se você quiser que se aplique apenas em desktop.
* Não deixe sufixo se você quiser que se aplique em ambas as plataformas.
