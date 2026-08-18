---
description: 'Guia breve para estilizar o menu com **CSS personalizado para este menu**, **Classes reutilizáveis (CSS)** e o HTML padrão. O menu tem **três níveis**: barra principal...'
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/menu-structure-and-css/
title: Estrutura do menu e CSS
---
# Estrutura do menu e CSS

Guia breve para estilizar o menu com **CSS personalizado para este menu**, **Classes reutilizáveis (CSS)** e o HTML padrão. O menu tem **três níveis**: barra principal, submenu, submenu aninhado.

> **Nota:** Esta demonstração cobre um menu **Slide/Padrão**. A estrutura é a mesma para a maioria dos tipos de menu; TABBAR e Mega Menu podem ter pequenas diferenças — use DevTools na página ao vivo para confirmar.

***

### CSS personalizado — o que digitar

Em **Avançado → CSS personalizado para este menu**, Navi+ **adiciona um prefixo** (incluindo `#SF-…` e escopo de menu). Escreva **seletores normais apenas** — **não** digite `#SF-12345678` você mesmo.

```css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

**`&` = o menu em si** (o contêiner `#SF-…`). É opcional — mas é a forma clara de estilizar todo o menu, e a única forma de fazer isso dentro de `@media`:

```css
&              { background: #111; }        /* o contêiner do menu */
&:hover        { box-shadow: 0 4px 12px rgba(0,0,0,.15); }
& .inner-level1 { padding: 12px 16px; }     /* '& ' com espaço = dentro do menu, igual a .inner-level1 */

/* Responsivo — apenas em telas pequenas */
@media (max-width: 768px) {
  & { padding: 6px; }
  .name { font-size: 13px; }
}
```

**Você não tem que** usar `&` — CSS sem ele continua funcionando exatamente como antes (`.inner-level1 { … }` não muda). `&` é apenas um atalho para "este menu".

Use **`#SF-…` manualmente** apenas quando você **não** estiver usando esta caixa (por exemplo CSS no arquivo do tema).

**Folha de estilo global/CSS** é um campo **separado**: se aplica ao **site inteiro** e não é limitado a um menu — use com cuidado.

**Classes reutilizáveis (CSS):** defina `.suaClasse { … }` na tabela Reutilizável e atribua a classe aos itens — as regras permanecem no mesmo pacote CSS interno; você não precisa adicionar `#SF-…` na caixa. A classe aparece no **`li`**.

Não envolva o conteúdo em uma tag `<style>` na caixa — apenas CSS simples.

***

### CSS por item (estilize apenas um item)

Cada item de menu tem sua **própria** caixa CSS: **editar o item → Avançado → Folha de estilo interna/CSS**. Isso é separado de **CSS personalizado para este menu** (que é em nível de menu). O CSS por item **viaja com o item** — se você copiar ou duplicar o item, seu estilo vem com ele.

> **Guia completo:** para a estrutura HTML de um item e cada sintaxe CSS, veja [Estrutura do item de menu e CSS](/docs/usage/menu-item-structure-and-css/).

Escreva CSS simples. **`&` significa *este item*** (a própria linha do item/`li`) — como `&` em Sass:

```css
& { background: #fff5f5; border-radius: 10px; }
&:hover { background: #ffe4e6; }
```

Alve as **partes internas** do item com seletores de classe normais (os mesmos nomes do resto do menu: `.inner`, `.name`, `.description`, `.icon`, `.image`, `.arrow`):

```css
.name { color: #b91c1c; }
.icon i { font-size: 22px; }
& .description { opacity: 0.8; }
```

Um **espaço após `&`** significa "uma parte dentro do item", então `& .name` e `.name` são a mesma coisa. `&` escrito **sem espaço** (`&:hover`, `&.active`) estiliza a própria linha do item.

**Responsivo (`@media`)** funciona — ótimo para ajustes específicos para celular. Dentro de `@media` você deve usar um seletor (é CSS padrão), então use `&` para o próprio item:

```css
@media (max-width: 768px) {
  & { padding: 8px; }
  .name { font-size: 13px; }
}
```

Notas:

* **Nenhum `#SF-…` necessário** e **nenhuma tag `<style>`** — Navi+ automaticamente limita tudo a este item, portanto nunca afeta outros itens. O CSS também viaja com o item se você o duplicar.
* Você ainda pode escrever uma **declaração nua** sem seletor (`color: red;`) — se aplica à linha deste item. Esse estilo antigo continua funcionando, mas `&` é mais claro e é a única forma de estilizar a linha dentro de `@media`.
* Se uma propriedade for definida aqui e nas configurações visuais do item (Media box/Inner box shadow, etc.), a **configuração visual vence**. Remova/sobrescreva essa configuração se quiser que o CSS tenha precedência.
* Para **mostrar/ocultar** um item por dispositivo, use **Mostrar em celular/Mostrar em desktop** no editor — não CSS. No **Wix**, `@media` baseado em viewport pode não corresponder à tela real; prefira as configurações Display lá.
* Use o **ícone de expandir** (canto superior direito da caixa) para abrir um editor de código maior; pressione **Esc** ou **Concluído** para fechar.

Use **CSS por item** para um ajuste único em um único item; use **CSS personalizado para este menu** (com `.inner-level1`, `[data-name="…"]`, etc.) quando você quiser estilizar muitos itens ou níveis inteiros de uma vez.

***

### Demonstração detalhada: uma ramificação de três níveis (ícone, imagem, nome, descrição)

