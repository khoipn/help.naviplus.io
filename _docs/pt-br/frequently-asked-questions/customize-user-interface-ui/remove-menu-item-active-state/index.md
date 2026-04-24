---
description: Por padrão, o Navi+ verifica a URL da página atual para mostrar o estado ativo no menu (usando um fundo cinza). Isso ajuda seus clientes a navegar mais facilmente.
lang: pt-br
layout: default
permalink: /pt-br/docs/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state/
title: Remover estado ativo do item do menu?
---
# Remover estado ativo do item do menu?

Por padrão, o Navi+ verifica a URL da página atual para mostrar o estado ativo no menu (usando um fundo cinza). Isso ajuda seus clientes a navegar mais facilmente.

No entanto, o estado ativo nem sempre é necessário, especialmente em telas largas de desktop, onde há outras maneiras de indicar "onde você está," como breadcrumbs. Às vezes, você pode querer remover o estado ativo para deixar o menu com uma aparência mais limpa.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FAQCfjosVopNC9mXDDbII%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=1167aaa9-c22e-4102-9eb9-6e5ee10dc14a" alt=""><figcaption></figcaption></figure>

Aqui está como fazer isso:

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyaI6k6GmW3A5CGipYz1p%2FCSS.1.1.png?alt=media&#x26;token=1ddf87db-9f58-4109-9886-441efd8e8f24" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FXRcp2647QfYG9b0JyS1t%2FCSS.1.2.png?alt=media&#x26;token=742f4ac0-50c1-48ec-bf8f-ccc7d89818cc" alt=""><figcaption></figcaption></figure>

Método 1: Se você quiser aplicar isso apenas a este menu, o código CSS é o seguinte (cole-o na caixa de Folha de Estilo Interna / CSS):

```
ul li.navi-active {
  background: initial;
}
```

Explicação: Isso adiciona uma regra CSS como `#SF-123456789 ul li.navi-active { background: initial; }` à página, aplicando-se apenas a este menu (com embedID `SF-123456789`) e não afetando outros menus.

Método 2: Se você quiser remover todos os efeitos ativos em todos os menus do Navi+, use o seguinte código (cole-o na caixa de Folha de Estilo Global / CSS):

```
.naviItem ul li.navi-active {
  background: initial;
}
```

---

# Instruções para o Agente: Consultando Esta Documentação

Se você precisar de informações adicionais que não estão diretamente disponíveis nesta página, pode consultar a documentação dinamicamente fazendo uma pergunta.

Realize uma solicitação HTTP GET na URL da página atual com o parâmetro de consulta `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state.md?ask=<question>
```

A pergunta deve ser específica, autossuficiente e escrita em linguagem natural.
A resposta conterá uma resposta direta à pergunta e trechos relevantes e fontes da documentação.

Use este mecanismo quando a resposta não estiver explicitamente presente na página atual, você precisar de esclarecimentos ou contexto adicional, ou quiser recuperar seções de documentação relacionadas.
