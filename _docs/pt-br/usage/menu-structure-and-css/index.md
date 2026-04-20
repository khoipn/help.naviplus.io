---
description: 'Guia curto para estilizar o menu com **CSS Personalizado para este menu**, **Classes Reutilizáveis (CSS)** e o HTML padrão. O menu tem **três níveis**: barra principal...'
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/menu-structure-and-css/
title: Estrutura do menu e CSS
---
# Estrutura do menu e CSS

Guia curto para estilizar o menu com **CSS Personalizado para este menu**, **Classes Reutilizáveis (CSS)** e o HTML padrão. O menu tem **três níveis**: barra principal, submenu, submenu aninhado.

> **Nota:** Esta demonstração cobre um **Slide / Menu Padrão**. A estrutura é a mesma para a maioria dos tipos de menu; TABBAR e Mega Menu podem ter pequenas diferenças — use o DevTools na página ao vivo para confirmar.

***

### CSS Personalizado — o que digitar

Em **Avançado → CSS Personalizado para este menu**, o Navi+ **adiciona um prefixo** (incluindo `#SF-…` e escopo do menu). Escreva **apenas seletores normais** — não **digite** `#SF-12345678` você mesmo.

````css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

Use **`#SF-…` manualmente** apenas quando você **não** estiver usando esta caixa (por exemplo, CSS no arquivo do tema).

**Folha de Estilos Global / CSS** é um campo **separado**: aplica-se ao **site inteiro** e não está restrito a um menu — use com cuidado.

**Classes Reutilizáveis (CSS):** defina `.yourClass { … }` na tabela Reutilizável e atribua a classe aos itens — as regras permanecem no mesmo pacote CSS interno; você **não** precisa adicionar `#SF-…` na caixa. A classe aparece no **`li`**.

Não **envolva** o conteúdo em uma `<style>` tag na caixa — apenas CSS simples.

***

### Demonstração detalhada: um ramo de três níveis (ícone, imagem, nome, descrição)

Rótulos de exemplo: **Loja** (nível 1: **ícone** + nome + descrição) → **Roupas** (nível 2: **imagem** + nome) → **Camisetas** (nível 3: **ícone** + nome + descrição). Isso mostra **ambos os tipos de mídia** e **descrição**.

Todo o menu está em um bloco:

````html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` é o **id de incorporação** do menu — visível no painel do Navi+ (o crachá azul ao lado do título do menu) e no DevTools na página ao vivo.

#### Ordem dentro de cada `div.inner` (tempo de execução)

1. **`span.arrow`** — seta (submenu / móvel, depende do tipo de menu).
2. *(Opcional)* **`span.cart_count`** — apenas quando o item usa o crachá do carrinho com contagem.
3. **Mídia — um dos:**
   * **Ícone (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Imagem:** `div.image-border` → `span.image-box` → `span.image` → `img`\
     \&#xNAN;*Nota:* se o item **tiver uma imagem**, o aplicativo **mostra a imagem** e não renderiza o ícone para essa linha.
4. **`div.info`** → **`div.flexcol`** → **`span.name`** (rótulo) → **`div.description`** *(apenas se você preencher a descrição no editor)*.
5. *(Opcional / SEO)* ícone ou imagem podem ser envoltos em **`a[href]`** — você pode ver `<a>…</a>` ao redor de `span.icon` ou o bloco de imagem no DevTools.

#### Classes `li` explicadas

| Classe                             | Significado                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | Profundidade deste item                                             |
| `is-parent-top`                   | Item de nível 1 que tem filhos                                 |
| `is-parent`                       | Item de nível 2+ que tem filhos                                |
| `data-name="…"`                   | Rótulo do item (atributo, útil para seletores CSS `[data-name]`) |

#### Demonstração HTML completa (classes ilustrativas / URLs)

````html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Loja">
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
            <span class="name">Loja</span>
            <div class="description">Navegue por todas as categorias</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Roupas">
          <!-- NÍVEL 2: imagem + nome (sem descrição) -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- IMAGEM: quando definida, o ícone não é renderizado -->
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
                <span class="name">Roupas</span>
                <!-- sem .description se a descrição estiver vazia no editor -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="Camisetas">
              <!-- NÍVEL 3: ícone + nome + descrição -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">Camisetas</span>
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

**Ícone apenas (sem imagem):**

````html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**Imagem apenas (URL da imagem definida no item):**

````html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### Exemplos de seletores para CSS Personalizado (na caixa do Navi+ — não digite `#SF-…`)

````css
/* Seta */
.inner-level1 .arrow { }

/* Ícone (qualquer nível) */
.inner-level2 .icon i { font-size: 20px; }

/* Imagem */
.inner-level2 .image img { border-radius: 8px; }

/* Título e descrição */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }

/* Alvo pelo nome do item */
[data-name="Loja"] .name { color: red; }
```

**Lembre-se:** submenus de nível 2 / 3 estão **dentro** do **`li`** pai, **depois** do `div.inner` do pai — não como filhos diretos de `ul.navigation`.

**Mesma ramificação, diagrama de texto:**

```
Loja              ← nível 1 (barra principal)
  └─ Roupas     ← nível 2 (primeiro submenu)
        └─ Camisetas ← nível 3 (submenu aninhado)
```

***

### Referência rápida (classes sugeridas)

| Nível | Linha (`li`) | Wrapper de conteúdo | Próximo submenu                        |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1     | `level-1`  | `.inner-level1` | `ul.children[menulevel="2"]`        |
| 2     | `level-2`  | `.inner-level2` | `ul.children[menulevel="3"]` se houver |
| 3     | `level-3`  | `.inner-level3` | —                                   |

`menulevel="2"` / `"3"` é o índice do painel **daquele** submenu — não é o mesmo que `level-1` em um item de nível superior.

***

### Dicas rápidas

* Alvo **uma profundidade** com `.inner-level1`, `.inner-level2`, `.inner-level3` em vez de apenas `.inner`.
* Estilize um **painel inteiro** (fundo, raio): `ul.children[menulevel="2"]` ou `[menulevel="3"]`.
* Texto: `.info` → `.flexcol` → `.name`, `.description`.
* Ícone: `.icon` ou `.icon i` — imagem: `.image-border`, `.image img` (veja a demonstração detalhada acima).
* Seta: `.arrow` (geralmente primeiro dentro de `.inner`).
* Alvo um item específico pelo nome: `[data-name="Home"] .name { … }`.

***

### Classes faltando na loja?

Limpe o cache do tema, republice o menu ou verifique a versão do script. Use o DevTools para confirmar os nomes das classes na página ao vivo.

***

Documentação de suporte — **Navi+**
