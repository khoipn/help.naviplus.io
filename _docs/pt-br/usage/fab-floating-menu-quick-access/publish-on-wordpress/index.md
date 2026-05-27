---
description: Publique um Navi+ FAB (Floating Action Button) no WordPress com o plugin Navi+ AI Menu Builder. O FAB é um menu fixo — uma vez publicado no editor, ele aparece em todo o site automaticamente.
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/
title: FAB — Publicar no WordPress
---
# FAB — Publicar no WordPress

A **FAB (Floating Action Button)** é um **menu fixo** — ele flutua acima da página (tipicamente em um canto) e permanece no lugar enquanto os visitantes rolam. No WordPress, o plugin Navi+ AI Menu Builder o renderiza em todo o site automaticamente; você não precisa colar nenhum código ou shortcode.

> Outras plataformas (Wix, Squarespace, Webflow, sites personalizados): veja [Publicar no Wix / Squarespace / Outros]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress-woocommerce-wix-others/).

---

## Passos

1. **Instale o plugin** — veja [Instalar o plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Construa seu FAB** em **Aparência → Naviplus Menu Builder**. Veja [FAB — Como usar]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/) para orientações de design (ação única vs. menu expansível).
3. **Publique o menu** no editor (status: Publicado, não Rascunho).

O FAB aparece em cada página do seu site WordPress imediatamente. Sem shortcode, sem edição de tema.

---

## Restringindo o FAB a páginas ou públicos específicos

Não desative a incorporação do plugin em todo o site (isso desliga o runtime completamente). Escopo o FAB no editor:

- **Regras de exibição → Padrão de URL** — mostrar em `/contact*` apenas, ocultar em `/checkout*`, etc.
- **Regras de exibição → Dispositivo** — desktop, mobile, ou ambos.
- **Regras de exibição → Estado do visitante** — apenas usuários logados, etc.

---

## Dicas para mobile

- Escolha um canto que não conflite com a interface do navegador em mobile (o canto inferior direito é um padrão seguro; o centro inferior pode conflitar com a barra de URL no iOS).
- Certifique-se de que o FAB não sobreponha uma Tab Bar ou widget de chat. Veja [Menu sobrepondo outros elementos]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).
- Se o FAB se expandir em um menu, mantenha a lista de ações curta (3–6 itens) — listas longas são desconfortáveis ao toque.

---

## Verifique se o FAB está ativo

Anexe `#navidebug-on` a qualquer URL de página. A página muda para o modo de depuração do Navi+ se o plugin estiver configurado. Veja [Crie seu primeiro menu — Verifique a conexão]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Relacionados

- [WordPress / WooCommerce — visão geral]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publique seus menus no WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [FAB — Como usar]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/how-to-use/)
