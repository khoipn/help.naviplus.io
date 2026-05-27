---
description: Após ativar o plugin Navi+ AI Menu Builder, abra Aparência → Naviplus Menu Builder, crie seu primeiro menu no editor visual e deixe o plugin conectar automaticamente seu site WordPress ao Navi+.
lang: pt-br
layout: default
permalink: /pt-br/docs/integrations/wordpress-woocommerce/get-started/
title: Crie seu primeiro menu
---
# Crie seu primeiro menu

Uma vez que o plugin está ativado, você constrói menus dentro do WordPress — sem cadastro separado, sem token para colar.

---

## 1. Abra o construtor de menus

No admin do WordPress, vá para:

> **Aparência → Naviplus Menu Builder**

Isso abre o editor visual do Navi+ dentro do seu painel do WordPress.

---

## 2. Crie seu primeiro menu

Siga o fluxo na tela para criar um menu. Quando você salva o primeiro menu, o plugin **conecta automaticamente** seu site ao Navi+:

- Ele registra um **identificador de site** que permite que o serviço Navi+ reconheça sua instalação do WordPress.
- Ele salva esse identificador no WordPress para que as alterações subsequentes do menu sejam direcionadas ao site correto.

> O identificador de site **não** é sua senha do WordPress e **não** é um token do Navi+ que você precisa gerenciar. É um valor opaco que o plugin gerencia para você.

Você **não** precisa criar uma conta Navi+ antes de instalar o plugin — a primeira salvamento do menu cuida da conexão.

---

## 3. Desenhe o layout

Dentro do editor, escolha um tipo de menu (Tab Bar, Slide / hamburger, Mega Menu, Grid, FAB), e então desenhe o layout. Documentos do editor:

- [Visão geral dos tipos de menu]({{ site.baseurl }}/docs/usage/explore-common-menus/)
- [Itens de menu — itens, links, ícones, badges]({{ site.baseurl }}/docs/menu-items/item-overview/)
- [Visão geral do design]({{ site.baseurl }}/docs/design/design-overview/)

A estrutura e os estilos do menu são armazenados no serviço Navi+; o WordPress armazena apenas o identificador do site.

---

## 4. Verifique a conexão

Abra a parte frontal do seu site. Menus fixos (Tab Bar, FAB) que você marcar como **Publicado** no editor aparecem automaticamente em todo o site.

Para confirmar que o runtime está carregando, use:

- **Modo de depuração (todos):** anexe `#navidebug-on` a qualquer URL — por exemplo, `https://your-site.com/#navidebug-on`. A página muda para o modo de depuração do Navi+ se o plugin estiver configurado. Use `#navidebug-off` para desligá-lo.
- **Console (desenvolvedores):** abra DevTools → Console; você deve ver uma mensagem verde `Using Navi+..`.

---

## Próximo passo

Para Mega Menu e Grid Menu — colocados em locais específicos em uma página — veja **[Publique seus menus]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)** para o `[naviwp]` shortcode e bloco Gutenberg.
