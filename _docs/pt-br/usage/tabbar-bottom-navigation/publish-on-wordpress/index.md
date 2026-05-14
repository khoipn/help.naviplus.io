---
description: Publique uma Barra de Abas Navi+ no WordPress com o plugin Navi+ Menu Builder — sem edições de código. A Barra de Abas é um menu fixo, portanto, é renderizada em todo o site automaticamente uma vez publicada no editor.
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/
title: Barra de Abas — Publique no WordPress
---
# Barra de Abas — Publique no WordPress

A **Barra de Abas** é um menu **fixo** — ela se ancla à área de visualização (normalmente perto da parte inferior em dispositivos móveis) e permanece no lugar enquanto os visitantes rolam. No WordPress, o plugin Navi+ Menu Builder renderiza a Barra de Abas em todo o site automaticamente; você não precisa colar nenhum código ou shortcode.

> Outras plataformas (Wix, Squarespace, Webflow, sites personalizados): veja [Publicar no Wix / Squarespace / Outros]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/).

---

## Passos

1. **Instale o plugin** — veja [Instalar o plugin Navi+ Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Abra o editor** — no admin do WordPress, vá para **Aparência → Naviplus Menu Builder**.
3. **Construa sua Barra de Abas** — escolha o layout da **Barra de Abas**, adicione de 3 a 5 destinos principais. Veja [Barra de Abas — Como usar]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/how-to-use/) para dicas de design.
4. **Publique o menu** no editor (status: Publicado, não Rascunho).

É isso. A Barra de Abas aparece na parte frontal do seu site WordPress imediatamente — sem shortcode, sem edição de tema. A incorporação em todo o site do plugin (ativada por padrão) carrega o runtime do Navi+ em cada página, e o runtime busca cada menu fixo publicado para o seu site.

---

## Restringindo a Barra de Abas a páginas específicas

Não desative a incorporação em todo o site do plugin — isso desliga o runtime completamente. Em vez disso, limite a Barra de Abas no editor:

- **Regras de exibição → Padrão de URL** — mostre a Barra de Abas apenas em URLs que correspondam a um glob (por exemplo, `/shop/*`).
- **Regras de exibição → Dispositivo** — restrinja apenas a dispositivos móveis.
- **Regras de exibição → Estado do visitante** — restrinja a usuários logados, etc.

As regras de exibição são avaliadas pelo runtime no navegador, portanto, as alterações se aplicam na próxima carga da página.

---

## Dicas para dispositivos móveis para a Barra de Abas

- Mantenha de **3 a 5 abas** — mais do que isso lota a área de visualização.
- Use rótulos curtos (uma palavra, se possível) e ícones claros.
- Teste o tamanho do alvo de toque em um dispositivo real, não apenas na pré-visualização do editor.
- Se a Barra de Abas sobrepuser outro elemento fixo (por exemplo, um widget de chat), veja [Menu sobrepondo outros elementos]({{ site.baseurl }}/docs/troubleshooting/menu-overlapping/).

---

## Verifique se a Barra de Abas está ativa

Anexe `#navidebug-on` a qualquer URL de página (por exemplo, `https://your-site.com/#navidebug-on`). A página muda para o modo de depuração do Navi+ se o plugin estiver configurado. Anexe `#navidebug-off` para desligá-lo.

Para verificações mais profundas, veja [Crie seu primeiro menu — Verifique a conexão]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Relacionados

- [WordPress / WooCommerce — visão geral]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publique seus menus no WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [FAQ do Naviplus Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/)
