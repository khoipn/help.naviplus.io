---
description: Todos os tipos de links suportados pelo Navi+ — páginas internas, URLs externas, âncoras, abrir painéis, telefone/email, apps de chat, compartilhar e JavaScript.
layout: default
permalink: /pt-br/docs/menu-items/item-link-types/
title: Tipos de link
---
# Tipos de link

O campo **Link para** nas informações básicas controla o que acontece quando um visitante toca ou clica em um item. O Navi+ suporta muitos tipos de links além de uma URL simples.

Quando você clica no campo Link para, um popup de ajuda abre automaticamente com exemplos completos. Você também pode digitar diretamente no campo.

---

## 1. Páginas internas da loja

Use caminhos curtos (sem domínio) para páginas dentro da sua loja Shopify.

| Destino | Inserir |
|---|---|
| Página inicial | *(deixar vazio)* |
| Todos os produtos | `collections/all` |
| Uma coleção | `collections/collection-handle` |
| Página de produto | `products/product-handle` |
| Página estática | `pages/page-handle` |
| Blog | `blogs/news` |
| Post do blog | `blogs/news/post-handle` |
| Carrinho | `cart` |
| Busca | `search` |
| Contato | `pages/contact` |

**Dica Auto Clean:** Cole uma URL completa → ative **Auto clean** → o sistema remove o domínio e mantém apenas o caminho.

---

## 2. URL completa (externo)

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. Abrir em nova aba

Adicione `@new` a qualquer link.

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. Sem navegação (item pai)

```
#
```

---

## 5. Rolagem (âncora)

| Ação | Sintaxe |
|---|---|
| Rolar para o topo | `scroll:Top` |
| Topo com 100px de deslocamento | `scroll:Top(100)` |
| Rolar para o rodapé | `scroll:Bottom` |
| Para seção por seletor CSS | `scroll:OnPage(#section-id)` *(Business / Elite)* |

---

## 6. Abrir painel / popup *(Business / Elite)*

| Ação | Sintaxe |
|---|---|
| Abrir menu Slide Navi+ | `open:NaviMenu(SF-XXXXXXXXXX)` |
| Clicar elemento CSS | `open:clickTo(#cart-button)` |
| Focar campo de entrada | `open:focusTo(.search-input)` |
| Busca / gaveta do carrinho do tema | Popup de ajuda → *Abrir painéis* |
| Shopify Inbox | Popup de ajuda → *Abrir outros apps* |

---

## 7. Telefone, SMS, Email

| Ação | Sintaxe |
|---|---|
| Ligação | `tel:+5511999999999` |
| SMS | `sms:+5511999999999?body=Olá` |
| Email | `mailto:ola@seudominio.com.br` |

---

## 8. Apps de chat

| App | Sintaxe |
|---|---|
| WhatsApp | `https://wa.me/5511999999999` |
| Messenger | `https://m.me/SuaPágina` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/seu-código` |

---

## 9. Compartilhar

| Ação | Sintaxe |
|---|---|
| Compartilhar página atual | `open:ShareMe` |
| Copiar URL | `share:CopyUrl` |
| Facebook | `share:Facebook` |
| Twitter / X | `share:Tweet` |

---

## 10. JavaScript

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. Trocar idioma

```
open:ChangeLanguage(pt-br)
open:ChangeLanguage(en)
open:ChangeLanguage()
```
