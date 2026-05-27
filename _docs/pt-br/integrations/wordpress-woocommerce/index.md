---
description: Navi+ AI Menu Builder é o plugin oficial do WordPress para Navi+. Instale-o, crie menus dentro do WordPress e publique-os em todo o site ou via o shortcode [naviwp] — sem edições de código, sem injetores de cabeçalho.
lang: pt-br
layout: default
permalink: /pt-br/docs/integrations/wordpress-woocommerce/
title: WordPress / WooCommerce — Navi+ AI Menu Builder
---
# WordPress / WooCommerce — Navi+ AI Menu Builder

Se o seu site roda em **WordPress** ou **WooCommerce**, a maneira recomendada de publicar menus Navi+ é o plugin oficial **Navi+ AI Menu Builder** no WordPress.org. O nome completo da listagem no WordPress.org é **Naviplus Menu Builder**.

> Página do plugin: <https://wordpress.org/plugins/naviplus-menu-builder/>
> Fórum de suporte: <https://wordpress.org/support/plugin/naviplus-menu-builder/>

Esta página é o ponto de entrada: instale o plugin, habilite menus em todo o site ou incorpore menus por posição, e escolha layouts que funcionem bem em dispositivos móveis (Tab Bar, Slide / hamburger, FAB).

---

## 1. Requisitos

- **WordPress 5.8** ou mais recente (usar a versão mais recente do WordPress que seu host suporta é recomendado).
- Acesso de administrador — necessário para instalar plugins e editar **Aparência**.
- Internet de saída — os menus são projetados no serviço Navi+ e renderizados através de um script carregado de `https://live.naviplus.app/start.js`. Veja a seção [8. Serviços externos & privacidade](#8-external-services--privacy).

---

## 2. Instale o plugin

Três métodos de instalação são detalhados na página de instalação dedicada: **[Instale o plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/)** — pesquisa de administrador (recomendado), upload de ZIP ou FTP / gerenciador de arquivos.

Após a ativação, o plugin aparece em **Aparência → Naviplus Menu Builder** na barra lateral do administrador.

---

## 3. Após a ativação

1. Vá para **Aparência → Naviplus Menu Builder**.
2. Crie seu primeiro menu seguindo o fluxo na tela. O plugin **conecta automaticamente** seu site ao Navi+ na primeira salvamento — você **não** precisa criar uma conta Navi+ previamente.
3. Projete o layout no **editor visual do Navi+ AI Menu Builder**, aberto a partir do painel do WordPress.

A estrutura e os estilos do menu vivem no **serviço Navi+**; o WordPress armazena apenas um **identificador de site** que permite ao Navi+ reconhecer sua instalação — isso **não** é sua senha do WordPress e não é um token que você precisa gerenciar.

Passo a passo completo: **[Crie seu primeiro menu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.

---

## 4. Escolhendo um layout para visitantes móveis

Navi+ suporta vários tipos de menu. Para sites com foco em dispositivos móveis, estes geralmente funcionam melhor:

| Layout | Quando usar |
| --- | --- |
| **Tab Bar** | Acesso rápido a 3–5 destinos primários, ancorados perto da parte inferior da viewport (ou onde quer que você o coloque no editor). |
| **Slide Menu (hamburger)** | Muitos itens ou categorias profundas — economiza espaço em telas pequenas. |
| **Mega Menu** | Menus ricos em conteúdo — ótimo em desktop; em dispositivos móveis, verifique os alvos de toque e o comportamento de rolagem no editor. |
| **Grid Menu** | Atalhos de categoria e páginas hub. |
| **FAB (botão flutuante)** | Ações rápidas (suporte, contato) que não devem ocupar espaço no cabeçalho. |

Após ajustar o layout, **sempre teste em um dispositivo real** — ou pelo menos no modo responsivo do navegador.

Para instruções específicas do WordPress por tipo de menu:

- **[Tab Bar — Publicar no WordPress]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/)**
- **[Mega Menu (Desktop) — Publicar no WordPress]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/)**
- **[Mega Menu (Mobile) — Publicar no WordPress]({{ site.baseurl }}/docs/usage/mega-menu-mobile/publish-on-wordpress/)**
- **[Slide Menu — Publicar no WordPress]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/publish-on-wordpress/)**
- **[FAB — Publicar no WordPress]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/)**
- **[Grid Menu — Publicar no WordPress]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress/)**

