---
description: Alguns mega menus podem ser muito altos. Nesse caso, expandir um menu de nível 3 pode não deixar espaço suficiente. Quando isso acontece, você deve fixar o menu de nível 3 no topo em vez disso.
lang: pt-br
layout: default
permalink: /pt-br/docs/frequently-asked-questions/customize-user-interface-ui/align-level-3-submenu-in-mega-menu/
title: Alinhar submenu de nível 3 no mega menu?
---
# Alinhar submenu de nível 3 no mega menu?

Alguns mega menus podem ser muito altos. Nesse caso, expandir um menu de nível 3 pode não deixar espaço suficiente. Quando isso acontece, você deve fixar o menu de nível 3 no topo em vez disso.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fro68elhDmY0dYZVM33lW%2F1.1.png?alt=media&#x26;token=f8dc87a7-e10d-4ac7-a398-a4b5220ce72c" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FX4M1o8bgaNDF6VYTtini%2F1.2.png?alt=media&#x26;token=e2d65a92-418c-4c4a-bff7-51a5b9044d41" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F2tyR71IfHrMmPmZN0Ewi%2F1.3.png?alt=media&#x26;token=cdd6854c-2782-40ec-a959-a74d576eb177" alt=""><figcaption></figcaption></figure>

Cole isso na caixa de Folhas de Estilo Internas / CSS:

```
ul.children[menulevel="2"] li.child.is-parent.menu-expand {
  position: initial;
}

ul.children[menulevel="2"] li.child.is-parent.menu-expand ul.children[menulevel="3"]{
  top: 0px;
}
```

---

# Instruções para o Agente: Consultando Esta Documentação

Se você precisar de informações adicionais que não estão diretamente disponíveis nesta página, pode consultar a documentação dinamicamente fazendo uma pergunta.

Realize uma solicitação HTTP GET na URL da página atual com o parâmetro de consulta `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/customize-user-interface-ui/align-level-3-submenu-in-mega-menu.md?ask=<question>
```

A pergunta deve ser específica, autossuficiente e escrita em linguagem natural.
A resposta conterá uma resposta direta à pergunta e trechos relevantes e fontes da documentação.

Use esse mecanismo quando a resposta não estiver explicitamente presente na página atual, você precisar de esclarecimentos ou contexto adicional, ou quiser recuperar seções de documentação relacionadas.
