---
description: Perguntas frequentes sobre o plugin Navi+ Menu Builder para WordPress — preços, desempenho, WooCommerce, multisite, construtores de páginas, cache, privacidade e desinstalação.
lang: pt-br
layout: default
permalink: /pt-br/docs/integrations/wordpress-woocommerce/faq/
title: Navi+ Menu Builder FAQ
---
# Navi+ Menu Builder FAQ

<details>
<summary>O plugin é gratuito?</summary>
<p>Sim. O plugin em si é gratuito no WordPress.org. Sua assinatura Navi+ (Starter / Business / Elite) é o que determina quais tipos de menu e cotas estão disponíveis. Veja <a href="{{ site.baseurl }}/docs/frequently-asked-questions/navi-plans-starter-business-and-elite/">Planos &amp; Preços</a>.</p>
</details>

<details>
<summary>Preciso de uma conta Navi+ antes de instalar?</summary>
<p>Não. Quando você salva seu primeiro menu em <strong>Aparência → Naviplus Menu Builder</strong>, o plugin conecta automaticamente seu site ao serviço Navi+ — sem cadastro separado, sem token para colar.</p>
</details>

<details>
<summary>O plugin desacelera meu site?</summary>
<p>Sem impacto mensurável. O plugin adiciona apenas uma única <code>&lt;script async&gt;</code> tag em <code>&lt;head&gt;</code> que carrega o runtime do Navi+ (~4&nbsp;KB) do Cloudflare/BunnyCDN. O runtime é totalmente assíncrono e não bloqueia a renderização da página. O overhead típico na primeira carga é de 100–200&nbsp;ms; cargas subsequentes são de 0&nbsp;ms devido ao cache HTTP.</p>
</details>

<details>
<summary>Funciona com WooCommerce?</summary>
<p>Sim. As páginas do WooCommerce são páginas padrão do WordPress, então os menus são renderizados nas páginas de loja, produto, carrinho e checkout sem configuração extra. Use regras de exibição no editor (URL contém <code>/cart</code>, <code>/checkout</code>, etc.) para controlar onde os menus aparecem.</p>
</details>

<details>
<summary>Funciona no WordPress Multisite?</summary>
<p>Sim. Ative o plugin por site (Ativação em Rede também é suportada) e configure os menus de cada site a partir de sua própria <strong>Aparência → Naviplus Menu Builder</strong>. Cada site se conecta automaticamente ao Navi+ de forma independente quando seu primeiro menu é salvo.</p>
</details>

<details>
<summary>Vai conflitar com meu tema ou construtor de páginas (Elementor, Divi, Bricks, Oxygen)?</summary>
<p>Sem conflitos conhecidos. Os menus são renderizados em seus próprios contêineres e usam estilos isolados. Para inserir um menu de seção dentro de um construtor de páginas, use um widget de <strong>Código de Acesso</strong> com <code>[naviwp embed_id="SF-..."]</code> — ou um widget de <strong>HTML</strong> com o div de incorporação.</p>
</details>

<details>
<summary>Posso usar o plugin e o script genérico de incorporação ao mesmo tempo?</summary>
<p>Não — escolha um. O plugin já injeta o runtime do Navi+, então uma tag de script manual carregaria duas vezes. Se você já incorporou o script em seu tema ou via um injetor de cabeçalho, remova esse trecho antes de ativar o plugin.</p>
</details>

<details>
<summary>Atualizei um menu, mas não vejo a mudança no meu site.</summary>
<p>Os menus são buscados em tempo de execução, então um flush de cache do WordPress não é necessário. Se a mudança ainda não aparecer, faça um hard reload (Cmd/Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;R) para ignorar o cache do navegador. Para menus fixos, também confirme se o menu está definido como <strong>Publicado</strong> (não rascunho) e que suas regras de exibição correspondem à página.</p>
</details>

<details>
<summary>Como posso ocultar temporariamente todos os menus do Navi+?</summary>
<p>Duas opções:</p>
<ul>
<li><strong>Em todo o site:</strong> desative o "Injetar em todo o site" no admin do plugin — o runtime para de carregar, exceto em páginas com um <code>[naviwp]</code> shortcode/bloco.</li>
<li><strong>Por menu:</strong> mude o menu para <strong>Rascunho</strong> no editor.</li>
</ul>
</details>

<details>
<summary>Como desinstalo o plugin?</summary>
<p>Desative e exclua-o de <strong>Plugins → Plugins Instalados</strong>. O plugin armazena apenas o identificador do site e algumas opções em <code>wp_options</code>; a desinstalação os remove automaticamente. Seus menus no serviço Navi+ são preservados — se você reinstalar mais tarde, poderá continuar usando os mesmos IDs de incorporação.</p>
</details>

<h2 id="privacy">Privacidade &amp; serviços externos</h2>

<p>O plugin se conecta ao serviço Navi+ Menu Builder para criar e renderizar menus. Os dados trocados podem incluir (mas não estão limitados a): seu <strong>domínio do site</strong>, sua <strong>configuração de menu</strong> e dados mínimos de uso necessários para renderizar menus.</p>

<ul>
<li>Política de privacidade: <a href="https://naviplus.io/privacy">https://naviplus.io/privacy</a></li>
<li>Carregador de script: <code>https://live.naviplus.app/start.js</code></li>
</ul>

<details>
<summary>Onde reporto um bug ou solicito um recurso?</summary>
<p>Use o fórum de suporte oficial: <a href="https://wordpress.org/support/plugin/naviplus-menu-builder/">https://wordpress.org/support/plugin/naviplus-menu-builder/</a>. Para perguntas sobre conta ou cobrança, envie um e-mail para <a href="mailto:support@naviplus.io">support@naviplus.io</a>.</p>
</details>