Rótulos de exemplo: **Shop** (nível 1: **ícone** + nome + descrição) → **Clothing** (nível 2: **imagem** + nome) → **T-Shirts** (nível 3: **ícone** + nome + descrição). Isto mostra **ambos os tipos de mídia** e **descrição**.

O menu inteiro se encaixa em um bloco:

```html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` é o **ID de incorporação** do menu — visível no painel Navi+ (o crachá azul ao lado do título do menu) e em DevTools na página ao vivo.

#### Ordem dentro de cada `div.inner` (runtime)

1. **`span.arrow`** — seta (submenu/celular, depende do tipo de menu).
2. *(Opcional)* **`span.cart_count`** — apenas quando o item usa crachá do carrinho com contagem.
3. **Mídia — um de:**
   * **Ícone (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Imagem:** `div.image-border` → `span.image-box` → `span.image` → `img`\
     \&#xNAN;*Nota:* se o item **tem uma imagem**, o app **mostra a imagem** e não renderiza o ícone para essa linha.
4. **`div.info`** → **`div.flexcol`** → **`span.name`** (rótulo) → **`div.description`** *(apenas se você preencher descrição no editor)*.
5. *(Opcional/SEO)* ícone ou imagem pode ser envolvido em **`a[href]`** — você pode ver `<a>…</a>` ao redor de `span.icon` ou do bloco de imagem em DevTools.

#### Explicação das classes `li`

| Classe                             | Significado                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | Profundidade deste item                                             |
| `is-parent-top`                   | Item de nível 1 que tem filhos                                 |
| `is-parent`                       | Item de nível 2+ que tem filhos                                |
| `data-name="…"`                   | Rótulo de item (atributo, útil para seletores CSS `[data-name]`) |

#### Demonstração HTML completa (classes/URLs ilustrativos)

```html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Shop">
      <!-- NÍVEL 1: ícone + nome + descrição -->
      <div class="inner inner-level1">
        <span class="arrow"></span>
        <!-- <span class="cart_count">3</span>  ← crachá do carrinho apenas -->

        <!-- ÍCONE: Remix Icon (ri-…) -->
        <span class="icon">
          <i class="ri-store-2-line"></i>
        </span>

        <div class="info">
          <div class="flexcol">
            <span class="name">Shop</span>
            <div class="description">Procure todas as categorias</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Clothing">
          <!-- NÍVEL 2: imagem + nome (sem descrição) -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- IMAGEM: quando definida, ícone não é renderizado -->
            <div class="image-border">
              <span class="image-box">
                <span class="image">
                  <img
                    src="https://cdn.shopify.com/…/clothing.jpg"
                    alt="Clothing"
                    title="Clothing"
                    loading="lazy"
                    decoding="async">
                </span>
              </span>
            </div>

            <div class="info">
              <div class="flexcol">
                <span class="name">Clothing</span>
                <!-- sem .description se descrição estiver vazia no editor -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="T-Shirts">
              <!-- NÍVEL 3: ícone + nome + descrição -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">T-Shirts</span>
                    <div class="description">Nova coleção</div>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </li>

      </ul>
    </li>

  </ul>
</div>
```

#### Trechos de mídia (para referência)

**Apenas ícone (sem imagem):**

```html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**Apenas imagem (URL de imagem definida no item):**

```html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### Exemplos de seletor para CSS personalizado (na caixa Navi+ — não digite `#SF-…`)

```css
/* Seta */
.inner-level1 .arrow { }

/* Ícone (qualquer nível) */
.inner-level2 .icon i { font-size: 20px; }

/* Imagem */
.inner-level2 .image img { border-radius: 8px; }

/* Título e descrição */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }

/* Alve por nome de item */
[data-name="Shop"] .name { color: red; }
```

**Lembre-se:** submenus de nível 2/3 ficam **dentro** do **`li`** pai, **depois** do `div.inner` pai — não como filhos diretos de `ul.navigation`.

**Mesma ramificação, diagrama de texto:**

```
Shop              ← nível 1 (barra principal)
  └─ Clothing     ← nível 2 (primeiro submenu)
        └─ T-Shirts ← nível 3 (submenu aninhado)
```

***

### Referência rápida (classes sugeridas)

| Nível | Linha (`li`) | Wrapper de conteúdo | Próximo submenu                        |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1     | `level-1`  | `.inner-level1` | `ul.children[menulevel="2"]`        |
| 2     | `level-2`  | `.inner-level2` | `ul.children[menulevel="3"]` se houver |
| 3     | `level-3`  | `.inner-level3` | —                                   |

`menulevel="2"` / `"3"` é o índice **daquele** painel de submenu — não igual a `level-1` em um item de nível superior.

***

### Dicas rápidas

* Alve **uma profundidade** com `.inner-level1`, `.inner-level2`, `.inner-level3` em vez de apenas `.inner`.
* Estilize um **painel inteiro** (fundo, raio): `ul.children[menulevel="2"]` ou `[menulevel="3"]`.
* Texto: `.info` → `.flexcol` → `.name`, `.description`.
* Ícone: `.icon` ou `.icon i` — imagem: `.image-border`, `.image img` (veja demonstração detalhada acima).
* Seta: `.arrow` (geralmente primeiro dentro de `.inner`).
* Alve um item específico por nome: `[data-name="Home"] .name { … }`.

***

### Classes faltando na loja?

Limpe o cache do tema, republique o menu ou verifique a versão do script. Use DevTools para confirmar nomes de classe na página ao vivo.

***

Documentação de suporte — **Navi+**
