---
description: Publique menus Navi+ no WordPress usando o plugin Navi+ Menu Builder — menus fixos são renderizados em todo o site automaticamente, enquanto menus de seção são colocados via o shortcode [naviwp] ou bloco Gutenberg.
lang: pt-br
layout: default
permalink: /pt-br/docs/integrations/wordpress-woocommerce/publish-menus/
title: Publique seus menus no WordPress
---
# Publique seus menus no WordPress

Navi+ tem dois modos de publicação — **fixo** e **seção** — e o plugin do WordPress suporta ambos. O modo que se aplica depende do tipo de menu.

| Tipo de menu | Modo | Onde aparece |
| --- | --- | --- |
| Tab Bar | Fixo | Ancorado à viewport, em todo o site |
| FAB | Fixo | Botão flutuante, em todo o site |
| Slide Menu | Fixo / contextual | Acionado ao tocar em qualquer elemento |
| Mega Menu (Desktop) | Seção | Na posição onde você o incorpora |
| Mega Menu (Mobile) | Seção | Na posição onde você o incorpora |
| Grid Menu | Seção | Na posição onde você o incorpora |

Veja [Visão geral da publicação]({{ site.baseurl }}/docs/publish/publish-overview/) para a comparação completa entre fixo e seção.

---

## Menus fixos — Tab Bar, FAB, Slide

Com o plugin instalado e seu primeiro menu salvo, menus fixos marcados como **Publicado** no editor são renderizados automaticamente em cada página do seu site.

Você não precisa inserir nada. As regras de exibição (dispositivo, padrão de URL, estado de login) são avaliadas pelo runtime do Navi+ no navegador.

### Alternando a incorporação em todo o site

O admin do plugin inclui um interruptor para incorporação em todo o site:

- **Ativado (padrão):** o runtime é injetado no `<head>` de cada página; menus fixos são renderizados em todo o site.
- **Desativado:** o runtime só carrega em páginas que incluem um `[naviwp]` shortcode ou bloco. Use isso se você quiser que os menus apareçam em um pequeno conjunto de páginas (por exemplo, páginas de destino apenas para mobile).

Se um menu fixo não aparecer, verifique:

- O menu está **Publicado** no editor (não rascunho).
- As regras de exibição correspondem à página que você está testando.
- O runtime está carregado — veja a [seção de verificação]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Menus de seção — Mega Menu, Grid

Menus de seção precisam ser colocados em um local específico em uma página. O plugin oferece três maneiras.

### Método 1 — Shortcode (recomendado)

Em qualquer post, página ou widget que reconheça shortcode:

```text
[naviwp embed_id="SF-123456789"]
```

Substitua `SF-123456789` pelo **ID de Incorporação** do seu menu (mostrado no editor no painel de publicação do menu).

### Método 2 — Bloco Gutenberg

No editor de blocos:

1. Clique em **+** para inserir um novo bloco.
2. Pesquise por **Naviplus Menu Builder**.
3. Insira o bloco e cole o **ID de Incorporação** do seu menu na barra lateral do bloco.

O bloco renderiza um espaço reservado vazio no editor e é substituído pelo menu ao vivo na interface. Você também pode adicionar um bloco de **Shortcode** e colar `[naviwp embed_id="..."]` — isso funciona de forma idêntica.

### Método 3 — Dentro de um bloco de Parágrafo

O plugin reconhece `[naviwp ...]` shortcodes colados diretamente em um bloco de Parágrafo; você não precisa mudar para um bloco de Shortcode primeiro.

### Método 4 — Construtores de página (Elementor, Divi, Bricks, Oxygen)

Use o widget de **Shortcode** do construtor e cole `[naviwp embed_id="..."]`. Se um construtor não tiver um widget de Shortcode, um widget de **HTML** com o div de incorporação também funciona:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

O plugin já carrega o runtime do Navi+, então o menu é renderizado dentro desse contêiner.

---

## Um token, muitos menus

O plugin carrega o runtime uma vez por página e busca cada menu — fixo ou seção — do mesmo serviço Navi+. Para parar de publicar um menu, mude-o para **Rascunho** no editor; nenhuma alteração no WordPress é necessária.

---

## Plugins de cache (WP Rocket, W3 Total Cache, LiteSpeed Cache)

O runtime do Navi+ é servido de um CDN e é amigável ao cache. Você **não** precisa excluí-lo do cache de página. Após atualizar menus no editor, as alterações aparecem na próxima carga da página — nenhum flush de cache do WordPress é necessário, porque os menus são buscados em tempo de execução pelo navegador, não incorporados no HTML.

Se você ver uma saída desatualizada, geralmente é o cache do navegador. Um recarregamento forçado (Cmd/Ctrl + Shift + R) limpa isso.
