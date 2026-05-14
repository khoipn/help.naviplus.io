---
description: Tutti i tipi di collegamenti supportati da Navi+ — pagine interne, URL esterni, ancore, pannelli aperti, telefono/email, app di chat, condivisione e JavaScript.
lang: it
layout: default
permalink: /it/docs/menu-items/item-link-types/
title: Tipi di collegamenti
---
# Tipi di collegamenti

Il campo **Collegamento a** nelle Informazioni di base controlla cosa succede quando un visitatore tocca o clicca su un elemento. Navi+ supporta molti tipi di collegamenti oltre a un semplice URL.

Quando clicchi sul campo Collegamento a, si apre automaticamente un popup di aiuto con esempi completi. Puoi anche digitare direttamente nel campo.

---

## 1. Pagine interne del negozio

Usa percorsi brevi (senza dominio) per collegarti a pagine all'interno del tuo negozio Shopify.

| Destinazione | Inserisci |
|---|---|
| Home page | *(lascia vuoto)* |
| Tutti i prodotti | `collections/all` |
| Una collezione | `collections/collection-handle` |
| Una pagina prodotto | `products/product-handle` |
| Una pagina statica (Chi siamo, FAQ…) | `pages/page-handle` |
| Elenco blog | `blogs/news` |
| Un post del blog | `blogs/news/post-handle` |
| Carrello | `cart` |
| Ricerca | `search` |
| Contatto | `pages/contact` |

**Suggerimento Auto Clean:** Incolla un URL completo (es. `https://mystore.com/collections/sale`) → attiva l'interruttore **Auto clean** → il sistema rimuove il dominio e mantiene solo `collections/sale`.

---

## 2. URL completo (Collegamento esterno)

Collegati a qualsiasi sito web utilizzando un URL completo.

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. Apri in una nuova scheda

Aggiungi `@new` a qualsiasi collegamento per aprirlo in una nuova scheda.

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. Nessuna navigazione (elemento genitore)

Usa `#` quando un elemento è un genitore che contiene elementi figli — toccarlo espande i figli senza navigare da nessuna parte.

```
#
```

---

## 5. Scorrimento (Ancora)

| Azione | Sintassi |
|---|---|
| Scorri in alto | `scroll:Top` |
| Scorri in alto con offset di 100px | `scroll:Top(100)` |
| Scorri in basso | `scroll:Bottom` |
| Scorri a una sezione tramite selettore CSS | `scroll:OnPage(#section-id)` *(Business / Elite)* |

**Esempio:** Un pulsante "Torna su" → Collegamento a è `scroll:Top`.

---

## 6. Apri pannello / popup *(Business / Elite)*

Apri componenti UI del tema senza lasciare la pagina.

| Azione | Sintassi |
|---|---|
| Apri un menu Slide di Navi+ | `open:NaviMenu(SF-XXXXXXXXXX)` |
| Clicca su un elemento CSS | `open:clickTo(#cart-button)` |
| Focalizza un campo di input | `open:focusTo(.search-input)` |
| Apri la ricerca del tema / cassetto del carrello | Usa il popup di aiuto → *Apri pannelli* |
| Apri la chat di Shopify Inbox | Usa il popup di aiuto → *Apri altre applicazioni* |

`open:clickTo` e `open:focusTo` accettano `Down` o `Up` per scorrere prima di agire:  
`open:clickTo(.footer-element, Down)`

---

## 7. Telefono, SMS, Email

| Azione | Sintassi |
|---|---|
| Chiamata telefonica | `tel:+12125550100` |
| SMS | `sms:+12125550100?body=Hello` |
| Email | `mailto:hello@yourdomain.com` |

---

## 8. App di chat

| App | Sintassi |
|---|---|
| WhatsApp | `https://wa.me/12125550100` *(senza prefisso +)* |
| Messenger | `https://m.me/YourPageName` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/your-line-code` |

---

## 9. Condividi

| Azione | Sintassi |
|---|---|
| Condividi la pagina corrente (dialogo di condivisione nativo) | `open:ShareMe` |
| Copia URL negli appunti | `share:CopyUrl` |
| Condividi su Facebook | `share:Facebook` |
| Condividi su Twitter / X | `share:Tweet` |

---

## 10. Chiama JavaScript

Chiama qualsiasi funzione JavaScript definita sulla pagina.

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. Cambia lingua

```
open:ChangeLanguage(fr)    ← cambia in francese
open:ChangeLanguage(vi)    ← cambia in vietnamita
open:ChangeLanguage()      ← ripristina alla lingua predefinita
```