Para uma comparação completa, veja **[Visão geral: Escolha o menu certo]({{ site.baseurl }}/docs/usage/explore-common-menus/)**.

---

## 5. Exibir menus em todo o site

- No admin do plugin, você pode **habilitar a incorporação em todo o site** (incorporação global). Quando ativado, o runtime é injetado em cada página e menus fixos (Tab Bar, FAB, Slide) são renderizados automaticamente em todo o site.
- Se você quiser apenas menus em algumas páginas (por exemplo, páginas de destino apenas para dispositivos móveis), **desative a incorporação em todo o site** e use o shortcode (seção 6).

O rótulo exato e a posição do interruptor podem variar de acordo com a versão do plugin — procure na tela de configurações do plugin em **Aparência → Naviplus Menu Builder**.

---

## 6. Incorpore um menu em um post, página ou widget (shortcode)

Use o shortcode:

```text
[naviwp embed_id="YOUR-EMBED-ID"]
```

Substitua `YOUR-EMBED-ID` pelo **Embed ID** do seu menu (mostrado no editor no painel de publicação do menu — parece com `SF-123456789`).

**Gutenberg (editor de blocos):**

- Insira um bloco **Naviplus Menu Builder** e cole seu **Embed ID** na barra lateral do bloco, **ou**
- Adicione um bloco genérico **Shortcode** com `[naviwp embed_id="..."]`, **ou**
- Cole `[naviwp embed_id="..."]` diretamente dentro de um bloco **Parágrafo** — o plugin o reconhece.

**Elementor / Divi / Bricks / outros construtores:**

- Use o widget **Shortcode** do construtor e cole `[naviwp embed_id="..."]`.

Mais detalhes e todos os três métodos do Gutenberg: **[Publique seus menus]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)**.

---

## 7. Desativar ou ocultar temporariamente menus

- **Desative o plugin** → o runtime para de carregar; nenhum menu Navi+ é renderizado em qualquer lugar do seu site.
- **Desative a incorporação em todo o site** no admin do plugin → os menus só são renderizados em páginas que incluem um shortcode `[naviwp]` ou bloco.
- **Mude um menu para Rascunho** no editor → esse menu específico não é mais publicado, mesmo que o runtime esteja carregado.
- **Remova um shortcode** de uma página ou widget → o menu desaparece apenas naquele local.

Seus menus no serviço Navi+ são preservados em todos esses casos. Reinstalar ou reativar o plugin e reutilizar os mesmos IDs de incorporação os traz de volta sem nenhuma reconstrução.

---

## 8. Serviços externos & privacidade

O plugin se conecta ao serviço Navi+ AI Menu Builder para criar e **renderizar** seus menus. Os dados trocados podem incluir (sem limitação): seu **domínio do site**, sua **configuração de menu**, e dados mínimos de uso necessários para renderização.

- Política de privacidade: <https://naviplus.io/privacy>
- Carregador de script: `https://live.naviplus.app/start.js`

Se você opera sob uma estrutura de privacidade que exige a divulgação de serviços de terceiros (por exemplo, GDPR), liste **Navi+** e a URL do carregador de script em seu aviso de privacidade do site.

---

## 9. Links úteis

| Recurso | URL |
| --- | --- |
| Página do plugin WordPress.org | <https://wordpress.org/plugins/naviplus-menu-builder/> |
| Fórum de suporte WordPress.org | <https://wordpress.org/support/plugin/naviplus-menu-builder/> |
| Página inicial Naviplus | <https://naviplus.io> |
| Política de privacidade | <https://naviplus.io/privacy> |
| FAQ do plugin (este site) | [Navi+ AI Menu Builder FAQ]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/) |

---

## 10. Resumo rápido

1. **Instale & ative** a partir do WordPress.org ou um upload de ZIP.
2. Abra **Aparência → Naviplus Menu Builder** → crie seu menu e projete-o no editor do Navi+.
3. Escolha um layout adequado para dispositivos móveis: **Tab Bar** / **hamburger** / **FAB**.
4. Escolha a exibição **em todo o site** ou `[naviwp embed_id="..."]` para páginas específicas.
5. **Teste em um dispositivo real** antes de ir ao ar.

*Esta página pode ser atualizada à medida que novas versões do plugin são lançadas; a versão canônica e o changelog estão na [página do plugin WordPress.org](https://wordpress.org/plugins/naviplus-menu-builder/).*
