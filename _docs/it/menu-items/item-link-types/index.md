---
description: Tutti i tipi di link supportati da Navi+ — pagine interne, URL esterne, ancore, aprire pannelli, telefono/email, app di chat, condivisione e JavaScript.
layout: default
permalink: /it/docs/menu-items/item-link-types/
title: Tipi di link
---
# Tipi di link

Il campo **Collegamento a** nelle informazioni di base controlla cosa accade quando un visitatore tocca o clicca su un elemento. Navi+ supporta molti tipi di link oltre a un semplice URL.

Quando clicchi sul campo Collegamento a, si apre automaticamente un popup di aiuto con esempi completi. Puoi anche digitare direttamente nel campo.

---

## 1. Pagine interne del negozio

Usa percorsi brevi (senza dominio) per pagine nel tuo store Shopify.

| Destinazione | Inserisci |
|---|---|
| Homepage | *(lasciare vuoto)* |
| Tutti i prodotti | `collections/all` |
| Una collezione | `collections/collection-handle` |
| Una pagina prodotto | `products/product-handle` |
| Pagina statica | `pages/page-handle` |
| Blog | `blogs/news` |
| Articolo blog | `blogs/news/post-handle` |
| Carrello | `cart` |
| Ricerca | `search` |
| Contatti | `pages/contact` |

**Suggerimento Auto Clean:** Incolla un URL completo → attiva **Auto clean** → il sistema rimuove il dominio e mantiene solo il percorso.

---

## 2. URL completo (esterno)

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. Apri in nuova scheda

Aggiungi `@new` a qualsiasi link.

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. Nessuna navigazione (elemento padre)

```
#
```

---

## 5. Scorrimento (Ancora)

| Azione | Sintassi |
|---|---|
| Scorri in alto | `scroll:Top` |
| In alto con offset 100px | `scroll:Top(100)` |
| Scorri in basso | `scroll:Bottom` |
| A sezione CSS | `scroll:OnPage(#section-id)` *(Business / Elite)* |

---

## 6. Apri pannello / popup *(Business / Elite)*

| Azione | Sintassi |
|---|---|
| Apri menu Slide Navi+ | `open:NaviMenu(SF-XXXXXXXXXX)` |
| Clicca elemento CSS | `open:clickTo(#cart-button)` |
| Focus su campo input | `open:focusTo(.search-input)` |
| Ricerca / cassetto carrello | Popup aiuto → *Apri pannelli* |
| Shopify Inbox | Popup aiuto → *Apri altre app* |

---

## 7. Telefono, SMS, Email

| Azione | Sintassi |
|---|---|
| Chiamata | `tel:+390212345678` |
| SMS | `sms:+390212345678?body=Ciao` |
| Email | `mailto:ciao@tuodominio.it` |

---

## 8. App di chat

| App | Sintassi |
|---|---|
| WhatsApp | `https://wa.me/390212345678` |
| Messenger | `https://m.me/TuaPagina` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/tuo-codice` |

---

## 9. Condividi

| Azione | Sintassi |
|---|---|
| Condividi pagina corrente | `open:ShareMe` |
| Copia URL | `share:CopyUrl` |
| Facebook | `share:Facebook` |
| Twitter / X | `share:Tweet` |

---

## 10. JavaScript

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. Cambia lingua

```
open:ChangeLanguage(it)
open:ChangeLanguage(en)
open:ChangeLanguage()
```
