---
description: Todos os tipos de link suportados pelo Navi+ — páginas internas, URLs externas, âncoras, painéis abertos, telefone/e-mail, aplicativos de chat, compartilhamento e JavaScript.
lang: pt-br
layout: default
permalink: /pt-br/docs/menu-items/item-link-types/
title: Tipos de Link
---
# Tipos de Link

O campo **Link Para** em Informações Básicas controla o que acontece quando um visitante toca ou clica em um item. O Navi+ suporta muitos tipos de link além de uma URL simples.

Quando você clica no campo Link Para, um popup de ajuda se abre automaticamente com exemplos completos. Você também pode digitar diretamente no campo.

---

## 1. Páginas internas da loja

Use caminhos curtos (sem domínio) para vincular a páginas dentro da sua loja Shopify.

| Destino | Inserir |
|---|---|
| Página inicial | *(deixe vazio)* |
| Todos os produtos | `collections/all` |
| Uma coleção | `collections/collection-handle` |
| Uma página de produto | `products/product-handle` |
| Uma página estática (Sobre, FAQ…) | `pages/page-handle` |
| Listagem de blog | `blogs/news` |
| Uma postagem de blog | `blogs/news/post-handle` |
| Carrinho | `cart` |
| Pesquisa | `search` |
| Contato | `pages/contact` |

**Dica de Limpeza Automática:** Cole uma URL completa (por exemplo, `https://mystore.com/collections/sale`) → ative o toggle **Limpeza automática** → o sistema remove o domínio e mantém apenas `collections/sale`.

---

## 2. URL completa (Link externo)

Vincule a qualquer site usando uma URL completa.

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. Abrir em nova aba

Anexe `@new` a qualquer link para abri-lo em uma nova aba.

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. Sem navegação (item pai)

Use `#` quando um item é um pai que contém itens filhos — tocá-lo expande os filhos sem navegar para lugar nenhum.

```
#
```

---

## 5. Rolagem (Âncora)

| Ação | Sintaxe |
|---|---|
| Rolagem para o topo | `scroll:Top` |
| Rolagem para o topo com 100px de offset | `scroll:Top(100)` |
| Rolagem para o fundo | `scroll:Bottom` |
| Rolagem para uma seção por seletor CSS | `scroll:OnPage(#section-id)` *(Business / Elite)* |

**Exemplo:** Um botão "Voltar ao topo" → Link Para é `scroll:Top`.

---

## 6. Abrir painel / popup *(Business / Elite)*

Abra componentes de UI do tema sem sair da página.

| Ação | Sintaxe |
|---|---|
| Abrir um menu Slide do Navi+ | `open:NaviMenu(SF-XXXXXXXXXX)` |
| Clicar em um elemento CSS | `open:clickTo(#cart-button)` |
| Focar em um campo de entrada | `open:focusTo(.search-input)` |
| Abrir pesquisa do tema / gaveta do carrinho | Use o popup de ajuda → *Abrir painéis* |
| Abrir chat do Shopify Inbox | Use o popup de ajuda → *Abrir outros aplicativos* |

`open:clickTo` e `open:focusTo` aceitam `Down` ou `Up` para rolar antes de agir:  
`open:clickTo(.footer-element, Down)`

---

## 7. Telefone, SMS, E-mail

| Ação | Sintaxe |
|---|---|
| Chamada telefônica | `tel:+12125550100` |
| SMS | `sms:+12125550100?body=Hello` |
| E-mail | `mailto:hello@yourdomain.com` |

---

## 8. Aplicativos de chat

| App | Sintaxe |
|---|---|
| WhatsApp | `https://wa.me/12125550100` *(sem prefixo +)* |
| Messenger | `https://m.me/YourPageName` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/your-line-code` |

---

## 9. Compartilhar

| Ação | Sintaxe |
|---|---|
| Compartilhar página atual (diálogo de compartilhamento nativo) | `open:ShareMe` |
| Copiar URL para a área de transferência | `share:CopyUrl` |
| Compartilhar no Facebook | `share:Facebook` |
| Compartilhar no Twitter / X | `share:Tweet` |

---

## 10. Chamar JavaScript

Chame qualquer função JavaScript definida na página.

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. Mudar idioma

```
open:ChangeLanguage(fr)    ← mudar para francês
open:ChangeLanguage(vi)    ← mudar para vietnamita
open:ChangeLanguage()      ← redefinir para o idioma padrão
```
