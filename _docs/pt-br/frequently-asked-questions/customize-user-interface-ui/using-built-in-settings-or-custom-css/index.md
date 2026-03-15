---
description: Navi+ fornece várias opções de configuração comuns para menus, na aba **"Design"**, como fundo, tipografia (família da fonte, tamanho..), e ícones/imagens...
lang: pt-br
layout: default
permalink: /pt-br/docs/frequently-asked-questions/customize-user-interface-ui/using-built-in-settings-or-custom-css/
title: Usando configurações internas ou CSS personalizado?
---
# Usando configurações internas ou CSS personalizado?

Navi+ fornece várias opções de configuração comuns para menus, na aba **"Design"**, como fundo, tipografia (família da fonte, tamanho..), e ícones/imagens (tamanho, espaço, curva...). Ao usar essas configurações, seu menu pode geralmente ser estilizado para combinar com o design e a marca geral do seu site.

Navi+ menus suportam até 3 níveis. Na aba **"Design"**, você pode apenas configurar o estilo para 2 níveis, e não há uma opção direta para definir o tamanho da fonte ou o tamanho do ícone/imagem para menus de nível 2 e nível 3. Então, como você pode fazer isso?

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEeUzjyXb0DDSzsPobpqC%2FCSS%201.0.png?alt=media&#x26;token=ab2b0265-e0cd-4777-964d-285e4d947c64" alt=""><figcaption></figcaption></figure>

#### Personalização profunda do menu com a ferramenta CSS & Coding

No entanto, se você ou seu desenvolvedor de site tiver uma compreensão básica de CSS (Folhas de Estilo), você pode personalizar todo o design do menu usando a ferramenta "**CSS & Coding**"** integrada no Navi+ sem editar seus arquivos de tema diretamente. Isso oferece vários benefícios:

* Você pode separar as configurações de CSS para menus do Navi+ do seu tema. Isso significa que atualizar ou mudar seu tema não afetará seus menus do Navi+.
* O Navi+ usa um mecanismo de proteção inteligente, adicionando automaticamente um prefixo (como `#SF-123456789`) no início de cada regra CSS. Isso mantém o CSS para diferentes menus do Navi+ isolado, minimizando o risco de conflitos de estilo.
* Se necessário, você ainda pode adicionar CSS que afete todo o site diretamente dentro do Navi+, embora isso deva ser usado com moderação e apenas quando necessário.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwIMkFPG3bnaAfvN3fRy4%2FCSS.1.1.png?alt=media&#x26;token=91b34b8a-ae77-4d14-a52d-f30568f8b2c5" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRMPDJmuihVuXKunOmmAZ%2FCSS.1.2.png?alt=media&#x26;token=0ebcac44-dba7-4306-80aa-815323c027b3" alt=""><figcaption></figcaption></figure>

**Nota importante:** A **caixa de texto de Estilo Interno / CSS** adiciona automaticamente um prefixo (por exemplo, `#SF-123456789`) antes de cada regra CSS. Isso garante que seu CSS se aplique apenas ao menu específico que está sendo personalizado e evita conflitos de estilo.

#### Alguns estudos de caso típicos de uso de CSS

1) Para configurar a aparência de todo o menu no nível mais alto, você pode escrever um trecho que não é CSS padrão, mas muito simples. Por exemplo, o trecho abaixo muda o fundo do menu para vermelho. Adicione o seguinte código à caixa de texto de Estilo Interno / CSS:

```
{
    background: red;
}
```

2) Configure tamanho, tipografia e cores para cada nível de item de menu. Adicione o seguinte código à caixa de texto de Estilo Interno / CSS:

```
// Personalize o estilo do texto dos itens de menu de nível 1
ul > li.item > .inner .name {
    font-size: 14px;
    color: red;
}

// Personalize o estilo do texto dos itens de menu de nível 2
ul.children[menulevel="2"] > li.child > .inner .name{
     font-size: 16px; 
     color: blue;
}

// Personalize o estilo do texto dos itens de menu de nível 3
ul.children[menulevel="3"] > li.child > .inner .name{
     font-size: 13px; 
     color: green;     
}
```

3) Mude a espessura da fonte usando `font-weight.` Adicione o seguinte código à caixa de texto de Estilo Interno / CSS:

```
// Defina a espessura da fonte do nome
.name {
  font-weight: 700;
}

// Defina a espessura da fonte da descrição
.description {
  font-weight: 700;
}
```

4) Ajuste o tamanho da seta. Adicione o seguinte código à caixa de texto de Estilo Interno / CSS:

```
ul > li.is-parent-top::after {
  font-size: 24px !important;
}
```
