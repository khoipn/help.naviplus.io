---
description: 'Navi+ suporta totalmente multi-idioma em duas partes:'
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/general/apply-multi-language/
title: Aplicar multi-idioma
---
# Aplicar multi-idioma

Navi+ suporta totalmente multi-idioma em duas partes:

**1) Use a sintaxe para exibir automaticamente o idioma correto.**

Por exemplo, imagine que você tem uma Tabbar do Navi+ exibida em seu site com 3 idiomas: inglês (padrão), francês e vietnamita. O código curto para francês é `fr` e para vietnamita é `vi`.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F6k6V0wCgNOrg7o30S7PT%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=5eb3293f-9f55-4917-87e1-dacff684ca9e" alt=""><figcaption></figcaption></figure>

Para exibir o item de menu **Home** no idioma correto, use esta sintaxe:

```
Home <fr: Maison> <vi: Trang chủ>
```

Quando sua Tabbar é exibida, o Navi+ verificará automaticamente o idioma atual.

* Se o padrão for inglês, ele mostrará **Home**.
* Se o francês for selecionado, ele mostrará **Maison**.
* Se o vietnamita for selecionado, ele mostrará **Trang chủ**.

Isso funciona tanto para os campos **description** quanto **link-to**.

2) Crie um menu de troca de idioma no Navi+

Navi+ suporta uma sintaxe especial que permite que você troque de idiomas diretamente dos itens do seu menu.

* **Passo 1:** (Opcional) Adicione ícones de bandeira se desejar. Você pode baixar ícones de bandeira de sites como [Flaticon](https://www.flaticon.com "Flaticon") (Por exemplo: <https://www.flaticon.com/authors/flags/rectangular?author_id=1&type=standard>).  
* **Passo 2:** Use a seguinte sintaxe para trocar de idiomas:

```
open:ChangeLanguage(fr)
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FdTn5Nk2ETEUXO7unkIu9%2FHelp.MenuTree.1.1.2-1.png?alt=media&#x26;token=e1f13362-de09-4438-ad5a-a075a9750b7d" alt=""><figcaption></figcaption></figure>
