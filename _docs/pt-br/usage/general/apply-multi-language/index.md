---
description: 'Navi+ suporta totalmente múltiplas línguas em duas partes:'
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/general/apply-multi-language/
title: Aplicar múltiplas línguas
---
# Aplicar múltiplas línguas

Navi+ suporta totalmente múltiplas línguas em duas partes:

**1) Use a sintaxe para exibir automaticamente a língua correta.**

Por exemplo, imagine que você tem uma Tabbar do Navi+ exibida em seu site com 3 línguas: inglês (padrão), francês e vietnamita. O código curto para francês é `fr` e para vietnamita é `vi`.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F6k6V0wCgNOrg7o30S7PT%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=5eb3293f-9f55-4917-87e1-dacff684ca9e" alt=""><figcaption></figcaption></figure>

Para exibir o item do menu **Home** na língua certa, use esta sintaxe:

```
Home <fr: Maison> <vi: Trang chủ>
```

Quando sua Tabbar é exibida, o Navi+ verificará automaticamente a língua atual.

* Se o padrão é inglês, ele mostra **Home**.
* Se o francês é selecionado, ele mostra **Maison**.
* Se o vietnamita é selecionado, ele mostra **Trang chủ**.

Isso funciona tanto para os campos **description** quanto **link-to**.

2\) Crie um menu de troca de língua no Navi+

Navi+ suporta uma sintaxe especial que permite que você troque de línguas diretamente dos itens do seu menu.

* **Passo 1:** (Opcional) Adicione ícones de bandeira se desejar. Você pode baixar ícones de bandeira de sites como [Flaticon](https://www.flaticon.com "Flaticon") (Por exemplo: <https://www.flaticon.com/authors/flags/rectangular?author_id=1&type=standard>).  
* **Passo 2:** Use a seguinte sintaxe para trocar de línguas:

```
open:ChangeLanguage(fr)
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FdTn5Nk2ETEUXO7unkIu9%2FHelp.MenuTree.1.1.2-1.png?alt=media&#x26;token=e1f13362-de09-4438-ad5a-a075a9750b7d" alt=""><figcaption></figcaption></figure>

---

# Instruções do Agente: Consultando Esta Documentação

Se você precisar de informações adicionais que não estão diretamente disponíveis nesta página, você pode consultar a documentação dinamicamente fazendo uma pergunta.

Realize uma solicitação HTTP GET na URL da página atual com o parâmetro de consulta `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/usage/general/apply-multi-language.md?ask=<question>
```

A pergunta deve ser específica, autossuficiente e escrita em linguagem natural.  
A resposta conterá uma resposta direta à pergunta e trechos relevantes e fontes da documentação.

Use este mecanismo quando a resposta não estiver explicitamente presente na página atual, você precisar de esclarecimentos ou contexto adicional, ou quiser recuperar seções de documentação relacionadas.
